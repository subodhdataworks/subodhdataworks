/**
 * Speech Transliteration Utility for Future AI Visual Hints
 * 
 * Provides smart Hindi phonetic transliteration (Hinglish) when running in browsers/operating systems
 * (such as standard Windows) that do not have a native Devanagari Hindi TTS voice installed.
 * 
 * When a native Hindi voice (hi / hi-IN) is available, original Devanagari Hindi text is preserved.
 * When only Indian English (en-IN, e.g. Microsoft Ravi / Heera) or English voices exist,
 * text is transliterated into natural Indian-accented Hinglish phonetics so the voice is loud, clear,
 * and perfectly audible without silence or dropped words.
 */

// Common Hindi words mapped to clean English phonetics for Indian TTS
const WORD_MAP: Record<string, string> = {
  'यहाँ': 'Yahan',
  'यहा': 'Yahan',
  'यहाँ पर': 'Yahan par',
  'नमस्ते': 'Namaste',
  'डिब्बे': 'dibbe',
  'डिब्बा': 'dibba',
  'इंटीजर': 'integer',
  'फ्लोट': 'float',
  'बूलियन': 'boolean',
  'दशमलव': 'dashamlav',
  'असाइन': 'assign',
  'असाइनमेंट': 'assignment',
  'बराबर': 'barabar',
  'स्कोर': 'score',
  'पुरानी': 'purani',
  'बदल': 'badal',
  'प्रकार': 'types',
  'स्थिति': 'state',
  'तार्किक': 'logical',
  'घबराने': 'ghabrane',
  'शुरुआत': 'shuruat',
  'मान लीजिए': 'Maan lijiye',
  'निर्देश': 'nirdesh',
  'मदद': 'madad',
  'सीखेंगे': 'seekhenge',
  'संबंधित': 'sambandhit',
  'हिस्सों': 'hisson',
  'चलाएगा': 'chalayega',
  'जगह': 'jagah',
  'लिखिए': 'likhiye',
  'प्रोग्राम': 'program',
  'चलाइए': 'chalaiye',
  'राहुल': 'Rahul',
  'शाबाश': 'Shabash',
  'पहले से मौजूद': 'built-in',
  'गोल': 'round',
  'संदेश': 'sandesh',
  'डबल कोट्स': 'double quotes',
  'चिह्न': 'marks',
  'उद्धरण चिह्न': 'quotation marks',
  'बहुत बढ़िया': 'Bahut badhiya',
  'हम': 'Hum',
  'हमने': 'Humne',
  'फ़ंक्शन': 'function',
  'फंक्शन': 'function',
  'फ़ंक्शंस': 'functions',
  'फंक्शंस': 'functions',
  'उपयोग': 'use',
  'इस्तेमाल': 'istemal',
  'किया': 'kiya',
  'गया': 'gaya',
  'गई': 'gayi',
  'गए': 'gaye',
  'है': 'hai',
  'हैं': 'hain',
  'होता': 'hota',
  'होती': 'hoti',
  'होते': 'hote',
  'पायथन': 'Python',
  'पाइथन': 'Python',
  'का': 'ka',
  'के': 'ke',
  'की': 'ki',
  'को': 'ko',
  'में': 'mein',
  'से': 'se',
  'पर': 'par',
  'एक': 'ek',
  'दो': 'do',
  'तीन': 'teen',
  'चार': 'chaar',
  'और': 'aur',
  'भी': 'bhi',
  'तो': 'to',
  'जो': 'jo',
  'यह': 'yeh',
  'वह': 'woh',
  'ये': 'ye',
  'वे': 'wo',
  'इस': 'is',
  'उस': 'us',
  'इसे': 'ise',
  'उसे': 'use',
  'इसके': 'iske',
  'उसके': 'uske',
  'इसकी': 'iski',
  'उसकी': 'uski',
  'इस प्रकार': 'Is tarah',
  'स्क्रीन': 'screen',
  'कंसोल': 'console',
  'दिखाता': 'dikhata',
  'दिखाती': 'dikhati',
  'दिखाई': 'dikhayi',
  'दिखाने': 'dikhane',
  'देता': 'deta',
  'देती': 'deti',
  'देते': 'dete',
  'लिखा': 'likha',
  'लिखे': 'likhe',
  'लिखी': 'likhi',
  'अंदर': 'andar',
  'बाहर': 'bahar',
  'ब्रैकेट्स': 'brackets',
  'ब्रैकेट': 'bracket',
  'कोष्ठक': 'brackets',
  'कोट्स': 'quotes',
  'डबल': 'double',
  'सिंगल': 'single',
  'स्ट्रिंग': 'string',
  'वैल्यू': 'value',
  'वेरिएबल': 'variable',
  'वेरिएबल्स': 'variables',
  'स्टेटमेंट': 'statement',
  'स्टेटमेंट्स': 'statements',
  'लाइन': 'line',
  'पंक्ति': 'line',
  'पंक्तियाँ': 'lines',
  'पंक्तियां': 'lines',
  'एक्ज़ीक्यूट': 'execute',
  'एक्जीक्यूट': 'execute',
  'एग्जीक्यूट': 'execute',
  'चलता': 'chalta',
  'चलती': 'chalti',
  'चलने': 'chalne',
  'चलाता': 'chalata',
  'चलाकर': 'chalakar',
  'पढ़ता': 'padhta',
  'पढ़ती': 'padhti',
  'पढ़कर': 'padhkar',
  'भेजता': 'bhejta',
  'भेजती': 'bhejti',
  'भेजकर': 'bhejkar',
  'सीधा': 'seedha',
  'सीधे': 'seedhe',
  'क्रम': 'sequence',
  'तैयारी': 'taiyari',
  'परिणाम': 'result',
  'आउटपुट': 'output',
  'साफ़': 'saaf',
  'साफ': 'saaf',
  'पूरा': 'poora',
  'पूरी': 'poori',
  'पूरे': 'poore',
  'शुरू': 'shuru',
  'अंत': 'ant',
  'समाप्त': 'samapt',
  'बदलता': 'badalta',
  'बदलती': 'badalti',
  'नई': 'nayi',
  'नया': 'naya',
  'नये': 'naye',
  'अगली': 'agli',
  'अगला': 'agla',
  'अगले': 'agle',
  'अलग': 'alag',
  'कैरेक्टर': 'character',
  'कैरेक्टर्स': 'characters',
  'स्पेस': 'space',
  'प्रिंट': 'print',
  'टेक्स्ट': 'text',
  'संख्या': 'number',
  'नंबर': 'number',
  'जोड़ता': 'jodta',
  'घटाता': 'ghatata',
  'बराबर': 'barabar',
  'मान': 'value',
  'अक्षर': 'letter',
  'शब्द': 'word',
  'शब्दों': 'shabdon',
  'सही': 'sahi',
  'गलत': 'galat',
  'सत्य': 'True',
  'असत्य': 'False',
  'खाली': 'khali',
  'रिक्त': 'khali',
  'न्यूलाइन': 'newline',
  'एस्केप': 'escape',
  'सीक्वेंस': 'sequence',
  'स्पेशल': 'special',
  'टूटकर': 'split hokar',
  'छपता': 'print hota',
  'छपती': 'print hoti',
  'पहला': 'pehla',
  'पहली': 'pehli',
  'दूसरा': 'doosra',
  'दूसरी': 'doosri',
  'तीसरा': 'teesra',
  'तीसरी': 'teesri',
  'सफलतापूर्वक': 'successfully',
  'समझने': 'samajhne',
  'समझते': 'samajhte',
  'आसानी': 'aasani',
  'आसान': 'aasan',
  'सीखना': 'seekhna',
};

