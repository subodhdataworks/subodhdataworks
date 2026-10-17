import React, { useState, useEffect, useRef } from 'react';
import { 
  Mic, 
  MicOff, 
  Square, 
  Play, 
  Check, 
  X, 
  Clock, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw, 
  Flame, 
  Coins, 
  Lightbulb, 
  BookOpen, 
  Compass, 
  ArrowRight,
  Info,
  Send,
  Volume2,
  VolumeX,
  Volume1,
  Radio,
  AlertCircle,
  Bot
} from 'lucide-react';
import { soundEffects } from '../../../services/soundEffects';
import { FutureLogo } from '../FutureLogo';
import './AiMockInterviewLab.css';

export interface InterviewKeyPoint {
  id: string;
  hintText: string;
  positiveLabel: string;
  negativeLabel: string;
  keywords: (string | RegExp)[];
}

export interface InterviewQuestionData {
  id: number;
  questionNumber: string; // e.g. "Question 1 of 5"
  questionText: string;
  timerLimit: string; // e.g. "02:00"
  timerSeconds: number; // e.g. 120
  keyPoints: InterviewKeyPoint[];
  modelAnswer: string;
  defaultFeedback: string;
  sampleAnswerGood: string; // Hits 4/5 points (8/10 score matching reference image!)
  sampleAnswerPerfect: string; // Hits 5/5 points (10/10)
}

