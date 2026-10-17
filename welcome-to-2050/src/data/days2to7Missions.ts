export interface DayModule {
  dayNumber: number;
  title: string;
  tagline: string;
  oneLinePurpose: string;
  themeColor: string;
  what: string;
  why: string;
  doNow: string;
  realWorldConnection: string;
  indianContext: string;
  interactiveChallenge: {
    title: string;
    scenario: string;
    decisionTree?: {
      condition: string;
      yesAction: string;
      noAction: string;
    };
    starterCode: string;
    expectedPreview: string;
    solutionOutput: string;
  };
  mindsetTakeaway: string;
  capabilitiesGained: string[];
}

export const DAYS_2_TO_7_MODULES: Record<number, DayModule> = {
  2: {
    dayNumber: 2,
    title: 'TEACH THE COMPUTER TO DECIDE',
    tagline: 'Conditionals and decision branches.',
    oneLinePurpose: 'Teach machines how to make choices using Boolean logic and conditions.',
    themeColor: '#00B8A9',
    what: 'Make choices with if, elif, and else.',
    why: 'Software becomes smart only when it can react to changing conditions.',
    doNow: 'Build the Indian festive discount rule: If purchase > ₹1000, apply 10% discount.',
    realWorldConnection: 'IRCTC ticket reservations, UPI transaction limits, and auto-rickshaw night fares.',
    indianContext: 'Diwali festive shopping discount at a local retail store in Lucknow.',
    interactiveChallenge: {
      title: 'Festival Shopping Discount Logic',
      scenario: 'Should this customer receive the Diwali festival discount? If cart > ₹1000, give 10% off.',
      decisionTree: {
        condition: 'Purchase Amount > ₹1000 ?',
        yesAction: 'Festival Discount Applied (10% off)',
        noAction: 'Regular Price Billed',
      },
      starterCode: 'purchase_amount = 1250\n\nif purchase_amount > 1000:\n    discount = purchase_amount * 0.10\n    final_price = purchase_amount - discount\n    print("Festival discount applied: ₹", discount)\n    print("Final amount to pay: ₹", final_price)\nelse:\n    print("Regular price: ₹", purchase_amount)',
      expectedPreview: 'Festival discount applied: ₹ 125.0\nFinal amount to pay: ₹ 1125.0',
      solutionOutput: 'Festival discount applied: ₹ 125.0\nFinal amount to pay: ₹ 1125.0',
    },
    mindsetTakeaway: 'Intelligence begins when code selects different paths based on evidence.',
    capabilitiesGained: ['Logic branches', 'Comparison operators', 'Conditional flow'],
  },
  3: {
    dayNumber: 3,
    title: 'TEACH THE COMPUTER TO REPEAT',
    tagline: 'Superhuman automation with loops.',
    oneLinePurpose: 'Harness the tireless repetition superpower of computers.',
    themeColor: '#24B47E',
    what: 'Batch process with for loops.',
    why: 'Humans get bored repeating tasks; computers repeat 100,000 times without fatigue.',
    doNow: 'Automate monsoon rainfall SMS alerts to 1,000 farmers across Bihar & Punjab in 0.001s.',
    realWorldConnection: 'Sending SMS alerts to millions of farmers, processing monthly electricity bills.',
    indianContext: 'Agricultural weather advisory sent to village farming cooperatives.',
    interactiveChallenge: {
      title: 'Farmer Weather Advisory Broadcast',
      scenario: 'You have 1,000 farmers. Do you want to call them one by one, or write 3 lines of Python to alert all of them automatically?',
      starterCode: '# Automated Monsoon Broadcast\nfarmers = ["Ramesh", "Sita Devi", "Harpreet", "Mukesh", "Ananya"]\n\nprint("Transmitting monsoon rainfall advisory...")\nfor index, farmer in enumerate(farmers, 1):\n    print(f"SMS {index}: Monsoon alert dispatched to {farmer}")\n\nprint(f"Batch completed: {len(farmers)} alerts transmitted in 0.001s")',
      expectedPreview: 'SMS 1: Monsoon alert dispatched to Ramesh\nSMS 2: Monsoon alert dispatched to Sita Devi...\nBatch completed: 5 alerts transmitted in 0.001s',
      solutionOutput: 'Batch completed in 0.001s',
    },
    mindsetTakeaway: 'Never do manually what a computer can repeat in microseconds.',
    capabilitiesGained: ['Automation loops', 'Iteration efficiency', 'Batch processing'],
  },
  4: {
    dayNumber: 4,
    title: 'MASTER THE DEBUGGER',
    tagline: 'Break it. Fix it.',
    oneLinePurpose: 'Develop the diagnostic instincts of elite software engineers.',
    themeColor: '#F06A6A',
    what: 'Distinguish Syntax, Runtime, and Logic errors.',
    why: 'Coding is 20% writing instructions and 80% diagnosing anomalies.',
    doNow: 'Inspect the broken UPI payment calculation and fix the balance deduction bug.',
    realWorldConnection: 'UPI payment gateways (PhonePe, GooglePay, Paytm) and banking security checks.',
    indianContext: 'A mobile UPI payment app where a withdrawal was accidentally added instead of deducted.',
    interactiveChallenge: {
      title: 'The UPI Payment Bug Detective',
      scenario: 'A customer sent ₹800 over UPI, but their bank balance increased! What changed? What did you expect? What actually happened?',
      starterCode: '# UPI Transaction Bug Detective\n# Bug: cash_withdrawal was added instead of subtracted!\nbank_balance = 5000\nupi_payment = 800\n\n# Fix line below so balance is correctly deducted:\nnew_balance = bank_balance - upi_payment\nprint("Updated UPI Bank Balance: ₹", new_balance)',
      expectedPreview: 'Updated UPI Bank Balance: ₹ 4200',
      solutionOutput: 'Updated UPI Bank Balance: ₹ 4200',
    },
    mindsetTakeaway: 'Bugs are not failures of intelligence; they are simply mismatches between intent and instruction.',
    capabilitiesGained: ['Error classification', 'Diagnostic deduction', 'Edge case tracing'],
  },
  5: {
    dayNumber: 5,
    title: 'THINK IN COLLECTIONS',
    tagline: 'Lists and Dictionaries.',
    oneLinePurpose: 'Organize real-world information using structured data containers.',
    themeColor: '#4C7DFF',
    what: 'Group data into Lists [ ] and Dictionaries { }.',
    why: 'Real software deals with collections of profiles, match statistics, and products.',
    doNow: 'Inspect an IPL cricket player performance profile stored in key-value pairs.',
    realWorldConnection: 'IPL player statistics, Swiggy food menu catalogs, Aadhaar profile databases.',
    indianContext: 'Tracking IPL batsman match scores and tournament averages.',
    interactiveChallenge: {
      title: 'IPL Cricket Player Telemetry',
      scenario: 'How does an IPL cricket analytics dashboard store Virat Kohli\'s match scores?',
      starterCode: '# Structured Data Container: IPL Player Record\nplayer = {\n    "name": "Virat Kohli",\n    "team": "Royal Challengers",\n    "scores": [82, 45, 103, 71, 95]\n}\n\nprint("Batsman:", player["name"])\nprint("Team:", player["team"])\nprint("Highest Match Score:", max(player["scores"]))\nprint("Tournament Average:", sum(player["scores"]) / len(player["scores"]))',
      expectedPreview: 'Batsman: Virat Kohli\nTeam: Royal Challengers\nHighest Match Score: 103\nTournament Average: 79.2',
      solutionOutput: 'Batsman: Virat Kohli\nHighest Match Score: 103\nTournament Average: 79.2',
    },
    mindsetTakeaway: 'Data structures turn chaotic streams of bits into structured models of reality.',
    capabilitiesGained: ['Collections', 'Key-value mapping', 'Data modeling'],
  },
  6: {
    dayNumber: 6,
    title: 'ASK QUESTIONS TO DATA',
    tagline: 'Raw Data → Question → Python → Answer.',
    oneLinePurpose: 'Extract actionable truth with statistical calculations and filtering.',
    themeColor: '#00B8A9',
    what: 'Filter, count, average, minimum, maximum, and group.',
    why: 'Data alone is noise. Combined with code and questions, it becomes understanding.',
    doNow: 'Query an Indian mock-test exam batch to find top rankers and the class passing percentage.',
    realWorldConnection: 'State board exam rank lists, JEE/NEET mock analytics, hospital capacity tracking.',
    indianContext: 'Analyzing 500 student scores in a state competitive exam mock test in Patna.',
    interactiveChallenge: {
      title: 'State Mock-Test Cohort Analytics',
      scenario: 'Ask the data: What was the highest score? What is the average? How many scored distinctions (>=85)?',
      starterCode: 'scores = [72, 85, 91, 64, 88, 95, 53, 79, 84, 90]\n\ndistinctions = [s for s in scores if s >= 85]\nprint("State Highest Score:", max(scores))\nprint("Batch Average:", sum(scores) / len(scores))\nprint("Distinction Students (>=85):", len(distinctions))',
      expectedPreview: 'State Highest Score: 95\nBatch Average: 80.1\nDistinction Students (>=85): 5',
      solutionOutput: 'State Highest Score: 95\nBatch Average: 80.1\nDistinction Students (>=85): 5',
    },
    mindsetTakeaway: 'Data is not an encyclopedia to memorize; it is a landscape to explore.',
    capabilitiesGained: ['Statistical queries', 'Dataset filtering', 'Insight extraction'],
  },
  7: {
    dayNumber: 7,
    title: 'THE DATA DETECTIVE CAPSTONE',
    tagline: 'Full 8-stage real data investigation.',
    oneLinePurpose: 'Solve a realistic data investigation using the scientific Data Analyst workflow.',
    themeColor: '#F4C95D',
    what: 'INSPECT → UNDERSTAND → CLEAN → CALCULATE → FILTER → ANALYZE → VISUALIZE → EXPLAIN.',
    why: 'You are no longer a student following instructions; you are a data investigator.',
    doNow: 'Investigate Indian festival food orders to discover what drives 5-star customer ratings.',
    realWorldConnection: 'Swiggy/Zomato logistics analytics and Indian e-commerce delivery intelligence.',
    indianContext: 'Investigating customer food delivery times and customer satisfaction in tier-1/tier-2 Indian cities.',
    interactiveChallenge: {
      title: 'Indian Festive Food Delivery Mystery',
      scenario: 'Investigate 50 delivery records: Does delivery speed or order price drive 5-star customer ratings?',
      starterCode: '# The 8-Stage Data Detective Pipeline\norders = [\n  {"order_id": 101, "city": "Patna", "amount": 450, "mins": 22, "rating": 5},\n  {"order_id": 102, "city": "Lucknow", "amount": 850, "mins": 55, "rating": 2},\n  {"order_id": 103, "city": "Jaipur", "amount": 1200, "mins": 19, "rating": 5},\n  {"order_id": 104, "city": "Bengaluru", "amount": 350, "mins": 48, "rating": 3},\n  {"order_id": 105, "city": "Delhi", "amount": 620, "mins": 25, "rating": 5},\n]\n\n# CALCULATE: Delivery efficiency\ntotal_orders = len(orders)\nfast_deliveries = [o for o in orders if o["mins"] <= 30]\nfast_avg_rating = sum(o["rating"] for o in fast_deliveries) / len(fast_deliveries)\n\nprint(f"Total Orders Analyzed: {total_orders}")\nprint(f"Fast Deliveries (<=30 mins): {len(fast_deliveries)}/{total_orders}")\nprint(f"Fast Delivery Average Rating: {fast_avg_rating:.1f} / 5.0 ⭐")\nprint("CONCLUSION: Delivery time <= 30 mins guarantees 5-star ratings regardless of order amount.")',
      expectedPreview: 'Total Orders Analyzed: 5\nFast Deliveries (<=30 mins): 3/5\nFast Delivery Average Rating: 5.0 / 5.0 ⭐\nCONCLUSION: Delivery time <= 30 mins guarantees 5-star ratings regardless of order amount.',
      solutionOutput: 'Total Orders Analyzed: 5\nFast Deliveries (<=30 mins): 3/5\nFast Delivery Average Rating: 5.0 / 5.0 ⭐',
    },
    mindsetTakeaway: 'YOU JUST DID REAL DATA WORK. You used code to answer a question that mattered.',
    capabilitiesGained: ['End-to-end analytics', 'Pipeline thinking', 'Data-driven conclusions'],
  },
};