// General Devanagari phonetic mapping for fallback
const CONSONANTS: Record<string, string> = {
  'क': 'k', 'ख': 'kh', 'ग': 'g', 'घ': 'gh', 'ङ': 'ng',
  'च': 'ch', 'छ': 'chh', 'ज': 'j', 'झ': 'jh', 'ञ': 'ny',
  'ट': 't', 'ठ': 'th', 'ड': 'd', 'ढ': 'dh', 'ण': 'n',
  'त': 't', 'थ': 'th', 'द': 'd', 'ध': 'dh', 'न': 'n',
  'प': 'p', 'फ': 'ph', 'ब': 'b', 'भ': 'bh', 'म': 'm',
  'य': 'y', 'र': 'r', 'ल': 'l', 'व': 'v', 'श': 'sh',
  'ष': 'sh', 'स': 's', 'ह': 'h',
  'ड़': 'd', 'ढ़': 'dh', 'फ़': 'f', 'ज़': 'z', 'क़': 'q', 'ख़': 'kh', 'ग़': 'gh'
};

const VOWELS: Record<string, string> = {
  'अ': 'a', 'आ': 'aa', 'इ': 'i', 'ई': 'ee', 'उ': 'u', 'ऊ': 'oo',
  'ऋ': 'ri', 'ए': 'e', 'ऐ': 'ai', 'ओ': 'o', 'औ': 'au',
  'अं': 'an', 'अः': 'ah'
};

