/**
 * Female Teacher scripts — Topic 6 (Variables and Naming Rules) & Topic 7 (Assigning and Updating Values).
 */
import { L, ScriptMap } from './teacherScriptHelpers';

export const TOPIC_06_07_SCRIPTS: ScriptMap = {
  // ── Topic 6: Variables and Naming Rules ──
  'PB-06-02': {
    title: 'Student ki Age Variable mein',
    lines: {
      1: L('Line 1: age = 21', 'Variable ko ek dabba samjho jis par naam likha hai. Yahan dabbe ka naam age hai aur andar 21 rakha hai.\n\nEqual to sign ka matlab barabar nahi, balki "right side ki value left wale naam mein daal do". Ise Assignment kehte hain.'),
      2: L('Line 2: age Print karna', 'Ab print mein age likha, bina quotes ke. Toh Python dabbe ke andar ki value nikalta hai. Output: Student Age: 21.'),
    },
  },
  'PB-06-03': {
    title: 'first_name aur last_name Variables',
    lines: {
      1: L('Line 1: first_name', 'first_name mein "Pooja" store hua. Dekho, do words ke beech underscore hai, space nahi.'),
      2: L('Line 2: last_name', 'last_name mein "Verma" store hua.'),
      3: L('Line 3: Dono Print', 'Dono Variables comma se print hue, toh beech mein space aa gaya. Output: Pooja Verma.'),
    },
  },
  'PB-06-04': {
    title: 'snake_case Naming',
    lines: {
      1: L('Line 1: course_title Variable', 'Variable ka naam course_title hai. Saare letters small aur words ke beech underscore. Is style ko snake_case kehte hain.\n\nPython mein Variables ke naam aise hi rakhne ka rule follow kiya jata hai.'),
      2: L('Line 2: Print', 'Output: Enrolled in: Data Analytics and Python.'),
    },
  },
  'PB-06-05': {
    title: 'Digit se Shuru hone wala Naam Fix karna',
    lines: {
      1: L('Line 1: place_1st', 'Starter code mein naam tha 1st_place. Lekin Variable ka naam kabhi number se shuru nahi ho sakta, isliye SyntaxError aata.\n\nFix: number ko peeche le jao. Ab naam place_1st hai, jo bilkul valid hai.'),
      2: L('Line 2: Print', 'Ab Gold print hota hai bina kisi Error ke.'),
    },
  },
  'PB-06-06': {
    title: 'Space wala Variable Naam Fix karna',
    lines: {
      1: L('Line 1: user_name', 'Pehle naam tha "user name", beech mein space ke saath. Python space dekhkar sochta hai ye do alag cheezein hain, aur Error deta hai.\n\nIsliye space ki jagah underscore lagao: user_name.'),
      2: L('Line 2: Print', 'Ab Aman print hota hai.'),
    },
  },
  'PB-06-07': {
    title: 'Keyword ko Variable Naam banana Fix karna',
    lines: {
      1: L('Line 1: batch_class', 'Starter code mein Variable ka naam class tha. Lekin class Python ka reserved Keyword hai. Aise words ka Python ke liye khaas matlab hota hai, jaise if, for, def.\n\nInhe Variable ka naam nahi bana sakte. Isliye naam badalkar batch_class kar diya.'),
      2: L('Line 2: Print', 'Output: Batch A.'),
    },
  },
  'PB-06-08': {
    title: 'name aur Name Alag hain',
    lines: {
      1: L('Line 1: name small letters mein', 'Pehle small letters wale name mein "lowercase" store hua.'),
      2: L('Line 2: Name Capital N ke saath', 'Ab capital N wale Name mein "Capitalized" store hua.\n\nPython Case-sensitive hai. Matlab small aur capital letters ko alag maanta hai. Toh ye do bilkul alag Variables hain.'),
      3: L('Line 3: name Print', 'Pehle name print hua: lowercase.'),
      4: L('Line 4: Name Print', 'Phir Name print hua: Capitalized. Dono ki values alag hain, kyunki dono alag dabbe hain.'),
    },
  },
  'PB-06-09': {
    title: 'Product ke liye Teen Descriptive Variables',
    lines: {
      1: L('Line 1: product_id', 'product_id mein "PRD-99" String store hui. Naam padhte hi pata chal jata hai ki andar kya hai.'),
      2: L('Line 2: product_price', 'product_price mein 450.0, yani Float.'),
      3: L('Line 3: is_in_stock', 'is_in_stock mein True. Ye Boolean hai. "is" se shuru hone wale naam aksar haan ya naa wali value ke liye hote hain.'),
      4: L('Line 4: Teeno Print', 'Teeno ek line mein print hote hain: PRD-99, 450.0, True.'),
    },
  },
  'PB-06-10': {
    title: 'Valid Names se Student Profile',
    lines: {
      1: L('Line 1: student_id', 'student_id mein "ST-101".'),
      2: L('Line 2: student_name', 'student_name mein "Kavita".'),
      3: L('Line 3: gpa_score', 'gpa_score mein 3.85, ek Float.'),
      4: L('Line 4: is_active', 'is_active mein True.'),
      5: L('Line 5: ID Print', 'Ab ek-ek karke print karte hain. Pehle ID: ST-101.'),
      6: L('Line 6: Name Print', 'Name: Kavita.'),
      7: L('Line 7: GPA Print', 'GPA: 3.85.'),
      8: L('Line 8: Active Print', 'Active: True. Saare naam snake_case mein, saaf aur samajhne layak.'),
    },
  },

  // ── Topic 7: Assigning and Updating Values ──
  'PB-07-02': {
    title: 'Counter ko 1 se Badhana',
    lines: {
      1: L('Line 1: count = 5', 'count mein 5 store hua.'),
      2: L('Line 2: count = count + 1', 'Ye line pehli baar thodi ajeeb lagti hai. count barabar count plus 1?\n\nYaad rakho, equal to ka matlab Assignment hai. Python pehle right side calculate karta hai: purana count 5, plus 1, yani 6. Phir ye 6 wapas count mein daal deta hai.\n\nPurani value 5 replace ho gayi.'),
      3: L('Line 3: Print', 'Output: Count: 6.'),
    },
  },
  'PB-07-03': {
    title: 'Price mein Tax Jodna',
    lines: {
      1: L('Line 1: price = 100', 'price mein 100 store hua.'),
      2: L('Line 2: tax = 18', 'tax mein 18.'),
      3: L('Line 3: price = price + tax', 'Right side pehle: 100 plus 18, yani 118. Ye nayi value price mein update ho gayi.'),
      4: L('Line 4: Print', 'Output: Final Price: 118.'),
    },
  },
  'PB-07-04': {
    title: 'Do Variables ki Value Swap karna',
    lines: {
      1: L('Line 1: a = 10', 'a mein 10.'),
      2: L('Line 2: b = 20', 'b mein 20.'),
      3: L('Line 3: a, b = b, a', 'Ye Python ka shortcut hai. Right side pehle ban jati hai: b aur a, yani 20 aur 10. Phir pehli value a ko aur doosri b ko mil jati hai.\n\nBina kisi teesre Variable ke dono ki values aapas mein badal gayi.'),
      4: L('Line 4: a Print', 'Ab a ki value 20 hai.'),
      5: L('Line 5: b Print', 'Aur b ki value 10.'),
    },
  },
  'PB-07-05': {
    title: '+= se Value Badhana',
    lines: {
      1: L('Line 1: coins = 50', 'coins mein 50.'),
      2: L('Line 2: coins += 25', 'Plus equal ek short form hai. coins plus equal 25 ka matlab hai coins barabar coins plus 25.\n\nToh 50 plus 25, yani 75, coins mein store ho gaya.'),
      3: L('Line 3: Print', 'Output: Total Coins: 75.'),
    },
  },
  'PB-07-06': {
    title: 'Pehle Value do, phir Update karo',
    lines: {
      1: L('Line 1: total = 0', 'Starter code mein total ko bina value diye seedha update kiya tha. Python ko pata hi nahi tha total kya hai, isliye NameError aaya.\n\nFix: pehle total mein 0 rakh do. Ise Initialize karna kehte hain.'),
      2: L('Line 2: total += 5', 'Ab total plus equal 5 chalega. 0 plus 5, yani 5.'),
      3: L('Line 3: Print', 'Output: Total: 5.'),
    },
  },
  'PB-07-07': {
    title: 'Bank Balance Track karna',
    lines: {
      1: L('Line 1: balance = 500', 'Account mein shuru mein 500.'),
      2: L('Line 2: balance += 200', '200 deposit hua. 500 plus 200, ab balance 700.'),
      3: L('Line 3: balance -= 150', 'Minus equal se 150 nikale. 700 minus 150, ab balance 550.'),
      4: L('Line 4: Print', 'Output: Balance: 550.'),
    },
  },
  'PB-07-08': {
    title: 'Variable ka Type Badalna',
    lines: {
      1: L('Line 1: data = 100', 'data mein 100, yani Integer.'),
      2: L('Line 2: type() Print', 'type function batata hai value kis type ki hai. Output: class int.'),
      3: L('Line 3: data = "One Hundred"', 'Ab usi data mein String daal di. Python mein Variable ka type fix nahi hota, jo value doge wahi type ban jata hai. Ise Dynamic Typing kehte hain.'),
      4: L('Line 4: type() phir se', 'Ab type batata hai: class str. Same Variable, naya type.'),
    },
  },
  'PB-07-09': {
    title: '*= se Value Double karna',
    lines: {
      1: L('Line 1: level = 4', 'level mein 4.'),
      2: L('Line 2: level *= 2', 'Star equal ka matlab multiply karke wapas store karo. 4 into 2, yani 8.'),
      3: L('Line 3: Print', 'Output: Doubled Level: 8.'),
    },
  },
  'PB-07-10': {
    title: 'Teen Rounds ka Score Keeper',
    lines: {
      1: L('Line 1: score = 0', 'Game shuru, score 0.'),
      2: L('Line 2: Round 1', 'Pehle round mein 15 points. Score ab 15.'),
      3: L('Line 3: Round 2', 'Doosre round mein 20. 15 plus 20, score 35.'),
      4: L('Line 4: Round 3', 'Teesre round mein 35. 35 plus 35, score 70.'),
      5: L('Line 5: Final Score', 'Output: Final Game Score: 70. Har update purani value par hi judta gaya.'),
    },
  },
};
