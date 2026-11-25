import type { DsTopicBlueprint } from './dsCurriculumBlueprintEngine';

/**
 * Tab 6: Deep Learning and Generative AI (Modules 26–29, Topic IDs 276–320)
 * Zero-to-hero bilingual (English + Natural Hinglish) visual learning & assessment blueprints.
 */
export const DS_TAB6_BLUEPRINTS: DsTopicBlueprint[] = [
  // ============================================================================
  // MODULE 26: Deep Learning Foundations (IDs 276–286)
  // ============================================================================
  {
    id: 276,
    modNum: 26,
    modTitle: 'Deep Learning Foundations',
    topicNumInMod: 1,
    title: 'What Is Deep Learning?',
    subtitle: 'HOW MULTI-LAYER NEURAL NETWORKS LEARN COMPLEX PATTERNS AUTOMATICALLY',
    coreEn:
      'Deep Learning is a branch of Machine Learning that uses multi-layered artificial neural networks to learn complex patterns directly from raw data like images, audio, and text—without humans manually hand-crafting every rule.',
    coreHi:
      'Deep Learning, Machine Learning ka ek hissa hai jo kai layers wale artificial neural networks ka use karta hai. Ye raw data (jaise photos, voice, text) se khud complex patterns seekh leta hai, bina har rule ko manually likhe.',
    analogyTitle: 'Learning to Recognize a Mango from Scratch',
    analogyEn:
      'A toddler does not memorize a checklist of fruit measurements. First their brain notices colors and edges, then shapes and textures, and finally recognizes "That is a mango!" Deep Learning stacks simple layers in the same way.',
    analogyHi:
      'Ek chhota bachcha aam pehchanne ke liye formula nahi ratta. Pehle uska dimag rang aur kinare dekhta hai, phir gol shape aur texture, aur aakhir mein samajh jata hai ki "Ye aam hai!" Deep Learning bhi aise hi layers mein seekhta hai.',
    steps: [
      {
        title: 'Feed Raw Data',
        en: 'Pass raw pixels, sound waves, or text tokens straight into the first layer.',
        hi: 'Raw pixels, audio waves ya text tokens ko seedha pehli layer mein bhejein.',
        tone: 'sky',
      },
      {
        title: 'Extract Simple Features',
        en: 'Early layers detect basic clues like edges, colors, or simple word patterns.',
        hi: 'Shuruati layers basic clues jaise lines, colors ya simple words pakadti hain.',
        tone: 'amber',
      },
      {
        title: 'Combine into Complex Concepts',
        en: 'Deeper layers combine simple clues into eyes, wheels, faces, or full sentence meaning.',
        hi: 'Gehri layers in clues ko jodkar aankhein, chehra ya poore sentence ka matlab samajhti hain.',
        tone: 'lavender',
      },
      {
        title: 'Output Final Prediction',
        en: 'The last layer outputs a clear decision such as "Cat: 96%" or a translated sentence.',
        hi: 'Aakhiri layer final decision deti hai, jaise "Cat: 96%" ya translated sentence.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — SIMPLE MULTI-LAYER DEEP LEARNING INTUITION',
    code: `def relu(x):
    return max(0.0, x)

# Raw pixel clue: brightness=0.8, edge_strength=0.9
x1, x2 = 0.8, 0.9
# Layer 1 (hidden neuron) combines raw clues
h1 = relu(0.6 * x1 + 0.7 * x2 - 0.2)
# Layer 2 (output score) produces final confidence
score = round(0.9 * h1 + 0.1, 2)
print("Hidden feature:", round(h1, 2), "| Final score:", score)`,
    codeOutput: 'Hidden feature: 0.91 | Final score: 0.92',
    codeCaptionEn: 'Each layer transforms numbers into richer features until the final layer makes a prediction.',
    codeCaptionHi: 'Har layer numbers ko aur samajhdar features mein badalti hai jab tak final answer na aa jaye.',
    tableTitle: 'How Depth Builds Understanding Layer by Layer',
    tableHeaders: ['Layer Stage', 'What It Sees (Face Photo)', 'What It Sees (Voice Audio)'],
    tableRows: [
      ['Input Layer', 'Raw pixel brightness numbers', 'Raw sound wave amplitudes'],
      ['Early Hidden Layers', 'Dark/light edges and curves', 'Basic tones and frequencies'],
      ['Middle Hidden Layers', 'Eyes, nose, ear shapes', 'Syllables and short words'],
      ['Output Layer', 'Person ID or emotion label', 'Full transcribed command'],
    ],
    tableNoteEn: '"Deep" simply means having multiple stacked hidden layers that build hierarchy from simple to complex.',
    tableNoteHi: '"Deep" ka simple matlab hai kai hidden layers ek ke upar ek, jo simple se complex samajh banati hain.',
    mistakeEn: 'Thinking Deep Learning is always better than simple models even on tiny Excel spreadsheets.',
    mistakeHi: 'Ye sochna ki chhoti Excel sheet par bhi Deep Learning hamesha simple models se better hoga.',
    proHabitEn: 'Use Deep Learning when you have unstructured data (images, text, audio) or massive datasets where automatic feature learning shines.',
    proHabitHi: 'Deep Learning tab use karein jab data unstructured ho (images, text, audio) ya bahut bada dataset ho.',
    jobUseEn: 'Powers face unlock, medical X-ray screening, voice assistants, fraud detection, and ChatGPT-style assistants.',
    jobUseHi: 'Face unlock, X-ray scan, voice assistants, fraud detection aur ChatGPT jaise tools sab Deep Learning se chalte hain.',
    mcq1Question: 'What does the word "Deep" in Deep Learning specifically refer to?',
    mcq1Correct: 'Multiple stacked hidden layers in a neural network',
    mcq1Wrongs: [
      'Storing data in deep underground servers',
      'Writing deeply nested if-else rules by hand',
      'Using only deep-colored images for training',
    ],
    mcq1Explain: 'Deep Learning refers to neural networks with multiple hidden layers that learn hierarchical representations.',
    mcq2Question: 'Which task is the BEST fit for Deep Learning rather than a simple rule-based script?',
    mcq2Correct: 'Detecting tumors from thousands of raw X-ray images',
    mcq2Wrongs: [
      'Calculating 18% GST on an invoice amount',
      'Sorting 50 student names alphabetically',
      'Finding the average salary of 20 employees',
    ],
    mcq2Explain: 'Deep Learning excels on complex unstructured data like medical images where hand-writing rules is impossible.',
    realWorldScenario:
      'A hospital receives 50,000 chest X-rays per month and wants an AI assistant to flag urgent pneumonia cases automatically.',
    interviewQ1: 'How would you explain Deep Learning to a non-technical business manager?',
    interviewA1:
      'Deep Learning is a layered pattern-recognition system inspired by the brain. Instead of humans writing manual rules, it studies thousands of examples—learning simple clues in early layers and complex concepts in deeper layers—to make accurate predictions on images, text, or audio.',
    interviewQ2: 'Why did Deep Learning suddenly boom in the last decade even though neural networks existed in the 1980s?',
    interviewA2:
      'Three breakthroughs converged: massive digital datasets (internet, smartphones), powerful parallel GPUs for fast matrix math, and architectural improvements like ReLU, dropout, and Transformers.',
  },
  {
    id: 277,
    modNum: 26,
    modTitle: 'Deep Learning Foundations',
    topicNumInMod: 2,
    title: 'Machine Learning vs Deep Learning',
    subtitle: 'CHOOSING THE RIGHT TOOL FOR TABULAR VS UNSTRUCTURED DATA',
    coreEn:
      'Traditional Machine Learning relies on humans to engineer clean tabular features and works fast on small-to-medium datasets, whereas Deep Learning learns features automatically from raw data but needs much more data and GPU compute.',
    coreHi:
      'Traditional Machine Learning mein humans ko khud features banana padta hai aur ye chhote-medium tables par fast chalta hai. Deep Learning raw data se khud features seekhta hai, par isko zyada data aur GPU power chahiye hoti hai.',
    analogyTitle: 'Scooter vs Cargo Plane',
    analogyEn:
      'To buy milk 500 meters away, a scooter (Traditional ML) is faster, cheaper, and easier to park. To fly 20 tons across oceans, you need a cargo plane (Deep Learning). Neither is "always better"—it depends on the trip!',
    analogyHi:
      '500 meter door doodh lene ke liye scooter (Traditional ML) best aur sasta hai. Par 20 ton saman samundar paar le jaane ke liye cargo plane (Deep Learning) chahiye. Har kaam ke liye sahi tool chunna zaroori hai!',
    steps: [
      {
        title: 'Check Data Type',
        en: 'Ask whether your data is clean rows/columns (tabular) or raw images, audio, and free text.',
        hi: 'Dekhein ki data clean table (rows/columns) hai ya raw photos, audio aur text.',
        tone: 'sky',
      },
      {
        title: 'Check Data Volume',
        en: 'Traditional ML thrives with hundreds to thousands of rows; Deep Learning usually wants tens of thousands+.',
        hi: 'Traditional ML kuch sau-hazaar rows mein bhi badhiya chalta hai; Deep Learning ko lakhon examples chahiye hote hain.',
        tone: 'amber',
      },
      {
        title: 'Evaluate Compute & Speed',
        en: 'Trees and regressions train in seconds on a laptop CPU; deep nets often require GPUs.',
        hi: 'Decision trees laptop CPU par seconds mein train ho jaate hain; deep nets ko aksar GPU chahiye hota hai.',
        tone: 'lavender',
      },
      {
        title: 'Balance Accuracy & Explainability',
        en: 'Pick ML when stakeholders need clear feature rules; pick DL when raw perception accuracy is paramount.',
        hi: 'Agar simple explanation chahiye toh ML chunein; agar image/language accuracy top priority hai toh DL chunein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — SIMPLE DECISION HELPER (ML VS DL)',
    code: `def recommend_approach(data_type, row_count):
    if data_type in ["image", "audio", "text"]:
        return "Deep Learning (learns raw features automatically)"
    if row_count < 50000:
        return "Traditional ML (e.g., XGBoost / Random Forest)"
    return "Benchmark both XGBoost and Neural Network"

print(recommend_approach("tabular", 8000))
print(recommend_approach("image", 40000))`,
    codeOutput: `Traditional ML (e.g., XGBoost / Random Forest)
Deep Learning (learns raw features automatically)`,
    codeCaptionEn: 'Data modality and dataset size are the fastest signals for choosing between ML and DL.',
    codeCaptionHi: 'Data ka type aur size dekh kar aap turant samajh sakte hain ki ML lagana hai ya DL.',
    tableTitle: 'Head-to-Head: Traditional ML vs Deep Learning',
    tableHeaders: ['Dimension', 'Traditional ML (XGBoost / LogReg)', 'Deep Learning (CNNs / Transformers)'],
    tableRows: [
      ['Feature Engineering', 'Manual (human creates columns)', 'Automatic (learned by hidden layers)'],
      ['Best Data Type', 'Structured CSV / SQL tables', 'Images, audio, video, natural text'],
      ['Hardware Needed', 'Standard laptop CPU', 'GPU / TPU accelerators'],
      ['Explainability', 'High (feature importance, rules)', 'Lower (often a "black box")'],
    ],
    tableNoteEn: 'On structured business tables (churn, credit score), gradient-boosted trees still routinely beat neural networks.',
    tableNoteHi: 'Structured tables (jaise churn ya loan risk) par XGBoost aksar Deep Learning se tez aur zyada accurate hota hai.',
    mistakeEn: 'Spending 3 weeks training a giant neural network on a 1,500-row Excel sheet when Logistic Regression works in 2 seconds.',
    mistakeHi: '1,500 rows ki Excel sheet par 3 hafte neural network train karna jabki Logistic Regression 2 second mein kaam kar de.',
    proHabitEn: 'Always build a fast Traditional ML baseline first on tabular problems before reaching for Deep Learning.',
    proHabitHi: 'Tabular data par hamesha pehle ek fast Traditional ML baseline banayein, uske baad hi DL try karein.',
    jobUseEn: 'Data Scientists save companies thousands of dollars in cloud GPU bills by choosing XGBoost for tables and DL for vision/NLP.',
    jobUseHi: 'Data Scientists tables par XGBoost aur images/text par DL use karke company ka lakhon ka GPU bill bachate hain.',
    mcq1Question: 'Which is a key difference between Traditional Machine Learning and Deep Learning?',
    mcq1Correct: 'Deep Learning automatically learns features from raw data, while Traditional ML usually needs manual feature engineering',
    mcq1Wrongs: [
      'Traditional ML cannot run on Python',
      'Deep Learning never needs training data',
      'Traditional ML is only used for images and video',
    ],
    mcq1Explain: 'Automatic hierarchical feature extraction from raw unstructured data is Deep Learning’s signature advantage.',
    mcq2Question: 'You have 4,000 rows of customer loan data in a SQL table and must explain every rejection to auditors. What should you pick first?',
    mcq2Correct: 'Traditional ML (such as Logistic Regression or Decision Trees)',
    mcq2Wrongs: [
      'A 100-layer Deep Neural Network trained from scratch',
      'An image-generation diffusion model',
      'Random guessing without a model',
    ],
    mcq2Explain: 'Small tabular datasets with strict explainability requirements are ideal for Traditional ML.',
    realWorldScenario:
      'Your startup wants both (1) a credit-risk scorer on 12,000 customer rows and (2) an ID-card photo verifier. You must choose the right model family for each.',
    interviewQ1: 'Why do tree-based models like XGBoost often outperform Deep Learning on tabular data?',
    interviewA1:
      'Tabular data has heterogeneous columns (ages, categories, currencies) with sharp threshold interactions and limited rows. Tree ensembles split directly on thresholds with minimal data, whereas deep networks struggle with irregular tabular boundaries and easily overfit small tables.',
    interviewQ2: 'When does Deep Learning clearly beat Traditional Machine Learning?',
    interviewA2:
      'When working with high-dimensional unstructured data—images, speech, video, and language—where manual feature engineering cannot capture subtle spatial or semantic relationships, and where large data or pretrained models are available.',
  },
  {
    id: 278,
    modNum: 26,
    modTitle: 'Deep Learning Foundations',
    topicNumInMod: 3,
    title: 'Neural Network Architecture',
    subtitle: 'INPUT, HIDDEN, AND OUTPUT LAYERS WORKING AS A TEAM',
    coreEn:
      'A Neural Network Architecture is the blueprint of how artificial neurons are organized into an Input Layer (receives data), one or more Hidden Layers (extracts patterns), and an Output Layer (produces the final prediction).',
    coreHi:
      'Neural Network Architecture ek blueprint hai jo batata hai ki neurons kaise jude hain: Input Layer (data leti hai), Hidden Layers (patterns dhoondhti hain), aur Output Layer (final answer deti hai).',
    analogyTitle: 'A Restaurant Kitchen Assembly Line',
    analogyEn:
      'Raw vegetables enter the receiving counter (Input Layer). Prep chefs chop, sauce chefs cook, and plating chefs assemble (Hidden Layers). Finally, the waiter serves the finished dish to the table (Output Layer).',
    analogyHi:
      'Kachchi sabziyan counter par aati hain (Input Layer). Prep chef kaatta hai, cooking chef masala dalta hai (Hidden Layers). Aakhir mein waiter taiyaar dish table par serve karta hai (Output Layer).',
    steps: [
      {
        title: 'Input Layer Receives Numbers',
        en: 'Every input feature (e.g., age, income, pixel value) gets its own entry node.',
        hi: 'Har input feature (jaise age, income ya pixel) ko apna ek entry node milta hai.',
        tone: 'sky',
      },
      {
        title: 'Weighted Connections Pass Signals',
        en: 'Arrows carry numbers forward, multiplying each signal by a learnable importance weight.',
        hi: 'Arrows numbers ko aage bhejte hain aur har signal ko uske importance weight se multiply karte hain.',
        tone: 'amber',
      },
      {
        title: 'Hidden Layers Transform Patterns',
        en: 'Stacked hidden layers combine signals into progressively smarter intermediate concepts.',
        hi: 'Hidden layers signals ko milakar aur behtar intermediate patterns banati hain.',
        tone: 'lavender',
      },
      {
        title: 'Output Layer Delivers Answer',
        en: 'The final layer outputs a single number (regression) or class probabilities (classification).',
        hi: 'Final layer ya toh ek number deti hai (price) ya har class ki probability (spam/not spam).',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — INSPECTING A 3-LAYER ARCHITECTURE',
    code: `architecture = [
    ("Input Layer", 4),      # 4 customer features
    ("Hidden Layer 1", 8),   # 8 pattern detectors
    ("Hidden Layer 2", 4),   # 4 higher-level features
    ("Output Layer", 2),     # 2 classes: Stay vs Churn
]
total_weights = sum(architecture[i][1] * architecture[i+1][1] for i in range(len(architecture)-1))
for name, nodes in architecture:
    print(f"{name:15s} -> {nodes} neurons")
print("Total learnable weight connections:", total_weights)`,
    codeOutput: `Input Layer     -> 4 neurons
Hidden Layer 1  -> 8 neurons
Hidden Layer 2  -> 4 neurons
Output Layer    -> 2 neurons
Total learnable weight connections: 72`,
    codeCaptionEn: 'Counting connections shows how quickly parameters grow as you add neurons and layers.',
    codeCaptionHi: 'Connections ginne se pata chalta hai ki neurons aur layers badhane par weights kitni tezi se badhte hain.',
    tableTitle: 'Role of Each Layer Type in a Neural Network',
    tableHeaders: ['Layer Type', 'Main Job', 'Example Size (Digit 0–9 Classifier)'],
    tableRows: [
      ['Input Layer', 'Accepts raw numeric features', '784 nodes (28×28 image pixels)'],
      ['Hidden Layer 1', 'Detects strokes and curves', '128 neurons'],
      ['Hidden Layer 2', 'Combines strokes into loops/lines', '64 neurons'],
      ['Output Layer', 'Outputs probability for each digit', '10 neurons (digits 0 through 9)'],
    ],
    tableNoteEn: 'Input size is fixed by your data; output size is fixed by your task; hidden layers are your design choice.',
    tableNoteHi: 'Input size aapke data se fix hota hai, output size task se, aur hidden layers aap khud design karte hain.',
    mistakeEn: 'Adding 20 huge hidden layers right away, which makes training painfully slow and causes memorization.',
    mistakeHi: 'Shuruat mein hi 20 badi hidden layers daal dena, jisse training slow ho jati hai aur model ratta maarne lagta hai.',
    proHabitEn: 'Start with a small, clean architecture (1–2 hidden layers) and scale up only when validation accuracy proves it helps.',
    proHabitHi: 'Hamesha chhote aur clean architecture (1–2 hidden layers) se start karein aur zaroorat padne par hi size badhayein.',
    jobUseEn: 'ML Engineers design custom architectures for fraud scoring, recommendation engines, and computer vision pipelines.',
    jobUseHi: 'ML Engineers fraud detection, recommendation aur computer vision ke liye sahi architecture design karte hain.',
    mcq1Question: 'Which layer of a neural network is responsible for learning intermediate abstract representations?',
    mcq1Correct: 'Hidden layers',
    mcq1Wrongs: [
      'Input layer only',
      'CSV storage layer',
      'Browser display layer',
    ],
    mcq1Explain: 'Hidden layers sit between input and output, transforming raw inputs into increasingly useful internal features.',
    mcq2Question: 'For a model predicting 5 possible product categories from 12 numeric features, what should the Input and Output layer sizes be?',
    mcq2Correct: '12 input nodes and 5 output neurons',
    mcq2Wrongs: [
      '5 input nodes and 12 output neurons',
      '1 input node and 1 output neuron',
      '100 input nodes and 100 output neurons',
    ],
    mcq2Explain: 'The input layer matches the 12 features and the output layer matches the 5 target classes.',
    realWorldScenario:
      'You are designing a neural network that takes 10 sensor readings from a factory machine and predicts 3 states: Healthy, Needs Service, or Critical.',
    interviewQ1: 'What determines the number of neurons in the input and output layers?',
    interviewA1:
      'The input layer size equals the number of input features (e.g., 10 sensors or 784 pixels). The output layer size depends on the task: 1 neuron for regression or binary classification, and K neurons for K-class classification.',
    interviewQ2: 'What is the difference between a wide network and a deep network?',
    interviewA2:
      'A wide network has many neurons in a single layer, while a deep network stacks more hidden layers. Deeper networks can represent hierarchical compositions (like edges → shapes → objects) far more efficiently with fewer total parameters.',
  },
  {
    id: 279,
    modNum: 26,
    modTitle: 'Deep Learning Foundations',
    topicNumInMod: 4,
    title: 'Neurons, Layers and Activation Functions',
    subtitle: 'WEIGHTS, BIAS, AND THE NON-LINEAR SPARK THAT MAKES LEARNING POSSIBLE',
    coreEn:
      'An artificial neuron multiplies each input by a weight, adds a bias, and passes the total through an activation function (like ReLU, Sigmoid, or Softmax) that adds non-linearity so the network can learn curved, real-world patterns.',
    coreHi:
      'Ek artificial neuron har input ko weight se multiply karta hai, bias jodta hai, aur phir activation function (jaise ReLU, Sigmoid, Softmax) se guzarta hai taaki network seedhi line ke alawa curved, real-world patterns bhi seekh sake.',
    analogyTitle: 'Deciding Whether to Carry an Umbrella',
    analogyEn:
      'You weigh clues: dark clouds (+3), weather app alert (+4), and your own cautious habit (bias +1). If the total crosses your mental threshold (activation function), you grab the umbrella; otherwise you leave it!',
    analogyHi:
      'Aap clues tolte hain: kaale badal (+3), weather alert (+4), aur aapki aadat (bias +1). Agar total score aapke threshold (activation function) ko paar kar jaye, toh aap chhata utha lete hain, warna nahi!',
    steps: [
      {
        title: 'Multiply Inputs by Weights',
        en: 'Important inputs get large weights; irrelevant inputs get weights near zero.',
        hi: 'Zaroori inputs ko bade weights milte hain aur bekar inputs ko zero ke paas weights.',
        tone: 'sky',
      },
      {
        title: 'Sum and Add Bias',
        en: 'Add all weighted inputs plus a bias term that shifts the neuron’s firing threshold.',
        hi: 'Saare weighted inputs ko jodein aur ek bias add karein jo firing threshold ko adjust karta hai.',
        tone: 'amber',
      },
      {
        title: 'Apply Activation Function',
        en: 'Pass the sum through ReLU (hidden layers) or Sigmoid/Softmax (output layer) to bend the line.',
        hi: 'Sum ko ReLU (hidden layers) ya Sigmoid/Softmax (output layer) se guzarein taaki non-linearity aaye.',
        tone: 'lavender',
      },
      {
        title: 'Forward the Activated Signal',
        en: 'Send the neuron’s clean activated output to every neuron in the next layer.',
        hi: 'Neuron ka activated output agli layer ke neurons ko bhej dein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — ONE NEURON WITH RELU & SIGMOID',
    code: `import math

inputs = [2.0, -1.0]
weights = [0.8, 0.5]
bias = 0.2

z = inputs[0]*weights[0] + inputs[1]*weights[1] + bias
relu_out = max(0.0, z)
sigmoid_out = round(1 / (1 + math.exp(-z)), 3)

print("Linear sum z:", round(z, 2))
print("ReLU output:", round(relu_out, 2), "| Sigmoid prob:", sigmoid_out)`,
    codeOutput: `Linear sum z: 1.3
ReLU output: 1.3 | Sigmoid prob: 0.786`,
    codeCaptionEn: 'ReLU keeps positive values and zeros negatives; Sigmoid squashes any score into a 0–1 probability.',
    codeCaptionHi: 'ReLU positive numbers rakhta hai aur negative ko 0 kar deta hai; Sigmoid kisi bhi score ko 0 se 1 probability bana deta hai.',
    tableTitle: 'Most Common Activation Functions & Where to Use Them',
    tableHeaders: ['Activation', 'Output Range', 'Best Used In'],
    tableRows: [
      ['ReLU', '0 to +infinity', 'Hidden layers (fast, default choice)'],
      ['Sigmoid', '0 to 1', 'Binary classification output (Yes/No)'],
      ['Softmax', '0 to 1 (all sum to 1)', 'Multi-class output (Cat/Dog/Bird)'],
      ['Tanh', '-1 to +1', 'Centered hidden signals (e.g., RNNs)'],
    ],
    tableNoteEn: 'Without activation functions, stacking 100 linear layers collapses into a single straight-line equation!',
    tableNoteHi: 'Bina activation function ke 100 layers bhi milkar sirf ek hi seedhi line (linear equation) ban kar reh jayengi!',
    mistakeEn: 'Using Sigmoid in deep hidden layers, which shrinks gradients near 0 and stalls learning (vanishing gradient).',
    mistakeHi: 'Deep hidden layers mein Sigmoid lagana, jisse gradients bahut chhote ho jaate hain aur learning ruk jati hai.',
    proHabitEn: 'Default to ReLU (or GELU in Transformers) for hidden layers, and match the output activation to your task.',
    proHabitHi: 'Hidden layers mein ReLU (ya Transformers mein GELU) use karein, aur output activation ko apne task ke hisaab se chunein.',
    jobUseEn: 'Selecting the right output activation prevents broken probabilities in churn, fraud, and multi-class product tagging.',
    jobUseHi: 'Sahi output activation chunne se fraud, churn aur product tagging mein accurate probabilities milti hain.',
    mcq1Question: 'Why are non-linear activation functions like ReLU essential in neural networks?',
    mcq1Correct: 'Without them, multiple layers collapse into a single linear equation and cannot learn complex curves',
    mcq1Wrongs: [
      'They delete half of the training dataset automatically',
      'They convert Python code into SQL queries',
      'They make every output equal to 100',
    ],
    mcq1Explain: 'Non-linearity allows stacked layers to approximate curved, complex decision boundaries.',
    mcq2Question: 'Which activation function is best for the final output layer of a 4-class image classifier (Car, Bus, Bike, Truck)?',
    mcq2Correct: 'Softmax',
    mcq2Wrongs: [
      'ReLU',
      'Step function',
      'No activation at all',
    ],
    mcq2Explain: 'Softmax converts raw scores for all 4 classes into probabilities that add up to 1.0 (100%).',
    realWorldScenario:
      'Your e-commerce classifier predicts 6 clothing categories, but the raw output numbers are [-2.1, 4.5, 0.3, ...] and do not sum to 100%.',
    interviewQ1: 'What happens if you remove all activation functions from a 10-layer neural network?',
    interviewA1:
      'A linear combination of linear functions is still just one linear function. The entire 10-layer network collapses mathematically into a single-layer linear model and cannot learn non-linear patterns like XOR or image shapes.',
    interviewQ2: 'When do you use Sigmoid vs Softmax in the output layer?',
    interviewA2:
      'Use Sigmoid for binary classification (or multi-label tasks where multiple tags can be true at once). Use Softmax for mutually exclusive multi-class classification where exactly one class is right and probabilities must sum to 1.',
  },
  {
    id: 280,
    modNum: 26,
    modTitle: 'Deep Learning Foundations',
    topicNumInMod: 5,
    title: 'Forward Propagation',
    subtitle: 'HOW DATA FLOWS FORWARD FROM INPUT TO PREDICTION',
    coreEn:
      'Forward Propagation is the step-by-step left-to-right pass where input numbers travel through every layer—getting multiplied by weights, shifted by bias, and activated—until the network produces a prediction.',
    coreHi:
      'Forward Propagation wo left-to-right safar hai jahan input numbers har layer se guzarte hain—weights se multiply hote hain, bias judta hai aur activation lagta hai—jab tak final prediction na ban jaye.',
    analogyTitle: 'Passing a Message Through Office Departments',
    analogyEn:
      'A loan application starts at the front desk (Input), goes to Income Check (Hidden 1), then Credit Check (Hidden 2), and finally reaches the Manager who stamps "Approve 82%" (Output). That one-way trip is forward propagation.',
    analogyHi:
      'Loan form front desk (Input) se shuru hokar Income Check (Hidden 1), phir Credit Check (Hidden 2) se guzarta hai aur Manager "Approve 82%" stamp lagata hai (Output). Ye seedha safar hi forward propagation hai.',
    steps: [
      {
        title: 'Load Input Vector',
        en: 'Place one example’s numbers (or a batch of examples) into the input layer.',
        hi: 'Ek example (ya poore batch) ke numbers input layer mein rakhein.',
        tone: 'sky',
      },
      {
        title: 'Compute Layer 1 Matrix Math',
        en: 'Calculate z1 = W1 * x + b1 and apply activation a1 = ReLU(z1).',
        hi: 'z1 = W1 * x + b1 calculate karein aur activation a1 = ReLU(z1) lagayein.',
        tone: 'amber',
      },
      {
        title: 'Propagate Through Deeper Layers',
        en: 'Feed a1 as the input to Layer 2, repeating multiply-add-activate until the final layer.',
        hi: 'a1 ko Layer 2 ka input banayein aur multiply-add-activate repeat karte rahein.',
        tone: 'lavender',
      },
      {
        title: 'Produce Prediction y_hat',
        en: 'Read the final output number or probability distribution (y_hat).',
        hi: 'Final output number ya probability (y_hat) read karein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — MANUAL 2-LAYER FORWARD PASS',
    code: `# Input: study_hours=4, sleep_hours=7
x1, x2 = 4.0, 7.0
# Hidden layer (2 neurons with ReLU)
h1 = max(0.0, 0.5*x1 + 0.2*x2 - 1.0)
h2 = max(0.0, 0.3*x1 + 0.4*x2 - 0.5)
# Output layer (predicted exam score out of 100)
y_hat = round(12.0*h1 + 10.0*h2 + 15.0, 1)
print(f"h1={h1:.2f}, h2={h2:.2f} -> Predicted Score: {y_hat}")`,
    codeOutput: 'h1=2.40, h2=3.50 -> Predicted Score: 78.8',
    codeCaptionEn: 'Forward propagation is pure arithmetic: multiply, add, activate, repeat.',
    codeCaptionHi: 'Forward propagation sirf simple hisaab hai: multiply karo, add karo, activate karo, aur aage bhejo.',
    tableTitle: 'Tracing One Student Through Forward Propagation',
    tableHeaders: ['Stage', 'Input Received', 'Computation', 'Output Sent Forward'],
    tableRows: [
      ['Input', 'Hours=4, Sleep=7', 'Pass raw features', '[4.0, 7.0]'],
      ['Hidden Neuron 1', '[4.0, 7.0]', 'ReLU(0.5*4 + 0.2*7 - 1.0)', '2.40'],
      ['Hidden Neuron 2', '[4.0, 7.0]', 'ReLU(0.3*4 + 0.4*7 - 0.5)', '3.50'],
      ['Output Neuron', '[2.40, 3.50]', '12*2.40 + 10*3.50 + 15', '78.8 (Predicted Score)'],
    ],
    tableNoteEn: 'During inference (real-world usage after training), a model ONLY runs forward propagation!',
    tableNoteHi: 'Training ke baad real-world prediction (inference) mein model SIRF forward propagation chalata hai!',
    mistakeEn: 'Forgetting to scale inputs the exact same way during inference forward pass as during training.',
    mistakeHi: 'Training mein data normalize karna par prediction (forward pass) ke waqt raw unscaled numbers bhej dena.',
    proHabitEn: 'Save your preprocessing scaler alongside the model so every forward pass sees consistent input scales.',
    proHabitHi: 'Apne data scaler ko model ke saath save karein taaki har forward pass ko exact same scale ka input mile.',
    jobUseEn: 'Every time ChatGPT generates a word or a bank app scores a transaction in 10ms, it is executing a fast forward pass.',
    jobUseHi: 'Jab bhi ChatGPT ek word likhta hai ya bank app 10ms mein fraud check karta hai, wo forward pass chala raha hota hai.',
    mcq1Question: 'What happens during Forward Propagation?',
    mcq1Correct: 'Inputs flow forward through weights, biases, and activations to generate a prediction',
    mcq1Wrongs: [
      'Weights are updated backward from the output to the input',
      'Training rows are deleted from the database',
      'The learning rate is automatically set to zero',
    ],
    mcq1Explain: 'Forward propagation computes the model’s prediction from inputs using the current weights.',
    mcq2Question: 'Which pass is executed when a trained neural network serves live predictions to users in production?',
    mcq2Correct: 'Only Forward Propagation (no weight updates)',
    mcq2Wrongs: [
      'Only Backpropagation',
      'Random weight initialization on every click',
      'Re-training from epoch 1 for every user',
    ],
    mcq2Explain: 'In production inference, weights are frozen and only the forward pass runs to compute predictions quickly.',
    realWorldScenario:
      'Your deployed fraud model gives strange 0.99 fraud alerts in production because the API passed raw rupee amounts instead of the normalized values used in training.',
    interviewQ1: 'What is the role of intermediate activations stored during forward propagation in training vs inference?',
    interviewA1:
      'During training, frameworks cache intermediate activations from the forward pass because backpropagation needs them to compute gradients. During inference (e.g., torch.no_grad()), we skip caching them to save huge amounts of GPU memory.',
    interviewQ2: 'Why is forward propagation implemented as matrix multiplication rather than Python for-loops?',
    interviewA2:
      'Matrix multiplication lets GPUs compute thousands of neurons across an entire batch in parallel in a single hardware operation, making it hundreds of times faster than Python loops.',
  },
  {
    id: 281,
    modNum: 26,
    modTitle: 'Deep Learning Foundations',
    topicNumInMod: 6,
    title: 'Loss Functions',
    subtitle: 'MEASURING HOW WRONG THE MODEL IS SO IT CAN IMPROVE',
    coreEn:
      'A Loss Function (cost function) is a math scorecard that compares the model’s prediction against the true answer and outputs a single error number—the lower the loss, the smarter the model.',
    coreHi:
      'Loss Function ek math scorecard hai jo model ke prediction aur asli answer ka farq naapta hai. Ye ek single error number deta hai—jitna kam loss, utna behtar model.',
    analogyTitle: 'Archery Target Distance',
    analogyEn:
      'When an archer shoots an arrow, the distance from the bullseye tells them how far off they were. 0 cm means a perfect bullseye; 40 cm means big adjustment needed. Loss is that exact distance score.',
    analogyHi:
      'Jab teerandaaz teer chalata hai, toh bullseye se doori batati hai ki nishana kitna chooka. 0 cm matlab perfect shot; 40 cm matlab bada sudhaar chahiye. Loss wahi doori ka score hai.',
    steps: [
      {
        title: 'Get Prediction & True Label',
        en: 'Compare what the model guessed (y_hat) with the actual ground truth (y).',
        hi: 'Model ke guess (y_hat) ko asli answer (y) se compare karein.',
        tone: 'sky',
      },
      {
        title: 'Pick Task-Matching Formula',
        en: 'Use MSE/MAE for numbers (prices) and Cross-Entropy for categories (spam/cat/dog).',
        hi: 'Numbers (price) ke liye MSE/MAE aur categories (spam/cat/dog) ke liye Cross-Entropy chunein.',
        tone: 'amber',
      },
      {
        title: 'Compute Error Penalty',
        en: 'Big confident mistakes receive a much larger penalty than tiny slips.',
        hi: 'Badi aur overconfident galtiyon par chhoti galtiyon se kahin zyada penalty lagti hai.',
        tone: 'lavender',
      },
      {
        title: 'Send Loss to Optimizer',
        en: 'Pass the single scalar loss value to backpropagation so weights can move in the right direction.',
        hi: 'Is single loss number ko backpropagation ko dein taaki weights sahi disha mein sudhar sakein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — MSE VS BINARY CROSS-ENTROPY LOSS',
    code: `import math

# Regression: True price = 50, Predicted = 44
mse = (50 - 44) ** 2

# Classification: True = 1 (Fraud), Predicted prob = 0.9 vs 0.1
bce_good = -math.log(0.9)
bce_bad = -math.log(0.1)

print("MSE Loss:", mse)
print(f"Cross-Entropy (good guess 0.9): {bce_good:.3f}")
print(f"Cross-Entropy (bad guess 0.1):  {bce_bad:.3f}")`,
    codeOutput: `MSE Loss: 36
Cross-Entropy (good guess 0.9): 0.105
Cross-Entropy (bad guess 0.1):  2.303`,
    codeCaptionEn: 'Notice how Cross-Entropy punishes a confident wrong guess (0.1 for a true 1) 20x harder than a good guess!',
    codeCaptionHi: 'Dekhiye Cross-Entropy galat guess (0.1) par sahi guess (0.9) ke muqable 20 guna zyada penalty lagata hai!',
    tableTitle: 'Choosing the Right Loss Function',
    tableHeaders: ['Task Type', 'Recommended Loss', 'Why It Works'],
    tableRows: [
      ['Regression (House Price)', 'MSE (Mean Squared Error)', 'Penalizes large numeric misses strongly'],
      ['Regression with Outliers', 'MAE / Huber Loss', 'Less distorted by extreme outlier prices'],
      ['Binary Classification', 'Binary Cross-Entropy', 'Penalizes confident wrong probabilities'],
      ['Multi-Class Classification', 'Categorical Cross-Entropy', 'Works seamlessly with Softmax outputs'],
    ],
    tableNoteEn: 'Accuracy is great for humans to read, but neural networks train on smooth, differentiable Loss Functions.',
    tableNoteHi: 'Accuracy humans ke dekhne ke liye acchi hai, par neural network seekhne ke liye smooth Loss Function ka use karta hai.',
    mistakeEn: 'Using MSE loss for a classification problem instead of Cross-Entropy, which makes learning slow and unstable.',
    mistakeHi: 'Classification problem mein Cross-Entropy ki jagah MSE laga dena, jisse learning slow aur kamzor ho jati hai.',
    proHabitEn: 'Always pair your output activation and loss function together (Sigmoid + BCE, Softmax + Cross-Entropy, Linear + MSE).',
    proHabitHi: 'Output activation aur loss function ko hamesha sahi jodi mein lagayein (Sigmoid + BCE, Softmax + Cross-Entropy).',
    jobUseEn: 'Custom loss functions let banks penalize missed fraud 10x more heavily than a harmless false alarm.',
    jobUseHi: 'Custom loss functions se banks missed fraud par false alarm ke muqable 10x zyada penalty laga sakte hain.',
    mcq1Question: 'What is the primary job of a Loss Function during neural network training?',
    mcq1Correct: 'To measure how far the model’s predictions are from the true answers as a single score to minimize',
    mcq1Wrongs: [
      'To delete corrupted image files from disk',
      'To randomly shuffle the order of hidden layers',
      'To increase the number of GPU cores',
    ],
    mcq1Explain: 'The loss function quantifies prediction error so gradient descent knows how to reduce it.',
    mcq2Question: 'Which loss function should you use for a multi-class model predicting 10 handwritten digits?',
    mcq2Correct: 'Categorical Cross-Entropy',
    mcq2Wrongs: [
      'Mean Squared Error (MSE)',
      'Euclidean distance only',
      'Zero loss',
    ],
    mcq2Explain: 'Categorical Cross-Entropy is the standard loss paired with Softmax for multi-class classification.',
    realWorldScenario:
      'Your delivery-time predictor has a few extreme 5-hour traffic outlier orders that are skewing MSE loss and ruining normal 30-minute predictions.',
    interviewQ1: 'Why do we train classifiers with Cross-Entropy instead of directly optimizing Accuracy?',
    interviewA1:
      'Accuracy is a step function—tiny weight changes do not change the count of correct predictions, so its gradient is zero almost everywhere. Cross-Entropy is smooth and differentiable, giving gradient descent a clear slope to follow.',
    interviewQ2: 'When would you choose MAE or Huber Loss over MSE?',
    interviewA2:
      'When your regression target contains noisy outliers. Because MSE squares errors, one extreme outlier can dominate the gradient, whereas MAE or Huber Loss grows linearly for large errors and stays robust.',
  },
  {
    id: 282,
    modNum: 26,
    modTitle: 'Deep Learning Foundations',
    topicNumInMod: 7,
    title: 'Gradient Descent',
    subtitle: 'WALKING DOWNHILL STEP BY STEP TO FIND THE LOWEST ERROR',
    coreEn:
      'Gradient Descent is the optimization algorithm that repeatedly measures the slope (gradient) of the loss landscape and nudges every weight downhill so the model’s error shrinks step by step.',
    coreHi:
      'Gradient Descent wo algorithm hai jo baar-baar loss ki dhalan (slope/gradient) check karta hai aur har weight ko neeche ki taraf thoda-thoda khiskata hai taaki model ki galti kam hoti jaye.',
    analogyTitle: 'Walking Down a Foggy Mountain at Night',
    analogyEn:
      'Imagine standing on a foggy hill trying to reach the lowest valley. You cannot see the whole mountain, so you feel which direction slopes downward under your feet and take a careful step downhill—repeating until the ground is flat.',
    analogyHi:
      'Sochiye aap kohre mein ek pahad par hain aur sabse neeche ghati mein pahunchna hai. Poora pahad nahi dikhta, par aap pair ke neeche dhalan mehsoos karke neeche ki taraf kadam badhate hain—jab tak zameen seedhi na ho jaye.',
    steps: [
      {
        title: 'Start with Initial Weights',
        en: 'Begin with small random weights—your starting spot high up on the error hill.',
        hi: 'Chhote random weights se shuru karein—ye error pahad par aapki shuruati jagah hai.',
        tone: 'sky',
      },
      {
        title: 'Measure the Slope (Gradient)',
        en: 'Compute whether increasing a weight makes the loss go up or down.',
        hi: 'Check karein ki weight badhane se loss upar ja raha hai ya neeche.',
        tone: 'amber',
      },
      {
        title: 'Step in Opposite Direction',
        en: 'Update weight: w_new = w_old - learning_rate * gradient (move downhill!).',
        hi: 'Weight update karein: w_new = w_old - learning_rate * gradient (neeche ki taraf kadam!).',
        tone: 'lavender',
      },
      {
        title: 'Repeat Until Convergence',
        en: 'Keep stepping until the slope is nearly zero and loss stops improving.',
        hi: 'Tab tak repeat karein jab tak dhalan zero ke paas na aa jaye aur loss girna band na ho.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — GRADIENT DESCENT FINDING MINIMUM OF (w - 3)^2',
    code: `w = 10.0          # Bad starting guess (true best is 3.0)
lr = 0.2          # Step size (learning rate)

for step in range(1, 6):
    loss = (w - 3) ** 2
    grad = 2 * (w - 3)       # Slope of (w - 3)^2
    w = w - lr * grad        # Step downhill
    print(f"Step {step}: w={w:.3f}, loss={loss:.3f}")`,
    codeOutput: `Step 1: w=7.200, loss=49.000
Step 2: w=5.520, loss=17.640
Step 3: w=4.512, loss=6.350
Step 4: w=3.907, loss=2.286
Step 5: w=3.544, loss=0.823`,
    codeCaptionEn: 'Watch loss drop from 49.0 to 0.82 in just 5 downhill steps as w approaches 3.0.',
    codeCaptionHi: 'Dekhiye sirf 5 steps mein loss 49.0 se girkar 0.82 par aa gaya aur w, 3.0 ke paas pahunch gaya.',
    tableTitle: 'Three Flavors of Gradient Descent',
    tableHeaders: ['Variant', 'Data Used Per Step', 'Real-World Behavior'],
    tableRows: [
      ['Batch GD', 'Entire dataset at once', 'Smooth steps, but too slow for big data'],
      ['Stochastic GD (SGD)', '1 single example', 'Very fast, but noisy zig-zag path'],
      ['Mini-Batch GD', 'Small chunk (e.g., 32–256 rows)', 'Best balance: fast on GPU + stable (industry default)'],
    ],
    tableNoteEn: 'Almost all modern Deep Learning uses Mini-Batch Gradient Descent.',
    tableNoteHi: 'Aaj kal lagbhag har Deep Learning model Mini-Batch Gradient Descent hi use karta hai.',
    mistakeEn: 'Setting the step size (learning rate) way too big so the weight jumps across the valley and loss explodes to NaN.',
    mistakeHi: 'Step size (learning rate) itna bada rakh dena ki weight ghati ke paar kood jaye aur loss NaN ho jaye.',
    proHabitEn: 'Use Mini-Batch GD with a sensible learning rate and always watch the loss curve drop smoothly.',
    proHabitHi: 'Mini-Batch GD aur balanced learning rate use karein, aur hamesha loss curve ko neeche jaate hue check karein.',
    jobUseEn: 'Gradient Descent is the universal engine training everything from linear regression to trillion-parameter LLMs.',
    jobUseHi: 'Linear regression se lekar ChatGPT jaise bade LLMs tak sabko train karne wala engine Gradient Descent hi hai.',
    mcq1Question: 'In the update rule w = w - lr * gradient, why do we SUBTRACT the gradient?',
    mcq1Correct: 'Because the gradient points uphill, so subtracting it moves the weight downhill toward lower loss',
    mcq1Wrongs: [
      'Because subtraction is faster than addition on GPUs',
      'To make the loss as large as possible',
      'To force every weight to become negative',
    ],
    mcq1Explain: 'The gradient points in the direction of steepest ascent; moving opposite to it minimizes loss.',
    mcq2Question: 'Which variant of Gradient Descent is the standard default in modern Deep Learning?',
    mcq2Correct: 'Mini-Batch Gradient Descent',
    mcq2Wrongs: [
      'Full-dataset Batch GD on 100 million images per step',
      'Zero-batch GD',
      'Manual trial-and-error without gradients',
    ],
    mcq2Explain: 'Mini-Batch GD harnesses GPU parallelism while keeping updates frequent and reasonably smooth.',
    realWorldScenario:
      'Your neural network training loss bounces wildly up and down every epoch and suddenly prints "NaN".',
    interviewQ1: 'Explain the trade-off between Batch, Stochastic, and Mini-Batch Gradient Descent.',
    interviewA1:
      'Batch GD gives exact gradients but is too slow and memory-heavy for large datasets. SGD updates after every sample—fast and able to escape shallow traps, but very noisy. Mini-Batch GD (e.g., 32–256 samples) gives the best of both: GPU vectorization speed and low-variance updates.',
    interviewQ2: 'What is a saddle point vs a local minimum in deep learning loss landscapes?',
    interviewA2:
      'A local minimum curves upward in every direction, whereas a saddle point curves up in some directions and down in others. In high-dimensional neural networks, saddle points are far more common than bad local minima, and noisy mini-batches + momentum help escape them.',
  },
  {
    id: 283,
    modNum: 26,
    modTitle: 'Deep Learning Foundations',
    topicNumInMod: 8,
    title: 'Backpropagation Intuition',
    subtitle: 'HOW A NETWORK ASSIGNS BLAME BACKWARD TO FIX EVERY WEIGHT',
    coreEn:
      'Backpropagation is the reverse pass that starts at the final loss and uses the chain rule to figure out how much each individual weight in every earlier layer contributed to the error—so Gradient Descent knows exactly how to fix it.',
    coreHi:
      'Backpropagation wo ulta (reverse) pass hai jo final loss se shuru hota hai aur chain rule ki madad se har purani layer ke har weight ko batata hai ki galti mein uska kitna hissa tha—taaki har weight sahi se sudhar sake.',
    analogyTitle: 'Fixing a Too-Salty Curry in a Restaurant',
    analogyEn:
      'A customer says the curry is too salty (Loss). Feedback travels backward: the waiter blames the plating chef (0% fault), who asks the curry chef (80% fault—too much salt), who checks the spice supplier (20% fault). Everyone adjusts their exact share!',
    analogyHi:
      'Customer bolta hai sabzi mein namak zyada hai (Loss). Feedback peeche jata hai: waiter ki 0% galti, curry chef ki 80% galti (zyada namak dala), aur masala supplier ki 20% galti. Sab apne hisse ka sudhaar kar lete hain!',
    steps: [
      {
        title: 'Run Forward Pass & Measure Loss',
        en: 'Compute the prediction and find the total error at the output layer.',
        hi: 'Forward pass chalakar prediction nikalein aur output par total error naapein.',
        tone: 'sky',
      },
      {
        title: 'Compute Output Layer Gradients',
        en: 'See how much the final layer’s weights directly caused the error.',
        hi: 'Dekhein ki aakhiri layer ke weights ne error mein kitna yogdaan diya.',
        tone: 'amber',
      },
      {
        title: 'Propagate Blame Backward (Chain Rule)',
        en: 'Multiply slopes layer by layer from output back to input to assign credit to every hidden weight.',
        hi: 'Chain rule se layer-by-layer peeche jaate hue har hidden weight ka exact gradient nikalein.',
        tone: 'lavender',
      },
      {
        title: 'Update All Weights Simultaneously',
        en: 'The optimizer nudges every weight using its personal gradient, then clears old gradients.',
        hi: 'Optimizer har weight ko uske personal gradient se update karta hai aur purane gradients clear kar deta hai.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — CHAIN RULE BACKPROP ON 2-STEP CALCULATION',
    code: `# Forward: y_hat = w2 * (w1 * x), true y = 12
x, y = 2.0, 12.0
w1, w2 = 1.5, 2.0
h = w1 * x                 # 3.0
y_hat = w2 * h             # 6.0 (error = -6.0)
loss = (y_hat - y) ** 2    # 36.0

# Backward (Chain Rule):
dloss_dyhat = 2 * (y_hat - y)      # -12.0
dloss_dw2 = dloss_dyhat * h        # -36.0 (blame on w2)
dloss_dw1 = dloss_dyhat * w2 * x   # -48.0 (blame on w1)
print(f"Loss={loss} | grad_w2={dloss_dw2} | grad_w1={dloss_dw1}")`,
    codeOutput: 'Loss=36.0 | grad_w2=-36.0 | grad_w1=-48.0',
    codeCaptionEn: 'Both gradients are negative, telling Gradient Descent to increase w1 and w2 so y_hat rises from 6 toward 12.',
    codeCaptionHi: 'Dono gradients negative hain, jo batate hain ki w1 aur w2 ko badhana hai taaki prediction 6 se 12 ki taraf jaye.',
    tableTitle: 'Forward Pass vs Backpropagation Side by Side',
    tableHeaders: ['Feature', 'Forward Propagation', 'Backpropagation'],
    tableRows: [
      ['Direction', 'Input → Hidden → Output', 'Output Loss → Hidden → Input'],
      ['What Flows', 'Data & activations', 'Error gradients (blame signals)'],
      ['Main Goal', 'Make a prediction', 'Compute exact gradient for every weight'],
      ['Used In Production?', 'Yes (every inference call)', 'No (training phase only)'],
    ],
    tableNoteEn: 'PyTorch and TensorFlow compute backpropagation automatically via "autograd"—you just call loss.backward()!',
    tableNoteHi: 'PyTorch aur TensorFlow mein aapko haath se calculus nahi karna padta—bas loss.backward() call karna hota hai!',
    mistakeEn: 'Forgetting optimizer.zero_grad() in PyTorch, causing old gradients from previous batches to pile up and corrupt updates.',
    mistakeHi: 'PyTorch mein optimizer.zero_grad() bhool jana, jisse purane batches ke gradients judte jaate hain aur training bigad jati hai.',
    proHabitEn: 'Always follow the golden training loop order: zero_grad() → forward → loss → backward() → step().',
    proHabitHi: 'Hamesha golden loop order yaad rakhein: zero_grad() → forward → loss → backward() → step().',
    jobUseEn: 'Understanding backprop helps ML Engineers diagnose vanishing/exploding gradients when deep models refuse to learn.',
    jobUseHi: 'Backprop ki samajh hone se ML Engineers vanishing ya exploding gradient bugs ko turant pakad lete hain.',
    mcq1Question: 'What mathematical rule allows backpropagation to pass error signals through multiple stacked layers?',
    mcq1Correct: 'The Chain Rule of calculus',
    mcq1Wrongs: [
      'The Pythagorean Theorem',
      'Alphabetical sorting',
      'Random number generation',
    ],
    mcq1Explain: 'The chain rule multiplies local layer derivatives together to find how any early weight affects the final loss.',
    mcq2Question: 'What happens if you forget to clear gradients (zero_grad) between mini-batches in PyTorch?',
    mcq2Correct: 'Gradients accumulate across batches, leading to wrong weight updates',
    mcq2Wrongs: [
      'The model trains twice as accurately',
      'PyTorch automatically deletes the dataset',
      'The output layer switches to Softmax',
    ],
    mcq2Explain: 'PyTorch accumulates gradients by default, so clearing them each step is mandatory unless intentionally doing gradient accumulation.',
    realWorldScenario:
      'A junior engineer builds a 15-layer network with Sigmoid activations and notices the first 5 layers never change their weights at all.',
    interviewQ1: 'Explain the vanishing gradient problem in plain English.',
    interviewA1:
      'During backpropagation, we multiply slopes layer by layer from output to input. If each layer’s slope is small (like Sigmoid’s max 0.25), multiplying 0.25 many times shrinks the gradient almost to zero—so early layers stop learning. ReLU, residual skip connections, and BatchNorm fix this.',
    interviewQ2: 'Does backpropagation itself update the weights?',
    interviewA2:
      'Strictly speaking, backpropagation only computes the gradients (how much each weight affects the loss). The optimizer (like SGD or Adam) then uses those gradients to actually update the weights.',
  },
  {
    id: 284,
    modNum: 26,
    modTitle: 'Deep Learning Foundations',
    topicNumInMod: 9,
    title: 'Learning Rate and Optimizers',
    subtitle: 'CONTROLLING STEP SIZE AND SMART MOMENTUM FOR FAST CONVERGENCE',
    coreEn:
      'The Learning Rate controls how big a step weights take on each update, while an Optimizer (like SGD with Momentum or Adam) is the smart driver that adapts step sizes automatically so training converges fast and smoothly.',
    coreHi:
      'Learning Rate tay karta hai ki har update mein weight kitna bada kadam lega, aur Optimizer (jaise SGD Momentum ya Adam) ek smart driver hai jo har weight ki speed adjust karke jaldi aur smooth training karwata hai.',
    analogyTitle: 'Tuning a Shower Faucet Temperature',
    analogyEn:
      'If you twist the hot-water knob too aggressively (high learning rate), water swings between boiling and freezing. If you nudge it 1 millimeter per minute (tiny learning rate), you wait forever. A smart thermostat (Adam optimizer) dials in the perfect temperature fast!',
    analogyHi:
      'Agar shower ka garam paani knob ekdum zyada ghuma dein (high LR), toh paani kabhi bahut garam kabhi bahut thanda ho jata hai. Bahut dheere ghumayein (low LR) toh ghanton lag jayenge. Smart thermostat (Adam) turant perfect temperature set kar deta hai!',
    steps: [
      {
        title: 'Choose an Optimizer',
        en: 'Pick Adam or AdamW as your default smart optimizer; use SGD+Momentum for fine-tuned vision.',
        hi: 'Default smart optimizer ke liye Adam ya AdamW chunein; vision fine-tuning ke liye SGD+Momentum.',
        tone: 'sky',
      },
      {
        title: 'Set a Sensible Initial LR',
        en: 'Common starting points are 0.001 (1e-3) for Adam and 0.01 for SGD.',
        hi: 'Adam ke liye 0.001 (1e-3) aur SGD ke liye 0.01 achhe starting points hain.',
        tone: 'amber',
      },
      {
        title: 'Monitor Loss Behavior',
        en: 'Exploding loss means LR is too high; flat barely-moving loss means LR is too low.',
        hi: 'Agar loss uchhal kar badh jaye toh LR zyada hai; agar bilkul na gire toh LR bahut kam hai.',
        tone: 'lavender',
      },
      {
        title: 'Decay LR Over Time (Scheduler)',
        en: 'Take bigger steps early to learn fast, then shrink the LR near the end to land cleanly in the minimum.',
        hi: 'Shuru mein bade steps lein aur aakhir mein LR chhota kar dein taaki model exact bottom par land kare.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — COMPARING TOO-SMALL, GOOD, AND TOO-BIG LEARNING RATES',
    code: `for lr in [0.01, 0.3, 1.1]:
    w = 10.0
    for _ in range(4):
        w = w - lr * 2 * (w - 3)
    print(f"LR={lr:<4} -> w after 4 steps = {w:.2f} (target=3.0)")`,
    codeOutput: `LR=0.01 -> w after 4 steps = 9.45 (target=3.0)
LR=0.3  -> w after 4 steps = 3.18 (target=3.0)
LR=1.1  -> w after 4 steps = 17.52 (target=3.0)`,
    codeCaptionEn: 'LR=0.01 barely moves, LR=0.3 lands right near 3.0, and LR=1.1 overshoots and diverges to 17.52!',
    codeCaptionHi: 'LR=0.01 bahut dheema hai, LR=0.3 seedha 3.0 ke paas pahuncha, aur LR=1.1 ulta 17.52 par bhag gaya!',
    tableTitle: 'Popular Deep Learning Optimizers Compared',
    tableHeaders: ['Optimizer', 'How It Works', 'Best Default Use'],
    tableRows: [
      ['SGD', 'Fixed step size downhill', 'Simple baseline, educational'],
      ['SGD + Momentum', 'Adds rolling-ball inertia to smooth zig-zags', 'Classic CNN image models'],
      ['Adam', 'Momentum + per-weight adaptive step size', 'Go-to default for most deep nets'],
      ['AdamW', 'Adam with proper decoupled weight decay', 'Modern LLMs & Transformers'],
    ],
    tableNoteEn: 'Learning rate is widely considered the single most important hyperparameter in Deep Learning.',
    tableNoteHi: 'Learning rate ko Deep Learning ka sabse important hyperparameter mana jata hai.',
    mistakeEn: 'Keeping a huge learning rate like 0.5 with Adam and wondering why accuracy stays stuck at random guessing.',
    mistakeHi: 'Adam ke saath 0.5 jaisa bada learning rate rakhna aur sochna ki accuracy random guessing par kyun atki hai.',
    proHabitEn: 'Start with AdamW (lr=1e-3 for training from scratch, 2e-5 for fine-tuning pretrained models) and add a cosine LR scheduler.',
    proHabitHi: 'Scratch training mein AdamW (lr=1e-3) aur fine-tuning mein chhota LR (2e-5) rakhein, saath mein LR scheduler lagayein.',
    jobUseEn: 'Choosing AdamW with warmup and cosine decay is standard practice when fine-tuning LLMs and vision models in industry.',
    jobUseHi: 'Industry mein LLMs aur vision models fine-tune karte waqt AdamW + warmup + cosine decay standard practice hai.',
    mcq1Question: 'What typically happens when your learning rate is set WAY too high?',
    mcq1Correct: 'Updates overshoot the minimum and the loss oscillates wildly or explodes to NaN',
    mcq1Wrongs: [
      'The model always achieves 100% accuracy in 1 step',
      'Training uses zero GPU memory',
      'The dataset automatically doubles in size',
    ],
    mcq1Explain: 'Excessively large steps jump past the valley floor, causing divergence.',
    mcq2Question: 'Why is Adam (or AdamW) the most popular default optimizer for beginners and pros alike?',
    mcq2Correct: 'It combines momentum with automatic per-parameter adaptive learning rates',
    mcq2Wrongs: [
      'It requires no loss function',
      'It only works on CPU laptops',
      'It eliminates the need for validation data',
    ],
    mcq2Explain: 'Adam adapts step sizes individually for each weight while smoothing noisy gradients with momentum.',
    realWorldScenario:
      'Your model’s loss decreases very steadily from 2.40 to 2.38 over 20 epochs—almost flatlining. What hyperparameter should you inspect first?',
    interviewQ1: 'Why is AdamW preferred over classic Adam for Transformers and LLMs?',
    interviewA1:
      'In classic Adam, L2 regularization gets mixed into the adaptive gradient scaling, weakening regularization on weights with large gradients. AdamW decouples weight decay from the gradient update, producing better generalization.',
    interviewQ2: 'What is a learning rate warmup and why do we use it?',
    interviewA2:
      'Warmup starts with a very small learning rate for the first few steps and ramps up linearly to the target LR. It prevents unstable giant weight jumps at the very start when weights and Adam’s variance estimates are still random.',
  },
  {
    id: 285,
    modNum: 26,
    modTitle: 'Deep Learning Foundations',
    topicNumInMod: 10,
    title: 'Epochs, Batches and Training',
    subtitle: 'HOW LARGE DATASETS ARE FED IN BITE-SIZED ROUNDS',
    coreEn:
      'A Batch is a small subset of training examples processed together before one weight update, an Iteration (step) is one batch update, and an Epoch is one complete pass through the entire training dataset.',
    coreHi:
      'Batch training data ka ek chhota tukda hota hai jisko ek saath process karke weight update hota hai, Iteration ek batch ka update hai, aur Epoch ka matlab poore dataset ka ek poora chakkar.',
    analogyTitle: 'Studying a 320-Page Textbook for an Exam',
    analogyEn:
      'You cannot memorize 320 pages in one gulp. So you read 32 pages per sitting (Batch Size = 32), taking 10 sittings (10 Iterations) to finish the whole book once (1 Epoch). Revising the whole book 5 times equals 5 Epochs!',
    analogyHi:
      'Aap 320 page ki kitab ek saath nahi rat sakte. Isliye aap ek baar mein 32 page padhte hain (Batch Size = 32), toh 10 sittings (Iterations) mein poori kitab 1 baar khatam hoti hai (1 Epoch). Poori kitab 5 baar revise karna = 5 Epochs!',
    steps: [
      {
        title: 'Shuffle the Training Dataset',
        en: 'Randomize row order before each epoch so the model never memorizes data sequence.',
        hi: 'Har epoch se pehle data shuffle karein taaki model rows ka order na rat le.',
        tone: 'sky',
      },
      {
        title: 'Slice into Mini-Batches',
        en: 'Split N rows into chunks of size B (e.g., 32 or 64) that fit comfortably in GPU memory.',
        hi: 'N rows ko size B (jaise 32 ya 64) ke chunks mein baantein jo GPU memory mein aaram se fit hon.',
        tone: 'amber',
      },
      {
        title: 'Run Step Per Batch',
        en: 'For each batch: forward pass → loss → backprop → optimizer weight update.',
        hi: 'Har batch par chalayein: forward pass → loss → backprop → weight update.',
        tone: 'lavender',
      },
      {
        title: 'Finish Epoch & Validate',
        en: 'Once all batches finish, check validation accuracy and start the next epoch if still improving.',
        hi: 'Saare batches khatam hone par validation accuracy check karein aur zaroorat ho toh agla epoch chalayein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — CALCULATING BATCHES, STEPS & TOTAL UPDATES',
    code: `total_samples = 1000
batch_size = 50
epochs = 10

steps_per_epoch = total_samples // batch_size
total_weight_updates = steps_per_epoch * epochs

print("Steps (iterations) per epoch:", steps_per_epoch)
print("Total weight updates across 10 epochs:", total_weight_updates)`,
    codeOutput: `Steps (iterations) per epoch: 20
Total weight updates across 10 epochs: 200`,
    codeCaptionEn: 'With 1,000 samples and batch size 50, the weights update 20 times every epoch—200 times in 10 epochs.',
    codeCaptionHi: '1,000 samples aur batch size 50 ke saath har epoch mein weights 20 baar update hote hain—10 epochs mein 200 baar.',
    tableTitle: 'Quick Math Cheat Sheet: Epoch vs Batch vs Iteration',
    tableHeaders: ['Term', 'Meaning', 'Example (1,280 Images, Batch=64)'],
    tableRows: [
      ['Batch Size', 'Samples processed per weight update', '64 images'],
      ['Iteration / Step', 'One forward + backward pass on 1 batch', '20 steps per epoch (1280 / 64)'],
      ['Epoch', 'One full pass over all 1,280 images', '1 epoch = 20 weight updates'],
      ['10 Epochs', '10 full passes over the dataset', '200 total weight updates'],
    ],
    tableNoteEn: 'Powers of 2 (16, 32, 64, 128) align neatly with GPU hardware memory for faster matrix operations.',
    tableNoteHi: '2 ke powers (16, 32, 64, 128) GPU memory ke saath best fit hote hain aur training tez karte hain.',
    mistakeEn: 'Setting batch size to 4,096 on a small GPU and immediately crashing with "CUDA Out of Memory".',
    mistakeHi: 'Chhote GPU par batch size 4,096 rakh dena aur turant "CUDA Out of Memory" crash dekhna.',
    proHabitEn: 'Start with batch_size=32 or 64, shuffle training data every epoch, and use Early Stopping to pick the ideal epoch count.',
    proHabitHi: 'batch_size=32 ya 64 se start karein, har epoch mein data shuffle karein, aur sahi epoch ke liye Early Stopping lagayein.',
    jobUseEn: 'Tuning batch size and gradient accumulation lets ML teams train massive models even on budget-constrained GPUs.',
    jobUseHi: 'Batch size aur gradient accumulation tune karke teams chhote GPUs par bhi bade models train kar leti hain.',
    mcq1Question: 'If your dataset has 640 images and your batch size is 32, how many iterations (weight updates) happen in 1 epoch?',
    mcq1Correct: '20 iterations',
    mcq1Wrongs: [
      '640 iterations',
      '32 iterations',
      '1 iteration',
    ],
    mcq1Explain: '640 samples divided by 32 samples per batch equals 20 iterations per epoch.',
    mcq2Question: 'Why do we shuffle the training data at the start of every epoch?',
    mcq2Correct: 'So batches contain a fresh mix of examples and the model does not memorize row order',
    mcq2Wrongs: [
      'To permanently delete duplicate columns',
      'Because GPUs cannot read sorted numbers',
      'To increase the number of classes',
    ],
    mcq2Explain: 'Shuffling prevents ordered-class bias (like seeing all Cats first, then all Dogs) that destabilizes gradients.',
    realWorldScenario:
      'Your PyTorch image classifier throws "RuntimeError: CUDA out of memory" on the very first training batch.',
    interviewQ1: 'How does batch size affect generalization and training speed?',
    interviewA1:
      'Larger batches utilize GPU cores better and produce smoother gradients, but very large batches can converge to sharp minima that generalize worse unless you scale the learning rate. Smaller batches (32–64) add slight noise that often acts as helpful regularization.',
    interviewQ2: 'What is gradient accumulation and when is it useful?',
    interviewA2:
      'If you want an effective batch size of 64 but your GPU only fits 16, you run 4 mini-batches of 16 while accumulating gradients before calling optimizer.step() and zero_grad(). This simulates batch size 64 with 4x less GPU memory.',
  },
  {
    id: 286,
    modNum: 26,
    modTitle: 'Deep Learning Foundations',
    topicNumInMod: 11,
    title: 'Overfitting and Regularization',
    subtitle: 'STOPPING NEURAL NETWORKS FROM MEMORIZING INSTEAD OF UNDERSTANDING',
    coreEn:
      'Overfitting happens when a neural network memorizes training noise and scores 99% on training data but fails on new unseen data; Regularization (Dropout, Weight Decay, Early Stopping, Data Augmentation) forces the model to learn generalizable patterns.',
    coreHi:
      'Overfitting tab hoti hai jab model training data ka ratta maar leta hai—training par 99% score aata hai par naye data par fail ho jata hai. Regularization (Dropout, Weight Decay, Early Stopping) model ko asli pattern seekhne par majboor karta hai.',
    analogyTitle: 'Memorizing Mock Test Answers vs Learning Concepts',
    analogyEn:
      'A student who memorizes exact question numbers from one practice sheet gets 100% on that sheet, then fails the real exam when questions are reworded. Studying with varied practice questions (Augmentation) and self-testing without notes (Dropout) builds real mastery.',
    analogyHi:
      'Jo student ek hi mock test ke answers rat leta hai, wo usi sheet par 100% laata hai par asli exam mein fail ho jata hai. Alag-alag questions practice karna (Augmentation) aur bina notes test dena (Dropout) asli samajh banata hai.',
    steps: [
      {
        title: 'Spot the Overfitting Gap',
        en: 'Watch training loss keep falling while validation loss starts climbing upward.',
        hi: 'Dekhein agar training loss girta ja raha hai par validation loss upar badhne laga hai.',
        tone: 'sky',
      },
      {
        title: 'Apply Dropout & Weight Decay',
        en: 'Randomly mute a percentage of neurons during training (Dropout) and penalize huge weights (L2).',
        hi: 'Training ke dauran kuch neurons ko randomly band karein (Dropout) aur bade weights par penalty lagayein (L2).',
        tone: 'amber',
      },
      {
        title: 'Augment Training Data',
        en: 'Create realistic variations (flips, crops, slight noise) so the model cannot memorize exact samples.',
        hi: 'Data ke realistic variations (flip, crop, slight noise) banayein taaki model exact photo na rat sake.',
        tone: 'lavender',
      },
      {
        title: 'Trigger Early Stopping',
        en: 'Automatically halt training and restore the best weights as soon as validation loss stops improving.',
        hi: 'Jaise hi validation loss sudharna band kare, training rok dein aur best weights save rakhein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — DETECTING OVERFITTING & EARLY STOPPING',
    code: `train_losses = [0.85, 0.55, 0.30, 0.15, 0.08]
val_losses   = [0.88, 0.60, 0.42, 0.48, 0.61]

best_epoch = val_losses.index(min(val_losses)) + 1
print(f"Best model at Epoch {best_epoch} (val_loss={min(val_losses)})")
print("Epochs 4-5 show classic overfitting: train drops, val rises!")`,
    codeOutput: `Best model at Epoch 3 (val_loss=0.42)
Epochs 4-5 show classic overfitting: train drops, val rises!`,
    codeCaptionEn: 'Early stopping saves the Epoch 3 checkpoint before the model starts memorizing training noise.',
    codeCaptionHi: 'Early stopping Epoch 3 ka best model save kar leta hai, usse pehle ki model ratta maarna shuru kare.',
    tableTitle: 'Top Regularization Techniques in Deep Learning',
    tableHeaders: ['Technique', 'How It Prevents Memorization', 'When to Use'],
    tableRows: [
      ['Dropout (e.g., 0.2–0.5)', 'Randomly disables neurons each batch so no single neuron dominates', 'Dense / MLP & Transformer layers'],
      ['L2 / Weight Decay', 'Keeps weights small and smooth', 'Almost every neural network'],
      ['Early Stopping', 'Stops training when validation loss turns upward', 'Every training run'],
      ['Data Augmentation', 'Randomly flips/rotates/jitters inputs', 'Images, audio, small datasets'],
    ],
    tableNoteEn: 'Remember: Dropout is ONLY active during training—always turn it off (model.eval()) during validation and testing!',
    tableNoteHi: 'Yaad rakhein: Dropout SIRF training mein ON rehta hai—validation aur testing mein model.eval() se OFF karna zaroori hai!',
    mistakeEn: 'Judging model success solely by 99.8% training accuracy without ever checking a held-out validation set.',
    mistakeHi: 'Sirf 99.8% training accuracy dekh kar khush ho jana aur validation set check hi na karna.',
    proHabitEn: 'Always plot train vs validation loss together, and combine Early Stopping + Weight Decay + Dropout as your safety net.',
    proHabitHi: 'Hamesha train aur validation loss saath plot karein, aur Early Stopping + Weight Decay + Dropout ka safety net rakhein.',
    jobUseEn: 'Regularization ensures a medical or fintech model performs reliably on tomorrow’s new patients and customers, not just last year’s archive.',
    jobUseHi: 'Regularization ensure karta hai ki hospital ya bank ka model naye patients aur customers par bhi bharosemand chale.',
    mcq1Question: 'What is the clearest warning sign of overfitting on a training curve?',
    mcq1Correct: 'Training loss keeps decreasing while validation loss starts increasing',
    mcq1Wrongs: [
      'Both training loss and validation loss decrease steadily together',
      'Training finishes in under 5 seconds',
      'The learning rate is printed on screen',
    ],
    mcq1Explain: 'Diverging train (down) and validation (up) losses mean the network is memorizing training noise.',
    mcq2Question: 'How does Dropout help prevent overfitting?',
    mcq2Correct: 'By randomly turning off a fraction of neurons during each training step so the network learns redundant, robust features',
    mcq2Wrongs: [
      'By dropping 50% of the test dataset',
      'By deleting the output layer',
      'By doubling the learning rate every epoch',
    ],
    mcq2Explain: 'Dropout prevents co-adaptation of neurons, acting like training an ensemble of many smaller sub-networks.',
    realWorldScenario:
      'Your customer churn neural network achieves 98% accuracy on training data but only 64% on last month’s unseen customers.',
    interviewQ1: 'Why must Dropout be turned off during inference (model.eval())?',
    interviewA1:
      'During inference we want deterministic, maximum-capacity predictions using all trained neurons. Frameworks also scale activations during training (inverted dropout) so expected output magnitudes match seamlessly at test time.',
    interviewQ2: 'If a model has both high training error AND high validation error, is that overfitting or underfitting?',
    interviewA2:
      'That is underfitting (high bias). Adding more regularization would make it worse—instead you should increase model capacity, train longer, reduce regularization, or improve input features.',
  },
  // ============================================================================
  // MODULE 27: Practical Deep Learning (IDs 287–296)
  // ============================================================================
  {
    id: 287,
    modNum: 27,
    modTitle: 'Practical Deep Learning',
    topicNumInMod: 1,
    title: 'Introduction to TensorFlow and Keras',
    subtitle: 'GOOGLE’S HIGH-LEVEL BUILDING BLOCKS FOR FAST NEURAL NETWORKS',
    coreEn:
      'TensorFlow is an end-to-end open-source Deep Learning platform built by Google, and Keras is its friendly high-level API that lets you assemble, compile, and train neural networks in just a few clean lines of Python.',
    coreHi:
      'TensorFlow Google ka powerful Deep Learning platform hai, aur Keras uska aasaan high-level API hai jiski madad se aap sirf kuch lines Python likhkar neural networks bana aur train kar sakte hain.',
    analogyTitle: 'LEGO Bricks vs Molding Plastic From Scratch',
    analogyEn:
      'Writing neural network math in raw NumPy is like melting and molding your own plastic bricks. Keras hands you pre-built LEGO blocks—Dense, Conv2D, Dropout—so you just snap layers together and press .fit()!',
    analogyHi:
      'Raw math likhna khud plastic pighla kar eent banane jaisa hai. Keras aapko bane-banaye LEGO blocks (Dense, Conv2D, Dropout) deta hai—bas layers jodo aur .fit() chala do!',
    steps: [
      {
        title: 'Define Layers (Sequential)',
        en: 'Stack layers like Input, Dense(64, relu), and output Dense inside keras.Sequential().',
        hi: 'keras.Sequential() ke andar Input, Dense(64, relu) aur output layer ko line se jodein.',
        tone: 'sky',
      },
      {
        title: 'Compile the Model',
        en: 'Attach your optimizer (adam), loss function, and human-readable metrics (accuracy).',
        hi: 'model.compile() mein optimizer (adam), loss function aur accuracy metric set karein.',
        tone: 'amber',
      },
      {
        title: 'Train with model.fit()',
        en: 'Pass X_train, y_train, epochs, and validation_split to run training automatically.',
        hi: 'model.fit() mein training data, epochs aur validation_split dekar training chalayein.',
        tone: 'lavender',
      },
      {
        title: 'Evaluate & Predict',
        en: 'Call model.evaluate() on test data and model.predict() on new unseen rows.',
        hi: 'Test data par model.evaluate() aur naye data par model.predict() run karein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / KERAS — 3-STEP MODEL CREATION',
    code: `from tensorflow import keras

model = keras.Sequential([
    keras.layers.Input(shape=(10,)),
    keras.layers.Dense(32, activation="relu"),
    keras.layers.Dense(1, activation="sigmoid"),
])
model.compile(optimizer="adam", loss="binary_crossentropy", metrics=["accuracy"])
print("Keras model ready! Total layers:", len(model.layers))`,
    codeOutput: 'Keras model ready! Total layers: 2',
    codeCaptionEn: 'In under 10 lines, Keras builds the full forward pass, backpropagation, and Adam training engine.',
    codeCaptionHi: '10 lines se bhi kam mein Keras poora forward pass, backprop aur Adam optimizer ready kar deta hai.',
    tableTitle: 'Core Keras APIs Every Beginner Uses',
    tableHeaders: ['Keras Method', 'What It Does', 'When You Call It'],
    tableRows: [
      ['Sequential([...])', 'Stacks layers linearly from input to output', 'Simple feed-forward & CNN models'],
      ['model.summary()', 'Prints layer shapes and parameter counts', 'Before training to verify shapes'],
      ['model.compile()', 'Configures optimizer, loss, and metrics', 'Once right before training'],
      ['model.fit()', 'Runs mini-batch training & validation loop', 'During training'],
    ],
    tableNoteEn: 'Always run model.summary() before calling .fit() to catch shape mismatches early.',
    tableNoteHi: '.fit() chalane se pehle hamesha model.summary() dekhein taaki shape ki galti turant pakdi jaye.',
    mistakeEn: 'Forgetting to specify the right input shape on the first layer or mismatched loss for binary vs multi-class labels.',
    mistakeHi: 'Pehli layer mein sahi input shape na dena ya binary/multi-class ke hisaab se galat loss laga dena.',
    proHabitEn: 'Use keras.layers.Input(shape=...) explicitly, inspect model.summary(), and add EarlyStopping callbacks to .fit().',
    proHabitHi: 'Explicit Input(shape=...) layer lagayein, model.summary() check karein, aur .fit() mein EarlyStopping callback jodein.',
    jobUseEn: 'Widely used for rapid prototyping, mobile/edge deployment via TensorFlow Lite (TFLite), and enterprise serving.',
    jobUseHi: 'Tez prototyping, mobile apps (TFLite) aur enterprise production deployment mein TensorFlow/Keras khoob use hota hai.',
    mcq1Question: 'What is the main advantage of using Keras on top of TensorFlow?',
    mcq1Correct: 'It provides a clean, high-level API to build and train neural networks rapidly with minimal boilerplate',
    mcq1Wrongs: [
      'It removes the need for training data',
      'It only runs inside Excel spreadsheets',
      'It disables GPU acceleration permanently',
    ],
    mcq1Explain: 'Keras abstracts away repetitive boilerplate while still running on TensorFlow’s optimized GPU engine.',
    mcq2Question: 'Which Keras method configures the optimizer, loss function, and evaluation metrics before training?',
    mcq2Correct: 'model.compile()',
    mcq2Wrongs: [
      'model.predict()',
      'model.save()',
      'model.shuffle()',
    ],
    mcq2Explain: 'model.compile() binds the optimizer, loss, and metrics before model.fit() begins training.',
    realWorldScenario:
      'Your product manager asks for a quick working deep learning prototype by Friday to classify 20,000 customer support tickets.',
    interviewQ1: 'What is the difference between the Keras Sequential API and the Functional API?',
    interviewA1:
      'Sequential is for simple single-input, single-output stacks of layers. The Functional API lets you build complex graphs with multiple inputs (e.g., text + tabular features), multiple outputs, or skip connections like ResNet.',
    interviewQ2: 'Why is TensorFlow Lite (TFLite) important in production?',
    interviewA2:
      'TFLite compresses and optimizes trained TensorFlow/Keras models (via quantization) so they run fast with low battery usage directly on Android, iOS, and IoT edge devices without internet.',
  },
  {
    id: 288,
    modNum: 27,
    modTitle: 'Practical Deep Learning',
    topicNumInMod: 2,
    title: 'Introduction to PyTorch',
    subtitle: 'THE PYTHONIC RESEARCH & GENAI STANDARD FOR FLEXIBLE DEEP LEARNING',
    coreEn:
      'PyTorch is Meta’s open-source Deep Learning framework loved by AI researchers and GenAI engineers because it feels like native Python/NumPy, runs computations dynamically (eager mode), and gives full control over every training step.',
    coreHi:
      'PyTorch Meta ka open-source Deep Learning framework hai jo AI researchers aur GenAI engineers ka favourite hai. Ye bilkul normal Python/NumPy jaisa feel hota hai aur har training step par poora control deta hai.',
    analogyTitle: 'Manual Stick-Shift Sports Car vs Automatic Cruise',
    analogyEn:
      'If Keras .fit() is cruise control, PyTorch is a responsive manual sports car—you can inspect any tensor with print() mid-run, tweak any gradient, and customize anything for cutting-edge LLMs.',
    analogyHi:
      'Agar Keras .fit() automatic cruise control hai, toh PyTorch ek manual sports car hai—aap beech mein kahin bhi print() karke tensor check kar sakte hain aur custom LLM architectures aasaani se bana sakte hain.',
    steps: [
      {
        title: 'Create Tensors on CPU/GPU',
        en: 'Store data in torch.Tensor objects and move them to GPU with .to(device).',
        hi: 'Data ko torch.Tensor mein rakhein aur .to(device) se GPU par bhejein.',
        tone: 'sky',
      },
      {
        title: 'Subclass nn.Module',
        en: 'Define layers in __init__() and write the exact forward pass logic in forward().',
        hi: '__init__() mein layers banayein aur forward() function mein data ka flow likhein.',
        tone: 'amber',
      },
      {
        title: 'Write Explicit Training Loop',
        en: 'Run zero_grad() → output = model(x) → loss.backward() → optimizer.step().',
        hi: 'Explicit loop chalayein: zero_grad() → output = model(x) → loss.backward() → optimizer.step().',
        tone: 'lavender',
      },
      {
        title: 'Switch to Eval Mode for Testing',
        en: 'Use model.eval() and with torch.no_grad(): for fast, accurate inference.',
        hi: 'Testing ke liye model.eval() aur torch.no_grad() lagayein taaki inference fast aur accurate ho.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / PYTORCH — MINIMAL NN.MODULE & FORWARD PASS',
    code: `import torch
import torch.nn as nn

class SimpleNet(nn.Module):
    def __init__(self):
        super().__init__()
        self.net = nn.Sequential(nn.Linear(4, 8), nn.ReLU(), nn.Linear(8, 1))
    def forward(self, x):
        return self.net(x)

model = SimpleNet()
sample_x = torch.tensor([[1.0, 2.0, 0.5, -1.0]])
print("Output shape:", tuple(model(sample_x).shape))`,
    codeOutput: 'Output shape: (1, 1)',
    codeCaptionEn: 'PyTorch tensors work like NumPy arrays that automatically track gradients and run on GPUs.',
    codeCaptionHi: 'PyTorch tensors NumPy arrays jaise hi kaam karte hain, bas ye GPU par chalte hain aur gradients khud track karte hain.',
    tableTitle: 'PyTorch vs TensorFlow/Keras at a Glance',
    tableHeaders: ['Feature', 'PyTorch', 'TensorFlow / Keras'],
    tableRows: [
      ['Coding Style', 'Pythonic, explicit training loops', 'Declarative .compile() & .fit()'],
      ['Debugging', 'Easy standard Python print/pdb', 'Great with Keras eager mode'],
      ['Ecosystem Strength', 'Hugging Face LLMs, AI research, GenAI', 'TFLite mobile, TF Serving, enterprise'],
      ['Autograd Engine', 'Dynamic computation graph', 'GradientTape / Static Graph'],
    ],
    tableNoteEn: 'Over 80% of modern open-source LLMs and Hugging Face models are built in PyTorch—learning it is a huge career boost.',
    tableNoteHi: '80% se zyada modern LLMs aur Hugging Face models PyTorch mein bane hain—ise seekhna career ke liye super useful hai.',
    mistakeEn: 'Leaving the model on CPU while the input tensor is on CUDA GPU, causing a device-mismatch RuntimeError.',
    mistakeHi: 'Model ko CPU par chhod dena aur data ko GPU par bhej dena, jisse turant device-mismatch error aa jata hai.',
    proHabitEn: 'Define device = "cuda" if torch.cuda.is_available() else "cpu" once at the top and move both model and batches with .to(device).',
    proHabitHi: 'Code ke top par ek hi baar device set karein aur model aur data batches dono ko .to(device) par rakhein.',
    jobUseEn: 'PyTorch is the #1 skill requested in GenAI, Computer Vision, and Machine Learning Engineer job descriptions.',
    jobUseHi: 'GenAI, Computer Vision aur ML Engineer jobs mein PyTorch sabse zyada maangi jaane wali skill hai.',
    mcq1Question: 'What is a PyTorch Tensor?',
    mcq1Correct: 'A multi-dimensional numeric array (like NumPy) that supports GPU acceleration and automatic differentiation',
    mcq1Wrongs: [
      'A special type of SQL database table',
      'A Python dictionary for storing HTML tags',
      'A web browser plugin',
    ],
    mcq1Explain: 'Tensors are the core data structure in PyTorch, extending NumPy arrays with GPU execution and autograd.',
    mcq2Question: 'Why do we wrap validation or inference code inside `with torch.no_grad():`?',
    mcq2Correct: 'To disable gradient tracking, saving GPU memory and speeding up inference',
    mcq2Wrongs: [
      'To randomly reset all model weights to zero',
      'To force the model to train faster',
      'To convert images into text',
    ],
    mcq2Explain: 'Skipping gradient graph storage during inference drastically reduces memory usage and latency.',
    realWorldScenario:
      'You want to fine-tune an open-source Llama or BERT model from Hugging Face for your company’s customer support chat.',
    interviewQ1: 'What are the exact 5 lines inside a standard PyTorch training step?',
    interviewA1:
      '1) optimizer.zero_grad() to clear old gradients; 2) preds = model(x) for forward pass; 3) loss = criterion(preds, y); 4) loss.backward() for backprop; 5) optimizer.step() to update weights.',
    interviewQ2: 'What is the difference between model.train() and model.eval() in PyTorch?',
    interviewA2:
      'model.train() enables Dropout and updates BatchNorm running statistics using current batch stats. model.eval() freezes Dropout (uses all neurons) and uses saved BatchNorm running mean/variance for consistent test predictions.',
  },
  {
    id: 289,
    modNum: 27,
    modTitle: 'Practical Deep Learning',
    topicNumInMod: 3,
    title: 'Preparing Data for Neural Networks',
    subtitle: 'CLEANING, SCALING, ENCODING, AND SPLITTING BEFORE TRAINING',
    coreEn:
      'Neural networks only understand clean, uniformly scaled numbers—so before training you must handle missing values, encode categories, scale/normalize features (e.g., 0–1 or z-score), and split cleanly into Train, Validation, and Test sets.',
    coreHi:
      'Neural networks sirf saaf aur ek jaise scale wale numbers samajhte hain—isliye training se pehle missing values bharna, categories encode karna, features scale (0–1 ya z-score) karna aur Train/Val/Test split banana zaroori hai.',
    analogyTitle: 'Washing, Peeling, and Chopping Before Cooking',
    analogyEn:
      'Even the world’s best chef cannot make a great soup if you throw muddy, unpeeled potatoes straight into the pot. Clean, evenly chopped ingredients cook smoothly—just like scaled tensors train smoothly!',
    analogyHi:
      'Duniya ka best chef bhi mitti lage aur bina chhile aloo se achha khana nahi bana sakta. Saaf aur barabar kati sabziyan jaldi aur sahi pakti hain—bilkul scaled tensors ki tarah!',
    steps: [
      {
        title: 'Split First (Train / Val / Test)',
        en: 'Always divide data into Train (70%), Validation (15%), and Test (15%) BEFORE scaling to prevent leakage.',
        hi: 'Data leakage rokne ke liye scaling se PEHLE data ko Train (70%), Val (15%) aur Test (15%) mein baantein.',
        tone: 'sky',
      },
      {
        title: 'Clean & Encode Categories',
        en: 'Impute missing values and convert text labels ("Delhi", "Mumbai") into numbers or one-hot vectors.',
        hi: 'Missing values fill karein aur text labels ("Delhi", "Mumbai") ko numbers ya one-hot vectors mein badlein.',
        tone: 'amber',
      },
      {
        title: 'Normalize / Scale Numeric Features',
        en: 'Fit StandardScaler on Train only (mean=0, std=1), or divide image pixels by 255.0 to get [0, 1].',
        hi: 'Sirf Train data par scaler fit karein (mean=0, std=1), ya image pixels ko 255.0 se divide karke [0, 1] mein laayein.',
        tone: 'lavender',
      },
      {
        title: 'Wrap in Tensors & DataLoaders',
        en: 'Convert arrays to float32 tensors and load in shuffled mini-batches via DataLoader or tf.data.',
        hi: 'Arrays ko float32 tensors banayein aur DataLoader / tf.data se shuffled mini-batches mein feed karein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — PREVENTING LEAKAGE WHILE SCALING FOR A NEURAL NET',
    code: `train_salaries = [30000, 50000, 70000]
val_salaries   = [60000]

# Fit mean & std ONLY on training data!
mean = sum(train_salaries) / len(train_salaries)
std = (sum((x - mean)**2 for x in train_salaries) / len(train_salaries)) ** 0.5

train_scaled = [round((x - mean)/std, 2) for x in train_salaries]
val_scaled   = [round((x - mean)/std, 2) for x in val_salaries]
print("Train scaled:", train_scaled, "| Val scaled:", val_scaled)`,
    codeOutput: 'Train scaled: [-1.22, 0.0, 1.22] | Val scaled: [0.61]',
    codeCaptionEn: 'Scaling brings giant rupee salaries (50,000) into a clean [-2, +2] range that neural net weights love.',
    codeCaptionHi: 'Scaling bade numbers (50,000) ko clean [-2, +2] range mein le aata hai jisse gradients smoothly chalte hain.',
    tableTitle: 'How Different Data Types Are Prepared for Deep Learning',
    tableHeaders: ['Data Type', 'Raw Format', 'Neural-Net-Ready Format'],
    tableRows: [
      ['Tabular Numbers', 'Age=28, Salary=85000', 'Standardized float32: [-0.4, +1.1]'],
      ['Categories', '"Red", "Blue", "Green"', 'One-hot [1,0,0] or Embedding IDs'],
      ['Images', 'Pixels 0 to 255 (RGB)', 'Resized tensor scaled to [0.0, 1.0]'],
      ['Text', '"Great movie!"', 'Integer Token IDs [42, 918, 5]'],
    ],
    tableNoteEn: 'If one column ranges from 0–1 and another from 0–1,000,000, gradients become wildly lopsided and training crawls.',
    tableNoteHi: 'Agar ek column 0–1 hai aur doosra 0–10,00,000, toh gradients tedhe ho jaate hain aur training atak jati hai.',
    mistakeEn: 'Fitting StandardScaler on the entire dataset before train-test split, leaking future test statistics into training.',
    mistakeHi: 'Train-test split se pehle poore dataset par scaler fit kar dena, jisse test data ki jaankari training mein leak ho jati hai.',
    proHabitEn: 'Always split first, call scaler.fit_transform(X_train), and only scaler.transform(X_val / X_test).',
    proHabitHi: 'Hamesha pehle split karein, phir X_train par fit_transform aur X_val/X_test par sirf transform chalayein.',
    jobUseEn: 'Over 60% of real-world Deep Learning engineering time goes into building clean, leak-free data pipelines.',
    jobUseHi: 'Real-world Deep Learning projects ka 60% se zyada time clean aur leak-free data pipeline banane mein lagta hai.',
    mcq1Question: 'Why must you normalize or standardize numeric inputs before feeding them into a neural network?',
    mcq1Correct: 'So all features share a similar scale, allowing gradient descent to converge smoothly and quickly',
    mcq1Wrongs: [
      'Because Python cannot multiply numbers larger than 10',
      'To increase the number of missing values',
      'To hide the true labels from the loss function',
    ],
    mcq1Explain: 'Uniform feature scales keep loss contours smooth and prevent large-magnitude columns from dominating gradients.',
    mcq2Question: 'Which step MUST happen BEFORE computing mean and standard deviation for scaling?',
    mcq2Correct: 'Splitting the dataset into Train, Validation, and Test sets',
    mcq2Wrongs: [
      'Deploying the model to production',
      'Deleting the validation set',
      'Running 100 epochs of training',
    ],
    mcq2Explain: 'Splitting first guarantees validation/test statistics never leak into training preprocessing.',
    realWorldScenario:
      'Your house-price neural network receives `bedrooms` (1–5) and `sqft` (500–8,000) raw, and its loss refuses to decrease smoothly.',
    interviewQ1: 'What happens if you pass float64 NumPy arrays into a default PyTorch model expecting float32?',
    interviewA1:
      'PyTorch raises a RuntimeError for dtype mismatch (Double vs Float). Explicitly casting input tensors to torch.float32 (and class targets to torch.long for CrossEntropyLoss) prevents this common bug.',
    interviewQ2: 'Why do we divide image pixel values by 255.0 before feeding them to a CNN?',
    interviewA2:
      'Raw 8-bit pixel values range from 0 to 255. Dividing by 255.0 maps them to [0.0, 1.0], keeping initial dot products small so activations stay in their active, non-saturated gradient zones.',
  },
  {
    id: 290,
    modNum: 27,
    modTitle: 'Practical Deep Learning',
    topicNumInMod: 4,
    title: 'Building a Basic Neural Network',
    subtitle: 'ASSEMBLING YOUR FIRST END-TO-END MLP CLASSIFIER FROM SCRATCH',
    coreEn:
      'Building a basic Multi-Layer Perceptron (MLP) means connecting an Input layer, 1–2 Dense hidden layers with ReLU activations (plus optional Dropout), and a task-specific Output layer—then verifying tensor shapes with a dummy pass.',
    coreHi:
      'Ek basic Neural Network (MLP) banane ka matlab hai Input layer, 1–2 ReLU hidden layers (aur optional Dropout), aur task ke hisaab se Output layer jodna—aur phir ek dummy input bhej kar shapes check karna.',
    analogyTitle: 'Wiring a Simple 3-Switch Flashlight',
    analogyEn:
      'Before putting batteries into a complex robot, you wire a simple battery → switch → bulb circuit and verify the light turns on. Building a small 2-hidden-layer MLP is your "Hello World" circuit in Deep Learning.',
    analogyHi:
      'Bada robot banane se pehle aap ek simple battery → switch → bulb circuit banakar check karte hain ki light jali ya nahi. 2 hidden layers wala chhota MLP Deep Learning ka wahi "Hello World" circuit hai.',
    steps: [
      {
        title: 'Match Input & Output Dimensions',
        en: 'Set input_dim = number of features and output_dim = 1 (binary/regression) or K (multi-class).',
        hi: 'input_dim ko features ki ginti ke barabar aur output_dim ko apne task (1 ya K classes) ke barabar rakhein.',
        tone: 'sky',
      },
      {
        title: 'Add Dense + ReLU Hidden Blocks',
        en: 'Use a clean funnel pattern such as 64 → 32 neurons with ReLU activations.',
        hi: '64 → 32 neurons jaisa clean funnel pattern banayein aur beech mein ReLU lagayein.',
        tone: 'amber',
      },
      {
        title: 'Pick Loss & Optimizer',
        en: 'Attach BCEWithLogitsLoss / CrossEntropyLoss and Adam(lr=0.001).',
        hi: 'Task ke hisaab se loss function aur Adam(lr=0.001) optimizer jodein.',
        tone: 'lavender',
      },
      {
        title: 'Run a Smoke-Test Dummy Batch',
        en: 'Pass one fake batch of zeros through the network to confirm output shape before full training.',
        hi: 'Full training se pehle ek dummy batch pass karke verify karein ki output shape bilkul sahi hai.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / PYTORCH — COMPLETE BASIC MLP SMOKE TEST',
    code: `import torch, torch.nn as nn

model = nn.Sequential(
    nn.Linear(6, 32),   # 6 input features -> 32 hidden neurons
    nn.ReLU(),
    nn.Dropout(0.2),
    nn.Linear(32, 16),
    nn.ReLU(),
    nn.Linear(16, 3)    # 3 output classes
)
dummy_batch = torch.randn(4, 6)  # 4 samples, 6 features each
logits = model(dummy_batch)
print("Input shape:", tuple(dummy_batch.shape), "-> Output shape:", tuple(logits.shape))`,
    codeOutput: 'Input shape: (4, 6) -> Output shape: (4, 3)',
    codeCaptionEn: '4 samples entered with 6 features each, and 4 predictions exited with 3 class scores each—wiring verified!',
    codeCaptionHi: '4 samples (6 features har ek) andar gaye aur 4 predictions (3 class scores har ek) bahar aaye—wiring perfect hai!',
    tableTitle: 'Output Layer Cheat Sheet for Basic Neural Networks',
    tableHeaders: ['Problem Type', 'Output Neurons', 'Final Activation', 'Loss Function'],
    tableRows: [
      ['Predict Price (Regression)', '1', 'None (Linear)', 'MSE / Huber'],
      ['Spam vs Not Spam (Binary)', '1', 'Sigmoid (or Logits)', 'Binary Cross-Entropy'],
      ['3+ Categories (Multi-class)', 'K (num classes)', 'Softmax (or Logits)', 'Cross-Entropy'],
    ],
    tableNoteEn: 'In PyTorch, nn.CrossEntropyLoss and nn.BCEWithLogitsLoss apply Softmax/Sigmoid internally for better numerical stability.',
    tableNoteHi: 'PyTorch mein CrossEntropyLoss aur BCEWithLogitsLoss andar khud Softmax/Sigmoid laga dete hain, isliye alag se lagane ki zaroorat nahi.',
    mistakeEn: 'Applying Softmax at the end of a PyTorch model AND then passing it to nn.CrossEntropyLoss (double Softmax!).',
    mistakeHi: 'PyTorch model ke end mein Softmax lagana aur phir nn.CrossEntropyLoss bhi lagana (double Softmax bug!).',
    proHabitEn: 'Always run a 1-batch dummy forward pass and verify you can overfit a tiny 10-row sample before launching a long run.',
    proHabitHi: 'Lambhi training se pehle 1-batch dummy pass chalayein aur check karein ki model 10 rows par loss near-zero la pa raha hai.',
    jobUseEn: 'MLPs are used as classification heads on top of embeddings, tabular neural models, and inside every Transformer block.',
    jobUseHi: 'MLPs har Transformer block ke andar, embeddings ke upar classification heads mein aur tabular models mein use hote hain.',
    mcq1Question: 'Why is running a dummy batch through a newly built neural network a great pro habit?',
    mcq1Correct: 'It immediately verifies layer dimensions and catches shape mismatch bugs before training begins',
    mcq1Wrongs: [
      'It trains the model to 100% accuracy in 1 millisecond',
      'It permanently deletes unused columns from CSV files',
      'It automatically writes your project documentation',
    ],
    mcq1Explain: 'A 1-second smoke test catches shape errors instantly instead of failing after minutes of data loading.',
    mcq2Question: 'In PyTorch, what should the final layer output when using `nn.CrossEntropyLoss()` for 5 classes?',
    mcq2Correct: '5 raw unnormalized scores (logits) with NO Softmax layer attached',
    mcq2Wrongs: [
      '5 values passed through Softmax twice',
      '1 single Sigmoid number',
      '500 ReLU values',
    ],
    mcq2Explain: 'PyTorch’s nn.CrossEntropyLoss expects raw logits and computes LogSoftmax internally for numerical stability.',
    realWorldScenario:
      'You built a 3-class customer tier classifier in PyTorch, but accuracy stays stuck at 33% because Softmax was accidentally applied before nn.CrossEntropyLoss.',
    interviewQ1: 'What does it mean to "overfit a single batch" as a sanity check?',
    interviewA1:
      'Before training on 100,000 rows, try training your network on just 16 samples. If the network cannot drive the loss close to zero on 16 samples, there is a bug in your architecture, loss function, labels, or optimizer loop.',
    interviewQ2: 'How do you choose the number of hidden neurons in a basic MLP?',
    interviewA2:
      'Start with a simple funnel (e.g., 64 → 32 or 128 → 64), check if it underfits or overfits on validation data, and adjust capacity + regularization empirically rather than guessing huge layer widths blindly.',
  },
  {
    id: 291,
    modNum: 27,
    modTitle: 'Practical Deep Learning',
    topicNumInMod: 5,
    title: 'Training and Validating a Model',
    subtitle: 'SEPARATING LEARNING FROM HONEST PROGRESS CHECKS',
    coreEn:
      'During training, the model updates its weights using ONLY the Training set, while after every epoch it is scored—with weights frozen—on a separate Validation set to measure true generalization on unseen examples.',
    coreHi:
      'Training ke dauran model sirf Training set se apne weights update karta hai, aur har epoch ke baad frozen weights ke saath alag Validation set par test hota hai taaki pata chale ki naye data par kitna sahi chal raha hai.',
    analogyTitle: 'Daily Homework vs Weekly Practice Quiz vs Final Board Exam',
    analogyEn:
      'Homework (Train set) is where you learn and fix mistakes. Weekly quizzes (Validation set) show if your study method is actually working so you can tune your plan. The final board exam (Test set) is opened ONLY ONCE at the very end!',
    analogyHi:
      'Roz ka homework (Train set) seekhne ke liye hai. Hafte ka practice quiz (Validation set) batata hai ki taiyaari sahi chal rahi hai ya nahi. Aur final board exam (Test set) sabse aakhir mein SIRF EK BAAR diya jata hai!',
    steps: [
      {
        title: 'Run Training Epoch (train mode)',
        en: 'Enable model.train(), loop over training mini-batches, and update weights via backprop.',
        hi: 'model.train() on karein, training batches par loop chalayein aur backprop se weights update karein.',
        tone: 'sky',
      },
      {
        title: 'Freeze Model for Validation',
        en: 'Switch to model.eval() and torch.no_grad() so validation never alters weights.',
        hi: 'model.eval() aur torch.no_grad() lagayein taaki validation se weights bilkul na badlein.',
        tone: 'amber',
      },
      {
        title: 'Log Train & Val Metrics',
        en: 'Record train_loss, val_loss, and val_accuracy after every epoch and save the best checkpoint.',
        hi: 'Har epoch ke baad train_loss, val_loss aur val_accuracy note karein aur best model save karein.',
        tone: 'lavender',
      },
      {
        title: 'Final Honest Test Evaluation',
        en: 'After all tuning is finished, evaluate the single best checkpoint ONCE on the untouched Test set.',
        hi: 'Saari tuning khatam hone ke baad, best model ko untouched Test set par SIRF EK BAAR evaluate karein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — CLEAN TRAIN & VALIDATION EPOCH LOOP',
    code: `best_val_loss = float("inf")
history = [(0.72, 0.75), (0.48, 0.52), (0.31, 0.41), (0.20, 0.45)]

for epoch, (tr_loss, val_loss) in enumerate(history, 1):
    tag = ""
    if val_loss < best_val_loss:
        best_val_loss = val_loss
        tag = " <-- Saved Best Checkpoint!"
    print(f"Epoch {epoch} | Train Loss: {tr_loss:.2f} | Val Loss: {val_loss:.2f}{tag}")`,
    codeOutput: `Epoch 1 | Train Loss: 0.72 | Val Loss: 0.75 <-- Saved Best Checkpoint!
Epoch 2 | Train Loss: 0.48 | Val Loss: 0.52 <-- Saved Best Checkpoint!
Epoch 3 | Train Loss: 0.31 | Val Loss: 0.41 <-- Saved Best Checkpoint!
Epoch 4 | Train Loss: 0.20 | Val Loss: 0.45`,
    codeCaptionEn: 'We save the Epoch 3 model (lowest validation loss = 0.41) rather than Epoch 4 where validation got worse.',
    codeCaptionHi: 'Hum Epoch 3 ka model save karte hain (sabse kam val_loss = 0.41), na ki Epoch 4 ka jahan val_loss badh gaya.',
    tableTitle: 'The 3-Way Data Split and Each Set’s Strict Role',
    tableHeaders: ['Dataset Split', 'Typical Share', 'Updates Weights?', 'Used for Tuning Hyperparameters?'],
    tableRows: [
      ['Training Set', '70% – 80%', 'Yes (backprop)', 'No'],
      ['Validation Set', '10% – 15%', 'No (frozen)', 'Yes (pick LR, layers, best epoch)'],
      ['Test Set', '10% – 15%', 'No (frozen)', 'No! Touch ONCE for final report'],
    ],
    tableNoteEn: 'If you tune hyperparameters repeatedly on the Test set, it stops being an honest unseen exam!',
    tableNoteHi: 'Agar aap Test set dekh kar baar-baar model tune karte hain, toh wo honest final exam nahi rehta!',
    mistakeEn: 'Accidentally running loss.backward() and optimizer.step() during the validation loop, secretly training on validation data.',
    mistakeHi: 'Validation loop mein galti se backward() ya optimizer.step() chala dena, jisse model validation data par bhi train ho jaye.',
    proHabitEn: 'Always isolate validation inside a helper function decorated with @torch.no_grad() and model.eval().',
    proHabitHi: 'Validation ko hamesha alag helper function mein rakhein jisme model.eval() aur torch.no_grad() pakka laga ho.',
    jobUseEn: 'Strict train/val/test discipline is what separates trustworthy production AI models from demos that crash on live users.',
    jobUseHi: 'Strict train/val/test discipline hi bharosemand production AI aur fail hone wale demo ke beech ka farq hai.',
    mcq1Question: 'Why do we need a Validation set in addition to a Training set and a Test set?',
    mcq1Correct: 'To tune hyperparameters and pick the best epoch without contaminating the final untouched Test set',
    mcq1Wrongs: [
      'Because Python requires exactly 3 variables',
      'To make the training dataset 3 times smaller',
      'So we can train weights on all 3 sets simultaneously',
    ],
    mcq1Explain: 'Validation guides model selection while keeping the Test set completely unbiased for final evaluation.',
    mcq2Question: 'Which epoch’s weights should you keep when validation loss was 0.41 at Epoch 3 and 0.45 at Epoch 4?',
    mcq2Correct: 'Epoch 3 (the checkpoint with the lowest validation loss)',
    mcq2Wrongs: [
      'Epoch 4 because it is always the last epoch',
      'Epoch 0 with random weights',
      'Average of random numbers',
    ],
    mcq2Explain: 'Best-checkpoint saving keeps the model at its peak generalization point (Epoch 3).',
    realWorldScenario:
      'A teammate reports 96% test accuracy, but you discover they tried 40 model variations directly on the test set and picked the luckiest one.',
    interviewQ1: 'What is "validation set overfitting" and how do you avoid it?',
    interviewA1:
      'If you run hundreds of hyperparameter searches on a small validation set, you can accidentally pick settings that get lucky on that specific split. Holding out a truly untouched Test set (or using K-Fold cross-validation) catches this.',
    interviewQ2: 'For time-series or daily transaction data, why is a random train/val split dangerous?',
    interviewA2:
      'Random splitting lets future dates leak into the training set while predicting past dates. For temporal data, always use a chronological split (train on Jan–Sep, validate on Oct, test on Nov–Dec).',
  },
  {
    id: 292,
    modNum: 27,
    modTitle: 'Practical Deep Learning',
    topicNumInMod: 6,
    title: 'Monitoring Training Performance',
    subtitle: 'READING LOSS CURVES LIKE A DOCTOR READS AN ECG',
    coreEn:
      'Monitoring training performance means tracking training loss, validation loss, accuracy, and learning rate over epochs using plots or dashboards (TensorBoard / Weights & Biases) to instantly diagnose underfitting, overfitting, or unstable learning.',
    coreHi:
      'Training monitoring ka matlab hai har epoch par train loss, val loss aur accuracy ke graphs (TensorBoard / W&B) dekhna—taaki doctor ki tarah aap turant pehchan sakein ki model healthy hai, underfit hai ya overfit.',
    analogyTitle: 'Hospital ECG Heartbeat Monitor',
    analogyEn:
      'A doctor never waits until after surgery to check the patient’s pulse—they watch the live ECG screen every second. Loss and accuracy curves are your model’s live ECG!',
    analogyHi:
      'Doctor operation khatam hone ke baad pulse check nahi karta—wo har second live ECG screen dekhta hai. Loss aur accuracy curves aapke model ka wahi live ECG monitor hain!',
    steps: [
      {
        title: 'Log Metrics Every Epoch',
        en: 'Record train_loss, val_loss, and task metrics (F1, AUC, Accuracy) in a history dict or logger.',
        hi: 'Har epoch par train_loss, val_loss aur main metrics (F1, Accuracy) log karein.',
        tone: 'sky',
      },
      {
        title: 'Plot Train vs Val Curves Together',
        en: 'Never view one curve alone—the gap between train and val tells the true story.',
        hi: 'Sirf ek curve mat dekhein—train aur val ke beech ka gap asli kahani batata hai.',
        tone: 'amber',
      },
      {
        title: 'Diagnose the Curve Shape',
        en: 'Both high = Underfitting; Train low + Val rising = Overfitting; Spikes/NaN = LR too high.',
        hi: 'Dono high = Underfitting; Train neeche + Val upar = Overfitting; Spikes/NaN = LR bahut zyada.',
        tone: 'lavender',
      },
      {
        title: 'Take Targeted Action',
        en: 'Adjust LR, add regularization, or stop early based on what the curve reveals—not blind guessing.',
        hi: 'Andaza lagane ke bajaye curve dekh kar sahi action lein: LR badlein, dropout lagayein ya early stop karein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — AUTOMATED TRAINING CURVE DIAGNOSTIC',
    code: `def diagnose_run(train_loss, val_loss):
    if val_loss != val_loss:  # NaN check
        return "EXPLODING: Lower learning rate immediately!"
    if train_loss > 0.6 and val_loss > 0.6:
        return "UNDERFITTING: Train longer or increase model size."
    if val_loss - train_loss > 0.25:
        return "OVERFITTING: Add Dropout, Weight Decay, or more data."
    return "HEALTHY: Good generalization!"

print("Run A:", diagnose_run(0.12, 0.54))
print("Run B:", diagnose_run(0.18, 0.22))`,
    codeOutput: `Run A: OVERFITTING: Add Dropout, Weight Decay, or more data.
Run B: HEALTHY: Good generalization!`,
    codeCaptionEn: 'Comparing the gap between train and validation loss turns debugging into a systematic science.',
    codeCaptionHi: 'Train aur validation loss ka farq dekh kar aap bina tukke maare exact fix pakad sakte hain.',
    tableTitle: 'ECG Guide to Reading Deep Learning Training Curves',
    tableHeaders: ['Curve Pattern', 'Diagnosis', 'Recommended Fix'],
    tableRows: [
      ['Train & Val both drop together', 'Healthy learning', 'Keep going until val plateaus'],
      ['Both stay high & flat', 'Underfitting / LR too low', 'Increase LR, bigger model, more epochs'],
      ['Train drops, Val curves UP', 'Overfitting', 'Early stopping, Dropout, Augmentation'],
      ['Loss spikes wildly or hits NaN', 'Exploding gradients', 'Lower LR by 10x, add gradient clipping'],
    ],
    tableNoteEn: 'Tools like TensorBoard, MLflow, and Weights & Biases (W&B) let teams compare 50 experiments side by side.',
    tableNoteHi: 'TensorBoard, MLflow aur Weights & Biases (W&B) se teams 50 experiments ke graphs ek saath compare karti hain.',
    mistakeEn: 'Running 200 epochs overnight without logging anything and waking up with no idea when or why the model broke.',
    mistakeHi: 'Raat bhar 200 epochs bina logs ke chalana aur subah pata hi na chalna ki model kab aur kyun bigda.',
    proHabitEn: 'Log every experiment’s hyperparameters, loss curves, and best metric automatically using TensorBoard or W&B.',
    proHabitHi: 'Har experiment ke hyperparameters, loss curves aur best score ko TensorBoard ya W&B mein automatically log karein.',
    jobUseEn: 'Experiment tracking is mandatory in real AI teams so results are reproducible and GPU budgets are not wasted.',
    jobUseHi: 'Real AI teams mein experiment tracking zaroori hai taaki results reproducible rahein aur GPU ka paisa barbaad na ho.',
    mcq1Question: 'Both training loss and validation loss remain high and barely move after 15 epochs. What is the diagnosis?',
    mcq1Correct: 'Underfitting (or learning rate is far too small)',
    mcq1Wrongs: [
      'Severe overfitting',
      'Perfect 100% convergence',
      'Too much validation data',
    ],
    mcq1Explain: 'High error on BOTH training and validation means the model is not learning enough yet (underfitting).',
    mcq2Question: 'Which tool is commonly used to visualize live neural network loss curves and compare experiments?',
    mcq2Correct: 'TensorBoard or Weights & Biases (W&B)',
    mcq2Wrongs: [
      'Microsoft Paint',
      'Windows Notepad',
      'Calculator',
    ],
    mcq2Explain: 'TensorBoard, W&B, and MLflow are industry-standard experiment monitoring dashboards.',
    realWorldScenario:
      'Your team ran 12 different model configs this week, and nobody remembers which learning rate produced the best F1 score.',
    interviewQ1: 'What is gradient clipping and when do you turn it on?',
    interviewA1:
      'Gradient clipping caps the maximum norm of gradients before the optimizer step (e.g., max_norm=1.0). It prevents sudden giant loss spikes and NaNs, especially in RNNs and Transformers.',
    interviewQ2: 'Why might validation loss suddenly be slightly LOWER than training loss in early epochs?',
    interviewA2:
      'Because Dropout is active during training (making training harder) and turned off during validation, and because training loss is averaged across the whole epoch while validation is measured at the end after weights improved.',
  },
  {
    id: 293,
    modNum: 27,
    modTitle: 'Practical Deep Learning',
    topicNumInMod: 7,
    title: 'Saving and Loading a Neural Network',
    subtitle: 'CHECKPOINTING TRAINED WEIGHTS FOR REUSE AND DEPLOYMENT',
    coreEn:
      'Training a neural network can take hours or days, so saving the learned weights (checkpoints) to disk lets you resume training after a crash, share models with teammates, and load them instantly in production APIs.',
    coreHi:
      'Neural network train karne mein ghanton lag sakte hain, isliye seekhe hue weights (checkpoints) ko disk par save karna zaroori hai—taaki crash ke baad resume kar sakein aur production API mein turant load kar sakein.',
    analogyTitle: 'Saving Your Video Game Progress Before the Boss Fight',
    analogyEn:
      'You would never play a 10-hour video game without saving checkpoints—one power cut would send you back to Level 1! Saving model weights (state_dict / .keras) is your permanent save-game file.',
    analogyHi:
      'Aap 10 ghante ka video game bina save kiye nahi khelte—light chali gayi toh wapas Level 1 par aa jayenge! Model weights (.pt / .keras) save karna aapki permanent save-game file hai.',
    steps: [
      {
        title: 'Save Best Weights (state_dict)',
        en: 'In PyTorch save model.state_dict() to a .pt/.safetensors file; in Keras call model.save("model.keras").',
        hi: 'PyTorch mein model.state_dict() (.pt file) save karein; Keras mein model.save("model.keras") call karein.',
        tone: 'sky',
      },
      {
        title: 'Bundle Metadata & Preprocessors',
        en: 'Also save class names, scaler parameters, and tokenizer config alongside the weights.',
        hi: 'Weights ke saath class names, scaler aur tokenizer config bhi zaroor save karein.',
        tone: 'amber',
      },
      {
        title: 'Reload Architecture & Weights',
        en: 'Instantiate the same model class and call model.load_state_dict(torch.load(..., weights_only=True)).',
        hi: 'Wahi model class banayein aur load_state_dict() se saved weights load karein.',
        tone: 'lavender',
      },
      {
        title: 'Call model.eval() & Verify',
        en: 'Switch to eval mode and run a quick check prediction to prove the loaded model matches.',
        hi: 'model.eval() on karein aur ek test prediction chalakar pakka karein ki loaded model exact same output de raha hai.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / PYTORCH — SAFE CHECKPOINT SAVE & LOAD',
    code: `import torch, torch.nn as nn

# 1. Save learned weights + metadata
model = nn.Linear(4, 2)
checkpoint = {
    "weights": model.state_dict(),
    "classes": ["Normal", "Fraud"],
    "val_acc": 0.94
}
torch.save(checkpoint, "fraud_v1.pt")

# 2. Load later in production API
loaded = torch.load("fraud_v1.pt", weights_only=True)
model.load_state_dict(loaded["weights"])
model.eval()
print("Loaded classes:", loaded["classes"], "| Val Acc:", loaded["val_acc"])`,
    codeOutput: "Loaded classes: ['Normal', 'Fraud'] | Val Acc: 0.94",
    codeCaptionEn: 'Saving state_dict + class names together ensures your production API never mixes up label 0 and label 1.',
    codeCaptionHi: 'Weights ke saath class names save karne se production API mein kabhi label 0 aur 1 ki gadbadi nahi hoti.',
    tableTitle: 'Standard Model Saving Formats in Industry',
    tableHeaders: ['Format', 'Framework', 'Best Used For'],
    tableRows: [
      ['.pt / .pth (state_dict)', 'PyTorch', 'Standard training checkpoints & PyTorch serving'],
      ['.safetensors', 'Hugging Face / PyTorch', 'Fast, secure weight sharing (no pickle risk)'],
      ['.keras / SavedModel', 'TensorFlow / Keras', 'Full Keras architecture + weights bundle'],
      ['.onnx', 'Cross-framework', 'High-speed cross-platform production inference'],
    ],
    tableNoteEn: 'Prefer saving `state_dict()` over pickling the whole Python model object—it is cleaner, safer, and breaks less across code refactors.',
    tableNoteHi: 'Poora Python object save karne ki jagah hamesha `state_dict()` save karein—ye zyada safe aur portable hota hai.',
    mistakeEn: 'Saving the model weights but forgetting to save the StandardScaler or label-to-index mapping used during training.',
    mistakeHi: 'Model weights save kar lena par training mein use hua StandardScaler aur label mapping save karna bhool jana.',
    proHabitEn: 'Version every checkpoint (e.g., model_v1.2_val94.pt), use safetensors when sharing, and always test reload + inference.',
    proHabitHi: 'Har checkpoint ka version naam rakhein, sharing mein safetensors use karein, aur reload karke inference zaroor test karein.',
    jobUseEn: 'MLOps pipelines automatically register versioned checkpoints so teams can roll back to yesterday’s model in seconds if needed.',
    jobUseHi: 'MLOps pipelines mein versioned checkpoints save hote hain taaki koi bug aaye toh 10 second mein purane model par rollback ho sake.',
    mcq1Question: 'In PyTorch, what is the recommended way to save a trained model for later reuse?',
    mcq1Correct: 'Save `model.state_dict()` (the learned weights dictionary) and load it into a freshly instantiated model',
    mcq1Wrongs: [
      'Copy-paste the weights manually into a Word document',
      'Take a screenshot of the terminal output',
      'Re-train the model every time a user opens the website',
    ],
    mcq1Explain: 'Saving state_dict() avoids brittle Python class-path dependencies and is the official PyTorch best practice.',
    mcq2Question: 'Why is the `.safetensors` format rapidly replacing legacy `.pt`/pickle files for sharing open-source LLMs?',
    mcq2Correct: 'It loads faster and prevents arbitrary malicious code execution that Python pickle files can hide',
    mcq2Wrongs: [
      'It doubles the model’s accuracy automatically',
      'It only works without GPUs',
      'It converts neural networks into Excel macros',
    ],
    mcq2Explain: 'Pickle files can execute arbitrary code on load; safetensors stores pure tensor bytes safely and supports zero-copy fast loading.',
    realWorldScenario:
      'Your Colab notebook disconnected at Epoch 18 of a 4-hour training job, and you lost all progress because no checkpoints were saved.',
    interviewQ1: 'What extra item must you save in a checkpoint if you want to RESUME training cleanly (not just run inference)?',
    interviewA1:
      'Besides model.state_dict(), save optimizer.state_dict() (which holds Adam’s momentum and variance buffers), the LR scheduler state, and the current epoch number so training resumes seamlessly without a loss spike.',
    interviewQ2: 'What is ONNX and why do production teams export PyTorch models to ONNX?',
    interviewA2:
      'ONNX (Open Neural Network Exchange) is a framework-agnostic graph format. Exporting a PyTorch model to ONNX lets you run it with ultra-fast ONNX Runtime in C++, Java, mobile, or browser environments without installing PyTorch.',
  },
  {
    id: 294,
    modNum: 27,
    modTitle: 'Practical Deep Learning',
    topicNumInMod: 8,
    title: 'Introduction to Convolutional Neural Networks',
    subtitle: 'HOW AI SEES EDGES, SHAPES, AND OBJECTS IN IMAGES',
    coreEn:
      'A Convolutional Neural Network (CNN) is a specialized neural network for images that slides small learnable pattern filters (kernels) across the image to detect edges, textures, and objects—regardless of where the object appears in the photo.',
    coreHi:
      'Convolutional Neural Network (CNN) photos aur images ke liye bana khaas neural network hai. Ye chhote pattern filters (kernels) ko poori photo par slide karta hai taaki edges, shapes aur objects pehchan sake—chahe object photo mein kahin bhi ho.',
    analogyTitle: 'Scanning a Photo with a Magnifying Glass',
    analogyEn:
      'Instead of memorizing every pixel coordinate separately, you slide a small magnifying glass across a photo looking for clues—first whiskers, then pointy ears, then cat eyes. Even if the cat moves from left to right, the same magnifying glass spots it!',
    analogyHi:
      'Har pixel ki exact jagah ratne ke bajaye aap ek chhota magnifying glass poori photo par ghumate hain—pehle moochhein, phir kaan, phir aankhein. Billi photo mein left ho ya right, wahi magnifying glass use pakad leta hai!',
    steps: [
      {
        title: 'Slide Convolution Filters',
        en: 'Small 3×3 filters glide over pixels to produce Feature Maps highlighting edges and textures.',
        hi: 'Chhote 3×3 filters pixels par slide hokar Feature Maps banate hain jo edges aur textures dikhate hain.',
        tone: 'sky',
      },
      {
        title: 'Apply ReLU Activation',
        en: 'Zero out negative responses so only strong pattern matches stay highlighted.',
        hi: 'Negative values ko zero kar dein taaki sirf strong pattern matches hi aage jayein.',
        tone: 'amber',
      },
      {
        title: 'Downsample with Pooling',
        en: 'Max Pooling shrinks each feature map (e.g., 2×2 → 1 max value) to cut compute and handle slight shifts.',
        hi: 'Max Pooling feature map ka size chhota karta hai (2×2 mein se sabse bada number) taaki speed badhe.',
        tone: 'lavender',
      },
      {
        title: 'Flatten & Classify',
        en: 'Stack deeper Conv+Pool blocks for high-level parts, then pass to a Dense head for the final label.',
        hi: 'Gehre Conv+Pool blocks ke baad output ko flatten karke Dense layer se final label predict karein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / PYTORCH — MINI CNN BLOCK ON AN RGB IMAGE',
    code: `import torch, torch.nn as nn

cnn_block = nn.Sequential(
    nn.Conv2d(in_channels=3, out_channels=16, kernel_size=3, padding=1),
    nn.ReLU(),
    nn.MaxPool2d(kernel_size=2)  # Halves height & width
)
fake_image = torch.randn(1, 3, 64, 64)  # 1 RGB image, 64x64
feature_maps = cnn_block(fake_image)
print("Input:", tuple(fake_image.shape), "-> Feature Maps:", tuple(feature_maps.shape))`,
    codeOutput: 'Input: (1, 3, 64, 64) -> Feature Maps: (1, 16, 32, 32)',
    codeCaptionEn: '16 learned filters scanned the 64×64 RGB image, and MaxPool compressed it to 16 rich 32×32 feature maps.',
    codeCaptionHi: '16 filters ne 64×64 RGB photo ko scan kiya aur MaxPool ne use 16 smart 32×32 feature maps mein badal diya.',
    tableTitle: 'Why CNNs Crush Regular MLPs on Images',
    tableHeaders: ['Property', 'Regular Dense MLP', 'Convolutional Neural Net (CNN)'],
    tableRows: [
      ['Parameter Count (224×224 RGB)', 'Millions in Layer 1 alone!', 'Tiny shared 3×3 filters (weight sharing)'],
      ['Spatial Awareness', 'Flattening destroys 2D pixel layout', 'Preserves 2D neighbor relationships'],
      ['Translation Invariance', 'Fails if object shifts 20 pixels', 'Spots object anywhere in frame'],
      ['Best For', 'Tabular numbers & embeddings', 'Images, X-rays, satellite & video frames'],
    ],
    tableNoteEn: 'Modern Vision Transformers (ViTs) also compete with CNNs on massive datasets, while CNNs (ResNet, ConvNeXt, EfficientNet) remain super fast and data-efficient.',
    tableNoteHi: 'Aaj Vision Transformers (ViTs) bhi popular hain, par CNNs (ResNet, EfficientNet) kam data aur fast speed ke liye abhi bhi zabardast hain.',
    mistakeEn: 'Flattening a 224×224 image directly into a huge Dense layer, blowing up memory and losing all 2D spatial structure.',
    mistakeHi: '224×224 photo ko seedha flatten karke Dense layer mein daal dena, jisse 2D layout kho jata hai aur memory full ho jati hai.',
    proHabitEn: 'Use Transfer Learning with a pretrained CNN (like ResNet or EfficientNet) instead of training a CNN from scratch on small datasets.',
    proHabitHi: 'Chhote image datasets par scratch se CNN train karne ke bajaye pretrained ResNet ya EfficientNet (Transfer Learning) use karein.',
    jobUseEn: 'CNNs power quality-inspection cameras on factory lines, medical scan analysis, and autonomous-driving perception.',
    jobUseHi: 'Factory defect cameras, medical scan diagnosis aur self-driving cars sab CNNs ki madad se duniya dekhte hain.',
    mcq1Question: 'What is the main role of a Convolution filter (kernel) in a CNN?',
    mcq1Correct: 'To slide across the image and detect local spatial patterns like edges, corners, and textures',
    mcq1Wrongs: [
      'To randomly delete half the colors in a photo',
      'To convert JPEG files into CSV spreadsheets',
      'To sort image filenames alphabetically',
    ],
    mcq1Explain: 'Shared small kernels scan every patch of an image to extract reusable spatial features.',
    mcq2Question: 'What does a 2×2 Max Pooling layer do to a 32×32 feature map?',
    mcq2Correct: 'Shrinks it to 16×16 by keeping the strongest activation in each 2×2 region',
    mcq2Wrongs: [
      'Expands it to 64×64 by duplicating pixels',
      'Turns all numbers into zeros',
      'Adds 100 new RGB color channels',
    ],
    mcq2Explain: 'Max pooling halves spatial height and width while retaining the most prominent detected features.',
    realWorldScenario:
      'You have only 1,200 labeled photos of defective vs healthy circuit boards and need 95%+ accuracy on a factory camera.',
    interviewQ1: 'Why does weight sharing in a CNN drastically reduce overfitting compared to a fully connected MLP?',
    interviewA1:
      'Instead of learning a separate weight for every pixel location, a single 3×3 filter (just 9 weights) slides across the entire image. This cuts parameter count by orders of magnitude and ensures an edge detector learned in the top-left works identically in the bottom-right.',
    interviewQ2: 'What is Transfer Learning in Computer Vision?',
    interviewA2:
      'You take a CNN (e.g., ResNet50) already pretrained on millions of ImageNet photos—so its early layers already know edges, shapes, and textures—replace the final classification head with your custom classes, and fine-tune on your small dataset.',
  },
  {
    id: 295,
    modNum: 27,
    modTitle: 'Practical Deep Learning',
    topicNumInMod: 9,
    title: 'Computer Vision Use Cases',
    subtitle: 'CLASSIFICATION, OBJECT DETECTION, SEGMENTATION, AND OCR IN ACTION',
    coreEn:
      'Computer Vision teaches machines to interpret visual data across four main tasks: Image Classification (what is in the photo?), Object Detection (what and where with bounding boxes?), Segmentation (exact pixel mask), and OCR (reading text in images).',
    coreHi:
      'Computer Vision machines ko dekhkar samajhna sikhata hai. Iske 4 main kaam hain: Classification (photo mein kya hai?), Object Detection (kya aur kahan box ke saath?), Segmentation (har pixel ka exact mask), aur OCR (photo se text padhna).',
    analogyTitle: 'Four Ways a Security Guard Looks at CCTV',
    analogyEn:
      'Classification: "There is a vehicle." Detection: "Car at left gate, bike at right gate (draw boxes)." Segmentation: "Exact pixel outline of the car." OCR: "License plate reads MH-12-AB-1234."',
    analogyHi:
      'Classification: "Gaadi dikh rahi hai." Detection: "Left gate par car, right par bike (boxes banao)." Segmentation: "Car ka exact pixel outline." OCR: "Number plate MH-12-AB-1234 hai."',
    steps: [
      {
        title: 'Define Exact Visual Output Needed',
        en: 'Ask whether the business needs a whole-image label, bounding boxes, pixel masks, or extracted text.',
        hi: 'Pehle tay karein ki business ko sirf label chahiye, bounding boxes, pixel mask ya text reading (OCR).',
        tone: 'sky',
      },
      {
        title: 'Pick the Matching Vision Family',
        en: 'ResNet/ViT for classification, YOLO for real-time detection, U-Net/SAM for segmentation, PaddleOCR for text.',
        hi: 'Classification ke liye ResNet/ViT, detection ke liye YOLO, segmentation ke liye U-Net/SAM, aur OCR ke liye PaddleOCR.',
        tone: 'amber',
      },
      {
        title: 'Handle Real-World Lighting & Angles',
        en: 'Collect diverse photos (blur, glare, night, rotations) and apply realistic data augmentation.',
        hi: 'Real-world photos (blur, kam light, alag angles) collect karein aur data augmentation lagayein.',
        tone: 'lavender',
      },
      {
        title: 'Evaluate with Task Metrics & Latency',
        en: 'Measure Accuracy for classification, mAP/IoU for boxes/masks, and FPS speed on target hardware.',
        hi: 'Classification mein Accuracy, boxes/masks mein IoU/mAP, aur camera par live FPS speed check karein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — COMPUTING IOU (INTERSECTION OVER UNION) FOR BOX DETECTION',
    code: `# Predicted box vs True box: [x1, y1, x2, y2]
pred = [10, 10, 50, 50]   # area = 40*40 = 1600
true = [20, 20, 60, 60]   # area = 40*40 = 1600

inter_w = max(0, min(pred[2], true[2]) - max(pred[0], true[0]))
inter_h = max(0, min(pred[3], true[3]) - max(pred[1], true[1]))
inter_area = inter_w * inter_h
union_area = 1600 + 1600 - inter_area

print(f"Overlap Area: {inter_area} | IoU Score: {inter_area / union_area:.2f}")`,
    codeOutput: 'Overlap Area: 900 | IoU Score: 0.39',
    codeCaptionEn: 'IoU measures how tightly a predicted bounding box overlaps the true object (IoU >= 0.50 is typically a hit).',
    codeCaptionHi: 'IoU batata hai ki model ka box asli object ke upar kitna sahi baitha hai (0.50+ ko achha match mana jata hai).',
    tableTitle: 'Four Core Computer Vision Tasks & Real Industry Examples',
    tableHeaders: ['CV Task', 'Output Produced', 'Famous Model', 'Real Business Example'],
    tableRows: [
      ['Image Classification', 'Single class label', 'ResNet / EfficientNet', 'Flagging damaged parcel photos'],
      ['Object Detection', 'Boxes + labels + scores', 'YOLOv8 / RT-DETR', 'Counting vehicles or shelf stock'],
      ['Segmentation', 'Pixel-by-pixel mask', 'U-Net / SAM', 'Measuring tumor area on MRI scans'],
      ['OCR / Document AI', 'Extracted structured text', 'PaddleOCR / Vision LLMs', 'Reading KYC PAN cards & invoices'],
    ],
    tableNoteEn: 'Don’t over-engineer! If you only need to know whether a package is damaged, Classification is 10x cheaper to label than Segmentation.',
    tableNoteHi: 'Over-engineering na karein! Agar sirf "damaged ya okay" jaanna hai, toh Segmentation ki jagah Classification 10x sasta padega.',
    mistakeEn: 'Spending months labeling pixel-level segmentation masks when simple image classification would solve the business problem.',
    mistakeHi: 'Jahan simple image classification kaafi tha wahan mahinon tak pixel-by-pixel segmentation masks label karna.',
    proHabitEn: 'Always choose the simplest CV task that satisfies the business metric, and test on messy real-world camera frames early.',
    proHabitHi: 'Business need ke hisaab se sabse simple CV task chunein aur shuruat mein hi asli messy camera photos par test karein.',
    jobUseEn: 'Used in retail checkout-free stores, healthcare radiology, agriculture drone crop monitoring, and fintech KYC verification.',
    jobUseHi: 'Retail stores, hospital radiology, drone farming aur fintech KYC document verification mein CV roz use hota hai.',
    mcq1Question: 'A warehouse wants to count how many helmets AND vests appear in each CCTV frame with their exact positions. Which CV task fits?',
    mcq1Correct: 'Object Detection (bounding boxes + class labels)',
    mcq1Wrongs: [
      'Audio speech recognition',
      'Simple 1-label whole-image classification',
      'SQL table joining',
    ],
    mcq1Explain: 'Object Detection locates and labels multiple objects in a single frame with bounding boxes.',
    mcq2Question: 'Which metric measures how well a predicted bounding box overlaps the ground-truth box?',
    mcq2Correct: 'IoU (Intersection over Union)',
    mcq2Wrongs: [
      'Mean Squared Error of filenames',
      'Word count',
      'Batch size',
    ],
    mcq2Explain: 'IoU = Area of Overlap / Area of Union, ranging from 0 (no overlap) to 1 (perfect match).',
    realWorldScenario:
      'A fintech app wants users to snap a photo of their electricity bill and automatically auto-fill the customer name, bill date, and amount.',
    interviewQ1: 'What is the difference between Semantic Segmentation and Instance Segmentation?',
    interviewA1:
      'Semantic Segmentation labels every pixel by class (all 5 people share one "person" color). Instance Segmentation goes further and distinguishes each individual object separately (Person #1, Person #2, ..., Person #5).',
    interviewQ2: 'Why is YOLO so popular for live video analytics compared to older two-stage detectors?',
    interviewA2:
      'YOLO ("You Only Look Once") predicts all bounding boxes and classes in a single forward pass, achieving 30–100+ frames per second (real-time speed) while maintaining strong accuracy.',
  },
  {
    id: 296,
    modNum: 27,
    modTitle: 'Practical Deep Learning',
    topicNumInMod: 10,
    title: 'Deep Learning Mini Project',
    subtitle: 'PUTTING DATA, ARCHITECTURE, TRAINING, MONITORING, AND EXPORT TOGETHER',
    coreEn:
      'An end-to-end Deep Learning project combines every practical skill into one repeatable pipeline: problem framing → leak-free data prep → baseline model → training with validation & early stopping → error analysis → saved checkpoint ready for inference.',
    coreHi:
      'Ek complete Deep Learning project saari skills ko ek repeatable pipeline mein jodta hai: problem framing → clean data prep → baseline model → train + validate + early stop → error analysis → deployment-ready saved model.',
    analogyTitle: 'Cooking a Full Thali Meal End-to-End',
    analogyEn:
      'Knowing how to chop onions or boil dal separately is practice—serving a full, hot, taste-tested thali on time is a real project! A mini project proves all your Deep Learning pieces work smoothly together.',
    analogyHi:
      'Alag-alag pyaaz kaatna ya dal ubaalna practice hai—par waqt par poori garma-garam, taste-checked thali serve karna asli project hai! Mini project saabit karta hai ki aap saare steps jodkar result de sakte hain.',
    steps: [
      {
        title: 'Frame Problem & Split Data',
        en: 'Define target metric (e.g., F1 or Val Accuracy), clean data, and create leak-free Train/Val/Test splits.',
        hi: 'Target metric tay karein, data clean karein aur leak-free Train/Val/Test split banayein.',
        tone: 'sky',
      },
      {
        title: 'Build & Smoke-Test Baseline',
        en: 'Create a simple MLP or pretrained CNN, verify shapes on 1 dummy batch, and record baseline score.',
        hi: 'Simple MLP ya pretrained CNN banayein, 1 dummy batch se shape check karein aur baseline score note karein.',
        tone: 'amber',
      },
      {
        title: 'Train, Monitor & Regularize',
        en: 'Run AdamW + Early Stopping, inspect train/val loss curves, and tune Dropout/LR to close overfitting gaps.',
        hi: 'AdamW + Early Stopping chalayein, curves dekhein aur Dropout/LR tune karke overfitting kam karein.',
        tone: 'lavender',
      },
      {
        title: 'Error Analysis & Save Artifact',
        en: 'Inspect the top 10 worst mistakes on Validation, run final Test evaluation once, and export model + scaler.',
        hi: 'Validation ki top 10 galtiyan dekhein, final Test score nikalein aur model + scaler export karein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — MINI PROJECT INFERENCE PIPELINE CHECK',
    code: `def predict_ticket_priority(text_len_scaled, urgency_score):
    # Illustrative trained model inference wrapper
    logit = 1.8 * urgency_score + 0.4 * text_len_scaled - 0.5
    prob = 1 / (1 + 2.71828 ** (-logit))
    label = "HIGH_PRIORITY" if prob >= 0.5 else "NORMAL"
    return {"label": label, "confidence": round(prob, 3)}

print(predict_ticket_priority(0.7, 0.9))
print(predict_ticket_priority(-0.5, 0.1))`,
    codeOutput: `{'label': 'HIGH_PRIORITY', 'confidence': 0.802}
{'label': 'NORMAL', 'confidence': 0.373}`,
    codeCaptionEn: 'Wrapping your saved model in a clean predict() function makes it instantly usable by web apps and APIs.',
    codeCaptionHi: 'Saved model ko ek clean predict() function mein wrap karne se wo turant web apps aur APIs mein use ho sakta hai.',
    tableTitle: 'Portfolio-Ready Deep Learning Mini Project Checklist',
    tableHeaders: ['Milestone', 'Deliverable', 'Why Recruiters Love It'],
    tableRows: [
      ['1. Reproducible Data Prep', 'Clean split + saved scaler/transforms', 'Shows zero data leakage discipline'],
      ['2. Baseline vs Final', 'Table comparing simple baseline vs tuned DL', 'Proves Deep Learning actually added value'],
      ['3. Error Analysis', 'Examples of misclassified cases + why', 'Demonstrates real engineering maturity'],
      ['4. Saved Model + Demo', 'Saved weights + clean predict() script', 'Ready for real-world deployment'],
    ],
    tableNoteEn: 'A small, clean, well-evaluated project with error analysis beats a messy 500-line notebook with 99% leaked accuracy every single time!',
    tableNoteHi: 'Ek chhota, clean aur honest error-analysis wala project, 99% leaked accuracy wale messy notebook se hamesha better hota hai!',
    mistakeEn: 'Stopping as soon as accuracy hits 90% without ever inspecting what kinds of examples the model still gets wrong.',
    mistakeHi: '90% accuracy aate hi ruk jana aur ye kabhi na dekhna ki bache hue 10% mein model kaisi galtiyan kar raha hai.',
    proHabitEn: 'Always inspect your confusion matrix and worst 10 errors—often fixing 1 data labeling quirk improves accuracy more than changing layers.',
    proHabitHi: 'Hamesha confusion matrix aur worst 10 errors dekhein—aksar data ki ek chhoti galti sudharne se accuracy zyada badhti hai.',
    jobUseEn: 'This exact 4-stage lifecycle is how every real-world Deep Learning feature goes from Jupyter Notebook to production.',
    jobUseHi: 'Bilkul yahi 4-stage lifecycle har company mein Deep Learning project ko Notebook se production tak le jata hai.',
    mcq1Question: 'What is the most valuable step AFTER your model reaches good validation accuracy in a project?',
    mcq1Correct: 'Inspecting the worst misclassified examples (error analysis) and testing once on the held-out Test set',
    mcq1Wrongs: [
      'Deleting the training script immediately',
      'Training on the Test set to boost the score',
      'Removing all validation checks',
    ],
    mcq1Explain: 'Error analysis uncovers systematic failure modes, label noise, and high-impact improvements.',
    mcq2Question: 'Why should a portfolio Deep Learning project always include a simple baseline comparison?',
    mcq2Correct: 'To prove that the extra complexity and compute of Deep Learning genuinely outperforms a simpler approach',
    mcq2Wrongs: [
      'Because GitHub rejects repositories with only one model',
      'To slow down the presentation',
      'Because baselines never use data',
    ],
    mcq2Explain: 'Benchmarking against a simple baseline demonstrates disciplined, business-minded engineering.',
    realWorldScenario:
      'You are presenting your Deep Learning image-defect detector to an engineering lead who asks: "Where does your model still fail, and how will we deploy it?"',
    interviewQ1: 'Walk me through how you would structure an end-to-end Deep Learning project from day 1.',
    interviewA1:
      '1) Clarify business goal and primary metric; 2) Audit data quality and create leak-free Train/Val/Test splits; 3) Build a fast baseline; 4) Train a clean neural net or pretrained model with tracked loss curves; 5) Perform error analysis and iterate; 6) Evaluate once on Test and export versioned weights + preprocessing pipeline.',
    interviewQ2: 'What is the most common reason a high-accuracy notebook model fails when deployed to real users?',
    interviewA2:
      'Training-serving skew: differences between how data was cleaned/resized/normalized in the notebook versus how live production requests arrive, or distribution shift where real users send noisier inputs than the clean training set.',
  },
  // ============================================================================
  // MODULE 28: NLP, Transformers and Large Language Models (IDs 297–308)
  // ============================================================================
  {
    id: 297,
    modNum: 28,
    modTitle: 'NLP, Transformers and Large Language Models',
    topicNumInMod: 1,
    title: 'What Is Natural Language Processing?',
    subtitle: 'TEACHING COMPUTERS TO READ, UNDERSTAND, AND WRITE HUMAN LANGUAGE',
    coreEn:
      'Natural Language Processing (NLP) is the branch of AI that enables computers to read, understand, summarize, translate, and generate everyday human text and speech—turning messy sentences into structured meaning.',
    coreHi:
      'Natural Language Processing (NLP) AI ki wo shakh hai jo computers ko insaano ki aam bhasha (text aur speech) padhna, samajhna, summarize karna, translate karna aur likhna sikhati hai.',
    analogyTitle: 'A Multilingual Personal Assistant Reading Your Inbox',
    analogyEn:
      'Imagine an assistant who reads 10,000 customer emails, sorts angry complaints from praise, pulls out order numbers, translates Hindi reviews to English, and drafts polite replies in seconds. That is NLP at scale!',
    analogyHi:
      'Sochiye ek smart assistant 10,000 customer emails padh kar gusse wali complaints alag karta hai, order numbers nikalta hai, Hindi reviews ko English mein translate karta hai aur polite reply draft kar deta hai. Yahi NLP hai!',
    steps: [
      {
        title: 'Collect Raw Text Data',
        en: 'Gather reviews, chats, emails, support tickets, or PDF documents.',
        hi: 'Reviews, chats, emails, support tickets ya PDF documents se raw text collect karein.',
        tone: 'sky',
      },
      {
        title: 'Convert Words into Numbers',
        en: 'Clean, tokenize, and embed text so math models can process human words.',
        hi: 'Text ko clean, tokenize aur numbers (embeddings) mein badlein taaki AI use padh sake.',
        tone: 'amber',
      },
      {
        title: 'Apply NLP Model',
        en: 'Run classification, entity extraction, translation, or an LLM depending on the task.',
        hi: 'Task ke hisaab se sentiment analysis, entity extraction, translation ya LLM chalayein.',
        tone: 'lavender',
      },
      {
        title: 'Deliver Actionable Output',
        en: 'Route urgent tickets automatically, show search answers, or generate concise summaries.',
        hi: 'Urgent tickets ko automatically route karein, search answers dikhayein ya short summaries banayein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — SIMPLE RULE-BASED SENTIMENT NLP DEMO',
    code: `reviews = [
    "Fast delivery and awesome quality!",
    "Terrible packaging, arrived broken and late."
]
pos_words = {"fast", "awesome", "great", "love"}
neg_words = {"terrible", "broken", "late", "bad"}

for r in reviews:
    words = set(r.lower().replace("!", "").replace(".", "").replace(",", "").split())
    score = len(words & pos_words) - len(words & neg_words)
    label = "POSITIVE" if score > 0 else "NEGATIVE"
    print(f"{label:8s} | {r}")`,
    codeOutput: `POSITIVE | Fast delivery and awesome quality!
NEGATIVE | Terrible packaging, arrived broken and late.`,
    codeCaptionEn: 'Simple keyword rules break on sarcasm ("Yeah, great job breaking my phone!")—which is why Deep Learning NLP & Transformers were invented.',
    codeCaptionHi: 'Simple keyword rules sarcasm ("Wah, phone todne ka badhiya kaam kiya!") par fail ho jaate hain—isliye Deep Learning NLP aur Transformers aaye.',
    tableTitle: 'Everyday NLP Tasks You Already Use Daily',
    tableHeaders: ['NLP Task', 'What It Does', 'Everyday Example'],
    tableRows: [
      ['Text Classification', 'Assigns a category/sentiment label', 'Gmail Spam filter, review sentiment'],
      ['Named Entity Recognition (NER)', 'Extracts names, dates, amounts', 'Pulling Flight # & Date from email'],
      ['Machine Translation', 'Converts one language to another', 'Google Translate (Hindi ↔ English)'],
      ['Summarization & Q&A', 'Condenses long docs or answers queries', 'ChatGPT / Gemini doc assistants'],
    ],
    tableNoteEn: 'Human language is hard for computers because of ambiguity, slang, sarcasm, and context ("bank" of a river vs "bank" account).',
    tableNoteHi: 'Insaani bhasha computers ke liye mushkil hoti hai kyunki ek hi shabd ke alag matlab ho sakte hain (jaise nadi ka "bank" vs paison ka "bank").',
    mistakeEn: 'Treating text like plain keywords without considering word order, negation ("not good"), or context.',
    mistakeHi: 'Text ko sirf keywords ki tarah dekhna aur negation ("not good") ya poore sentence ka context ignore kar dena.',
    proHabitEn: 'Match NLP complexity to the problem: use TF-IDF/regex for simple fast filtering, and pretrained Transformers/LLMs for deep meaning.',
    proHabitHi: 'Task ke hisaab se NLP tool chunein: simple filtering ke liye TF-IDF/regex aur gehri samajh ke liye Transformers/LLMs.',
    jobUseEn: 'Companies use NLP to analyze millions of customer reviews, automate support desks, and search internal knowledge bases.',
    jobUseHi: 'Companies lakhon customer reviews analyze karne, support automate karne aur documents search karne ke liye NLP use karti hain.',
    mcq1Question: 'Why is human language much harder for computers to process than clean Excel numbers?',
    mcq1Correct: 'Because words have ambiguity, context-dependent meanings, slang, and sarcasm',
    mcq1Wrongs: [
      'Because computers cannot store English letters',
      'Because text files are always larger than videos',
      'Because Python does not support strings',
    ],
    mcq1Explain: 'Context, negation, polysemy (multiple meanings), and tone make natural language uniquely challenging.',
    mcq2Question: 'Which NLP task pulls out structured fields like Person Names, Dates, and Dollar Amounts from a legal contract?',
    mcq2Correct: 'Named Entity Recognition (NER)',
    mcq2Wrongs: [
      'Image Segmentation',
      'Audio Compression',
      'Max Pooling',
    ],
    mcq2Explain: 'NER identifies and classifies named entities such as people, organizations, locations, dates, and money.',
    realWorldScenario:
      'An e-commerce marketplace receives 50,000 product reviews a week and wants to automatically flag safety complaints within 5 minutes.',
    interviewQ1: 'How has NLP evolved from classic approaches to modern LLMs?',
    interviewA1:
      'NLP progressed from hand-crafted rules → Bag-of-Words/TF-IDF (frequency counts) → Word2Vec/GloVe static embeddings → RNNs/LSTMs (sequential reading) → Transformers with Self-Attention → massive pretrained LLMs that handle dozens of tasks via prompting.',
    interviewQ2: 'Give an example where negation breaks a naive keyword-based NLP classifier.',
    interviewA2:
      'In "I would NOT recommend this phone, it is definitely not great", a keyword counter sees "recommend" and "great" and wrongly predicts Positive unless it models word order and negation.',
  },
  {
    id: 298,
    modNum: 28,
    modTitle: 'NLP, Transformers and Large Language Models',
    topicNumInMod: 2,
    title: 'Text Cleaning and Preprocessing',
    subtitle: 'TIDYING MESSY REAL-WORLD TEXT BEFORE FEEDING IT TO MODELS',
    coreEn:
      'Text Cleaning and Preprocessing standardizes messy raw text—removing HTML tags, fixing extra spaces, handling casing, punctuation, stopwords, and lemmatization—so classic NLP models see clean, consistent signals.',
    coreHi:
      'Text Cleaning aur Preprocessing gande raw text ko saaf karta hai—HTML tags hatana, extra spaces fix karna, lowercase karna, stopwords aur lemmatization—taaki NLP models ko clean aur consistent signal mile.',
    analogyTitle: 'Sorting & Ironing Laundry Before Folding',
    analogyEn:
      'Before organizing a wardrobe, you empty pockets of receipts (HTML/URLs), wash off dirt (weird symbols), and group matching socks ("running", "ran" → "run"). Clean text makes pattern matching effortless!',
    analogyHi:
      'Kapde almari mein rakhne se pehle aap jeb se kachra nikalte hain (HTML/URLs), daag saaf karte hain (extra symbols), aur ek jaise kapde saath rakhte hain ("running", "ran" → "run"). Clean text se model ka kaam aasaan ho jata hai!',
    steps: [
      {
        title: 'Strip Noise & Artifacts',
        en: 'Remove HTML tags (<br>), broken URLs, and extra whitespace using regex.',
        hi: 'Regex se HTML tags (<br>), bekar URLs aur extra spaces hata dein.',
        tone: 'sky',
      },
      {
        title: 'Normalize Case & Punctuation',
        en: 'Lowercase text for classic NLP ("Apple" == "apple"), but be careful if casing carries meaning (e.g., NER).',
        hi: 'Classic NLP ke liye lowercase karein ("Apple" == "apple"), par jahan capital letters zaroori hon (jaise NER) wahan dhyan rakhein.',
        tone: 'amber',
      },
      {
        title: 'Handle Stopwords Carefully',
        en: 'Remove filler words ("the", "is") for Bag-of-Words, but NEVER blindly strip "not" or "no" in sentiment tasks!',
        hi: 'Bag-of-Words mein "the", "is" hata sakte hain, par sentiment task mein "not" ya "no" kabhi mat hatayein!',
        tone: 'lavender',
      },
      {
        title: 'Stemming vs Lemmatization',
        en: 'Reduce word forms to their root: Stemming chops suffixes fast ("studies" → "studi"); Lemmatization uses grammar ("better" → "good").',
        hi: 'Words ko unke root form mein layein: Stemming fast kat-ta hai; Lemmatization dictionary se sahi root deta hai ("running" → "run").',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — CLEAN REGEX TEXT PREPROCESSING PIPELINE',
    code: `import re

raw = "  <p>OMG!! Check https://shop.in — Delivery was SUPER fast!!! </p>  "
clean = re.sub(r"<.*?>", " ", raw)              # Remove HTML tags
clean = re.sub(r"https?://\\S+", "", clean)      # Remove URLs
clean = re.sub(r"[^a-zA-Z\\s]", "", clean)       # Keep letters & spaces
clean = " ".join(clean.lower().split())         # Lowercase & collapse spaces
print("Cleaned text:", clean)`,
    codeOutput: 'Cleaned text: omg check delivery was super fast',
    codeCaptionEn: 'Four crisp lines turn noisy scraped web text into clean, uniform tokens ready for classic NLP.',
    codeCaptionHi: 'Sirf 4 lines ne web se aaye messy HTML text ko saaf aur uniform words mein badal diya.',
    tableTitle: 'Classic NLP vs Modern LLM Preprocessing Rules',
    tableHeaders: ['Cleaning Step', 'Classic ML (TF-IDF / Naive Bayes)', 'Modern Transformers / LLMs'],
    tableRows: [
      ['Remove HTML / Broken Bytes', 'Yes (always)', 'Yes (always)'],
      ['Lowercasing', 'Usually Yes', 'Often Keep Case ("US" vs "us")'],
      ['Remove Stopwords ("not", "is")', 'Carefully (keep negations!)', 'NO! LLMs need full grammar'],
      ['Stemming / Lemmatization', 'Helpful to shrink vocabulary', 'NO! Subword tokenizers handle it'],
    ],
    tableNoteEn: 'Big modern insight: over-cleaning text (stripping punctuation & stopwords) actually HURTS modern LLMs and BERT!',
    tableNoteHi: 'Zaroori baat: modern LLMs aur BERT ke liye punctuation aur stopwords hatana fayde ki jagah NUKSAN karta hai!',
    mistakeEn: 'Blindly removing all stopwords including "not" and "never", turning "not happy" into "happy"!',
    mistakeHi: 'Bina dekhe saare stopwords (jaise "not", "never") hata dena, jisse "not happy" badalkar "happy" ban jaye!',
    proHabitEn: 'Tailor text cleaning to the model family: light cleaning for Transformers/LLMs, structured normalization for TF-IDF.',
    proHabitHi: 'Model ke hisaab se cleaning karein: Transformers/LLMs ke liye halka cleaning aur TF-IDF ke liye structured normalization.',
    jobUseEn: 'Clean text pipelines prevent garbage HTML tags and duplicate whitespace from inflating LLM token bills and polluting search indexes.',
    jobUseHi: 'Clean text pipelines bekar HTML aur extra spaces ko hatakar LLM ka token bill bachati hain aur search accurate rakhti hain.',
    mcq1Question: 'What is the main difference between Stemming and Lemmatization?',
    mcq1Correct: 'Stemming crudely chops word endings, while Lemmatization returns a valid dictionary root word using grammar',
    mcq1Wrongs: [
      'Stemming translates English to French',
      'Lemmatization deletes all numbers from a CSV',
      'They are identical functions with different names',
    ],
    mcq1Explain: 'Lemmatization produces real words ("better" → "good", "studies" → "study"), whereas stemming may produce stubs ("studi").',
    mcq2Question: 'Why should you avoid removing stopwords and punctuation before feeding text into a modern LLM or BERT?',
    mcq2Correct: 'Because Transformers rely on full sentence structure, punctuation, and small words like "not" to understand exact context',
    mcq2Wrongs: [
      'Because LLMs crash if there are no commas',
      'Because punctuation makes GPU fans spin faster',
      'Because stopwords increase file compression',
    ],
    mcq2Explain: 'Pretrained Transformers were trained on natural, intact sentences and lose critical nuance if stopwords are stripped.',
    realWorldScenario:
      'Your sentiment analyzer keeps predicting "Positive" on reviews saying "Not good at all" because a default stopword list deleted the word "not".',
    interviewQ1: 'When should you KEEP emojis and exclamation marks during text preprocessing?',
    interviewA1:
      'In sentiment analysis, social media monitoring, and customer support triage, emojis (😡, ❤️) and "!!!" carry huge emotional signal that stripping punctuation would destroy.',
    interviewQ2: 'Why is cleaning HTML, boilerplate headers, and repeated footers still essential before feeding PDFs into a RAG LLM system?',
    interviewA2:
      'Boilerplate noise ("Page 4 of 20 — Confidential Footer") wastes paid context-window tokens and degrades vector embedding search quality.',
  },
  {
    id: 299,
    modNum: 28,
    modTitle: 'NLP, Transformers and Large Language Models',
    topicNumInMod: 3,
    title: 'Tokenization',
    subtitle: 'CHOPPING SENTENCES INTO SUBWORD PIECES AND INTEGER IDS',
    coreEn:
      'Tokenization is the process of splitting raw text into smaller units called tokens (words, subwords, or characters) and mapping each token to a unique integer ID from a vocabulary so neural networks can process it.',
    coreHi:
      'Tokenization raw text ko chhote tukdon (tokens — words ya subwords) mein todne aur har token ko ek unique number ID dene ka process hai taaki neural network use padh sake.',
    analogyTitle: 'Breaking Words into Reusable LEGO Syllables',
    analogyEn:
      'If a dictionary only stored whole words, it would choke on a new word like "unbelievably". Instead, modern subword tokenizers store reusable LEGO pieces: ["un", "believ", "ably"]—so they can build ANY word in any language!',
    analogyHi:
      'Agar dictionary sirf poore words yaad rakhe, toh naye word "unbelievably" par atak jayegi. Modern subword tokenizers reusable tukde rakhte hain: ["un", "believ", "ably"]—jisse koi bhi naya word aasaani se ban jata hai!',
    steps: [
      {
        title: 'Take Raw Input String',
        en: 'Start with a sentence such as "Deep learning is unbelievable!".',
        hi: 'Ek raw sentence lein, jaise "Deep learning is unbelievable!".',
        tone: 'sky',
      },
      {
        title: 'Split Using Subword Rules (BPE)',
        en: 'Frequent words stay whole ("learning"); rare words split into known subwords ("un", "believ", "able").',
        hi: 'Aam words poore rehte hain ("learning"); naye/bade words chhote tukdon ("un", "believ", "able") mein toot jaate hain.',
        tone: 'amber',
      },
      {
        title: 'Map Tokens to Integer IDs',
        en: 'Look up each token in the model’s vocabulary table to get IDs like [8421, 6975, 374, ...].',
        hi: 'Har token ko vocabulary dictionary mein dekh kar integer ID (jaise [8421, 6975, 374]) mein badlein.',
        tone: 'lavender',
      },
      {
        title: 'Pad or Truncate for Batching',
        en: 'Align sequence lengths in a batch so tensors have clean rectangular shapes.',
        hi: 'Ek batch ke saare sentences ko barabar length par pad ya truncate karein taaki GPU batch smoothly chale.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — SIMPLE VOCABULARY & SUBWORD TOKENIZER DEMO',
    code: `vocab = {"<UNK>": 0, "deep": 1, "learn": 2, "##ing": 3, "is": 4, "fun": 5}
tokens = ["deep", "learn", "##ing", "is", "fun"]
token_ids = [vocab.get(t, 0) for t in tokens]

# Decode back to readable tokens
id_to_tok = {v: k for k, v in vocab.items()}
decoded = [id_to_tok[i] for i in token_ids]

print("Tokens:   ", tokens)
print("Token IDs:", token_ids)
print("Decoded:  ", decoded)`,
    codeOutput: `Tokens:    ['deep', 'learn', '##ing', 'is', 'fun']
Token IDs: [1, 2, 3, 4, 5]
Decoded:   ['deep', 'learn', '##ing', 'is', 'fun']`,
    codeCaptionEn: 'Subword tokenization splits "learning" into "learn" + "##ing", letting the model handle unseen tenses effortlessly.',
    codeCaptionHi: 'Subword tokenization "learning" ko "learn" + "##ing" mein todta hai taaki naye words par bhi model na atke.',
    tableTitle: 'Three Tokenization Strategies Compared',
    tableHeaders: ['Strategy', 'Example on "unhappy"', 'Pros & Cons'],
    tableRows: [
      ['Word-Level', '["unhappy"]', 'Huge vocab; fails on typos & rare words (<UNK>)'],
      ['Character-Level', '["u","n","h","a","p","p","y"]', 'Tiny vocab, but super long sequences & slow'],
      ['Subword (BPE / WordPiece)', '["un", "happy"]', 'Best balance! Compact vocab + zero <UNK> (LLM default)'],
    ],
    tableNoteEn: 'Rule of thumb in English: 100 tokens ≈ 75 words. In Hindi/Devanagari, the same sentence often takes 2–3x more tokens!',
    tableNoteHi: 'English mein 100 tokens ≈ 75 words hote hain, jabki Hindi/regional languages mein aksar 2–3 guna zyada tokens lagte hain!',
    mistakeEn: 'Using a different tokenizer during inference than the exact tokenizer the pretrained model was trained with.',
    mistakeHi: 'Pretrained model ke saath kisi doosre model ka tokenizer laga dena, jisse saare token IDs galat words ko point karte hain.',
    proHabitEn: 'Always load the exact paired tokenizer (e.g., AutoTokenizer.from_pretrained(model_name)) and count tokens before API calls.',
    proHabitHi: 'Hamesha model ka exact paired tokenizer load karein aur LLM API call se pehle token count zaroor check karein.',
    jobUseEn: 'LLM APIs (OpenAI, Gemini, Claude) bill strictly per token—understanding tokenization directly controls latency and cloud cost.',
    jobUseHi: 'Saari LLM APIs (OpenAI, Gemini, Claude) har token ke hisaab se charge karti hain—tokenization samajhna cost aur speed dono bachata hai.',
    mcq1Question: 'Why do modern LLMs use Subword Tokenization (like BPE) instead of pure Word-Level tokenization?',
    mcq1Correct: 'It keeps vocabulary size manageable while breaking rare or brand-new words into known subword pieces without <UNK> failures',
    mcq1Wrongs: [
      'Because word-level tokenizers cannot handle English spaces',
      'Because subword tokenizers delete all verbs',
      'To make sentences 100 times longer',
    ],
    mcq1Explain: 'Subword tokenization handles morphology, typos, code, and new words gracefully with a compact vocabulary.',
    mcq2Question: 'Approximately how many English words equal 100 LLM tokens?',
    mcq2Correct: 'About 75 words',
    mcq2Wrongs: [
      'Exactly 1 word',
      '1,000 words',
      '10,000 words',
    ],
    mcq2Explain: 'Common words are 1 token, while longer words and punctuation split into extra tokens—averaging ~0.75 words per token.',
    realWorldScenario:
      'Your multilingual chatbot costs 3x more per conversation in Tamil and Hindi than in English—your manager asks why.',
    interviewQ1: 'How does Byte Pair Encoding (BPE) build its vocabulary?',
    interviewA1:
      'BPE starts with individual characters/bytes and iteratively merges the most frequently occurring adjacent pair into a new token, repeating until it reaches the target vocabulary size (e.g., 50,000 or 100,000 tokens).',
    interviewQ2: 'Why do LLMs sometimes struggle to count the exact number of "r"s in the word "strawberry"?',
    interviewA2:
      'Because the model never sees individual letters—its tokenizer feeds it multi-character subword chunks like ["str", "aw", "berry"] mapped to opaque integer IDs.',
  },
  {
    id: 300,
    modNum: 28,
    modTitle: 'NLP, Transformers and Large Language Models',
    topicNumInMod: 4,
    title: 'Bag-of-Words and TF-IDF',
    subtitle: 'CLASSIC FREQUENCY-BASED TEXT VECTORS THAT STILL WIN FAST BASELINES',
    coreEn:
      'Bag-of-Words (BoW) turns a document into a vector of raw word counts, while TF-IDF (Term Frequency–Inverse Document Frequency) smartly boosts distinctive topic words and downweights common filler words that appear in every document.',
    coreHi:
      'Bag-of-Words (BoW) har document mein words ki ginti ka vector banata hai, jabki TF-IDF aam filler words ("the", "product") ka weight kam karta hai aur khaas distinctive words ("battery", "refund") ko zyada importance deta hai.',
    analogyTitle: 'Spotting What Makes a Recipe Unique',
    analogyEn:
      'Every recipe book page mentions "salt" and "water" (low IDF—not distinctive). If one page mentions "saffron" and "biryani" 5 times (high TF + high IDF), you immediately know that page is about Biryani!',
    analogyHi:
      'Har recipe mein "namak" aur "paani" likha hota hai (common = low IDF). Par agar kisi page par "kesar" aur "biryani" 5 baar aaye (high TF + high IDF), toh aap turant pehchan jaate hain ki ye Biryani ki recipe hai!',
    steps: [
      {
        title: 'Build Shared Vocabulary',
        en: 'List every unique word across your training documents as column headers.',
        hi: 'Saare training documents ke unique words ki list banakar columns bana lein.',
        tone: 'sky',
      },
      {
        title: 'Count Term Frequency (TF)',
        en: 'Count how often each word appears in a specific document (this alone is Bag-of-Words).',
        hi: 'Har document mein har word kitni baar aaya hai ye ginein (itna hi Bag-of-Words hai).',
        tone: 'amber',
      },
      {
        title: 'Compute Inverse Doc Frequency (IDF)',
        en: 'Give higher weight to rare, informative words and lower weight to words appearing everywhere.',
        hi: 'Jo words sirf kuch docs mein aate hain unhe high weight dein aur jo har doc mein hain unhe low weight.',
        tone: 'lavender',
      },
      {
        title: 'Multiply TF × IDF & Train Fast Model',
        en: 'Feed the clean TF-IDF matrix into Logistic Regression, Linear SVM, or BM25 keyword search.',
        hi: 'TF × IDF scores ko Logistic Regression, Linear SVM ya fast keyword search mein use karein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — COMPUTING TF-IDF SCORES BY HAND',
    code: `import math

docs = [
    ["the", "laptop", "battery", "died"],
    ["the", "phone", "screen", "cracked"],
    ["the", "delivery", "was", "fast"],
]
N = len(docs)
for word in ["the", "battery"]:
    tf = docs[0].count(word) / len(docs[0])
    df = sum(1 for d in docs if word in d)
    idf = math.log(N / df)
    print(f"Word '{word:7s}' -> TF={tf:.2f}, IDF={idf:.2f}, TF-IDF={tf*idf:.2f}")`,
    codeOutput: `Word 'the    ' -> TF=0.25, IDF=0.00, TF-IDF=0.00
Word 'battery' -> TF=0.25, IDF=1.10, TF-IDF=0.27`,
    codeCaptionEn: '"the" appears in all 3 docs so its IDF becomes 0.00, while "battery" gets a strong 0.27 signal!',
    codeCaptionHi: '"the" teeno docs mein hai isliye uska score 0.00 ho gaya, jabki "battery" ko 0.27 ka strong score mila!',
    tableTitle: 'Bag-of-Words vs TF-IDF vs Modern Embeddings',
    tableHeaders: ['Method', 'Captures Word Importance?', 'Understands Synonyms ("car" ≈ "auto")?'],
    tableRows: [
      ['Bag-of-Words (BoW)', 'No (raw counts only)', 'No (treats words as unrelated IDs)'],
      ['TF-IDF', 'Yes (boosts rare topic words)', 'No (exact keyword match only)'],
      ['Dense Embeddings', 'Yes (contextual meaning)', 'Yes! Places synonyms close together'],
    ],
    tableNoteEn: 'Even in the LLM era, TF-IDF / BM25 is still paired with Vector Search in Hybrid RAG to nail exact product codes & names!',
    tableNoteHi: 'Aaj ke LLM zamane mein bhi Hybrid RAG search mein TF-IDF / BM25 use hota hai taaki exact product codes aur names miss na hon!',
    mistakeEn: 'Calling vectorizer.fit_transform() on the test set instead of only vectorizer.transform(), causing vocabulary leakage.',
    mistakeHi: 'Test set par fit_transform() chala dena jabki us par sirf transform() chalana chahiye.',
    proHabitEn: 'Always start text classification with a TF-IDF + Logistic Regression baseline—it trains in 1 second and often hits 85–90% accuracy.',
    proHabitHi: 'Text classification mein hamesha pehle TF-IDF + Logistic Regression baseline banayein—1 second mein 85–90% accuracy de deta hai.',
    jobUseEn: 'Powers blazing-fast spam filters, support ticket routing baselines, and Hybrid RAG keyword retrieval.',
    jobUseHi: 'Tez spam filters, ticket routing baselines aur Hybrid RAG keyword search mein TF-IDF roz use hota hai.',
    mcq1Question: 'Why does TF-IDF give the word "the" a score close to zero across a large document collection?',
    mcq1Correct: 'Because "the" appears in almost every document, making its Inverse Document Frequency (IDF) nearly zero',
    mcq1Wrongs: [
      'Because "the" has only 3 letters',
      'Because TF-IDF deletes all words starting with T',
      'Because "the" is a number',
    ],
    mcq1Explain: 'High document frequency pushes log(N / df) toward 0, automatically silencing ubiquitous filler words.',
    mcq2Question: 'What is a major limitation shared by BOTH Bag-of-Words and TF-IDF?',
    mcq2Correct: 'They ignore word order and do not recognize synonyms like "happy" and "joyful"',
    mcq2Wrongs: [
      'They require 8 NVIDIA H100 GPUs to run',
      'They only work on audio files',
      'They cannot count how many times a word appears',
    ],
    mcq2Explain: 'Both treat text as an unordered bag of independent tokens, missing semantic similarity and sequence order.',
    realWorldScenario:
      'You need a zero-cost, 5-millisecond spam classifier on a CPU server for 100,000 SMS messages.',
    interviewQ1: 'Why is Hybrid Search (BM25/TF-IDF + Vector Embeddings) better than pure Vector Search in RAG?',
    interviewA1:
      'Vector embeddings capture semantic meaning ("laptop power issue" ≈ "battery"), whereas BM25/TF-IDF excels at exact lexical matches like SKU numbers ("SKU-9941X"), error codes, or rare proper nouns. Combining both gives best-in-class retrieval.',
    interviewQ2: 'How can n-grams (like bigrams) slightly improve a TF-IDF classifier?',
    interviewA2:
      'Setting ngram_range=(1, 2) lets TF-IDF treat 2-word phrases like "not good" or "credit card" as single features, recovering local negation and phrase meaning without needing a deep neural network.',
  },
  {
    id: 301,
    modNum: 28,
    modTitle: 'NLP, Transformers and Large Language Models',
    topicNumInMod: 5,
    title: 'Word Embeddings',
    subtitle: 'TURNING WORDS INTO DENSE MEANING COORDINATES IN SPACE',
    coreEn:
      'Word Embeddings represent words as compact lists of continuous numbers (dense vectors) learned from massive text so that words with similar meanings ("king" & "queen", "dog" & "puppy") sit close together in geometric space.',
    coreHi:
      'Word Embeddings har word ko continuous numbers ki ek smart list (dense vector) mein badal deti hain jisse milte-julte matlab wale words ("king" & "queen", "dog" & "puppy") geometry space mein ek-doosre ke paas baithte hain.',
    analogyTitle: 'Supermarket Aisle Map of Meaning',
    analogyEn:
      'In a well-organized supermarket, apples, bananas, and mangoes sit in the same aisle (Fruits), far from soap and shampoo. Word Embeddings give every word GPS coordinates on a giant supermarket map of meaning!',
    analogyHi:
      'Ek achhe supermarket mein seb, kela aur aam ek hi aisle (Fruits) mein paas-paas rakhe hote hain, sabun aur shampoo se door. Word Embeddings har shabd ko meaning ke isi map par GPS coordinates deti hain!',
    steps: [
      {
        title: 'Observe Context Neighbors',
        en: 'Words that appear in similar sentences ("The ___ barked") learn similar vector coordinates.',
        hi: 'Jo words ek jaise sentences mein aate hain ("The ___ barked") unhe milte-julte vectors milte hain.',
        tone: 'sky',
      },
      {
        title: 'Compress Sparse IDs to Dense Vectors',
        en: 'Replace a 50,000-wide one-hot vector with a compact 300-D or 768-D dense embedding.',
        hi: '50,000 size ke sparse one-hot vector ko chhote 300-D ya 768-D dense vector mein badlein.',
        tone: 'amber',
      },
      {
        title: 'Encode Semantic Relationships',
        en: 'Directions in space capture concepts: Vector("King") - Vector("Man") + Vector("Woman") ≈ Vector("Queen")!',
        hi: 'Space ki directions concepts seekh leti hain: King - Man + Woman ≈ Queen!',
        tone: 'lavender',
      },
      {
        title: 'Upgrade to Contextual Embeddings',
        en: 'Modern Transformers shift a word’s vector based on its sentence ("river bank" vs "bank loan").',
        hi: 'Modern Transformers sentence ke hisaab se vector badal dete hain ("river bank" alag, "bank loan" alag).',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — FAMOUS KING - MAN + WOMAN ≈ QUEEN VECTOR ARITHMETIC',
    code: `# Toy 3D embeddings: [Royalty, Masculinity, Femininity]
king  = [0.95, 0.90, 0.10]
man   = [0.10, 0.90, 0.10]
woman = [0.10, 0.10, 0.90]
queen = [0.95, 0.10, 0.90]

result = [round(k - m + w, 2) for k, m, w in zip(king, man, woman)]
print("King - Man + Woman =", result)
print("Actual Queen       =", queen)`,
    codeOutput: `King - Man + Woman = [0.95, 0.1, 0.9]
Actual Queen       = [0.95, 0.1, 0.9]`,
    codeCaptionEn: 'Because meaning is encoded as geometric directions, vector arithmetic captures analogies automatically!',
    codeCaptionHi: 'Kyunki meaning geometric directions mein chhupa hota hai, simple jod-ghataav se analogies khud nikal aati hain!',
    tableTitle: 'Static Embeddings vs Contextual Transformer Embeddings',
    tableHeaders: ['Feature', 'Static (Word2Vec / GloVe)', 'Contextual (BERT / OpenAI / Gemini)'],
    tableRows: [
      ['Vectors per Word', '1 fixed vector forever', 'Changes dynamically per sentence'],
      ['"Apple" (fruit vs company)', 'Same blended vector (confused)', 'Two distinct vectors by context!'],
      ['Best For', 'Fast lightweight similarity', 'Semantic search, RAG, modern NLP'],
    ],
    tableNoteEn: 'Every modern LLM starts with an Embedding Layer that converts input token IDs into dense meaning vectors.',
    tableNoteHi: 'Har modern LLM ki sabse pehli layer Embedding Layer hoti hai jo token IDs ko meaning vectors mein badalti hai.',
    mistakeEn: 'Thinking one-hot encoding captures similarity—in one-hot space, "dog" is just as far from "puppy" as from "refrigerator".',
    mistakeHi: 'Ye samajhna ki one-hot encoding similarity batati hai—one-hot mein "dog" aur "puppy" ke beech 0% similarity hoti hai.',
    proHabitEn: 'Use pretrained contextual embeddings (e.g., Sentence-Transformers or API embeddings) instead of training Word2Vec from scratch.',
    proHabitHi: 'Scratch se Word2Vec train karne ke bajaye pretrained contextual embeddings (Sentence-Transformers / API) use karein.',
    jobUseEn: 'Embeddings power Spotify song recommendations, Amazon product search, resume matching, and RAG knowledge bases.',
    jobUseHi: 'Spotify song suggestions, Amazon search, resume matching aur RAG systems sab embeddings ke bharose chalte hain.',
    mcq1Question: 'What is the core idea behind Word Embeddings?',
    mcq1Correct: 'Representing words as dense numeric vectors where semantically similar words lie close together in space',
    mcq1Wrongs: [
      'Sorting words alphabetically into a text file',
      'Counting how many vowels each word contains',
      'Deleting all rare words from the dictionary',
    ],
    mcq1Explain: 'Dense embeddings capture semantic proximity so models generalize across synonyms and related concepts.',
    mcq2Question: 'How do Contextual Embeddings (BERT/Transformers) improve upon Static Embeddings (Word2Vec)?',
    mcq2Correct: 'They generate a different vector for the same word depending on its surrounding sentence context',
    mcq2Wrongs: [
      'They assign every word the exact same vector [1, 1, 1]',
      'They remove all numbers from the vector',
      'They only work for single-word inputs',
    ],
    mcq2Explain: 'Contextual embeddings disambiguate polysemous words like "bank" (finance vs river) using self-attention.',
    realWorldScenario:
      'Users search your e-commerce app for "running shoes", but products titled "jogging sneakers" never show up under keyword search.',
    interviewQ1: 'What is the Distributional Hypothesis behind Word2Vec?',
    interviewA1:
      '"You shall know a word by the company it keeps." Word2Vec trains a shallow network to predict a word from its neighbors (CBOW) or neighbors from a word (Skip-gram), naturally clustering words used in similar contexts.',
    interviewQ2: 'Why are embeddings called "dense" vectors while one-hot encodings are called "sparse"?',
    interviewA2:
      'A one-hot vector over a 50,000-word vocabulary has 49,999 zeros and a single 1 (sparse, wasteful). An embedding has ~384–1,536 non-zero floating-point values (dense, rich with meaning).',
  },
  {
    id: 302,
    modNum: 28,
    modTitle: 'NLP, Transformers and Large Language Models',
    topicNumInMod: 6,
    title: 'Semantic Similarity',
    subtitle: 'MEASURING HOW CLOSE TWO IDEAS ARE USING COSINE SIMILARITY',
    coreEn:
      'Semantic Similarity measures how closely two pieces of text match in actual meaning—even when they share zero exact words—by comparing the angle between their embedding vectors using Cosine Similarity.',
    coreHi:
      'Semantic Similarity naapti hai ki do sentences ka asli matlab kitna milta-julta hai—chahe unmein ek bhi word common na ho—unke embedding vectors ke beech ka angle (Cosine Similarity) check karke.',
    analogyTitle: 'Two Compass Needles Pointing in the Same Direction',
    analogyEn:
      'If two compass arrows point in the exact same direction (angle 0°), Cosine Similarity is 1.0 (identical meaning). At 90° apart, it is 0.0 (unrelated). Pointing opposite (180°), it is -1.0!',
    analogyHi:
      'Agar do compass ki suiyan ek hi disha mein point karein (0° angle), toh Cosine Similarity 1.0 hai (same matlab). 90° par 0.0 (koi rishta nahi), aur bilkul ulta (180°) par -1.0!',
    steps: [
      {
        title: 'Embed Both Texts',
        en: 'Convert Query A and Document B into dense embedding vectors using the exact same model.',
        hi: 'Query A aur Document B dono ko ek hi embedding model se dense vectors mein badlein.',
        tone: 'sky',
      },
      {
        title: 'Compute Dot Product & Norms',
        en: 'Calculate cosine_sim(A, B) = (A · B) / (||A|| * ||B||).',
        hi: 'Formula lagayein: cosine_sim(A, B) = (A · B) / (||A|| * ||B||).',
        tone: 'amber',
      },
      {
        title: 'Rank Candidates by Score',
        en: 'Sort documents from highest similarity (closest to 1.0) to lowest.',
        hi: 'Saare documents ko highest similarity score (1.0 ke sabse paas) se neeche sort karein.',
        tone: 'lavender',
      },
      {
        title: 'Apply Relevance Threshold',
        en: 'Filter out low-similarity matches (e.g., < 0.65) so irrelevant chunks are not returned.',
        hi: 'Kam score wale matches (jaise < 0.65) filter kar dein taaki bekar results na aayein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — COSINE SIMILARITY BETWEEN TWO TEXT VECTORS',
    code: `import math

def cosine_sim(a, b):
    dot = sum(x * y for x, y in zip(a, b))
    norm_a = math.sqrt(sum(x * x for x in a))
    norm_b = math.sqrt(sum(y * y for y in b))
    return round(dot / (norm_a * norm_b), 3)

v_refund  = [0.9, 0.8, 0.1]  # "How do I get my money back?"
v_return  = [0.85, 0.82, 0.12] # "Refund and return policy"
v_weather = [0.05, 0.1, 0.95]  # "Will it rain tomorrow?"

print("Refund vs Return Policy:", cosine_sim(v_refund, v_return))
print("Refund vs Weather:      ", cosine_sim(v_refund, v_weather))`,
    codeOutput: `Refund vs Return Policy: 0.999
Refund vs Weather:       0.193`,
    codeCaptionEn: '"Get my money back" and "Refund policy" score 0.999 despite sharing almost no exact keywords!',
    codeCaptionHi: '"Get my money back" aur "Refund policy" mein words alag hain, phir bhi meaning match 0.999 aaya!',
    tableTitle: 'Interpreting Cosine Similarity Scores',
    tableHeaders: ['Cosine Score', 'Vector Angle', 'What It Means for Text'],
    tableRows: [
      ['0.85 – 1.00', 'Nearly 0°', 'Near-duplicate or strongly matching meaning'],
      ['0.60 – 0.84', 'Small angle', 'Topically related / likely relevant'],
      ['0.00 – 0.30', 'Near 90°', 'Unrelated topics'],
      ['-1.00', '180° opposite', 'Directly opposite vector orientation'],
    ],
    tableNoteEn: 'Why Cosine over Euclidean distance? Cosine ignores vector length (document length) and focuses purely on direction (topic/meaning).',
    tableNoteHi: 'Euclidean ke bajaye Cosine kyun? Kyunki Cosine document ki lambai ignore karke sirf disha (asli topic/meaning) dekhta hai.',
    mistakeEn: 'Comparing embeddings generated by two DIFFERENT models (e.g., Model A for query and Model B for database)—their vector spaces are incompatible!',
    mistakeHi: 'Query ke liye Model A aur database ke liye Model B ka embedding compare karna—dono ke coordinate maps bilkul alag hote hain!',
    proHabitEn: 'Always normalize embeddings to unit length (so dot product == cosine similarity) and enforce one consistent embedding model version.',
    proHabitHi: 'Embeddings ko unit length par normalize rakhein aur query + database dono ke liye exact same embedding model version use karein.',
    jobUseEn: 'Drives FAQ auto-matching, duplicate ticket detection, resume-to-job ranking, and every RAG retrieval engine.',
    jobUseHi: 'FAQ auto-matching, duplicate ticket pakadne, resume-job matching aur har RAG search engine ka dil Semantic Similarity hai.',
    mcq1Question: 'Why is Cosine Similarity preferred over simple keyword overlap for semantic search?',
    mcq1Correct: 'It matches texts with the same meaning even when they use completely different synonyms',
    mcq1Wrongs: [
      'It only matches identical spelling character-by-character',
      'It always returns 1.0 for every pair of sentences',
      'It ignores embeddings completely',
    ],
    mcq1Explain: 'Cosine similarity compares dense meaning vectors, recognizing that "money back" and "refund" point in the same semantic direction.',
    mcq2Question: 'What happens if you embed your documents with OpenAI embeddings and embed user queries with a different Hugging Face model?',
    mcq2Correct: 'Similarity scores become meaningless garbage because the two models have different vector spaces',
    mcq2Wrongs: [
      'Accuracy automatically doubles',
      'Cosine similarity always equals 0.99',
      'The database merges both models automatically',
    ],
    mcq2Explain: 'Every embedding model defines its own coordinate space; queries and documents must always use the exact same model.',
    realWorldScenario:
      'Your customer support bot fails to link "My card was charged twice" to the help article titled "Duplicate billing resolution".',
    interviewQ1: 'When are Dot Product and Cosine Similarity mathematically identical?',
    interviewA1:
      'When all embedding vectors are L2-normalized to unit length (||v|| = 1). Many vector databases normalize vectors on insert so they can use ultra-fast dot products to compute exact cosine similarity.',
    interviewQ2: 'Can two opposite sentences like "I love this phone" and "I hate this phone" still have high cosine similarity?',
    interviewA2:
      'Yes! Because both are about phone reviews, general semantic embeddings may place them moderately close (~0.75). For sentiment or contradiction detection, you should use a cross-encoder reranker or sentiment classifier.',
  },
  {
    id: 303,
    modNum: 28,
    modTitle: 'NLP, Transformers and Large Language Models',
    topicNumInMod: 7,
    title: 'Attention Mechanism',
    subtitle: 'HOW AI FOCUSES ON THE MOST RELEVANT WORDS IN A SENTENCE',
    coreEn:
      'The Attention Mechanism (especially Self-Attention) allows a neural network to weigh every word in a sentence against every other word—dynamically focusing on the exact words needed to understand context, no matter how far apart they are.',
    coreHi:
      'Attention Mechanism (khaaskar Self-Attention) model ko ye shakti deta hai ki wo sentence ke har shabd ko baaki saare shabdon se compare kare aur samajhne ke liye sabse zaroori words par spotlight dale—chahe wo kitne hi door kyun na hon.',
    analogyTitle: 'Spotlight on Pronouns While Reading a Story',
    analogyEn:
      'Read: "The trophy did not fit in the suitcase because IT was too big." Your brain instantly shines a bright spotlight from "IT" straight back to "trophy" (not "suitcase")! Self-Attention computes those exact spotlight weights mathematically.',
    analogyHi:
      'Padhiye: "Trophy suitcase mein fit nahi hui kyunki WO bahut badi thi." Aapka dimag turant "WO" se seedha "Trophy" par spotlight daalta hai! Self-Attention bilkul yahi spotlight weights math se calculate karta hai.',
    steps: [
      {
        title: 'Create Query, Key, Value (Q, K, V)',
        en: 'Each word generates a Query ("what am I looking for?"), Key ("what do I offer?"), and Value ("my meaning").',
        hi: 'Har word 3 vectors banata hai: Query (mujhe kya chahiye?), Key (mere paas kya hai?), Value (mera asli matlab).',
        tone: 'sky',
      },
      {
        title: 'Score Relevance (Q · K)',
        en: 'Multiply each word’s Query against every other word’s Key and scale by √d_k to measure match strength.',
        hi: 'Har word ki Query ko baaki words ki Key se multiply karke match score nikalein.',
        tone: 'amber',
      },
      {
        title: 'Normalize with Softmax',
        en: 'Turn raw relevance scores into clean attention percentages that sum to 100% (e.g., 78% on "trophy").',
        hi: 'Scores par Softmax lagakar clean attention percentages banayein jo milkar 100% hon (jaise 78% "trophy" par).',
        tone: 'lavender',
      },
      {
        title: 'Blend Values into Context Vector',
        en: 'Compute the weighted sum of Values so "it" now carries the rich contextual meaning of "trophy"!',
        hi: 'Values ka weighted sum nikalein taaki "it" ke vector mein ab "trophy" ka poora context aa jaye!',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — MINI SELF-ATTENTION WEIGHTS DEMO',
    code: `import math

# Relevance scores of word "it" looking at ["trophy", "suitcase", "big"]
raw_scores = [4.2, 1.1, 2.0]
exps = [math.exp(s) for s in raw_scores]
weights = [round(e / sum(exps), 3) for e in exps]

for word, w in zip(["trophy", "suitcase", "big"], weights):
    print(f"Attention from 'it' -> {word:8s}: {w*100:.1f}%")`,
    codeOutput: `Attention from 'it' -> trophy  : 86.2%
Attention from 'it' -> suitcase: 3.9%
Attention from 'it' -> big     : 9.6%`,
    codeCaptionEn: 'Softmax turns raw Q·K scores into crisp attention weights—shining 86.2% of the spotlight onto "trophy"!',
    codeCaptionHi: 'Softmax raw scores ko clear attention weights bana deta hai—86.2% focus seedha "trophy" par!',
    tableTitle: 'Old RNNs vs Self-Attention Compared',
    tableHeaders: ['Property', 'Old Sequential RNN / LSTM', 'Self-Attention (Transformers)'],
    tableRows: [
      ['Reading Style', 'One word at a time (slow)', 'All words in parallel on GPU (fast!)'],
      ['Long-Range Memory', 'Forgets early words in long paragraphs', 'Direct 1-hop link between any two words'],
      ['Multi-Head Focus', 'Single hidden bottleneck', 'Multiple heads track grammar, pronouns & facts at once'],
    ],
    tableNoteEn: 'Multi-Head Attention simply runs several spotlights in parallel—one tracks grammar, another tracks pronouns, another tracks topic!',
    tableNoteHi: 'Multi-Head Attention mein kai spotlights ek saath chalti hain—ek grammar dekhti hai, ek pronouns, ek topic!',
    mistakeEn: 'Forgetting why Self-Attention gets expensive on huge documents: every token attends to every other token (quadratic O(N²) cost).',
    mistakeHi: 'Ye bhool jana ki Self-Attention mein har token baaki sabko dekhta hai, isliye bahut lambe documents par compute O(N²) tezi se badhta hai.',
    proHabitEn: 'Keep prompts concise and relevant—shorter context means sharper attention focus and lower latency/cost.',
    proHabitHi: 'Prompts ko crisp aur relevant rakhein—chhota aur saaf context attention ko sharp aur API ko sasta rakhta hai.',
    jobUseEn: 'Self-Attention is the single invention behind BERT, GPT, Gemini, Claude, Whisper, and modern Vision Transformers.',
    jobUseHi: 'BERT, GPT, Gemini, Claude aur Vision Transformers—sabke peeche ka main magic Self-Attention hi hai.',
    mcq1Question: 'In the Q, K, V formulation of Self-Attention, what do the attention weights (after Softmax) represent?',
    mcq1Correct: 'How much focus/importance each token should place on every other token in the sequence',
    mcq1Wrongs: [
      'The file size of each word in kilobytes',
      'The alphabetical rank of each word',
      'The number of epochs left in training',
    ],
    mcq1Explain: 'Softmax(Q·Kᵀ / √d_k) produces normalized probabilities controlling how much of each token’s Value gets blended.',
    mcq2Question: 'What major weakness of older RNNs did the Attention mechanism solve?',
    mcq2Correct: 'Slow sequential processing and forgetting information from earlier in long sequences',
    mcq2Wrongs: [
      'RNNs could not run on Python 3',
      'RNNs had zero weights',
      'RNNs only worked on JPEG images',
    ],
    mcq2Explain: 'Attention connects any two words directly in parallel, solving both long-range forgetting and GPU parallelization.',
    realWorldScenario:
      'A legal document analyzer must link a clause on Paragraph 1 ("The Vendor") to a penalty obligation ("they must pay 10%") 200 words later.',
    interviewQ1: 'Why do we divide Q·Kᵀ by √d_k in Scaled Dot-Product Attention?',
    interviewA1:
      'When vector dimension d_k is large, dot products grow very large in magnitude, pushing Softmax into flat saturated regions where gradients vanish. Dividing by √d_k keeps variance near 1 so gradients stay healthy.',
    interviewQ2: 'What is Causal (Masked) Self-Attention in GPT-style models?',
    interviewA2:
      'When generating text left-to-right, token #5 must NOT peek at future tokens #6, #7, etc. Causal masking sets future attention scores to -infinity before Softmax so their weights become exactly 0.',
  },
  {
    id: 304,
    modNum: 28,
    modTitle: 'NLP, Transformers and Large Language Models',
    topicNumInMod: 8,
    title: 'Transformer Architecture',
    subtitle: 'THE 2017 BLUEPRINT ("ATTENTION IS ALL YOU NEED") THAT LAUNCHED MODERN AI',
    coreEn:
      'The Transformer Architecture is a deep neural network built entirely around Multi-Head Self-Attention, Positional Encoding, Feed-Forward layers, Residual Skip Connections, and Layer Normalization—enabling massive parallel training on GPUs.',
    coreHi:
      'Transformer Architecture ek modern neural network blueprint hai jo Multi-Head Self-Attention, Positional Encoding, Feed-Forward layers, Skip Connections aur LayerNorm se bana hai—aur GPUs par super-fast parallel training karta hai.',
    analogyTitle: 'A Conference Room of Experts Working in Parallel',
    analogyEn:
      'An old RNN is like passing a single notebook around a table one person at a time. A Transformer is a conference room where every expert (token) wears a seat-number badge (Positional Encoding), listens to everyone at once (Self-Attention), reflects privately (Feed-Forward), and refines the group plan across multiple rounds (Layers)!',
    analogyHi:
      'Purana RNN ek table par ek-ek karke notebook pass karne jaisa tha. Transformer ek conference room hai jahan har expert (token) ke paas seat number (Positional Encoding) hai, sab ek saath ek-doosre ki baat sunte hain (Self-Attention), apna dimag lagate hain (Feed-Forward), aur kai rounds mein perfect plan banate hain!',
    steps: [
      {
        title: 'Embed Tokens + Add Position',
        en: 'Convert tokens to embeddings and add Positional Encoding so the model knows word order ("Dog bit man" ≠ "Man bit dog").',
        hi: 'Tokens ko embeddings banakar Positional Encoding jodein taaki model ko shabdon ka order pata rahe.',
        tone: 'sky',
      },
      {
        title: 'Multi-Head Self-Attention',
        en: 'Let every token gather rich context from all relevant tokens across multiple parallel attention heads.',
        hi: 'Multi-Head Self-Attention se har token poore sentence se apna zaroori context ikattha karta hai.',
        tone: 'amber',
      },
      {
        title: 'Add & LayerNorm + Feed-Forward',
        en: 'Use residual skip connections (x + sublayer(x)) and LayerNorm for stable deep gradients, then process via an MLP.',
        hi: 'Skip connections aur LayerNorm se training stable rakhein, phir Feed-Forward MLP se information refine karein.',
        tone: 'lavender',
      },
      {
        title: 'Stack N Blocks & Output',
        en: 'Repeat this Transformer block 12 to 100+ times, then project to final task logits or next-token probabilities.',
        hi: 'Isi Transformer block ko 12 se 100+ baar stack karein aur aakhir mein prediction ya next word nikalein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / PYTORCH — BUILT-IN TRANSFORMER ENCODER LAYER',
    code: `import torch, torch.nn as nn

# 1 Transformer block: embedding dim=64, 4 attention heads
block = nn.TransformerEncoderLayer(d_model=64, nhead=4, batch_first=True)

# Batch of 2 sentences, each 10 tokens long, 64-D embeddings
x = torch.randn(2, 10, 64)
out = block(x)
print("Input shape:", tuple(x.shape), "-> Output shape:", tuple(out.shape))`,
    codeOutput: 'Input shape: (2, 10, 64) -> Output shape: (2, 10, 64)',
    codeCaptionEn: 'Notice input and output have the exact same shape (2, 10, 64)—so you can stack 12 or 96 blocks effortlessly!',
    codeCaptionHi: 'Dekhiye input aur output ka shape bilkul same (2, 10, 64) hai—isliye aise 12 ya 96 blocks ek ke upar ek lagana super easy hai!',
    tableTitle: 'Key Ingredients Inside Every Transformer Block',
    tableHeaders: ['Component', 'Job Inside the Block', 'What Breaks Without It?'],
    tableRows: [
      ['Positional Encoding', 'Injects word order (1st, 2nd, 3rd...)', 'Model treats sentence like an unordered bag!'],
      ['Multi-Head Self-Attention', 'Mixes context across tokens', 'Words cannot communicate with each other'],
      ['Feed-Forward Network (MLP)', 'Applies non-linear knowledge processing per token', 'Low reasoning capacity'],
      ['Residual Skip + LayerNorm', 'Keeps signal & gradients clean across 100 layers', 'Deep networks fail to train (vanishing gradients)'],
    ],
    tableNoteEn: 'Because Transformers process all tokens in parallel, they unlocked scaling laws—training on trillions of web tokens!',
    tableNoteHi: 'Parallel processing ki wajah se hi Transformers ko trillions of tokens par scale karke aaj ke LLMs banana mumkin hua!',
    mistakeEn: 'Thinking Self-Attention automatically knows word order—without Positional Encoding, attention is completely order-blind!',
    mistakeHi: 'Ye sochna ki Self-Attention ko word order khud pata hota hai—bina Positional Encoding ke attention order nahi pehchanta!',
    proHabitEn: 'Understand the 4-part Transformer block diagram deeply—almost every modern AI interview asks you to trace it.',
    proHabitHi: 'Transformer block ke 4 main parts achhe se samajh lein—lagbhag har modern AI interview mein ye poocha jata hai.',
    jobUseEn: 'Transformers are the universal backbone of ChatGPT, Gemini, Claude, Hugging Face NLP, AlphaFold, and Vision Transformers.',
    jobUseHi: 'ChatGPT, Gemini, Claude, Hugging Face aur Vision Transformers—aaj ki poori AI industry Transformers par khadi hai.',
    mcq1Question: 'Why does a Transformer need Positional Encoding?',
    mcq1Correct: 'Because Self-Attention processes all tokens in parallel and has no built-in sense of word order',
    mcq1Wrongs: [
      'To translate Python into C++',
      'To compress JPEG photos',
      'To randomly shuffle words before output',
    ],
    mcq1Explain: 'Without positional signals (sinusoidal or RoPE), "cat chased mouse" and "mouse chased cat" look identical to Self-Attention.',
    mcq2Question: 'What role do Residual Skip Connections (`x + Sublayer(x)`) play inside a deep Transformer?',
    mcq2Correct: 'They let gradients flow cleanly through dozens of stacked layers without vanishing',
    mcq2Wrongs: [
      'They skip loading the input dataset',
      'They delete half the attention heads',
      'They turn off GPU acceleration',
    ],
    mcq2Explain: 'Residual connections create a highway for gradients, enabling stable training of 32 to 100+ stacked Transformer layers.',
    realWorldScenario:
      'An interviewer draws a blank box labeled "Transformer Block" on a whiteboard and asks you to fill in the 4 core components and explain why each exists.',
    interviewQ1: 'Why did Transformers replace RNNs/LSTMs so completely for large-scale language modeling?',
    interviewA1:
      'RNNs must process tokens strictly sequentially (token t waits for t-1), blocking GPU parallelism and suffering from long-range memory decay. Transformers process entire sequences in parallel with direct O(1) path length between any two words, scaling cleanly to billions of parameters.',
    interviewQ2: 'What is RoPE (Rotary Position Embedding) used in modern LLMs like Llama and Gemma?',
    interviewA2:
      'Instead of adding fixed positional vectors at the input, RoPE rotates Query and Key vectors by an angle proportional to token position—naturally encoding relative distances between words and generalizing better to longer contexts.',
  },
  {
    id: 305,
    modNum: 28,
    modTitle: 'NLP, Transformers and Large Language Models',
    topicNumInMod: 9,
    title: 'Encoder and Decoder Concepts',
    subtitle: 'UNDERSTANDING INPUTS (ENCODER) VS GENERATING OUTPUTS (DECODER)',
    coreEn:
      'In Transformer models, an Encoder reads the entire input bidirectionally to build deep understanding (like BERT for search & classification), while a Decoder generates new text one token at a time using causal left-to-right attention (like GPT, Llama, and Claude).',
    coreHi:
      'Transformers mein Encoder poore input ko dono taraf (left aur right) se padh kar gehri samajh banata hai (jaise BERT — search & classification), jabki Decoder ek-ek word aage generate karta hai (jaise GPT, Llama, Claude).',
    analogyTitle: 'Listening Carefully vs Speaking Word by Word',
    analogyEn:
      'When reading a contract to classify risk (Encoder), you can glance forward and backward across the whole page. When speaking an answer aloud (Decoder), you generate one word after another based only on what you already said!',
    analogyHi:
      'Contract padh kar risk samajhte waqt (Encoder) aap poore page par aage-peeche kahin bhi dekh sakte hain. Par bolkar jawab dete waqt (Decoder) aap ek-ek shabd aage bolte hain, sirf pehle bole gaye shabdon ke aadhar par!',
    steps: [
      {
        title: 'Encoder-Only (Bidirectional Reader)',
        en: 'Every token attends to both left and right neighbors—ideal for embeddings, classification, and NER.',
        hi: 'Har word apne left aur right dono taraf dekh sakta hai—embeddings, classification aur NER ke liye best.',
        tone: 'sky',
      },
      {
        title: 'Decoder-Only (Autoregressive Writer)',
        en: 'Uses causal masking (looks left only) to predict the next token repeatedly—powers modern Chat LLMs.',
        hi: 'Sirf peeche (left) dekh kar agla word predict karta hai—ChatGPT, Gemini aur Claude isi par chalte hain.',
        tone: 'amber',
      },
      {
        title: 'Encoder-Decoder (Seq2Seq Translator)',
        en: 'Encoder reads source language fully; Decoder attends to it via Cross-Attention to write target language.',
        hi: 'Encoder poora source sentence samajhta hai aur Decoder Cross-Attention se uska translation ya summary likhta hai.',
        tone: 'lavender',
      },
      {
        title: 'Match Family to Your Job Task',
        en: 'Pick Encoder for fast search/tagging; pick Decoder LLM for chat, coding, and reasoning.',
        hi: 'Fast search aur tagging ke liye Encoder chunein; chat, coding aur writing ke liye Decoder LLM.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — SIMULATING AUTOREGRESSIVE DECODER GENERATION',
    code: `prompt = ["Data", "Science", "is"]
next_token_table = {
    "is": "very",
    "very": "exciting",
    "exciting": "!"
}
for _ in range(3):
    next_tok = next_token_table[prompt[-1]]
    prompt.append(next_tok)
    print("Generated so far:", " ".join(prompt))`,
    codeOutput: `Generated so far: Data Science is very
Generated so far: Data Science is very exciting
Generated so far: Data Science is very exciting !`,
    codeCaptionEn: 'A Decoder generates one token, appends it to the input, and repeats—that is why LLM replies stream word by word!',
    codeCaptionHi: 'Decoder ek token banata hai, use prompt mein jodta hai aur repeat karta hai—isi wajah se LLM ka jawab word-by-word stream hota hai!',
    tableTitle: 'The Three Transformer Families & Famous Models',
    tableHeaders: ['Architecture Family', 'Attention Type', 'Famous Models', 'Best Use Cases'],
    tableRows: [
      ['Encoder-Only', 'Bidirectional (sees full text)', 'BERT, RoBERTa, BGE', 'Embeddings, search, sentiment, NER'],
      ['Decoder-Only', 'Causal (sees left only)', 'GPT, Llama, Claude, Gemma', 'Chat, code gen, reasoning, agents'],
      ['Encoder-Decoder', 'Bidirectional + Cross-Attention', 'T5, BART, Whisper', 'Translation, speech-to-text, seq2seq'],
    ],
    tableNoteEn: 'In a RAG system, you actually use BOTH: an Encoder model creates search embeddings, and a Decoder LLM writes the final answer!',
    tableNoteHi: 'Ek RAG system mein DONO use hote hain: Encoder search ke liye embeddings banata hai, aur Decoder LLM final answer likhta hai!',
    mistakeEn: 'Using a giant expensive Decoder LLM for simple high-volume sentiment tagging when a tiny fast BERT Encoder costs 50x less.',
    mistakeHi: 'Simple bulk sentiment tagging ke liye mehenga Decoder LLM chalana jabki chhota fast BERT Encoder 50x saste mein kaam kar de.',
    proHabitEn: 'Know when to deploy a lightweight Encoder (BERT/MiniLM) for embeddings/classification vs a Decoder LLM for open-ended generation.',
    proHabitHi: 'Embeddings aur fast classification ke liye halka Encoder (BERT/MiniLM) aur generation/reasoning ke liye Decoder LLM chunein.',
    jobUseEn: 'AI Architects pair fast Encoder embedding models with smart Decoder LLMs to build cost-effective enterprise GenAI apps.',
    jobUseHi: 'AI Architects saste aur fast Encoder models ko smart Decoder LLMs ke saath jodkar scalable GenAI apps banate hain.',
    mcq1Question: 'Which Transformer family is BERT, and what is it best suited for?',
    mcq1Correct: 'Encoder-Only — best for bidirectional understanding tasks like embeddings, classification, and NER',
    mcq1Wrongs: [
      'Decoder-Only — best for generating 10-page novels',
      'CNN-Only — best for resizing PNG images',
      'SQL-Only — best for joining tables',
    ],
    mcq1Explain: 'BERT uses bidirectional self-attention across the full input, excelling at representation and classification.',
    mcq2Question: 'Why do GPT and Llama use Decoder-Only causal masking?',
    mcq2Correct: 'So each token can only attend to earlier tokens, enabling step-by-step next-token text generation',
    mcq2Wrongs: [
      'Because causal masks delete all vowels',
      'To prevent the model from reading the prompt',
      'Because GPUs cannot run bidirectional attention',
    ],
    mcq2Explain: 'Causal masking prevents peeking at future tokens during training and aligns perfectly with autoregressive generation.',
    realWorldScenario:
      'Your company needs to classify 2 million product reviews daily on a tight budget AND offer a customer-facing chat assistant.',
    interviewQ1: 'What is Cross-Attention in an Encoder-Decoder model like T5 or Whisper?',
    interviewA1:
      'In Cross-Attention, the Decoder provides the Queries (what it wants to write next), while the Encoder provides the Keys and Values (the encoded source sentence or audio)—letting the Decoder pull exact source details while generating.',
    interviewQ2: 'Why did Decoder-Only models become dominant for general-purpose LLMs over Encoder-Decoder models?',
    interviewA2:
      'Decoder-Only architectures have a single uniform stack of weights that scales cleanly with massive pretraining data and handles any task (translation, Q&A, coding, summarization) purely through in-context prompting without rigid input/output boundaries.',
  },
  {
    id: 306,
    modNum: 28,
    modTitle: 'NLP, Transformers and Large Language Models',
    topicNumInMod: 10,
    title: 'What Is a Large Language Model?',
    subtitle: 'NEXT-TOKEN PREDICTION AT MASSIVE SCALE THAT UNLOCKS REASONING',
    coreEn:
      'A Large Language Model (LLM) is a massive Transformer neural network (billions of parameters) trained on trillions of words to predict the next token, then fine-tuned with human feedback (SFT & RLHF) to follow instructions helpfully and safely.',
    coreHi:
      'Large Language Model (LLM) ek bahut bada Transformer network (billions parameters) hai jo trillions words padh kar agla shabd predict karna seekhta hai, aur phir human feedback (SFT & RLHF) se helpful aur safe assistant banta hai.',
    analogyTitle: 'A Brilliant Scholar Who Read the Whole Library',
    analogyEn:
      'First, the scholar reads every book, textbook, and website in the library (Pretraining) to master language, facts, and code. Then a coach trains them how to answer politely, step-by-step, and refuse harmful requests (Post-training / Alignment)!',
    analogyHi:
      'Pehle ek student poori library ki kitabein, code aur articles padh kar bhasha aur gyaan seekhta hai (Pretraining). Phir ek mentor use sikhata hai ki politely, step-by-step aur safe tareeke se jawab kaise dena hai (Alignment / RLHF)!',
    steps: [
      {
        title: 'Stage 1: Self-Supervised Pretraining',
        en: 'Predict the next token across trillions of web/book/code tokens—creating a raw Base Model.',
        hi: 'Trillions tokens par agla shabd predict karke ek knowledgeable Base Model train hota hai.',
        tone: 'sky',
      },
      {
        title: 'Stage 2: Instruction Fine-Tuning (SFT)',
        en: 'Train on curated Prompt → Ideal Answer pairs so the model learns to answer questions instead of rambling.',
        hi: 'Sahi Prompt → Answer examples par train karke model ko instructions follow karna sikhaya jata hai.',
        tone: 'amber',
      },
      {
        title: 'Stage 3: Preference Alignment (RLHF/DPO)',
        en: 'Rank better vs worse replies so the model becomes helpful, honest, and harmless.',
        hi: 'Human/AI preferences se model ko zyada helpful, honest aur safe banaya jata hai (RLHF / DPO).',
        tone: 'lavender',
      },
      {
        title: 'Stage 4: Live Inference via Prompting',
        en: 'Users interact in plain English/Hinglish to draft, code, analyze, and power AI agents.',
        hi: 'Users seedha plain language mein prompt dekar coding, analysis aur AI agents chala sakte hain.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — HOW AN LLM PICKS THE NEXT TOKEN FROM PROBABILITIES',
    code: `# Prompt: "The capital of India is"
next_token_probs = {
    "New": 0.72,
    "Delhi": 0.21,
    "located": 0.05,
    "banana": 0.0001
}
best_token = max(next_token_probs, key=next_token_probs.get)
print("Top predicted next token:", best_token, f"({next_token_probs[best_token]*100:.0f}%)")`,
    codeOutput: 'Top predicted next token: New (72%)',
    codeCaptionEn: 'At its core, an LLM outputs a probability distribution over its entire vocabulary at every single token step.',
    codeCaptionHi: 'Asliyat mein LLM har step par apni poori vocabulary ke har token ki probability nikal kar sabse sahi token chunta hai.',
    tableTitle: 'From Raw Base Model to Chat Assistant',
    tableHeaders: ['Stage', 'Input Example: "Explain gravity"', 'Typical Model Behavior'],
    tableRows: [
      ['Base Model (Pretrained)', '"Explain gravity"', 'May continue: "...to a 5th grader. Question 2: Explain friction..."'],
      ['SFT (Instruction-Tuned)', '"Explain gravity"', 'Directly writes a clear, structured explanation'],
      ['Aligned (RLHF / DPO)', '"Explain gravity"', 'Clear, accurate, friendly, and safely refuses harmful requests'],
    ],
    tableNoteEn: 'Parameter count (e.g., 7B, 70B) means the number of learned weights—more parameters generally hold more knowledge and reasoning, at higher GPU cost.',
    tableNoteHi: '7B ya 70B parameters ka matlab hai model ke andar seekhe hue weights ki ginti—zyada parameters matlab zyada capacity, par zyada GPU kharch.',
    mistakeEn: 'Thinking an LLM searches a live database of verified facts in its head—it actually predicts probable continuations from frozen weights!',
    mistakeHi: 'Ye samajhna ki LLM ke andar live Google search ya verified database hai—wo apne frozen weights se probable words predict karta hai!',
    proHabitEn: 'Match model size to task: use fast small models (8B / Flash / Mini) for routine tasks and frontier models for complex reasoning.',
    proHabitHi: 'Har kaam ke liye sahi size ka model chunein: routine tasks ke liye fast chhote models aur mushkil reasoning ke liye bade models.',
    jobUseEn: 'LLMs power coding copilots, customer support agents, contract analyzers, and automated analytics across every industry.',
    jobUseHi: 'Coding copilots, support agents, document analysis aur business automation—har industry mein LLMs core tool ban chuke hain.',
    mcq1Question: 'What is the fundamental objective used during the massive Pretraining phase of an LLM?',
    mcq1Correct: 'Predicting the next token given all previous tokens in a sequence',
    mcq1Wrongs: [
      'Sorting Excel columns in ascending order',
      'Detecting bounding boxes in CCTV videos',
      'Memorizing SQL passwords',
    ],
    mcq1Explain: 'Next-token prediction across trillions of tokens forces the model to internalize grammar, world facts, logic, and code.',
    mcq2Question: 'What is the purpose of Instruction Fine-Tuning (SFT) and RLHF/DPO after pretraining?',
    mcq2Correct: 'To turn a raw text-completing Base Model into a helpful, instruction-following, safe chat assistant',
    mcq2Wrongs: [
      'To shrink the vocabulary to 10 words',
      'To remove the Transformer attention layers',
      'To make the model ignore user prompts',
    ],
    mcq2Explain: 'Post-training aligns the raw base model with human conversational expectations and safety guidelines.',
    realWorldScenario:
      'Your startup wants to pick between an open-weights 8B model hosted locally vs a frontier cloud LLM API for a healthcare chatbot.',
    interviewQ1: 'What is the difference between Open-Weights LLMs (like Llama/Gemma/Qwen) and Closed API LLMs (like GPT/Claude/Gemini)?',
    interviewA1:
      'Open-weights models let you download and host weights on your own private GPUs for full data privacy, custom fine-tuning, and predictable cost at scale. Closed API models offer top frontier reasoning with zero infrastructure maintenance.',
    interviewQ2: 'What are "emergent capabilities" or Scaling Laws in LLMs?',
    interviewA2:
      'Chinchilla/Kaplan scaling laws showed that smoothly increasing model parameters, training tokens, and compute predictably reduces loss—and above certain scales, models begin performing multi-step reasoning, coding, and few-shot learning reliably.',
  },
  {
    id: 307,
    modNum: 28,
    modTitle: 'NLP, Transformers and Large Language Models',
    topicNumInMod: 11,
    title: 'Tokens and Context Windows',
    subtitle: 'THE MODEL’S WORKING MEMORY DESK—SIZE, COST, AND LIMITS',
    coreEn:
      'A Context Window is the maximum number of tokens (input prompt + conversation history + retrieved documents + generated reply) an LLM can hold in its working memory at one time; anything beyond that limit gets cut off or forgotten.',
    coreHi:
      'Context Window LLM ka working memory desk hai—ye batata hai ki ek baar mein model kitne max tokens (prompt + purani chat + documents + naya reply) dekh sakta hai. Is limit ke bahar ka text kat jata hai ya bhool jata hai.',
    analogyTitle: 'Size of a Student’s Study Desk During an Open-Book Exam',
    analogyEn:
      'An 8K context window is a small school desk that holds ~15 pages. A 1M token context window is a huge library table that holds entire codebases or books! Anything that falls off the desk simply cannot be seen while writing the answer.',
    analogyHi:
      '8K context window ek chhoti desk hai jis par ~15 pages aate hain. 1M token context window ek badi library table hai jis par poori kitabein aur codebase aa jaye! Jo page table se neeche gir gaya, model use nahi dekh sakta.',
    steps: [
      {
        title: 'Count All Token Sources',
        en: 'Total context = System Prompt + Chat History + RAG Chunks + User Question + Max Output Tokens.',
        hi: 'Total tokens = System Prompt + Chat History + RAG Docs + User Question + Output Reply.',
        tone: 'sky',
      },
      {
        title: 'Check Model Context Limit',
        en: 'Verify your model’s limit (e.g., 32K, 128K, 1M tokens) so requests never fail with ContextLengthExceeded.',
        hi: 'Model ki limit (32K, 128K, 1M tokens) check karein taaki request error dekar fail na ho.',
        tone: 'amber',
      },
      {
        title: 'Watch Cost & "Lost in the Middle"',
        en: 'Stuffing 100K noisy tokens costs more, slows replies, and can bury key facts in the middle.',
        hi: '100K bekar tokens bharne se bill badhta hai, speed ghat-ti hai aur beech ke facts miss ho sakte hain.',
        tone: 'lavender',
      },
      {
        title: 'Manage Memory Smartly',
        en: 'Use RAG retrieval, summarize older chat turns, and keep only high-signal context on the desk.',
        hi: 'RAG se sirf relevant chunks layein aur purani chat ko summarize karke context desk saaf rakhein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — CONTEXT WINDOW BUDGET CALCULATOR',
    code: `context_limit = 8192
system_tokens = 400
chat_history_tokens = 2500
rag_chunks_tokens = 3800
reserved_output = 1000

used = system_tokens + chat_history_tokens + rag_chunks_tokens + reserved_output
remaining = context_limit - used
print(f"Budget Used: {used}/{context_limit} | Safe Room Left: {remaining} tokens")`,
    codeOutput: 'Budget Used: 7700/8192 | Safe Room Left: 492 tokens',
    codeCaptionEn: 'Always reserve space for the model’s generated reply—otherwise the answer gets truncated mid-sentence!',
    codeCaptionHi: 'Hamesha output reply ke liye tokens reserve rakhein—warna model ka jawab beech sentence mein kat jayega!',
    tableTitle: 'Context Window Sizes in Everyday Terms',
    tableHeaders: ['Context Window', 'Approx. English Words', 'Rough Equivalent'],
    tableRows: [
      ['4,096 (4K)', '~3,000 words', 'A short 6-page report'],
      ['32,768 (32K)', '~24,000 words', 'A short novella or 40-page PDF'],
      ['128,000 (128K)', '~96,000 words', 'A full 300-page novel'],
      ['1,000,000 (1M)', '~750,000 words', 'An entire multi-file codebase or 10 books'],
    ],
    tableNoteEn: 'Remember: LLM APIs are stateless! Every turn in a chat app re-sends the prior conversation history inside the context window.',
    tableNoteHi: 'Yaad rakhein: LLM APIs ki apni permanent memory nahi hoti! Har naye message ke saath purani chat history dobara bhejni padti hai.',
    mistakeEn: 'Sending the entire 50-turn raw chat history forever until the API suddenly crashes and costs skyrocket.',
    mistakeHi: '50 turns ki poori raw chat history bina trim kiye baar-baar bhejna, jisse cost skyrocket ho jaye aur API limit crash kar jaye.',
    proHabitEn: 'Implement a token counter + sliding-window or rolling summary memory, and use Context Caching for repeated large system prompts.',
    proHabitHi: 'Token counter aur rolling summary memory lagayein, aur baar-baar use hone wale bade prompts ke liye Context Caching use karein.',
    jobUseEn: 'Smart context engineering cuts enterprise GenAI API bills by 50–80% while making answers faster and sharper.',
    jobUseHi: 'Smart context engineering se companies ka GenAI API bill 50–80% tak kam ho jata hai aur jawab tez aur accurate aate hain.',
    mcq1Question: 'What does an LLM’s "Context Window" measure?',
    mcq1Correct: 'The maximum total number of tokens (input + output) the model can process in a single request',
    mcq1Wrongs: [
      'The physical size of the user’s laptop screen',
      'How many users can sign up for an account',
      'The number of GPUs inside a data center',
    ],
    mcq1Explain: 'Context window is the hard token ceiling spanning system prompt, history, retrieved text, user query, and output.',
    mcq2Question: 'Why does a 20-turn chatbot conversation cost significantly more per message on Turn 20 than on Turn 1?',
    mcq2Correct: 'Because LLMs are stateless, so the app re-sends the growing conversation history in the input context on every turn',
    mcq2Wrongs: [
      'Because LLM providers charge extra after 5 PM',
      'Because Turn 20 uses a different alphabet',
      'Because the model deletes its own weights on Turn 19',
    ],
    mcq2Explain: 'Each new turn re-processes all prior included messages as input tokens unless trimmed or summarized.',
    realWorldScenario:
      'Your team’s PDF Q&A app works great on 5-page PDFs, but crashes with a 400 error whenever a user uploads a 250-page annual report.',
    interviewQ1: 'What is the "Lost in the Middle" phenomenon in long-context LLMs?',
    interviewA1:
      'Research showed that when relevant facts are buried right in the middle of a very long prompt, LLMs often recall information at the very beginning and very end much better than the middle. Ranking the most relevant RAG chunks near the top/bottom mitigates this.',
    interviewQ2: 'Even with 1M-token context windows available, why do teams still use RAG?',
    interviewA2:
      'Cost, latency, and precision: sending 500K tokens on every query is slow and expensive, whereas RAG retrieves the exact top 5 relevant paragraphs (~2K tokens) in milliseconds at a fraction of the cost.',
  },
  {
    id: 308,
    modNum: 28,
    modTitle: 'NLP, Transformers and Large Language Models',
    topicNumInMod: 12,
    title: 'LLM Limitations and Hallucinations',
    subtitle: 'WHY LLMS CONFIDENTLY INVENT FAKE FACTS—AND HOW TO STOP THEM',
    coreEn:
      'A Hallucination happens when an LLM generates fluent, confident-sounding text that is factually wrong or completely fabricated—because LLMs optimize for plausible-sounding next words, not verified truth, and suffer from knowledge cutoffs and weak arithmetic.',
    coreHi:
      'Hallucination tab hota hai jab LLM bade confidence se aisa jawab likh de jo sunne mein bilkul sach lage par asal mein galat ya man-ghadant ho—kyunki LLM sach check nahi karta, balki sabse natural lagne wala agla shabd predict karta hai.',
    analogyTitle: 'An Overconfident Improv Actor',
    analogyEn:
      'Imagine an improv actor who is never allowed to pause and say "I don’t know." If you ask for a 1998 court case citation they forgot, they smoothly invent a realistic-sounding case name and date! That is an LLM hallucination.',
    analogyHi:
      'Ek aise actor ko sochiye jise "Mujhe nahi pata" bolne ki aadat nahi hai. Agar aap koi purana court case poochein jo use yaad nahi, toh wo bade confidence se ek nakli par asli lagne wala case aur date bana kar bol dega! Yahi hallucination hai.',
    steps: [
      {
        title: 'Recognize Key LLM Weaknesses',
        en: 'Hallucinations, outdated knowledge cutoffs, precise math slips, and prompt injection vulnerabilities.',
        hi: 'LLMs ki 4 badi kamzoriyan samajhein: hallucinations, purana cutoff data, exact math ki galtiyan aur prompt injection.',
        tone: 'sky',
      },
      {
        title: 'Ground Answers with RAG / Tools',
        en: 'Give the LLM verified source documents (RAG) and a calculator/Python tool for exact math.',
        hi: 'Verified documents (RAG) dein aur exact math ke liye calculator ya Python tool connect karein.',
        tone: 'amber',
      },
      {
        title: 'Permit "I Don’t Know" Explicitly',
        en: 'Instruct the model: "Answer ONLY from the provided context. If missing, say you do not know."',
        hi: 'Prompt mein saaf likhein: "Sirf diye gaye context se jawab do. Agar na mile toh seedha bolo ki jaankari uplabdh nahi hai."',
        tone: 'lavender',
      },
      {
        title: 'Verify Citations & Keep Humans in Loop',
        en: 'Require inline citations and human review for high-stakes medical, legal, or financial outputs.',
        hi: 'Medical, legal aur finance jaise high-risk kaamon mein inline citations aur human review zaroor rakhein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — SIMPLE GROUNDING GUARDRAIL PROMPT CHECK',
    code: `system_rule = (
    "Answer ONLY using the provided company policy. "
    "If the answer is not in the policy, reply: 'Not covered in policy.'"
)
policy_context = "Standard returns are accepted within 15 days with receipt."
user_q = "What is the warranty on international flights?"

# Grounded check simulation
grounded = "flight" in policy_context.lower()
reply = "Policy covers flights..." if grounded else "Not covered in policy."
print("Guardrail Reply:", reply)`,
    codeOutput: 'Guardrail Reply: Not covered in policy.',
    codeCaptionEn: 'Explicitly giving the LLM an escape hatch ("Not covered in policy") dramatically cuts fabricated answers.',
    codeCaptionHi: 'LLM ko saaf escape hatch ("Not covered in policy") dene se man-ghadant jawab bahut kam ho jaate hain.',
    tableTitle: 'Major LLM Limitations & Industry-Standard Fixes',
    tableHeaders: ['LLM Limitation', 'What Goes Wrong', 'Engineering Fix'],
    tableRows: [
      ['Hallucinations', 'Invents fake citations, URLs, or policies', 'RAG grounding + strict citations + low temperature'],
      ['Knowledge Cutoff', 'Doesn’t know today’s prices or news', 'Live Web Search / Database Tool Calling'],
      ['Exact Arithmetic', 'Gets 84739 × 29184 slightly wrong', 'Delegate math to Python / Calculator tool'],
      ['Prompt Injection', 'User tricks bot into ignoring rules', 'Input sanitization + strict tool permissions'],
    ],
    tableNoteEn: 'A hallucinating AI in customer support can legally bind a company to fake refund promises—never deploy ungrounded LLMs!',
    tableNoteHi: 'Customer support mein hallucinate karne wala bot nakli refund waade kar sakta hai—bina grounding ke LLM kabhi live mat karein!',
    mistakeEn: 'Trusting an LLM’s confident tone as proof of accuracy—LLMs sound equally confident when completely wrong.',
    mistakeHi: 'LLM ke confident tone ko sach ka saboot maan lena—LLM galat hote waqt bhi utne hi confidence se bolta hai.',
    proHabitEn: 'Treat LLMs as reasoning & language engines, NOT as factual databases—always ground facts with RAG, tools, and automated evals.',
    proHabitHi: 'LLM ko language aur reasoning engine maanein, fact database nahi—facts hamesha RAG, tools aur evals se verify karein.',
    jobUseEn: 'Mitigating hallucinations is the #1 requirement before enterprises approve any GenAI app for real customers.',
    jobUseHi: 'Kisi bhi company mein GenAI app live karne se pehle hallucination control karna sabse pehli shart hoti hai.',
    mcq1Question: 'Why do LLMs sometimes hallucinate fake facts or citations with complete confidence?',
    mcq1Correct: 'Because they are trained to predict statistically plausible next tokens rather than verify facts against a truth database',
    mcq1Wrongs: [
      'Because they intentionally try to prank users',
      'Because their GPUs overheat',
      'Because they cannot read English',
    ],
    mcq1Explain: 'Fluency comes from next-token probability distributions, which do not inherently guarantee factual truth.',
    mcq2Question: 'Which combination is the MOST effective way to reduce hallucinations in a company policy chatbot?',
    mcq2Correct: 'RAG retrieval from verified docs + low temperature + explicit instruction to say "I don’t know" when context is missing',
    mcq2Wrongs: [
      'Setting temperature to 1.8 for maximum creativity',
      'Removing all source documents from the prompt',
      'Asking the model to "never say I don’t know"',
    ],
    mcq2Explain: 'Grounding on retrieved facts, keeping temperature low, and allowing abstention slashes hallucinations.',
    realWorldScenario:
      'An airline’s support chatbot invented a "bereavement fare discount policy" that didn’t exist, and the company had to honor it in court.',
    interviewQ1: 'What is the difference between intrinsic hallucination and extrinsic hallucination in RAG?',
    interviewA1:
      'Intrinsic hallucination directly contradicts the provided source context (e.g., doc says 15 days, model says 30 days). Extrinsic hallucination adds unverified claims that cannot be confirmed or denied from the provided context.',
    interviewQ2: 'Why should you NEVER rely on an LLM’s raw text generation for financial ledger calculations?',
    interviewA2:
      'LLMs approximate arithmetic via token patterns and can silently drop a digit. Instead, have the LLM write structured tool calls or Python/SQL code so a deterministic calculator executes the exact math.',
  },
  // ============================================================================
  // MODULE 29: Generative AI and LLM Applications (IDs 309–320)
  // ============================================================================
  {
    id: 309,
    modNum: 29,
    modTitle: 'Generative AI and LLM Applications',
    topicNumInMod: 1,
    title: 'What Is Generative AI?',
    subtitle: 'AI THAT CREATES BRAND-NEW TEXT, CODE, IMAGES, AUDIO, AND VIDEO',
    coreEn:
      'Generative AI is a class of Deep Learning models trained to learn the underlying distribution of data so they can generate original new content—emails, Python code, photorealistic images, music, and video—from simple human prompts.',
    coreHi:
      'Generative AI aise Deep Learning models hain jo data ke patterns itni gehrai se seekh lete hain ki sirf ek chhote prompt par bilkul naya content—emails, Python code, photos, audio aur video—khud bana (generate) sakte hain.',
    analogyTitle: 'Art Critic vs Creative Painter',
    analogyEn:
      'Classic AI is like an art critic who looks at a painting and says "That’s a sunset" (classifying). Generative AI is like a painter who hears "Paint a sunset over Jaipur in watercolor" and creates a brand-new painting on a blank canvas!',
    analogyHi:
      'Purana AI ek art critic jaisa tha jo photo dekh kar sirf naam batata tha ("Ye sunset hai"). Generative AI ek painter hai jise aap bolte hain "Jaipur ke upar watercolor sunset banao" aur wo naya art khud bana deta hai!',
    steps: [
      {
        title: 'Train on Massive Multimodal Data',
        en: 'Foundation models study billions of text pages, code repos, images, or audio clips.',
        hi: 'Foundation models billions text pages, code, images aur audio clips se patterns seekhte hain.',
        tone: 'sky',
      },
      {
        title: 'Receive Natural-Language Prompt',
        en: 'A user describes the desired output in plain English, Hinglish, or with an image/file.',
        hi: 'User plain bhasha (English/Hinglish) ya file ke saath apni requirement prompt mein deta hai.',
        tone: 'amber',
      },
      {
        title: 'Sample & Synthesize New Output',
        en: 'Transformers generate text/code token-by-token; Diffusion models denoise pixels into images/video.',
        hi: 'Transformers token-by-token text/code likhte hain; Diffusion models noise se sharp photos/video banate hain.',
        tone: 'lavender',
      },
      {
        title: 'Refine & Integrate into Workflows',
        en: 'Humans or software pipelines review, edit, and ship the generated output.',
        hi: 'Humans ya automated pipelines output ko check karke real products aur workflows mein use karte hain.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — MULTIMODAL GENAI TASK ROUTER',
    code: `genai_catalog = {
    "text_code": "LLM (Transformer Decoder: Gemini / GPT / Claude / Llama)",
    "image":     "Diffusion Model (Imagen / Flux / Stable Diffusion)",
    "audio":     "Speech & Audio Gen (TTS / Music models)",
    "video":     "Video Diffusion Transformer (Veo / Sora)"
}
for modality, engine in genai_catalog.items():
    print(f"{modality:10s} -> {engine}")`,
    codeOutput: `text_code  -> LLM (Transformer Decoder: Gemini / GPT / Claude / Llama)
image      -> Diffusion Model (Imagen / Flux / Stable Diffusion)
audio      -> Speech & Audio Gen (TTS / Music models)
video      -> Video Diffusion Transformer (Veo / Sora)`,
    codeCaptionEn: 'Modern Generative AI spans every creative modality—and multimodal models can mix text, images, and audio in one prompt.',
    codeCaptionHi: 'Aaj ka Generative AI sirf text nahi balki code, images, audio aur video sab ek saath samajh aur bana sakta hai.',
    tableTitle: 'Generative AI Modalities & Real Business Impact',
    tableHeaders: ['Modality', 'What It Creates', 'Real Company Use Case'],
    tableRows: [
      ['Text & Language', 'Summaries, emails, SQL, reports', 'Customer support & legal drafting'],
      ['Code', 'Functions, unit tests, bug fixes', 'AI coding copilots speeding dev by 30%+'],
      ['Images', 'Product banners, mockups, ads', 'E-commerce marketing & design studios'],
      ['Audio & Video', 'Voiceovers, dubbing, explainers', 'Multilingual education & media production'],
    ],
    tableNoteEn: 'A "Foundation Model" is a single giant pretrained model that can be adapted to hundreds of downstream tasks via prompting or fine-tuning.',
    tableNoteHi: '"Foundation Model" ek hi bada pretrained model hota hai jo prompting ya fine-tuning se sainkdon alag kaam kar sakta hai.',
    mistakeEn: 'Assuming Generative AI only means "chatbots"—its biggest ROI often lives behind the scenes in document extraction, coding, and workflow automation.',
    mistakeHi: 'Ye sochna ki Generative AI sirf chatbot hai—iska sabse bada fayda document extraction, coding aur backend automation mein hota hai.',
    proHabitEn: 'Always identify the exact workflow bottleneck (drafting, searching, summarizing, coding) before picking a GenAI model.',
    proHabitHi: 'GenAI lagane se pehle exact workflow problem (drafting, searching, summarizing, coding) pehchanein.',
    jobUseEn: 'GenAI Engineers build copilots, automated analysts, RAG assistants, and creative studios across almost every modern tech company.',
    jobUseHi: 'GenAI Engineers aaj har badi company mein copilots, RAG assistants aur smart automation tools bana rahe hain.',
    mcq1Question: 'What fundamentally defines Generative AI compared to older discriminative classifiers?',
    mcq1Correct: 'It creates brand-new original outputs (text, code, images, audio) rather than only predicting a label or number',
    mcq1Wrongs: [
      'It can only output True or False',
      'It does not use neural networks',
      'It only works on Excel pivot tables',
    ],
    mcq1Explain: 'Generative models learn to synthesize novel content matching the training distribution.',
    mcq2Question: 'Which model family is most commonly used behind modern AI image generators?',
    mcq2Correct: 'Diffusion models (progressively removing noise to form a sharp image)',
    mcq2Wrongs: [
      'Linear Regression',
      'K-Means Clustering',
      'SQL Joins',
    ],
    mcq2Explain: 'Diffusion models iteratively denoise random static guided by your text prompt to create high-resolution images.',
    realWorldScenario:
      'A retail brand wants to localize 5,000 product descriptions into 6 Indian languages and generate clean studio banners automatically.',
    interviewQ1: 'What is a "Foundation Model" in Generative AI?',
    interviewA1:
      'A large model pretrained on broad, massive datasets (e.g., Gemini, GPT, Llama) that develops general capabilities and can be adapted to many specialized downstream tasks via prompting, RAG, or lightweight fine-tuning.',
    interviewQ2: 'What is a Multimodal LLM?',
    interviewA2:
      'A model that natively accepts and reasons across multiple data types simultaneously—such as reading a screenshot of an invoice + a voice note + a text question in a single prompt.',
  },
  {
    id: 310,
    modNum: 29,
    modTitle: 'Generative AI and LLM Applications',
    topicNumInMod: 2,
    title: 'Generative AI vs Traditional Machine Learning',
    subtitle: 'DISCRIMINATIVE PREDICTION VS GENERATIVE CREATION—AND HOW THEY TEAM UP',
    coreEn:
      'Traditional (Discriminative) Machine Learning predicts structured numbers or categories from tabular data cheaply and deterministically, whereas Generative AI synthesizes unstructured text, code, and media—and the smartest systems combine both.',
    coreHi:
      'Traditional Machine Learning structured tables se fast, sasta aur exact number ya category predict karta hai (jaise fraud score), jabki Generative AI naya text, code ya media banata hai—aur best AI systems dono ko milakar use karte hain.',
    analogyTitle: 'Bank Credit Calculator vs Friendly Loan Advisor',
    analogyEn:
      'The Credit Calculator (Traditional ML) runs exact math on income and credit history to score risk = 0.14 in 2 milliseconds. The Loan Advisor (GenAI) reads that score and writes a warm, clear personalized email explaining the approval!',
    analogyHi:
      'Credit Calculator (Traditional ML) 2 millisecond mein income aur history dekh kar exact risk score = 0.14 nikalta hai. Loan Advisor (GenAI) us score ko padh kar customer ko ek friendly, clear approval email likh deta hai!',
    steps: [
      {
        title: 'Ask: Predict a Number or Create Content?',
        en: 'Forecasting sales, churn, or fraud probability? Start with Traditional ML (XGBoost/LightGBM).',
        hi: 'Agar sales forecast, churn ya fraud score nikalna hai toh Traditional ML (XGBoost) best hai.',
        tone: 'sky',
      },
      {
        title: 'Check Unstructured Reasoning Need',
        en: 'Summarizing PDFs, writing SQL, chatting with customers, or extracting messy invoices? Use GenAI.',
        hi: 'PDF summarize karna, SQL likhna, chat karna ya messy bills padhna ho toh GenAI lagayein.',
        tone: 'amber',
      },
      {
        title: 'Compare Latency, Cost & Determinism',
        en: 'Traditional ML runs in <5ms for fractions of a cent with 100% repeatable scores; LLMs cost more and vary.',
        hi: 'Traditional ML <5ms mein sasta aur 100% repeatable chalta hai; LLMs thode mehenge aur probabilistic hote hain.',
        tone: 'lavender',
      },
      {
        title: 'Design Hybrid ML + GenAI Systems',
        en: 'Let ML compute accurate predictions and let GenAI explain insights or interact with users.',
        hi: 'Best design: ML se exact prediction karwayein aur GenAI se user ko aasaan bhasha mein samjhayein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — HYBRID TRADITIONAL ML + GENAI WORKFLOW',
    code: `# Step 1: Traditional ML predicts exact churn probability (fast, deterministic)
churn_prob = 0.84
top_driver = "3 unresolved support tickets this month"

# Step 2: Generative AI drafts a tailored retention message using ML facts
email_draft = (
    f"Hi Priya, we noticed you had {top_driver}. "
    f"We've assigned a priority specialist and added 1 free month to make it right!"
)
print(f"ML Risk Score: {churn_prob*100:.0f}% -> GenAI Draft Ready!")
print(email_draft)`,
    codeOutput: `ML Risk Score: 84% -> GenAI Draft Ready!
Hi Priya, we noticed you had 3 unresolved support tickets this month. We've assigned a priority specialist and added 1 free month to make it right!`,
    codeCaptionEn: 'Traditional ML nails the exact 84% risk score; GenAI turns that insight into personalized human action!',
    codeCaptionHi: 'Traditional ML exact 84% risk batata hai, aur GenAI us insight ko personalized customer message mein badal deta hai!',
    tableTitle: 'Traditional ML vs Generative AI Comparison',
    tableHeaders: ['Dimension', 'Traditional ML (Discriminative)', 'Generative AI (LLMs / Diffusion)'],
    tableRows: [
      ['Primary Output', 'Number (price) or Class (fraud/not)', 'New text, code, JSON, images, audio'],
      ['Typical Input', 'Structured SQL / CSV tables', 'Prompts, PDFs, images, conversations'],
      ['Training Style', 'Trained on your specific labeled table', 'Pretrained on internet scale + prompted/RAG'],
      ['Speed & Cost per Call', 'Sub-millisecond, near-zero cost', '0.5–5 seconds, per-token API cost'],
    ],
    tableNoteEn: 'Using an LLM to predict next quarter’s numeric inventory table row-by-row is like hammering a nail with a smartphone!',
    tableNoteHi: 'Excel table se numeric sales forecast karne ke liye LLM use karna smartphone se keel thokne jaisa hai!',
    mistakeEn: 'Replacing a rock-solid 95%-accurate XGBoost fraud scorer with an expensive, slower LLM just because GenAI is trendy.',
    mistakeHi: 'Sirf trend ke chakkar mein 95% accurate aur fast XGBoost fraud model ko hata kar slow aur mehenga LLM laga dena.',
    proHabitEn: 'Use Traditional ML for tabular prediction/forecasting, GenAI for language/creation, and combine them into hybrid products.',
    proHabitHi: 'Tabular predictions ke liye Traditional ML, language/creation ke liye GenAI, aur best products ke liye dono ka hybrid use karein.',
    jobUseEn: 'Senior Data Scientists stand out in interviews by knowing exactly when NOT to use an LLM.',
    jobUseHi: 'Senior Data Scientists interviews mein tabhi chamakte hain jab unhe pata ho ki kab LLM lagana hai aur kab XGBoost.',
    mcq1Question: 'Which problem is BEST solved by Traditional Machine Learning rather than an LLM?',
    mcq1Correct: 'Scoring 10,000 credit-card transactions per second for fraud using 40 numeric tabular features',
    mcq1Wrongs: [
      'Drafting a personalized apology email from a customer’s complaint',
      'Summarizing a 30-page legal contract into 5 bullet points',
      'Generating Python unit tests from a function description',
    ],
    mcq1Explain: 'High-throughput, low-latency tabular numeric scoring is the exact sweet spot of Traditional ML (like LightGBM/XGBoost).',
    mcq2Question: 'How do Traditional ML and Generative AI work best together in a modern enterprise?',
    mcq2Correct: 'Traditional ML computes accurate numeric predictions/forecasts, while GenAI explains results and communicates with users',
    mcq2Wrongs: [
      'They can never be used in the same company',
      'GenAI deletes all Traditional ML databases',
      'Traditional ML generates images while GenAI only adds two numbers',
    ],
    mcq2Explain: 'Hybrid architectures leverage deterministic tabular precision from ML and natural-language fluency from GenAI.',
    realWorldScenario:
      'A telecom VP wants to predict which 5% of 2 million subscribers will cancel next month AND automatically draft custom win-back SMS messages.',
    interviewQ1: 'Explain the mathematical intuition of Discriminative vs Generative models.',
    interviewA1:
      'Discriminative models learn the decision boundary P(y | x) directly—mapping input x to label y. Generative models learn the data distribution P(x) or P(x, y), allowing them to sample and synthesize brand-new realistic instances x.',
    interviewQ2: 'Why is Traditional ML often easier to audit for regulated banking decisions than an LLM?',
    interviewA2:
      'Tree ensembles and logistic regressions are deterministic (same input always gives exact same score) and offer clear SHAP/feature-importance explanations required by financial regulators.',
  },
  {
    id: 311,
    modNum: 29,
    modTitle: 'Generative AI and LLM Applications',
    topicNumInMod: 3,
    title: 'Prompt Engineering Fundamentals',
    subtitle: 'WRITING CLEAR, STRUCTURED INSTRUCTIONS THAT UNLOCK 10X BETTER LLM OUTPUTS',
    coreEn:
      'Prompt Engineering is the craft of designing clear, specific, well-structured instructions—combining Role, Task, Context, Constraints, and Output Format—so an LLM consistently produces accurate, job-ready results.',
    coreHi:
      'Prompt Engineering saaf aur structured instructions likhne ki kala hai—jisme Role, Task, Context, Constraints aur Output Format clearly diye jaate hain—taaki LLM har baar exact aur bharosemand jawab de.',
    analogyTitle: 'Briefing a Smart New Intern on Day 1',
    analogyEn:
      'If you tell an intern "Write something about sales", you get a vague essay. If you say "Act as a Sales Analyst. Summarize Q3 Mumbai sales from this table in 3 bullet points under 60 words for the CEO", you get perfection on the first try!',
    analogyHi:
      'Agar aap naye intern ko sirf bolein "Sales par kuch likho", toh vague essay milega. Par agar bolein "Sales Analyst bano. Is table se Q3 Mumbai sales ko CEO ke liye 3 bullet points aur 60 words ke andar summarize karo", toh pehli baar mein perfect result milega!',
    steps: [
      {
        title: 'Assign Role & Clear Task',
        en: 'Tell the model who it is ("Senior Data Analyst") and the exact verb ("Extract", "Compare", "Classify").',
        hi: 'Model ko uska Role ("Senior Data Analyst") aur exact kaam ("Extract", "Classify") batayein.',
        tone: 'sky',
      },
      {
        title: 'Provide Grounded Context',
        en: 'Include the relevant text, table, or rules clearly wrapped in delimiters like ``` or <context>.',
        hi: 'Zaroori text ya rules ko clear delimiters (``` ya <context>) ke andar dein.',
        tone: 'amber',
      },
      {
        title: 'Specify Constraints & Edge Cases',
        en: 'State length limits, tone, forbidden assumptions, and what to say if information is missing.',
        hi: 'Word limit, tone aur "agar data na mile toh kya bolna hai" jaise rules saaf likhein.',
        tone: 'lavender',
      },
      {
        title: 'Define Exact Output Format',
        en: 'Request a Markdown table, numbered checklist, or strict JSON schema—and iterate on test cases.',
        hi: 'Exact output format (Markdown table, bullets ya JSON) batayein aur test cases par iterate karein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PROMPT TEMPLATE — WEAK VS ENGINEERED PROMPT',
    code: `weak_prompt = "Summarize this feedback."

strong_prompt = """
Role: Customer Experience Analyst.
Task: Summarize the customer review below.
Constraints:
- Max 2 bullet points (under 30 words total).
- Only use facts present in the review.
Output Format:
- Sentiment: [Positive / Negative / Neutral]
- Summary: <bullets>

<review>
Battery lasts 2 days, love the display, but the charger cable stopped working in week 1.
</review>
"""
print("Strong prompt sections:", ["Role", "Task", "Constraints", "Output Format", "Delimited Input"])`,
    codeOutput: "Strong prompt sections: ['Role', 'Task', 'Constraints', 'Output Format', 'Delimited Input']",
    codeCaptionEn: 'Wrapping user text in XML tags like <review>...</review> separates instructions from data cleanly.',
    codeCaptionHi: 'User ke text ko <review>...</review> tags mein rakhne se instructions aur data alag rehte hain aur confusion nahi hota.',
    tableTitle: 'The 5 Building Blocks of a Production Prompt (RTCCF)',
    tableHeaders: ['Element', 'Purpose', 'Example'],
    tableRows: [
      ['Role', 'Sets expertise & tone', '"You are a concise SQL tutor."'],
      ['Task', 'Exact action to perform', '"Rewrite this query to fix the JOIN bug."'],
      ['Context', 'Source data inside delimiters', '"<sql>SELECT * FROM orders...</sql>"'],
      ['Constraints', 'Guardrails & edge cases', '"Do not invent column names; max 100 words."'],
      ['Format', 'Predictable output structure', '"Return a Markdown table with 2 columns."'],
    ],
    tableNoteEn: 'Treat prompts like production code: version-control them in Git and test changes against an evaluation suite!',
    tableNoteHi: 'Prompts ko production code ki tarah treat karein: Git mein version save karein aur har change ko test cases par check karein!',
    mistakeEn: 'Writing a vague 1-line prompt, getting a mediocre answer, and blaming the AI model instead of clarifying instructions.',
    mistakeHi: '1 line ka adhoora prompt likhna aur kharab jawab aane par AI model ko dosh dena.',
    proHabitEn: 'Use clear delimiters (XML tags), separate System instructions from User data, and test prompts on 10 tricky edge cases.',
    proHabitHi: 'XML tags se data alag rakhein, System aur User prompts separate rakhein, aur 10 tricky edge cases par prompt zaroor test karein.',
    jobUseEn: 'Well-engineered prompts often boost LLM task accuracy from 60% to 92% in 15 minutes—with zero model retraining cost.',
    jobUseHi: 'Achhi prompt engineering sirf 15 minute mein bina kisi training kharch ke LLM ki accuracy 60% se 92% tak pahuncha sakti hai.',
    mcq1Question: 'Why is wrapping user-supplied text inside delimiters like `<document>...</document>` a Prompt Engineering best practice?',
    mcq1Correct: 'It clearly separates your trusted instructions from untrusted input data, reducing confusion and prompt injection risk',
    mcq1Wrongs: [
      'Because LLMs can only read HTML websites',
      'To double the token cost',
      'To turn off all constraints',
    ],
    mcq1Explain: 'Delimiters mark exact boundaries between system instructions and variable input text.',
    mcq2Question: 'Which prompt change gives the BIGGEST reliability improvement for a business workflow?',
    mcq2Correct: 'Specifying exact task, constraints, missing-data fallback, and desired output format',
    mcq2Wrongs: [
      'Typing the entire prompt in ALL CAPS with 20 exclamation marks',
      'Making the prompt as vague as possible',
      'Removing all context so the model guesses freely',
    ],
    mcq2Explain: 'Explicit constraints, fallbacks, and format specifications remove ambiguity and make outputs consistent.',
    realWorldScenario:
      'Your HR team’s resume-screening prompt returns long rambling essays one day and 1-word answers the next.',
    interviewQ1: 'What is the difference between a System Prompt and a User Prompt in LLM APIs?',
    interviewA1:
      'The System Prompt sets persistent high-priority rules, persona, safety boundaries, and output format for the whole session. The User Prompt carries the specific dynamic query or document for each individual turn.',
    interviewQ2: 'What is Chain-of-Thought (CoT) prompting and when does it help?',
    interviewA2:
      'Asking the model to reason step by step ("Think through the problem step by step before giving the final answer") allocates extra compute tokens to intermediate logic—dramatically improving accuracy on multi-step math, logic, and coding tasks.',
  },
  {
    id: 312,
    modNum: 29,
    modTitle: 'Generative AI and LLM Applications',
    topicNumInMod: 4,
    title: 'Zero-Shot and Few-Shot Prompting',
    subtitle: 'TEACHING AN LLM BY EXAMPLE RIGHT INSIDE THE PROMPT—NO TRAINING NEEDED',
    coreEn:
      'Zero-Shot Prompting asks an LLM to perform a task with instructions alone and zero examples, while Few-Shot Prompting includes 2–5 carefully chosen input→output examples in the prompt so the model instantly mirrors your exact style and edge-case rules.',
    coreHi:
      'Zero-Shot Prompting mein aap bina kisi example ke sirf instruction dekar kaam karwate hain, jabki Few-Shot Prompting mein aap prompt ke andar 2–5 sahi input→output examples dete hain taaki model aapka exact style aur format turant copy kar le.',
    analogyTitle: 'Explaining a Form vs Showing 3 Filled Sample Forms',
    analogyEn:
      'Telling someone "Fill out this customs form" is Zero-Shot—they might format dates differently. Handing them 3 already-filled sample forms first is Few-Shot—they immediately match your exact format without a single mistake!',
    analogyHi:
      'Kisi ko sirf bolna "Ye form bhar do" Zero-Shot hai—shayad wo date galat format mein likh de. Use pehle 3 bhare hue sample forms dikha dena Few-Shot hai—wo turant bilkul waisa hi perfect form bhar dega!',
    steps: [
      {
        title: 'Try Zero-Shot First',
        en: 'Test a clean instruction without examples—modern LLMs already ace many standard tasks zero-shot.',
        hi: 'Pehle bina examples ke ek saaf Zero-Shot prompt try karein—kai aam kaam isi mein ho jaate hain.',
        tone: 'sky',
      },
      {
        title: 'Spot Formatting or Edge-Case Errors',
        en: 'When outputs drift in tone, labels, or subtle business rules, upgrade to Few-Shot.',
        hi: 'Jab model labels, tone ya tricky rules mein galti kare, tab Few-Shot par upgrade karein.',
        tone: 'amber',
      },
      {
        title: 'Curate 3–5 Diverse Examples',
        en: 'Include one example per class plus at least one tricky edge case (like sarcasm or missing fields).',
        hi: 'Har category ka 1 example aur kam se kam 1 tricky edge case (jaise sarcasm ya missing value) zaroor dalein.',
        tone: 'lavender',
      },
      {
        title: 'Verify Consistency & Token Cost',
        en: 'Confirm accuracy jumped on a test set while keeping example length compact to control token cost.',
        hi: 'Test set par accuracy badhi ya nahi check karein aur examples ko chhota rakhein taaki token bill control mein rahe.',
        tone: 'green',
      },
    ],
    codeLabel: 'PROMPT — FEW-SHOT SUPPORT TICKET CLASSIFIER',
    code: `few_shot_prompt = """Classify the ticket into: BILLING, TECHNICAL, or SHIPPING.

Ticket: "My invoice shows Rs 999 twice." -> BILLING
Ticket: "The mobile app crashes on login." -> TECHNICAL
Ticket: "Package stuck in Pune hub for 4 days." -> SHIPPING
Ticket: "I was charged after cancelling my plan!" ->"""

print("Few-shot examples provided: 3 (1 per class)")
print("Expected LLM completion: BILLING")`,
    codeOutput: `Few-shot examples provided: 3 (1 per class)
Expected LLM completion: BILLING`,
    codeCaptionEn: 'Three 1-line examples lock in the exact label names (BILLING/TECHNICAL/SHIPPING) with zero extra chatter!',
    codeCaptionHi: 'Sirf 3 chhote examples se model exact label naam (BILLING/TECHNICAL/SHIPPING) pakad leta hai, bina faltu kahani likhe!',
    tableTitle: 'Zero-Shot vs One-Shot vs Few-Shot Prompting',
    tableHeaders: ['Technique', 'Examples in Prompt', 'Best Used For'],
    tableRows: [
      ['Zero-Shot', '0 examples', 'Simple summaries, translations, general Q&A'],
      ['One-Shot', '1 example', 'Showing a desired output template cleanly'],
      ['Few-Shot', '2 – 5+ examples', 'Custom labels, strict tone, tricky extraction & edge cases'],
    ],
    tableNoteEn: 'This ability of LLMs to learn a new pattern purely from prompt examples without updating weights is called "In-Context Learning"!',
    tableNoteHi: 'Bina weights update kiye sirf prompt ke examples dekh kar naya pattern seekh lena hi "In-Context Learning" kehlata hai!',
    mistakeEn: 'Giving 4 Few-Shot examples that ALL have the same label ("POSITIVE"), biasing the model to predict POSITIVE for everything!',
    mistakeHi: 'Saare 4 Few-Shot examples ek hi label ("POSITIVE") ke de dena, jisse model har cheez ko POSITIVE bolne lagta hai!',
    proHabitEn: 'Balance Few-Shot examples across all target labels, include real edge cases, and keep formatting 100% identical across examples.',
    proHabitHi: 'Saare labels ke balanced examples dein, real edge cases shamil karein aur har example ka format 100% ek jaisa rakhein.',
    jobUseEn: 'Few-Shot prompting is often the fastest way to match a company’s exact brand voice or internal taxonomy without fine-tuning.',
    jobUseHi: 'Bina mehengi fine-tuning ke company ka exact brand tone ya category system set karne ka sabse tez tareeka Few-Shot hai.',
    mcq1Question: 'What is the defining feature of Few-Shot Prompting?',
    mcq1Correct: 'Including a small set of input-output examples inside the prompt to guide the model’s pattern and format',
    mcq1Wrongs: [
      'Retraining the entire neural network on 10 million rows',
      'Setting the context window to zero',
      'Asking the same question 50 times in a loop',
    ],
    mcq1Explain: 'Few-shot prompting leverages in-context learning by showing concrete input→output demonstrations.',
    mcq2Question: 'Why should Few-Shot examples for a 3-class classifier cover ALL 3 classes evenly?',
    mcq2Correct: 'So the model does not develop label bias toward whichever class dominates the prompt examples',
    mcq2Wrongs: [
      'Because Python throws a SyntaxError otherwise',
      'To hide the third class from the LLM',
      'Because LLMs only read the first line',
    ],
    mcq2Explain: 'Unbalanced examples skew the model’s next-token probabilities toward the over-represented label.',
    realWorldScenario:
      'Your Zero-Shot prompt extracts dates in inconsistent styles ("12 Jan", "2026-01-12", "Jan 12th") that keep breaking your downstream parser.',
    interviewQ1: 'What is "Dynamic Few-Shot Prompting"?',
    interviewA1:
      'Instead of hardcoding the same 3 static examples for every query, you store 500 gold examples in a vector database and dynamically retrieve the 3 most similar examples to the current user input—boosting accuracy dramatically.',
    interviewQ2: 'When should you move from Few-Shot Prompting to Fine-Tuning?',
    interviewA2:
      'When you need hundreds of domain examples that no longer fit cheaply in the prompt, when you want to distill a large prompt’s behavior into a tiny ultra-fast model to cut latency/cost, or for specialized domain styles.',
  },
  {
    id: 313,
    modNum: 29,
    modTitle: 'Generative AI and LLM Applications',
    topicNumInMod: 5,
    title: 'Structured Outputs and JSON',
    subtitle: 'FORCING LLMS TO RETURN RELIABLE, MACHINE-READABLE DATA FOR SOFTWARE APPS',
    coreEn:
      'Structured Outputs constrain an LLM to return strictly valid JSON matching a predefined schema (fields, types, enums) instead of free-form prose—so your Python backend, database, or UI can parse the response with zero crashes.',
    coreHi:
      'Structured Outputs LLM ko majboor karte hain ki wo lambi kahani likhne ke bajaye exact JSON schema (fields, types, allowed values) mein jawab de—taaki aapka Python backend ya database bina crash hue data parse kar sake.',
    analogyTitle: 'Filling a Standardized Tax Form vs Writing a Letter',
    analogyEn:
      'If 1,000 people send free-form letters about their income, software cannot add them up. If everyone fills the exact same boxed form (Name, PAN, Income integer), computers process all 1,000 in 1 second! JSON schemas are that boxed form for LLMs.',
    analogyHi:
      'Agar 1,000 log apni income par lambi chitthi bhejein, toh software use jod nahi payega. Par agar sab ek hi boxed form (Name, PAN, Income number) bharein, toh computer 1 second mein process kar lega! JSON schema LLM ka wahi form hai.',
    steps: [
      {
        title: 'Define Strict Schema (Pydantic / JSON Schema)',
        en: 'Declare exact field names, data types (str, float, list), and allowed enum values.',
        hi: 'Pydantic ya JSON Schema mein exact field names, data types (str, float, list) aur allowed options define karein.',
        tone: 'sky',
      },
      {
        title: 'Enable API Structured Output Mode',
        en: 'Pass response_schema / response_format to the LLM API so constrained decoding guarantees valid JSON.',
        hi: 'LLM API mein response_schema / response_format pass karein taaki 100% valid JSON hi nikle.',
        tone: 'amber',
      },
      {
        title: 'Validate with Pydantic in Python',
        en: 'Parse and validate the JSON response into a typed Python object, catching any missing/null values.',
        hi: 'Python mein json.loads() / Pydantic se validate karein taaki koi missing ya galat type turant pakda jaye.',
        tone: 'lavender',
      },
      {
        title: 'Feed Cleanly into DB or Downstream App',
        en: 'Insert structured fields straight into SQL tables, CRMs, dashboards, or API tool calls.',
        hi: 'Clean fields ko seedha SQL database, CRM, dashboard ya agle tool mein bhej dein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — VALIDATING AN LLM JSON INVOICE EXTRACTION',
    code: `import json

# Simulated Structured Output returned by an LLM API
llm_json_text = '{"vendor": "CloudHost Pvt Ltd", "amount_inr": 4500.0, "paid": true}'

record = json.loads(llm_json_text)
assert isinstance(record["amount_inr"], (int, float))
print("Vendor:", record["vendor"])
print("Amount (INR):", record["amount_inr"], "| Paid:", record["paid"])`,
    codeOutput: `Vendor: CloudHost Pvt Ltd
Amount (INR): 4500.0 | Paid: True`,
    codeCaptionEn: 'Clean JSON turns messy invoice emails into strongly typed records ready for SQL databases.',
    codeCaptionHi: 'Clean JSON messy invoice emails ko seedha SQL database mein jaane layak typed records mein badal deta hai.',
    tableTitle: 'Free-Form Text vs Structured JSON Outputs',
    tableHeaders: ['Feature', 'Free-Form Prose Output', 'Structured JSON Schema Output'],
    tableRows: [
      ['Example', '"Sure! The total is around Rs 4,500."', '{"amount_inr": 4500.0, "currency": "INR"}'],
      ['Code Parsing', 'Fragile regex hacks that break often', 'Instant, reliable json.loads() / Pydantic'],
      ['Allowed Values', 'Model invents new labels randomly', 'Strict Enum locks exact categories'],
      ['Best For', 'Human reading / essays / chat', 'APIs, databases, AI Agents, ETL pipelines'],
    ],
    tableNoteEn: 'Modern APIs (Gemini, OpenAI, Claude) support native Schema-Constrained Decoding, guaranteeing zero trailing commas or markdown wrappers!',
    tableNoteHi: 'Modern APIs (Gemini, OpenAI, Claude) mein native Structured Output mode hota hai, jo guarantee deta hai ki JSON kabhi toote nahi!',
    mistakeEn: 'Only asking "please reply in JSON" in plain text and crashing when the LLM wraps it in ```json ... ``` or adds "Here is your JSON:".',
    mistakeHi: 'Sirf text mein "please JSON mein do" likhna aur jab LLM "Here is your JSON:" jod de toh code crash ho jana.',
    proHabitEn: 'Use native API `response_schema` / `response_format` + Pydantic validation + a retry fallback for 99.99% production reliability.',
    proHabitHi: 'Hamesha native API `response_schema` + Pydantic validation use karein taaki production app 99.99% crash-free chale.',
    jobUseEn: 'Every production AI Agent, invoice extractor, and CRM auto-filler relies on Structured JSON Outputs.',
    jobUseHi: 'Har production AI Agent, invoice extractor aur CRM automation Structured JSON Outputs par hi chalta hai.',
    mcq1Question: 'Why are Structured Outputs (JSON Schema) critical when connecting an LLM to a software backend?',
    mcq1Correct: 'They guarantee machine-readable fields and types so downstream code and databases can parse responses reliably',
    mcq1Wrongs: [
      'They make the text longer and more poetic',
      'They eliminate the need for an API key',
      'They convert JSON into MP3 audio',
    ],
    mcq1Explain: 'Software systems require predictable keys, data types, and enum values rather than conversational prose.',
    mcq2Question: 'How do modern LLM APIs enforce 100% valid JSON at generation time?',
    mcq2Correct: 'Constrained decoding (Structured Outputs) restricts allowed next tokens to only those valid under your JSON schema',
    mcq2Wrongs: [
      'A human manually edits every response before sending it',
      'They delete all curly braces',
      'They set temperature to 2.0',
    ],
    mcq2Explain: 'Schema-constrained decoding masks out invalid tokens at each step so syntax errors cannot occur.',
    realWorldScenario:
      'Your app extracts `customer_name`, `order_id`, and `issue_type` from 10,000 emails daily into PostgreSQL, but regex parsing fails on 12% of emails.',
    interviewQ1: 'Why is including a nullable type (`Optional[str]`) important in an extraction JSON schema?',
    interviewA1:
      'If a field like `order_id` is genuinely missing from an email, forcing a non-null string pressures the LLM to hallucinate a fake ID! Allowing `null` lets the model honestly report missing data.',
    interviewQ2: 'How do Structured Outputs enable LLM Function Calling / Tool Use?',
    interviewA2:
      'Tool calling is simply a specialized structured output where the LLM emits a JSON object containing `function_name` and typed `arguments` (e.g., `{"tool": "get_weather", "city": "Delhi"}`) that your code executes.',
  },
  {
    id: 314,
    modNum: 29,
    modTitle: 'Generative AI and LLM Applications',
    topicNumInMod: 6,
    title: 'Using LLM APIs',
    subtitle: 'CALLING CLOUD OR LOCAL LLMS SAFELY FROM YOUR PYTHON CODE',
    coreEn:
      'An LLM API lets your application send prompts (system + user messages) over HTTPS to a hosted AI model (like Gemini, OpenAI, or Anthropic) and receive structured completions—handling API keys, rate limits, retries, streaming, and token usage cleanly.',
    coreHi:
      'LLM API aapke Python code ko internet (HTTPS) ke zariye Gemini, OpenAI ya Claude jaise bade models ko prompt bhejne aur jawab laane ki suvidha deta hai—jisme API keys, streaming, retries aur token cost ka dhyan rakhna hota hai.',
    analogyTitle: 'Ordering Electricity from the Grid vs Building a Power Plant',
    analogyEn:
      'You don’t build a million-dollar power station in your backyard just to run a fridge—you plug into the wall socket and pay only for units used! An LLM API is that wall socket for billion-dollar AI models.',
    analogyHi:
      'Fridge chalane ke liye aap ghar mein power plant nahi banate—bas wall socket mein plug lagate hain aur jitni bijli use hui utna bill dete hain! LLM API wahi wall socket hai jisse aap bade AI models plug-and-play use karte hain.',
    steps: [
      {
        title: 'Store API Key in Environment Variable',
        en: 'Keep keys in `.env` (never hardcoded in Git!) and load via `os.getenv("GEMINI_API_KEY")`.',
        hi: 'API key ko `.env` file mein rakhein (Git par kabhi mat daalein!) aur `os.getenv()` se load karein.',
        tone: 'sky',
      },
      {
        title: 'Build Messages & Parameters',
        en: 'Pass model name, system instruction, user prompt, temperature, and max_output_tokens.',
        hi: 'Request mein model ka naam, system instruction, user prompt, temperature aur max_tokens bhejein.',
        tone: 'amber',
      },
      {
        title: 'Handle Errors, Timeouts & Streaming',
        en: 'Add exponential backoff retries for 429 rate-limit errors, and stream tokens for snappy chat UIs.',
        hi: '429 rate-limit errors ke liye retry backoff lagayein, aur chat apps mein fast feel ke liye streaming on karein.',
        tone: 'lavender',
      },
      {
        title: 'Log Token Usage & Latency',
        en: 'Track prompt_tokens, completion_tokens, and response time on every call to monitor budgets.',
        hi: 'Har call par input tokens, output tokens aur latency log karein taaki monthly bill control mein rahe.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — CLEAN LLM API REQUEST & COST ESTIMATOR',
    code: `import os

api_key = os.getenv("LLM_API_KEY", "demo-env-key")
payload = {
    "model": "gemini-2.5-flash",
    "system": "Be concise and factual.",
    "user": "Explain RAG in one sentence.",
    "temperature": 0.2,
    "max_tokens": 120
}
# Cost check: 50 input tokens + 30 output tokens
cost_usd = (50 * 0.15 + 30 * 0.60) / 1_000_000
print("Key loaded safely:", api_key != "")
print("Model:", payload["model"], f"| Est. call cost: \${cost_usd:.6f}")`,
    codeOutput: `Key loaded safely: True
Model: gemini-2.5-flash | Est. call cost: $0.000026`,
    codeCaptionEn: 'Modern fast models cost fractions of a cent per call—until an unmonitored loop sends 10 million calls!',
    codeCaptionHi: 'Modern fast models per call bahut saste hote hain—bas unmonitored loops se bachne ke liye usage track karna zaroori hai!',
    tableTitle: 'Essential LLM API Production Controls',
    tableHeaders: ['Control', 'Why It Matters', 'Pro Setting'],
    tableRows: [
      ['Env Vars (.env)', 'Prevents stolen API keys & surprise bills', 'os.getenv() + .gitignore .env'],
      ['Streaming (SSE)', 'Shows first word in <0.5s instead of waiting 8s', 'stream=True for user-facing chat'],
      ['Retries + Backoff', 'Recovers cleanly from 429 / 503 blips', 'Exponential backoff (1s, 2s, 4s)'],
      ['max_tokens Cap', 'Stops runaway infinite generation loops', 'Set realistic cap per endpoint'],
    ],
    tableNoteEn: 'Output tokens usually cost 3–5x more than input tokens—keeping replies concise saves both money and user reading time!',
    tableNoteHi: 'Output tokens aksar input tokens se 3–5 guna mehenge hote hain—chhote aur crisp replies paisa aur time dono bachate hain!',
    mistakeEn: 'Hardcoding your secret API key directly in a Jupyter notebook and pushing it to a public GitHub repo (bots steal keys in under 60 seconds!).',
    mistakeHi: 'Secret API key ko seedha code mein likh kar public GitHub par push kar dena—bots 60 second ke andar key chura lete hain!',
    proHabitEn: 'Always use environment variables, set hard monthly billing alerts, wrap calls in retry logic, and log token usage.',
    proHabitHi: 'Hamesha environment variables, monthly billing alerts, retry logic aur token logging use karein.',
    jobUseEn: 'Building resilient, low-latency LLM API wrappers is the day-1 core skill of every Applied GenAI Engineer.',
    jobUseHi: 'Bharosemand aur fast LLM API wrappers banana har Applied GenAI Engineer ki sabse pehli daily skill hai.',
    mcq1Question: 'Where should you store your LLM API key in a Python project?',
    mcq1Correct: 'In an environment variable (e.g., `.env` excluded from Git via `.gitignore`)',
    mcq1Wrongs: [
      'Hardcoded in plain text at the top of `main.py` and pushed to public GitHub',
      'Inside the frontend HTML button text',
      'In the README.md file so everyone can see it',
    ],
    mcq1Explain: 'Environment variables keep credentials out of source control and prevent unauthorized billing abuse.',
    mcq2Question: 'What does HTTP status code `429 Too Many Requests` mean when calling an LLM API?',
    mcq2Correct: 'You exceeded your requests-per-minute or tokens-per-minute rate limit and should retry with exponential backoff',
    mcq2Wrongs: [
      'Your prompt was 429 words long',
      'The LLM achieved 100% accuracy',
      'Your Python version is outdated',
    ],
    mcq2Explain: '429 signals rate limiting; backing off briefly and retrying gracefully keeps pipelines running.',
    realWorldScenario:
      'Your batch script processes 5,000 customer reviews through an LLM API, and crashes halfway through with a 429 Rate Limit error.',
    interviewQ1: 'Why does Streaming dramatically improve perceived latency even though total generation time is the same?',
    interviewA1:
      'Users care about Time-To-First-Token (TTFT). Streaming displays the first words within ~300–500ms so users can start reading immediately instead of staring at a blank spinner for 8 seconds.',
    interviewQ2: 'How can you cut LLM API costs by 50%+ for a high-traffic production app?',
    interviewA2:
      '1) Route simple queries to fast/cheap small models (model routing); 2) Use prompt caching for repeated system prompts/docs; 3) Cache identical frequent queries in Redis; 4) Cap max_output_tokens and keep prompts concise.',
  },
  {
    id: 315,
    modNum: 29,
    modTitle: 'Generative AI and LLM Applications',
    topicNumInMod: 7,
    title: 'Temperature and Generation Parameters',
    subtitle: 'DIALING CREATIVITY VS PRECISION WITH TEMPERATURE, TOP-P, AND MAX TOKENS',
    coreEn:
      'Generation parameters control how an LLM samples its next token from predicted probabilities: Temperature dials randomness (0.0 = focused & deterministic, 1.0+ = creative & varied), Top-P trims the unlikely tail, and Max Tokens caps reply length.',
    coreHi:
      'Generation parameters control karte hain ki LLM agla shabd kaise chune: Temperature randomness set karta hai (0.0 = exact aur repeatable, 1.0+ = creative aur alag-alag), Top-P ajeeb words ko kat-ta hai, aur Max Tokens length ki limit lagata hai.',
    analogyTitle: 'Strict Accountant vs Jazz Musician',
    analogyEn:
      'At Temperature = 0.0, the LLM acts like a strict accountant—always picking the #1 safest, most predictable answer. At Temperature = 0.9, it acts like a jazz musician—exploring surprising, creative phrases!',
    analogyHi:
      'Temperature = 0.0 par LLM ek strict accountant ki tarah hamesha sabse safe aur exact #1 jawab deta hai. Temperature = 0.9 par wo ek creative artist ban jata hai jo naye aur alag-alag ideas try karta hai!',
    steps: [
      {
        title: 'Understand Token Probabilities',
        en: 'Before sampling, the model assigns a probability to every word (e.g., "Paris": 85%, "Lyon": 10%, "Mars": 0.01%).',
        hi: 'Sampling se pehle model har word ko probability deta hai (jaise "Paris": 85%, "Lyon": 10%, "Mars": 0.01%).',
        tone: 'sky',
      },
      {
        title: 'Set Temperature for Your Task',
        en: 'Use 0.0–0.2 for SQL, JSON, coding, and RAG facts; use 0.7–1.0 for brainstorming and ad copy.',
        hi: 'SQL, JSON, coding aur RAG ke liye 0.0–0.2 rakhein; brainstorming aur creative writing ke liye 0.7–1.0.',
        tone: 'amber',
      },
      {
        title: 'Use Top-P (Nucleus Sampling)',
        en: 'Top-P = 0.9 keeps only the smallest group of top words whose probabilities sum to 90%, blocking absurd words.',
        hi: 'Top-P = 0.9 sirf un top words ko rakhta hai jinki probability milkar 90% ho—bekar words automatically kat jaate hain.',
        tone: 'lavender',
      },
      {
        title: 'Set Max Tokens & Stop Sequences',
        en: 'Cap response length with `max_tokens` and halt cleanly with custom stop sequences if needed.',
        hi: '`max_tokens` se length cap karein taaki model zaroorat se zyada lamba jawab na likhe.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — HOW TEMPERATURE RESHAPES NEXT-TOKEN PROBABILITIES',
    code: `import math

logits = {"Paris": 4.0, "Lyon": 2.0, "Nice": 1.0}
for temp in [0.2, 1.0, 2.0]:
    scaled = {k: math.exp(v / temp) for k, v in logits.items()}
    total = sum(scaled.values())
    probs = {k: round(v / total, 3) for k, v in scaled.items()}
    print(f"Temp={temp:<3} -> {probs}")`,
    codeOutput: `Temp=0.2 -> {'Paris': 1.0, 'Lyon': 0.0, 'Nice': 0.0}
Temp=1.0 -> {'Paris': 0.844, 'Lyon': 0.114, 'Nice': 0.042}
Temp=2.0 -> {'Paris': 0.635, 'Lyon': 0.234, 'Nice': 0.131}`,
    codeCaptionEn: 'Low temperature sharpens the peak ("Paris" = 100%); high temperature flattens probabilities so rarer words get picked!',
    codeCaptionHi: 'Kam temperature peak ko sharp kar deta hai ("Paris" = 100%); zyada temperature probabilities ko flat karke naye words ka chance badhata hai!',
    tableTitle: 'Recommended Generation Settings by Use Case',
    tableHeaders: ['Use Case', 'Temperature', 'Why?'],
    tableRows: [
      ['JSON Extraction / SQL / Code', '0.0 – 0.1', 'Maximum precision & repeatability'],
      ['RAG Q&A / Customer Support', '0.1 – 0.3', 'Stays grounded to facts with natural phrasing'],
      ['General Chat / Summarization', '0.4 – 0.6', 'Balanced clarity and readability'],
      ['Marketing Taglines / Stories', '0.8 – 1.0', 'Rich variety and creative phrasing'],
    ],
    tableNoteEn: 'Pro rule: adjust EITHER Temperature OR Top-P—not both wildly at the same time.',
    tableNoteHi: 'Pro tip: ek waqt mein ya toh Temperature tune karein ya Top-P—dono ko ek saath bahut zyada mat chhedein.',
    mistakeEn: 'Leaving temperature at 1.0 for a JSON extraction or medical RAG bot, causing random creative hallucinations.',
    mistakeHi: 'JSON extraction ya factual RAG bot mein temperature 1.0 chhod dena, jisse model creative hallucinations karne lagta hai.',
    proHabitEn: 'Default to `temperature=0.0` (or `0.1`) for all deterministic data/code/RAG pipelines, and only raise it for creative writing.',
    proHabitHi: 'Data, code aur RAG pipelines mein hamesha `temperature=0.0` ya `0.1` rakhein, aur sirf creative writing mein badhayein.',
    jobUseEn: 'Proper parameter tuning is a 1-line config change that makes automated pipelines consistent and trustworthy.',
    jobUseHi: 'Sirf 1 line ka temperature setting aapke automated AI pipeline ko unpredictable se rock-solid bana deta hai.',
    mcq1Question: 'Which temperature setting is BEST for generating deterministic SQL queries and structured JSON extraction?',
    mcq1Correct: '0.0 to 0.1 (very low temperature)',
    mcq1Wrongs: [
      '1.5 to 2.0 (very high temperature)',
      'Negative 50',
      'Temperature has no effect on text generation',
    ],
    mcq1Explain: 'Low temperature concentrates probability mass on the single highest-likelihood token, maximizing consistency.',
    mcq2Question: 'What does Top-P (Nucleus Sampling) = 0.9 do during token generation?',
    mcq2Correct: 'Samples only from the smallest set of top candidate tokens whose cumulative probability reaches 90%',
    mcq2Wrongs: [
      'Deletes 90% of the user’s input prompt',
      'Forces the output to be exactly 90 words long',
      'Raises the API price by 90%',
    ],
    mcq2Explain: 'Top-P dynamically cuts off the low-probability tail so nonsensical tokens are never sampled.',
    realWorldScenario:
      'Your automated customer-ticket tagger assigns different categories when run twice on the exact same ticket.',
    interviewQ1: 'What is the difference between Top-K and Top-P sampling?',
    interviewA1:
      'Top-K always keeps a fixed number K of top tokens (e.g., 40), even when only 2 words make sense. Top-P adapts dynamically—keeping just 1–2 tokens when the model is very confident, and expanding to 20+ tokens when many creative continuations are valid.',
    interviewQ2: 'Does setting Temperature = 0.0 guarantee 100% bit-for-bit identical outputs every time on cloud APIs?',
    interviewA2:
      'Nearly, but not always 100% guaranteed on large GPU clusters due to floating-point batching non-determinism (MoE routing or parallel reductions). Passing a fixed `seed` helps further, though slight rare variations can still occur.',
  },
  {
    id: 316,
    modNum: 29,
    modTitle: 'Generative AI and LLM Applications',
    topicNumInMod: 8,
    title: 'Embeddings and Vector Representations',
    subtitle: 'COMPRESSING WHOLE PARAGRAPHS, DOCS, AND IMAGES INTO SEARCHABLE VECTORS',
    coreEn:
      'Modern Embedding Models convert entire sentences, document chunks, or even images into fixed-length numeric vectors (e.g., 768 or 1,536 floats) that preserve deep semantic meaning—forming the foundation of semantic search, clustering, and RAG.',
    coreHi:
      'Modern Embedding Models poore sentences, document chunks ya photos ko ek fixed-length number list (jaise 768 ya 1,536 floats) mein badal dete hain jo unka gehra matlab save rakhti hai—yahi semantic search, clustering aur RAG ki neev hai.',
    analogyTitle: 'A Digital Fingerprint of Meaning',
    analogyEn:
      'Just as every person has a compact fingerprint that uniquely identifies them, an embedding model stamps every paragraph with a compact 768-number "meaning fingerprint"—paragraphs about similar topics get nearly identical fingerprints!',
    analogyHi:
      'Jaise har insaan ka fingerprint uski pehchan hota hai, waise hi embedding model har paragraph ko 768 numbers ka ek "meaning fingerprint" deta hai—ek jaise topic wale paragraphs ke fingerprints lagbhag same hote hain!',
    steps: [
      {
        title: 'Split Long Docs into Clean Chunks',
        en: 'Break 50-page PDFs into focused 300–500 token chunks (with slight overlap) so each vector captures one clear idea.',
        hi: 'Badi PDFs ko 300–500 tokens ke focused chunks (thoda overlap rakh kar) mein todein taaki har vector ek saaf idea pakde.',
        tone: 'sky',
      },
      {
        title: 'Call Embedding Model API / Local Encoder',
        en: 'Pass each chunk through a dedicated embedding model (e.g., text-embedding-004, BGE, MiniLM).',
        hi: 'Har chunk ko dedicated embedding model (text-embedding-004, BGE, MiniLM) se vector mein badlein.',
        tone: 'amber',
      },
      {
        title: 'Store Vector + Original Text + Metadata',
        en: 'Save the float vector alongside the raw text, document title, page number, and access permissions.',
        hi: 'Vector ke saath asli text, file naam, page number aur permissions bhi metadata mein save karein.',
        tone: 'lavender',
      },
      {
        title: 'Use Vectors for Search, Clustering & Recommendations',
        en: 'Compare any new query vector against stored vectors in milliseconds to find top matches.',
        hi: 'Kisi bhi naye query vector ko stored vectors se milliseconds mein compare karke best matches nikalein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — CHUNKING A DOCUMENT BEFORE EMBEDDING',
    code: `doc = "Refunds take 5 business days. Damaged items qualify for instant replacement. Keep your invoice."
sentences = [s.strip() + "." for s in doc.split(".") if s.strip()]

for idx, chunk in enumerate(sentences, 1):
    # Illustrative 3-D embedding vector preview
    print(f"Chunk {idx} ({len(chunk)} chars): {chunk}")`,
    codeOutput: `Chunk 1 (29 chars): Refunds take 5 business days.
Chunk 2 (47 chars): Damaged items qualify for instant replacement.
Chunk 3 (18 chars): Keep your invoice.`,
    codeCaptionEn: 'Clean chunking ensures a question about "damaged items" retrieves the exact right sentence instead of a diluted 20-page vector.',
    codeCaptionHi: 'Sahi chunking se "damaged items" poochne par exact wahi line milti hai, na ki 20 page ka khichdi vector.',
    tableTitle: 'Popular Embedding Models & Dimensions',
    tableHeaders: ['Model', 'Dimensions', 'Where It Shines'],
    tableRows: [
      ['all-MiniLM-L6-v2 (Open)', '384', 'Ultra-fast local CPU prototypes'],
      ['BGE / E5 / Nomic (Open)', '768 – 1024', 'High-accuracy private self-hosted RAG'],
      ['Gemini / OpenAI Embeddings', '768 – 3072', 'Top multilingual & enterprise API quality'],
      ['CLIP / Multimodal Embeddings', '512 – 1024', 'Searching images using text prompts!'],
    ],
    tableNoteEn: 'Embedding a whole 100-page PDF into ONE single vector blurs all topics together—always chunk thoughtfully first!',
    tableNoteHi: '100 page ki poori PDF ka SIRF EK vector banane se saare topics mix ho jaate hain—hamesha pehle smart chunking karein!',
    mistakeEn: 'Chopping text blindly mid-sentence at character 500 with zero overlap, slicing key facts ("Rs 5,000" / "not refundable") in half.',
    mistakeHi: 'Character 500 par bina overlap ke beech sentence kaat dena, jisse aadhi baat ek chunk mein aur aadhi doosre mein chali jaye.',
    proHabitEn: 'Use recursive/semantic chunking (300–600 tokens with 10–15% overlap) and prepend the document title/section heading to each chunk.',
    proHabitHi: 'Recursive chunking (300–600 tokens + 10–15% overlap) use karein aur har chunk ke upar document title/heading jodein.',
    jobUseEn: 'Embeddings power semantic product search, customer feedback topic clustering, deduplication, and enterprise RAG.',
    jobUseHi: 'Semantic product search, feedback clustering, duplicate detection aur enterprise RAG—sabka engine embeddings hi hai.',
    mcq1Question: 'Why do we split long documents into smaller chunks before generating embeddings for search?',
    mcq1Correct: 'So each embedding vector cleanly represents one focused topic rather than diluting dozens of unrelated pages into one average',
    mcq1Wrongs: [
      'Because computers cannot read files larger than 1 KB',
      'To randomly delete half the paragraphs',
      'Because embeddings only accept 1 single word',
    ],
    mcq1Explain: 'Focused chunks preserve fine-grained semantic specificity and fit cleanly into an LLM’s context window.',
    mcq2Question: 'What is the purpose of adding 10–15% overlap between consecutive document chunks?',
    mcq2Correct: 'To avoid cutting a sentence or key fact awkwardly across a chunk boundary',
    mcq2Wrongs: [
      'To intentionally duplicate the entire database 10 times',
      'To hide metadata from the vector database',
      'To change the embedding model dimension',
    ],
    mcq2Explain: 'Small overlap preserves continuity for sentences and ideas that sit right on a chunk boundary.',
    realWorldScenario:
      'Your HR handbook RAG bot misses the "maternity leave" policy because all 80 pages were embedded into a single vector.',
    interviewQ1: 'What are Matryoshka Embeddings (MRL)?',
    interviewA1:
      'Matryoshka-trained embedding models pack the most important semantic information into the earliest dimensions, letting you truncate a 3072-D vector down to 512-D or 256-D with minimal accuracy loss—slashing vector database memory and cost by 6x!',
    interviewQ2: 'Why should you prepend the document title and section header to every chunk before embedding?',
    interviewA2:
      'A chunk saying "It expires after 30 days" is ambiguous on its own. Prepending "[HR Policy > Travel Reimbursement]" gives the embedding model full context so it matches travel queries accurately.',
  },
  {
    id: 317,
    modNum: 29,
    modTitle: 'Generative AI and LLM Applications',
    topicNumInMod: 9,
    title: 'Vector Databases and Semantic Search',
    subtitle: 'FINDING THE TOP 5 MOST SIMILAR IDEAS OUT OF MILLIONS IN MILLISECONDS',
    coreEn:
      'A Vector Database (like Pinecone, Qdrant, Chroma, Weaviate, or pgvector) stores millions of embedding vectors alongside metadata and uses Approximate Nearest Neighbor (ANN) indexes (like HNSW) to retrieve the most semantically similar items in milliseconds.',
    coreHi:
      'Vector Database (jaise Pinecone, Qdrant, Chroma, pgvector) lakhon-croreon embedding vectors aur unka metadata store karta hai aur smart ANN indexes (jaise HNSW) ki madad se milliseconds mein sabse milte-julte results dhoondh kar laata hai.',
    analogyTitle: 'A Smart Librarian Who Knows Every Shelf Section Instantly',
    analogyEn:
      'Checking 10 million books one by one takes days (brute force). A smart librarian uses a layered map (HNSW graph)—jumping straight to the right floor, right aisle, and right shelf in 5 milliseconds (ANN search)!',
    analogyHi:
      '1 crore kitabein ek-ek karke check karne mein din lag jayenge (brute force). Smart librarian ek layered map (HNSW index) use karke 5 millisecond mein seedha sahi floor, sahi aisle aur sahi shelf par pahunch jata hai!',
    steps: [
      {
        title: 'Index Embeddings + Metadata',
        en: 'Insert `(id, vector, raw_text, metadata)` into the Vector DB (e.g., department="HR", year=2026).',
        hi: 'Vector DB mein `(id, vector, raw_text, metadata)` jaise department aur year ke saath store karein.',
        tone: 'sky',
      },
      {
        title: 'Build ANN Index (HNSW / IVF)',
        en: 'Organize vectors into a fast navigable graph so search skips 99.9% of irrelevant vectors.',
        hi: 'HNSW ya IVF index banayein taaki search 99.9% bekar vectors ko skip karke turant paas wale vectors par pahunche.',
        tone: 'amber',
      },
      {
        title: 'Filter Metadata + Search Top-K',
        en: 'Apply strict metadata filters (e.g., `tenant_id == user_company`) AND fetch Top-K nearest vectors.',
        hi: 'Pehle metadata filter (`company_id`) lagayein aur phir query vector ke Top-K nearest neighbors nikalein.',
        tone: 'lavender',
      },
      {
        title: 'Optional Hybrid + Rerank Boost',
        en: 'Combine vector results with BM25 keyword search and rerank the top 20 down to the sharpest top 5.',
        hi: 'Vector search ko BM25 keyword search ke saath milayein aur Reranker se best top 5 chunks chunein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — MINI IN-MEMORY SEMANTIC VECTOR SEARCH',
    code: `import math

def cos(a, b):
    return sum(x*y for x,y in zip(a,b)) / (math.sqrt(sum(x*x for x in a)) * math.sqrt(sum(y*y for y in b)))

# Mini Vector DB: (text, vector, dept)
db = [
    ("Reset VPN password via IT portal", [0.9, 0.1, 0.1], "IT"),
    ("Submit medical bills within 7 days", [0.1, 0.9, 0.1], "HR"),
    ("Apply for annual leave in HRMS",   [0.15, 0.85, 0.2], "HR"),
]
query_vec = [0.12, 0.88, 0.15]  # "How do I claim hospital expenses?"
ranked = sorted([(round(cos(query_vec, v), 3), txt) for txt, v, d in db if d == "HR"], reverse=True)
print("Top HR Semantic Matches:", ranked)`,
    codeOutput: "Top HR Semantic Matches: [(0.998, 'Submit medical bills within 7 days'), (0.997, 'Apply for annual leave in HRMS')]",
    codeCaptionEn: 'Combining metadata filtering (`dept == "HR"`) with vector search guarantees fast, secure, relevant results.',
    codeCaptionHi: 'Metadata filtering (`dept == "HR"`) aur vector search ko jodne se fast, safe aur exact results milte hain.',
    tableTitle: 'Popular Vector Databases & When to Pick Each',
    tableHeaders: ['Vector DB', 'Best Fit', 'Highlight'],
    tableRows: [
      ['Chroma / FAISS', 'Local notebooks & prototypes', 'Zero-setup Python library'],
      ['pgvector (PostgreSQL)', 'Teams already running Postgres', 'Keeps SQL + vectors + transactions together!'],
      ['Qdrant / Weaviate', 'High-scale hybrid search', 'Fast Rust/Go engines with rich metadata filtering'],
      ['Pinecone / Vertex Vector', 'Fully managed serverless cloud', 'Zero infra ops at billion-vector scale'],
    ],
    tableNoteEn: 'If your startup already uses PostgreSQL and has under 5 million chunks, `pgvector` often saves you from managing a whole extra database!',
    tableNoteHi: 'Agar aapki company pehle se PostgreSQL use karti hai aur 50 lakh se kam chunks hain, toh `pgvector` sabse simple aur clean choice hai!',
    mistakeEn: 'Forgetting tenant/permission metadata filters in a multi-user Vector DB, accidentally leaking Company A’s private docs to Company B!',
    mistakeHi: 'Multi-user Vector DB mein permission/company filter bhool jana, jisse ek company ke private docs doosre user ko dikh jayein!',
    proHabitEn: 'Always enforce metadata access filters BEFORE or DURING vector search, and use Hybrid Search + Reranking for top precision.',
    proHabitHi: 'Vector search mein hamesha strict permission metadata filters lagayein, aur high accuracy ke liye Hybrid Search + Reranking use karein.',
    jobUseEn: 'Vector search powers AI knowledge bases, semantic e-commerce search, code search, and enterprise RAG platforms.',
    jobUseHi: 'AI knowledge bases, smart e-commerce search, code search aur enterprise RAG sab Vector Databases par chalte hain.',
    mcq1Question: 'Why do Vector Databases use Approximate Nearest Neighbor (ANN) indexes like HNSW instead of exact brute-force search?',
    mcq1Correct: 'To search millions of vectors in milliseconds with 99%+ recall instead of scanning every single vector linearly',
    mcq1Wrongs: [
      'Because brute force cannot compute cosine similarity',
      'To delete 90% of stored documents permanently',
      'Because HNSW only works on 2-word strings',
    ],
    mcq1Explain: 'ANN indexes trade a tiny ~1% recall margin for 100x–1000x faster query latency at scale.',
    mcq2Question: 'Why is Metadata Filtering critical inside an enterprise Vector Database?',
    mcq2Correct: 'It restricts search results by date, department, or user access rights so private or outdated docs are never retrieved',
    mcq2Wrongs: [
      'It increases image resolution',
      'It automatically translates vectors into SQL queries',
      'It disables semantic similarity',
    ],
    mcq2Explain: 'Combining structured metadata filters with vector similarity enforces security, freshness, and tenant isolation.',
    realWorldScenario:
      'Your internal AI search tool retrieves an outdated 2021 pricing PDF instead of the 2026 pricing PDF because both have high semantic similarity.',
    interviewQ1: 'What is the difference between Pre-Filtering and Post-Filtering in a Vector Database?',
    interviewA1:
      'Post-filtering runs vector search first (e.g., top 10) and then removes items failing the metadata filter—risking returning 0 results! Pre-filtering (or filtered HNSW) applies the metadata filter during graph traversal so you always get K valid matching results.',
    interviewQ2: 'When would you choose `pgvector` over a dedicated vector DB like Qdrant or Pinecone?',
    interviewA2:
      'Choose pgvector when you already run PostgreSQL, want ACID transactions joining relational tables with vectors, and are at small-to-medium scale (thousands to a few million vectors). Move to Qdrant/Pinecone for extreme throughput or hundreds of millions of vectors.',
  },
  {
    id: 318,
    modNum: 29,
    modTitle: 'Generative AI and LLM Applications',
    topicNumInMod: 10,
    title: 'Retrieval-Augmented Generation (RAG)',
    subtitle: 'GIVING LLMS AN OPEN-BOOK SEARCH ENGINE OVER YOUR PRIVATE, LIVE DATA',
    coreEn:
      'Retrieval-Augmented Generation (RAG) is an architecture that first searches your private knowledge base (Vector DB / Hybrid Search) for the exact paragraphs relevant to a user’s question, and then feeds those retrieved facts into the LLM prompt so it writes an accurate, up-to-date answer.',
    coreHi:
      'Retrieval-Augmented Generation (RAG) wo architecture hai jo pehle aapke private documents (Vector DB) mein se user ke sawal se jude exact paragraphs dhoondh kar laata hai, aur phir un facts ko LLM prompt mein dekar bilkul accurate aur fresh jawab likhwata hai.',
    analogyTitle: 'Closed-Book Exam vs Open-Book Exam with Sticky Tabs',
    analogyEn:
      'Asking a raw LLM about your company’s 2026 HR policy is a closed-book exam—it guesses and hallucinates. RAG hands the LLM the exact 3 opened handbook pages with sticky tabs right before it writes the answer!',
    analogyHi:
      'Bina RAG ke LLM se apni company ki 2026 policy poochna closed-book exam jaisa hai—wo tukka maarega. RAG use jawab likhne se pehle handbook ke exact 3 pages khol kar de deta hai (open-book exam)!',
    steps: [
      {
        title: 'Offline Indexing: Chunk & Embed Docs',
        en: 'Clean PDFs/wikis, split into smart chunks, embed them, and store in a Vector Database.',
        hi: 'PDFs/wikis ko clean karke chunks banayein, embed karein aur Vector Database mein store karein.',
        tone: 'sky',
      },
      {
        title: 'Online Retrieval: Search Top-K Chunks',
        en: 'Embed the user’s live question and retrieve the Top-K most relevant chunks (Hybrid + Rerank).',
        hi: 'User ke live sawal ko embed karke Vector DB se sabse relevant Top-K chunks nikal kar layein.',
        tone: 'amber',
      },
      {
        title: 'Augment the LLM Prompt',
        en: 'Insert the retrieved chunks into the prompt with a strict rule: answer ONLY from these sources.',
        hi: 'Retrieved chunks ko prompt mein dalein aur strict rule lagayein ki jawab sirf inhi sources se dena hai.',
        tone: 'lavender',
      },
      {
        title: 'Generate Grounded Answer + Citations',
        en: 'The LLM synthesizes a crisp natural reply citing the exact source document and page.',
        hi: 'LLM un facts ko padh kar ek saaf jawab likhta hai aur source document + page number cite karta hai.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — END-TO-END MINI RAG PIPELINE',
    code: `# Step 1: Retrieved top chunk from Vector DB
retrieved_chunk = "[Policy_2026.pdf, p.4] Employees get 18 paid annual leaves per year."
user_question = "How many paid leaves do I get?"

# Step 2: Augment prompt with retrieved evidence
rag_prompt = f"""Answer ONLY using the context below and cite the source.
Context: {retrieved_chunk}
Question: {user_question}"""

# Step 3: Grounded LLM response
answer = "You receive 18 paid annual leaves per year [Policy_2026.pdf, p.4]."
print("RAG Answer:", answer)`,
    codeOutput: 'RAG Answer: You receive 18 paid annual leaves per year [Policy_2026.pdf, p.4].',
    codeCaptionEn: 'Whenever the HR policy changes to 20 days, you just re-index 1 PDF—zero expensive LLM retraining needed!',
    codeCaptionHi: 'Jab bhi HR policy badalkar 20 din ho jaye, bas 1 PDF update karein—bina mehengi LLM retraining ke bot turant update ho jata hai!',
    tableTitle: 'RAG vs Fine-Tuning: Which One Do You Need?',
    tableHeaders: ['Goal', 'RAG (Open-Book Search)', 'Fine-Tuning (Updating Weights)'],
    tableRows: [
      ['Inject fresh / private facts', 'Best! Instant updates & citations', 'Bad! Expensive & quickly outdated'],
      ['Reduce hallucinations', 'Strong (grounded to exact docs)', 'Weak alone for private facts'],
      ['Change tone / strict format / style', 'Moderate (via prompt)', 'Best! Bakes behavior into weights'],
      ['Cost & Speed to Build', 'Fast & low cost', 'Needs curated dataset & GPU training'],
    ],
    tableNoteEn: '90% of enterprise GenAI apps start with RAG, NOT fine-tuning—because business knowledge changes every week!',
    tableNoteHi: '90% company GenAI apps fine-tuning se nahi balki RAG se shuru hote hain—kyunki business data har hafte badalta rehta hai!',
    mistakeEn: 'Blaming the LLM when a RAG bot gives a wrong answer—70% of the time, the bug is bad chunking or retrieval (the right chunk was never fetched!).',
    mistakeHi: 'RAG bot galat jawab de toh LLM ko dosh dena—70% cases mein galti chunking ya retrieval ki hoti hai (sahi paragraph mila hi nahi!).',
    proHabitEn: 'Always inspect the retrieved chunks FIRST when debugging RAG, and upgrade naive vector search with Hybrid Search + Cross-Encoder Reranking.',
    proHabitHi: 'RAG debug karte waqt hamesha PEHLE retrieved chunks check karein, aur accuracy ke liye Hybrid Search + Reranker lagayein.',
    jobUseEn: 'RAG is the single most in-demand architecture for Applied AI Engineers building enterprise assistants and copilots.',
    jobUseHi: 'Enterprise chatbots aur copilots banane wale Applied AI Engineers ke liye RAG sabse zyada demand wala architecture hai.',
    mcq1Question: 'What does RAG stand for, and what problem does it primarily solve?',
    mcq1Correct: 'Retrieval-Augmented Generation — it injects fresh, private verified context into the LLM prompt to prevent hallucinations',
    mcq1Wrongs: [
      'Randomly Assigned Gradients — it speeds up CNN pooling',
      'Rapid API Gateway — it compresses JPEG images',
      'Recursive Array Generation — it sorts Python lists',
    ],
    mcq1Explain: 'RAG grounds LLM answers in dynamically retrieved private or up-to-date knowledge without retraining the model.',
    mcq2Question: 'When a RAG system gives an incomplete or wrong answer, what should an engineer inspect FIRST?',
    mcq2Correct: 'Whether the Retriever actually fetched the right document chunks containing the answer',
    mcq2Wrongs: [
      'The color of the frontend CSS button',
      'Whether Python is installed',
      'Raising temperature to 1.9',
    ],
    mcq2Explain: 'Garbage-in, garbage-out: if retrieval missed the relevant paragraph, even the smartest LLM cannot answer accurately.',
    realWorldScenario:
      'A bank wants an internal chatbot over 15,000 constantly changing compliance PDFs with full auditability and zero retraining lag.',
    interviewQ1: 'What is a Reranker (Cross-Encoder) in an Advanced RAG pipeline?',
    interviewA1:
      'Fast vector search (bi-encoder) fetches the top 25 candidate chunks in milliseconds, then a slower, smarter Cross-Encoder reranker reads each `(query, chunk)` pair together to score exact relevance—keeping only the top 5 sharpest chunks for the LLM.',
    interviewQ2: 'When would you combine BOTH RAG and Fine-Tuning?',
    interviewA2:
      'Use RAG to supply live, verifiable domain facts and citations, and use lightweight Fine-Tuning (LoRA) if you want a smaller, cheaper model to master specialized medical/legal terminology or a strict internal output format.',
  },
  {
    id: 319,
    modNum: 29,
    modTitle: 'Generative AI and LLM Applications',
    topicNumInMod: 11,
    title: 'Grounding, Citations and Source Verification',
    subtitle: 'PROVE EVERY CLAIM SO USERS CAN TRUST AND VERIFY AI ANSWERS',
    coreEn:
      'Grounding ties every factual claim in an LLM’s answer strictly to verified source evidence (retrieved docs, database rows, or live web pages), while inline Citations and Source Verification let users click and audit where each number or policy came from.',
    coreHi:
      'Grounding ka matlab hai ki LLM ke jawab ka har fact kisi verified source (document, database ya web page) se juda ho, aur inline Citations + Source Verification user ko ek click mein check karne dete hain ki ye baat kahan se aayi.',
    analogyTitle: 'Wikipedia Footnotes vs Rumors at a Tea Stall',
    analogyEn:
      'If someone at a tea stall says "Tax rate dropped to 5%", you don’t know whether to trust it. If a report says "Tax rate is 12% [Finance Act 2026, Section 4, p.12]" with a clickable link, you can verify it in 2 seconds!',
    analogyHi:
      'Chai ki dukaan par koi bole "Tax 5% ho gaya", toh bharosa nahi hota. Par agar report mein likha ho "Tax 12% hai [Finance Act 2026, Page 12]" clickable link ke saath, toh aap 2 second mein sach check kar sakte hain!',
    steps: [
      {
        title: 'Assign Stable Chunk IDs',
        en: 'Tag every retrieved snippet with a clean ID like `[1]`, `[2]` mapped to real file name, page, and URL.',
        hi: 'Har retrieved snippet ko clean ID (`[1]`, `[2]`) dein jo asli file naam, page number aur URL se juda ho.',
        tone: 'sky',
      },
      {
        title: 'Enforce Strict Citation Prompting',
        en: 'Instruct the LLM to attach `[1]` after every factual claim and refuse unsupported claims.',
        hi: 'LLM ko rule dein ki har fact ke peeche `[1]` citation lagaye aur bina proof koi daava na kare.',
        tone: 'amber',
      },
      {
        title: 'Run Post-Generation Verification',
        en: 'Verify that every cited ID actually exists in the retrieved set and supports the claim (faithfulness check).',
        hi: 'Post-check chalayein ki har cited `[ID]` sach mein retrieved list mein maujood hai aur us claim ko support karta hai.',
        tone: 'lavender',
      },
      {
        title: 'Render Clickable Evidence in UI',
        en: 'Show hover tooltips or side-panel snippets so humans can audit the exact highlighted quote in 1 click.',
        hi: 'UI mein clickable badges dikhayein taaki user 1 click mein original highlighted quote padh sake.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — AUTOMATED CITATION ID VERIFIER',
    code: `import re

valid_sources = {"1": "HR_Leave_2026.pdf (p.3)", "2": "Travel_Policy.pdf (p.8)"}
llm_reply = "Employees get 18 annual leaves [1] and Rs 5,000 flight bonus [9]."

cited_ids = re.findall(r"\\[(\\d+)\\]", llm_reply)
invalid = [cid for cid in cited_ids if cid not in valid_sources]

print("Cited IDs:", cited_ids)
print("Hallucinated/Invalid Citations:", invalid)`,
    codeOutput: `Cited IDs: ['1', '9']
Hallucinated/Invalid Citations: ['9']`,
    codeCaptionEn: 'A 5-line post-check instantly catches fabricated citation `[9]` before the user ever sees it!',
    codeCaptionHi: 'Sirf 5 line ka post-check nakli citation `[9]` ko user tak pahunchne se pehle hi pakad leta hai!',
    tableTitle: 'Levels of Grounding Trust in Enterprise GenAI',
    tableHeaders: ['Level', 'Behavior', 'User Trust'],
    tableRows: [
      ['0. Ungrounded LLM', 'Answers from frozen memory with no sources', 'Low (high hallucination risk)'],
      ['1. Basic RAG', 'Uses retrieved docs, no visible citations', 'Medium (hard to verify)'],
      ['2. Cited Grounded RAG', 'Inline [1] citations linking to exact doc & page', 'High (1-click human audit)'],
      ['3. Verified Grounded RAG', 'Automated faithfulness check blocks unsupported claims', 'Enterprise-grade (Finance/Legal/Health)'],
    ],
    tableNoteEn: 'Even a cited answer can hallucinate if the LLM misquotes source `[1]`—that is why Faithfulness Verification matters!',
    tableNoteHi: 'Kabhi-kabhi LLM `[1]` likh kar bhi us source ka galat matlab nikal sakta hai—isliye Faithfulness Verification zaroori hai!',
    mistakeEn: 'Asking the LLM to generate raw URLs from memory—LLMs frequently invent plausible-looking 404 URLs!',
    mistakeHi: 'LLM ko memory se websites ke URLs likhne bolna—LLMs aksar nakli 404 URLs bana dete hain!',
    proHabitEn: 'Pass numbered source IDs (`[1]`, `[2]`), have the LLM cite ONLY IDs, and map IDs back to verified URLs in your own code.',
    proHabitHi: 'LLM ko sirf numbered IDs (`[1]`, `[2]`) cite karne bolein, aur un IDs ko asli URLs se apne backend code mein map karein.',
    jobUseEn: 'Grounding and clickable citations are mandatory for legal research tools, medical copilots, financial analysts, and Perplexity-style search.',
    jobUseHi: 'Legal tools, medical copilots, financial research aur Perplexity-style AI search mein grounding aur citations compulsory hain.',
    mcq1Question: 'Why is it safer to make an LLM cite numbered IDs like `[1]` rather than typing full URLs from memory?',
    mcq1Correct: 'Because your backend can deterministically map `[1]` to the real retrieved URL and instantly catch invalid IDs',
    mcq1Wrongs: [
      'Because LLMs cannot type the letter H in https',
      'Because numbers cost zero tokens',
      'To hide the source from users',
    ],
    mcq1Explain: 'Mapping short integer IDs in application code prevents fabricated 404 URLs and broken links.',
    mcq2Question: 'What does "Faithfulness" mean in a grounded RAG system?',
    mcq2Correct: 'Every factual claim in the generated answer is strictly supported by the retrieved source context',
    mcq2Wrongs: [
      'The answer is at least 1,000 words long',
      'The user likes the font style',
      'The model never uses punctuation',
    ],
    mcq2Explain: 'Faithfulness measures whether the LLM stayed truthful to the retrieved evidence without adding invented claims.',
    realWorldScenario:
      'A financial analyst refuses to use your earnings-call AI assistant because she cannot verify which slide each revenue figure came from.',
    interviewQ1: 'How can you automatically verify whether a RAG answer is faithful to its retrieved context before showing it?',
    interviewA1:
      'Use an NLI (Natural Language Inference) entailment model or a fast LLM-as-a-Judge verifier that splits the answer into atomic claims and checks whether each claim is strictly entailed by the retrieved chunks—flagging or abstaining if not.',
    interviewQ2: 'What is the difference between Citation Recall and Citation Precision?',
    interviewA2:
      'Citation Recall checks if every factual claim in the answer has a supporting citation (no uncited claims). Citation Precision checks if every cited source actually supports the claim it is attached to (no fake or irrelevant citations).',
  },
  {
    id: 320,
    modNum: 29,
    modTitle: 'Generative AI and LLM Applications',
    topicNumInMod: 12,
    title: 'Evaluating Generative AI Outputs',
    subtitle: 'REPLACING "VIBES-BASED CHECKING" WITH RIGOROUS GENAI EVALS',
    coreEn:
      'Evaluating Generative AI Outputs replaces casual "vibe checks" with systematic testing—combining a curated Golden Dataset, deterministic checks (JSON validity, latency, cost), RAG metrics (Context Recall, Faithfulness, Answer Relevance), and calibrated LLM-as-a-Judge + Human review.',
    coreHi:
      'Generative AI Evaluation ka matlab hai sirf 2-3 prompts "vibe check" karne ke bajaye systematic testing karna—Golden Dataset, deterministic checks (JSON, speed, cost), RAG metrics (Faithfulness, Recall) aur LLM-as-a-Judge + Human review ke saath.',
    analogyTitle: 'Crash-Testing a Car Before Putting It on the Highway',
    analogyEn:
      'No car company drives a new car around the parking lot twice and says "Feels good, ship it!" They run standardized crash tests, brake tests, and mileage tests on every single change. GenAI Evals are your crash-test lab!',
    analogyHi:
      'Koi car company parking mein 2 chakkar lagakar "Badhiya lag rahi hai, launch kar do!" nahi bolti. Wo har change par crash test, brake test aur mileage test karti hai. GenAI Evals aapke AI app ki wahi test lab hain!',
    steps: [
      {
        title: 'Build a Golden Evaluation Dataset',
        en: 'Curate 50–200 real user queries covering normal cases, tricky edge cases, and adversarial prompts.',
        hi: '50–200 real user sawalon ka Golden Dataset banayein—jisme aam sawal, tricky edge cases aur adversarial prompts hon.',
        tone: 'sky',
      },
      {
        title: 'Run Fast Deterministic Checks',
        en: 'Automatically verify valid JSON schema, required citations, forbidden PII leaks, latency, and token cost.',
        hi: 'Valid JSON, citations, PII safety, response speed aur token cost ko automated code se check karein.',
        tone: 'amber',
      },
      {
        title: 'Score Quality with RAG Metrics & LLM-as-a-Judge',
        en: 'Measure Faithfulness, Answer Relevance, and Context Recall using a strong rubric-guided judge model.',
        hi: 'Clear rubric ke saath strong LLM-as-a-Judge se Faithfulness, Relevance aur Context Recall score karein.',
        tone: 'lavender',
      },
      {
        title: 'Calibrate with Humans & Gate CI/CD',
        en: 'Verify judge scores against human experts, and block any prompt/model change that regresses eval scores!',
        hi: 'Human experts se judge ko calibrate karein aur CI/CD mein rule lagayein ki agar eval score gire toh deploy ruk jaye!',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON — AUTOMATED GENAI EVAL SCORECARD',
    code: `eval_results = [
    {"id": "Q1", "valid_json": True,  "faithful": 1.0, "latency_s": 0.8},
    {"id": "Q2", "valid_json": True,  "faithful": 1.0, "latency_s": 1.1},
    {"id": "Q3", "valid_json": False, "faithful": 0.0, "latency_s": 1.4},
]
json_rate = sum(r["valid_json"] for r in eval_results) / len(eval_results)
avg_faith = sum(r["faithful"] for r in eval_results) / len(eval_results)
avg_lat   = sum(r["latency_s"] for r in eval_results) / len(eval_results)

print(f"JSON Pass Rate: {json_rate*100:.1f}% | Faithfulness: {avg_faith:.2f} | Avg Latency: {avg_lat:.2f}s")`,
    codeOutput: 'JSON Pass Rate: 66.7% | Faithfulness: 0.67 | Avg Latency: 1.10s',
    codeCaptionEn: 'An automated scorecard lets you compare Prompt v1 vs Prompt v2 objectively in seconds!',
    codeCaptionHi: 'Automated scorecard se aap seconds mein pakka pata kar sakte hain ki Prompt v2 sach mein Prompt v1 se better hai ya nahi!',
    tableTitle: 'The 4 Pillars of Production GenAI Evaluation',
    tableHeaders: ['Eval Pillar', 'What It Measures', 'Example Metric'],
    tableRows: [
      ['Retrieval Quality (RAG)', 'Did search fetch the right docs?', 'Context Recall@5, MRR, NDCG'],
      ['Generation Faithfulness', 'Did the LLM stick strictly to facts?', 'Faithfulness / Hallucination Rate'],
      ['Task & Format Correctness', 'Did it solve the user’s goal cleanly?', 'JSON validity, Exact Match, LLM-Judge Rubric'],
      ['Ops & Safety', 'Is it fast, affordable, and safe?', 'P95 Latency, Cost/Query, Toxicity/PII Rate'],
    ],
    tableNoteEn: 'Famous GenAI engineering rule: "If you don’t have evals, you aren’t engineering—you’re just guessing!"',
    tableNoteHi: 'GenAI engineering ka golden rule: "Agar aapke paas evals nahi hain, toh aap engineering nahi balki sirf tukke maar rahe hain!"',
    mistakeEn: 'Testing a prompt change on 2 happy-path examples ("looks good to me!") and accidentally breaking 30% of edge cases in production.',
    mistakeHi: 'Prompt badalne ke baad sirf 2 easy sawalon par check karke live kar dena aur production mein 30% edge cases tod dena.',
    proHabitEn: 'Build a 50-case Golden Eval Set on week 1, run it automatically before every prompt/model switch, and track regressions over time.',
    proHabitHi: 'Pehle hafte mein hi 50 cases ka Golden Eval Set banayein aur har prompt ya model change se pehle use zaroor chalayein.',
    jobUseEn: 'Eval engineering (RAGAS, DeepEval, Promptfoo, LangSmith) is the #1 differentiator of senior GenAI Engineers in hiring interviews.',
    jobUseHi: 'Eval engineering (RAGAS, DeepEval, Promptfoo, LangSmith) hi junior aur senior GenAI Engineers ke beech sabse bada farq banata hai.',
    mcq1Question: 'Why is "vibe checking" (manually trying 2 or 3 prompts) dangerous for production GenAI applications?',
    mcq1Correct: 'A prompt tweak that fixes 1 example often silently breaks dozens of other edge cases without automated regression tests',
    mcq1Wrongs: [
      'Because LLMs charge extra for manual typing',
      'Because automated evals require zero test questions',
      'Because manual reading always takes 10 years',
    ],
    mcq1Explain: 'Systematic Golden-Set evals catch regressions objectively across all edge cases whenever prompts, chunks, or models change.',
    mcq2Question: 'What is "LLM-as-a-Judge" in Generative AI evaluation?',
    mcq2Correct: 'Using a strong, rubric-guided LLM (calibrated against human reviewers) to score open-ended outputs at scale',
    mcq2Wrongs: [
      'Letting an LLM sentence people in a real courtroom',
      'Replacing all Python unit tests with random guesses',
      'Asking the same weak model to grade itself with no rubric',
    ],
    mcq2Explain: 'LLM-as-a-Judge scales semantic evaluation (faithfulness, helpfulness, tone) across hundreds of test cases when paired with clear rubrics and human calibration.',
    realWorldScenario:
      'Your team wants to switch from an expensive frontier LLM to a 5x cheaper fast model—your CTO asks for hard proof that quality won’t drop.',
    interviewQ1: 'What are the core biases to watch out for when using LLM-as-a-Judge, and how do you mitigate them?',
    interviewA1:
      'Key biases include position bias (preferring the first option in A/B comparisons), verbosity bias (preferring longer answers), and self-preference bias. Mitigate by using binary/clear rubrics, swapping A/B order, using a different judge model, and calibrating agreement against human labels.',
    interviewQ2: 'Why are classic NLP metrics like BLEU and ROUGE usually insufficient for evaluating modern Chat & RAG LLMs?',
    interviewA2:
      'BLEU and ROUGE only measure exact word/n-gram overlap—so a factually correct, clear paraphrase gets a low score while a fluent hallucination with overlapping keywords can score high. Semantic rubrics and faithfulness evals capture real quality.',
  },
];