const MATRAS: Record<string, string> = {
  'ा': 'a', 'ि': 'i', 'ी': 'ee', 'ु': 'u', 'ू': 'oo',
  'ृ': 'ri', 'े': 'e', 'ै': 'ai', 'ो': 'o', 'ौ': 'au',
  'ं': 'n', 'ँ': 'n', 'ः': 'h', '्': ''
};

/**
 * Transliterates Hindi Devanagari text into natural phonetic Hinglish.
 * Used when no native Hindi TTS voice is installed on the user's operating system.
 */
export function toPhoneticHinglish(hindiText: string): string {
  if (!hindiText || typeof hindiText !== 'string') return '';

  // Replace punctuation first: Devanagari danda to standard period
  let text = hindiText
    .replace(/।/g, '.')
    .replace(/॥/g, '.')
    .replace(/\\n/g, ' backslash n ')
    .replace(/print\(\)/g, 'print function')
    .replace(/print\(\s*\)/g, 'print function');

  // Replace known multi-word / single-word phrases
  for (const [hi, eng] of Object.entries(WORD_MAP)) {
    const regex = new RegExp(hi, 'g');
    text = text.replace(regex, eng);
  }

  // Character-by-character phonetic transliteration for any remaining Devanagari
  let result = '';
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const nextCh = text[i + 1] || '';

    if (VOWELS[ch]) {
      result += VOWELS[ch];
    } else if (CONSONANTS[ch]) {
      const base = CONSONANTS[ch];
      if (MATRAS[nextCh] !== undefined) {
        result += base + MATRAS[nextCh];
        i++; // skip matra
      } else if (nextCh === '्') {
        result += base;
        i++; // halant suppresses inherent 'a'
      } else {
        // Inherent 'a' if followed by consonant
        if (CONSONANTS[nextCh]) {
          result += base + 'a';
        } else {
          result += base;
        }
      }
    } else if (MATRAS[ch] !== undefined) {
      result += MATRAS[ch];
    } else {
      result += ch;
    }
  }

  return result.replace(/\s+/g, ' ').trim();
}

/**
 * Finds the optimal voice and prepares speech text.
 * If a native Hindi voice is present, returns { voice, text: originalHindiText }.
 * If only Indian English / English voices are present, returns { voice, text: hinglishText }.
 */
