/**
 * Female Teacher scripts — Topic 4 (Multiple print() Statements) & Topic 5 (Comments in Python).
 */
import { L, ScriptMap } from './teacherScriptHelpers';

export const TOPIC_04_05_SCRIPTS: ScriptMap = {
  // ── Topic 4: Multiple print() Statements ──
  'PB-04-01': {
    title: 'First Name aur Last Name Alag Lines par',
    lines: {
      1: L('Line 1: First Name Print', 'Pehli print se "Priya" screen par aata hai. Har print ke baad cursor apne aap nayi line par chala jata hai.'),
      2: L('Line 2: Last Name Nayi Line par', 'Ab doosri print chali aur "Sharma" print hua. Kyunki cursor pehle hi nayi line par tha, isliye ye theek "Priya" ke neeche aaya.\n\nYaad rakho: jitni print, utni lines.'),
    },
  },
  'PB-04-02': {
    title: 'Teen Line ka Daily Schedule',
    lines: {
      1: L('Line 1: Subah ka Kaam', 'Pehli line mein subah 8 baje ka workout print ho raha hai.'),
      2: L('Line 2: Python Practice', 'Doosri line mein 10 baje ki Python Practice. Ye pehli line ke neeche aayegi.'),
      3: L('Line 3: Project Building', 'Teesri line mein dopahar 2 baje ka Project. Python code ko upar se neeche, ek-ek line karke chalata hai, isliye schedule bhi usi order mein print hota hai.'),
    },
  },
  'PB-04-03': {
    title: 'Chaar Line ka Restaurant Menu',
    lines: {
      1: L('Line 1: Pehla Item', 'Menu ki pehli line: Paneer Tikka, 240 rupaye.'),
      2: L('Line 2: Doosra Item', 'Doosri line: Veg Biryani. Dekho, text mein extra spaces dale hain taaki prices ek seedh mein aa jayein. Quotes ke andar spaces bhi exact print hoti hain.'),
      3: L('Line 3: Teesra Item', 'Teesri line: Butter Naan, 40 rupaye.'),
      4: L('Line 4: Chautha Item', 'Aur aakhri line: Mango Lassi. Chaar print, chaar lines, aur ek saaf-suthra menu card ready.'),
    },
  },
  'PB-04-04': {
    title: 'Heading ke baad Details',
    lines: {
      1: L('Line 1: Heading Print karna', 'Pehle ek heading print kar rahe hain, equal signs ke beech. Ye sirf design ke liye hai, taaki heading alag dikhe.'),
      2: L('Line 2: Server Status', 'Heading ke neeche pehli detail: Server: Online.'),
      3: L('Line 3: Latency', 'Aur doosri detail: Latency: 24ms. Real software mein status screens bilkul aise hi dikhti hain.'),
    },
  },
  'PB-04-05': {
    title: 'Do Sections ke beech Blank Line',
    lines: {
      1: L('Line 1: Step 1 Print', 'Pehle "Step 1: Download Python" print hota hai.'),
      2: L('Line 2: Khaali print()', 'Ye khaali print hai. Isse ek blank line aati hai, jo dono steps ke beech space bana deti hai.'),
      3: L('Line 3: Step 2 Print', 'Ab "Step 2: Install VS Code" print hua, ek line chhodkar. Output padhne mein ab zyada clear hai.'),
    },
  },
  'PB-04-06': {
    title: 'Star Staircase Pattern',
    lines: {
      1: L('Line 1: Ek Star', 'Staircase ki pehli seedhi: sirf ek star.'),
      2: L('Line 2: Do Stars', 'Doosri line mein do stars. Har line mein ek star badh raha hai.'),
      3: L('Line 3: Teen Stars', 'Teesri line mein teen stars.'),
      4: L('Line 4: Chaar Stars', 'Aur chauthi line mein chaar stars. Output mein seedhi jaisa pattern ban gaya. Aage Loops seekhoge toh yahi kaam ek-do line mein ho jayega.'),
    },
  },
  'PB-04-07': {
    title: 'Ek Line mein Jude do print() Fix karna',
    lines: {
      1: L('Line 1: Pehla Statement Alag Line par', 'Starter code mein dono print ek hi line mein bina kisi separator ke likhe the. Python ise samajh nahi pata aur SyntaxError deta hai.\n\nFix ye hai ki har statement apni alag line par likho. Pehli line ab sirf "Hello" print karti hai.'),
      2: L('Line 2: Doosra Statement', 'Doosri line par "World" print hota hai. Ab code bhi saaf hai aur Output bhi do lines mein sahi aata hai.'),
    },
  },
  'PB-04-08': {
    title: 'Student ID Card Print karna',
    lines: {
      1: L('Line 1: Card ka Title', 'ID card ki pehli line: CARD: Student ID.'),
      2: L('Line 2: Student ID', 'Doosri line mein ID number: ST-2050. Dhyan do, ye quotes ke andar hai, isliye text hai.'),
      3: L('Line 3: Department', 'Teesri line mein department: Computer Science.'),
      4: L('Line 4: Validity', 'Aur aakhri line mein validity: 2026 se 2030. Chaar print se ek chhota digital ID card ban gaya.'),
    },
  },
  'PB-04-09': {
    title: 'Paanch Line ka Motivational Message',
    lines: {
      1: L('Line 1: Believe in yourself', 'Pehli line: Believe in yourself.'),
      2: L('Line 2: Practice daily', 'Doosri line: Practice daily.'),
      3: L('Line 3: Bugs se Seekho', 'Teesri line: Embrace bugs as lessons. Sach mein, har Error kuch sikhata hai.'),
      4: L('Line 4: Clean Code', 'Chauthi line: Write clean code.'),
      5: L('Line 5: Never stop learning', 'Aur paanchvi line: Never stop learning! Paanch print, paanch lines, bilkul order mein.'),
    },
  },
  'PB-04-10': {
    title: 'Mini Invoice Banana',
    lines: {
      1: L('Line 1: Upar ka Border', 'Invoice ka upar wala border, equal signs se.'),
      2: L('Line 2: Invoice Number', 'Beech mein invoice number. Aage-peeche spaces dale hain taaki title center mein lage.'),
      3: L('Line 3: Neeche ka Border', 'Phir ek aur border, taaki heading ek box mein dikhe.'),
      4: L('Line 4: Subtotal', 'Ab amounts shuru: Subtotal 120 dollar.'),
      5: L('Line 5: Tax', 'Tax 10 percent, yani 12 dollar.'),
      6: L('Line 6: Total', 'Aur aakhir mein Total 132 dollar. Multiple print statements se ek readable invoice ban gaya.'),
    },
  },

  // ── Topic 5: Comments in Python ──
  'PB-05-01': {
    title: 'print ke upar Single-line Comment',
    lines: {
      1: L('Line 1: # se Comment', 'Ye line hash sign se shuru ho rahi hai. Ise Comment kehte hain.\n\nPython Comment ko bilkul ignore karta hai, chalata hi nahi. Ye sirf insaano ke liye note hai, ki neeche wala code kya karta hai.'),
      2: L('Line 2: Actual print()', 'Ab ye asli code hai. "Hello from Python!" print hoga. Output mein comment ka kuch bhi nahi aayega.'),
    },
  },
  'PB-05-02': {
    title: 'Inline Comment Variable ke saath',
    lines: {
      1: L('Line 1: Code ke aage Inline Comment', 'Yahan speed naam ke Variable mein 60 store ho raha hai.\n\nUske aage hash ke baad "Speed in km/h" likha hai. Ye Inline Comment hai, yani code ke saath usi line mein. Python hash ke baad ka sab ignore kar deta hai.'),
      2: L('Line 2: Value Print karna', 'Ab speed ki value print hoti hai. Output: Speed: 60.'),
    },
  },
  'PB-05-03': {
    title: 'Calculation ko Comment se Samjhana',
    lines: {
      1: L('Line 1: Formula wala Comment', 'Pehli line comment hai jo batati hai ki hum rectangle ka area nikal rahe hain: length into width.'),
      2: L('Line 2: area Calculate karna', 'Ab 10 into 5 calculate hokar 50 bana, aur woh area Variable mein store ho gaya.'),
      3: L('Line 3: Result Print', 'Aakhir mein area print hota hai: Area: 50. Comment ki wajah se koi bhi padhe, turant samajh jayega ki 10 aur 5 kya hain.'),
    },
  },
  'PB-05-04': {
    title: 'Comment se print() Band karna',
    lines: {
      1: L('Line 1: Feature 1', 'Pehli line normal hai, "Feature 1: Active" print hoga.'),
      2: L('Line 2: Commented-out Code', 'Dhyan se dekho, is print ke aage hash laga hai. Ab ye poori line Comment ban gayi.\n\nIsliye Python ise chalayega hi nahi. Code delete kiye bina temporarily band karne ka ye common tareeka hai.'),
      3: L('Line 3: Feature 3', 'Teesri line chalti hai. Output mein sirf Feature 1 aur Feature 3 aate hain, Feature 2 nahi.'),
    },
  },
  'PB-05-05': {
    title: 'Comments ke saath kaun si Lines Chalti hain',
    lines: {
      1: L('Line 1: Comment', 'Ye comment hai, Python ise skip karega.'),
      2: L('Line 2: balance = 1000', 'Ye asli code hai. balance Variable mein 1000 store hua.'),
      3: L('Line 3: Comment', 'Ye bhi comment hai, bas batata hai ki aage fees kategi.'),
      4: L('Line 4: balance mein se 50 Kam', 'Yahan right side pehle calculate hoti hai: 1000 minus 50, yani 950. Phir ye nayi value wapas balance mein store ho jati hai.'),
      5: L('Line 5: Final Balance Print', 'Output: Final Balance: 950. Dekho, sirf code wali lines chali, comments nahi.'),
    },
  },
  'PB-05-06': {
    title: '// ko # se Fix karna',
    lines: {
      1: L('Line 1: Sahi Python Comment', 'Starter code mein double slash se comment likha tha. Ye C ya JavaScript ka style hai, Python ka nahi. Isliye SyntaxError aata.\n\nPython mein comment ke liye sirf hash sign use hota hai. Ab ye line sahi comment hai.'),
      2: L('Line 2: print()', 'Ab program aaram se chalta hai aur "Fix my comment!" print hota hai.'),
    },
  },
  'PB-05-07': {
    title: 'Program mein Meaningful Comments',
    lines: {
      1: L('Line 1: Comment', 'Comment batata hai ki ab student ke marks define honge.'),
      2: L('Line 2: marks = 88', 'marks Variable mein 88 store hua.'),
      3: L('Line 3: Comment', 'Agla comment batata hai ki pass hone ki condition check hogi.'),
      4: L('Line 4: is_pass = marks >= 40', 'Yahan marks greater than ya equal to 40 check ho raha hai. 88 toh 40 se bada hai, isliye Result True aata hai, aur woh is_pass mein store hota hai.\n\nTrue aur False ko Boolean values kehte hain.'),
      5: L('Line 5: Comment', 'Ye comment batata hai ki ab result print hoga.'),
      6: L('Line 6: Result Print', 'Output: Passed: True. Har step ke upar chhota comment, aur poora program padhne mein aasaan.'),
    },
  },
  'PB-05-08': {
    title: 'Faltu Comments Hatana',
    lines: {
      1: L('Line 1: x = 5', 'Starter code mein har line ke upar comment tha, jaise "Set x to 5". Lekin ye toh code dekhkar hi samajh aata hai.\n\nAise obvious comments hata do. Ab x mein seedha 5 store hota hai.'),
      2: L('Line 2: y = 10', 'y mein 10 store hua.'),
      3: L('Line 3: Sum Print', 'x plus y, yani 15 print hota hai. Program ka kaam bilkul same hai, bas code ab zyada clean hai. Comment wahan likho jahan sach mein samjhana zaroori ho.'),
    },
  },
  'PB-05-09': {
    title: 'Comment aur Printed String ka Farak',
    lines: {
      1: L('Line 1: Asli Comment', 'Ye line hash se shuru hoti hai, quotes ke bahar. Toh ye asli Comment hai aur Python ise ignore karega.'),
      2: L('Line 2: Quotes ke andar #', 'Ab is line mein bhi hash hai, lekin quotes ke andar.\n\nQuotes ke andar jo bhi ho, woh String ka hissa hota hai. Isliye yahan hash comment nahi hai, woh text ki tarah print hoga.\n\nOutput mein hash ke saath poora sentence aata hai.'),
    },
  },
  'PB-05-10': {
    title: 'Welcome Program ko Document karna',
    lines: {
      1: L('Line 1: Program ka Naam', 'Upar ka comment batata hai ki ye kaun sa program hai.'),
      2: L('Line 2: Author', 'Ye comment batata hai ki code kisne likha. Professional files mein upar aise header comments hote hain.'),
      3: L('Line 3: app_name Variable', 'app_name mein "CodeQuest" naam ki String store hui.'),
      4: L('Line 4: version Variable', 'version mein 2.0 store hua, jo ek Float hai.'),
      5: L('Line 5: f-String se Print', 'Yahan quotes se pehle f laga hai. Iska matlab curly brackets ke andar Variables ki value bhar di jayegi.\n\nOutput: Starting CodeQuest v2.0.'),
    },
  },
};