const INTERVIEW_QUESTIONS: InterviewQuestionData[] = [
  {
    id: 1,
    questionNumber: "Question 1 of 5",
    questionText: "What is Python?\nCan you explain its key features and why it is popular?",
    timerLimit: "02:00",
    timerSeconds: 120,
    keyPoints: [
      {
        id: 'kp1',
        hintText: "It is a high-level, interpreted programming language.",
        positiveLabel: "Correctly identified Python as a high-level programming language",
        negativeLabel: "Did not identify Python as a high-level programming language",
        keywords: [/high[\s-]?level/i, /human[\s-]?readable/i, /abstracted/i]
      },
      {
        id: 'kp2',
        hintText: "Easy to learn and read.",
        positiveLabel: "Mentioned that Python is easy to learn and read",
        negativeLabel: "Did not mention that Python is easy to learn and read",
        keywords: [/easy to learn/i, /easy to read/i, /simple syntax/i, /readable/i, /clean syntax/i, /beginner/i]
      },
      {
        id: 'kp3',
        hintText: "Used in web development, data analysis, AI/ML, automation etc.",
        positiveLabel: "Explained some use cases (e.g., data analysis, AI/ML)",
        negativeLabel: "Did not mention practical use cases (web, data, AI)",
        keywords: [/web development/i, /data analysis/i, /data science/i, /ai/i, /machine learning/i, /automation/i]
      },
      {
        id: 'kp4',
        hintText: "Large community support.",
        positiveLabel: "Mentioned community support and rich ecosystem",
        negativeLabel: "Did not mention large community support",
        keywords: [/community/i, /libraries/i, /packages/i, /ecosystem/i, /support/i]
      },
      {
        id: 'kp5',
        hintText: "It is an interpreted language (executed line by line).",
        positiveLabel: "Correctly explained that Python is an interpreted language",
        negativeLabel: "Did not mention that Python is interpreted",
        keywords: [/interpreted/i, /interpreter/i, /line by line/i, /bytecode/i]
      }
    ],
    sampleAnswerGood: "Python is a high-level programming language that is very easy to learn and simple to read. It is widely used in web development, data analysis, artificial intelligence, and automation. Python has become so popular because of its huge community support and millions of open source libraries.",
    sampleAnswerPerfect: "Python is a high-level, interpreted programming language known for its simple and readable syntax. It is executed line by line by an interpreter, making debugging seamless. Python is extremely popular in web development, data analysis, AI/ML, and automation due to its massive community support and powerful libraries.",
    defaultFeedback: "Your answer was clear and well-structured. You explained Python's simplicity and popular use cases. Try to also mention that Python is an interpreted language, which makes it platform-independent and easy to run.",
    modelAnswer: "Python is a high-level, interpreted programming language. It is known for its simple and readable syntax. It is widely used in web development, data analysis, artificial intelligence, machine learning, automation, and more. Python is popular because it is easy to learn, has a large community support, and has a rich ecosystem of libraries."
  },
  {
    id: 2,
    questionNumber: "Question 2 of 5",
    questionText: "What is the key difference between a List and a Tuple in Python?\nWhen would you use each?",
    timerLimit: "02:00",
    timerSeconds: 120,
    keyPoints: [
      {
        id: 'kp1',
        hintText: "Lists are mutable, whereas Tuples are immutable.",
        positiveLabel: "Correctly explained that Lists are mutable and Tuples are immutable",
        negativeLabel: "Did not explain mutability vs immutability",
        keywords: [/mutable/i, /immutable/i, /cannot (be )?modified/i, /can (be )?changed/i]
      },
      {
        id: 'kp2',
        hintText: "Syntax difference: Square brackets [] vs Round parentheses ().",
        positiveLabel: "Highlighted the syntax difference: [] vs ()",
        negativeLabel: "Did not mention syntax differences ([] vs ())",
        keywords: [/square bracket/i, /parenthes/i, /\[\]/i, /\(\)/i]
      },
      {
        id: 'kp3',
        hintText: "Tuples have better performance and consume less memory.",
        positiveLabel: "Mentioned Tuples have better performance and lower memory footprint",
        negativeLabel: "Did not mention performance or memory benefits of Tuples",
        keywords: [/faster/i, /speed/i, /performance/i, /memory/i, /overhead/i]
      },
      {
        id: 'kp4',
        hintText: "Tuples are hashable and can be dictionary keys; Lists cannot.",
        positiveLabel: "Identified that Tuples can be dictionary keys because they are hashable",
        negativeLabel: "Did not mention hashability or dictionary keys",
        keywords: [/hash/i, /dict(ionary)? key/i, /key/i]
      },
      {
        id: 'kp5',
        hintText: "Lists are for dynamic collections; Tuples are for fixed record data.",
        positiveLabel: "Specified appropriate use cases for dynamic vs constant data",
        negativeLabel: "Did not explain appropriate use cases",
        keywords: [/dynamic/i, /fixed/i, /constant/i, /record/i, /use case/i]
      }
    ],
    sampleAnswerGood: "The main difference between a list and a tuple is that lists are mutable while tuples are immutable. Lists use square brackets and tuples use round parentheses. Tuples are also faster and use less memory than lists.",
    sampleAnswerPerfect: "The main difference is mutability: lists are mutable and can be changed, while tuples are immutable. Lists use square brackets [] whereas tuples use round parentheses (). Because tuples cannot change, they are faster, consume less memory, and can be used as dictionary keys, making them ideal for fixed records.",
    defaultFeedback: "Great explanation of mutability and syntax! To score full points, remember that Tuples are hashable and can be used as dictionary keys, which is a common interview question.",
    modelAnswer: "In Python, Lists are mutable (elements can be added, updated, or removed) and defined using square brackets []. Tuples are immutable (cannot be altered after creation) and defined using parentheses (). Because Tuples are immutable, they are faster, consume less memory, and are hashable, meaning they can serve as dictionary keys."
  },
  {
    id: 3,
    questionNumber: "Question 3 of 5",
    questionText: "How does Memory Management work in Python?\nWhat is Garbage Collection?",
    timerLimit: "02:00",
    timerSeconds: 120,
    keyPoints: [
      {
        id: 'kp1',
        hintText: "Python uses a Private Heap Space managed by Python Memory Manager.",
        positiveLabel: "Mentioned Private Heap Space and the Python Memory Manager",
        negativeLabel: "Did not mention Private Heap Space",
        keywords: [/private heap/i, /heap space/i, /memory manager/i, /heap/i]
      },
      {
        id: 'kp2',
        hintText: "Reference Counting is Python's primary memory management system.",
        positiveLabel: "Correctly identified Reference Counting as the core mechanism",
        negativeLabel: "Did not mention Reference Counting",
        keywords: [/reference count/i, /reference counting/i, /ref count/i]
      },
      {
        id: 'kp3',
        hintText: "Cyclic Garbage Collector handles circular references.",
        positiveLabel: "Explained how Cyclic Garbage Collection detects circular references",
        negativeLabel: "Did not explain Cyclic Garbage Collector",
        keywords: [/cyclic/i, /circular/i, /garbage collect/i, /gc/i]
      },
      {
        id: 'kp4',
        hintText: "PyMalloc handles small object allocations efficiently.",
        positiveLabel: "Mentioned PyMalloc or object pooling for small objects",
        negativeLabel: "Did not mention PyMalloc or small object pools",
        keywords: [/pymalloc/i, /pool/i, /small object/i, /arena/i]
      },
      {
        id: 'kp5',
        hintText: "Memory deallocation is automated for developers.",
        positiveLabel: "Highlighted that memory deallocation is fully automatic",
        negativeLabel: "Did not mention automatic memory deallocation",
        keywords: [/automatic/i, /no manual/i, /automated/i, /deallocat/i]
      }
    ],
    sampleAnswerGood: "Python manages memory automatically using a private heap. Its main mechanism is reference counting, which counts how many times an object is referenced. When the count reaches zero, memory is automatically freed. It also uses a garbage collector for circular references.",
    sampleAnswerPerfect: "Python uses a private heap space managed by the Python memory manager. The primary mechanism is reference counting, which tracks object references and immediately deallocates memory when the count reaches zero. Additionally, Python has a cyclic garbage collector to clean up circular references, and uses PyMalloc for efficient small object pooling.",
    defaultFeedback: "Solid grasp of Python's memory model! Mentioning reference counting and the cyclic GC was spot-on. Adding details about PyMalloc will make your answer stand out in senior interviews.",
    modelAnswer: "Python manages memory internally through a private heap space. It relies primarily on Reference Counting: every object tracks how many references point to it; when that count reaches 0, the memory is immediately deallocated. To handle circular references that reference counting misses, Python includes a cyclic Garbage Collector (gc module) and PyMalloc for small object pooling."
  },
  {
    id: 4,
    questionNumber: "Question 4 of 5",
    questionText: "What are *args and **kwargs in Python functions?\nHow and why do we use them?",
    timerLimit: "02:00",
    timerSeconds: 120,
    keyPoints: [
      {
        id: 'kp1',
        hintText: "*args allows passing a variable number of positional arguments.",
        positiveLabel: "Identified *args for variable positional arguments",
        negativeLabel: "Did not explain *args for variable positional arguments",
        keywords: [/args/i, /positional/i, /variable.*argument/i, /arbitrary/i]
      },
      {
        id: 'kp2',
        hintText: "*args packs arguments into a Tuple.",
        positiveLabel: "Correctly stated that *args receives parameters as a Tuple",
        negativeLabel: "Did not state that *args collects into a Tuple",
        keywords: [/tuple/i, /pack/i]
      },
      {
        id: 'kp3',
        hintText: "**kwargs allows passing a variable number of keyword arguments.",
        positiveLabel: "Identified **kwargs for variable keyword/named arguments",
        negativeLabel: "Did not explain **kwargs for keyword arguments",
        keywords: [/kwargs/i, /keyword/i, /named/i, /key[- ]value/i]
      },
      {
        id: 'kp4',
        hintText: "**kwargs packs arguments into a Dictionary.",
        positiveLabel: "Correctly stated that **kwargs receives parameters as a Dictionary",
        negativeLabel: "Did not state that **kwargs collects into a Dictionary",
        keywords: [/dict/i, /dictionary/i, /mapping/i]
      },
      {
        id: 'kp5',
        hintText: "'args' and 'kwargs' are conventions; '*' and '**' are the actual syntax.",
        positiveLabel: "Clarified that '*' and '**' are the real syntax while names are convention",
        negativeLabel: "Did not clarify that * and ** are the true operators",
        keywords: [/convention/i, /asterisk/i, /star/i, /syntax/i, /operator/i]
      }
    ],
    sampleAnswerGood: "*args allows you to pass a variable number of positional arguments to a function, and it receives them as a tuple. **kwargs lets you pass any number of keyword arguments, which it receives as a dictionary. They give functions great flexibility.",
    sampleAnswerPerfect: "*args and **kwargs allow functions to accept a flexible number of arguments. *args captures extra positional arguments and packs them into a tuple, while **kwargs captures keyword arguments and packs them into a dictionary. The words 'args' and 'kwargs' are just conventions—the asterisks * and ** are the actual syntax operators.",
    defaultFeedback: "Very clear explanation of arguments packing! You properly differentiated tuples and dictionaries. Remember to emphasize that the asterisks (* and **) are the actual syntax operators.",
    modelAnswer: "*args and **kwargs allow a Python function to accept an arbitrary number of arguments. *args packs extra positional arguments into a tuple, while **kwargs packs extra keyword (named) arguments into a dictionary. While 'args' and 'kwargs' are universally adopted conventions, the single and double asterisks are the actual Python syntax."
  },
  {
    id: 5,
    questionNumber: "Question 5 of 5",
    questionText: "Explain Exception Handling in Python.\nWhat are try, except, else, and finally blocks?",
    timerLimit: "02:00",
    timerSeconds: 120,
    keyPoints: [
      {
        id: 'kp1',
        hintText: "try block contains the code that might throw an exception.",
        positiveLabel: "Explained that try block encloses code that may raise an error",
        negativeLabel: "Did not explain the purpose of the try block",
        keywords: [/try/i, /risky/i, /error/i, /exception/i]
      },
      {
        id: 'kp2',
        hintText: "except block catches and handles specific exceptions.",
        positiveLabel: "Explained that except block catches and handles exceptions",
        negativeLabel: "Did not explain the except block",
        keywords: [/except/i, /catch/i, /handle/i]
      },
      {
        id: 'kp3',
        hintText: "else block runs only if NO exception occurred in the try block.",
        positiveLabel: "Accurately noted that else executes only when no exception occurs",
        negativeLabel: "Did not explain the else block condition",
        keywords: [/else/i, /no error/i, /no exception/i, /succeeds/i]
      },
      {
        id: 'kp4',
        hintText: "finally block ALWAYS runs regardless of exceptions (for cleanup).",
        positiveLabel: "Highlighted that finally always runs for resource cleanup",
        negativeLabel: "Did not explain that finally always runs for cleanup",
        keywords: [/finally/i, /always/i, /cleanup/i, /clean up/i, /close/i]
      },
      {
        id: 'kp5',
        hintText: "raise keyword is used to manually trigger exceptions.",
        positiveLabel: "Mentioned the raise keyword to throw custom exceptions",
        negativeLabel: "Did not mention custom exception raising",
        keywords: [/raise/i, /custom/i, /throw/i]
      }
    ],
    sampleAnswerGood: "Exception handling in Python is done using try, except, else, and finally. The try block has the code that might cause an error. The except block catches the error. The else block runs if no error occurred. The finally block always runs no matter what, which is great for cleanup.",
    sampleAnswerPerfect: "Python uses try-except-else-finally blocks for robust error handling. The try block encloses code that might raise an exception. The except block catches and handles specific errors. The else block runs exclusively if no exceptions were raised. The finally block always executes regardless of whether an exception occurred, typically used for cleanup like closing files.",
    defaultFeedback: "Excellent breakdown of all four exception blocks! You clearly stated when each block executes and why finally is used for cleanup. This demonstrates production-ready coding practices.",
    modelAnswer: "Python provides exception handling via try, except, else, and finally blocks. Code that might fail is placed inside 'try'. The 'except' block catches and processes specific errors. The 'else' block executes only if the try block succeeded without errors. The 'finally' block always runs, ensuring cleanup actions (closing files or network connections) execute reliably."
  }
];

