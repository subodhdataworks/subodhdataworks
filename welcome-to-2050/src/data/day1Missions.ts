import { Mission } from '../types';

export const DAY1_MISSIONS: Mission[] = [
  {
    id: 'd1_m1',
    dayNumber: 1,
    missionNumber: 1,
    title: 'Mission 1 — Robot Sequence',
    concept: 'Explicit Computer Instructions',
    tagline: 'Computers follow explicit instructions. Nothing more, nothing less.',
    description: 'A 2050 exploration rover is stranded on a power grid. Guide the rover to the Energy Core by issuing explicit step-by-step commands.',
    keyTakeaway: 'Computers do not guess your intentions. They follow exact, sequenced commands.',
    hinglishExplanation: 'Computer khud se koi andaaza nahi lagata. Jo ek-ek step aap bologe, woh bilkul waisa hi follow karega.',
    type: 'robot-grid',
    hints: [
      'Look at the direction the robot is facing (indicated by the glowing beacon).',
      'If an obstacle tile is directly ahead, you must TURN before moving forward.',
      'Plan the path: Turn Right, step forward to row 2, turn Left, then step to the Energy Core.'
    ],
    meta: {
      gridSize: 4,
      start: { x: 0, y: 3, dir: 'up' }, // bottom-left
      target: { x: 3, y: 0 }, // top-right
      obstacles: [{ x: 0, y: 2 }, { x: 1, y: 1 }, { x: 2, y: 2 }]
    }
  },
  {
    id: 'd1_m2',
    dayNumber: 1,
    missionNumber: 2,
    title: 'Mission 2 — Instruction Order',
    concept: 'Sequence & Execution Order',
    tagline: 'Order matters. The same actions in the wrong order produce chaos.',
    description: 'A morning coffee & energy synthesis protocol is scrambled! Drag or click the steps to arrange them in the only logical sequence.',
    keyTakeaway: 'A computer executes instructions strictly from top to bottom. Order defines reality.',
    hinglishExplanation: 'Order (kram) sabse zaroori hai. Python code hamesha upar se neeche execute hota hai.',
    type: 'sequence-order',
    hints: [
      'Which action must physically happen first before anything else can start?',
      'Can you pour tea before boiling water? Dependency matters!',
      'Correct sequence: 1. Fill kettle with water -> 2. Boil the water -> 3. Add tea leaves -> 4. Pour tea into cup.'
    ],
    meta: {
      items: [
        { id: 'step_pour', text: '4. Pour tea into cup', logicalIndex: 3 },
        { id: 'step_water', text: '1. Fill kettle with fresh water', logicalIndex: 0 },
        { id: 'step_leaves', text: '3. Add tea leaves and brew', logicalIndex: 2 },
        { id: 'step_boil', text: '2. Turn on stove and boil water', logicalIndex: 1 },
      ]
    }
  },
  {
    id: 'd1_m3',
    dayNumber: 1,
    missionNumber: 3,
    title: 'Mission 3 — Predict the Code',
    concept: 'Mental Model & Code Prediction',
    tagline: 'Predict before you run. Real programmers trace code in their mind.',
    description: 'Inspect this Python snippet. Calculate in your mind what the computer will print before pressing Execute.',
    keyTakeaway: 'The = symbol assigns the calculated value on the right into the memory variable on the left.',
    hinglishExplanation: 'Python mein = ka matlab maths ka barabar nahi, balki "right side calculate karo aur left dabbe mein rakh do" hota hai.',
    type: 'predict-code',
    hints: [
      'Line 1 sets x to 5. So inside the box x, there is the number 5.',
      'Line 2 takes current x (5), adds 2, making 7. It saves 7 back into box x.',
      'Line 3 prints whatever is inside box x right now.'
    ],
    meta: {
      code: `x = 5\nx = x + 2\nprint(x)`,
      expectedOutput: '7',
      options: ['5', '2', '7', 'x + 2']
    }
  },
  {
    id: 'd1_m4',
    dayNumber: 1,
    missionNumber: 4,
    title: 'Mission 4 — Variable Transformation',
    concept: 'Memory Containers & State Change',
    tagline: 'Variables are labelled containers in memory that hold changing values.',
    description: 'Watch the memory container mutate in real-time. Notice how 10 transforms into 15 when new data is assigned. Then predict the next container challenge.',
    keyTakeaway: 'Variables hold only one active state at a time. New assignments replace the old state.',
    hinglishExplanation: 'Variable ek labelled box ki tarah hai jisme hum value rakh sakte hain. Nayi value aate hi purani value replace ho jaati hai.',
    type: 'variable-transformation',
    hints: [
      'Look at the labelled box on screen: It started with 10.',
      'When + 5 arrived, 10 + 5 became 15.',
      'Now for your challenge: If container y holds 20, and we execute y = y - 4, what is 20 - 4?'
    ],
    meta: {
      demoVar: 'x',
      demoInitial: 10,
      demoOperation: '+ 5',
      demoFinal: 15,
      challengeCode: `y = 20\ny = y - 4\nprint(y)`,
      expectedOutput: '16',
      options: ['20', '4', '16', '24']
    }
  },
  {
    id: 'd1_m5',
    dayNumber: 1,
    missionNumber: 5,
    title: 'Mission 5 — Bug Detective',
    concept: 'Syntax Errors & Investigative Debugging',
    tagline: 'Mistakes are data. Every error is a clue waiting to be solved.',
    description: '🚨 An alert has triggered in the laboratory! The scanner caught broken code. Which line should the detective investigate?',
    keyTakeaway: 'Parentheses must always be paired. For every opening (, there must be a closing ).',
    hinglishExplanation: 'Brackets hamesha jode (pair) mein hone chahiye. Agar ( khula hai, toh use ) se band karna zaroori hai.',
    type: 'bug-detective',
    hints: [
      'Hint 1: What symbol starts the print instruction on line 2?',
      'Hint 2: Look at the beginning and end of the instruction.',
      'Hint 3: Does the print statement close correctly with a matching ")"?',
    ],
    meta: {
      buggyCode: `name = "Rahul"\nprint(name`,
      bugLine: 2,
      fixSnippet: `name = "Rahul"\nprint(name)`,
      explanation: 'In Python, print() is a function call that requires both an opening parenthesis "(" and a closing parenthesis ")". Line 2 was left open.'
    }
  },
  {
    id: 'd1_m6',
    dayNumber: 1,
    missionNumber: 6,
    title: 'Mission 6 — Build',
    concept: 'Composition & Code Synthesis',
    tagline: 'From consumer to creator. Assemble your first working Python program.',
    description: 'Make the 2050 laboratory computer introduce itself! Assemble simple logic blocks into a real Python script, then run it in the safe sandbox.',
    keyTakeaway: 'You combine variables (data) and print statements (actions) to build real software.',
    hinglishExplanation: 'Data aur actions ko milakar hum software banate hain. Line 1 mein naam rakho, Line 2 mein Hello ke saath print karo!',
    type: 'block-builder',
    hints: [
      'Line 1 needs to assign a name: name = "Alex"',
      'Line 2 needs to print greeting: print("Hello", name)',
      'Click or drag the blocks to assemble the two lines in order.'
    ],
    meta: {
      blocks: [
        { id: 'b1', text: 'name', type: 'var' },
        { id: 'b2', text: '=', type: 'op' },
        { id: 'b3', text: '"Alex"', type: 'str' },
        { id: 'b4', text: 'print("Hello", name)', type: 'stmt' },
      ],
      targetCode: `name = "Alex"\nprint("Hello", name)`,
      targetOutput: 'Hello Alex'
    }
  },
  {
    id: 'd1_m7',
    dayNumber: 1,
    missionNumber: 7,
    title: 'Mission 7 — Explain',
    concept: 'Articulation & Deep Understanding',
    tagline: 'If you can explain it simply, you truly understand it.',
    description: 'Look at the completed program below. In your own plain words, explain what this program does. Simple language is welcomed!',
    keyTakeaway: 'Explaining concepts solidifies neural pathways. Computers store state and output results.',
    hinglishExplanation: 'Apne aasan shabdon mein batao ki yeh program kya kar raha hai. Perfect English ki zaroorat nahi hai!',
    type: 'explain-program',
    hints: [
      'What happens on line 1? (Something is saved/stored).',
      'What happens on line 2? (Something is printed/displayed).',
      'Sample simple answer: "It stores the name Alex in a variable, then prints Hello Alex on screen."'
    ],
    meta: {
      sampleCode: `name = "Alex"\nprint("Hello", name)`,
      keyConcepts: ['store', 'save', 'name', 'alex', 'print', 'hello', 'display', 'screen', 'variable', 'box', 'greet', 'rakhta', 'dikhata', 'chalata'],
      prompt: 'Explain what this program does in your own words:'
    }
  }
];
