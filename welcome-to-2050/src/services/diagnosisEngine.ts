import { 
  CognitiveDiagnosisCategory, 
  DiagnosisFeedback, 
  LanguageMode, 
  AnalogyModel 
} from '../types';

/**
 * 2050 Student Answer Diagnosis Engine (India Edition)
 * 
 * Deep cognitive classification into 6 states:
 * 1. CORRECT
 * 2. PARTIALLY_CORRECT
 * 3. MISCONCEPTION
 * 4. GUESS
 * 5. UNCLEAR
 * 6. LANGUAGE_ISSUE
 * 
 * Generates structured 4-step improvement feedback without humiliation.
 * Understands Hindi, English, and natural Indian Hinglish.
 */
export class DiagnosisEngine {

  /**
   * Diagnoses a student's teach-back or explanation for "What is a Variable?"
   */
  public static diagnoseVariableExplanation(
    input: string,
    preferredLanguage: LanguageMode = 'hinglish',
    currentAnalogy: AnalogyModel = 'storage_box'
  ): DiagnosisFeedback {
    const raw = input.trim();
    const lower = raw.toLowerCase();

    // Detect language of input
    const detectedLang = this.detectLanguage(lower);
    const lang = preferredLanguage || detectedLang;

    // Empty or too short
    if (raw.length < 3) {
      return this.formatFeedback(
        'UNCLEAR',
        lang,
        'Aapne answer likhna shuru kiya.',
        'Koi specific idea abhi clear nahi ho paaya.',
        'Apne shabdon mein bataiye ki variable computer mein kya kaam karta hai.',
        'Ek baar aur try karein: variable information ke sath kya karta hai?'
      );
    }

    // 1. Detect classic MISCONCEPTION: "Variable is a value" / "Variable ek value hota hai"
    const misconceptionValue = (
      (lower.includes('variable is a value') || lower.includes('variable value hai') || lower.includes('variable value hota hai') || lower.includes('sirf value')) &&
      !lower.includes('store') && !lower.includes('box') && !lower.includes('dabba') && !lower.includes('container') && !lower.includes('name') && !lower.includes('naam')
    );

    if (misconceptionValue) {
      if (lang === 'hindi') {
        return this.formatFeedback(
          'MISCONCEPTION',
          'hindi',
          'आपने वैल्यू (value) का हिस्सा सही पहचाना।',
          'वैरिएबल खुद वैल्यू नहीं होता। वैरिएबल एक डिब्बा या लेबल है जिसके अंदर वैल्यू रखी जाती है।',
          'उत्तर में यह बताएं कि वैरिएबल एक स्टोरेज है जिसमें वैल्यू स्टोर होती है।',
          'फिर से अपने शब्दों में बताएं: name = "Aarav" में वैरिएबल कौन है?'
        );
      } else if (lang === 'hinglish') {
        return this.formatFeedback(
          'MISCONCEPTION',
          'hinglish',
          'Tumne value ka part correctly identify kiya!',
          'Lekin variable khud value nahi hota. Variable ek naam/label hai jiske through hum value ko store aur access karte hain.',
          'Answer mein ye mention karo ki variable ek storage location/label hai jisme value rakhi jaati hai.',
          'Ek baar aur apne words mein batao: variable kya hota hai?'
        );
      } else {
        return this.formatFeedback(
          'MISCONCEPTION',
          'en',
          'You correctly identified that a variable is connected to a value.',
          'A variable itself is NOT the value. A variable is the named container or label that holds the value.',
          'Mention both the "container name" and the "stored value".',
          'Try once more in your own words: what does a variable do in memory?'
        );
      }
    }

    // 2. Detect GUESS: "maybe", "shayad", "i think", "pata nahi", "not sure" without core concepts
    const isGuess = (
      lower.includes('pata nahi') || lower.includes('shayad') || lower.includes('maybe') || 
      lower.includes('i think so') || lower.includes('dont know') || lower.includes("don't know")
    ) && !(lower.includes('store') || lower.includes('name') || lower.includes('box'));

    if (isGuess) {
      if (lang === 'hindi') {
        return this.formatFeedback(
          'GUESS',
          'hindi',
          'कोशिश करने के लिए शाबाश!',
          'कांसेप्ट अभी पूरी तरह स्पष्ट नहीं हुआ है।',
          'सोचिए: स्कूल रजिस्टर में नाम कैसे याद रखा जाता है? वैरिएबल भी कंप्यूटर की मेमोरी का डिब्बा है।',
          'डिब्बे वाले उदाहरण को याद करके बताएं: वैरिएबल क्या करता है?'
        );
      } else if (lang === 'hinglish') {
        return this.formatFeedback(
          'GUESS',
          'hinglish',
          'Attempt karne ke liye badhiya!',
          'Lagta hai abhi idea 100% clear nahi hua hai, jo ki bilkul normal hai.',
          'Socho school app Aarav ka naam kaise yaad rakhegi? Ek labelled box mein.',
          'Ab batao: variable ka main purpose kya hai?'
        );
      } else {
        return this.formatFeedback(
          'GUESS',
          'en',
          'Great instinct to try!',
          'The mental model needs a quick refresh.',
          'Think of the labelled memory box holding information.',
          'What is the primary job of a variable in a computer program?'
        );
      }
    }

    // Core attributes for Variable:
    // Attribute A: Container / Storage / Memory / Box / Dabba / Rakhna / Store / Hold
    const hasStorage = (
      lower.includes('store') || lower.includes('box') || lower.includes('dabba') || 
      lower.includes('container') || lower.includes('memory') || lower.includes('rakhna') || 
      lower.includes('rakhta') || lower.includes('save') || lower.includes('hold') || 
      lower.includes('yaad') || lower.includes('storage') || lower.includes('rakhe')
    );

    // Attribute B: Name / Label / Identifier / Naam / Pehchaan
    const hasLabel = (
      lower.includes('name') || lower.includes('naam') || lower.includes('label') || 
      lower.includes('identity') || lower.includes('pehchaan') || lower.includes('symbol')
    );

    // Attribute C: Value / Data / Information / Cheez / Sankhya
    const hasValue = (
      lower.includes('value') || lower.includes('data') || lower.includes('information') || 
      lower.includes('number') || lower.includes('text') || lower.includes('cheez')
    );

    // 3. FULLY CORRECT: mentions storage/container + (label OR value)
    if (hasStorage && (hasLabel || hasValue || lower.length > 30)) {
      if (lang === 'hindi') {
        return this.formatFeedback(
          'CORRECT',
          'hindi',
          'शानदार! आपने बिल्कुल सही समझा कि वैरिएबल एक नमित मेमोरी स्टोरेज (named container) है।',
          'कुछ भी मिसिंग नहीं है। आपकी समझ पूरी तरह सही है।',
          'आगे भी इसी तरह सीधे शब्दों में कॉन्सेप्ट याद रखें।',
          'अब अगले रियल-वर्ल्ड चैलेंज के लिए आगे बढ़ें।'
        );
      } else if (lang === 'hinglish') {
        return this.formatFeedback(
          'CORRECT',
          'hinglish',
          'Bohot badiya! Tumne bilkul sahi explain kiya ki variable ek storage container hai jisme hum value store karte hain.',
          'Kuch bhi missing nahi hai — mental model ekdum crystal clear hai.',
          'Real programming mein bhi isi concept ke sath sochna.',
          'Ab ready ho real-world pricing problem solve karne ke liye!'
        );
      } else {
        return this.formatFeedback(
          'CORRECT',
          'en',
          'Outstanding! You clearly articulated that a variable is a named storage container for information.',
          'Nothing missing — your conceptual mental model is solid.',
          'Keep this concrete mental model as we move to decision logic.',
          'Ready for the real-world application challenge!'
        );
      }
    }

    // 4. PARTIALLY CORRECT: mentions only storage, or only name, or has broken expression
    if (hasStorage || hasLabel) {
      if (lang === 'hindi') {
        return this.formatFeedback(
          'PARTIALLY_CORRECT',
          'hindi',
          'आपने यह सही पकड़ा कि यह इंफॉर्मेशन से जुड़ा है।',
          'मिसिंग बात यह है कि वैरिएबल का एक ‘नाम’ भी होता है और उसके अंदर ‘वैल्यू’ होती है।',
          'अपने उत्तर में ‘नाम’ और ‘स्टोरेज’ दोनों शामिल करें।',
          'एक बार फिर कोशिश करें: डिब्बे और उसके लेबल के बारे में बताएं।'
        );
      } else if (lang === 'hinglish') {
        return this.formatFeedback(
          'PARTIALLY_CORRECT',
          'hinglish',
          'Tumne ye correctly samjha ki variable information ke sath related hai!',
          'Missing part ye hai ki variable ek "named" storage location hai.',
          'Answer mein "naam/label" aur "stored value" dono mention karo.',
          'Ab dobara apne words mein bolo: variable memory mein kya karta hai?'
        );
      } else {
        return this.formatFeedback(
          'PARTIALLY_CORRECT',
          'en',
          'You understood that it relates to saving data!',
          'Missing detail: A variable is specifically a NAMED storage container.',
          'Mention both the label and the storage container.',
          'Give it one more shot: explain using the box and label idea.'
        );
      }
    }

    // 5. LANGUAGE ISSUE check (non-English / broken grammatical sentence with right intent)
    const indianTerms = ['dabba', 'rakhna', 'naam', 'sambhalna', 'yaad', 'rakh'];
    const hasIndianTerm = indianTerms.some(t => lower.includes(t));
    if (hasIndianTerm) {
      return this.formatFeedback(
        'LANGUAGE_ISSUE',
        'hinglish',
        'Aapka conceptual idea bilkul sahi hai (dabba/rakhna)!',
        'English grammar ki bilkul chinta mat karo — concept samajhna 100x zyada important hai.',
        'Bas yaad rakho: Variable = Labelled memory box.',
        'Concept clear hai, aage badhte hain!'
      );
    }

    // 6. UNCLEAR
    if (lang === 'hindi') {
      return this.formatFeedback(
        'UNCLEAR',
        'hindi',
        'आपने कोशिश की, यह अच्छी बात है।',
        'उत्तर थोड़ा अस्पष्ट है।',
        'सरल उदाहरण: जैसे आपके फोन में contact का नाम और उसका नंबर होता है, वैसे ही वैरिएबल है।',
        'अपने शब्दों में फिर से बताइए।'
      );
    } else if (lang === 'hinglish') {
      return this.formatFeedback(
        'UNCLEAR',
        'hinglish',
        'Acha attempt!',
        'Idea thoda unclear lag raha hai.',
        'Ek simple formula yaad rakho: Variable = Naam + Uske andar ki value.',
        'Ab try karo: variable ka kya kaam hota hai?'
      );
    } else {
      return this.formatFeedback(
        'UNCLEAR',
        'en',
        'Good attempt!',
        'The phrasing is a bit ambiguous.',
        'Remember the formula: Variable = Named storage box in memory.',
        'Try once more in your own words.'
      );
    }
  }

