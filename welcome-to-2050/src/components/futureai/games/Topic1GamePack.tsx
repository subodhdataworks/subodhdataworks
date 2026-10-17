import React, { useState } from 'react';
import {
  Gamepad2,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Trophy,
  Zap,
  Coins,
  Bot,
  Layers,
  Search,
  Move,
  Bug,
  Compass,
  FileCheck,
  Check,
  ChevronRight,
} from 'lucide-react';
import { soundEffects } from '../../../services/soundEffects';
import './Topic1GamePack.css';

interface Topic1GamePackProps {
  onComplete?: () => void;
  onNextStep?: () => void;
  lang?: 'en' | 'hi';
}

export const Topic1GamePack: React.FC<Topic1GamePackProps> = ({
  onComplete,
  onNextStep,
  lang = 'en',
}) => {
  const [activeGameIndex, setActiveGameIndex] = useState<number>(0);
  const [completedGames, setCompletedGames] = useState<number[]>([]);
  const [totalXp, setTotalXp] = useState<number>(0);
  const [totalCoins, setTotalCoins] = useState<number>(0);

  // Per-game internal round states
  const [roundIdx, setRoundIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [placedItems, setPlacedItems] = useState<string[]>([]);
  const [robotPos, setRobotPos] = useState<number>(0); // 0 to 100%
  const [robotSpeech, setRobotSpeech] = useState<string>(
    lang === 'hi' ? 'नमस्ते! मुझे आपका निर्देश चाहिए।' : "Hi! I am Robot NOVA. Give me instructions!"
  );

  const isHindi = lang === 'hi';

  const markGameComplete = (gameNum: number, earnedXp = 50, earnedCoins = 10) => {
    soundEffects.playSuccess();
    if (!completedGames.includes(gameNum)) {
      setCompletedGames((prev) => [...prev, gameNum]);
      setTotalXp((x) => x + earnedXp);
      setTotalCoins((c) => c + earnedCoins);
    }
  };

  const switchGame = (idx: number) => {
    soundEffects.playClick();
    setActiveGameIndex(idx);
    setRoundIdx(0);
    setSelectedOption(null);
    setIsAnswerChecked(false);
    setIsCorrect(false);
    setPlacedItems([]);
    setRobotPos(0);
    setRobotSpeech(
      isHindi ? 'नमस्ते! मुझे आपका निर्देश चाहिए।' : "Hi! I am Robot NOVA. Give me instructions!"
    );
  };

  // 12 Game Metadata Definitions
  const gameTitles = [
    { num: 1, title: 'Code Adventure', sub: 'Instruction Mission', icon: '🤖' },
    { num: 2, title: 'Drag & Drop', sub: 'Arrange Steps', icon: '🥪' },
    { num: 3, title: 'Pattern Detective', sub: 'What Comes Next?', icon: '🔍' },
    { num: 4, title: 'Daily Simulator', sub: 'Give Instructions', icon: '🏡' },
    { num: 5, title: 'Bug Hunter', sub: 'Find Mistake', icon: '🐞' },
    { num: 6, title: 'Code Runner', sub: 'Instruction Sequence', icon: '🏃' },
    { num: 7, title: 'Data Detective', sub: 'Input & Task', icon: '🔎' },
    { num: 8, title: 'Build & Earn', sub: 'Instruction Plan', icon: '💰' },
    { num: 9, title: 'Quiz Arena', sub: 'Quick Challenge', icon: '⚡' },
    { num: 10, title: 'Logic Builder', sub: 'Real Process', icon: '⚙️' },
    { num: 11, title: 'Terminal Mission', sub: 'No-Code Decisions', icon: '💻' },
    { num: 12, title: 'World Builder', sub: 'Instruction World', icon: '🌍' },
  ];

  /* ═══════════════════════════════════════════════════════════════════════
     GAME 1: Code Adventure — Instruction Mission
     ═══════════════════════════════════════════════════════════════════════ */
  const game1Questions = [
    {
      q: 'What is programming?',
      qHi: 'प्रोग्रामिंग (Programming) क्या है?',
      correct: 'Giving instructions to a computer.',
      correctHi: 'कंप्यूटर को निर्देश (Instructions) देना।',
      options: [
        'Giving instructions to a computer.',
        'Playing computer games only.',
        'Drawing pictures on a sheet.',
        'Typing random keys on a keyboard.',
      ],
      optionsHi: [
        'कंप्यूटर को निर्देश (Instructions) देना।',
        'सिर्फ कंप्यूटर गेम खेलना।',
        'कागज पर चित्र बनाना।',
        'कीबोर्ड पर बिना सोचे बटन दबाना।',
      ],
      hint: 'Computers do not think on their own. We must guide them step-by-step.',
      hintHi: 'कंप्यूटर खुद से नहीं सोच सकता, हमें उसे स्टेप-बाय-स्टेप गाइड करना होता है।',
    },
    {
      q: 'A robot needs to deliver a book. What should it receive?',
      qHi: 'एक रोबोट को किताब पहुंचानी है। उसे क्या मिलना चाहिए?',
      correct: 'Clear instructions.',
      correctHi: 'स्पष्ट निर्देश (Clear instructions)।',
      options: [
        'Clear instructions.',
        'A loud random sound.',
        'Nothing, it can guess magically.',
        'A cup of cold water.',
      ],
      optionsHi: [
        'स्पष्ट निर्देश (Clear instructions)।',
        'कोई भी तेज आवाज।',
        'कुछ नहीं, वह खुद जादू से समझेगा।',
        'एक गिलास ठंडा पानी।',
      ],
      hint: 'Without clear instructions, the robot does not know the destination!',
      hintHi: 'बिना स्पष्ट निर्देश के रोबोट को पता नहीं चलेगा कि कहाँ जाना है!',
    },
    {
      q: 'Why does a computer need instructions?',
      qHi: 'कंप्यूटर को निर्देशों की आवश्यकता क्यों होती है?',
      correct: 'To know what task to perform.',
      correctHi: 'यह जानने के लिए कि कौन सा कार्य करना है।',
      options: [
        'To know what task to perform.',
        'Because computers get lonely.',
        'To change its screen color randomly.',
        'To switch off automatically.',
      ],
      optionsHi: [
        'यह जानने के लिए कि कौन सा कार्य करना है।',
        'क्योंकि कंप्यूटर अकेला महसूस करता है।',
        'ताकि स्क्रीन का रंग बदल सके।',
        'ताकि खुद बंद हो जाए।',
      ],
      hint: 'Instructions tell the computer exactly what problem to solve.',
      hintHi: 'निर्देश कंप्यूटर को बताते हैं कि कौन सा काम पूरा करना है।',
    },
  ];

  /* ═══════════════════════════════════════════════════════════════════════
     GAME 2: Drag & Drop — Arrange the Instructions
     ═══════════════════════════════════════════════════════════════════════ */
  const game2Tasks = [
    {
      title: 'Make a sandwich',
      titleHi: 'सैंडविच बनाना',
      correctSequence: ['Take bread', 'Add filling', 'Close sandwich'],
      correctSequenceHi: ['ब्रेड लो (Take bread)', 'स्टफिंग भरो (Add filling)', 'सैंडविच बंद करो (Close sandwich)'],
      allBlocks: ['Add filling', 'Close sandwich', 'Take bread'],
      allBlocksHi: ['स्टफिंग भरो (Add filling)', 'सैंडविच बंद करो (Close sandwich)', 'ब्रेड लो (Take bread)'],
      emoji: '🥪',
    },
    {
      title: 'Brush teeth',
      titleHi: 'दांत साफ करना (Brush teeth)',
      correctSequence: ['Pick up brush', 'Apply toothpaste', 'Brush teeth'],
      correctSequenceHi: ['ब्रश उठाओ', 'टूथपेस्ट लगाओ', 'ब्रश करो'],
      allBlocks: ['Brush teeth', 'Apply toothpaste', 'Pick up brush'],
      allBlocksHi: ['ब्रश करो', 'टूथपेस्ट लगाओ', 'ब्रश उठाओ'],
      emoji: '🪥',
    },
    {
      title: 'Turn on a computer',
      titleHi: 'कंप्यूटर चालू करना',
      correctSequence: ['Press power button', 'Wait for startup', 'Open an app'],
      correctSequenceHi: ['पावर बटन दबाओ', 'स्टार्टअप का इंतजार करो', 'ऐप खोलो'],
      allBlocks: ['Open an app', 'Wait for startup', 'Press power button'],
      allBlocksHi: ['ऐप खोलो', 'स्टार्टअप का इंतजार करो', 'पावर बटन दबाओ'],
      emoji: '💻',
    },
  ];

  /* ═══════════════════════════════════════════════════════════════════════
     GAME 3: Pattern Detective — What Comes Next?
     ═══════════════════════════════════════════════════════════════════════ */
  const game3Patterns = [
    {
      sequence: ['Morning', 'Afternoon', 'Evening'],
      sequenceHi: ['सुबह (Morning)', 'दोपहर (Afternoon)', 'शाम (Evening)'],
      question: 'Morning → Afternoon → Evening → ?',
      correct: 'Night',
      correctHi: 'रात (Night)',
      options: ['Night', 'Breakfast', 'Sunrise', 'Noon'],
      optionsHi: ['रात (Night)', 'नाश्ता', 'सूर्योदय', 'दोपहर'],
      logic: 'Daily 24-hour time sequence cycle.',
      logicHi: 'दैनिक 24 घंटे का समय चक्र।',
      icon: '🌅',
    },
    {
      sequence: ['Wake up', 'Brush teeth', 'Take a bath'],
      sequenceHi: ['जागना (Wake up)', 'ब्रश करना', 'नहाना (Take a bath)'],
      question: 'Wake up → Brush teeth → Take a bath → ?',
      correct: 'Get dressed',
      correctHi: 'कपड़े पहनना (Get dressed)',
      options: ['Get dressed', 'Sleep again', 'Sunset', 'Lunch'],
      optionsHi: ['कपड़े पहनना (Get dressed)', 'फिर सो जाना', 'सूर्यास्त', 'दोपहर का भोजन'],
      logic: 'Standard morning preparation sequence.',
      logicHi: 'सुबह की तैयारी का सही क्रम।',
      icon: '⏰',
    },
    {
      sequence: ['Red traffic light → Stop', 'Yellow light → Wait', 'Green traffic light → ?'],
      sequenceHi: ['लाल बत्ती → रुको', 'पीली बत्ती → इंतजार करो', 'हरी बत्ती → ?'],
      question: 'Red light → Stop; Green light → ?',
      correct: 'Go',
      correctHi: 'चलो (Go)',
      options: ['Go', 'Stop', 'Turn off engine', 'Honk horn'],
      optionsHi: ['चलो (Go)', 'रुको', 'इंजन बंद करो', 'हॉर्न बजाओ'],
      logic: 'Traffic signal control rule.',
      logicHi: 'ट्रैफिक सिग्नल के स्पष्ट नियम।',
      icon: '🚦',
    },
  ];

  /* ═══════════════════════════════════════════════════════════════════════
     GAME 4: Daily Life Simulator — Give Instructions
     ═══════════════════════════════════════════════════════════════════════ */
  const game4Scenarios = [
    {
      scenario: 'You want a robot to bring water. What must you give it?',
      scenarioHi: 'आप चाहते हैं कि एक रोबोट पानी लेकर आए। आपको उसे क्या देना होगा?',
      correct: 'Clear instructions.',
      correctHi: 'स्पष्ट निर्देश (Clear instructions)।',
      options: ['Clear instructions.', 'A warm smile only.', 'No details, just wait.', 'Turn off the power.'],
      optionsHi: ['स्पष्ट निर्देश (Clear instructions)।', 'सिर्फ मुस्कुराना।', 'बिना कुछ कहे इंतजार।', 'पावर बंद कर देना।'],
      explanation: 'Machines need step-by-step instructions: Where is the kitchen? Which cup to take? Where to bring it?',
      explanationHi: 'मशीनों को स्टेप-बाय-स्टेप निर्देश चाहिए: किचन कहाँ है, कौन सा कप लेना है, कहाँ लाना है।',
      emoji: '🤖',
    },
    {
      scenario: 'A food delivery app receives an order. What does the system need to process it?',
      scenarioHi: 'एक फूड डिलीवरी ऐप को ऑर्डर मिलता है। सिस्टम को प्रोसेस करने के लिए क्या चाहिए?',
      correct: 'Instructions and order information.',
      correctHi: 'निर्देश और ऑर्डर की जानकारी (Instructions and order info)।',
      options: [
        'Instructions and order information.',
        'An empty blank screen.',
        'A random guess without user data.',
        'Closing the app immediately.',
      ],
      optionsHi: [
        'निर्देश और ऑर्डर की जानकारी।',
        'खाली ब्लैंक स्क्रीन।',
        'बिना डेटा के कोई भी अनुमान।',
        'तुरंत ऐप बंद करना।',
      ],
      explanation: 'The app follows instructions to find the restaurant, calculate bill, and dispatch a delivery partner.',
      explanationHi: 'ऐप निर्देशों का पालन करके रेस्टोरेंट खोजता है, बिल बनाता है और डिलीवरी असाइन करता है।',
      emoji: '🛵',
    },
    {
      scenario: 'A washing machine is set to wash clothes. What tells it what steps to perform?',
      scenarioHi: 'वाशिंग मशीन कपड़े धोने के लिए सेट है। उसे कौन बताता है कि क्या कदम उठाने हैं?',
      correct: 'Its programmed instructions.',
      correctHi: 'इसके प्रोग्राम किए गए निर्देश (Programmed instructions)।',
      options: [
        'Its programmed instructions.',
        'The soap bubbles talking to it.',
        'The dirty clothes themselves.',
        'The room temperature.',
      ],
      optionsHi: [
        'इसके प्रोग्राम किए गए निर्देश (Programmed instructions)।',
        'साबुन के झाग।',
        'गंदे कपड़े खुद।',
        'कमरे का तापमान।',
      ],
      explanation: 'The microchip inside executes programmed cycles: Fill water → Spin → Drain → Rinse → Dry.',
      explanationHi: 'माइक्रोचिप प्रोग्राम किए गए चक्र चलाती है: पानी भरो → घुमाओ → पानी निकालो → सुखाओ।',
      emoji: '🧺',
    },
  ];

  /* ═══════════════════════════════════════════════════════════════════════
     GAME 5: Bug Hunter — Find the Instruction Mistake
     ═══════════════════════════════════════════════════════════════════════ */
  const game5Bugs = [
    {
      situation:
        'Robot is told: "Put the book in the bag," but the robot puts the book on the table instead. What is the problem?',
      situationHi:
        'रोबोट को बोला गया: "किताब बैग में रखो," लेकिन रोबोट किताब टेबल पर रख देता है। समस्या क्या है?',
      correct: 'The instruction was not followed correctly; check the instruction or execution.',
      correctHi: 'निर्देश का सही पालन नहीं हुआ; निर्देश या निष्पादन (Execution) जांचें।',
      options: [
        'The instruction was not followed correctly; check the instruction or execution.',
        'The book was the wrong color.',
        'The robot was feeling sleepy.',
        'The bag was placed in a different city.',
      ],
      optionsHi: [
        'निर्देश का सही पालन नहीं हुआ; निर्देश या निष्पादन जांचें।',
        'किताब का रंग गलत था।',
        'रोबोट को नींद आ रही थी।',
        'बैग दूसरे शहर में था।',
      ],
      bugExplanation: 'Bugs happen when an instruction is ambiguous or the machine misunderstands the target!',
      bugExplanationHi: 'बग तब आता है जब निर्देश अस्पष्ट हो या मशीन लक्ष्य को गलत समझ ले!',
      emoji: '🎒',
    },
    {
      situation: 'A robot is told "Go to the door", but there are 3 doors in the room. What is missing?',
      situationHi: 'रोबोट को कहा गया "दरवाजे पर जाओ", लेकिन कमरे में 3 दरवाजे हैं। यहाँ क्या छूटा है?',
      correct: 'A clear destination.',
      correctHi: 'एक स्पष्ट गंतव्य (A clear destination)।',
      options: [
        'A clear destination.',
        'A louder voice command.',
        'Paint on the robot wheels.',
        'A new battery.',
      ],
      optionsHi: [
        'एक स्पष्ट गंतव्य (A clear destination)।',
        'और तेज चिल्लाना।',
        'पहियों पर नया रंग।',
        'नई बैटरी।',
      ],
      bugExplanation: 'Computers cannot guess which door you mean! You must specify "Door A" or "Front Door".',
      bugExplanationHi: 'कंप्यूटर अनुमान नहीं लगा सकता! हमें बताना होगा: "सामने वाला दरवाजा" या "दरवाजा A"।',
      emoji: '🚪',
    },
    {
      situation: 'A delivery robot receives two conflicting directions: "Turn left" and "Turn right" simultaneously. What should be improved?',
      situationHi: 'डिलीवरी रोबोट को एक साथ दो विरोधी निर्देश मिलते हैं: "बाएं मुड़ो" और "दाएं मुड़ो"। क्या सुधार होना चाहिए?',
      correct: 'The instructions should be clear and consistent.',
      correctHi: 'निर्देश स्पष्ट और सुसंगत (Consistent) होने चाहिए।',
      options: [
        'The instructions should be clear and consistent.',
        'The robot should spin around endlessly.',
        'Nothing, machines love conflicts.',
        'Increase the robot speed to maximum.',
      ],
      optionsHi: [
        'निर्देश स्पष्ट और सुसंगत (Consistent) होने चाहिए।',
        'रोबोट को गोल-गोल घूमते रहना चाहिए।',
        'कुछ नहीं, मशीनें टकराव पसंद करती हैं।',
        'रोबोट की स्पीड तेज कर दो।',
      ],
      bugExplanation: 'Conflicting instructions cause programs to crash or freeze!',
      bugExplanationHi: 'विरोधी निर्देशों से प्रोग्राम क्रैश या फ्रीज हो जाते हैं!',
      emoji: '🔄',
    },
  ];

  /* ═══════════════════════════════════════════════════════════════════════
     GAME 6: Code Runner — Instruction Sequence (Visual Maze)
     ═══════════════════════════════════════════════════════════════════════ */
  const game6Levels = [
    {
      task: 'Guide NOVA to reach the door',
      taskHi: 'NOVA को दरवाजे तक पहुँचने का सही क्रम दो',
      correctSequence: ['Move forward', 'Turn left', 'Reach the door'],
      correctSequenceHi: ['आगे बढ़ो (Move forward)', 'बाएं मुड़ो (Turn left)', 'दरवाजे पर पहुंचो (Reach door)'],
      blocks: ['Turn left', 'Reach the door', 'Move forward'],
      blocksHi: ['बाएं मुड़ो', 'दरवाजे पर पहुंचो', 'आगे बढ़ो'],
      mazeEmoji: '🚪',
    },
    {
      task: 'Deliver package to customer',
      taskHi: 'ग्राहक तक पैकेज पहुंचाने का सही क्रम',
      correctSequence: ['Pick up package', 'Move to customer', 'Deliver package'],
      correctSequenceHi: ['पैकेज उठाओ', 'ग्राहक की तरफ बढ़ो', 'पैकेज सौंपो'],
      blocks: ['Deliver package', 'Move to customer', 'Pick up package'],
      blocksHi: ['पैकेज सौंपो', 'ग्राहक की तरफ बढ़ो', 'पैकेज उठाओ'],
      mazeEmoji: '📦',
    },
    {
      task: 'Turn on light → Check that it is on. Which action comes first?',
      taskHi: 'लाइट जलाओ → चेक करो कि लाइट जल गई। कौन सा कदम पहले आएगा?',
      correctSequence: ['Turn on light', 'Check that it is on'],
      correctSequenceHi: ['लाइट चालू करो', 'चेक करो कि लाइट जल रही है'],
      blocks: ['Check that it is on', 'Turn on light'],
      blocksHi: ['चेक करो कि लाइट जल रही है', 'लाइट चालू करो'],
      mazeEmoji: '💡',
    },
  ];

  /* ═══════════════════════════════════════════════════════════════════════
     GAME 7: Data Detective — Identify the Input and Task
     ═══════════════════════════════════════════════════════════════════════ */
  const game7Cases = [
    {
      scenario: 'A calculator receives 2 + 3. What task should it perform?',
      scenarioHi: 'कैलकुलेटर को इनपुट मिलता है 2 + 3। उसे कौन सा कार्य (Task) करना चाहिए?',
      correct: 'Calculate the sum.',
      correctHi: 'जोड़ की गणना करना (Calculate the sum)।',
      options: ['Calculate the sum.', 'Play a musical melody.', 'Send an email.', 'Draw a flower.'],
      optionsHi: ['जोड़ की गणना करना (Calculate the sum)।', 'गाना बजाना।', 'ईमेल भेजना।', 'चित्र बनाना।'],
      inputData: 'Input: 2 and 3, Operator: +',
    },
    {
      scenario: 'A map app receives a starting point and destination. What does it help determine?',
      scenarioHi: 'मैप ऐप को शुरुआती स्थान और गंतव्य मिलता है। यह क्या निर्धारित करने में मदद करता है?',
      correct: 'A route.',
      correctHi: 'रास्ता या रूट (A route)।',
      options: ['A route.', 'The price of clothes.', 'A cooking recipe.', 'The battery health.'],
      optionsHi: ['रास्ता या रूट (A route)।', 'कपड़ों की कीमत।', 'खाना पकाने की रेसिपी।', 'बैटरी हेल्थ।'],
      inputData: 'Input: Point A (Home) & Point B (Office)',
    },
    {
      scenario: 'A music app receives a song selection. What should it do?',
      scenarioHi: 'म्यूजिक ऐप में एक गाना चुना जाता है। ऐप को क्या करना चाहिए?',
      correct: 'Play the selected song.',
      correctHi: 'चुना हुआ गाना बजाना (Play the selected song)।',
      options: ['Play the selected song.', 'Calculate math equations.', 'Delete all files.', 'Turn off Wi-Fi.'],
      optionsHi: ['चुना हुआ गाना बजाना।', 'गणित हल करना।', 'सारी फाइलें मिटाना।', 'वाई-फाई बंद करना।'],
      inputData: 'Input: Song Title selected by user',
    },
  ];

  /* ═══════════════════════════════════════════════════════════════════════
     GAME 8: Build & Earn — Create an Instruction Plan
     ═══════════════════════════════════════════════════════════════════════ */
  const game8Plans = [
    {
      title: 'Plan: Packing a School Bag',
      titleHi: 'योजना: स्कूल बैग पैक करना',
      correctSequence: ['Check timetable', 'Collect required notebooks', 'Put pencil box', 'Zip the bag'],
      correctSequenceHi: ['टाइम-टेबल देखो', 'कॉपी-किताबें इकट्ठा करो', 'पेंसिल बॉक्स रखो', 'बैग की चेन बंद करो'],
      pool: ['Put pencil box', 'Zip the bag', 'Check timetable', 'Collect required notebooks'],
      poolHi: ['पेंसिल बॉक्स रखो', 'बैग की चेन बंद करो', 'टाइम-टेबल देखो', 'कॉपी-किताबें इकट्ठा करो'],
      xpReward: 60,
    },
    {
      title: 'Plan: Watering a Plant',
      titleHi: 'योजना: पौधे को पानी देना',
      correctSequence: ['Take watering can', 'Fill water from tap', 'Walk to plant', 'Pour water gently at roots'],
      correctSequenceHi: ['वाटरिंग कैन लो', 'नल से पानी भरो', 'पौधे के पास जाओ', 'जड़ों में धीरे से पानी डालो'],
      pool: ['Pour water gently at roots', 'Take watering can', 'Walk to plant', 'Fill water from tap'],
      poolHi: ['जड़ों में धीरे से पानी डालो', 'वाटरिंग कैन लो', 'पौधे के पास जाओ', 'नल से पानी भरो'],
      xpReward: 60,
    },
    {
      title: 'Plan: Ordering Food Through an App',
      titleHi: 'योजना: ऐप से खाना ऑर्डर करना',
      correctSequence: ['Open food app', 'Select favorite dish', 'Enter delivery address', 'Pay & place order'],
      correctSequenceHi: ['फूड ऐप खोलो', 'पसंदीदा डिश चुनो', 'डिलीवरी पता डालो', 'भुगतान कर ऑर्डर प्लेस करो'],
      pool: ['Pay & place order', 'Select favorite dish', 'Open food app', 'Enter delivery address'],
      poolHi: ['भुगतान कर ऑर्डर प्लेस करो', 'पसंदीदा डिश चुनो', 'फूड ऐप खोलो', 'डिलीवरी पता डालो'],
      xpReward: 60,
    },
  ];

  /* ═══════════════════════════════════════════════════════════════════════
     GAME 9: Code Quiz Arena — Quick Challenge
     ═══════════════════════════════════════════════════════════════════════ */
  const game9Questions = [
    {
      q: 'Programming means:',
      qHi: 'प्रोग्रामिंग का अर्थ है:',
      a: 'Giving computer instructions',
      b: 'Only playing games',
      c: 'Drawing pictures',
      correct: 'A',
      explanation: 'Programming is fundamentally the art of giving computers step-by-step instructions.',
      explanationHi: 'प्रोग्रामिंग का मूल अर्थ है कंप्यूटर को काम करने के लिए सटीक निर्देश देना।',
    },
    {
      q: 'Which is a programming example?',
      qHi: 'इनमें से कौन सा प्रोग्रामिंग का उदाहरण है?',
      a: 'A robot following instructions',
      b: 'Looking at a blank wall',
      c: 'Holding a notebook',
      correct: 'A',
      explanation: 'A robot moving and executing actions per instructions is a true real-world programming example.',
      explanationHi: 'निर्देशों के अनुसार चलने वाला रोबोट प्रोग्रामिंग का सबसे बढ़िया उदाहरण है।',
    },
    {
      q: 'Why should instructions be clear?',
      qHi: 'निर्देश हमेशा स्पष्ट क्यों होने चाहिए?',
      a: 'To help the computer perform the intended task',
      b: 'To make instructions confusing',
      c: 'To remove the task',
      correct: 'A',
      explanation: 'Clear instructions ensure the computer does exactly what you intended without bugs.',
      explanationHi: 'स्पष्ट निर्देश सुनिश्चित करते हैं कि कंप्यूटर बिना गलती के सही काम करे।',
    },
  ];

  /* ═══════════════════════════════════════════════════════════════════════
     GAME 10: Logic Builder — Build a Real-Life Process
     ═══════════════════════════════════════════════════════════════════════ */
  const game10Processes = [
    {
      title: 'Make tea process',
      titleHi: 'चाय बनाने की प्रक्रिया',
      correctSequence: ['Boil water', 'Add tea leaves & sugar', 'Add milk', 'Prepare the drink'],
      correctSequenceHi: ['पानी उबालो', 'चायपत्ती और चीनी डालो', 'दूध मिलाओ', 'छान कर तैयार करो'],
      cards: ['Prepare the drink', 'Add tea leaves & sugar', 'Boil water', 'Add milk'],
      cardsHi: ['छान कर तैयार करो', 'चायपत्ती और चीनी डालो', 'पानी उबालो', 'दूध मिलाओ'],
      lesson: 'Every real-world algorithm follows sequential order!',
    },
    {
      title: 'Send a message process',
      titleHi: 'संदेश (Message) भेजने की प्रक्रिया',
      correctSequence: ['Open app', 'Select contact', 'Type message', 'Send'],
      correctSequenceHi: ['ऐप खोलो', 'कॉन्टैक्ट चुनो', 'मैसेज टाइप करो', 'भेजो (Send)'],
      cards: ['Type message', 'Send', 'Open app', 'Select contact'],
      cardsHi: ['मैसेज टाइप करो', 'भेजो (Send)', 'ऐप खोलो', 'कॉन्टैक्ट चुनो'],
      lesson: 'Order matters: You cannot send a message before typing it!',
    },
    {
      title: 'Print a document process',
      titleHi: 'डॉक्यूमेंट प्रिंट करने की प्रक्रिया',
      correctSequence: ['Open document', 'Select Print', 'Choose printer', 'Print'],
      correctSequenceHi: ['डॉक्यूमेंट खोलो', 'प्रिंट विकल्प चुनो', 'प्रिंटर सेलेक्ट करो', 'प्रिंट करो'],
      cards: ['Choose printer', 'Print', 'Open document', 'Select Print'],
      cardsHi: ['प्रिंटर सेलेक्ट करो', 'प्रिंट करो', 'डॉक्यूमेंट खोलो', 'प्रिंट विकल्प चुनो'],
      lesson: 'Software guides hardware step-by-step.',
    },
  ];

  /* ═══════════════════════════════════════════════════════════════════════
     GAME 11: Terminal Mission — No-Code Instructions
     ═══════════════════════════════════════════════════════════════════════ */
  const game11Missions = [
    {
      scenario: 'A computer is asked to show a message on screen. What does it need?',
      scenarioHi: 'कंप्यूटर से स्क्रीन पर संदेश दिखाने को कहा गया। उसे क्या चाहिए?',
      correct: 'An instruction.',
      correctHi: 'एक निर्देश (An instruction)।',
      options: ['An instruction.', 'A cup of tea.', 'A heavy stone.', 'Random noise.'],
      optionsHi: ['एक निर्देश (An instruction)।', 'एक कप चाय।', 'भारी पत्थर।', 'शोर-शराबा।'],
      terminalCode: 'SYSTEM COMMAND >> DISPLAY "WELCOME TO 2050"',
    },
    {
      scenario: 'A task has no clear steps. What should the programmer do?',
      scenarioHi: 'किसी कार्य में स्पष्ट चरण नहीं हैं। प्रोग्रामर को क्या करना चाहिए?',
      correct: 'Define clear steps.',
      correctHi: 'स्पष्ट कदम परिभाषित करें (Define clear steps)।',
      options: ['Define clear steps.', 'Close eyes and hope.', 'Delete the computer.', 'Walk away.'],
      optionsHi: ['स्पष्ट कदम परिभाषित करें।', 'आँखें बंद करके उम्मीद करना।', 'कंप्यूटर तोड़ देना।', 'छोड़कर भाग जाना।'],
      terminalCode: 'SYSTEM LOG >> UNRESOLVED LOGIC >> RESOLUTION NEEDED',
    },
    {
      scenario: 'A robot performs the wrong task. What should you check?',
      scenarioHi: 'एक रोबोट गलत कार्य करता है। आपको क्या जांचना चाहिए?',
      correct: 'The instructions and how they were carried out.',
      correctHi: 'निर्देश और उनका निष्पादन कैसे हुआ (Instructions & execution)।',
      options: [
        'The instructions and how they were carried out.',
        'The color of the sky outside.',
        'The shoes of the programmer.',
        'The day of the week only.',
      ],
      optionsHi: [
        'निर्देश और उनका निष्पादन कैसे हुआ।',
        'आसमान का रंग।',
        'प्रोग्रामर के जूते।',
        'सिर्फ आज का वार।',
      ],
      terminalCode: 'DIAGNOSTIC TRACE >> VERIFY INSTRUCTION INTEGRITY',
    },
  ];

  /* ═══════════════════════════════════════════════════════════════════════
     GAME 12: Python World Builder — Design an Instruction World
     ═══════════════════════════════════════════════════════════════════════ */
  const game12Entities = [
    {
      id: 'drone',
      title: 'Design Delivery Robot / Drone',
      titleHi: 'डिलीवरी रोबोट / ड्रोन डिजाइन करें',
      objective: 'Task: Deliver a parcel safely',
      objectiveHi: 'लक्ष्य: सुरक्षित पार्सल पहुंचाएं',
      steps: ['Load parcel into container', 'Fly to customer location', 'Safely place parcel on porch'],
      stepsHi: ['कंटेनर में पार्सल लोड करो', 'ग्राहक के स्थान पर जाओ', 'सुरक्षित रूप से पार्सल रखो'],
      emoji: '🚁',
      celebration: 'Parcel delivered successfully! Customer rated 5 stars ⭐⭐⭐⭐⭐',
    },
    {
      id: 'light',
      title: 'Design Smart Home Light',
      titleHi: 'स्मार्ट होम लाइट डिजाइन करें',
      objective: 'Task: Light up room when instructed',
      objectiveHi: 'लक्ष्य: निर्देश मिलने पर कमरा रोशन करें',
      steps: ['Detect voice command', 'Verify command matches "Turn On"', 'Illuminate room with warm glow'],
      stepsHi: ['आवाज का निर्देश सुनो', 'सत्यापित करो कि आदेश "चालू करो" है', 'कमरे में गर्म रोशनी जलाओ'],
      emoji: '💡',
      celebration: 'Smart room illuminated automatically with zero effort!',
    },
    {
      id: 'nova',
      title: 'Design Virtual Assistant (NOVA)',
      titleHi: 'वर्चुअल असिस्टेंट NOVA डिजाइन करें',
      objective: 'Task: Follow user query and answer',
      objectiveHi: 'लक्ष्य: सवाल सुनकर सटीक जवाब देना',
      steps: ['Listen to user voice question', 'Look up weather database', 'Speak: "It is 24°C and sunny today!"'],
      stepsHi: ['सवाल सुनो', 'मौसम डेटाबेस में खोजो', 'जवाब दो: "आज 24°C और खिली धूप है!"'],
      emoji: '🤖',
      celebration: 'AI Assistant responded instantly with 100% accuracy!',
    },
  ];

  /* ───────────────────────────────────────────────────────────────────
     COMMON HANDLERS FOR QUIZ / SELECTION GAMES
     ─────────────────────────────────────────────────────────────────── */
  const handleCheckAnswer = (
    chosen: string,
    correct: string,
    onSuccessCallback?: () => void
  ) => {
    setSelectedOption(chosen);
    setIsAnswerChecked(true);

    if (chosen === correct) {
      setIsCorrect(true);
      soundEffects.playSuccess();
      setRobotPos((prev) => Math.min(100, prev + 33));
      setRobotSpeech(
        isHindi
          ? 'शाबाश! आपने सही निर्देश चुना।'
          : 'Great job! That instruction is crystal clear!'
      );
      if (onSuccessCallback) onSuccessCallback();
    } else {
      setIsCorrect(false);
      soundEffects.playError();
      setRobotSpeech(
        isHindi
          ? 'गलत निर्देश! कृपया दोबारा सोचें।'
          : 'Oops! Computers need exact instructions. Think again!'
      );
    }
  };

  /* ───────────────────────────────────────────────────────────────────
     SEQUENCE DROP / CLICK BUILDER HANDLERS
     ─────────────────────────────────────────────────────────────────── */
  const handleAddBlockToSequence = (block: string) => {
    soundEffects.playClick();
    if (!placedItems.includes(block)) {
      setPlacedItems((prev) => [...prev, block]);
    }
  };

  const handleRemoveBlockFromSequence = (block: string) => {
    soundEffects.playClick();
    setPlacedItems((prev) => prev.filter((b) => b !== block));
    setIsAnswerChecked(false);
  };

  const handleValidateSequence = (
    expectedSeq: string[],
    successCallback?: () => void
  ) => {
    setIsAnswerChecked(true);
    const matches =
      placedItems.length === expectedSeq.length &&
      placedItems.every((item, idx) => item === expectedSeq[idx]);

    if (matches) {
      setIsCorrect(true);
      soundEffects.playSuccess();
      setRobotPos(100);
      setRobotSpeech(
        isHindi
          ? 'अद्भुत! पूरा क्रम बिल्कुल सही है।'
          : 'Outstanding! The sequence executed perfectly!'
      );
      if (successCallback) successCallback();
    } else {
      setIsCorrect(false);
      soundEffects.playError();
      setRobotSpeech(
        isHindi
          ? 'क्रम में गड़बड़ी है! पहले क्या होगा, फिर क्या?'
          : 'Order matters! Review what must happen first.'
      );
    }
  };

  const currentTab = gameTitles[activeGameIndex];
  const allPackCompleted = completedGames.length >= 12;

  return (
    <div className="t1gp-container">
      {/* ── TOP HUD ── */}
      <div className="t1gp-hud">
        <div className="t1gp-hud-title-group">
          <span className="t1gp-pack-badge">
            <Zap className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
            TOPIC 1.1 GAME PACK
          </span>
          <h2 className="t1gp-hud-title">
            Future.AI — What is Programming? (12 Games)
          </h2>
        </div>

        <div className="t1gp-hud-stats">
          <div className="t1gp-stat-pill t1gp-stat-xp" title="Experience Points">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>+{totalXp} XP</span>
          </div>

          <div className="t1gp-stat-pill t1gp-stat-coins" title="Future Coins">
            <Coins className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
            <span>+{totalCoins} Coins</span>
          </div>

          <div className="t1gp-stat-pill" title="Completed Games">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>{completedGames.length} / 12 Games Done</span>
          </div>
        </div>
      </div>

      {/* ── 12-GAME HORIZONTAL TAB NAVIGATION ── */}
      <div className="t1gp-nav-bar">
        {gameTitles.map((g, idx) => {
          const isActive = activeGameIndex === idx;
          const isDone = completedGames.includes(g.num);
          return (
            <button
              key={g.num}
              type="button"
              className={`t1gp-nav-btn ${isActive ? 'is-active' : ''} ${isDone ? 'is-completed' : ''}`}
              onClick={() => switchGame(idx)}
              title={`${g.num}. ${g.title} (${g.sub})`}
            >
              <span>{g.icon}</span>
              <span>{g.num}. {g.title}</span>
              {isDone && <span className="t1gp-check-badge">✓</span>}
            </button>
          );
        })}
      </div>

      {/* ── GAME STAGE AREA ── */}
      <div className="t1gp-stage">
        {/* Game Header */}
        <div className="t1gp-game-header">
          <div className="t1gp-gh-left">
            <div className="t1gp-gh-icon">{currentTab.icon}</div>
            <div>
              <h3 className="t1gp-gh-title">
                Game {currentTab.num}: {currentTab.title}
              </h3>
              <p className="t1gp-gh-sub">{currentTab.sub}</p>
            </div>
          </div>

          <div className="t1gp-round-pill">
            <span>Round {roundIdx + 1} of 3</span>
          </div>
        </div>

        {/* ── ROBOT NOVA VISUAL SIMULATOR ── */}
        <div className="t1gp-sim-scene">
          <div className="t1gp-sim-grid-line" />
          <div className="t1gp-sim-header">
            <span className="t1gp-sim-badge">NOVA Robot Simulator • Mission Live</span>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Progress: {robotPos}%</span>
          </div>

          <div className="t1gp-sim-actor-row">
            <div
              className="t1gp-actor-robot"
              style={{ transform: `translateX(${robotPos * 2.2}px)` }}
            >
              <div className="t1gp-robot-avatar">🤖</div>
              <div className="t1gp-robot-speech">{robotSpeech}</div>
            </div>

            <div className="t1gp-actor-goal">
              <span>🎯</span>
              <span className="t1gp-goal-label">Destination</span>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            GAME 1: Code Adventure — Instruction Mission
            ───────────────────────────────────────────────────────────── */}
        {activeGameIndex === 0 && (() => {
          const qObj = game1Questions[roundIdx];
          const questionText = isHindi ? qObj.qHi : qObj.q;
          const optionsList = isHindi ? qObj.optionsHi : qObj.options;
          const correctAns = isHindi ? qObj.correctHi : qObj.correct;

          return (
            <div className="t1gp-mission-box">
              <h4 className="t1gp-q-text">{roundIdx + 1}. {questionText}</h4>

              <div className="t1gp-options-grid">
                {optionsList.map((opt, oIdx) => {
                  const letter = String.fromCharCode(65 + oIdx);
                  const isThisSelected = selectedOption === opt;
                  let cardClass = '';
                  if (isAnswerChecked) {
                    if (opt === correctAns) cardClass = 'is-correct';
                    else if (isThisSelected) cardClass = 'is-wrong';
                  } else if (isThisSelected) {
                    cardClass = 'is-selected';
                  }

                  return (
                    <button
                      key={opt}
                      type="button"
                      disabled={isAnswerChecked && isCorrect}
                      className={`t1gp-option-card ${cardClass}`}
                      onClick={() => handleCheckAnswer(opt, correctAns, () => {
                        if (roundIdx === 2) markGameComplete(1);
                      })}
                    >
                      <span className="t1gp-opt-letter">{letter}</span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              {/* Action row */}
              <div className="t1gp-action-bar">
                <div>
                  {isAnswerChecked && isCorrect && (
                    <span className="t1gp-feedback-text t1gp-feedback-success">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      {isHindi ? 'बिल्कुल सही निर्देश!' : 'Correct! NOVA moves toward the goal!'}
                    </span>
                  )}
                  {isAnswerChecked && !isCorrect && (
                    <span className="t1gp-feedback-text t1gp-feedback-error">
                      <AlertCircle className="w-4 h-4 text-red-600" />
                      {isHindi ? qObj.hintHi : qObj.hint}
                    </span>
                  )}
                </div>

                {isAnswerChecked && isCorrect && (
                  <button
                    type="button"
                    className="t1gp-btn-primary"
                    onClick={() => {
                      if (roundIdx < 2) {
                        setRoundIdx((r) => r + 1);
                        setSelectedOption(null);
                        setIsAnswerChecked(false);
                        setIsCorrect(false);
                      } else {
                        switchGame(1);
                      }
                    }}
                  >
                    <span>{roundIdx < 2 ? 'Next Round →' : 'Next Game: Drag & Drop →'}</span>
                  </button>
                )}
              </div>
            </div>
          );
        })()}

        {/* ─────────────────────────────────────────────────────────────
            GAME 2: Drag & Drop — Arrange the Instructions
            ───────────────────────────────────────────────────────────── */}
        {activeGameIndex === 1 && (() => {
          const taskObj = game2Tasks[roundIdx];
          const taskTitle = isHindi ? taskObj.titleHi : taskObj.title;
          const expectedSeq = isHindi ? taskObj.correctSequenceHi : taskObj.correctSequence;
          const availableBlocks = isHindi ? taskObj.allBlocksHi : taskObj.allBlocks;

          return (
            <div className="t1gp-mission-box">
              <h4 className="t1gp-q-text">
                {taskObj.emoji} Task {roundIdx + 1}: {taskTitle} — {isHindi ? 'ब्लॉक्स को सही क्रम में लगाएं' : 'Arrange the instruction blocks in order'}
              </h4>

              {/* Dropzone / Placed Sequence */}
              <div className="t1gp-seq-dropzone">
                {placedItems.length === 0 ? (
                  <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
                    {isHindi ? 'नीचे से ब्लॉक्स पर क्लिक करके सही क्रम बनाएं...' : 'Click blocks below in the correct order...'}
                  </span>
                ) : (
                  placedItems.map((item, idx) => (
                    <React.Fragment key={item}>
                      <span
                        className="t1gp-seq-slot"
                        onClick={() => handleRemoveBlockFromSequence(item)}
                        title="Click to remove"
                      >
                        <b>{idx + 1}.</b> {item} ✕
                      </span>
                      {idx < placedItems.length - 1 && <span className="t1gp-seq-arrow">→</span>}
                    </React.Fragment>
                  ))
                )}
              </div>

              {/* Pool of available blocks */}
              <div className="t1gp-pool-blocks">
                {availableBlocks.map((b) => {
                  const isUsed = placedItems.includes(b);
                  return (
                    <button
                      key={b}
                      type="button"
                      className={`t1gp-pool-block ${isUsed ? 'is-used' : ''}`}
                      onClick={() => handleAddBlockToSequence(b)}
                    >
                      + {b}
                    </button>
                  );
                })}
              </div>

              {/* Action row */}
              <div className="t1gp-action-bar">
                <button
                  type="button"
                  className="t1gp-btn-secondary"
                  onClick={() => {
                    setPlacedItems([]);
                    setIsAnswerChecked(false);
                    setIsCorrect(false);
                  }}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset Order
                </button>

                {!isCorrect ? (
                  <button
                    type="button"
                    disabled={placedItems.length !== expectedSeq.length}
                    className="t1gp-btn-primary"
                    onClick={() => handleValidateSequence(expectedSeq, () => {
                      if (roundIdx === 2) markGameComplete(2);
                    })}
                  >
                    <span>Validate Order</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="t1gp-btn-primary"
                    onClick={() => {
                      if (roundIdx < 2) {
                        setRoundIdx((r) => r + 1);
                        setPlacedItems([]);
                        setIsAnswerChecked(false);
                        setIsCorrect(false);
                      } else {
                        switchGame(2);
                      }
                    }}
                  >
                    <span>{roundIdx < 2 ? 'Next Task →' : 'Next Game: Pattern Detective →'}</span>
                  </button>
                )}
              </div>
            </div>
          );
        })()}

        {/* ─────────────────────────────────────────────────────────────
            GAME 3: Pattern Detective — What Comes Next?
            ───────────────────────────────────────────────────────────── */}
        {activeGameIndex === 2 && (() => {
          const pat = game3Patterns[roundIdx];
          const qText = pat.question;
          const opts = isHindi ? pat.optionsHi : pat.options;
          const correctA = isHindi ? pat.correctHi : pat.correct;

          return (
            <div className="t1gp-mission-box">
              <h4 className="t1gp-q-text">
                {pat.icon} Pattern {roundIdx + 1}: {qText}
              </h4>

              <div className="t1gp-options-grid">
                {opts.map((opt, oIdx) => {
                  const isThisSelected = selectedOption === opt;
                  let cardClass = '';
                  if (isAnswerChecked) {
                    if (opt === correctA) cardClass = 'is-correct';
                    else if (isThisSelected) cardClass = 'is-wrong';
                  } else if (isThisSelected) {
                    cardClass = 'is-selected';
                  }

                  return (
                    <button
                      key={opt}
                      type="button"
                      className={`t1gp-option-card ${cardClass}`}
                      onClick={() => handleCheckAnswer(opt, correctA, () => {
                        if (roundIdx === 2) markGameComplete(3);
                      })}
                    >
                      <span className="t1gp-opt-letter">{String.fromCharCode(65 + oIdx)}</span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              <div className="t1gp-action-bar">
                <div>
                  {isAnswerChecked && isCorrect && (
                    <span className="t1gp-feedback-text t1gp-feedback-success">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      {isHindi ? pat.logicHi : pat.logic}
                    </span>
                  )}
                </div>

                {isAnswerChecked && isCorrect && (
                  <button
                    type="button"
                    className="t1gp-btn-primary"
                    onClick={() => {
                      if (roundIdx < 2) {
                        setRoundIdx((r) => r + 1);
                        setSelectedOption(null);
                        setIsAnswerChecked(false);
                        setIsCorrect(false);
                      } else {
                        switchGame(3);
                      }
                    }}
                  >
                    <span>{roundIdx < 2 ? 'Next Pattern →' : 'Next Game: Daily Simulator →'}</span>
                  </button>
                )}
              </div>
            </div>
          );
        })()}

        {/* ─────────────────────────────────────────────────────────────
            GAME 4: Daily Life Simulator — Give Instructions
            ───────────────────────────────────────────────────────────── */}
        {activeGameIndex === 3 && (() => {
          const scen = game4Scenarios[roundIdx];
          const scenText = isHindi ? scen.scenarioHi : scen.scenario;
          const opts = isHindi ? scen.optionsHi : scen.options;
          const correctA = isHindi ? scen.correctHi : scen.correct;

          return (
            <div className="t1gp-mission-box">
              <h4 className="t1gp-q-text">{scen.emoji} {scenText}</h4>

              <div className="t1gp-options-grid">
                {opts.map((opt, oIdx) => {
                  const isThisSelected = selectedOption === opt;
                  let cardClass = '';
                  if (isAnswerChecked) {
                    if (opt === correctA) cardClass = 'is-correct';
                    else if (isThisSelected) cardClass = 'is-wrong';
                  } else if (isThisSelected) {
                    cardClass = 'is-selected';
                  }

                  return (
                    <button
                      key={opt}
                      type="button"
                      className={`t1gp-option-card ${cardClass}`}
                      onClick={() => handleCheckAnswer(opt, correctA, () => {
                        if (roundIdx === 2) markGameComplete(4);
                      })}
                    >
                      <span className="t1gp-opt-letter">{String.fromCharCode(65 + oIdx)}</span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              <div className="t1gp-action-bar">
                <div>
                  {isAnswerChecked && isCorrect && (
                    <span className="t1gp-feedback-text t1gp-feedback-success">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      {isHindi ? scen.explanationHi : scen.explanation}
                    </span>
                  )}
                </div>

                {isAnswerChecked && isCorrect && (
                  <button
                    type="button"
                    className="t1gp-btn-primary"
                    onClick={() => {
                      if (roundIdx < 2) {
                        setRoundIdx((r) => r + 1);
                        setSelectedOption(null);
                        setIsAnswerChecked(false);
                        setIsCorrect(false);
                      } else {
                        switchGame(4);
                      }
                    }}
                  >
                    <span>{roundIdx < 2 ? 'Next Scenario →' : 'Next Game: Bug Hunter →'}</span>
                  </button>
                )}
              </div>
            </div>
          );
        })()}

        {/* ─────────────────────────────────────────────────────────────
            GAME 5: Bug Hunter — Find the Instruction Mistake
            ───────────────────────────────────────────────────────────── */}
        {activeGameIndex === 4 && (() => {
          const bugObj = game5Bugs[roundIdx];
          const sitText = isHindi ? bugObj.situationHi : bugObj.situation;
          const opts = isHindi ? bugObj.optionsHi : bugObj.options;
          const correctA = isHindi ? bugObj.correctHi : bugObj.correct;

          return (
            <div className="t1gp-mission-box">
              <h4 className="t1gp-q-text">{bugObj.emoji} Bug #{roundIdx + 1}: {sitText}</h4>

              <div className="t1gp-options-grid">
                {opts.map((opt, oIdx) => {
                  const isThisSelected = selectedOption === opt;
                  let cardClass = '';
                  if (isAnswerChecked) {
                    if (opt === correctA) cardClass = 'is-correct';
                    else if (isThisSelected) cardClass = 'is-wrong';
                  } else if (isThisSelected) {
                    cardClass = 'is-selected';
                  }

                  return (
                    <button
                      key={opt}
                      type="button"
                      className={`t1gp-option-card ${cardClass}`}
                      onClick={() => handleCheckAnswer(opt, correctA, () => {
                        if (roundIdx === 2) markGameComplete(5);
                      })}
                    >
                      <span className="t1gp-opt-letter">{String.fromCharCode(65 + oIdx)}</span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              <div className="t1gp-action-bar">
                <div>
                  {isAnswerChecked && isCorrect && (
                    <span className="t1gp-feedback-text t1gp-feedback-success">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      {isHindi ? bugObj.bugExplanationHi : bugObj.bugExplanation}
                    </span>
                  )}
                </div>

                {isAnswerChecked && isCorrect && (
                  <button
                    type="button"
                    className="t1gp-btn-primary"
                    onClick={() => {
                      if (roundIdx < 2) {
                        setRoundIdx((r) => r + 1);
                        setSelectedOption(null);
                        setIsAnswerChecked(false);
                        setIsCorrect(false);
                      } else {
                        switchGame(5);
                      }
                    }}
                  >
                    <span>{roundIdx < 2 ? 'Next Bug →' : 'Next Game: Code Runner →'}</span>
                  </button>
                )}
              </div>
            </div>
          );
        })()}

        {/* ─────────────────────────────────────────────────────────────
            GAME 6: Code Runner — Instruction Sequence (Visual Maze)
            ───────────────────────────────────────────────────────────── */}
        {activeGameIndex === 5 && (() => {
          const lvl = game6Levels[roundIdx];
          const taskName = isHindi ? lvl.taskHi : lvl.task;
          const expSeq = isHindi ? lvl.correctSequenceHi : lvl.correctSequence;
          const pool = isHindi ? lvl.blocksHi : lvl.blocks;

          return (
            <div className="t1gp-mission-box">
              <h4 className="t1gp-q-text">{lvl.mazeEmoji} Maze Level {roundIdx + 1}: {taskName}</h4>

              <div className="t1gp-seq-dropzone">
                {placedItems.length === 0 ? (
                  <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
                    {isHindi ? 'नीचे से एक्शन ब्लॉक्स चुनें...' : 'Click action blocks below in order...'}
                  </span>
                ) : (
                  placedItems.map((item, idx) => (
                    <React.Fragment key={item}>
                      <span
                        className="t1gp-seq-slot"
                        onClick={() => handleRemoveBlockFromSequence(item)}
                      >
                        <b>{idx + 1}.</b> {item} ✕
                      </span>
                      {idx < placedItems.length - 1 && <span className="t1gp-seq-arrow">→</span>}
                    </React.Fragment>
                  ))
                )}
              </div>

              <div className="t1gp-pool-blocks">
                {pool.map((b) => (
                  <button
                    key={b}
                    type="button"
                    className={`t1gp-pool-block ${placedItems.includes(b) ? 'is-used' : ''}`}
                    onClick={() => handleAddBlockToSequence(b)}
                  >
                    + {b}
                  </button>
                ))}
              </div>

              <div className="t1gp-action-bar">
                <button
                  type="button"
                  className="t1gp-btn-secondary"
                  onClick={() => {
                    setPlacedItems([]);
                    setIsAnswerChecked(false);
                    setIsCorrect(false);
                  }}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset
                </button>

                {!isCorrect ? (
                  <button
                    type="button"
                    disabled={placedItems.length !== expSeq.length}
                    className="t1gp-btn-primary"
                    onClick={() => handleValidateSequence(expSeq, () => {
                      if (roundIdx === 2) markGameComplete(6);
                    })}
                  >
                    <span>Run Instructions</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="t1gp-btn-primary"
                    onClick={() => {
                      if (roundIdx < 2) {
                        setRoundIdx((r) => r + 1);
                        setPlacedItems([]);
                        setIsAnswerChecked(false);
                        setIsCorrect(false);
                      } else {
                        switchGame(6);
                      }
                    }}
                  >
                    <span>{roundIdx < 2 ? 'Next Maze →' : 'Next Game: Data Detective →'}</span>
                  </button>
                )}
              </div>
            </div>
          );
        })()}

        {/* ─────────────────────────────────────────────────────────────
            GAME 7: Data Detective — Identify the Input and Task
            ───────────────────────────────────────────────────────────── */}
        {activeGameIndex === 6 && (() => {
          const cObj = game7Cases[roundIdx];
          const scenText = isHindi ? cObj.scenarioHi : cObj.scenario;
          const opts = isHindi ? cObj.optionsHi : cObj.options;
          const correctA = isHindi ? cObj.correctHi : cObj.correct;

          return (
            <div className="t1gp-mission-box">
              <div style={{ background: '#f1f5f9', padding: '0.5rem 0.8rem', borderRadius: '8px', fontSize: '0.8rem', color: '#475569', marginBottom: '0.75rem', fontWeight: 700 }}>
                {cObj.inputData}
              </div>
              <h4 className="t1gp-q-text">{scenText}</h4>

              <div className="t1gp-options-grid">
                {opts.map((opt, oIdx) => {
                  const isThisSelected = selectedOption === opt;
                  let cardClass = '';
                  if (isAnswerChecked) {
                    if (opt === correctA) cardClass = 'is-correct';
                    else if (isThisSelected) cardClass = 'is-wrong';
                  } else if (isThisSelected) {
                    cardClass = 'is-selected';
                  }

                  return (
                    <button
                      key={opt}
                      type="button"
                      className={`t1gp-option-card ${cardClass}`}
                      onClick={() => handleCheckAnswer(opt, correctA, () => {
                        if (roundIdx === 2) markGameComplete(7);
                      })}
                    >
                      <span className="t1gp-opt-letter">{String.fromCharCode(65 + oIdx)}</span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              <div className="t1gp-action-bar">
                <div>
                  {isAnswerChecked && isCorrect && (
                    <span className="t1gp-feedback-text t1gp-feedback-success">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      {isHindi ? 'इनपुट और कार्य का सही मिलान हुआ!' : 'Correct! Input accurately mapped to its programmatic task!'}
                    </span>
                  )}
                </div>

                {isAnswerChecked && isCorrect && (
                  <button
                    type="button"
                    className="t1gp-btn-primary"
                    onClick={() => {
                      if (roundIdx < 2) {
                        setRoundIdx((r) => r + 1);
                        setSelectedOption(null);
                        setIsAnswerChecked(false);
                        setIsCorrect(false);
                      } else {
                        switchGame(7);
                      }
                    }}
                  >
                    <span>{roundIdx < 2 ? 'Next Case →' : 'Next Game: Build & Earn →'}</span>
                  </button>
                )}
              </div>
            </div>
          );
        })()}

        {/* ─────────────────────────────────────────────────────────────
            GAME 8: Build & Earn — Create an Instruction Plan
            ───────────────────────────────────────────────────────────── */}
        {activeGameIndex === 7 && (() => {
          const plan = game8Plans[roundIdx];
          const planTitle = isHindi ? plan.titleHi : plan.title;
          const expSeq = isHindi ? plan.correctSequenceHi : plan.correctSequence;
          const pool = isHindi ? plan.poolHi : plan.pool;

          return (
            <div className="t1gp-mission-box">
              <h4 className="t1gp-q-text">📋 {planTitle} (+{plan.xpReward} XP)</h4>

              <div className="t1gp-seq-dropzone">
                {placedItems.length === 0 ? (
                  <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
                    {isHindi ? 'चरणों को सही योजना में व्यवस्थित करें...' : 'Assemble the instruction plan step-by-step...'}
                  </span>
                ) : (
                  placedItems.map((item, idx) => (
                    <React.Fragment key={item}>
                      <span
                        className="t1gp-seq-slot"
                        onClick={() => handleRemoveBlockFromSequence(item)}
                      >
                        <b>Step {idx + 1}:</b> {item} ✕
                      </span>
                      {idx < placedItems.length - 1 && <span className="t1gp-seq-arrow">→</span>}
                    </React.Fragment>
                  ))
                )}
              </div>

              <div className="t1gp-pool-blocks">
                {pool.map((b) => (
                  <button
                    key={b}
                    type="button"
                    className={`t1gp-pool-block ${placedItems.includes(b) ? 'is-used' : ''}`}
                    onClick={() => handleAddBlockToSequence(b)}
                  >
                    + {b}
                  </button>
                ))}
              </div>

              <div className="t1gp-action-bar">
                <button
                  type="button"
                  className="t1gp-btn-secondary"
                  onClick={() => {
                    setPlacedItems([]);
                    setIsAnswerChecked(false);
                    setIsCorrect(false);
                  }}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset
                </button>

                {!isCorrect ? (
                  <button
                    type="button"
                    disabled={placedItems.length !== expSeq.length}
                    className="t1gp-btn-primary"
                    onClick={() => handleValidateSequence(expSeq, () => {
                      if (roundIdx === 2) markGameComplete(8, 60, 15);
                    })}
                  >
                    <span>Verify & Earn XP</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="t1gp-btn-primary"
                    onClick={() => {
                      if (roundIdx < 2) {
                        setRoundIdx((r) => r + 1);
                        setPlacedItems([]);
                        setIsAnswerChecked(false);
                        setIsCorrect(false);
                      } else {
                        switchGame(8);
                      }
                    }}
                  >
                    <span>{roundIdx < 2 ? 'Next Plan →' : 'Next Game: Quiz Arena →'}</span>
                  </button>
                )}
              </div>
            </div>
          );
        })()}

        {/* ─────────────────────────────────────────────────────────────
            GAME 9: Code Quiz Arena — Quick Challenge
            ───────────────────────────────────────────────────────────── */}
        {activeGameIndex === 8 && (() => {
          const q = game9Questions[roundIdx];
          const qText = isHindi ? q.qHi : q.q;

          return (
            <div className="t1gp-mission-box">
              <h4 className="t1gp-q-text">⚡ Challenge #{roundIdx + 1}: {qText}</h4>

              <div className="t1gp-options-grid">
                {[
                  { key: 'A', text: q.a },
                  { key: 'B', text: q.b },
                  { key: 'C', text: q.c },
                ].map((item) => {
                  const isThisSelected = selectedOption === item.key;
                  let cardClass = '';
                  if (isAnswerChecked) {
                    if (item.key === q.correct) cardClass = 'is-correct';
                    else if (isThisSelected) cardClass = 'is-wrong';
                  } else if (isThisSelected) {
                    cardClass = 'is-selected';
                  }

                  return (
                    <button
                      key={item.key}
                      type="button"
                      className={`t1gp-option-card ${cardClass}`}
                      onClick={() => handleCheckAnswer(item.key, q.correct, () => {
                        if (roundIdx === 2) markGameComplete(9);
                      })}
                    >
                      <span className="t1gp-opt-letter">{item.key}</span>
                      <span>{item.text}</span>
                    </button>
                  );
                })}
              </div>

              <div className="t1gp-action-bar">
                <div>
                  {isAnswerChecked && isCorrect && (
                    <span className="t1gp-feedback-text t1gp-feedback-success">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      {isHindi ? q.explanationHi : q.explanation}
                    </span>
                  )}
                </div>

                {isAnswerChecked && isCorrect && (
                  <button
                    type="button"
                    className="t1gp-btn-primary"
                    onClick={() => {
                      if (roundIdx < 2) {
                        setRoundIdx((r) => r + 1);
                        setSelectedOption(null);
                        setIsAnswerChecked(false);
                        setIsCorrect(false);
                      } else {
                        switchGame(9);
                      }
                    }}
                  >
                    <span>{roundIdx < 2 ? 'Next Question →' : 'Next Game: Logic Builder →'}</span>
                  </button>
                )}
              </div>
            </div>
          );
        })()}

        {/* ─────────────────────────────────────────────────────────────
            GAME 10: Logic Builder — Build a Real-Life Process
            ───────────────────────────────────────────────────────────── */}
        {activeGameIndex === 9 && (() => {
          const proc = game10Processes[roundIdx];
          const procTitle = isHindi ? proc.titleHi : proc.title;
          const expSeq = isHindi ? proc.correctSequenceHi : proc.correctSequence;
          const cards = isHindi ? proc.cardsHi : proc.cards;

          return (
            <div className="t1gp-mission-box">
              <h4 className="t1gp-q-text">⚙️ Process {roundIdx + 1}: {procTitle}</h4>

              <div className="t1gp-seq-dropzone">
                {placedItems.length === 0 ? (
                  <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
                    {isHindi ? 'प्रक्रिया के कार्ड्स को क्रम में लगाएं...' : 'Arrange process cards in logical sequence...'}
                  </span>
                ) : (
                  placedItems.map((item, idx) => (
                    <React.Fragment key={item}>
                      <span
                        className="t1gp-seq-slot"
                        onClick={() => handleRemoveBlockFromSequence(item)}
                      >
                        <b>{idx + 1}.</b> {item} ✕
                      </span>
                      {idx < placedItems.length - 1 && <span className="t1gp-seq-arrow">→</span>}
                    </React.Fragment>
                  ))
                )}
              </div>

              <div className="t1gp-pool-blocks">
                {cards.map((b) => (
                  <button
                    key={b}
                    type="button"
                    className={`t1gp-pool-block ${placedItems.includes(b) ? 'is-used' : ''}`}
                    onClick={() => handleAddBlockToSequence(b)}
                  >
                    + {b}
                  </button>
                ))}
              </div>

              <div className="t1gp-action-bar">
                <button
                  type="button"
                  className="t1gp-btn-secondary"
                  onClick={() => {
                    setPlacedItems([]);
                    setIsAnswerChecked(false);
                    setIsCorrect(false);
                  }}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset
                </button>

                {!isCorrect ? (
                  <button
                    type="button"
                    disabled={placedItems.length !== expSeq.length}
                    className="t1gp-btn-primary"
                    onClick={() => handleValidateSequence(expSeq, () => {
                      if (roundIdx === 2) markGameComplete(10);
                    })}
                  >
                    <span>Test Logic</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="t1gp-btn-primary"
                    onClick={() => {
                      if (roundIdx < 2) {
                        setRoundIdx((r) => r + 1);
                        setPlacedItems([]);
                        setIsAnswerChecked(false);
                        setIsCorrect(false);
                      } else {
                        switchGame(10);
                      }
                    }}
                  >
                    <span>{roundIdx < 2 ? 'Next Process →' : 'Next Game: Terminal Mission →'}</span>
                  </button>
                )}
              </div>
            </div>
          );
        })()}

        {/* ─────────────────────────────────────────────────────────────
            GAME 11: Terminal Mission — No-Code Instructions
            ───────────────────────────────────────────────────────────── */}
        {activeGameIndex === 10 && (() => {
          const miss = game11Missions[roundIdx];
          const scenText = isHindi ? miss.scenarioHi : miss.scenario;
          const opts = isHindi ? miss.optionsHi : miss.options;
          const correctA = isHindi ? miss.correctHi : miss.correct;

          return (
            <div className="t1gp-mission-box" style={{ background: '#0b1120', color: '#f8fafc', borderColor: '#1e293b' }}>
              <div style={{ fontFamily: 'monospace', color: '#38bdf8', fontSize: '0.78rem', marginBottom: '0.8rem' }}>
                {miss.terminalCode}
              </div>
              <h4 className="t1gp-q-text" style={{ color: '#ffffff' }}>{scenText}</h4>

              <div className="t1gp-options-grid">
                {opts.map((opt, oIdx) => {
                  const isThisSelected = selectedOption === opt;
                  let cardClass = '';
                  if (isAnswerChecked) {
                    if (opt === correctA) cardClass = 'is-correct';
                    else if (isThisSelected) cardClass = 'is-wrong';
                  } else if (isThisSelected) {
                    cardClass = 'is-selected';
                  }

                  return (
                    <button
                      key={opt}
                      type="button"
                      className={`t1gp-option-card ${cardClass}`}
                      style={{ background: '#1e293b', color: '#f1f5f9', borderColor: '#334155' }}
                      onClick={() => handleCheckAnswer(opt, correctA, () => {
                        if (roundIdx === 2) markGameComplete(11);
                      })}
                    >
                      <span className="t1gp-opt-letter" style={{ background: '#0f172a', color: '#38bdf8' }}>
                        {String.fromCharCode(65 + oIdx)}
                      </span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              <div className="t1gp-action-bar" style={{ borderColor: '#1e293b' }}>
                <div>
                  {isAnswerChecked && isCorrect && (
                    <span className="t1gp-feedback-text" style={{ color: '#34d399' }}>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      {isHindi ? 'कमांड सफलतापूर्वक निष्पादित हुई!' : 'Command authorized! Terminal instruction verified.'}
                    </span>
                  )}
                </div>

                {isAnswerChecked && isCorrect && (
                  <button
                    type="button"
                    className="t1gp-btn-primary"
                    onClick={() => {
                      if (roundIdx < 2) {
                        setRoundIdx((r) => r + 1);
                        setSelectedOption(null);
                        setIsAnswerChecked(false);
                        setIsCorrect(false);
                      } else {
                        switchGame(11);
                      }
                    }}
                  >
                    <span>{roundIdx < 2 ? 'Next Terminal Command →' : 'Final Game: World Builder →'}</span>
                  </button>
                )}
              </div>
            </div>
          );
        })()}

        {/* ─────────────────────────────────────────────────────────────
            GAME 12: Python World Builder — Design an Instruction World
            ───────────────────────────────────────────────────────────── */}
        {activeGameIndex === 11 && (() => {
          const entity = game12Entities[roundIdx];
          const entityTitle = isHindi ? entity.titleHi : entity.title;
          const expSeq = isHindi ? entity.stepsHi : entity.steps;

          return (
            <div className="t1gp-mission-box">
              <h4 className="t1gp-q-text">{entity.emoji} {entityTitle}</h4>
              <p style={{ color: '#0284c7', fontWeight: 800, fontSize: '0.85rem', margin: '0 0 1rem' }}>
                {isHindi ? entity.objectiveHi : entity.objective}
              </p>

              <div className="t1gp-seq-dropzone">
                {placedItems.length === 0 ? (
                  <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
                    {isHindi ? 'निर्देशों को जोड़कर वर्चुअल टास्क चालू करें...' : 'Assemble the instructions to activate the virtual entity...'}
                  </span>
                ) : (
                  placedItems.map((item, idx) => (
                    <React.Fragment key={item}>
                      <span
                        className="t1gp-seq-slot"
                        onClick={() => handleRemoveBlockFromSequence(item)}
                      >
                        <b>{idx + 1}.</b> {item} ✕
                      </span>
                      {idx < placedItems.length - 1 && <span className="t1gp-seq-arrow">→</span>}
                    </React.Fragment>
                  ))
                )}
              </div>

              <div className="t1gp-pool-blocks">
                {[...expSeq].reverse().map((b) => (
                  <button
                    key={b}
                    type="button"
                    className={`t1gp-pool-block ${placedItems.includes(b) ? 'is-used' : ''}`}
                    onClick={() => handleAddBlockToSequence(b)}
                  >
                    + {b}
                  </button>
                ))}
              </div>

              <div className="t1gp-action-bar">
                <button
                  type="button"
                  className="t1gp-btn-secondary"
                  onClick={() => {
                    setPlacedItems([]);
                    setIsAnswerChecked(false);
                    setIsCorrect(false);
                  }}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset
                </button>

                {!isCorrect ? (
                  <button
                    type="button"
                    disabled={placedItems.length !== expSeq.length}
                    className="t1gp-btn-primary"
                    onClick={() => handleValidateSequence(expSeq, () => {
                      if (roundIdx === 2) {
                        markGameComplete(12, 100, 25);
                        if (onComplete) onComplete();
                      }
                    })}
                  >
                    <span>Deploy Instruction Plan</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="t1gp-btn-primary"
                    onClick={() => {
                      if (roundIdx < 2) {
                        setRoundIdx((r) => r + 1);
                        setPlacedItems([]);
                        setIsAnswerChecked(false);
                        setIsCorrect(false);
                      } else {
                        markGameComplete(12, 100, 25);
                        if (onComplete) onComplete();
                      }
                    }}
                  >
                    <span>{roundIdx < 2 ? 'Next World Entity →' : '🏆 Complete Topic 1.1 Game Pack!'}</span>
                  </button>
                )}
              </div>
            </div>
          );
        })()}

        {/* ── ALL 12 GAMES COMPLETED CELEBRATION CARD ── */}
        {allPackCompleted && (
          <div className="t1gp-complete-card">
            <div className="t1gp-complete-trophy">🏆</div>
            <h3 className="t1gp-complete-title">
              Topic 1.1 Game Pack Mastered!
            </h3>
            <p className="t1gp-complete-sub">
              You completed all 12 games without writing complex syntax! You fully understand the core concept of programming: giving explicit, ordered, clear instructions to machines!
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="t1gp-btn-primary"
                onClick={() => {
                  soundEffects.playSuccess();
                  if (onNextStep) onNextStep();
                }}
              >
                <span>Continue to Next Milestone →</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
