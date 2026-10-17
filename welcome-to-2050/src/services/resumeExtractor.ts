/**
 * ATS Resume Text Extraction Service
 * Supports PDF (via pdfjs-dist) and DOCX (via mammoth)
 * 100% in-browser, privacy-first, zero server upload.
 */

import * as pdfjsLib from 'pdfjs-dist';
import mammoth from 'mammoth';

// Configure pdfjs-dist worker to use local bundled Vite worker (with CDN fallback)
try {
  // @ts-ignore
  if (!pdfjsLib.GlobalWorkerOptions.workerSrc) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
      'pdfjs-dist/build/pdf.worker.min.mjs',
      import.meta.url
    ).toString();
  }
} catch {
  try {
    // @ts-ignore
    pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;
  } catch {
    // fallback will proceed
  }
}

export interface ExtractionResult {
  text: string;
  wordCount: number;
  fileName: string;
  fileSize: number;
  fileType: 'pdf' | 'docx' | 'unknown';
  error?: string;
  isScannedOrImageOnly?: boolean;
}

/**
 * Validate upload file size and type
 */
export const validateResumeFile = (file: File, maxMb: number = 5): { isValid: boolean; error?: string } => {
  if (!file) {
    return { isValid: false, error: 'Please choose a resume file to upload.' };
  }

  const maxBytes = maxMb * 1024 * 1024;
  if (file.size > maxBytes) {
    return {
      isValid: false,
      error: `File size exceeds ${maxMb} MB limit (${(file.size / (1024 * 1024)).toFixed(1)} MB). Please upload a smaller file.`,
    };
  }

  if (file.size === 0) {
    return { isValid: false, error: 'The uploaded file is empty (0 bytes). Please upload a valid resume.' };
  }

  const name = file.name.toLowerCase();
  const isPdf = name.endsWith('.pdf') || file.type === 'application/pdf';
  const isDocx = name.endsWith('.docx') || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';

  if (!isPdf && !isDocx) {
    return {
      isValid: false,
      error: 'Unsupported file format. Please upload a PDF (.pdf) or Word document (.docx).',
    };
  }

  return { isValid: true };
};

/**
 * Extract clean text from PDF
 */
const extractTextFromPdf = async (file: File): Promise<ExtractionResult> => {
  const arrayBuffer = await file.arrayBuffer();
  const loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(arrayBuffer) });
  const pdfDoc = await loadingTask.promise;

  let fullText = '';
  const numPages = pdfDoc.numPages;

  for (let i = 1; i <= numPages; i++) {
    const page = await pdfDoc.getPage(i);
    const content = await page.getTextContent();
    const strings = content.items
      .map((item: any) => ('str' in item ? item.str : ''))
      .filter((s: string) => s.trim().length > 0);
    fullText += strings.join(' ') + '\n';
  }

  const cleanText = fullText.trim();
  const words = cleanText ? cleanText.split(/\s+/).filter(Boolean).length : 0;

  if (words < 20) {
    return {
      text: cleanText,
      wordCount: words,
      fileName: file.name,
      fileSize: file.size,
      fileType: 'pdf',
      isScannedOrImageOnly: true,
      error:
        'This PDF appears to be a scanned image or has unreadable text. Please upload a searchable, text-based PDF or DOCX file.',
    };
  }

  return {
    text: cleanText,
    wordCount: words,
    fileName: file.name,
    fileSize: file.size,
    fileType: 'pdf',
  };
};

/**
 * Extract clean text from DOCX
 */
const extractTextFromDocx = async (file: File): Promise<ExtractionResult> => {
  const arrayBuffer = await file.arrayBuffer();
  const result = await mammoth.extractRawText({ arrayBuffer });
  const rawText = result.value || '';
  const cleanText = rawText.trim();
  const words = cleanText ? cleanText.split(/\s+/).filter(Boolean).length : 0;

  if (words < 20) {
    return {
      text: cleanText,
      wordCount: words,
      fileName: file.name,
      fileSize: file.size,
      fileType: 'docx',
      isScannedOrImageOnly: true,
      error: 'We could not detect sufficient text in this DOCX file. Please verify it contains text content.',
    };
  }

  return {
    text: cleanText,
    wordCount: words,
    fileName: file.name,
    fileSize: file.size,
    fileType: 'docx',
  };
};

/**
 * Main parser entry point
 */
export const extractResumeText = async (file: File): Promise<ExtractionResult> => {
  const validation = validateResumeFile(file);
  if (!validation.isValid) {
    return {
      text: '',
      wordCount: 0,
      fileName: file.name,
      fileSize: file.size,
      fileType: 'unknown',
      error: validation.error,
    };
  }

  const name = file.name.toLowerCase();
  try {
    if (name.endsWith('.pdf')) {
      return await extractTextFromPdf(file);
    } else if (name.endsWith('.docx')) {
      return await extractTextFromDocx(file);
    } else {
      return {
        text: '',
        wordCount: 0,
        fileName: file.name,
        fileSize: file.size,
        fileType: 'unknown',
        error: 'Unsupported file type. Please upload a .pdf or .docx file.',
      };
    }
  } catch (err: any) {
    return {
      text: '',
      wordCount: 0,
      fileName: file.name,
      fileSize: file.size,
      fileType: name.endsWith('.pdf') ? 'pdf' : 'docx',
      error: `Could not parse file: ${err?.message || 'Unknown extraction error'}. Please try a standard text-based PDF or DOCX.`,
    };
  }
};
