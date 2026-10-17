import { LanguageMode } from '../types';
import { DiagnosisEngine } from './diagnosisEngine';

export interface TutorMessage {
  id: string;
  sender: 'learner' | 'tutor';
  text: string;
  hindiText?: string;
  hinglishText?: string;
  stage?: 'question' | 'hint' | 'specific_hint' | 'partial_guidance' | 'explanation';
  timestamp: string;
}

export class AiTutorService {
  /**
   * Socratic context database for 2050 missions (India Edition)
   */
  private static missionContexts: Record<string, {
    concept: string;
    stages: {
      question: { en: string; hi: string; hinglish: string };
      hint: { en: string; hi: string; hinglish: string };
      specificHint: { en: string; hi: string; hinglish: string };
      partialGuidance: { en: string; hi: string; hinglish: string };
      explanation: { en: string; hi: string; hinglish: string };
    };
  }> = {
    'step_variables': {
      concept: 'Variables & Memory Storage',
      stages: {
        question: {
          en: "Imagine building a school app for Aarav. Where does the computer hold his name while the app runs?",
          hi: "कल्पना करें कि आप आरव के लिए एक स्कूल ऐप बना रहे हैं। ऐप चलते समय कंप्यूटर उसका नाम कहां याद रखेगा?",
          hinglish: "Socho tum ek school app bana rahe ho. App ko Aarav ka naam yaad rakhna hai. Computer isko kaha hold karega?"
        },
        hint: {
          en: "Computers have no natural memory unless we allocate a named container in RAM.",
          hi: "कंप्यूटर के पास कोई स्वाभाविक याददाश्त नहीं होती, जब तक हम मेमोरी में एक नाम वाला डिब्बा न बनाएं।",
          hinglish: "Computer ko jab tak hum ek labelled box na dein, wo kuch yaad nahi rakh sakta."
        },
        specificHint: {
          en: "Look at `name = 'Aarav'`. The word on the left is the label; the text on the right is the stored value.",
          hi: "`name = 'Aarav'` को देखें। बाईं ओर का शब्द लेबल है; दाईं ओर का टेक्स्ट अंदर रखी गई वैल्यू है।",
          hinglish: "`name = 'Aarav'` dekho. Left side ka naam box ka label hai, right side ki value uske andar stored hai."
        },
        partialGuidance: {
          en: "To store a student score: `score = 95`. To print it: `print(score)` without quotation marks.",
          hi: "स्कोर स्टोर करने के लिए: `score = 95`। इसे स्क्रीन पर दिखाने के लिए बिना कोट्स के `print(score)` लिखें।",
          hinglish: "Score store karne ke liye: `score = 95` likho, aur print karne ke liye bina quotes ke `print(score)` likho."
        },
        explanation: {
          en: "A variable is simply a named storage location in memory. It lets programs remember, update, and reuse information dynamically.",
          hi: "वैरिएबल कंप्यूटर की मेमोरी में एक नमित स्टोरेज (named container) है। यह प्रोग्राम को डेटा याद रखने और बदलने की क्षमता देता है।",
          hinglish: "Variable basically ek labelled memory box hai. Iske bina computer na student ka naam yaad rakh sakta hai, na bank balance."
        }
      }
    },
    'step_predict': {
      concept: 'Mental Prediction & State Mutation',
      stages: {
        question: {
          en: "Line 1 puts 20 into memory box `age`. What does line 2 `age = age + 1` do to that box?",
          hi: "लाइन 1 मेमोरी में `age` के डिब्बे में 20 रखती है। लाइन 2 `age = age + 1` उस डिब्बे के साथ क्या करती है?",
          hinglish: "Line 1 box mein 20 rakhti hai. Line 2 `age = age + 1` chalne par us box mein kya ho jayega?"
        },
        hint: {
          en: "The right side `age + 1` calculates first: 20 + 1 = 21. Then = puts 21 back into age.",
          hi: "पहले दाईं ओर का जोड़ होता है: 20 + 1 = 21। फिर = उस 21 को वापस डिब्बे में डाल देता है।",
          hinglish: "Pehle right side calculate hoti hai: 20 + 1 = 21. Fir = us 21 ko age box mein save kar deta hai."
        },
        specificHint: {
          en: "Notice we only added 1, so 20 becomes 21. The previous 20 is overwritten.",
          hi: "हमने सिर्फ 1 जोड़ा है, इसलिए 20 अब 21 बन गया। पुराना 20 मिट जाता है।",
          hinglish: "Humne sirf 1 joda, toh purana 20 replace hoke 21 ban gaya."
        },
        partialGuidance: {
          en: "Select 21 as your prediction, then click RUN CODE to observe the output console.",
          hi: "21 का चयन करें, फिर RUN CODE दबाकर देखें।",
          hinglish: "21 select karo aur RUN CODE press karke verify karo!"
        },
        explanation: {
          en: "Variables can mutate over time. State changes from line to line, which is why tracing execution in your mind builds elite engineering instincts.",
          hi: "वैरिएबल समय के साथ बदलते हैं। लाइन दर लाइन स्टेट बदलना ही प्रोग्रामिंग की वास्तविक शक्ति है।",
          hinglish: "Variables badal sakte hain. Ek line se doosri line tak code ko dimaag mein chalana hi real programming skill hai."
        }
      }
    },
    'step_first_bug': {
      concept: 'Syntax Error Repair',
      stages: {
        question: {
          en: "Notice line 2: `print(name`. What symbol is missing at the very end?",
          hi: "लाइन 2 को देखें: `print(name`। अंत में कौन सा चिन्ह गायब है?",
          hinglish: "Line 2 dekho: `print(name`. Bilkul last mein kya band karna bhool gaye?"
        },
        hint: {
          en: "Every opening bracket `(` requires a matching closing bracket `)` in Python.",
          hi: "पायथन में हर खुलने वाले ब्रैकेट `(` के लिए एक बंद होने वाला `)` जरूरी है।",
          hinglish: "Python mein har khulne wale bracket `(` ka ek jodi closing bracket `)` hona zaroori hai."
        },
        specificHint: {
          en: "Look at the end of line 2: add a closing parenthesis `)`.",
          hi: "लाइन 2 के अंत में एक बंद होने वाला कोष्ठक `)` जोड़ें।",
          hinglish: "Line 2 ke aakhri mein `)` laga do taaki print instruction band ho sake."
        },
        partialGuidance: {
          en: "Change line 2 to: `print(name)` and click RUN CODE.",
          hi: "लाइन 2 को `print(name)` करें और RUN CODE दबाएं।",
          hinglish: "Line 2 ko `print(name)` karke RUN CODE dabao."
        },
        explanation: {
          en: "Bugs are not failures of intelligence; they are simple punctuation mismatches between human intent and computer syntax.",
          hi: "बग्स किसी बुद्धिमत्ता की कमी नहीं हैं; यह केवल सिंटैक्स का एक छोटा सा मेल न होना है।",
          hinglish: "Bug se ghabraane ki bilkul zaroorat nahi hai. Real software mein 80% kaam debugging ka hi hota hai."
        }
      }
    }
  };

