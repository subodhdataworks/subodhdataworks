import { ConfidenceLevel, LanguageMode } from '../types';

export interface ConfidenceFeedback {
  calibrationMessage: string;
  metacognitiveTip: string;
  status: 'calibrated' | 'overconfident' | 'underconfident';
}

export class ConfidenceEngine {
  public static evaluate(
    confidence: ConfidenceLevel,
    wasCorrect: boolean,
    lang: LanguageMode = 'hinglish'
  ): ConfidenceFeedback {
    // 1. Confident but Wrong (Overconfident -> Gentle realignment)
    if (confidence === 'confident' && !wasCorrect) {
      if (lang === 'hindi') {
        return {
          status: 'overconfident',
          calibrationMessage: 'रोचक बात! आप काफी आश्वस्त (confident) थे, लेकिन परिणाम अलग आया। चलिए देखते हैं कि सोच में कहां बदलाव की जरूरत है।',
          metacognitiveTip: 'गलतियों से सीखने वाले ही सबसे बेहतरीन प्रोग्रामर बनते हैं।'
        };
      } else if (lang === 'hinglish') {
        return {
          status: 'overconfident',
          calibrationMessage: 'Interesting! Tum confident the, but computer ka result different aaya. Chalo dekhte hain exactly kaha mental model update karna hai.',
          metacognitiveTip: 'Galti se darne ki bilkul zaroorat nahi hai — yahi se असली understanding shuru hoti hai.'
        };
      } else {
        return {
          status: 'overconfident',
          calibrationMessage: 'Interesting! You felt confident, but the machine gave a different result. Let us see where our mental model diverged.',
          metacognitiveTip: 'True mastery comes from inspecting our confident mistakes.'
        };
      }
    }

    // 2. Not Sure but Correct (Underconfident -> Self-belief reinforcement)
    if ((confidence === 'not_sure' || confidence === 'maybe') && wasCorrect) {
      if (lang === 'hindi') {
        return {
          status: 'underconfident',
          calibrationMessage: 'आपका उत्तर बिल्कुल सही था! शायद आप अपनी समझ को कम आंक रहे हैं। अपनी सोच पर भरोसा रखिए।',
          metacognitiveTip: 'आप जितना सोचते हैं, उससे कहीं बेहतर समझ रहे हैं।'
        };
      } else if (lang === 'hinglish') {
        return {
          status: 'underconfident',
          calibrationMessage: 'Tumhara answer bilkul correct tha! Shayad tum apni understanding ko underestimate kar rahe ho. Apne logic par trust karo.',
          metacognitiveTip: 'Tumhara intuition bohot solid kaam kar raha hai!'
        };
      } else {
        return {
          status: 'underconfident',
          calibrationMessage: 'Your answer was completely correct! You might be underestimating your own understanding. Trust your logic.',
          metacognitiveTip: 'Your conceptual instincts are much stronger than you give yourself credit for.'
        };
      }
    }

    // 3. Confident & Correct (Calibrated High)
    if (confidence === 'confident' && wasCorrect) {
      if (lang === 'hindi') {
        return {
          status: 'calibrated',
          calibrationMessage: 'शानदार! आपका आत्मविश्वास और परिणाम दोनों बिल्कुल सटीक हैं।',
          metacognitiveTip: 'मजबूत मेंटल मॉडल की यही पहचान है।'
        };
      } else if (lang === 'hinglish') {
        return {
          status: 'calibrated',
          calibrationMessage: 'Shaandar! Tumhara confidence aur result dono 100% match huye.',
          metacognitiveTip: 'Strong mental model ka yahi sign hota hai.'
        };
      } else {
        return {
          status: 'calibrated',
          calibrationMessage: 'Superb! Your confidence and actual result match perfectly.',
          metacognitiveTip: 'Your mental execution accurately mirrored the machine.'
        };
      }
    }

    // 4. Not Sure & Wrong (Calibrated Humble)
    if (lang === 'hindi') {
      return {
        status: 'calibrated',
        calibrationMessage: 'आपकी यह समझ सही थी कि कुछ संदेह बाकी है। चलिए इसे सरल उदाहरण से स्पष्ट करते हैं।',
        metacognitiveTip: 'यह जानना कि हम क्या नहीं जानते, समझदारी की पहली सीढ़ी है।'
      };
    } else if (lang === 'hinglish') {
      return {
        status: 'calibrated',
        calibrationMessage: 'Tumne sahi pehchana ki abhi thoda doubt hai. Chalo isko ek simple practical example se clear karte hain.',
        metacognitiveTip: 'Sahi sawaal poochna seekhne ka sabse bada part hai.'
      };
    } else {
      return {
        status: 'calibrated',
        calibrationMessage: 'You accurately recognized that some uncertainty remained. Let us clear it with a clean visual example.',
        metacognitiveTip: 'Acknowledging what is unclear is the fastest path to clarity.'
      };
    }
  }
}
