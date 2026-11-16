/**
 * Female Teacher scripts — Topic 2 (Understanding print()) & Topic 3 (Printing Text and Numbers).
 */
import { L, ScriptMap } from './teacherScriptHelpers';

export const TOPIC_02_03_SCRIPTS: ScriptMap = {
  // ── Topic 2: Understanding print() ──
  'PB-02-01': {
    title: 'print() se Short Message Dikhana',
    lines: {
      1: L(
        'Line 1: print() ke andar Message',
        'Chalo, aaj print ko thoda dhyan se samajhte hain.\n\nprint ek Function hai. Function ka matlab hai ek ready-made kaam, jise naam se call karte hain.\n\nRound brackets ke andar jo bhi do, print use screen par dikha deta hai. Yahan humne "Python is fun and powerful." diya hai, quotes ke andar, toh ye ek String hai.\n\nRun karoge toh Output mein bilkul yahi sentence aayega.'
      ),
    },
  },
  'PB-02-02': {
    title: 'Do Messages ke beech Blank Line',
    lines: {
      1: L(
        'Line 1: Pehla Section Print karna',
        'Pehli line simple hai. "Section 1: Introduction" screen par print hoga, aur cursor agli line par chala jayega.'
      ),
      2: L(
        'Line 2: Khaali print() se Blank Line',
        'Ab dhyan do, yahan print ke brackets bilkul khaali hain.\n\nJab print ko kuch nahi dete, toh woh kuch likhta nahi, bas ek nayi line de deta hai. Yani Output mein ek empty line aa jati hai.\n\nIsse sections ke beech thodi space ban jati hai aur output padhne mein aasaan lagta hai.'
      ),
      3: L(
        'Line 3: Doosra Section Print karna',
        'Ab "Section 2: Details" print hua. Blank line ki wajah se ye pehle section se ek line chhodkar neeche aaya hai. Output mein dekho, beech mein ek gap saaf dikh raha hai.'
      ),
    },
  },
  'PB-02-03': {
    title: 'Single Quotes wali String',
    lines: {
      1: L(
        'Line 1: Single Quotes se String Banana',
        'Is baar humne double quotes ki jagah single quotes use kiye hain.\n\nPython mein dono chalte hain. Single quotes ho ya double quotes, dono String hi banate hain.\n\nBas ek baat yaad rakhna, jo quote se shuru kiya, usi quote se band karna hai. Output mein quotes nahi dikhte, sirf andar ka text dikhta hai.'
      ),
    },
  },
  'PB-02-04': {
    title: 'Double Quotes wali String',
    lines: {
      1: L(
        'Line 1: Double Quotes se String Banana',
        'Yahan text double quotes ke andar hai. Ye sabse common tareeka hai String likhne ka.\n\nPython quotes ko dekhkar samajh jata hai ki ye text hai, koi Variable ya command nahi. Run karne par sirf andar ka sentence print hoga.'
      ),
    },
  },
  'PB-02-05': {
    title: '\\n se Nayi Line Banana',
    lines: {
      1: L(
        'Line 1: \\n Escape Sequence',
        'Is line mein ek chhupa hua trick hai. Text ke beech mein backslash n likha hai.\n\nBackslash n ko Newline kehte hain. Python jab ise dekhta hai, toh wahan se text ko agli line par bhej deta hai.\n\nIsliye ek hi print se Output do lines mein aata hai: upar "Line One" aur neeche "Line Two".',
        'Is line mein text ke beech backslash n likha hai. Ise Newline kehte hain. Python wahan se text ko agli line par bhej deta hai. Isliye ek hi print se Output do lines mein aata hai, upar Line One aur neeche Line Two.'
      ),
    },
  },
  'PB-02-06': {
    title: '\\t se Tab Space Dena',
    lines: {
      1: L(
        'Line 1: \\t Tab Escape Sequence',
        'Yahan "Data" aur "Science" ke beech backslash t hai.\n\nBackslash t ka matlab hai Tab, yani ek badi si fixed space. Jaise keyboard par Tab key dabate ho.\n\nOutput mein dono words ke beech normal space se zyada gap dikhega. Columns align karne mein ye bahut kaam aata hai.',
        'Yahan Data aur Science ke beech backslash t hai. Iska matlab hai Tab, yani ek badi fixed space, jaise keyboard ki Tab key. Output mein dono words ke beech zyada gap dikhega.'
      ),
    },
  },
  'PB-02-09': {
    title: 'Comma Missing wala print() Fix karna',
    lines: {
      1: L(
        'Line 1: Arguments ke beech Comma',
        'Starter code mein "Python" aur "Rocks!" ke beech comma nahi tha. Isliye output gadbad ho raha tha.\n\nJab print ko ek se zyada values deni ho, toh har value ke beech comma lagana zaroori hai. Har value ko Argument kehte hain.\n\nComma lagate hi print dono Arguments ke beech apne aap ek space daal deta hai. Output aata hai: Python Rocks!'
      ),
    },
  },
  'PB-02-10': {
    title: 'sep se Formatted Receipt Banana',
    lines: {
      1: L(
        'Line 1: Header Row sep ke saath',
        'Ab ek chhoti si receipt banate hain.\n\nPehli line mein teen Arguments hain: ITEM, QTY aur PRICE. Aur end mein sep likha hai.\n\nsep ka matlab Separator. Normally print values ke beech ek space daalta hai, lekin sep se hum batate hain ki beech mein kya aana chahiye. Yahan humne space, pipe aur space diya hai, isliye heading table jaisi dikhti hai.'
      ),
      2: L(
        'Line 2: "-" * 25 se Divider Line',
        'Ye line mazedaar hai. Yahan ek dash ko 25 se multiply kiya hai.\n\nPython mein String ko number se multiply karo, toh woh String utni baar repeat ho jati hai. Toh 25 dashes ki ek line ban gayi, jo header aur data ko alag karti hai.'
      ),
      3: L(
        'Line 3: Data Row same sep ke saath',
        'Last line mein actual item hai: Apple, 3 aur price. Yahan bhi wahi sep use kiya, isliye ye row header ke saath neatly line up ho gayi.\n\nOutput mein ek clean teen line ki receipt dikh rahi hai.'
      ),
    },
  },

  // ── Topic 3: Printing Text and Numbers ──
  'PB-03-01': {
    title: 'Bina Quotes ke Integer Print karna',
    lines: {
      1: L(
        'Line 1: Number bina Quotes ke',
        'Dhyan se dekho, yahan 42 ke aas-paas koi quotes nahi hain.\n\nNumbers ko quotes ki zaroorat nahi hoti. Bina quotes ke 42 ek Integer hai, yani poora number bina decimal ke.\n\nprint use seedha screen par dikha deta hai. Output mein 42 aayega.'
      ),
    },
  },
  'PB-03-02': {
    title: 'Decimal Number Print karna',
    lines: {
      1: L(
        'Line 1: Float Value Print karna',
        'Is baar number mein point hai: 99.95.\n\nDecimal wale numbers ko Python mein Float kehte hain. Inhe bhi quotes nahi chahiye.\n\nprint ise jaisa ka taisa Output mein dikha deta hai.'
      ),
    },
  },
  'PB-03-03': {
    title: 'Text aur Number ek saath Print karna',
    lines: {
      1: L(
        'Line 1: Comma se Text aur Number Jodna',
        'Yahan print ko do cheezein di hain: ek text "Score:" aur ek number 100.\n\nDono ke beech comma hai. Comma se alag-alag type ki values bhi ek saath print ho jati hain, aur print beech mein ek space laga deta hai.\n\nOutput aata hai: Score: 100.'
      ),
    },
  },
  'PB-03-04': {
    title: 'Student ka Naam aur Age Print karna',
    lines: {
      1: L(
        'Line 1: Chaar Arguments ek print() mein',
        'Is line mein chaar Arguments hain: "Student:", "Aarav", "Age:" aur 19.\n\nPehle teen text hain, aakhri wala number hai. Comma ki wajah se sab ek line mein space ke saath print hote hain.\n\nOutput: Student: Aarav Age: 19.'
      ),
    },
  },
  'PB-03-05': {
    title: '8 + 5 ka Result Seedha Print karna',
    lines: {
      1: L(
        'Line 1: Expression pehle Calculate hota hai',
        'Yahan print ke andar 8 plus 5 likha hai, bina quotes ke.\n\nPython pehle brackets ke andar ka hisaab lagata hai. 8 plus 5 barabar 13. Phir woh 13 print karta hai.\n\nYaad rakhna, print expression nahi dikhata, uska Result dikhata hai.'
      ),
    },
  },
  'PB-03-06': {
    title: 'Negative aur Positive Number',
    lines: {
      1: L(
        'Line 1: -15 aur 25 Print karna',
        'Yahan pehla number minus 15 hai aur doosra 25.\n\nMinus sign number ke saath hi likha jata hai, isse woh Negative number ban jata hai. Dono normal Integers hain.\n\nComma ki wajah se Output mein dono space ke saath aate hain: minus 15 aur 25.'
      ),
    },
  },
  'PB-03-07': {
    title: '2 + 3 aur "2 + 3" ka Farak',
    lines: {
      1: L(
        'Line 1: Bina Quotes, Calculation hoti hai',
        'Pehli line mein 2 plus 3 bina quotes ke hai.\n\nToh Python ise maths samjhta hai aur Result 5 nikalta hai. Output mein aata hai: Calculation: 5.'
      ),
      2: L(
        'Line 2: Quotes ke andar, sirf Text',
        'Ab doosri line dekho. Yahan wahi 2 plus 3 hai, lekin quotes ke andar.\n\nQuotes lagate hi woh String ban gaya. Python uska hisaab nahi lagata, jaisa likha hai waisa hi print kar deta hai.\n\nYahi sabse important farak hai: quotes ke bahar maths, quotes ke andar text.'
      ),
    },
  },
  'PB-03-08': {
    title: 'String + Integer wala TypeError Fix karna',
    lines: {
      1: L(
        'Line 1: + ki jagah Comma',
        'Starter code mein "Marks: " plus 95 likha tha. Isse TypeError aata hai.\n\nKyun? Kyunki plus se Python ya toh do numbers jodta hai, ya do Strings. Text aur number ko plus se nahi jod sakte.\n\nFix simple hai: plus hata kar comma lagao. Ab print dono ko alag Arguments maanta hai aur Output aata hai: Marks: 95.'
      ),
    },
  },
  'PB-03-09': {
    title: 'Price Label bina Gap ke',
    lines: {
      1: L(
        'Line 1: sep="" se Space Hatana',
        'Normally comma lagane par print beech mein space daal deta hai. Lekin price mein dollar sign aur number ke beech gap achha nahi lagta.\n\nIsliye yahan sep ko khaali quotes diye hain. Matlab separator kuch nahi hoga.\n\nAb label aur 49.99 bilkul chipak kar print hote hain: Price: dollar 49.99.'
      ),
    },
  },
  'PB-03-10': {
    title: 'Product Summary Banana',
    lines: {
      1: L(
        'Line 1: Product ka Naam',
        'Pehli line mein simple text print ho raha hai: Product: Laptop.'
      ),
      2: L(
        'Line 2: Quantity Number ke saath',
        'Doosri line mein text "Quantity:" aur number 2 comma se jude hain. Output: Quantity: 2.'
      ),
      3: L(
        'Line 3: Total Cost Calculate karke Print',
        'Teesri line mein maza hai. Yahan 2 into 750 likha hai.\n\nPython pehle multiply karta hai, 1500 aata hai. Phir sep khaali hone ki wajah se dollar sign aur 1500 bina gap ke print hote hain.\n\nOutput: Total Cost: dollar 1500.'
      ),
    },
  },
};
