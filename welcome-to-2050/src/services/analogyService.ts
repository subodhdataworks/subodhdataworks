import { AnalogyModel, LanguageMode } from '../types';

export interface AnalogyDetails {
  id: AnalogyModel;
  title: string;
  titleHindi: string;
  tagline: string;
  visualGraphic: {
    containerLabel: string;
    storedContent: string;
    metaphor: string;
  };
  explanationEn: string;
  explanationHindi: string;
  explanationHinglish: string;
  realIndiaExample: string;
}

export class AnalogyService {
  private static analogies: Record<AnalogyModel, AnalogyDetails> = {
    storage_box: {
      id: 'storage_box',
      title: 'Digital Storage Box',
      titleHindi: 'डिजिटल मेमोरी डिब्बा',
      tagline: 'Label on the outside, value on the inside.',
      visualGraphic: {
        containerLabel: 'name',
        storedContent: '"Aarav"',
        metaphor: 'A transparent storage container with a label stuck on top.',
      },
      explanationEn: 'Think of memory as a collection of labelled boxes. When you write name = "Aarav", the computer labels a box "name" and places "Aarav" inside it.',
      explanationHindi: 'मेमोरी को लेबल लगे डिब्बों की तरह समझें। जब आप name = "Aarav" लिखते हैं, कंप्यूटर डिब्बे पर "name" का लेबल लगाकर अंदर "Aarav" रख देता है।',
      explanationHinglish: 'Variable ko ek labelled dabba samjho. Jab tum name = "Aarav" likhte ho, computer dabbe par "name" ka sticker lagata hai aur andar "Aarav" rakh deta hai.',
      realIndiaExample: 'School app storing student Aarav\'s name in memory.',
    },
    school_register: {
      id: 'school_register',
      title: 'School Attendance Register',
      titleHindi: 'स्कूल अटेंडेंस रजिस्टर',
      tagline: 'Column header = Variable, Written entry = Value.',
      visualGraphic: {
        containerLabel: 'Roll_No_12',
        storedContent: '"Pooja Sharma"',
        metaphor: 'A government school attendance register with labelled rows.',
      },
      explanationEn: 'In a school register in Patna or Delhi, the teacher doesn\'t erase the student\'s name every morning. The roll number row holds that student\'s name all year.',
      explanationHindi: 'स्कूल रजिस्टर में जैसे रोल नंबर की जगह छात्र का नाम लिखा होता है, वैसे ही प्रोग्रामिंग में वैरिएबल कंप्यूटर की कॉपी में एक निश्चित जगह है।',
      explanationHinglish: 'Jaise school attendance register mein column header hota hai "Student Name" aur usme "Pooja" likha hota hai, wahi variable hai.',
      realIndiaExample: 'Class teacher marking attendance for 60 students by name.',
    },
    mobile_contact: {
      id: 'mobile_contact',
      title: 'Phone Contact Book',
      titleHindi: 'मोबाइल फोन कॉन्टैक्ट्स',
      tagline: 'Contact Name = Variable, Phone Number = Value.',
      visualGraphic: {
        containerLabel: 'Mummy_Mobile',
        storedContent: '9876543210',
        metaphor: 'Dialer screen showing contact name matching phone number.',
      },
      explanationEn: 'You don\'t dial 10 digits every time you call home. You save the 10 digits under the name "Mummy". When you call "Mummy", the phone dials the number.',
      explanationHindi: 'आप 10 अंकों का फोन नंबर याद रखने के बजाय उसे "मम्मी" नाम से सेव करते हैं। वैरिएबल भी ऐसा ही नाम है जो असली डेटा को याद रखता है।',
      explanationHinglish: 'Tum har baar 10 digit ka number dial nahi karte, use "Mummy" naam se save karte ho. Programming mein bhi number ko naam se save karte hain.',
      realIndiaExample: 'WhatsApp contact holding a 10-digit mobile number.',
    },
    shop_inventory: {
      id: 'shop_inventory',
      title: 'Kirana Shop Price Tag',
      titleHindi: 'किराना दुकान प्राइस टैग',
      tagline: 'Product name tag on the shelf, current price on the sticker.',
      visualGraphic: {
        containerLabel: 'rice_1kg_price',
        storedContent: '₹80',
        metaphor: 'A shelf at a local grocery store with an updated price tag.',
      },
      explanationEn: 'At a local Kirana store, the shelf tag says "Basmati Rice". The price might be ₹80 today and ₹85 tomorrow. The tag stays the same; the value inside changes.',
      explanationHindi: 'किराना दुकान पर डिब्बे पर "चावल" का लेबल लगा रहता है, पर उसका भाव बदलता रहता है। वैरिएबल वही लेबल है, जिसका भाव (value) बदला जा सकता है।',
      explanationHinglish: 'Kirana store par rack par "Chawal" ka label rehta hai. Aaj rate ₹80 hai, kal ₹85 ho sakta hai. Label wahi rehta hai, rate change hota hai.',
      realIndiaExample: 'Local grocery store updating vegetable or grain prices daily.',
    },
    cricket_scoreboard: {
      id: 'cricket_scoreboard',
      title: 'Cricket Live Scoreboard',
      titleHindi: 'क्रिकेट लाइव स्कोरबोर्ड',
      tagline: 'Scoreboard label "Runs", dynamic counter updating every ball.',
      visualGraphic: {
        containerLabel: 'india_score',
        storedContent: '184',
        metaphor: 'Stadium electronic LED scoreboard in Wankhede or Eden Gardens.',
      },
      explanationEn: 'On a cricket scoreboard, the word "SCORE" remains fixed, but every time Virat Kohli hits a boundary, the number in that container increases by 4.',
      explanationHindi: 'क्रिकेट स्कोरबोर्ड पर "Runs" का बोर्ड वही रहता है, लेकिन जैसे ही चौका लगता है, उस जगह की संख्या 4 बढ़ जाती है। यह वैरिएबल का म्यूटेशन है।',
      explanationHinglish: 'Cricket match mein scoreboard par "Runs" likha rehta hai, aur har ball par runs change hote hain: score = score + 4.',
      realIndiaExample: 'Live IPL match scoreboard tracking team runs and overs.',
    },
  };

  public static getAnalogy(model: AnalogyModel): AnalogyDetails {
    return this.analogies[model] || this.analogies.storage_box;
  }

  public static getNextAnalogy(current: AnalogyModel): AnalogyModel {
    const sequence: AnalogyModel[] = [
      'storage_box',
      'school_register',
      'mobile_contact',
      'shop_inventory',
      'cricket_scoreboard'
    ];
    const currentIndex = sequence.indexOf(current);
    const nextIndex = (currentIndex + 1) % sequence.length;
    return sequence[nextIndex];
  }

  public static getLocalizedExplanation(model: AnalogyModel, lang: LanguageMode): string {
    const details = this.getAnalogy(model);
    if (lang === 'hindi') return details.explanationHindi;
    if (lang === 'hinglish') return details.explanationHinglish;
    return details.explanationEn;
  }
}
