import { Day1Step } from '../types';

export const DAY1_STEPS: Day1Step[] = [
  {
    stepNumber: 1,
    id: 'step_what_is_python',
    title: 'Meet Python: Exact Instructions',
    titleHindi: 'पायथन से परिचय: सटीक निर्देश',
    titleHinglish: 'Meet Python: Exact Instructions',
    tagline: 'Python = instructions for computers.',
    conceptContext: {
      what: 'Python lets us give exact instructions to any computer.',
      why: 'Computers are super-fast, but cannot do anything without human commands.',
      realLife: 'Jaise kisi ko bolte ho: "Room mein jao, book uthao aur table par rakho."',
      doNow: 'Click "Transmit Signal" to send your first exact instruction to the machine.',
      hindiSummary: 'पायथन के माध्यम से हम कंप्यूटर को सीधे निर्देश देते हैं।',
      hinglishSummary: 'Python ke through hum computer ko step-by-step instructions dete hain.'
    },
    hints: [
      'Level 1: Python translates your human thought into machine electrical actions.',
      'Level 2: Click the pulse button to start the signal flow.',
      'Level 3: Notice how the signal travels from human mind to processor.',
      'Level 4: Ready to write your own Python code in step 2.'
    ],
    hinglishTip: 'Jaise tum kisi ko exact steps dete ho kaam karne ke liye, waise hi Python computer ko instructions deta hai.'
  },
  {
    stepNumber: 2,
    id: 'step_first_code',
    title: 'The First Signal: print()',
    titleHindi: 'पहला सिग्नल: स्क्रीन पर दिखाना',
    titleHinglish: 'The First Signal: print()',
    tagline: 'Make the machine speak.',
    conceptContext: {
      what: 'The print() instruction tells the machine to display a message.',
      why: 'Without output, you cannot see what the computer is computing.',
      realLife: 'Every SMS alert, UPI payment receipt, or score update begins with print.',
      doNow: 'Click RUN to execute print("Hello, Future").',
      hindiSummary: 'print() का मतलब है स्क्रीन पर संदेश दिखाना।',
      hinglishSummary: 'print() ka matlab screen par text dikhana.'
    },
    initialCode: 'print("Hello, Future")',
    expectedOutput: 'Hello, Future',
    hints: [
      'Level 1: The word print tells Python to show output.',
      'Level 2: The text sits safely inside quotes " ".',
      'Level 3: Click the green RUN button to execute.',
      'Level 4: Expected output is: Hello, Future'
    ],
    hinglishTip: 'print() ke andar quotes mein jo likhoge, computer wahi screen par dikhayega.'
  },
  {
    stepNumber: 3,
    id: 'step_change_code',
    title: 'You Are the Author',
    titleHindi: 'आप लेखक हैं: संदेश बदलें',
    titleHinglish: 'You Are the Author: Change the Message',
    tagline: 'Change the message.',
    conceptContext: {
      what: 'Modifying code changes the computer behavior instantly.',
      why: 'You are the author commanding the computer, not a spectator.',
      realLife: 'Personalized bank messages: "Welcome Aarav, your balance is ₹5,000".',
      doNow: 'Change the text inside quotes to: Welcome to 2050',
      hindiSummary: 'कोड बदलने से कंप्यूटर का आउटपुट तुरंत बदल जाता है।',
      hinglishSummary: 'Quotes ke andar text badalne se output turant change ho jata hai.'
    },
    initialCode: 'print("Hello, Future")',
    expectedOutput: 'Welcome to 2050',
    hints: [
      'Level 1: Edit the text between the quotation marks.',
      'Level 2: Keep the quotes " " intact.',
      'Level 3: Type exactly: Welcome to 2050',
      'Level 4: Code should be: print("Welcome to 2050")'
    ],
    hinglishTip: 'Quotes ke andar "Welcome to 2050" likh kar RUN press karo.'
  },
  {
    stepNumber: 4,
    id: 'step_why_useful',
    title: 'Superhuman Speed',
    titleHindi: 'कंप्यूटर की सुपरपावर: पलक झपकते गणना',
    titleHinglish: 'Superhuman Speed: 10,000 Calculations',
    tagline: '3.5 hours of human effort vs 0.002s in Python.',
    conceptContext: {
      what: 'Instant superhuman computation over massive numbers.',
      why: 'Humans get tired and make mistakes; Python calculates 10,000 items in milliseconds.',
      realLife: 'Bihar/UP Board exam results calculation: 10,000 students verified in 1 second.',
      doNow: 'Click "Test Speed" to watch Python process 10,000 records in 0.002 seconds.',
      hindiSummary: 'इंसान को 3.5 घंटे लगेंगे, पायथन 0.002 सेकंड में पूरा कर देता है।',
      hinglishSummary: 'Jo hisaab karne mein ghanton lagte hain, Python use 0.002s mein kar deta hai.'
    },
    hints: [
      'Level 1: Humans calculate one by one.',
      'Level 2: Python processes all records simultaneously in memory.',
      'Level 3: Press the comparison button.',
      'Level 4: Notice the 0.002s execution timer.'
    ],
    hinglishTip: '10,000 students ka average marks computer ek pal mein nikaal deta hai.'
  },
  {
    stepNumber: 5,
    id: 'step_variables',
    title: 'Variables: Teach Computer to Remember',
    titleHindi: 'वैरिएबल: कंप्यूटर को याद रखना सिखाएं',
    titleHinglish: 'Variables: Named Storage in Memory',
    tagline: 'A labelled storage container in computer memory.',
    conceptContext: {
      what: 'Store data in a named digital container: name = "Aarav".',
      why: 'Computers must remember student names, prices, and bank balances.',
      realLife: 'School app storing Aarav\'s name; Kirana store tracking rice price.',
      doNow: 'Run the code to store "Aarav" inside the container named "name".',
      hindiSummary: 'वैरिएबल एक नाम वाला डिब्बा है जिसमें हम जानकारी रखते हैं।',
      hinglishSummary: 'Variable ek labelled memory dabba hai: "name" label hai, "Aarav" value hai.'
    },
    teachingAnalogy: 'storage_box',
    initialCode: 'name = "Aarav"\nprint(name)',
    expectedOutput: 'Aarav',
    hints: [
      'Level 1: name is a labelled storage box.',
      'Level 2: = puts "Aarav" inside that box.',
      'Level 3: print(name) inspects the box contents.',
      'Level 4: Notice name has no quotes because it is a variable.'
    ],
    hinglishTip: '`name = "Aarav"` ka matlab: computer ki memory mein "name" naam ka dabba banao aur usme "Aarav" rakh do.'
  },
  {
    stepNumber: 6,
    id: 'step_remember_age',
    title: 'Remembering Numbers Without Quotes',
    titleHindi: 'संख्याओं को बिना कोट्स के स्टोर करना',
    titleHinglish: 'Numbers in Memory Without Quotes',
    tagline: 'Numbers belong in memory without quotes.',
    conceptContext: {
      what: 'Store numerical values directly: age = 20.',
      why: 'Numbers without quotes can be added, subtracted, and analyzed mathematically.',
      realLife: 'Product price = 800, Cricket runs = 184, Battery = 85%.',
      doNow: 'Store age = 20 and print it.',
      hindiSummary: 'संख्याओं को कोट्स के बिना लिखा जाता है ताकि उन पर गणित हो सके।',
      hinglishSummary: 'Numbers ko bina quotes ke store karte hain taaki computer add/subtract kar sake.'
    },
    initialCode: 'age = 20\nprint(age)',
    expectedOutput: '20',
    hints: [
      'Level 1: Numbers do not need quotes.',
      'Level 2: "20" is text, but 20 is a real number.',
      'Level 3: Keep age = 20 on line 1.',
      'Level 4: Click RUN to store and view the number.'
    ],
    hinglishTip: 'Agar quotes lagayenge toh wo text ban jayega. Bina quotes ke computer math kar sakta hai.'
  },
  {
    stepNumber: 7,
    id: 'step_predict',
    title: 'Predict Before Running: State Mutation',
    titleHindi: 'कोड चलाने से पहले अनुमान लगाएं',
    titleHinglish: 'Predict Before Running: Mental Model',
    tagline: 'Execute code in your mind first.',
    conceptContext: {
      what: 'Predict state changes before clicking RUN.',
      why: 'Elite engineers build mental models before execution.',
      realLife: 'Anticipating autopilot behavior before deploying updates.',
      doNow: 'Select what age will become after age = age + 1.',
      hindiSummary: 'दिमाग में पहले कोड चलाएं, फिर रन करें।',
      hinglishSummary: 'Pehle dimaag mein chalao: 20 mein 1 jodne par kya aayega?'
    },
    initialCode: 'age = 20\nage = age + 1\nprint(age)',
    expectedOutput: '21',
    hints: [
      'Level 1: Line 1 starts with 20 in memory.',
      'Level 2: Line 2 takes 20, adds 1, and saves it back.',
      'Level 3: What is 20 + 1?',
      'Level 4: Select 21, then click RUN to verify.'
    ],
    hinglishTip: 'Pehle 20 tha, fir usme 1 joda toh 21 ho gaya. Prediction select karo!'
  },
  {
    stepNumber: 8,
    id: 'step_first_bug',
    title: 'Bug Detective: Something is Missing',
    titleHindi: 'बग डिटेक्टिव: कुछ गायब है, उसे ढूंढिए',
    titleHinglish: 'Bug Detective: Find and Repair the Bug',
    tagline: 'Something is missing. Find it.',
    conceptContext: {
      what: 'Find and repair an unclosed parenthesis Syntax Error.',
      why: 'Bugs are discoveries, never failures. 80% of real coding is debugging.',
      realLife: 'Rocket launch software safety checks & UPI payment validation.',
      doNow: 'Inspect line 2 and fix the unclosed parenthesis in print(name).',
      hindiSummary: 'गलतियों से डरना नहीं है, उसे ढूंढकर ठीक करना सीखना है।',
      hinglishSummary: 'Line 2 ke aakhri mein `)` band karna bhool gaye hain. Usko add karo!'
    },
    initialCode: 'name = "Aarav"\nprint(name',
    expectedOutput: 'Aarav',
    hints: [
      'Level 1: Look at the last line.',
      'Level 2: Python expects something to close.',
      'Level 3: Notice the opening ( has no matching ).',
      'Level 4: Add ) at the end of line 2: print(name)'
    ],
    hinglishTip: 'Line 2 ke aakhri mein `)` lagao aur RUN dabao.'
  },
  {
    stepNumber: 9,
    id: 'step_real_world_data',
    title: 'Real-World India Mission: Kirana & 10,000 Records',
    titleHindi: 'रियल-वर्ल्ड मिशन: किराना स्टोर व 10,000 रिकॉर्ड्स',
    titleHinglish: 'Real-World India Mission: Data Science Bridge',
    tagline: 'Solve real store pricing & 10,000 student records.',
    conceptContext: {
      what: 'Use variables for store discounts and dataset statistics.',
      why: 'Python is not just syntax; Python answers real questions.',
      realLife: 'Small business store discount: Price ₹800, Discount ₹100; plus 10,000 student marks analysis.',
      doNow: 'Run the store pricing & student exam analysis script.',
      hindiSummary: 'पायथन सिर्फ कोड नहीं है, यह असली समस्याओं का समाधान करता है।',
      hinglishSummary: 'Product price aur discount calculate karo, aur 10,000 records ka average dekho.'
    },
    realIndiaContext: {
      domain: 'shopping',
      scenario: 'You run an online store in Jaipur. A customer buys an item for ₹800 with a ₹100 festival discount. Calculate final price, then analyze exam marks.',
      sampleData: 'price = 800, discount = 100, marks = [85, 92, 78, 99, 42]'
    },
    initialCode: '# 1. Real Kirana Store Discount\nprice = 800\ndiscount = 100\nfinal_price = price - discount\nprint("Final Store Price: ₹", final_price)\n\n# 2. 10,000 Student Marks Sample\nmarks = [85, 92, 78, 64, 99, 42, 88, 76, 91, 69]\nprint("Highest Score:", max(marks))\nprint("Average Score:", sum(marks) / len(marks))',
    expectedOutput: 'Final Store Price: ₹ 700\nHighest Score: 99\nAverage Score: 78.4',
    hints: [
      'Level 1: price - discount gives the final amount.',
      'Level 2: max(marks) finds the top student.',
      'Level 3: sum(marks) / len(marks) calculates the true average.',
      'Level 4: Click RUN to see variables solve real business and education problems.'
    ],
    hinglishTip: 'Dekho kaise variables real dukan ka bill calculate karte hain aur hazaron marks ka average nikaalte hain!'
  }
];