  public static getInitialGreeting(missionId: string, lang: LanguageMode = 'hinglish'): TutorMessage {
    let text = "Main 2050 Socratic AI Mentor hoon. Main direct answer nahi doonga — hum milkar discover karenge. Kuch bhi poocho!";
    if (lang === 'hindi') {
      text = "नमस्ते! मैं आपका 2050 AI मेंटर हूँ। मैं सीधे उत्तर नहीं दूँगा, बल्कि सोचने में मदद करूँगा। बेझिझक सवाल पूछें!";
    } else if (lang === 'en') {
      text = "Welcome to the 2050 Socratic Lab. I will not hand you the solution; I will guide your mental model to discover it. Ask me anything!";
    }

    return {
      id: 'greet_' + Date.now(),
      sender: 'tutor',
      text,
      timestamp: new Date().toISOString(),
    };
  }

  public static generateResponse(
    missionId: string,
    learnerText: string,
    history: TutorMessage[],
    lang: LanguageMode = 'hinglish'
  ): TutorMessage {
    const raw = learnerText.trim().toLowerCase();

    // 1. Language change commands
    if (raw.includes('hindi mein') || raw.includes('hindi please') || raw.includes('हिंदी')) {
      return {
        id: 'tutor_' + Date.now(),
        sender: 'tutor',
        text: "बिल्कुल! अब से मैं आपको सरल हिंदी में समझाऊँगा। क्या आपको वैरिएबल या कोड समझने में कोई परेशानी है?",
        timestamp: new Date().toISOString()
      };
    }
    if (raw.includes('english please') || raw.includes('explain in english')) {
      return {
        id: 'tutor_' + Date.now(),
        sender: 'tutor',
        text: "Understood! I will converse in clear English. What concept would you like to explore?",
        timestamp: new Date().toISOString()
      };
    }

    // 2. Confused about '=' vs '=='
    if (raw.includes('=') && (raw.includes('==') || raw.includes('barabar') || raw.includes('equal') || raw.includes('difference'))) {
      const resp = lang === 'hindi' 
        ? "बहुत बढ़िया सवाल! 30 सेकंड में समझिए:\n• एक बार '=' का मतलब है: डिब्बे में वैल्यू 'डालना' (Assignment), जैसे: x = 10\n• दो बार '==' का मतलब है: कंप्यूटर से 'पूछना' कि क्या दोनों बराबर हैं? (Comparison), जैसे: x == 10 ?"
        : lang === 'hinglish'
        ? "Bohot accha sawaal! 30 seconds mein crystal clear karo:\n• Ek '=' ka matlab hai: box mein value daalna (store karna), jaise: x = 10\n• Do '==' ka matlab hai: sawaal poochna ki kya dono barabar hain? (check karna), jaise: x == 10 ?"
        : "Excellent question! In 30 seconds:\n• Single '=' is ASSIGNMENT: store value into memory (e.g. x = 10)\n• Double '==' is COMPARISON: ask if two things are equal (e.g. x == 10 ?)";

      return {
        id: 'tutor_' + Date.now(),
        sender: 'tutor',
        text: resp,
        timestamp: new Date().toISOString()
      };
    }

    // 3. Learner says "Mujhe samajh nahi aa raha" / "I don't understand"
    if (raw.includes('samajh nahi') || raw.includes('dont understand') || raw.includes("don't understand") || raw.includes('confused') || raw.includes('phir se')) {
      const resp = lang === 'hindi'
        ? "कोई बात नहीं! चलिए डिब्बे वाले उदाहरण को छोड़कर स्कूल रजिस्टर के उदाहरण से समझते हैं:\nजैसे स्कूल रजिस्टर में रोल नंबर 12 के सामने 'आरव' लिखा होता है, कंप्यूटर की मेमोरी में भी 'name' की जगह 'Aarav' लिखा जाता है। अब समझ आया?"
        : lang === 'hinglish'
        ? "Koi tension nahi! Chalo dabba chhodkar School Register ka example lete hain:\nJaise school attendance register mein Roll No 12 ke samne 'Aarav' likha hota hai, waise hi computer memory mein 'name' ke aage 'Aarav' save hota hai. Ab clear lag raha hai?"
        : "No problem at all! Let us switch from the box analogy to a School Register:\nIn a school attendance register, the row 'Roll No 12' holds the student's name 'Aarav' all year. In computer memory, 'name' holds 'Aarav' exactly the same way. Does that connect better?";

      return {
        id: 'tutor_' + Date.now(),
        sender: 'tutor',
        text: resp,
        timestamp: new Date().toISOString()
      };
    }

    // 4. Check if student is explaining what a variable is
    if (raw.includes('variable') && (raw.includes('dabba') || raw.includes('store') || raw.includes('value') || raw.includes('naam') || raw.includes('box'))) {
      const diag = DiagnosisEngine.diagnoseVariableExplanation(learnerText, lang);
      const resp = `${diag.encouragement}\n\n• What you got right: ${diag.whatYouGotRight}\n• Missing piece: ${diag.whatIsMissing}\n• Tip: ${diag.howToImprove}`;

      return {
        id: 'tutor_' + Date.now(),
        sender: 'tutor',
        text: resp,
        timestamp: new Date().toISOString()
      };
    }

    // 5. Contextual Socratic Hint Ladder
    const context = this.missionContexts[missionId] || this.missionContexts['step_variables'];
    const tutorMsgCount = history.filter(h => h.sender === 'tutor').length;

    let selectedStage: 'question' | 'hint' | 'specific_hint' | 'partial_guidance' | 'explanation' = 'question';
    let content = context.stages.question;

    if (tutorMsgCount === 1 || raw.includes('hint')) {
      selectedStage = 'hint';
      content = context.stages.hint;
    } else if (tutorMsgCount === 2 || raw.includes('more') || raw.includes('aage')) {
      selectedStage = 'specific_hint';
      content = context.stages.specificHint;
    } else if (tutorMsgCount === 3 || raw.includes('kaise') || raw.includes('how')) {
      selectedStage = 'partial_guidance';
      content = context.stages.partialGuidance;
    } else if (tutorMsgCount >= 4 || raw.includes('answer') || raw.includes('solution')) {
      selectedStage = 'explanation';
      content = context.stages.explanation;
    }

    const text = lang === 'hindi' ? content.hi : lang === 'hinglish' ? content.hinglish : content.en;

    return {
      id: 'tutor_' + Date.now(),
      sender: 'tutor',
      text,
      stage: selectedStage,
      timestamp: new Date().toISOString(),
    };
  }
}