  private static formatFeedback(
    category: CognitiveDiagnosisCategory,
    lang: LanguageMode,
    whatRight: string,
    whatMissing: string,
    howImprove: string,
    tryAgain: string
  ): DiagnosisFeedback {
    const encouragementMap: Record<CognitiveDiagnosisCategory, string> = {
      CORRECT: lang === 'hindi' ? 'अद्भुत समझ! 🌟' : lang === 'hinglish' ? 'Shaandar! Concept crystal clear hai. 🌟' : 'Brilliant conceptual grasp! 🌟',
      PARTIALLY_CORRECT: lang === 'hindi' ? 'लगभग सही पहुंच गए हैं! 👍' : lang === 'hinglish' ? 'Almost there! Thinking bilkul sahi direction mein hai. 👍' : 'Almost there! Your thinking is on track. 👍',
      MISCONCEPTION: lang === 'hindi' ? 'अच्छा प्रयास! चलिए मेंटल मॉडल को थोड़ा और साफ करते हैं।' : lang === 'hinglish' ? 'Good effort! Chalo is confusion ko 20 seconds mein clear karte hain.' : 'Good attempt! Let\'s sharpen this mental model.',
      GUESS: lang === 'hindi' ? 'कोई बात नहीं, शुरुआत में ऐसा होता है।' : lang === 'hinglish' ? 'Koi baat nahi! Seekhne mein thoda time lagna natural hai.' : 'No worries! Learning curves are natural.',
      UNCLEAR: lang === 'hindi' ? 'शुरुआत अच्छी है।' : lang === 'hinglish' ? 'Chalo isko ek simple analogy se dekhte hain.' : 'Let us look at this with a simple real-life analogy.',
      LANGUAGE_ISSUE: lang === 'hindi' ? 'अवधारणा बिल्कुल सही है!' : lang === 'hinglish' ? 'Concept bilkul sahi hai! Language ki koi tension nahi.' : 'Your concept is 100% correct!'
    };

    return {
      category,
      whatYouGotRight: whatRight,
      whatIsMissing: whatMissing,
      howToImprove: howImprove,
      tryAgainPrompt: tryAgain,
      encouragement: encouragementMap[category],
      detectedLanguage: lang,
    };
  }

  private static detectLanguage(text: string): LanguageMode {
    const hindiRegex = /[\u0900-\u097F]/;
    if (hindiRegex.test(text)) return 'hindi';

    const hinglishMarkers = [
      'hai', 'hota', 'mein', 'kya', 'dabba', 'rakhna', 'naam', 'kaise', 
      'samajh', 'nahi', 'karna', 'karke', 'hum', 'tum', 'yeh', 'woh', 'bhi'
    ];
    const words = text.toLowerCase().split(/\s+/);
    const hasHinglish = words.some(w => hinglishMarkers.includes(w));
    if (hasHinglish) return 'hinglish';

    return 'en';
  }
}