export function getOptimizedSpeechConfig(
  requestedLang: 'hi' | 'en',
  speechText: string,
  voices: SpeechSynthesisVoice[]
): { voice: SpeechSynthesisVoice | null; processedText: string; voiceLang: string } {
  if (!voices || voices.length === 0) {
    return {
      voice: null,
      processedText: requestedLang === 'hi' ? toPhoneticHinglish(speechText) : speechText,
      voiceLang: requestedLang === 'hi' ? 'en-IN' : 'en-US'
    };
  }

  if (requestedLang === 'hi') {
    // Known Indian Female voices across Windows, Edge, Android, Chrome, Apple iOS/macOS
    const indianFemaleNames = [
      'swara',     // Microsoft Swara Online (Natural) - Hindi (India) [Female]
      'kalpana',   // Microsoft Kalpana - Hindi (India) [Female]
      'heera',     // Microsoft Heera - English (India) [Female]
      'neerja',    // Microsoft Neerja Online (Natural) - English (India) [Female]
      'ananya',    // Microsoft Ananya Online (Natural) - Hindi (India) [Female]
      'lekha',     // Apple Lekha - Hindi (India) [Female]
      'veena',     // Apple Veena - English (India) [Female]
      'kavya',     // Kavya - Hindi/Indian [Female]
      'aditi',     // Aditi - Hindi/Indian [Female]
      'sangeeta',  // Sangeeta - Indian [Female]
      'shruti',    // Microsoft Shruti [Female]
      'pooja',
      'priya',
    ];

    // Explicit male voices to avoid/deprioritize for female teacher role
    const maleNames = ['hemant', 'ravi', 'prabhat', 'madhur', 'rishi', 'david', 'mark', 'george', 'james', 'male'];

    // 1. First priority: High-Quality Native Hindi Female Voice (Swara, Kalpana, Ananya, Lekha, etc.)
    const nativeHindiFemaleVoice = voices.find((v) => {
      const name = v.name.toLowerCase();
      const lang = v.lang.toLowerCase();
      const isHindi = lang.startsWith('hi') || name.includes('hindi');
      const isFemale = indianFemaleNames.some((f) => name.includes(f)) || (name.includes('female') && !maleNames.some((m) => name.includes(m)));
      return isHindi && isFemale;
    });

    if (nativeHindiFemaleVoice) {
      return {
        voice: nativeHindiFemaleVoice,
        processedText: speechText.replace(/\\n/g, ' backslash n '),
        voiceLang: nativeHindiFemaleVoice.lang
      };
    }

    // 1b. Any Native Hindi voice that is not explicitly male
    const anyHindiNonMale = voices.find((v) => {
      const name = v.name.toLowerCase();
      const lang = v.lang.toLowerCase();
      const isHindi = lang.startsWith('hi') || name.includes('hindi');
      const isMale = maleNames.some((m) => name.includes(m));
      return isHindi && !isMale;
    });

    if (anyHindiNonMale) {
      return {
        voice: anyHindiNonMale,
        processedText: speechText.replace(/\\n/g, ' backslash n '),
        voiceLang: anyHindiNonMale.lang
      };
    }

    // 2. Second priority: High-Quality Indian English / Hinglish Female Voice (Microsoft Heera, Neerja, Veena, etc.)
    const indianEnglishFemaleVoice = voices.find((v) => {
      const name = v.name.toLowerCase();
      const lang = v.lang.toLowerCase();
      const isIndian = lang.startsWith('en-in') || name.includes('india');
      const isFemale = indianFemaleNames.some((f) => name.includes(f)) || (name.includes('female') && !maleNames.some((m) => name.includes(m)));
      return isIndian && isFemale;
    });

    if (indianEnglishFemaleVoice) {
      return {
        voice: indianEnglishFemaleVoice,
        processedText: toPhoneticHinglish(speechText),
        voiceLang: indianEnglishFemaleVoice.lang
      };
    }

    // 2b. Any Indian English voice that is not explicitly male (e.g. en-in-x-end female network)
    const anyIndianNonMale = voices.find((v) => {
      const name = v.name.toLowerCase();
      const lang = v.lang.toLowerCase();
      const isIndian = lang.startsWith('en-in') || name.includes('india');
      const isMale = maleNames.some((m) => name.includes(m));
      return isIndian && !isMale;
    });

    if (anyIndianNonMale) {
      return {
        voice: anyIndianNonMale,
        processedText: toPhoneticHinglish(speechText),
        voiceLang: anyIndianNonMale.lang
      };
    }

    // 3. Fallback to any natural female voice (e.g. Microsoft Zira, Google UK Female, Samantha)
    const genericFemaleVoice = voices.find((v) => {
      const name = v.name.toLowerCase();
      const isFemale = name.includes('zira') || name.includes('samantha') || name.includes('female') || name.includes('natural');
      const isMale = maleNames.some((m) => name.includes(m));
      return isFemale && !isMale;
    });

    if (genericFemaleVoice) {
      return {
        voice: genericFemaleVoice,
        processedText: toPhoneticHinglish(speechText),
        voiceLang: genericFemaleVoice.lang || 'en-US'
      };
    }

    // 4. Default system voice with phonetic Hinglish
    const defaultVoice = voices.find((v) => v.default) || voices[0];
    return {
      voice: defaultVoice,
      processedText: toPhoneticHinglish(speechText),
      voiceLang: defaultVoice.lang || 'en-US'
    };
  }

  // English requested:
  const englishVoice =
    voices.find((v) => v.lang.toLowerCase().startsWith('en-in')) ||
    voices.find((v) => v.lang.toLowerCase().startsWith('en')) ||
    voices.find((v) => v.default) ||
    voices[0];

  return {
    voice: englishVoice || null,
    processedText: speechText.replace(/\\n/g, ' backslash n '),
    voiceLang: englishVoice ? englishVoice.lang : 'en-US'
  };
}