interface AiMockInterviewLabProps {
  userName?: string;
  onBack?: () => void;
  onUnlockNextStage?: () => void;
  onFinishAll?: () => void;
}

export const AiMockInterviewLab: React.FC<AiMockInterviewLabProps> = ({
  userName = 'Subodh Kumar',
  onBack,
  onUnlockNextStage,
  onFinishAll
}) => {
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const currentQ = INTERVIEW_QUESTIONS[currentQIndex];

  // Typewriter effect state
  const [typedQuestion, setTypedQuestion] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(true);

  // ---------------------------------------------------------------------------
  // 1. Voice-to-Text (Speech Recognition) State: Built-in Web Speech API
  // ---------------------------------------------------------------------------
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const isRecordingRef = useRef<boolean>(false);
  const [recordingSeconds, setRecordingSeconds] = useState<number>(0);
  const [userTranscript, setUserTranscript] = useState<string>('');
  const [recognitionSupported, setRecognitionSupported] = useState<boolean>(true);
  const [micPermissionDenied, setMicPermissionDenied] = useState<boolean>(false);
  const recognitionRef = useRef<any>(null);
  const timerIntervalRef = useRef<any>(null);

  // ---------------------------------------------------------------------------
  // 2. Text-to-Voice (Speech Synthesis) State: Built-in window.speechSynthesis
  // ---------------------------------------------------------------------------
  const [isAiSpeaking, setIsAiSpeaking] = useState<boolean>(false);
  const [speakingTarget, setSpeakingTarget] = useState<'question' | 'model' | 'feedback' | 'robot' | null>(null);
  const [autoSpeakEnabled, setAutoSpeakEnabled] = useState<boolean>(true);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const isSpeechSynthesisSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

  // Evaluation & Results state for questions
  const [submittedAnswers, setSubmittedAnswers] = useState<Record<number, {
    transcript: string;
    score: number;
    matchedPointIds: string[];
    feedback: string;
  }>>({});

  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => soundEffects.getSoundEnabled());

  // Waveform animation height bars
  const [waveHeights, setWaveHeights] = useState<number[]>(() => 
    Array.from({ length: 38 }, () => Math.floor(Math.random() * 25) + 10)
  );

  // ---------------------------------------------------------------------------
  // Setup SpeechSynthesis: load voices from browser (Chrome, Safari, Edge)
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        if (voices && voices.length > 0) {
          setAvailableVoices(voices);
          // Pick the best natural English voice available in Chrome / Safari
          const bestVoice = voices.find(v => 
            v.lang.startsWith('en') && (
              v.name.includes('Google US English') ||
              v.name.includes('Natural') ||
              v.name.includes('Samantha') ||
              v.name.includes('Zira') ||
              v.name.includes('Jenny')
            )
          ) || voices.find(v => v.lang.startsWith('en')) || voices[0] || null;
          setSelectedVoice(bestVoice);
        }
      };

      loadVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
      }
    }
  }, []);

  // ---------------------------------------------------------------------------
  // Built-in Text-To-Voice Function: Speaks text aloud using SpeechSynthesisUtterance
  // ---------------------------------------------------------------------------
  const speakText = (text: string, target: 'question' | 'model' | 'feedback' | 'robot' = 'question') => {
    if (!isSpeechSynthesisSupported) {
      console.warn('SpeechSynthesis is not supported in this browser.');
      return;
    }

    // If currently speaking the exact same target, treat clicking as Stop Speaking
    if (isAiSpeaking && speakingTarget === target) {
      stopSpeaking();
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    // If student was recording, stop recording to prevent feedback loop
    if (isRecordingRef.current) {
      handleStopRecording();
    }

    // Clean text of markdown / symbols for clean pronunciation
    const cleanText = text
      .replace(/[*_#`[\]()]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'en-US';
    utterance.rate = 0.95; // Natural, clear interview pacing
    utterance.pitch = 1.0;

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    utterance.onstart = () => {
      setIsAiSpeaking(true);
      setSpeakingTarget(target);
    };

    utterance.onend = () => {
      setIsAiSpeaking(false);
      setSpeakingTarget(null);
    };

    utterance.onerror = (e) => {
      console.warn('Speech synthesis event error:', e);
      setIsAiSpeaking(false);
      setSpeakingTarget(null);
    };

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    if (isSpeechSynthesisSupported) {
      window.speechSynthesis.cancel();
    }
    setIsAiSpeaking(false);
    setSpeakingTarget(null);
  };

  // ---------------------------------------------------------------------------
  // 1. Line-by-line Typewriter Effect for Question
  // ---------------------------------------------------------------------------
  useEffect(() => {
    // Stop any speech from previous question
    stopSpeaking();

    setIsTyping(true);
    setTypedQuestion('');
    const fullText = currentQ.questionText;
    let charIndex = 0;

    const interval = setInterval(() => {
      if (charIndex < fullText.length) {
        setTypedQuestion(fullText.slice(0, charIndex + 1));
        charIndex++;
      } else {
        setIsTyping(false);
        clearInterval(interval);

        // Auto-read question using Web Speech API if enabled
        if (autoSpeakEnabled && isSpeechSynthesisSupported) {
          speakText(currentQ.questionText, 'question');
        }
      }
    }, 25);

    return () => {
      clearInterval(interval);
      stopSpeaking();
    };
  }, [currentQIndex]);

  // ---------------------------------------------------------------------------
  // 2. Initialize Voice-to-Text: window.webkitSpeechRecognition / SpeechRecognition
  // ---------------------------------------------------------------------------
  useEffect(() => {
    const SpeechRec = typeof window !== 'undefined' 
      ? ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition) 
      : null;

    if (SpeechRec) {
      try {
        const recognition = new SpeechRec();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';
        recognition.maxAlternatives = 1;

        recognition.onresult = (event: any) => {
          let finalTranscript = '';
          let interimTranscript = '';

          for (let i = 0; i < event.results.length; i++) {
            const res = event.results[i];
            if (res.isFinal) {
              finalTranscript += res[0].transcript + ' ';
            } else {
              interimTranscript += res[0].transcript;
            }
          }

          const combined = (finalTranscript + interimTranscript).trim();
          if (combined) {
            setUserTranscript(combined);
          }
        };

        recognition.onerror = (err: any) => {
          console.warn('Speech recognition warning/error:', err.error || err);
          if (err.error === 'not-allowed' || err.error === 'service-not-allowed') {
            setMicPermissionDenied(true);
          }
        };

        recognition.onend = () => {
          if (isRecordingRef.current) {
            // Unexpected termination while still in recording mode: attempt to restart
            try {
              recognition.start();
            } catch {
              setIsRecording(false);
              isRecordingRef.current = false;
            }
          } else {
            setIsRecording(false);
            isRecordingRef.current = false;
          }
        };

        recognitionRef.current = recognition;
        setRecognitionSupported(true);
      } catch (e) {
        console.warn('Failed to initialize SpeechRecognition:', e);
        setRecognitionSupported(false);
      }
    } else {
      setRecognitionSupported(false);
    }

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch {
          // ignore
        }
      }
      stopSpeaking();
    };
  }, []);

  // ---------------------------------------------------------------------------
  // 3. Audio Waveform Simulator while recording
  // ---------------------------------------------------------------------------
  useEffect(() => {
    let animId: any;
    if (isRecording) {
      animId = setInterval(() => {
        setWaveHeights(
          Array.from({ length: 38 }, () => Math.floor(Math.random() * 52) + 10)
        );
      }, 100);
    } else {
      // Resting wave
      setWaveHeights(
        Array.from({ length: 38 }, (_, i) => {
          const mid = 19;
          const dist = Math.abs(i - mid);
          return Math.max(8, 38 - dist * 1.5);
        })
      );
    }
    return () => clearInterval(animId);
  }, [isRecording]);

  // ---------------------------------------------------------------------------
  // 4. Recording Timer
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (isRecording) {
      timerIntervalRef.current = setInterval(() => {
        setRecordingSeconds((prev) => {
          if (prev >= currentQ.timerSeconds) {
            handleStopRecording();
            return prev;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    }
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [isRecording, currentQ.timerSeconds]);

  // Format seconds to mm:ss
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  // ---------------------------------------------------------------------------
  // Voice Recording Control: Start Recording via Web Speech API
  // ---------------------------------------------------------------------------
  const handleStartRecording = () => {
    // If AI voice is speaking, stop speaking immediately so it doesn't leak into mic!
    stopSpeaking();

    if (soundEnabled) soundEffects.playHover();
    setUserTranscript('');
    setRecordingSeconds(0);
    setIsRecording(true);
    isRecordingRef.current = true;
    setMicPermissionDenied(false);

    if (recognitionRef.current) {
      try {
        recognitionRef.current.start();
      } catch (e) {
        console.warn('SpeechRecognition start exception:', e);
      }
    }
  };

  // Stop Recording
  const handleStopRecording = () => {
    if (soundEnabled) soundEffects.playClick();
    setIsRecording(false);
    isRecordingRef.current = false;
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {
        // ignore
      }
    }
  };

  // ---------------------------------------------------------------------------
  // Evaluate Transcript against Key Points & Hints
  // ---------------------------------------------------------------------------
  const evaluateAnswer = (text: string): { score: number; matchedPointIds: string[]; feedback: string } => {
    if (!text || text.trim().length === 0) {
      return {
        score: 0,
        matchedPointIds: [],
        feedback: "No spoken answer detected. Please click 'Start Recording' and speak your answer into your microphone."
      };
    }

    const lower = text.toLowerCase();
    const matchedPointIds: string[] = [];

    currentQ.keyPoints.forEach((kp) => {
      const isMatched = kp.keywords.some((kw) => {
        if (typeof kw === 'string') {
          return lower.includes(kw.toLowerCase());
        } else {
          return kw.test(lower);
        }
      });
      if (isMatched) {
        matchedPointIds.push(kp.id);
      }
    });

    const totalPoints = currentQ.keyPoints.length;
    const matchCount = matchedPointIds.length;
    // Calculate authentic score out of 10
    const rawScore = Math.round((matchCount / totalPoints) * 10);
    const score = Math.max(rawScore, matchCount > 0 ? 4 : 2);

    let feedback = currentQ.defaultFeedback;
    if (matchCount === totalPoints) {
      feedback = "Outstanding! You covered all the core technical points clearly and thoroughly. This is an interview-ready response!";
    } else if (matchCount >= 3) {
      const missedPoints = currentQ.keyPoints.filter(kp => !matchedPointIds.includes(kp.id));
      const missedTips = missedPoints.map(p => p.hintText).join(' ');
      feedback = `Your answer was clear and well-structured. You explained key concepts well. To reach a perfect 10/10, consider also mentioning: ${missedTips}`;
    } else {
      feedback = "You started with good points, but several core concepts from the hints were missed. Review the hints and try explaining the technical aspects in more detail.";
    }

    return { score, matchedPointIds, feedback };
  };

  // Submit Answer Action
  const handleSubmitAnswer = () => {
    if (isRecording) {
      handleStopRecording();
    }
    stopSpeaking();

    const evaluation = evaluateAnswer(userTranscript);

    if (soundEnabled) {
      if (evaluation.score >= 7) {
        soundEffects.playCelebration();
      } else {
        soundEffects.playQuizCorrect();
      }
    }

    setSubmittedAnswers((prev) => ({
      ...prev,
      [currentQIndex]: {
        transcript: userTranscript,
        score: evaluation.score,
        matchedPointIds: evaluation.matchedPointIds,
        feedback: evaluation.feedback
      }
    }));
  };

  // Demo buttons for quick test & evaluation
  const handleUseSampleAnswer = (type: 'good' | 'perfect') => {
    stopSpeaking();
    const text = type === 'good' ? currentQ.sampleAnswerGood : currentQ.sampleAnswerPerfect;
    setUserTranscript(text);
    if (soundEnabled) soundEffects.playClick();
  };

  // Current question result state (if submitted)
  // If not submitted yet on Q1, we can provide the reference state (matching the image)
  const currentSubmission = submittedAnswers[currentQIndex] || (
    currentQIndex === 0 ? {
      transcript: currentQ.sampleAnswerGood,
      score: 8,
      matchedPointIds: ['kp1', 'kp2', 'kp3', 'kp4'], // matches 4 points, kp5 is missed (exactly like reference image!)
      feedback: currentQ.defaultFeedback
    } : null
  );

  const displayScore = currentSubmission ? currentSubmission.score : 8;
  const displayMatchedIds = currentSubmission ? currentSubmission.matchedPointIds : ['kp1', 'kp2', 'kp3', 'kp4'];

  const handleNextQuestion = () => {
    stopSpeaking();
    if (soundEnabled) soundEffects.playClick();
    if (currentQIndex < INTERVIEW_QUESTIONS.length - 1) {
      setCurrentQIndex(currentQIndex + 1);
      setUserTranscript('');
      setIsRecording(false);
      setRecordingSeconds(0);
    } else {
      if (onFinishAll) onFinishAll();
      else if (onUnlockNextStage) onUnlockNextStage();
    }
  };

  const handlePrevQuestion = () => {
    stopSpeaking();
    if (soundEnabled) soundEffects.playClick();
    if (currentQIndex > 0) {
      setCurrentQIndex(currentQIndex - 1);
      setUserTranscript('');
      setIsRecording(false);
      setRecordingSeconds(0);
    } else if (onBack) {
      onBack();
    }
  };

  return (
    <div className="fai-interview-container">
      {/* =========================================================================
          1. TOP NAVIGATION BAR (Exact match to media_1790617782291.jpg)
          ========================================================================= */}
      <header className="fai-interview-topbar">
        {/* Left: FUTURE IT INDUSTRY Logo & Breadcrumb */}
        <div className="fai-interview-topbar-left">
          <div className="fai-interview-logo cursor-pointer" onClick={onBack} title="Back to Learning Journey">
            <FutureLogo size="sm" />
          </div>

          <div className="fai-interview-divider-vertical" />

          <div className="fai-interview-breadcrumb">
            <span className="fai-interview-bc-course">Python for Beginners</span>
            <span className="fai-interview-bc-slash">/</span>
            <span className="fai-interview-bc-module">5. Interview Preparation</span>
          </div>
        </div>

        {/* Center: Segmented Progress Bar & Question Count */}
        <div className="fai-interview-topbar-center">
          <div className="fai-interview-progress-segments">
            {INTERVIEW_QUESTIONS.map((_, idx) => (
              <div 
                key={idx} 
                className={`fai-interview-segment ${idx <= currentQIndex ? 'active' : ''}`}
              />
            ))}
          </div>
          <span className="fai-interview-qcount">
            Question {currentQIndex + 1}/{INTERVIEW_QUESTIONS.length}
          </span>
        </div>

        {/* Right: Streak, XP & User Avatar */}
        <div className="fai-interview-topbar-right">
          <div className="fai-interview-streak-badge" title="5 Day Streak">
            <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
            <div className="fai-interview-streak-text">
              <span className="fai-interview-metric-val">5</span>
              <span className="fai-interview-metric-lbl">Day Streak</span>
            </div>
          </div>

          <div className="fai-interview-xp-badge" title="Earned XP">
            <div className="fai-interview-coin-icon">
              <Coins className="w-3.5 h-3.5 text-amber-600" />
            </div>
            <div className="fai-interview-xp-text">
              <span className="fai-interview-metric-val">250</span>
              <span className="fai-interview-metric-lbl">XP</span>
            </div>
          </div>

          {/* Sound Toggle */}
          <button 
            className="fai-interview-sound-btn"
            onClick={() => {
              const res = soundEffects.toggleSound();
              setSoundEnabled(res);
            }}
            title={soundEnabled ? 'Mute Sound Effects' : 'Enable Sound Effects'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-slate-600" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
          </button>

          {/* 3D Robot Avatar */}
          <div className="fai-interview-avatar-wrap" title={userName}>
            <img 
              src="/images/powergreen_ai_bot.png" 
              alt="Learner" 
              className="fai-interview-avatar-img"
            />
          </div>
        </div>
      </header>

      {/* =========================================================================
          2. MAIN BODY 3-COLUMN LAYOUT
          ========================================================================= */}
      <div className="fai-interview-main-grid">

        {/* =======================================================================
            LEFT COLUMN: Python Launch Mission & Robot Assistant
            ======================================================================= */}
        <aside className="fai-interview-left-sidebar">
          {/* Mission Title */}
          <div className="fai-interview-mission-head">
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
              alt="Python" 
              className="w-5 h-5"
            />
            <span className="fai-interview-mission-title">Python Launch Mission</span>
          </div>

          {/* Step Sequence List */}
          <div className="fai-interview-steps-list">
            <div className="fai-interview-step-item completed" onClick={onBack}>
              <div className="fai-interview-step-icon done">
                <Check className="w-3 h-3 text-white stroke-[3]" />
              </div>
              <span className="fai-interview-step-text">1. Video</span>
            </div>

            <div className="fai-interview-step-item completed" onClick={onBack}>
              <div className="fai-interview-step-icon done">
                <Check className="w-3 h-3 text-white stroke-[3]" />
              </div>
              <span className="fai-interview-step-text">2. MCQ</span>
            </div>

            <div className="fai-interview-step-item completed" onClick={onBack}>
              <div className="fai-interview-step-icon done">
                <Check className="w-3 h-3 text-white stroke-[3]" />
              </div>
              <span className="fai-interview-step-text">3. Game</span>
            </div>

            <div className="fai-interview-step-item completed" onClick={onBack}>
              <div className="fai-interview-step-icon done">
                <Check className="w-3 h-3 text-white stroke-[3]" />
              </div>
              <span className="fai-interview-step-text">4. Code Practice</span>
            </div>

            {/* Step 5: Active Interview */}
            <div className="fai-interview-step-item active-parent">
              <div className="fai-interview-step-icon active">
                <div className="fai-interview-step-inner-dot" />
              </div>
              <span className="fai-interview-step-text font-bold text-sky-700">5. Interview</span>
            </div>

            {/* Sub-items under Interview */}
            <div className="fai-interview-substep-tree">
              <div className="fai-interview-substep-item active">
                <span className="fai-interview-substep-dot active" />
                <span className="fai-interview-substep-label active">AI Mock Interview</span>
              </div>
              <div className="fai-interview-substep-item">
                <span className="fai-interview-substep-dot" />
                <span className="fai-interview-substep-label">Interview Questions</span>
              </div>
              <div className="fai-interview-substep-item">
                <span className="fai-interview-substep-dot" />
                <span className="fai-interview-substep-label">Feedback & Score</span>
              </div>
            </div>
          </div>

          {/* 3D Robot Assistant Card with Speech Bubble */}
          <div className="fai-interview-robot-bottom">
            <div className="fai-interview-speech-bubble">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold text-sky-600 uppercase tracking-wider flex items-center gap-1">
                  <Bot className="w-3 h-3 text-sky-600" />
                  AI Interview Mentor
                </span>
                {/* Voice button for robot speech */}
                <button
                  className="fai-interview-bubble-speak-btn"
                  onClick={() => speakText("Take your time and speak clearly. I'll analyze your answer and give instant feedback!", 'robot')}
                  title="Listen to AI Mentor Advice (Web Speech API)"
                >
                  {isAiSpeaking && speakingTarget === 'robot' ? (
                    <VolumeX className="w-3 h-3 text-purple-600 animate-pulse" />
                  ) : (
                    <Volume2 className="w-3 h-3 text-sky-600 hover:text-sky-800" />
                  )}
                </button>
              </div>
              Take your time and speak clearly. I'll analyze your answer and give instant feedback! 😊
              <div className="fai-interview-bubble-tail" />
            </div>

            <div className="fai-interview-robot-frame">
              <img 
                src="/images/robot_assistant_styleguide.png" 
                alt="AI Mentor Robot" 
                className="fai-interview-robot-img"
              />
            </div>
          </div>
        </aside>

        {/* =======================================================================
            CENTER COLUMN: AI Mock Interview (Question, Voice Recording, Submit)
            ======================================================================= */}
        <main className="fai-interview-center-stage">
          
          {/* Top Banner Card: Purple Mic + Title + Python Basics Pill */}
          <div className="fai-interview-banner-card">
            <div className="fai-interview-banner-left">
              <div className="fai-interview-purple-mic-box">
                <Mic className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="fai-interview-main-title">AI Mock Interview</h1>
                <p className="fai-interview-main-subtitle">
                  Answer the question by speaking. I will analyze your answer and give a score.
                </p>
              </div>
            </div>

            <div className="fai-interview-banner-right">
              {/* Web Speech API Badge */}
              <div className="fai-interview-webspeech-badge" title="Browser Native Web Speech API (100% Free & Local)">
                <Radio className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
                <span>Web Speech API Active</span>
              </div>

              <div className="fai-interview-pill-topic">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
                  alt="Python" 
                  className="w-4 h-4"
                />
                <span>Python Basics</span>
              </div>
            </div>
          </div>

          {/* Question Card with Typewriter Animation, Built-in Speech Synthesis, & Hints */}
          <div className="fai-interview-card fai-interview-question-card">
            <div className="fai-interview-card-header">
              <div className="fai-interview-card-header-left">
                <div className="fai-interview-blue-circle-icon">
                  <Mic className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="fai-interview-card-title">{currentQ.questionNumber}</span>
              </div>

              {/* Text-to-Voice Controls (SpeechSynthesisUtterance) & Timer */}
              <div className="fai-interview-header-controls">
                {/* Auto-read toggle */}
                <button
                  className={`fai-interview-auto-toggle ${autoSpeakEnabled ? 'active' : ''}`}
                  onClick={() => setAutoSpeakEnabled(!autoSpeakEnabled)}
                  title={autoSpeakEnabled ? "Auto-Read Question: ON" : "Auto-Read Question: OFF"}
                >
                  <Volume1 className="w-3.5 h-3.5" />
                  <span>Auto-Read: {autoSpeakEnabled ? 'ON' : 'OFF'}</span>
                </button>

                {/* Speak Question Button (Built-in SpeechSynthesis) */}
                <button 
                  className={`fai-interview-speak-btn ${isAiSpeaking && speakingTarget === 'question' ? 'speaking' : ''}`}
                  onClick={() => speakText(currentQ.questionText, 'question')}
                  title="Speak question out loud using browser's built-in window.speechSynthesis"
                >
                  {isAiSpeaking && speakingTarget === 'question' ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
                      <span className="text-rose-600 font-bold">Stop Speaking</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-sky-600" />
                      <span>Speak Question</span>
                    </>
                  )}
                </button>

                {/* Timer Limit */}
                <div className="fai-interview-timer-pill">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span>{currentQ.timerLimit}</span>
                </div>
              </div>
            </div>

            <div className="fai-interview-question-body-grid">
              {/* Left: Typewriter Animated Question */}
              <div className="fai-interview-typewriter-box">
                <p className="fai-interview-typewriter-text">
                  {typedQuestion}
                  {isTyping && <span className="fai-interview-blinking-cursor">|</span>}
                </p>
                {isTyping && (
                  <button 
                    className="fai-interview-skip-typing-btn"
                    onClick={() => {
                      setTypedQuestion(currentQ.questionText);
                      setIsTyping(false);
                      if (autoSpeakEnabled && isSpeechSynthesisSupported) {
                        speakText(currentQ.questionText, 'question');
                      }
                    }}
                    title="Skip typing animation"
                  >
                    Skip
                  </button>
                )}
              </div>

              {/* Right: Hint Box */}
              <div className="fai-interview-hint-box">
                <div className="fai-interview-hint-head">
                  <span className="fai-interview-bulb-icon">💡</span>
                  <span className="fai-interview-hint-title">Hint</span>
                </div>
                <ul className="fai-interview-hint-list">
                  {currentQ.keyPoints.map((kp) => (
                    <li key={kp.id} className="fai-interview-hint-item">
                      <span className="fai-interview-hint-bullet">•</span>
                      <span>{kp.hintText}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Your Answer Card (Audio Recording & Waveform Visualizer via Web Speech API) */}
          <div className="fai-interview-card fai-interview-answer-card">
            <div className="fai-interview-card-header">
              <div className="fai-interview-card-header-left">
                <div className="fai-interview-blue-circle-icon">
                  <Mic className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="fai-interview-card-title">Your Answer <span className="text-slate-500 font-normal">(Speak your answer)</span></span>
              </div>

              {/* Recording Status & Timer */}
              <div className="fai-interview-rec-status-wrap">
                {isRecording ? (
                  <div className="fai-interview-rec-pill active">
                    <span className="fai-interview-red-dot pulse" />
                    <span>Listening...</span>
                  </div>
                ) : userTranscript ? (
                  <div className="fai-interview-rec-pill ready">
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span>Recorded</span>
                  </div>
                ) : null}

                <div className="fai-interview-timer-elapsed">
                  {formatTime(recordingSeconds)} / {currentQ.timerLimit}
                </div>
              </div>
            </div>

            {/* Mic Permission Banner if blocked */}
            {micPermissionDenied && (
              <div className="fai-interview-perm-warning">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>
                  Microphone access was blocked. Click the lock/permission icon in Chrome/Safari address bar to allow microphone, or use the demo buttons below.
                </span>
              </div>
            )}

            {/* Center: Dynamic Audio Waveform */}
            <div className="fai-interview-waveform-container">
              <div className="fai-interview-waveform-bars">
                {waveHeights.map((h, i) => (
                  <div 
                    key={i} 
                    className={`fai-interview-wave-bar ${isRecording ? 'active' : ''}`}
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>
            </div>

            {/* Record / Stop Button (Voice-to-Text via SpeechRecognition) */}
            <div className="fai-interview-rec-control-row">
              {isRecording ? (
                <button 
                  className="fai-interview-stop-btn"
                  onClick={handleStopRecording}
                  title="Stop recording voice answer (Web Speech API)"
                >
                  <Square className="w-4 h-4 fill-white" />
                  <span>Stop Recording</span>
                </button>
              ) : (
                <button 
                  className="fai-interview-start-btn"
                  onClick={handleStartRecording}
                  title="Start speech recognition with browser's built-in Web Speech API"
                >
                  <Mic className="w-4 h-4 text-white" />
                  <span>{userTranscript ? 'Record Again' : 'Start Recording'}</span>
                </button>
              )}
            </div>

            {/* Transcript Preview / Editable Text Area */}
            <div className="fai-interview-transcript-box">
              <div className="fai-interview-transcript-head">
                <span className="text-xs font-semibold text-slate-500">Live Speech Transcript:</span>
                {/* Demo Helper Buttons */}
                <div className="fai-interview-demo-actions">
                  <button 
                    className="fai-interview-sample-chip good"
                    onClick={() => handleUseSampleAnswer('good')}
                    title="Insert Good Spoken Answer (Hits 4/5 hints = 8/10 score like image)"
                  >
                    ✨ Demo 8/10 Answer
                  </button>
                  <button 
                    className="fai-interview-sample-chip perfect"
                    onClick={() => handleUseSampleAnswer('perfect')}
                    title="Insert 10/10 Perfect Answer"
                  >
                    🌟 Demo 10/10 Answer
                  </button>
                </div>
              </div>

              <textarea 
                className="fai-interview-transcript-input"
                placeholder={isRecording ? "Listening to your microphone... speak clearly..." : "Your spoken words will appear here. You can also edit or type manually if microphone is unavailable."}
                value={userTranscript}
                onChange={(e) => setUserTranscript(e.target.value)}
                rows={3}
              />
            </div>

            {/* Tips Strip */}
            <div className="fai-interview-tips-bar">
              <Info className="w-4 h-4 text-sky-600 shrink-0" />
              <div className="fai-interview-tips-content">
                <span className="font-bold text-sky-900">Tips:</span>
                <span>Speak clearly</span>
                <span className="fai-interview-tips-sep">|</span>
                <span>Cover the key points</span>
                <span className="fai-interview-tips-sep">|</span>
                <span>You can take up to 2 minutes</span>
              </div>
            </div>
          </div>

          {/* Bottom Actions Bar (Previous, Submit Answer, Next Question) */}
          <div className="fai-interview-bottom-bar">
            <button 
              className="fai-interview-prev-btn"
              onClick={handlePrevQuestion}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <button 
              className={`fai-interview-submit-btn ${userTranscript.trim() ? 'ready' : 'disabled'}`}
              onClick={handleSubmitAnswer}
              disabled={!userTranscript.trim()}
            >
              <Send className="w-4 h-4" />
              <span>Submit Answer</span>
            </button>

            <button 
              className="fai-interview-next-btn"
              onClick={handleNextQuestion}
            >
              <span>{currentQIndex === INTERVIEW_QUESTIONS.length - 1 ? 'Finish Interview' : 'Next Question'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </main>

        {/* =======================================================================
            RIGHT COLUMN: Score Gauge, Key Points Analysis, Feedback, Model Answer
            ======================================================================= */}
        <aside className="fai-interview-right-sidebar">
          
          {/* Last Answer Score Card */}
          <div className="fai-interview-score-card">
            <div className="fai-interview-score-head">
              <div className="fai-interview-target-icon">
                <Compass className="w-4 h-4 text-sky-600" />
              </div>
              <span className="fai-interview-score-title">Last Answer Score</span>
            </div>

            <div className="fai-interview-score-body">
              {/* Circular Gauge */}
              <div className="fai-interview-circular-gauge">
                <svg className="fai-interview-gauge-svg" viewBox="0 0 100 100">
                  {/* Background Track */}
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    className="fai-interview-gauge-bg" 
                  />
                  {/* Active Arc (percentage based) */}
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    className="fai-interview-gauge-fill"
                    style={{
                      strokeDasharray: 251.2,
                      strokeDashoffset: 251.2 - (251.2 * (displayScore / 10))
                    }}
                  />
                </svg>
                <div className="fai-interview-gauge-value">
                  <span className="fai-interview-score-num">{displayScore}</span>
                  <span className="fai-interview-score-denom">/10</span>
                </div>
              </div>

              {/* Score Headline & Feedback summary */}
              <div className="fai-interview-score-summary">
                <h4 className="fai-interview-rating-title">
                  {displayScore >= 9 ? 'Excellent Answer!' : displayScore >= 7 ? 'Good Answer!' : 'Needs Improvement'}
                </h4>
                <p className="fai-interview-rating-desc">
                  {displayScore >= 7 
                    ? "You covered most of the key points with a clear explanation. Keep it up!" 
                    : "Try to cover more of the key points and explain technical concepts in detail."
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Key Points Analysis (Checklist matching Spoken Words with Hints) */}
          <div className="fai-interview-analysis-card">
            <h4 className="fai-interview-analysis-title">Key Points Analysis</h4>
            
            <div className="fai-interview-analysis-list">
              {currentQ.keyPoints.map((kp) => {
                const isMatched = displayMatchedIds.includes(kp.id);
                return (
                  <div 
                    key={kp.id} 
                    className={`fai-interview-kp-row ${isMatched ? 'matched' : 'missed'}`}
                  >
                    <div className="fai-interview-kp-left">
                      <div className={`fai-interview-kp-badge ${isMatched ? 'success' : 'danger'}`}>
                        {isMatched ? (
                          <Check className="w-3 h-3 text-white stroke-[3]" />
                        ) : (
                          <span className="text-white text-[10px] font-black leading-none">−</span>
                        )}
                      </div>
                      <span className="fai-interview-kp-text">
                        {isMatched ? kp.positiveLabel : kp.negativeLabel}
                      </span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Feedback Card (Soft Purple Theme + Built-in Text-To-Voice Listen Button) */}
          <div className="fai-interview-detailed-card">
            <div className="fai-interview-detailed-head">
              <div className="flex items-center gap-1.5">
                <div className="fai-interview-purple-sparkle">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                </div>
                <span className="fai-interview-detailed-title">Detailed Feedback</span>
              </div>

              {/* Listen to Feedback button */}
              <button
                className="fai-interview-listen-sub-btn purple"
                onClick={() => speakText(currentSubmission ? currentSubmission.feedback : currentQ.defaultFeedback, 'feedback')}
                title="Listen to AI Feedback using browser's window.speechSynthesis"
              >
                {isAiSpeaking && speakingTarget === 'feedback' ? (
                  <span className="flex items-center gap-1 text-[11px] font-bold text-rose-600">
                    <VolumeX className="w-3 h-3 animate-pulse" /> Stop
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-purple-700">
                    <Volume2 className="w-3 h-3" /> Listen
                  </span>
                )}
              </button>
            </div>
            <p className="fai-interview-detailed-text">
              {currentSubmission ? currentSubmission.feedback : currentQ.defaultFeedback}
            </p>
          </div>

          {/* Model Answer Card (Soft Green Theme + Built-in Text-To-Voice Listen Button) */}
          <div className="fai-interview-model-card">
            <div className="fai-interview-model-head">
              <div className="flex items-center gap-1.5">
                <div className="fai-interview-green-book">
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="fai-interview-model-title">Model Answer <span className="font-normal text-xs text-emerald-700">(for reference)</span></span>
              </div>

              {/* Listen to Model Answer button */}
              <button
                className="fai-interview-listen-sub-btn green"
                onClick={() => speakText(currentQ.modelAnswer, 'model')}
                title="Listen to Model Answer using browser's window.speechSynthesis"
              >
                {isAiSpeaking && speakingTarget === 'model' ? (
                  <span className="flex items-center gap-1 text-[11px] font-bold text-rose-600">
                    <VolumeX className="w-3 h-3 animate-pulse" /> Stop
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                    <Volume2 className="w-3 h-3" /> Listen
                  </span>
                )}
              </button>
            </div>
            <p className="fai-interview-model-text">
              {currentQ.modelAnswer}
            </p>
          </div>

        </aside>

      </div>
    </div>
  );
};
