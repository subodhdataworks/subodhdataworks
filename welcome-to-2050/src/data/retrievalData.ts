import { RetrievalItem } from '../types';

export const DAY1_RETRIEVAL_QUESTIONS: RetrievalItem[] = [
  {
    id: 'ret_var_1',
    concept: 'Variables',
    question: 'In programming, what is the primary role of a variable?',
    options: [
      'To permanently lock a value so it can never be changed',
      'A labelled container in memory used to store and update information',
      'A command that turns off the computer screen',
      'A decoration used to make code look colorful'
    ],
    correctIndex: 1,
    explanation: 'A variable acts like a labelled memory box where values are stored and can be updated at any time.',
    hinglishExplanation: 'Variable ek labelled dabba hai jisme data store hota hai aur zarurat padne par badla ja sakta hai.',
    schedule: {
      sameDayDone: false,
      nextDayDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      threeDayDate: new Date(Date.now() + 3 * 86400000).toISOString().split('T')[0],
      sevenDayDate: new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0],
      twentyOneDayDate: new Date(Date.now() + 21 * 86400000).toISOString().split('T')[0]
    }
  },
  {
    id: 'ret_seq_2',
    concept: 'Sequence & Execution',
    question: 'How does a Python interpreter read and execute standard lines of code?',
    options: [
      'In random order based on which line is shortest',
      'From bottom to top in reverse order',
      'Line-by-line sequentially from top to bottom',
      'All lines simultaneously at the exact same microsecond'
    ],
    correctIndex: 2,
    explanation: 'Standard programs execute strictly in sequence from top to bottom. Order dictates the state of your application.',
    hinglishExplanation: 'Python code bilkul seedhe kram mein upar se neeche line-by-line chalta hai.',
    schedule: {
      sameDayDone: false,
      nextDayDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      threeDayDate: new Date(Date.now() + 3 * 86400000).toISOString().split('T')[0],
      sevenDayDate: new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0],
      twentyOneDayDate: new Date(Date.now() + 21 * 86400000).toISOString().split('T')[0]
    }
  },
  {
    id: 'ret_debug_3',
    concept: 'Debugging Mindset',
    question: 'What is the correct mental attitude toward an error message (bug) in your code?',
    options: [
      'Panic and immediately delete all code',
      'An error is simply helpful diagnostic data pointing to what the computer could not parse',
      'It means you are not smart enough to become a programmer',
      'Ignore the error and hope it fixes itself'
    ],
    correctIndex: 1,
    explanation: 'Errors are not moral failures. They are precise diagnostic clues provided by the computer to help you fix your instructions.',
    hinglishExplanation: 'Error koi sharm ki baat nahi hai, yeh computer ka clue hai jo batata hai ki kahan theek karne ki zaroorat hai.',
    schedule: {
      sameDayDone: false,
      nextDayDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      threeDayDate: new Date(Date.now() + 3 * 86400000).toISOString().split('T')[0],
      sevenDayDate: new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0],
      twentyOneDayDate: new Date(Date.now() + 21 * 86400000).toISOString().split('T')[0]
    }
  }
];
