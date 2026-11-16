/**
 * Female Teacher scripts — Topic 8 (Data Types), Topic 9 (type()), Topic 10 (Type Conversion).
 */
import { L, ScriptMap } from './teacherScriptHelpers';

const printLine = (label: string, out: string) => L(`Line 2: ${label} Print`, `Ab print se value dikhate hain. Output: ${out}.`);

export const TOPIC_08_10_SCRIPTS: ScriptMap = {
  // ── Topic 8: Python Data Types ──
  'PB-08-01': {
    title: 'Integer Variable mein',
    lines: {
      1: L('Line 1: items = 15', 'items mein 15 store hua. Ye Integer hai, yani bina decimal wala poora number. Python mein ise int kehte hain.'),
      2: printLine('items', 'Items: 15'),
    },
  },
  'PB-08-02': {
    title: 'Float Variable mein',
    lines: {
      1: L('Line 1: temperature = 36.6', 'temperature mein 36.6. Point wale number ko Float kehte hain. Temperature, price, marks percentage, ye sab aksar Float hote hain.'),
      2: printLine('temperature', 'Temperature: 36.6'),
    },
  },
  'PB-08-03': {
    title: 'String Variable mein',
    lines: {
      1: L('Line 1: city = "New Delhi"', 'city mein "New Delhi". Quotes ke andar ka text String hota hai, Python mein str. Beech ka space bhi String ka hissa hai.'),
      2: printLine('city', 'City: New Delhi'),
    },
  },
  'PB-08-04': {
    title: 'Boolean Variable mein',
    lines: {
      1: L('Line 1: has_passed = True', 'has_passed mein True. Boolean ke paas sirf do values hoti hain: True ya False. Dhyan do, T capital hai aur quotes nahi hain.'),
      2: printLine('has_passed', 'Status Passed: True'),
    },
  },
  'PB-08-05': {
    title: 'None Value',
    lines: {
      1: L('Line 1: user_session = None', 'None ka matlab hai "abhi koi value nahi". Jaise login se pehle session khaali hota hai. Ye zero ya khaali String se bhi alag hai.'),
      2: printLine('user_session', 'Session: None'),
    },
  },
  'PB-08-06': {
    title: '25 aur "25" ka Farak',
    lines: {
      1: L('Line 1: num = 25', 'num mein 25, bina quotes, toh Integer.'),
      2: L('Line 2: text = "25"', 'text mein "25", quotes ke saath, toh String. Dikhne mein same, par type alag.'),
      3: L('Line 3: num + 5', 'Number ke saath plus maths karta hai: 25 plus 5, yani 30.'),
      4: L('Line 4: text + "5"', 'String ke saath plus jodne ka kaam karta hai, ise Concatenation kehte hain. "25" ke peeche "5" chipak gaya aur bana "255".\n\nYahi farak samajhna bahut zaroori hai.'),
    },
  },
  'PB-08-07': {
    title: 'Teen Subjects ki List',
    lines: {
      1: L('Line 1: subjects List', 'Square brackets ke andar comma se alag values rakhne par List banti hai. Yahan teen subjects ek hi Variable mein aa gaye. List ka order fix rehta hai aur baad mein isse badal bhi sakte ho.'),
      2: L('Line 2: List Print', 'Print karne par poori List brackets ke saath dikhti hai.'),
    },
  },
  'PB-08-08': {
    title: 'Coordinates ka Tuple',
    lines: {
      1: L('Line 1: coords Tuple', 'Round brackets mein do values, ye Tuple hai. Tuple List jaisa hi hai, bas ek baar banane ke baad badal nahi sakte. Latitude, longitude jaisi fixed values ke liye perfect.'),
      2: L('Line 2: Tuple Print', 'Output mein dekho, 77.2090 ka aakhri zero hat gaya aur 77.209 aaya. Float ke end ke zero Python nahi dikhata.'),
    },
  },
  'PB-08-09': {
    title: 'name aur age wali Dictionary',
    lines: {
      1: L('Line 1: person Dictionary', 'Curly brackets mein Key aur Value ke pairs, ye Dictionary hai. "name" ek Key hai aur "Rohan" uski Value. Beech mein colon lagta hai.\n\nJaise dictionary mein word se meaning dhundhte ho, waise yahan Key se Value milti hai.'),
      2: L('Line 2: Print', 'Poori Dictionary curly brackets ke saath print hoti hai.'),
    },
  },
  'PB-08-10': {
    title: 'Chaar Data Types wala Profile',
    lines: {
      1: L('Line 1: name String', 'name mein "Neha", String.'),
      2: L('Line 2: age Integer', 'age mein 20, Integer.'),
      3: L('Line 3: cgpa Float', 'cgpa mein 8.9, Float.'),
      4: L('Line 4: is_graduated Boolean', 'is_graduated mein False, Boolean.'),
      5: L('Line 5: f-String Profile', 'Ab f-String mein charon Variables curly brackets mein daale. Python har jagah asli value bhar deta hai aur ek line ka profile print hota hai.'),
    },
  },

  // ── Topic 9: type() Function ──
  'PB-09-01': {
    title: 'type() se Integer Check',
    lines: {
      1: L('Line 1: x = 50', 'x mein 50 store hua.'),
      2: L('Line 2: type(x) Print', 'type function poochta hai: ye value kis type ki hai? Andar wala type pehle chalta hai, phir print uska jawab dikhata hai. Output: class int.'),
    },
  },
  'PB-09-02': {
    title: 'type() se String Check',
    lines: {
      1: L('Line 1: greeting = "Namaste"', 'greeting mein "Namaste", quotes ke saath.'),
      2: L('Line 2: type Print', 'Output: class str. str yani String.'),
    },
  },
  'PB-09-03': {
    title: 'type() se Float Check',
    lines: {
      1: L('Line 1: pi = 3.14159', 'pi mein decimal number.'),
      2: L('Line 2: type Print', 'Output: class float.'),
    },
  },
  'PB-09-04': {
    title: 'type() se Boolean Check',
    lines: {
      1: L('Line 1: is_active = True', 'is_active mein True.'),
      2: L('Line 2: type Print', 'Output: class bool. bool yani Boolean.'),
    },
  },
  'PB-09-05': {
    title: 'type() se None Check',
    lines: {
      1: L('Line 1: val = None', 'val mein None.'),
      2: L('Line 2: type Print', 'None ka apna alag type hota hai. Output: class NoneType.'),
    },
  },
  'PB-09-06': {
    title: 'Reassignment ke baad Type',
    lines: {
      1: L('Line 1: val = 42', 'val mein 42.'),
      2: L('Line 2: Pehla type', 'Abhi type hai int.'),
      3: L('Line 3: val mein String', 'Ab val mein text daal diya.'),
      4: L('Line 4: Doosra type', 'Ab type str aata hai. Variable ka type hamesha uski current value se decide hota hai.'),
    },
  },
  'PB-09-07': {
    title: '10 aur "10" ke Types',
    lines: {
      1: L('Line 1: type(10)', 'Bina quotes ka 10, toh type int.'),
      2: L('Line 2: type("10")', 'Quotes wala 10, toh type str. Quotes hi poora farak bana dete hain.'),
    },
  },
  'PB-09-08': {
    title: 'List ka Type',
    lines: {
      1: L('Line 1: nums List', 'nums mein teen numbers ki List.'),
      2: L('Line 2: type Print', 'Output: class list.'),
    },
  },
  'PB-09-09': {
    title: 'Dictionary ka Type',
    lines: {
      1: L('Line 1: user Dictionary', 'user mein do Key-Value pairs.'),
      2: L('Line 2: type Print', 'Output: class dict.'),
    },
  },
  'PB-09-10': {
    title: 'Paanch Values ke Types Labels ke saath',
    lines: {
      1: L('Line 1: Integer', '100 ka type: int.'),
      2: L('Line 2: Float', '99.9 ka type: float.'),
      3: L('Line 3: String', '"Hello" ka type: str.'),
      4: L('Line 4: Boolean', 'True ka type: bool.'),
      5: L('Line 5: None', 'Aur None ka type: NoneType. Labels mein extra spaces isliye hain taaki saare types ek seedh mein dikhein.'),
    },
  },

  // ── Topic 10: Type Conversion ──
  'PB-10-02': {
    title: 'Integer ko String banana',
    lines: {
      1: L('Line 1: num = 120', 'num mein 120, Integer.'),
      2: L('Line 2: str(num)', 'str function kisi bhi value ko String mein badal deta hai. Ab text mein "120" hai, text ki tarah.'),
      3: L('Line 3: Print', 'Output mein 120 aur type class str dikhta hai.'),
    },
  },
  'PB-10-03': {
    title: '"3.5" ko Float banana',
    lines: {
      1: L('Line 1: rate_str', 'rate_str mein "3.5", ye abhi String hai.'),
      2: L('Line 2: float()', 'float function is text ko decimal number bana deta hai. Ab isse maths kar sakte ho.'),
      3: L('Line 3: Print', 'Output: 3.5 aur type class float.'),
    },
  },
  'PB-10-04': {
    title: 'Float ko Integer: Decimal Kat jata hai',
    lines: {
      1: L('Line 1: raw = 9.87', 'raw mein 9.87.'),
      2: L('Line 2: int(raw)', 'Dhyan do, int round off nahi karta. Woh bas point ke baad ka hissa kaat deta hai. Toh 9.87 ban gaya 9, 10 nahi.'),
      3: L('Line 3: Print', 'Output: Truncated: 9.'),
    },
  },
  'PB-10-05': {
    title: 'Integer ko Float banana',
    lines: {
      1: L('Line 1: n = 42', 'n mein 42.'),
      2: L('Line 2: float(n)', 'float lagane se 42 ban jata hai 42.0.'),
      3: L('Line 3: Print', 'Output: Float: 42.0.'),
    },
  },
  'PB-10-06': {
    title: 'String Numbers ko Jodna',
    lines: {
      1: L('Line 1: str_a', 'str_a mein "15", text.'),
      2: L('Line 2: str_b', 'str_b mein "25", text.'),
      3: L('Line 3: int() phir +', 'Agar seedha jodte toh "1525" ban jata. Isliye pehle dono ko int se number banaya, phir joda. 15 plus 25, yani 40.'),
      4: L('Line 4: Print', 'Output: Total: 40.'),
    },
  },
  'PB-10-07': {
    title: 'String + Integer Error Fix karna',
    lines: {
      1: L('Line 1: age = 20', 'age mein 20.'),
      2: L('Line 2: Comma se Print', 'Starter code mein text ke saath plus se age joda tha, jisse TypeError aata. Ab comma use kiya hai.\n\nage plus 5 pehle calculate hokar 25 banta hai, phir text ke saath print hota hai.'),
    },
  },
  'PB-10-08': {
    title: 'int("3.5") Error ko Theek karna',
    lines: {
      1: L('Line 1: s = "3.5"', 's mein "3.5", text.'),
      2: L('Line 2: int(float(s))', 'Seedha int lagate toh ValueError aata, kyunki int ko point wala text samajh nahi aata.\n\nIsliye pehle float se 3.5 number banaya, phir int se decimal kaata. Andar wala function pehle chalta hai. Result 3.'),
      3: L('Line 3: Print', 'Output: 3.'),
    },
  },
  'PB-10-09': {
    title: 'Boolean ko Integer banana',
    lines: {
      1: L('Line 1: int(True)', 'Python ke andar True ki value 1 hoti hai. int(True) deta hai 1.'),
      2: L('Line 2: int(False)', 'Aur False ki value 0. int(False) deta hai 0.'),
    },
  },
  'PB-10-10': {
    title: 'Price Calculator Conversion se',
    lines: {
      1: L('Line 1: price_str', 'price_str mein "19.99", text.'),
      2: L('Line 2: qty_str', 'qty_str mein "4", text.'),
      3: L('Line 3: Convert karke Multiply', 'Price ko float mein aur quantity ko int mein badla, phir multiply kiya. 19.99 into 4.'),
      4: L('Line 4: round() se Print', 'round(total, 2) result ko do decimal tak set karta hai. Output: Total Bill: dollar 79.96.'),
    },
  },
};
