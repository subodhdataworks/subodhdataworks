import type { DsTopicBlueprint } from './dsCurriculumBlueprintEngine';

export const DS_TAB5_BLUEPRINTS: DsTopicBlueprint[] = [
  // =========================================================================
  // MODULE 21: MACHINE LEARNING FUNDAMENTALS (IDs 222–231)
  // =========================================================================
  {
    id: 222,
    modNum: 21,
    modTitle: 'Machine Learning Fundamentals',
    topicNumInMod: 1,
    title: 'What Is Machine Learning?',
    subtitle: 'TEACHING COMPUTERS TO LEARN PATTERNS FROM EXAMPLES INSTEAD OF FIXED RULES',
    coreEn:
      'Machine Learning (ML) is a way of building software that learns patterns directly from historical data instead of following hand-written if-else rules. You show the computer many examples, it discovers the mathematical relationship, and then it makes predictions on new, unseen data.',
    coreHi:
      'Machine Learning (ML) ek aisa tareeka hai jisme computer purane data se khud patterns seekhta hai, bina har rule ko manually if-else mein likhe. Aap computer ko examples dikhate hain, woh relationship samajhta hai, aur phir naye unseen data par prediction karta hai.',
    analogyTitle: 'Child Learning to Recognize Mangoes vs Apples',
    analogyEn:
      'Nobody gives a 4-year-old a 50-page geometry manual to tell a mango from an apple. You just show them 20 mangoes and 20 apples. Soon, their brain learns the pattern of shape and color and recognizes a brand-new fruit at the market.',
    analogyHi:
      'Koi bhi 4 saal ke bacche ko aam aur seb pehchanne ke liye 50 page ki manual nahi deta. Aap bas 20 aam aur 20 seb dikhate hain. Bacche ka dimaag khud shape aur color ka pattern seekh kar market mein naya phal pehchan leta hai.',
    steps: [
      {
        title: 'Collect Historical Examples',
        en: 'Gather past records with inputs and outcomes, such as past emails marked Spam or Not Spam.',
        hi: 'Purana data ikattha karein jisme inputs aur outcomes hon, jaise Spam ya Not Spam mark kiye hue emails.',
        tone: 'sky',
      },
      {
        title: 'Split Data Safely',
        en: 'Keep one portion for training and lock away a separate test set to check real-world performance.',
        hi: 'Data ka ek hissa training ke liye rakhein aur ek alag test set lock kar dein asli performance check karne ke liye.',
        tone: 'amber',
      },
      {
        title: 'Train the Algorithm',
        en: 'Let the ML algorithm adjust its internal parameters to minimize errors on the training examples.',
        hi: 'ML algorithm ko training examples par galti kam karte hue apne internal parameters adjust karne dein.',
        tone: 'lavender',
      },
      {
        title: 'Predict on Unseen Data',
        en: 'Evaluate on the locked test set first, then use the trained model on fresh real-world inputs.',
        hi: 'Pehle locked test set par evaluate karein, phir trained model ko naye real-world inputs par use karein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: TRADITIONAL RULES VS FIRST ML MODEL',
    code: `from sklearn.linear_model import LinearRegression
import numpy as np

# Hours studied -> Exam score (illustrative sample)
X_train = np.array([[1], [2], [3], [4], [5]])
y_train = np.array([35, 45, 55, 65, 75])

model = LinearRegression()
model.fit(X_train, y_train)

pred = model.predict([[6]])
print(f"Predicted score for 6 hrs: {pred[0]:.1f}")`,
    codeOutput: `Predicted score for 6 hrs: 85.0`,
    codeCaptionEn: 'Instead of hardcoding score = 25 + 10 * hours, the model learned the exact slope (10) and intercept (25) from data.',
    codeCaptionHi: 'Manually formula likhne ke bajay, model ne data se khud slope (10) aur intercept (25) seekh liya.',
    tableTitle: 'Traditional Programming vs Machine Learning',
    tableHeaders: ['Dimension', 'Traditional Programming', 'Machine Learning'],
    tableRows: [
      ['What You Provide', 'Data + Hand-written Rules', 'Data + Past Answers (or Raw Patterns)'],
      ['What Computer Outputs', 'Final Answers', 'Learned Rules (Trained Model)'],
      ['Spam Filter Example', '100 brittle if-else keyword rules', 'Learns evolving spam patterns automatically'],
      ['When Patterns Change', 'Engineer must rewrite code manually', 'Retrain model on fresh labeled data'],
    ],
    tableNoteEn: 'Use traditional code when exact rules are known (like tax calculation); use ML when rules are too complex or change often.',
    tableNoteHi: 'Jab exact rules pata hon (jaise tax formula) tab normal coding best hai; jab rules complex hon ya badalte rahein tab ML use karein.',
    mistakeEn: 'Using Machine Learning for simple problems that a 3-line if-else formula or SQL query can solve faster and with 100% accuracy.',
    mistakeHi: 'Aise simple problems mein ML lagana jahan 3-line ka if-else ya SQL query zyada fast aur 100% accurate result de sakta hai.',
    proHabitEn: 'Always ask first: "Do we have clean historical data, and can we evaluate predictions on unseen test examples?"',
    proHabitHi: 'Hamesha pehle poochein: "Kya hamare paas clean historical data hai, aur kya hum unseen test examples par model check kar sakte hain?"',
    jobUseEn: 'Powering spam filters, UPI fraud alerts, OTT movie recommendations, and demand forecasting across tech and finance companies.',
    jobUseHi: 'Tech aur finance companies mein spam filters, UPI fraud alerts, OTT recommendations, aur demand forecasting banane mein use hota hai.',
    mcq1Question: 'What is the main difference between traditional programming and Machine Learning?',
    mcq1Correct: 'Traditional programming uses hand-coded rules to get answers, while ML learns rules from data and examples.',
    mcq1Wrongs: [
      'Machine Learning does not require any data to work.',
      'Traditional programming can only run on spreadsheets, not Python.',
      'Machine Learning guarantees 100% accuracy on every prediction.',
    ],
    mcq1Explain: 'ML flips the workflow: instead of humans writing explicit rules, the algorithm discovers patterns from data.',
    mcq2Question: 'Which task is the BEST fit for Machine Learning rather than fixed if-else rules?',
    mcq2Correct: 'Detecting newly invented credit card fraud patterns from millions of transactions.',
    mcq2Wrongs: [
      'Calculating 18% GST on a fixed invoice subtotal.',
      'Converting temperatures from Celsius to Fahrenheit.',
      'Sorting a list of employee names alphabetically.',
    ],
    mcq2Explain: 'Fraud patterns constantly evolve and involve subtle combinations of signals that cannot be captured by static if-else rules.',
    realWorldScenario:
      'An e-commerce company wants to flag fake product reviews. Writing keyword rules fails because spammers change wording every week. How do you approach this with ML?',
    interviewQ1: 'How would you explain Machine Learning to a non-technical business manager?',
    interviewA1:
      'Instead of programming rigid rules, we feed past business examples into an algorithm so it learns what patterns lead to an outcome—like a seasoned employee who improves with experience—and then we test it on unseen cases before deploying.',
    interviewQ2: 'When should you NOT use Machine Learning?',
    interviewA2:
      'Avoid ML when deterministic rules already exist, when you lack sufficient clean data, or when the cost of building and maintaining a model outweighs the business value.',
  },
  {
    id: 223,
    modNum: 21,
    modTitle: 'Machine Learning Fundamentals',
    topicNumInMod: 2,
    title: 'Types of Machine Learning',
    subtitle: 'SUPERVISED, UNSUPERVISED, AND REINFORCEMENT LEARNING AT A GLANCE',
    coreEn:
      'Machine Learning has three major paradigms based on how the algorithm receives feedback: Supervised Learning (learns from labeled answers), Unsupervised Learning (finds hidden structure in unlabeled data), and Reinforcement Learning (learns by trial, error, and rewards).',
    coreHi:
      'Feedback kaise milta hai uske basis par Machine Learning 3 main types ki hoti hai: Supervised Learning (labeled answers se seekhna), Unsupervised Learning (bina labels ke hidden groups dhoondhna), aur Reinforcement Learning (trial, error aur reward se seekhna).',
    analogyTitle: 'Three Ways to Learn Cooking',
    analogyEn:
      'Supervised learning is cooking with a chef who tastes every dish and corrects you. Unsupervised learning is organizing a spice cabinet by aroma and color with no labels. Reinforcement learning is experimenting with ingredients and remembering what gets applause at dinner.',
    analogyHi:
      'Supervised learning matlab chef ke saath seekhna jo har dish taste karke bataye. Unsupervised learning matlab bina label ke masalon ko khushboo aur rang se group karna. Reinforcement learning matlab experiment karke seekhna ki kis dish par sabse zyada taarif milti hai.',
    steps: [
      {
        title: 'Inspect Whether Labels Exist',
        en: 'Check if your dataset has a known target column (like Price or Churn) or only raw features.',
        hi: 'Check karein ki aapke dataset mein known target column (jaise Price ya Churn) hai ya sirf raw features hain.',
        tone: 'sky',
      },
      {
        title: 'Match Business Goal to Paradigm',
        en: 'Predicting known outcomes = Supervised; discovering hidden segments = Unsupervised; sequential actions = Reinforcement.',
        hi: 'Known outcome predict karna = Supervised; hidden segments dhoondhna = Unsupervised; sequential decisions = Reinforcement.',
        tone: 'amber',
      },
      {
        title: 'Choose Evaluation Method',
        en: 'Use held-out test metrics for Supervised, cluster/business validation for Unsupervised, and cumulative reward for Reinforcement.',
        hi: 'Supervised ke liye test metrics, Unsupervised ke liye cluster/business checks, aur Reinforcement ke liye total reward use karein.',
        tone: 'lavender',
      },
      {
        title: 'Build Smallest Viable Prototype',
        en: 'Start with the simplest paradigm that solves the business problem before adding complexity.',
        hi: 'Business problem solve karne ke liye sabse simple paradigm se start karein, bina zaroorat complexity na badhayein.',
        tone: 'green',
      },
    ],
    tableTitle: 'The 3 Main Types of Machine Learning Compared',
    tableHeaders: ['ML Type', 'Training Data', 'Core Goal', 'Everyday Example'],
    tableRows: [
      ['Supervised Learning', 'Labeled (Inputs + Answers)', 'Predict a number or category', 'Predicting house price or email spam'],
      ['Unsupervised Learning', 'Unlabeled (Inputs only)', 'Discover groups or compress data', 'Grouping shoppers into buyer personas'],
      ['Reinforcement Learning', 'Environment + Rewards', 'Learn best sequence of actions', 'Game-playing AI or warehouse robot routing'],
      ['Semi-Supervised (Bonus)', 'Few labeled + many unlabeled', 'Cut labeling cost while predicting', 'Medical scans with limited doctor labels'],
    ],
    tableNoteEn: 'Over 80% of everyday business Data Science jobs focus on Supervised and Unsupervised Learning on tabular data.',
    tableNoteHi: 'Industry ke 80%+ Data Science projects tabular data par Supervised aur Unsupervised Learning par based hote hain.',
    mistakeEn: 'Forcing Reinforcement Learning onto a standard customer prediction problem where simple Supervised Learning works far better.',
    mistakeHi: 'Ek normal customer prediction problem par Reinforcement Learning lagana jahan simple Supervised Learning zyada reliable hota hai.',
    proHabitEn: 'Always frame the business question first—do you have historical labels, or are you exploring unknown patterns?',
    proHabitHi: 'Hamesha pehle business question clear karein—kya purane labels available hain, ya naye hidden patterns explore karne hain?',
    jobUseEn: 'Choosing the right ML architecture during project kickoff meetings before writing a single line of modeling code.',
    jobUseHi: 'Project kickoff meetings mein coding start karne se pehle sahi ML approach choose karne mein madad milti hai.',
    mcq1Question: 'An AI agent learns to play chess by winning (+1) or losing (-1) thousands of games. Which type of ML is this?',
    mcq1Correct: 'Reinforcement Learning',
    mcq1Wrongs: [
      'Supervised Regression',
      'Unsupervised Clustering',
      'Dimensionality Reduction',
    ],
    mcq1Explain: 'Reinforcement Learning optimizes sequential decisions through trial-and-error interaction and reward signals.',
    mcq2Question: 'You have 50,000 customer purchase records with NO predefined customer categories and want to discover natural shopper groups. Which ML type fits?',
    mcq2Correct: 'Unsupervised Learning',
    mcq2Wrongs: [
      'Supervised Classification',
      'Reinforcement Learning',
      'Simple Linear Regression',
    ],
    mcq2Explain: 'Because there are no target labels, discovering hidden groupings is an Unsupervised Learning (clustering) task.',
    realWorldScenario:
      'A telecom startup hands you call logs, billing history, and a column showing who cancelled last month. They also want to discover natural customer personas for marketing. Which ML types do you recommend for each goal?',
    interviewQ1: 'What are the three main types of Machine Learning, and how do you choose between them?',
    interviewA1:
      'Supervised learning uses labeled targets for prediction, unsupervised learning finds hidden structure in unlabeled data, and reinforcement learning learns sequential policies via rewards. Choice depends on whether labels exist and whether decisions are one-shot or sequential.',
    interviewQ2: 'What is semi-supervised learning and when is it useful?',
    interviewA2:
      'Semi-supervised learning combines a small labeled dataset with a large unlabeled dataset—ideal when labeling is expensive, such as doctors annotating X-rays or legal experts tagging contracts.',
  },
  {
    id: 224,
    modNum: 21,
    modTitle: 'Machine Learning Fundamentals',
    topicNumInMod: 3,
    title: 'Supervised vs Unsupervised Learning',
    subtitle: 'PREDICTING KNOWN ANSWERS VS DISCOVERING HIDDEN STRUCTURE',
    coreEn:
      'Supervised Learning trains on input-output pairs (X, y) so the model can predict y for new X. Unsupervised Learning only receives inputs X with no y column, so it groups similar records, spots unusual outliers, or simplifies many columns into fewer ones.',
    coreHi:
      'Supervised Learning mein model ko input (X) aur sahi answer (y) dono milte hain taaki woh naye data ka y predict kar sake. Unsupervised Learning mein sirf X hota hai, koi answer column nahi hota—model khud groups banata hai ya unusual records pakadta hai.',
    analogyTitle: 'Answer-Key Textbook vs Sorting Unlabeled Photos',
    analogyEn:
      'Supervised learning is studying from a math workbook that has the answer key in the back so you can check every practice problem. Unsupervised learning is dumping 500 unlabeled family photos on a table and sorting them into piles by who appears together.',
    analogyHi:
      'Supervised learning aisa hai jaise math book ke peeche answer key dekh kar practice karna. Unsupervised learning aisa hai jaise 500 bina naam wali photos table par rakh kar unhe chehron aur events ke hisaab se alag piles mein baantna.',
    steps: [
      {
        title: 'Check Target Column Availability',
        en: 'Look at the dataset schema: is there a verified outcome column (y) you want to forecast?',
        hi: 'Dataset schema dekhein: kya koi verified outcome column (y) hai jise predict karna hai?',
        tone: 'sky',
      },
      {
        title: 'Define Success Metric',
        en: 'Supervised models are graded against ground-truth test labels; unsupervised models are judged by cohesion and business usefulness.',
        hi: 'Supervised models ko ground-truth test labels se grade karte hain; unsupervised models ko cluster quality aur business value se.',
        tone: 'amber',
      },
      {
        title: 'Prepare Inputs Without Leakage',
        en: 'For supervised tasks, split train/test before scaling; for unsupervised tasks, scale features so one large unit does not dominate.',
        hi: 'Supervised mein scaling se pehle train/test split karein; unsupervised mein features scale karein taaki bade numbers dominate na karein.',
        tone: 'lavender',
      },
      {
        title: 'Validate With Domain Experts',
        en: 'Verify supervised predictions on unseen test data and review unsupervised groups with business stakeholders.',
        hi: 'Supervised predictions ko unseen test data par check karein aur unsupervised groups ko business team ke saath review karein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: SUPERVISED FIT(X, y) VS UNSUPERVISED FIT(X)',
    code: `from sklearn.linear_model import LogisticRegression
from sklearn.cluster import KMeans
import numpy as np

X = np.array([[20, 2], [22, 3], [80, 9], [85, 10]])
y = np.array([0, 0, 1, 1])  # Known labels (0=Low, 1=High)

# Supervised: needs BOTH X and y
sup_model = LogisticRegression().fit(X, y)

# Unsupervised: needs ONLY X (no y!)
unsup_model = KMeans(n_clusters=2, n_init=10, random_state=42).fit(X)

print("Supervised pred:", sup_model.predict([[25, 3]])[0])
print("Unsupervised cluster:", unsup_model.predict([[25, 3]])[0])`,
    codeOutput: `Supervised pred: 0
Unsupervised cluster: 0`,
    codeCaptionEn: 'Notice the exact API difference in scikit-learn: supervised uses .fit(X, y), while unsupervised uses .fit(X) only.',
    codeCaptionHi: 'Scikit-learn mein direct difference dekhein: supervised mein .fit(X, y) lagta hai, aur unsupervised mein sirf .fit(X).',
    tableTitle: 'Supervised vs Unsupervised Learning Side-by-Side',
    tableHeaders: ['Feature', 'Supervised Learning', 'Unsupervised Learning'],
    tableRows: [
      ['Target Variable (y)', 'Required (known labels)', 'Not present (unlabeled data)'],
      ['Scikit-learn Call', 'model.fit(X_train, y_train)', 'model.fit(X_scaled)'],
      ['Main Tasks', 'Regression & Classification', 'Clustering, PCA, Anomaly Detection'],
      ['How Accuracy Is Checked', 'Compare predictions vs held-out y_test', 'Silhouette score + human/business review'],
    ],
    tableNoteEn: 'You can even combine both: run unsupervised clustering first to create customer segments, then use segment IDs as features in a supervised model.',
    tableNoteHi: 'Aap dono ko combine bhi kar sakte hain: pehle clustering se segments banayein, phir unhe supervised model mein feature ki tarah use karein.',
    mistakeEn: 'Expecting an unsupervised clustering model to automatically tell you "which customer will churn" without providing historical churn labels.',
    mistakeHi: 'Bina purane churn labels diye unsupervised clustering model se yeh umeed karna ki woh exact churn predict kar dega.',
    proHabitEn: 'Verify whether your business problem needs a concrete prediction (supervised) or exploratory grouping (unsupervised) before picking an algorithm.',
    proHabitHi: 'Algorithm choose karne se pehle pakka karein ki business ko exact prediction chahiye (supervised) ya exploratory grouping (unsupervised).',
    jobUseEn: 'Banks use supervised models to approve/decline loans and unsupervised models to detect unusual new money-laundering rings.',
    jobUseHi: 'Banks loan approval ke liye supervised models aur naye unusual fraud rings pakadne ke liye unsupervised models use karte hain.',
    mcq1Question: 'Why does scikit-learn KMeans only take X in .fit(X) while LogisticRegression takes .fit(X, y)?',
    mcq1Correct: 'KMeans is unsupervised (no target labels), whereas LogisticRegression is supervised and needs target labels y.',
    mcq1Wrongs: [
      'KMeans cannot handle numerical arrays with more than one column.',
      'LogisticRegression ignores the X matrix during training.',
      'KMeans automatically downloads labels from the internet.',
    ],
    mcq1Explain: 'Supervised algorithms learn a mapping from X to y; unsupervised algorithms only inspect patterns inside X.',
    mcq2Question: 'Why is evaluating an unsupervised model generally trickier than evaluating a supervised model?',
    mcq2Correct: 'There is no ground-truth answer column (y_test) to directly compare predictions against.',
    mcq2Wrongs: [
      'Unsupervised models cannot run on datasets larger than 100 rows.',
      'Unsupervised models always take 10 hours to train.',
      'Python does not support metrics for unsupervised learning.',
    ],
    mcq2Explain: 'Without true labels, you rely on internal metrics (like silhouette score) plus domain expert inspection to confirm usefulness.',
    realWorldScenario:
      'A streaming platform wants to (1) predict whether a user will renew next month and (2) group viewers by watching habits without predefined labels. Which approach goes where?',
    interviewQ1: 'How do you decide between supervised and unsupervised learning for a new project?',
    interviewA1:
      'I check if reliable historical target labels exist and align with the business KPI. If yes and we need predictions, I use supervised learning; if we want to discover hidden structure or compress features without labels, I use unsupervised learning.',
    interviewQ2: 'Can unsupervised learning help a supervised learning pipeline?',
    interviewA2:
      'Yes—techniques like PCA reduce high-dimensional noise, and clustering or anomaly scores computed on training data can serve as engineered features for downstream supervised models.',
  },
  {
    id: 225,
    modNum: 21,
    modTitle: 'Machine Learning Fundamentals',
    topicNumInMod: 4,
    title: 'Regression vs Classification',
    subtitle: 'PREDICTING A CONTINUOUS NUMBER VS PREDICTING A CATEGORY',
    coreEn:
      'Inside Supervised Learning, the type of target column decides the problem: Regression predicts a continuous numerical value (like ₹48.5 Lakhs or 31.2°C), while Classification predicts a discrete class or category (like Spam/Not Spam or Low/Medium/High risk).',
    coreHi:
      'Supervised Learning ke andar target column ka type decide karta hai problem kya hai: Regression ek continuous number predict karta hai (jaise ₹48.5 Lakh ya 31.2°C), jabki Classification ek fixed category ya class predict karta hai (jaise Spam/Not Spam ya Loan Approved/Rejected).',
    analogyTitle: 'Thermometer vs Traffic Light',
    analogyEn:
      'A thermometer gives you a continuous number like 37.4°C—that is Regression ("how much?"). A traffic light shows one discrete state: Red, Yellow, or Green—that is Classification ("which bucket?").',
    analogyHi:
      'Thermometer aapko ek continuous number deta hai jaise 37.4°C—yeh Regression hai ("kitna?"). Traffic light sirf teen fixed states dikhata hai: Red, Yellow, ya Green—yeh Classification hai ("kaunsi category?").',
    steps: [
      {
        title: 'Inspect Target Data Type',
        en: 'Ask whether the target answer is a measurable quantity (number) or a distinct label (category).',
        hi: 'Check karein ki target answer ek measurable quantity (number) hai ya ek distinct label (category).',
        tone: 'sky',
      },
      {
        title: 'Check Business Action Needed',
        en: 'Do stakeholders need an exact forecast (₹ revenue) or a yes/no decision (approve or flag)?',
        hi: 'Stakeholders ko exact forecast (₹ revenue) chahiye ya yes/no decision (approve ya flag)?',
        tone: 'amber',
      },
      {
        title: 'Select Matching Algorithm Family',
        en: 'Use Linear/Tree/Forest Regressors for numbers, and Logistic Regression/Tree/Forest Classifiers for categories.',
        hi: 'Numbers ke liye Regressors aur categories ke liye Classifiers choose karein.',
        tone: 'lavender',
      },
      {
        title: 'Pick Appropriate Evaluation Metrics',
        en: 'Measure Regression with MAE/RMSE/R² and Classification with Precision, Recall, F1, and ROC-AUC.',
        hi: 'Regression ko MAE/RMSE/R² se aur Classification ko Precision, Recall, F1, aur ROC-AUC se evaluate karein.',
        tone: 'green',
      },
    ],
    tableTitle: 'Regression vs Classification: Spot the Difference',
    tableHeaders: ['Business Question', 'Target Output', 'Task Type', 'Typical Metric'],
    tableRows: [
      ['What will tomorrow’s electricity demand (MW) be?', 'Continuous number (e.g., 412.6 MW)', 'Regression', 'MAE, RMSE, R²'],
      ['Will this loan applicant default?', 'Binary category (Yes / No)', 'Binary Classification', 'Recall, F1, ROC-AUC'],
      ['Which support department should get this ticket?', '3+ categories (Billing / Tech / Sales)', 'Multi-class Classification', 'Macro F1, Confusion Matrix'],
      ['How many days until this machine needs service?', 'Continuous number (e.g., 14.5 days)', 'Regression', 'MAE, RMSE'],
    ],
    tableNoteEn: 'Even if categories are encoded as numbers (0, 1, 2), predicting them is STILL Classification—not Regression!',
    tableNoteHi: 'Agar categories ko numbers (0, 1, 2) mein code kiya gaya ho, tab bhi unhe predict karna Classification hi hai—Regression nahi!',
    mistakeEn: 'Using Linear Regression to predict class codes like 0=Cat, 1=Dog, 2=Bird, which produces nonsense predictions like 1.47.',
    mistakeHi: '0=Cat, 1=Dog, 2=Bird jaise class codes par Linear Regression laga dena, jisse 1.47 jaisa meaningless output aata hai.',
    proHabitEn: 'Always check if numeric target values have real mathematical order and distance before choosing Regression.',
    proHabitHi: 'Regression choose karne se pehle hamesha verify karein ki target numbers ka real mathematical order aur distance matlab rakhta hai.',
    jobUseEn: 'Preventing wrong model and metric selection at day 1 of any analytics or ML engagement.',
    jobUseHi: 'Kisi bhi ML project ke day 1 par galat model aur galat metric choose hone se bachata hai.',
    mcq1Question: 'Predicting whether a customer will cancel their subscription (Yes/No) is an example of:',
    mcq1Correct: 'Binary Classification',
    mcq1Wrongs: [
      'Simple Linear Regression',
      'Unsupervised Clustering',
      'Polynomial Regression',
    ],
    mcq1Explain: 'Because the outcome is one of two discrete classes (Yes or No), it is a Binary Classification task.',
    mcq2Question: 'Why shouldn’t you use Accuracy (%) to evaluate a House Price Regression model?',
    mcq2Correct: 'House prices are continuous numbers, so predictions are rarely exact to the rupee; we measure error magnitude (MAE/RMSE) instead.',
    mcq2Wrongs: [
      'Accuracy can only be computed in Excel, not Python.',
      'Regression models do not output numbers.',
      'House prices are always unsupervised.',
    ],
    mcq2Explain: 'Predicting ₹50,00,100 instead of ₹50,00,000 is an excellent prediction, even though exact equality would score it "wrong".',
    realWorldScenario:
      'A hospital wants two models: one to estimate a patient’s expected length of stay in days, and another to predict whether they will be readmitted within 30 days. Classify each problem and suggest its evaluation metric.',
    interviewQ1: 'What is the difference between Regression and Classification, and can one be converted into the other?',
    interviewA1:
      'Regression predicts continuous quantities while Classification predicts discrete classes. You can convert a regression target into classification by binning (e.g., turning exact income into Low/Medium/High brackets), though you lose fine numerical precision.',
    interviewQ2: 'Why is Logistic Regression called "Regression" even though it is a Classification algorithm?',
    interviewA2:
      'Internally it computes a linear regression score and passes it through a sigmoid function to output a continuous probability between 0 and 1, which is then thresholded (e.g., at 0.5) to assign a class.',
  },
  {
    id: 226,
    modNum: 21,
    modTitle: 'Machine Learning Fundamentals',
    topicNumInMod: 5,
    title: 'Features and Target Variables',
    subtitle: 'SEPARATING THE INPUT CLUES (X) FROM THE ANSWER YOU PREDICT (y)',
    coreEn:
      'In tabular Machine Learning, Features (denoted X) are the input columns—the clues the model uses to make a decision. The Target Variable (denoted y) is the single output column you want the model to predict. Every row is one observation (sample).',
    coreHi:
      'Tabular Machine Learning mein Features (X) woh input columns hote hain jo model ko clues dete hain. Target Variable (y) woh akela output column hota hai jise model ko predict karna hota hai. Har row ek observation (sample) hoti hai.',
    analogyTitle: 'Doctor’s Symptoms vs Final Diagnosis',
    analogyEn:
      'When you visit a doctor, your fever temperature, blood pressure, cough duration, and age are the Features (X). The doctor’s final diagnosis ("Viral Flu" or "Healthy") is the Target (y).',
    analogyHi:
      'Jab aap doctor ke paas jaate hain, toh aapka bukhar, blood pressure, khansi ke din, aur umar Features (X) hain. Doctor ka final diagnosis ("Viral Flu" ya "Healthy") Target (y) hai.',
    steps: [
      {
        title: 'Identify the Target (y)',
        en: 'Pick the exact outcome column the business wants to predict (e.g., Monthly_Rent).',
        hi: 'Woh exact outcome column choose karein jise business predict karna chahta hai (jaise Monthly_Rent).',
        tone: 'sky',
      },
      {
        title: 'Select Valid Features (X)',
        en: 'Include only columns that will actually be known BEFORE prediction time in real life.',
        hi: 'Sirf woh columns rakhein jo real life mein prediction ke samay PEHLE se available honge.',
        tone: 'amber',
      },
      {
        title: 'Drop IDs and Leaky Columns',
        en: 'Remove random row IDs (like Customer_ID) and any column created after the outcome happened.',
        hi: 'Random IDs (jaise Customer_ID) aur outcome ke baad banne wale leaky columns hata dein.',
        tone: 'lavender',
      },
      {
        title: 'Check Shapes and Types',
        en: 'Verify X is a 2D table (rows × features) and y is a 1D series of matching row count.',
        hi: 'Verify karein ki X ek 2D table hai (rows × features) aur y ek 1D series hai jisme utni hi rows hain.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / PANDAS: SEPARATING X (FEATURES) AND y (TARGET)',
    code: `import pandas as pd

df = pd.DataFrame({
    "flat_id": [101, 102, 103, 104],
    "area_sqft": [650, 900, 1200, 1500],
    "bedrooms": [1, 2, 2, 3],
    "rent_inr": [14000, 21000, 28000, 36000]
})

# Drop ID column and target from X
X = df.drop(columns=["flat_id", "rent_inr"])
y = df["rent_inr"]

print("X shape:", X.shape, "| Columns:", list(X.columns))
print("y shape:", y.shape)`,
    codeOutput: `X shape: (4, 2) | Columns: ['area_sqft', 'bedrooms']
y shape: (4,)`,
    codeCaptionEn: 'We dropped flat_id because arbitrary IDs have no predictive pattern, and kept rent_inr exclusively in y.',
    codeCaptionHi: 'Humne flat_id hata diya kyunki ID mein koi pattern nahi hota, aur rent_inr ko sirf y mein rakha.',
    tableTitle: 'Anatomy of a Machine Learning Dataset',
    tableHeaders: ['Column Name', 'Role in ML', 'Example Value', 'Include in X?'],
    tableRows: [
      ['flat_id', 'Identifier (Metadata)', '101', 'No — causes memorization'],
      ['area_sqft', 'Numerical Feature (X)', '900', 'Yes — strong clue'],
      ['bedrooms', 'Numerical Feature (X)', '2', 'Yes — strong clue'],
      ['rent_inr', 'Target Variable (y)', '21000', 'No — this is the answer!'],
    ],
    tableNoteEn: 'If you accidentally leave the target column inside X, the model gets 100% score by cheating—a classic data leakage bug.',
    tableNoteHi: 'Agar galti se target column X ke andar reh gaya, toh model cheating karke 100% score dikhayega—yeh classic data leakage bug hai.',
    mistakeEn: 'Leaving Customer_ID, Row_Number, or a post-event column (like "Cancellation_Reason" when predicting churn) inside X.',
    mistakeHi: 'Customer_ID, Row_Number, ya event ke baad aane wala column (jaise churn predict karte waqt "Cancellation_Reason") X mein chhod dena.',
    proHabitEn: 'For every feature in X, ask: "Will I genuinely have this exact value at the moment I need to make a live prediction?"',
    proHabitHi: 'X ke har feature ke liye poochein: "Kya live prediction karte waqt yeh value sach mein mere paas available hogi?"',
    jobUseEn: 'Structuring clean feature matrices from raw warehouse tables before building any scikit-learn or XGBoost model.',
    jobUseHi: 'Kisi bhi scikit-learn ya XGBoost model se pehle raw database tables se clean feature matrix banane mein kaam aata hai.',
    mcq1Question: 'In a house price dataset, you accidentally keep "House_ID" (1, 2, 3...) as a feature in X. What is the risk?',
    mcq1Correct: 'The model may memorize arbitrary IDs instead of learning real patterns, hurting generalization on new houses.',
    mcq1Wrongs: [
      'Python will crash because integers are not allowed in X.',
      'The model will automatically convert House_ID into bedrooms.',
      'It doubles the speed of the test set evaluation.',
    ],
    mcq1Explain: 'Unique IDs carry no generalizable signal; complex models like trees can split on IDs and overfit badly.',
    mcq2Question: 'You are predicting whether a bank loan will default next year. Which column MUST be excluded from X to prevent leakage?',
    mcq2Correct: 'Late_Fee_Charged_Next_Year',
    mcq2Wrongs: [
      'Applicant_Annual_Income',
      'Credit_Score_At_Application',
      'Requested_Loan_Amount',
    ],
    mcq2Explain: 'Late fees charged next year only exist AFTER the loan is issued and starts defaulting—using it leaks future information.',
    realWorldScenario:
      'An online store gives you a CSV with order_id, user_age, cart_value, discount_pct, refund_processed_date, and returned (0/1). Which columns belong in X, which is y, and which must be dropped?',
    interviewQ1: 'What is the difference between a feature, a target variable, and a metadata column?',
    interviewA1:
      'Features (X) are predictive inputs available at inference time, the target (y) is the outcome we predict, and metadata columns (like user_id or timestamps used only for tracking) identify records but should not be fed directly as raw features.',
    interviewQ2: 'Why must you check feature availability at prediction time?',
    interviewA2:
      'Any feature generated after the target event occurs introduces target leakage—giving unrealistically high offline scores that collapse completely in production.',
  },
  {
    id: 227,
    modNum: 21,
    modTitle: 'Machine Learning Fundamentals',
    topicNumInMod: 6,
    title: 'Training, Validation and Test Sets',
    subtitle: 'WHY WE NEVER GRADE A MODEL ON THE SAME DATA IT STUDIED',
    coreEn:
      'To know if a model truly learned instead of memorizing, we split data into three roles: the Training Set (teaches the model), the Validation Set (helps tune settings and pick the best model), and the Test Set (locked away until the very end for one honest final grade).',
    coreHi:
      'Model ne sach mein seekha hai ya sirf ratta maara hai, yeh jaanne ke liye data ko 3 hisson mein baantte hain: Training Set (model ko sikhane ke liye), Validation Set (settings tune aur best model choose karne ke liye), aur Test Set (bilkul aakhir mein ek imaandar final exam ke liye).',
    analogyTitle: 'Class Notes, Mock Tests, and Final Board Exam',
    analogyEn:
      'The Training Set is your textbook and class notes. The Validation Set is your practice mock tests that help you improve weak chapters. The Test Set is the sealed final board exam paper—you only open it once to measure true readiness.',
    analogyHi:
      'Training Set aapki textbook aur class notes hain. Validation Set aapke mock tests hain jinse aap apni taiyari sudharte hain. Test Set sealed final board exam paper hai—jise aap sirf ek baar kholte hain asli taiyari check karne ke liye.',
    steps: [
      {
        title: 'Split Before Any Preprocessing',
        en: 'Divide raw data first so scalers, imputers, and encoders never peek at validation or test rows.',
        hi: 'Kisi bhi preprocessing se pehle data split karein taaki scalers ya imputers validation/test rows ko na dekhein.',
        tone: 'sky',
      },
      {
        title: 'Train on Training Set',
        en: 'Fit your candidate models strictly on the training split (commonly 60%–70% of data).',
        hi: 'Apne candidate models ko sirf training split (aksar 60%–70% data) par fit karein.',
        tone: 'amber',
      },
      {
        title: 'Compare & Tune on Validation Set',
        en: 'Use the validation split (15%–20%) or cross-validation to choose algorithms and hyperparameters.',
        hi: 'Algorithms aur hyperparameters choose karne ke liye validation split (15%–20%) ya cross-validation use karein.',
        tone: 'lavender',
      },
      {
        title: 'Report Honest Score on Test Set',
        en: 'Evaluate only your chosen final model once on the untouched test set (15%–20%).',
        hi: 'Sirf apne final chosen model ko ek baar untouched test set (15%–20%) par evaluate karein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: 70 / 15 / 15 STRATIFIED SPLIT',
    code: `from sklearn.model_selection import train_test_split
import numpy as np

X = np.arange(200).reshape(100, 2)
y = np.array([0]*80 + [1]*20)  # 80% class 0, 20% class 1

# Step 1: Lock away 15% Test set
X_temp, X_test, y_temp, y_test = train_test_split(
    X, y, test_size=0.15, stratify=y, random_state=42
)
# Step 2: Split remaining 85% into Train (70%) and Val (15%)
X_train, X_val, y_train, y_val = train_test_split(
    X_temp, y_temp, test_size=15/85, stratify=y_temp, random_state=42
)
print(f"Train: {len(X_train)} | Val: {len(X_val)} | Test: {len(X_test)}")`,
    codeOutput: `Train: 70 | Val: 15 | Test: 15`,
    codeCaptionEn: 'Using stratify=y keeps the same 80/20 class ratio inside Train, Validation, and Test splits.',
    codeCaptionHi: 'stratify=y use karne se Train, Validation, aur Test teeno splits mein exact 80/20 class ratio bana rehta hai.',
    tableTitle: 'Roles of Train, Validation, and Test Splits',
    tableHeaders: ['Split', 'Typical Share', 'Who Uses It?', 'Golden Rule'],
    tableRows: [
      ['Training Set', '60% – 70%', 'Algorithm (.fit)', 'Model learns weights/rules only here'],
      ['Validation Set', '15% – 20%', 'Data Scientist (tuning)', 'Compare models & tune hyperparameters'],
      ['Test Set', '15% – 20%', 'Final Audit (once)', 'Never tune on it; simulates unseen production'],
    ],
    tableNoteEn: 'For time-series data (like daily sales), never split randomly—train on past months and test on future months!',
    tableNoteHi: 'Time-series data (jaise daily sales) mein random split kabhi na karein—purane mahino par train aur aage ke mahino par test karein!',
    mistakeEn: 'Tuning hyperparameters 50 times on the Test Set until the test score looks great—which secretly turns your Test Set into a Validation Set.',
    mistakeHi: 'Test Set par 50 baar hyperparameters tune karna jab tak score accha na dikhe—isse Test Set ki imaandari khatam ho jaati hai.',
    proHabitEn: 'Lock the Test Set on day 1 (using stratify for classification or chronological order for time data) and touch it only for final reporting.',
    proHabitHi: 'Day 1 par Test Set lock kar dein (classification mein stratify, time data mein date-wise split) aur sirf final report ke liye use karein.',
    jobUseEn: 'Giving leadership trustworthy accuracy estimates before launching models that affect real revenue or customers.',
    jobUseHi: 'Real revenue ya customers par impact dalne wale models launch karne se pehle leadership ko trustworthy accuracy report dena.',
    mcq1Question: 'Why do we need a Validation Set in addition to a Training Set and a Test Set?',
    mcq1Correct: 'To compare models and tune hyperparameters without contaminating the final untouched Test Set.',
    mcq1Wrongs: [
      'Because scikit-learn refuses to run unless data is split into 3 files.',
      'To delete 20% of the data permanently so training runs faster.',
      'To make the training accuracy reach 100%.',
    ],
    mcq1Explain: 'Repeatedly checking the Test Set during tuning causes overfitting to the test set; a separate Validation Set keeps the final test unbiased.',
    mcq2Question: 'You are forecasting next month’s retail store sales using 3 years of daily data. How should you split Train and Test?',
    mcq2Correct: 'Chronologically: train on earlier dates and test on the most recent future dates.',
    mcq2Wrongs: [
      'Randomly shuffle all days so train and test mix past and future.',
      'Put all Mondays in Test and all other days in Train.',
      'Use the same 3 years for both training and testing.',
    ],
    mcq2Explain: 'Randomly shuffling time-series data lets the model peek at tomorrow’s sales to predict today—a severe temporal leakage error.',
    realWorldScenario:
      'A junior analyst reports 98% accuracy after training and testing on the exact same 10,000 customer rows. What is wrong, and how do you fix their evaluation setup?',
    interviewQ1: 'What happens if you tune your model directly on the test set?',
    interviewA1:
      'You leak information from the test set into your modeling choices, causing optimistic bias—your reported test score will look better than what the model actually achieves in production.',
    interviewQ2: 'When should you use stratified splitting vs time-based splitting?',
    interviewA2:
      'Use stratified splitting for independent classification rows (especially imbalanced classes) so every split preserves class proportions. Use time-based splitting whenever order in time matters and you predict the future from the past.',
  },
  {
    id: 228,
    modNum: 21,
    modTitle: 'Machine Learning Fundamentals',
    topicNumInMod: 7,
    title: 'Baseline Models',
    subtitle: 'SETTING A SIMPLE BENCHMARK BEFORE BUILDING COMPLEX AI',
    coreEn:
      'A Baseline Model is the simplest, fastest reasonable model you build first—such as always predicting the average (for regression) or the most frequent class (for classification). Every complex model you build afterward MUST beat this baseline on unseen validation data to justify its existence.',
    coreHi:
      'Baseline Model woh sabse simple aur fast model hota hai jo aap sabse pehle banate hain—jaise regression mein hamesha average predict karna ya classification mein most frequent class. Aage jo bhi complex model banayein, use unseen validation data par is baseline ko harana zaroori hai.',
    analogyTitle: 'Jogging Your First 5K Before Buying Carbon-Plate Shoes',
    analogyEn:
      'Before spending ₹20,000 on pro running shoes, you time yourself running 5 km in regular sneakers (say, 32 minutes). That 32-minute mark is your baseline—now you actually know whether new training or gear improves your speed.',
    analogyHi:
      '₹20,000 ke pro running shoes kharidne se pehle aap normal shoes mein apna 5 km time note karte hain (maan lijiye 32 minute). Yeh 32 minute aapka baseline hai—ab aapko asli farq pata chalega ki nayi training se speed badhi ya nahi.',
    steps: [
      {
        title: 'Build a Dummy Baseline First',
        en: 'Use DummyRegressor (mean/median) or DummyClassifier (most frequent class) in 3 lines of code.',
        hi: '3 line ke code mein DummyRegressor (mean/median) ya DummyClassifier (most frequent class) banayein.',
        tone: 'sky',
      },
      {
        title: 'Measure Baseline on Validation Set',
        en: 'Record its exact validation score (e.g., Baseline MAE = ₹6.2L or Accuracy = 95% on imbalanced data).',
        hi: 'Iska exact validation score note karein (jaise Baseline MAE = ₹6.2L ya imbalanced data par 95% Accuracy).',
        tone: 'amber',
      },
      {
        title: 'Build a Simple Real Baseline',
        en: 'Next, train a fast Linear or Logistic Regression as a strong interpretable benchmark.',
        hi: 'Phir ek fast Linear ya Logistic Regression train karein ek strong interpretable benchmark ke liye.',
        tone: 'lavender',
      },
      {
        title: 'Only Keep Models That Beat Baseline',
        en: 'Compare every fancy model against your baseline on both metric gain and complexity cost.',
        hi: 'Har naye complex model ko baseline se compare karein—kya accuracy gain extra complexity ke layak hai?',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: DUMMY BASELINE VS REAL MODEL',
    code: `from sklearn.dummy import DummyClassifier
from sklearn.metrics import accuracy_score, f1_score

# Imbalanced test set: 95 non-fraud (0), 5 fraud (1)
y_train = [0]*380 + [1]*20
y_val = [0]*95 + [1]*5

dummy = DummyClassifier(strategy="most_frequent")
dummy.fit([[0]]*len(y_train), y_train)
preds = dummy.predict([[0]]*len(y_val))

print("Dummy Accuracy:", accuracy_score(y_val, preds))
print("Dummy F1 (Fraud):", f1_score(y_val, preds))`,
    codeOutput: `Dummy Accuracy: 0.95
Dummy F1 (Fraud): 0.0`,
    codeCaptionEn: 'A brainless model that ALWAYS predicts "Not Fraud" gets 95% accuracy—proving why a baseline immediately exposes misleading metrics!',
    codeCaptionHi: 'Ek bina dimaag ka model jo hamesha "Not Fraud" bole use bhi 95% accuracy mil jaati hai—baseline turant dikha deta hai ki sirf accuracy dhokha de sakti hai!',
    tableTitle: 'Baseline Progression Example (House Price Prediction)',
    tableHeaders: ['Model Stage', 'Validation RMSE', 'Training Time', 'Verdict'],
    tableRows: [
      ['1. DummyRegressor (Mean)', '₹14.8 Lakhs', '0.01 sec', 'Floor benchmark (must beat)'],
      ['2. Linear Regression', '₹7.9 Lakhs', '0.05 sec', 'Huge +47% error drop! Strong baseline'],
      ['3. Random Forest', '₹5.4 Lakhs', '1.8 sec', 'Clear win over linear baseline'],
      ['4. Complex Deep Net', '₹5.3 Lakhs', '45.0 sec', 'Tiny gain; probably not worth extra cost'],
    ],
    tableNoteEn: 'A great baseline also verifies your entire data pipeline works end-to-end before you spend days tuning.',
    tableNoteHi: 'Ek accha baseline yeh bhi confirm karta hai ki aapka poora data pipeline end-to-end bina bug ke chal raha hai.',
    mistakeEn: 'Jumping straight to a heavy neural network or tuned ensemble without knowing what a simple average or logistic regression achieves.',
    mistakeHi: 'Bina simple average ya logistic regression ka score jaane seedha heavy neural network ya ensemble banane lagna.',
    proHabitEn: 'Always log a Dummy baseline AND a simple linear baseline in your experiment tracker on Day 1.',
    proHabitHi: 'Day 1 par hi apne experiment tracker mein ek Dummy baseline AUR ek simple linear baseline zaroor record karein.',
    jobUseEn: 'Proving to product managers that an ML model truly adds value over simple business heuristics or current rules.',
    jobUseHi: 'Product managers ko proof dene mein kaam aata hai ki ML model purane simple rules se sach mein behtar perform kar raha hai.',
    mcq1Question: 'In a fraud dataset where 98% of transactions are genuine, a DummyClassifier predicting "Genuine" for everything gets 98% accuracy. What does this tell you?',
    mcq1Correct: 'Accuracy alone is misleading here; any useful model must beat the baseline on fraud-focused metrics like Recall/F1/PR-AUC.',
    mcq1Wrongs: [
      'The DummyClassifier is ready for production because 98% is high.',
      'The dataset has no fraud cases at all.',
      'You should switch to Linear Regression immediately.',
    ],
    mcq1Explain: 'Baselines expose class-imbalance traps immediately—98% accuracy with 0% fraud caught is useless.',
    mcq2Question: 'What is the primary purpose of building a baseline model first?',
    mcq2Correct: 'To establish a fast reference score and verify the end-to-end pipeline before trying complex models.',
    mcq2Wrongs: [
      'To guarantee that the final model will have zero errors.',
      'To avoid splitting the dataset into train and test sets.',
      'To replace feature engineering completely.',
    ],
    mcq2Explain: 'Without a baseline, you have no way to judge whether a complex model’s score is actually impressive or mediocre.',
    realWorldScenario:
      'A teammate proudly announces their new neural network achieved 91% accuracy predicting machine failure, where 92% of days have no failure. How do you respond using baseline thinking?',
    interviewQ1: 'Why do experienced ML engineers always start with a simple baseline?',
    interviewA1:
      'A baseline validates the data pipeline end-to-end, sets a minimum performance floor, reveals metric traps like class imbalance, and gives a clear benchmark to measure whether added model complexity actually pays off.',
    interviewQ2: 'What makes a good baseline for regression vs classification?',
    interviewA2:
      'Start with DummyRegressor (mean/median) or DummyClassifier (most frequent/stratified), followed by a fast interpretable model like Linear/Ridge Regression or Logistic Regression—or the company’s existing business heuristic.',
  },
  {
    id: 229,
    modNum: 21,
    modTitle: 'Machine Learning Fundamentals',
    topicNumInMod: 8,
    title: 'Overfitting and Underfitting',
    subtitle: 'MEMORIZING PRACTICE QUESTIONS VS BARELY STUDYING AT ALL',
    coreEn:
      'Underfitting happens when a model is too simple to capture the real pattern, so it performs poorly on BOTH training and test data. Overfitting happens when a model is too complex and memorizes noise in the training data, scoring brilliantly on training data but failing badly on unseen test data.',
    coreHi:
      'Underfitting tab hoti hai jab model itna simple ho ki asli pattern hi na samajh paaye—toh training aur test dono mein score kharab aata hai. Overfitting tab hoti hai jab model training data ke noise ka ratta maar le—training mein 99% aaye par unseen test mein fail ho jaaye.',
    analogyTitle: 'Exam Prep: Skipping Chapters vs Memorizing Exact Answers',
    analogyEn:
      'A student who barely reads the summary fails both practice tests and the final exam (Underfitting). A student who memorizes exact question-answer pairs gets 100% on practice sheets but fails when exam numbers change slightly (Overfitting). A Good Fit understands the core concept and solves new questions.',
    analogyHi:
      'Jo student sirf summary padhe woh practice aur final exam dono mein fail hota hai (Underfitting). Jo student exact answers ratta maar le woh practice mein 100% laata hai par exam mein number badalte hi fail ho jaata hai (Overfitting). Good Fit concept samajh kar naye sawal solve kar leta hai.',
    steps: [
      {
        title: 'Measure BOTH Train and Validation Scores',
        en: 'Never look at only one score—always compare training performance against validation performance side by side.',
        hi: 'Kabhi sirf ek score na dekhein—hamesha training score aur validation score ko saath-saath compare karein.',
        tone: 'sky',
      },
      {
        title: 'Diagnose Underfitting',
        en: 'Both train and validation scores are poor -> model is too rigid; add better features or a more expressive model.',
        hi: 'Train aur validation dono kharab hain -> model zyada simple hai; behtar features ya stronger model try karein.',
        tone: 'amber',
      },
      {
        title: 'Diagnose Overfitting',
        en: 'Train score is very high but validation score is much lower -> model memorized noise; simplify, regularize, or get more data.',
        hi: 'Train bahut high par validation bahut low -> model ne ratta maara hai; simplify karein, regularization lagayein, ya zyada data laayein.',
        tone: 'lavender',
      },
      {
        title: 'Target the Generalization Sweet Spot',
        en: 'Pick the model complexity where validation error reaches its lowest point and the train-val gap stays small.',
        hi: 'Woh complexity choose karein jahan validation error sabse kam ho aur train-val gap chhota rahe.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: SPOTTING OVERFITTING BY TREE DEPTH',
    code: `from sklearn.tree import DecisionTreeClassifier
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split

X, y = make_classification(n_samples=400, n_features=12, random_state=42)
X_tr, X_val, y_tr, y_val = train_test_split(X, y, test_size=0.25, random_state=42)

for depth in [1, 4, 20]:
    clf = DecisionTreeClassifier(max_depth=depth, random_state=42).fit(X_tr, y_tr)
    print(f"depth={depth:2d} | Train: {clf.score(X_tr, y_tr):.2f} | Val: {clf.score(X_val, y_val):.2f}")`,
    codeOutput: `depth= 1 | Train: 0.87 | Val: 0.86
depth= 4 | Train: 0.94 | Val: 0.91
depth=20 | Train: 1.00 | Val: 0.84`,
    codeCaptionEn: 'At depth=20, Train hits 1.00 (perfect memorization) while Validation drops to 0.84—classic overfitting! depth=4 generalizes best.',
    codeCaptionHi: 'depth=20 par Train 1.00 (poora ratta) ho gaya par Validation gir kar 0.84 aa gaya—yeh classic overfitting hai! depth=4 sabse best generalize karta hai.',
    tableTitle: 'Diagnostic Cheat Sheet: Underfit vs Good Fit vs Overfit',
    tableHeaders: ['Condition', 'Train Accuracy', 'Validation Accuracy', 'What to Do Next'],
    tableRows: [
      ['Underfitting (Too Simple)', '62%', '60%', 'Add informative features, reduce regularization, try richer model'],
      ['Good Fit (Balanced)', '92%', '90%', 'Great generalization! Verify on untouched test set'],
      ['Overfitting (Memorized)', '99.8%', '74%', 'Limit depth/complexity, add regularization, gather more data'],
    ],
    tableNoteEn: 'A 100% training score is usually a WARNING sign in real-world noisy datasets, not a celebration.',
    tableNoteHi: 'Real-world noisy data par 100% training score khushi ki nahi, balki warning ki baat hoti hai.',
    mistakeEn: 'Celebrating a 99.9% training accuracy without checking validation performance on unseen rows.',
    mistakeHi: 'Unseen validation rows check kiye bina 99.9% training accuracy par khush ho jaana.',
    proHabitEn: 'Always print Train vs Validation metrics together (or plot learning curves) after every experiment.',
    proHabitHi: 'Har experiment ke baad Train aur Validation metrics ek saath print karein (ya learning curves plot karein).',
    jobUseEn: 'Stopping models from failing after deployment when real customers behave slightly differently from historical training logs.',
    jobUseHi: 'Deployment ke baad jab real customers thoda alag behave karein toh model ko fail hone se bachane mein use hota hai.',
    mcq1Question: 'Your Decision Tree gets 99.5% accuracy on Training data and 71% on Validation data. What is happening?',
    mcq1Correct: 'Overfitting — the tree memorized training noise and fails to generalize.',
    mcq1Wrongs: [
      'Underfitting — the tree is too simple to learn the data.',
      'Perfect generalization — 99.5% is always optimal.',
      'The validation set is too small to matter.',
    ],
    mcq1Explain: 'A large gap where training performance is near-perfect and validation performance is much lower is the textbook signature of overfitting.',
    mcq2Question: 'Which action helps REDUCE overfitting?',
    mcq2Correct: 'Adding regularization, limiting model complexity (like max_depth), or collecting more diverse training data.',
    mcq2Wrongs: [
      'Increasing polynomial degree from 2 to 15.',
      'Removing the validation set completely.',
      'Training for more epochs until training error hits zero.',
    ],
    mcq2Explain: 'Constraining complexity or adding more representative training examples prevents the model from fitting random noise.',
    realWorldScenario:
      'Your customer churn model achieves 98% F1 on training data, 73% on validation data. Give 3 concrete steps you would take to close that gap.',
    interviewQ1: 'How do you detect overfitting and underfitting in practice?',
    interviewA1:
      'Compare training and validation error side by side. High error on both indicates underfitting; low training error paired with much higher validation error indicates overfitting.',
    interviewQ2: 'Name three practical ways to fix an overfitting tree-based model.',
    interviewA2:
      'Limit tree depth (max_depth), require more samples per leaf (min_samples_leaf), use ensemble averaging like Random Forest, or prune/remove noisy features.',
  },
  {
    id: 230,
    modNum: 21,
    modTitle: 'Machine Learning Fundamentals',
    topicNumInMod: 9,
    title: 'Bias-Variance Trade-Off',
    subtitle: 'BALANCING RIGID ASSUMPTIONS (BIAS) AGAINST SENSITIVITY TO NOISE (VARIANCE)',
    coreEn:
      'Total prediction error comes from two competing sources (plus unavoidable noise): Bias is the error from overly simplistic assumptions (causing underfitting), and Variance is the error from being overly sensitive to small fluctuations in the training data (causing overfitting). Making a model more complex usually lowers bias but raises variance.',
    coreHi:
      'Model ki total error do opposite cheezon se aati hai: Bias matlab zyada simple assumptions ki galti (underfitting), aur Variance matlab training data ke chhote badlaav par bahut zyada hil jaana (overfitting). Model complex karne se bias ghatta hai par variance badhta hai.',
    analogyTitle: 'Archery Target Practice',
    analogyEn:
      'High Bias is an archer whose arrows all land tightly together—but far off to the top-left of the bullseye (consistently wrong). High Variance is an archer whose arrows scatter wildly all over the board (inconsistent). Low Bias + Low Variance hits tightly right on the bullseye.',
    analogyHi:
      'High Bias aisa teerandaz hai jiske saare teer ek hi jagah lagte hain, par bullseye se kaafi door (lagatar galat). High Variance aisa hai jiske teer poore board par bikhre rehte hain (inconsistent). Low Bias + Low Variance seedha bullseye ke beech mein lagta hai.',
    steps: [
      {
        title: 'Understand Bias (Underfitting Side)',
        en: 'Simple models (like a straight line on curved data) make strong assumptions and miss real patterns.',
        hi: 'Simple models (jaise curved data par seedhi line) strong assumptions lete hain aur asli pattern miss kar dete hain.',
        tone: 'sky',
      },
      {
        title: 'Understand Variance (Overfitting Side)',
        en: 'Overly flexible models change wildly if you swap just 10% of the training rows.',
        hi: 'Bahut flexible models sirf 10% training rows badalne par hi bilkul alag predictions dene lagte hain.',
        tone: 'amber',
      },
      {
        title: 'Recognize Irreducible Noise',
        en: 'Even the best model cannot eliminate pure real-world randomness (e.g., sudden unrecorded events).',
        hi: 'Best model bhi pure real-world randomness (unrecorded events) ko zero nahi kar sakta.',
        tone: 'lavender',
      },
      {
        title: 'Find Minimum Total Error via CV',
        en: 'Use cross-validation to pick the model complexity where Bias² + Variance is minimized.',
        hi: 'Cross-validation use karke woh model complexity chunein jahan Bias² + Variance sabse kam ho.',
        tone: 'green',
      },
    ],
    tableTitle: 'Bias vs Variance Diagnostic Table',
    tableHeaders: ['Model Family (Default)', 'Typical Bias', 'Typical Variance', 'How to Balance It'],
    tableRows: [
      ['Linear Regression', 'Higher (assumes straight line)', 'Lower (stable across samples)', 'Add polynomial/interaction features if curved'],
      ['Deep Decision Tree', 'Very Low (fits complex shapes)', 'Very High (sensitive to noise)', 'Limit max_depth or average via Random Forest'],
      ['K-Nearest Neighbors (K=1)', 'Very Low', 'Very High', 'Increase K (e.g., K=7 or K=11) to smooth boundary'],
      ['Regularized Model (Ridge)', 'Slightly Higher', 'Much Lower', 'Tune alpha via cross-validation for sweet spot'],
    ],
    tableNoteEn: 'Bagging (like Random Forest) mainly reduces Variance, while Boosting (like Gradient Boosting) mainly reduces Bias.',
    tableNoteHi: 'Bagging (jaise Random Forest) mukhya roop se Variance kam karta hai, jabki Boosting (jaise Gradient Boosting) Bias kam karta hai.',
    mistakeEn: 'Trying to drive Bias to zero by making the model endlessly complex, which causes Variance to explode on new data.',
    mistakeHi: 'Bias ko zero karne ke chakkar mein model ko bahut zyada complex bana dena, jisse naye data par Variance phat jaata hai.',
    proHabitEn: 'Use K-Fold Cross-Validation to observe both the average score (bias) and the spread across folds (variance).',
    proHabitHi: 'K-Fold Cross-Validation use karke average score (bias) aur folds ke beech ka spread (variance) dono dekhein.',
    jobUseEn: 'Guiding systematic model improvements—knowing whether to collect more data (fixes variance) or engineer better features (fixes bias).',
    jobUseHi: 'Systematic model improvement mein madad karta hai—kab zyada data laana hai (variance fix) aur kab naye features banane hain (bias fix).',
    mcq1Question: 'You retrain a deep Decision Tree on two slightly different 80% subsets of your data and get wildly different test predictions. What is high?',
    mcq1Correct: 'Variance',
    mcq1Wrongs: [
      'Bias',
      'Irreducible noise only',
      'Feature scaling',
    ],
    mcq1Explain: 'High sensitivity to small changes in the training set is the exact definition of High Variance.',
    mcq2Question: 'Which technique primarily reduces High Variance in tree models?',
    mcq2Correct: 'Bagging / Random Forest (averaging many diverse trees)',
    mcq2Wrongs: [
      'Removing all regularization penalties',
      'Setting K=1 in K-Nearest Neighbors',
      'Duplicating the same 50 rows ten times',
    ],
    mcq2Explain: 'Averaging predictions across many bootstrapped trees cancels out individual tree noise, sharply reducing variance.',
    realWorldScenario:
      'Your linear house price model has high error on both training and validation sets (MAE ₹12L train, ₹12.4L val). Is this a high-bias or high-variance problem, and will collecting 50,000 more identical-feature rows fix it?',
    interviewQ1: 'Explain the Bias-Variance Trade-Off in simple terms.',
    interviewA1:
      'Bias is error from overly rigid assumptions (underfitting), while variance is error from overreacting to training noise (overfitting). Increasing model complexity decreases bias but increases variance; our goal is the sweet spot minimizing total unseen error.',
    interviewQ2: 'Does adding more training data fix high bias or high variance?',
    interviewA2:
      'Adding more training data primarily helps reduce high variance (overfitting). If a model has high bias (e.g., fitting a straight line to a U-shaped curve), more rows still cannot bend a straight line—you need better features or a more flexible model.',
  },
  {
    id: 231,
    modNum: 21,
    modTitle: 'Machine Learning Fundamentals',
    topicNumInMod: 10,
    title: 'The Machine Learning Workflow',
    subtitle: 'THE END-TO-END ROADMAP FROM BUSINESS PROBLEM TO LIVE MODEL',
    coreEn:
      'Real-world Machine Learning is not just calling model.fit(). It is an iterative lifecycle: defining the business objective, gathering and cleaning data, splitting safely, building a baseline, engineering features, tuning models, evaluating on unseen test data, deploying, and monitoring for drift.',
    coreHi:
      'Real-world Machine Learning sirf model.fit() chalana nahi hota. Yeh ek step-by-step lifecycle hai: business goal samajhna, data clean karna, safe split karna, baseline banana, features engineer karna, model tune karna, unseen test par check karna, deploy karna, aur drift monitor karna.',
    analogyTitle: 'Opening a Successful Restaurant',
    analogyEn:
      'Cooking the dish (training the model) is only 15% of running a restaurant. You first research what customers want, source fresh ingredients, test recipes on a tasting panel, serve paying guests, and keep checking reviews so quality never slips.',
    analogyHi:
      'Khana pakana (model training) restaurant chalane ka sirf 15% hissa hai. Pehle aap customer ki demand samajhte hain, fresh ingredients laate hain, recipe taste-test karte hain, serve karte hain, aur lagatar feedback monitor karte hain.',
    steps: [
      {
        title: 'Frame Problem & Data Audit',
        en: 'Define the business KPI, target variable, success metric, and check data quality before coding.',
        hi: 'Coding se pehle business KPI, target variable, success metric, aur data quality audit karein.',
        tone: 'sky',
      },
      {
        title: 'Split, Clean & Build Baseline',
        en: 'Split train/val/test first, build a leak-free preprocessing pipeline, and log a simple baseline score.',
        hi: 'Pehle train/val/test split karein, leak-free preprocessing pipeline banayein, aur baseline score note karein.',
        tone: 'amber',
      },
      {
        title: 'Iterate: Features, Models & Tuning',
        en: 'Engineer domain features, compare multiple model families via cross-validation, and run error analysis.',
        hi: 'Domain features banayein, cross-validation se multiple models compare karein, aur error analysis karein.',
        tone: 'lavender',
      },
      {
        title: 'Final Test, Deploy & Monitor',
        en: 'Audit once on the locked test set, package the pipeline, deploy, and monitor live prediction drift.',
        hi: 'Locked test set par ek baar final audit karein, pipeline save/deploy karein, aur live drift monitor karein.',
        tone: 'green',
      },
    ],
    tableTitle: 'Where Data Scientists Actually Spend Time in the ML Workflow',
    tableHeaders: ['Workflow Stage', 'Typical Effort', 'Key Deliverable'],
    tableRows: [
      ['1. Problem Framing & EDA', '~20%', 'Clear KPI, target definition, data quality report'],
      ['2. Cleaning, Split & Feature Prep', '~40%', 'Leak-free scikit-learn Pipeline + train/val/test splits'],
      ['3. Modeling, Tuning & Error Analysis', '~25%', 'Validated model beating baseline with error insights'],
      ['4. Packaging, Deployment & Monitoring', '~15%', 'Saved pipeline artifact + drift alerts in production'],
    ],
    tableNoteEn: 'The workflow is a loop, not a one-way street—error analysis often sends you back to collect better data or engineer a new feature.',
    tableNoteHi: 'Yeh workflow ek loop hai, seedha rasta nahi—error analysis aksar aapko behtar data ya naya feature banane wapas bhejta hai.',
    mistakeEn: 'Spending 90% of project time tweaking obscure model hyperparameters while ignoring dirty data, missing values, and unclear business goals.',
    mistakeHi: 'Dirty data aur business goal ko ignore karke 90% time sirf model hyperparameters tweak karne mein lagana.',
    proHabitEn: 'Follow an end-to-end thin slice first (Data -> Split -> Pipeline -> Baseline -> Test) on Day 1, then iterate systematically.',
    proHabitHi: 'Day 1 par hi ek chhota end-to-end slice complete karein (Data -> Split -> Pipeline -> Baseline -> Test), phir step-by-step improve karein.',
    jobUseEn: 'Leading structured ML projects in cross-functional teams with product managers, data engineers, and software engineers.',
    jobUseHi: 'Product managers, data engineers, aur software engineers ke saath structured ML projects deliver karne mein kaam aata hai.',
    mcq1Question: 'In a healthy real-world ML workflow, when should you first evaluate on the final Test Set?',
    mcq1Correct: 'Only after preprocessing, feature selection, model comparison, and tuning are completely finished.',
    mcq1Wrongs: [
      'Before cleaning missing values.',
      'After every single hyperparameter change.',
      'Before splitting the training set.',
    ],
    mcq1Explain: 'Keeping the test set untouched until final selection ensures an honest estimate of production performance.',
    mcq2Question: 'Why does an ML workflow continue even AFTER a model is deployed to production?',
    mcq2Correct: 'Real-world data patterns drift over time, so live performance must be monitored and models retrained when needed.',
    mcq2Wrongs: [
      'Trained models automatically delete themselves after 30 days.',
      'Python syntax changes every afternoon.',
      'Test sets need to be manually printed every week.',
    ],
    mcq2Explain: 'Customer behavior, prices, and fraud tactics evolve (data/concept drift), gradually degrading static models.',
    realWorldScenario:
      'A retail CEO asks you to "build an AI model to reduce inventory waste" within 4 weeks. Outline the exact 4-week ML workflow you would propose.',
    interviewQ1: 'Walk me through your end-to-end Machine Learning workflow for a brand-new tabular dataset.',
    interviewA1:
      'I clarify the business KPI and metric, perform EDA, perform a leak-free train/val/test split, build a baseline inside a scikit-learn Pipeline, iterate on feature engineering and model selection using cross-validation, perform error analysis, verify once on the test set, and package the pipeline for deployment and drift monitoring.',
    interviewQ2: 'Why is data preparation often more impactful than switching algorithms?',
    interviewA2:
      'Garbage in produces garbage out—fixing missing values, removing leakage, and crafting domain-relevant features typically yields much larger validation gains than swapping between two similar algorithms.',
  },

  // =========================================================================
  // MODULE 22: REGRESSION ALGORITHMS (IDs 232–241)
  // =========================================================================
  {
    id: 232,
    modNum: 22,
    modTitle: 'Regression Algorithms',
    topicNumInMod: 1,
    title: 'What Is Regression?',
    subtitle: 'PREDICTING CONTINUOUS NUMBERS FROM INPUT FEATURES',
    coreEn:
      'Regression is the branch of Supervised Machine Learning where the target output (y) is a continuous numeric quantity—like a house price, monthly sales revenue, delivery time in minutes, or crop yield. A regression model learns how changes in input features (X) shift that numeric outcome.',
    coreHi:
      'Regression Supervised Machine Learning ka woh hissa hai jahan target output (y) ek continuous number hota hai—jaise ghar ki keemat, monthly sales, delivery time minutes mein, ya electricity bill. Model seekhta hai ki features (X) badalne par woh number kitna badalta hai.',
    analogyTitle: 'Taxi Fare Meter Estimator',
    analogyEn:
      'Before booking an auto or cab, the app estimates your fare: base charge plus distance traveled plus traffic time. That continuous rupee estimate—whether ₹142 or ₹287—is a Regression problem.',
    analogyHi:
      'Cab book karne se pehle app aapko estimated kiraya dikhata hai: base fare + distance + traffic time. Yeh continuous rupaye ka andaaza—chahe ₹142 ho ya ₹287—ek Regression problem hai.',
    steps: [
      {
        title: 'Confirm Continuous Numeric Target',
        en: 'Verify that y is a measurable number with meaningful scale and distance (e.g., ₹, kg, minutes).',
        hi: 'Verify karein ki y ek measurable number hai jiska scale aur distance real matlab rakhta hai (jaise ₹, kg, minutes).',
        tone: 'sky',
      },
      {
        title: 'Split Into Train and Test',
        en: 'Separate historical rows into training and unseen test sets before fitting any model.',
        hi: 'Kisi bhi model ko fit karne se pehle historical rows ko training aur unseen test set mein baantein.',
        tone: 'amber',
      },
      {
        title: 'Fit a Regression Function',
        en: 'Train a regressor (linear, tree, or ensemble) that minimizes distance between actual y and predicted ŷ.',
        hi: 'Ek regressor train karein jo actual y aur predicted ŷ ke beech ki galti (error) ko kam se kam kare.',
        tone: 'lavender',
      },
      {
        title: 'Inspect Residuals on Unseen Data',
        en: 'Measure errors (Actual − Predicted) on the test set using MAE, RMSE, and R².',
        hi: 'Test set par residuals (Actual − Predicted) ko MAE, RMSE, aur R² se check karein.',
        tone: 'green',
      },
    ],
    tableTitle: 'Sample Regression Predictions & Residuals (Food Delivery Time)',
    tableHeaders: ['Order', 'Distance (km)', 'Actual Time (min)', 'Predicted Time (min)', 'Residual (Actual − Pred)'],
    tableRows: [
      ['#101', '2.0 km', '18 min', '17 min', '+1 min'],
      ['#102', '4.5 km', '27 min', '28 min', '−1 min'],
      ['#103', '7.0 km', '41 min', '39 min', '+2 min'],
      ['#104', '9.0 km', '46 min', '48 min', '−2 min'],
    ],
    tableNoteEn: 'Notice the average absolute error here is (1 + 1 + 2 + 2) / 4 = 1.5 minutes—small, balanced residuals around zero!',
    tableNoteHi: 'Yahan average absolute error (1 + 1 + 2 + 2) / 4 = 1.5 minute hai—chhoti aur balanced residuals zero ke aas-paas!',
    mistakeEn: 'Forgetting to check for extreme target outliers (like one ₹50 Crore mansion in a ₹50 Lakh neighborhood) that pull predictions off.',
    mistakeHi: 'Target mein extreme outliers (jaise ₹50 Lakh ke flats mein ek ₹50 Crore ka bunglow) check na karna, jo predictions bigaad dete hain.',
    proHabitEn: 'Always plot your target distribution and check residuals on unseen validation data before trusting a regression score.',
    proHabitHi: 'Regression score par bharosa karne se pehle hamesha target distribution aur unseen validation residuals plot karein.',
    jobUseEn: 'Forecasting store revenue, estimating insurance claim amounts, predicting delivery ETAs, and pricing real estate.',
    jobUseHi: 'Store revenue forecast karne, insurance claims estimate karne, delivery ETA aur property pricing mein use hota hai.',
    mcq1Question: 'Which of the following is a Regression task?',
    mcq1Correct: 'Predicting a customer’s expected annual spend in rupees.',
    mcq1Wrongs: [
      'Classifying an email as Spam or Inbox.',
      'Grouping customers into 4 unlabeled personas.',
      'Detecting whether a photo contains a cat or a dog.',
    ],
    mcq1Explain: 'Expected annual spend is a continuous numeric quantity, making it a classic Regression problem.',
    mcq2Question: 'What is a "residual" in a regression model?',
    mcq2Correct: 'The difference between the actual target value and the model’s predicted value (y − ŷ).',
    mcq2Wrongs: [
      'The number of columns dropped during cleaning.',
      'The percentage of missing rows in the dataset.',
      'The speed at which Python runs .fit().',
    ],
    mcq2Explain: 'Residuals show how far off each prediction was and in which direction (+ means under-predicted, − means over-predicted).',
    realWorldScenario:
      'A logistics startup wants to predict parcel delivery hours from distance, weather, and package weight. How do you verify it is a regression problem and check its initial performance?',
    interviewQ1: 'What defines a regression problem in Machine Learning?',
    interviewA1:
      'A supervised learning problem where the target variable is continuous and numeric, so the model predicts quantities and is evaluated by error magnitude metrics like MAE, RMSE, and R² rather than classification accuracy.',
    interviewQ2: 'Why is examining residuals important even when R² looks high?',
    interviewA2:
      'Residuals reveal hidden systematic errors—such as under-predicting luxury items or missing a nonlinear curve—that a single summary number like R² can hide.',
  },
  {
    id: 233,
    modNum: 22,
    modTitle: 'Regression Algorithms',
    topicNumInMod: 2,
    title: 'Simple Linear Regression',
    subtitle: 'FITTING THE SINGLE BEST STRAIGHT LINE THROUGH ONE FEATURE AND A TARGET',
    coreEn:
      'Simple Linear Regression models a straight-line relationship between ONE input feature (x) and ONE numeric target (y) using the equation ŷ = m·x + b. The slope (m) tells you how much y changes for a 1-unit increase in x, and the intercept (b) is the starting value when x = 0.',
    coreHi:
      'Simple Linear Regression EK input feature (x) aur EK numeric target (y) ke beech sabse behtar seedhi line (ŷ = m·x + b) fit karta hai. Slope (m) batata hai ki x 1 unit badhne par y kitna badhega, aur intercept (b) x = 0 par starting value hoti hai.',
    analogyTitle: 'Stretching a Ruler Through Scattered Chalk Dots',
    analogyEn:
      'Imagine dots on a wall showing height vs shoe size. You hold a straight wooden ruler and tilt it until the vertical gaps between the dots and the ruler are as small as possible overall—that best-fit ruler is Simple Linear Regression.',
    analogyHi:
      'Maan lijiye deewar par height aur shoe size ke dots bane hain. Aap ek seedha ruler pakad kar aise set karte hain ki sab dots se ruler ki vertical doori kul milakar sabse kam ho—wahi best-fit line Simple Linear Regression hai.',
    steps: [
      {
        title: 'Plot Scatter First',
        en: 'Visually confirm that x and y actually follow a roughly straight-line trend.',
        hi: 'Pehle scatter plot dekhein ki kya x aur y sach mein lagbhag seedhi line ka trend dikhate hain.',
        tone: 'sky',
      },
      {
        title: 'Split Train & Test Sets',
        en: 'Keep a held-out test set so you evaluate the line on unseen points.',
        hi: 'Unseen points par line check karne ke liye ek test set alag rakhein.',
        tone: 'amber',
      },
      {
        title: 'Minimize Sum of Squared Errors (OLS)',
        en: 'Ordinary Least Squares finds the exact slope (m) and intercept (b) that minimize squared vertical gaps.',
        hi: 'Ordinary Least Squares exact slope (m) aur intercept (b) nikalta hai jahan squared vertical errors sabse kam hon.',
        tone: 'lavender',
      },
      {
        title: 'Interpret Slope & Predict',
        en: 'Explain the slope in plain business units (e.g., +₹4,500 per extra 100 sq ft) and verify test error.',
        hi: 'Slope ko simple business bhasha mein samjhayein aur test error verify karein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: SIMPLE LINEAR REGRESSION',
    code: `from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
import numpy as np

# Ad spend (₹ thousands) -> Weekly sales (₹ thousands)
X = np.array([[10], [20], [30], [40], [50], [60], [70], [80]])
y = np.array([26, 45, 64, 86, 105, 124, 146, 165])

X_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.25, random_state=42)
lr = LinearRegression().fit(X_tr, y_tr)

print(f"Slope (m): {lr.coef_[0]:.2f} | Intercept (b): {lr.intercept_:.2f}")
print(f"Predicted sales at ₹45k ad spend: ₹{lr.predict([[45]])[0]:.1f}k")`,
    codeOutput: `Slope (m): 1.99 | Intercept (b): 5.83
Predicted sales at ₹45k ad spend: ₹95.4k`,
    codeCaptionEn: 'Every extra ₹1,000 in ad spend is associated with roughly ₹1,990 in extra weekly sales within the observed range.',
    codeCaptionHi: 'Observed range mein har ₹1,000 extra ad spend par lagbhag ₹1,990 extra weekly sales ka trend dikh raha hai.',
    tableTitle: 'Worked Example: Checking ŷ = 2x + 6 on Sample Rows',
    tableHeaders: ['Ad Spend (x)', 'Actual Sales (y)', 'Predicted (ŷ = 2x + 6)', 'Error (y − ŷ)', 'Squared Error'],
    tableRows: [
      ['10', '26', '26', '0', '0'],
      ['20', '45', '46', '−1', '1'],
      ['30', '64', '66', '−2', '4'],
      ['40', '86', '86', '0', '0'],
    ],
    tableNoteEn: 'OLS squares each error so positive and negative errors don’t cancel out and big misses get penalized heavily.',
    tableNoteHi: 'OLS har error ko square karta hai taaki plus-minus cancel na hon aur badi galtiyon par zyada penalty lage.',
    mistakeEn: 'Extrapolating wildly outside the training range—e.g., predicting sales for ₹1 Crore ad spend using a line trained only on ₹10k–₹80k.',
    mistakeHi: 'Training range se bahut bahar extrapolate karna—jaise ₹10k–₹80k par train line se ₹1 Crore ad spend ka prediction kar dena.',
    proHabitEn: 'Always state the valid feature range alongside your slope interpretation, and remember correlation does not prove causation.',
    proHabitHi: 'Slope batate waqt hamesha valid feature range bhi batayein, aur yaad rakhein ki correlation ka matlab causation nahi hota.',
    jobUseEn: 'Quickly estimating price elasticity, ad-spend ROI trends, or building a crystal-clear baseline model for stakeholders.',
    jobUseHi: 'Price elasticity, ad-spend ROI trend, ya stakeholders ke liye fast baseline model banane mein use hota hai.',
    mcq1Question: 'In the equation ŷ = 5000 + 3500·x (where x = years of experience and ŷ = monthly salary in ₹), what does 3500 represent?',
    mcq1Correct: 'The slope: each additional year of experience is associated with an average ₹3,500 increase in predicted salary.',
    mcq1Wrongs: [
      'The predicted salary when experience is 0 years.',
      'The total number of employees in the dataset.',
      'The maximum possible salary in the company.',
    ],
    mcq1Explain: 'In ŷ = b + m·x, m (3500) is the slope—the expected change in y per 1-unit increase in x.',
    mcq2Question: 'Why does Ordinary Least Squares (OLS) minimize SQUARED errors instead of raw errors (y − ŷ)?',
    mcq2Correct: 'Because raw positive and negative errors cancel each other out, while squaring makes all errors positive and penalizes large misses.',
    mcq2Wrongs: [
      'Because Python cannot subtract negative numbers.',
      'Because squaring errors makes the slope always equal to 1.',
      'Because OLS only works on classification labels.',
    ],
    mcq2Explain: 'If one point has +10 error and another has −10 error, their raw sum is 0 even though predictions are poor; squaring prevents cancellation.',
    realWorldScenario:
      'A gym owner notices that higher monthly temperature correlates with higher cold-drink sales, and wants to predict drink sales from temperature alone. How do you build and validate a Simple Linear Regression model?',
    interviewQ1: 'How does Simple Linear Regression find the best-fit line?',
    interviewA1:
      'It uses Ordinary Least Squares (OLS) to find the slope and intercept that minimize the Sum of Squared Residuals between actual training values and predicted values on the line.',
    interviewQ2: 'Why is extrapolation dangerous in linear regression?',
    interviewA2:
      'A relationship that looks linear inside your training range often curves, saturates, or breaks down outside it—for instance, doubling ad spend forever will eventually hit market saturation.',
  },
  {
    id: 234,
    modNum: 22,
    modTitle: 'Regression Algorithms',
    topicNumInMod: 3,
    title: 'Multiple Linear Regression',
    subtitle: 'COMBINING MULTIPLE FEATURES TO PREDICT ONE NUMERIC TARGET',
    coreEn:
      'Real-world outcomes rarely depend on just one factor. Multiple Linear Regression extends the straight line to many features: ŷ = b + w₁x₁ + w₂x₂ + ... + wₖxₖ. Each weight (wᵢ) shows how much y changes when feature xᵢ increases by 1 unit, holding all other features constant.',
    coreHi:
      'Asli duniya mein koi bhi outcome sirf ek cheez par depend nahi karta. Multiple Linear Regression ek saath kai features use karta hai: ŷ = b + w₁x₁ + w₂x₂ + ... + wₖxₖ. Har weight (wᵢ) batata hai ki baaki sab features fixed rakhne par xᵢ ke 1 unit badhne se y kitna badlega.',
    analogyTitle: 'Chef Balancing Salt, Spice, and Cooking Time',
    analogyEn:
      'A biryani’s rating doesn’t depend only on spice level—it depends on rice quality, spice, salt, and cooking time together. Multiple Linear Regression measures the independent contribution of each ingredient while keeping the other ingredients steady.',
    analogyHi:
      'Biryani ka taste sirf mirch par nahi—chawal ki quality, namak, mirch, aur cooking time sab par depend karta hai. Multiple Linear Regression har ingredient ka alag-alag effect naapta hai jab baaki ingredients constant rakhe jayein.',
    steps: [
      {
        title: 'Encode Categories & Split First',
        en: 'Split train/test first, then one-hot encode categorical columns (like City) using fit on train only.',
        hi: 'Pehle train/test split karein, phir categorical columns (jaise City) ko sirf train par fit karke one-hot encode karein.',
        tone: 'sky',
      },
      {
        title: 'Check Multicollinearity',
        en: 'Watch out for duplicate/highly correlated features (like Area_SqFt and Area_SqM) that destabilize weights.',
        hi: 'Duplicate ya highly correlated features (jaise Area_SqFt aur Area_SqM) check karein jo weights ko unstable bana dete hain.',
        tone: 'amber',
      },
      {
        title: 'Fit Multiple Linear Regression',
        en: 'Learn one coefficient per feature plus an intercept on the training data.',
        hi: 'Training data par har feature ke liye ek coefficient aur ek intercept learn karein.',
        tone: 'lavender',
      },
      {
        title: 'Evaluate & Inspect Coefficients',
        en: 'Check test RMSE/Adjusted R² and scale features if you want to compare coefficient magnitudes fairly.',
        hi: 'Test RMSE/Adjusted R² check karein, aur coefficients ki size compare karni ho toh features scale karein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: MULTIPLE LINEAR REGRESSION',
    code: `from sklearn.linear_model import LinearRegression
import pandas as pd

df = pd.DataFrame({
    "sqft": [800, 1000, 1200, 1500, 1800],
    "bedrooms": [2, 2, 3, 3, 4],
    "age_yrs": [10, 5, 8, 2, 1],
    "price_lakhs": [42, 55, 68, 86, 105]
})

X = df[["sqft", "bedrooms", "age_yrs"]]
y = df["price_lakhs"]
model = LinearRegression().fit(X, y)

for col, w in zip(X.columns, model.coef_):
    print(f"{col:10s} weight: {w:+.4f}")
print(f"Intercept: {model.intercept_:.2f}")`,
    codeOutput: `sqft       weight: +0.0569
bedrooms   weight: +3.8542
age_yrs    weight: -0.6042
Intercept: -5.19`,
    codeCaptionEn: 'Holding area and bedrooms constant, each extra year of building age reduces predicted price by ~₹0.60 Lakhs.',
    codeCaptionHi: 'Area aur bedrooms constant rakhne par, building ki umar 1 saal badhne se predicted price lagbhag ₹0.60 Lakh kam hoti hai.',
    tableTitle: 'Reading Multiple Linear Regression Coefficients Correctly',
    tableHeaders: ['Feature', 'Learned Weight', 'Plain-English Meaning (Ceteris Paribus)'],
    tableRows: [
      ['sqft', '+0.057 Lakh', '+₹5,700 per extra sq ft, holding bedrooms & age fixed'],
      ['bedrooms', '+3.85 Lakhs', '+₹3.85L per extra bedroom, holding sqft & age fixed'],
      ['age_yrs', '−0.60 Lakhs', '−₹60,000 per extra year older, holding sqft & bedrooms fixed'],
    ],
    tableNoteEn: 'Warning: A raw weight of 3.85 (bedrooms) is NOT automatically more important than 0.057 (sqft) because their units are completely different!',
    tableNoteHi: 'Dhyan dein: 3.85 (bedrooms) ka raw weight 0.057 (sqft) se zyada important nahi maana jaata kyunki dono ke units alag hain!',
    mistakeEn: 'Comparing raw unscaled coefficients directly to declare "bedrooms matter 60x more than square footage".',
    mistakeHi: 'Bina scaling kiye raw coefficients compare karke yeh keh dena ki "bedrooms square footage se 60 guna zyada important hai".',
    proHabitEn: 'Standardize features (StandardScaler) inside a Pipeline before comparing coefficient sizes, and check VIF for multicollinearity.',
    proHabitHi: 'Coefficients ki importance compare karne se pehle Pipeline mein StandardScaler lagayein, aur multicollinearity ke liye VIF check karein.',
    jobUseEn: 'Pricing models, marketing mix modeling (measuring TV + Digital + Print spend together), and salary benchmarking.',
    jobUseHi: 'Pricing models, marketing mix modeling (TV + Digital + Print ka combined effect), aur salary benchmarking mein use hota hai.',
    mcq1Question: 'Why can’t you compare raw Multiple Linear Regression weights directly when features have different units (e.g., income in ₹ vs age in years)?',
    mcq1Correct: 'Because a feature with tiny units (rupees) naturally gets a tiny weight even if it has huge impact; you must standardize features first.',
    mcq1Wrongs: [
      'Because Multiple Linear Regression only allows positive weights.',
      'Because scikit-learn randomizes weights every time you print them.',
      'Because income cannot be used in linear regression.',
    ],
    mcq1Explain: 'Weight magnitude scales inversely with feature units—multiplying a column by 1,000 divides its weight by 1,000.',
    mcq2Question: 'What problem occurs when two input features in Multiple Linear Regression are nearly identical (e.g., Height_cm and Height_inches)?',
    mcq2Correct: 'Multicollinearity — individual coefficients become unstable and hard to interpret.',
    mcq2Wrongs: [
      'Underfitting — the model loses all predictive power.',
      'The target variable turns into a classification label.',
      'The test set automatically doubles in size.',
    ],
    mcq2Explain: 'When two features move in lockstep, the math cannot cleanly separate which one deserves the credit, causing wild swings in weights.',
    realWorldScenario:
      'A real-estate dataset includes total_sqft, carpet_sqft (95% correlated with total_sqft), bedrooms, and city. How do you prepare this for Multiple Linear Regression?',
    interviewQ1: 'What does "holding all other variables constant" mean when interpreting a Multiple Linear Regression coefficient?',
    interviewA1:
      'It means the coefficient reflects the marginal change in predicted y for a 1-unit increase in that feature while every other feature in the equation stays unchanged.',
    interviewQ2: 'How does multicollinearity affect predictions vs interpretability?',
    interviewA2:
      'Multicollinearity severely harms coefficient interpretability and inflates standard errors, though overall predictions may still be reasonable if the same correlation holds in test data. Dropping redundant features or using Ridge regression stabilizes weights.',
  },
  {
    id: 235,
    modNum: 22,
    modTitle: 'Regression Algorithms',
    topicNumInMod: 4,
    title: 'Regression Assumptions',
    subtitle: 'THE 5 HEALTH CHECKS THAT KEEP LINEAR REGRESSION TRUSTWORTHY',
    coreEn:
      'Linear Regression relies on key mathematical assumptions (often remembered as LINE + No Multicollinearity): Linearity between X and y, Independence of errors, Normality of residuals, Equal variance of residuals (Homoscedasticity), and low Multicollinearity among features.',
    coreHi:
      'Linear Regression kuch zaroori assumptions par tika hota hai (LINE + No Multicollinearity): X aur y mein Linearity, errors ki Independence, residuals ki Normality, barabar spread (Homoscedasticity), aur features mein low Multicollinearity.',
    analogyTitle: 'Pre-Flight Pilot Checklist',
    analogyEn:
      'A plane can roll down the runway without checking tire pressure or wing flaps, just like Python will run .fit() without complaining. Pilots run a pre-flight checklist so the flight is actually safe—checking regression assumptions is your model’s pre-flight safety check.',
    analogyHi:
      'Plane bina tire pressure ya flaps check kiye bhi runway par daud sakta hai, jaise Python bina error diye .fit() chala deta hai. Par pilot safety ke liye pre-flight checklist karta hai—regression assumptions check karna aapke model ki safety checklist hai.',
    steps: [
      {
        title: 'Check Linearity (Residuals vs Predicted)',
        en: 'Plot residuals against predicted values—they should look like a random cloud around zero, not a U-shape.',
        hi: 'Residuals vs Predicted plot dekhein—zero ke aas-paas random cloud hona chahiye, koi U-shape curve nahi.',
        tone: 'sky',
      },
      {
        title: 'Check Constant Variance (Homoscedasticity)',
        en: 'Ensure residual spread stays roughly even across low and high predictions (no megaphone/funnel shape).',
        hi: 'Check karein ki chhoti aur badi predictions par error ka spread lagbhag barabar ho (funnel ya cone shape na bane).',
        tone: 'amber',
      },
      {
        title: 'Check Independence & Normality',
        en: 'Ensure rows are independent (no unmodeled time autocorrelation) and residuals roughly follow a bell curve.',
        hi: 'Confirm karein ki rows independent hain aur residuals lagbhag normal bell curve banate hain.',
        tone: 'lavender',
      },
      {
        title: 'Check Multicollinearity (VIF)',
        en: 'Calculate Variance Inflation Factor (VIF); investigate or drop features with VIF > 5–10.',
        hi: 'Variance Inflation Factor (VIF) nikalen; jin features ka VIF > 5–10 ho unhe review ya drop karein.',
        tone: 'green',
      },
    ],
    tableTitle: 'Linear Regression Assumptions: Symptom & Practical Fix',
    tableHeaders: ['Assumption', 'How to Spot Violation', 'Practical Fix'],
    tableRows: [
      ['Linearity', 'Curved U/arch pattern in Residuals vs Predicted plot', 'Add polynomial terms, log-transform, or use Tree/RF'],
      ['Independence', 'Errors follow waves over time (Durbin-Watson != ~2)', 'Add lag features or use time-series models'],
      ['Homoscedasticity', 'Funnel/cone shape (errors grow for larger predictions)', 'Apply log(y) target transform or weighted regression'],
      ['Normality of Residuals', 'Heavy skew in residual histogram / Q-Q plot', 'Inspect outliers or transform skewed target y'],
      ['No Multicollinearity', 'High pairwise correlation or VIF > 5–10', 'Drop redundant column or apply Ridge regression'],
    ],
    tableNoteEn: 'Notice the Normality assumption applies to the RESIDUALS (errors)—NOT to the raw input features X!',
    tableNoteHi: 'Yaad rakhein: Normality assumption RESIDUALS (errors) par lagta hai—raw input features X par nahi!',
    mistakeEn: 'Skipping residual plots altogether just because R² is 0.85, missing a clear curved relationship or funnel-shaped error.',
    mistakeHi: 'Sirf 0.85 R² dekh kar residual plots skip kar dena, jisse curved pattern ya funnel-shaped error chhup jaata hai.',
    proHabitEn: 'Always generate a Residuals vs Predicted scatter plot and check VIF whenever interpreting linear regression coefficients.',
    proHabitHi: 'Jab bhi linear regression coefficients interpret karein, hamesha Residuals vs Predicted plot aur VIF zaroor check karein.',
    jobUseEn: 'Ensuring statistical validity in finance, healthcare, and econometrics reports where stakeholders trust p-values and coefficients.',
    jobUseHi: 'Finance, healthcare, aur economics reports mein jahan stakeholders p-values aur coefficients par business decisions lete hain.',
    mcq1Question: 'In a Residuals vs Predicted plot, you see a clear funnel shape where errors get much wider for expensive houses. Which assumption is violated?',
    mcq1Correct: 'Homoscedasticity (constant variance of residuals)',
    mcq1Wrongs: [
      'No missing values',
      'Feature scaling',
      'Class balance',
    ],
    mcq1Explain: 'When residual spread expands as predictions grow, that is Heteroscedasticity—violating the equal-variance assumption.',
    mcq2Question: 'Which common misconception about Linear Regression assumptions is FALSE?',
    mcq2Correct: 'That all input features X must be normally distributed (in reality, normality applies to the residuals, not X).',
    mcq2Wrongs: [
      'That residuals should have roughly constant variance.',
      'That strong multicollinearity destabilizes coefficient estimates.',
      'That the relationship between features and target should be linear in parameters.',
    ],
    mcq2Explain: 'Binary features (0/1) are obviously not bell-curved, yet work perfectly fine in Linear Regression—normality is checked on residuals.',
    realWorldScenario:
      'Your Linear Regression predicting house prices shows a widening funnel in the residuals plot because ₹5 Crore homes have much larger rupee errors than ₹30 Lakh flats. What simple transformation often fixes this?',
    interviewQ1: 'What are the key assumptions of Ordinary Least Squares (OLS) Linear Regression?',
    interviewA1:
      'Linearity between predictors and target, independence of errors, homoscedasticity (constant error variance), normality of residuals (for valid confidence intervals/p-values), and absence of severe multicollinearity.',
    interviewQ2: 'What happens if heteroscedasticity is present in a linear regression model?',
    interviewA2:
      'Coefficient estimates remain unbiased, but their standard errors become unreliable—making confidence intervals and p-values untrustworthy. Taking log(y) or using robust standard errors helps.',
  },
  {
    id: 236,
    modNum: 22,
    modTitle: 'Regression Algorithms',
    topicNumInMod: 5,
    title: 'Polynomial Regression',
    subtitle: 'BENDING A STRAIGHT LINE INTO A CURVE BY ADDING POWER FEATURES',
    coreEn:
      'When real data follows a curve (like braking distance vs speed, or ad spend diminishing returns), a straight line underfits. Polynomial Regression adds powered features like x² or x³ (e.g., ŷ = b + w₁x + w₂x²) and then runs standard Linear Regression on those new features to fit a smooth curve.',
    coreHi:
      'Jab asli data curve follow karta hai (jaise speed ke saath braking distance), toh seedhi line underfit kar jaati hai. Polynomial Regression x² ya x³ jaise power features add karta hai (ŷ = b + w₁x + w₂x²) aur unpar standard Linear Regression chala kar smooth curve fit kar leta hai.',
    analogyTitle: 'Bending a Flexible Wire vs Using a Stiff Wooden Stick',
    analogyEn:
      'If a road curves gently around a hill, a stiff wooden ruler (Linear Regression) cuts across the grass. A gently bent copper wire (Degree-2 Polynomial) hugs the road smoothly—but if you bend it into 15 zig-zags (Degree-15), it wobbles off the road completely (overfitting).',
    analogyHi:
      'Agar sadak pahad ke chaaron taraf mudi hui hai, toh seedha lakdi ka ruler (Linear Regression) sadak se bahar nikal jaata hai. Halka muda hua taar (Degree-2 Polynomial) sadak ko smoothly follow karta hai—par 15 zig-zag modne par (Degree-15) woh wild overfit ho jaata hai.',
    steps: [
      {
        title: 'Spot Non-Linearity in Plots',
        en: 'Confirm via scatter plot or curved residual plot that a straight line is missing a real curve.',
        hi: 'Scatter plot ya curved residuals se confirm karein ki seedhi line ek asli curve miss kar rahi hai.',
        tone: 'sky',
      },
      {
        title: 'Build a Pipeline With PolynomialFeatures',
        en: 'Wrap PolynomialFeatures(degree=d), StandardScaler, and LinearRegression/Ridge inside one scikit-learn Pipeline.',
        hi: 'PolynomialFeatures(degree=d), StandardScaler, aur LinearRegression/Ridge ko ek hi scikit-learn Pipeline mein rakhein.',
        tone: 'amber',
      },
      {
        title: 'Tune Degree via Cross-Validation',
        en: 'Test small degrees (2, 3) on validation data; watch closely for overfitting as degree rises.',
        hi: 'Validation data par chhoti degrees (2, 3) test karein; degree badhne par overfitting par nazar rakhein.',
        tone: 'lavender',
      },
      {
        title: 'Check Boundary Behavior',
        en: 'Verify predictions stay sensible near the edges of your data and never extrapolate blindly.',
        hi: 'Data ke kinaron par predictions sensible hain ya nahi check karein aur blind extrapolation se bachein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: POLYNOMIAL REGRESSION PIPELINE',
    code: `from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression
import numpy as np

# Speed (km/h) -> Braking distance (meters) follows a quadratic curve
X = np.array([[20], [40], [60], [80], [100]])
y = np.array([6, 18, 38, 66, 102])

poly_model = make_pipeline(PolynomialFeatures(degree=2), LinearRegression())
poly_model.fit(X, y)

print(f"Predicted braking distance at 70 km/h: {poly_model.predict([[70]])[0]:.1f} m")`,
    codeOutput: `Predicted braking distance at 70 km/h: 51.0 m`,
    codeCaptionEn: 'Degree=2 transforms [x] into [1, x, x²] automatically inside the pipeline, fitting the exact quadratic physics curve.',
    codeCaptionHi: 'Degree=2 pipeline ke andar [x] ko automatically [1, x, x²] bana kar exact quadratic curve fit kar leta hai.',
    tableTitle: 'Effect of Polynomial Degree on Train vs Validation RMSE',
    tableHeaders: ['Polynomial Degree', 'Curve Shape', 'Train RMSE', 'Validation RMSE', 'Diagnosis'],
    tableRows: [
      ['Degree 1 (Linear)', 'Straight line', '9.8', '10.1', 'Underfitting (misses curve)'],
      ['Degree 2 (Quadratic)', 'Smooth parabola', '1.4', '1.6', 'Sweet spot! Best generalization'],
      ['Degree 3 (Cubic)', 'S-shaped curve', '1.3', '1.9', 'Slightly looser on validation'],
      ['Degree 10 (High)', 'Wildly wiggly curve', '0.1', '28.5', 'Severe Overfitting!'],
    ],
    tableNoteEn: 'Even though the curve is nonlinear in x, Polynomial Regression is still "linear in the weights (w)"—which is why LinearRegression solves it!',
    tableNoteHi: 'Curve x mein nonlinear hone ke bawajood, weights (w) mein yeh equation linear hi rehti hai—isliye LinearRegression ise solve kar leta hai!',
    mistakeEn: 'Cranking degree=8 or degree=12 on a small dataset because training R² hits 0.999, causing catastrophic swings on new points.',
    mistakeHi: 'Chhote dataset par training R² 0.999 laane ke liye degree=8 ya 12 laga dena, jisse naye points par predictions bhayanak bhatak jaati hain.',
    proHabitEn: 'Start with degree=2 or 3, pair with Ridge regularization if using multiple features, and always select degree via cross-validation.',
    proHabitHi: 'Hamesha degree=2 ya 3 se start karein, multiple features hon toh Ridge regularization lagayein, aur degree CV se chunein.',
    jobUseEn: 'Modeling diminishing marketing returns, physical growth/decay curves, and nonlinear temperature-energy demand relationships.',
    jobUseHi: 'Marketing ke diminishing returns, temperature vs electricity demand curves, aur physical growth trends model karne mein kaam aata hai.',
    mcq1Question: 'Why is Polynomial Regression still trained using scikit-learn’s LinearRegression() class?',
    mcq1Correct: 'Because once x², x³ are created as new columns, the equation is still a linear weighted sum of those features.',
    mcq1Wrongs: [
      'Because Polynomial Regression can only draw straight lines.',
      'Because scikit-learn does not support nonlinear curves.',
      'Because PolynomialFeatures removes all weights.',
    ],
    mcq1Explain: 'Linearity in Linear Regression refers to linearity in the learned weights (w₁, w₂...), not necessarily straight lines in raw x.',
    mcq2Question: 'What typically happens when you choose an excessively high polynomial degree (e.g., degree=12) on 30 data points?',
    mcq2Correct: 'Severe overfitting — the curve wiggles wildly to hit training points and fails badly on unseen test data.',
    mcq2Wrongs: [
      'Severe underfitting — the curve flattens into a horizontal line.',
      'The model becomes completely immune to outliers.',
      'Validation error drops to zero automatically.',
    ],
    mcq2Explain: 'High-degree polynomials have extreme variance and oscillate wildly between and beyond training points (Runge’s phenomenon).',
    realWorldScenario:
      'An electricity utility notices power usage is high in freezing winter AND scorching summer, but low in mild spring (a U-shape vs temperature). Why will Simple Linear Regression fail, and how does Polynomial Regression solve it?',
    interviewQ1: 'How does Polynomial Regression capture nonlinear relationships while still being a linear model?',
    interviewA1:
      'It transforms original features into polynomial powers and interaction terms (x², x₁·x₂), then fits linear weights to those transformed features using standard OLS or regularized linear regression.',
    interviewQ2: 'What risk arises when applying PolynomialFeatures(degree=3) to a dataset with 50 features?',
    interviewA2:
      'Feature explosion! Combinations of 50 features up to degree 3 create over 23,000 columns—causing slow training and heavy overfitting unless paired with feature selection or Ridge/Lasso regularization.',
  },
  {
    id: 237,
    modNum: 22,
    modTitle: 'Regression Algorithms',
    topicNumInMod: 6,
    title: 'Decision Tree Regression',
    subtitle: 'PREDICTING NUMBERS BY ASKING A FLOWCHART OF YES/NO QUESTIONS',
    coreEn:
      'A Decision Tree Regressor splits data step-by-step using simple if-else thresholds (like "Is Area > 1200 sq ft?") to group similar rows into leaf buckets. Every new point that lands in a leaf receives the average target value of the training rows in that leaf.',
    coreHi:
      'Decision Tree Regressor data ko simple yes/no sawalon (jaise "Kya Area > 1200 sq ft hai?") se chhote buckets (leaves) mein baantta hai. Jo bhi naya point kisi leaf mein girta hai, use us leaf ke training rows ka average target value predict karke diya jaata hai.',
    analogyTitle: 'Experienced Property Broker’s Mental Flowchart',
    analogyEn:
      'A broker estimates a flat’s price without a calculator: "Metro near? Yes -> 3 BHK? Yes -> New building? Yes -> Flats like this sell around ₹1.15 Crore." That branching flowchart of questions is a Decision Tree Regressor.',
    analogyHi:
      'Ek property broker bina calculator ke keemat batata hai: "Metro paas hai? Haan -> 3 BHK hai? Haan -> Nayi building? Haan -> Aise flats lagbhag ₹1.15 Crore ke bikte hain." Yahi sawalon ka flowchart Decision Tree Regressor hai.',
    steps: [
      {
        title: 'Test Candidate Splits',
        en: 'For every feature and threshold, measure how much splitting reduces target variance (MSE) inside child nodes.',
        hi: 'Har feature aur threshold par check karein ki split karne se child buckets mein variance (MSE) kitna kam hota hai.',
        tone: 'sky',
      },
      {
        title: 'Pick Best Greedy Split',
        en: 'Choose the single question that creates the purest, most tightly grouped numeric buckets.',
        hi: 'Woh best sawal chunein jo sabse clean aur similar numbers wale buckets banaye.',
        tone: 'amber',
      },
      {
        title: 'Stop Early With Pruning Rules',
        en: 'Limit max_depth and min_samples_leaf so the tree does not create 1-row leaves that memorize noise.',
        hi: 'max_depth aur min_samples_leaf set karein taaki tree 1-row leaves bana kar ratta na maare.',
        tone: 'lavender',
      },
      {
        title: 'Predict Leaf Average',
        en: 'Route each unseen test row down the yes/no path and return that leaf’s training mean.',
        hi: 'Har unseen test row ko yes/no path se neeche bhejein aur us leaf ka training mean return karein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: CONTROLLED DECISION TREE REGRESSOR',
    code: `from sklearn.tree import DecisionTreeRegressor
import numpy as np

X_train = np.array([[600], [800], [1100], [1300], [1600], [1900]])
y_train = np.array([32, 40, 62, 68, 95, 105])  # Price in Lakhs

tree = DecisionTreeRegressor(max_depth=2, min_samples_leaf=2, random_state=42)
tree.fit(X_train, y_train)

print("Pred for 750 sqft:", tree.predict([[750]])[0])
print("Pred for 1750 sqft:", tree.predict([[1750]])[0])`,
    codeOutput: `Pred for 750 sqft: 36.0
Pred for 1750 sqft: 100.0`,
    codeCaptionEn: 'Notice 36.0 is the exact mean of [32, 40] and 100.0 is the exact mean of [95, 105]—trees output piecewise flat steps!',
    codeCaptionHi: 'Dekhein: 36.0 [32, 40] ka exact average hai aur 100.0 [95, 105] ka exact average hai—trees step-wise averages predict karte hain!',
    tableTitle: 'Decision Tree Regressor: Strengths vs Key Limitations',
    tableHeaders: ['Property', 'Behavior in Decision Tree Regression'],
    tableRows: [
      ['Feature Scaling Needed?', 'No! Threshold splits (x > 1200) don’t care about units or scaling.'],
      ['Captures Non-Linearity?', 'Yes! Handles curves and feature interactions automatically.'],
      ['Overfitting Risk', 'Very high if max_depth is left unlimited (None).'],
      ['Extrapolation Ability', 'Cannot predict higher than max training leaf or lower than min leaf!'],
    ],
    tableNoteEn: 'Because leaves return training averages, a Decision Tree CANNOT extrapolate upward trends beyond its training range.',
    tableNoteHi: 'Kyunki leaves training average return karti hain, Decision Tree training range se upar ka upward trend extrapolate NAHI kar sakta.',
    mistakeEn: 'Leaving max_depth=None (default) so the tree grows until every single training row gets its own leaf—100% train R², terrible test R².',
    mistakeHi: 'max_depth=None chhod dena jisse har training row ki apni leaf ban jaaye—train R² 1.0 par test R² bahut kharab.',
    proHabitEn: 'Always constrain max_depth and min_samples_leaf via cross-validation, and never use trees alone to extrapolate upward time trends.',
    proHabitHi: 'Hamesha CV ke zariye max_depth aur min_samples_leaf control karein, aur upward time trend extrapolate karne ke liye akele tree use na karein.',
    jobUseEn: 'Quickly discovering interpretable business rules (e.g., which customer segments spend the most) and serving as building blocks for ensembles.',
    jobUseHi: 'Interpretable business rules nikalne aur Random Forest / Gradient Boosting ensembles ke building block ke roop mein use hota hai.',
    mcq1Question: 'How does a Decision Tree Regressor compute its predicted value for a test sample that lands in a leaf node?',
    mcq1Correct: 'It returns the average (mean) target value of the training samples that fell into that leaf.',
    mcq1Wrongs: [
      'It fits a separate polynomial curve inside every leaf.',
      'It picks the largest target value in the entire dataset.',
      'It returns the most frequent class label.',
    ],
    mcq1Explain: 'Under MSE splitting, the constant prediction that minimizes squared error inside a leaf is the mean of its training targets.',
    mcq2Question: 'Why does a Decision Tree Regressor fail if you ask it to predict 2030 housing prices when trained only on 2015–2024 prices that rise every year?',
    mcq2Correct: 'Trees cannot extrapolate beyond the maximum leaf average seen in training data.',
    mcq2Wrongs: [
      'Trees cannot accept years as numbers.',
      'Trees require StandardScaler before fitting.',
      'Trees always predict zero for future dates.',
    ],
    mcq2Explain: 'Any future year greater than 2024 simply routes into the rightmost leaf and outputs a flat capped value.',
    realWorldScenario:
      'Your unconstrained DecisionTreeRegressor gets Train RMSE = ₹0.0 Lakhs and Validation RMSE = ₹11.4 Lakhs. What happened, and which two hyperparameters do you tune first?',
    interviewQ1: 'How does a Decision Tree Regressor choose where to split a node?',
    interviewA1:
      'It evaluates candidate feature thresholds and picks the split that maximizes the reduction in weighted Mean Squared Error (variance) across the resulting left and right child nodes.',
    interviewQ2: 'Why don’t Decision Trees require feature scaling like StandardScaler?',
    interviewA2:
      'Splits only depend on the rank ordering of values (e.g., x <= threshold), which is completely unaffected by multiplying or shifting a feature’s scale.',
  },
  {
    id: 238,
    modNum: 22,
    modTitle: 'Regression Algorithms',
    topicNumInMod: 7,
    title: 'Random Forest Regression',
    subtitle: 'AVERAGING HUNDREDS OF DIVERSE TREES FOR STABLE, ACCURATE PREDICTIONS',
    coreEn:
      'A single Decision Tree is noisy and prone to overfitting. Random Forest Regression solves this by growing hundreds of diverse trees—each trained on a random bootstrapped sample of rows and a random subset of features at each split—and then averaging all their numeric predictions together.',
    coreHi:
      'Akela Decision Tree noisy aur overfit ho sakta hai. Random Forest Regression iska tod nikalta hai: yeh 100+ alag-alag trees banata hai (har tree thode alag random rows aur random features par seekhta hai), aur phir sab trees ki numeric predictions ka average nikal leta hai.',
    analogyTitle: 'Wisdom of 100 Independent Property Appraisers',
    analogyEn:
      'Asking just one property appraiser to value a house is risky—they might have a personal bias. Asking 100 independent appraisers who each inspect slightly different clues and taking the average of their 100 estimates gives a remarkably steady, reliable valuation.',
    analogyHi:
      'Sirf ek appraiser se ghar ki keemat poochhna risky hai—unki personal galti ho sakti hai. Par 100 independent appraisers se poochh kar unke 100 estimates ka average lena bahut hi steady aur reliable valuation deta hai.',
    steps: [
      {
        title: 'Bootstrap Sample Rows (Bagging)',
        en: 'Give each tree a random sample drawn with replacement from the training set so no two trees see identical data.',
        hi: 'Har tree ko training set se random sample (with replacement) dein taaki har tree thoda alag data dekhe.',
        tone: 'sky',
      },
      {
        title: 'Randomize Features at Splits',
        en: 'At every split, let each tree consider only a random subset of features (max_features) to decorrelate trees.',
        hi: 'Har split par sirf random features ka subset (max_features) allow karein taaki sab trees ek jaise na ban jayein.',
        tone: 'amber',
      },
      {
        title: 'Average All Tree Predictions',
        en: 'For a new unseen row, pass it through all n_estimators trees and compute the mean prediction.',
        hi: 'Naye unseen row ko sab n_estimators trees se guzarein aur unki predictions ka average nikalen.',
        tone: 'lavender',
      },
      {
        title: 'Inspect Test Error & Feature Importance',
        en: 'Validate on unseen data (or Out-of-Bag score) and review which features drove the biggest error reductions.',
        hi: 'Unseen data (ya Out-of-Bag score) par validate karein aur dekhein kin features ne sabse zyada madad ki.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: RANDOM FOREST REGRESSOR',
    code: `from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error
from sklearn.model_selection import train_test_split
from sklearn.datasets import make_regression

X, y = make_regression(n_samples=300, n_features=6, noise=15, random_state=42)
X_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2, random_state=42)

rf = RandomForestRegressor(n_estimators=100, max_depth=8, random_state=42)
rf.fit(X_tr, y_tr)
preds = rf.predict(X_te)

print(f"Test MAE: {mean_absolute_error(y_te, preds):.2f}")`,
    codeOutput: `Test MAE: 35.84`,
    codeCaptionEn: 'Random Forest works out-of-the-box on nonlinear tabular data with minimal preprocessing and strong variance reduction.',
    codeCaptionHi: 'Random Forest nonlinear tabular data par kam preprocessing ke saath hi strong aur stable results deta hai.',
    tableTitle: 'Single Decision Tree vs Random Forest Regressor',
    tableHeaders: ['Aspect', 'Single Decision Tree', 'Random Forest Regressor'],
    tableRows: [
      ['Variance / Stability', 'High variance (sensitive to small data tweaks)', 'Low variance (errors average out across trees)'],
      ['Accuracy on Tabular Data', 'Moderate; easily overfits', 'Strong out-of-the-box baseline for tabular data'],
      ['Interpretability', 'Easy to draw and read as one flowchart', 'Harder to inspect 200 trees; use feature importance'],
      ['Speed & Memory', 'Very fast, tiny file', 'Slower and larger (stores many trees)'],
    ],
    tableNoteEn: 'Even though Random Forest dramatically reduces variance, it STILL inherits trees’ inability to extrapolate outside the training target range.',
    tableNoteHi: 'Bhale hi Random Forest variance bahut kam kar deta hai, par yeh bhi training range ke bahar extrapolate nahi kar sakta.',
    mistakeEn: 'Setting n_estimators=5 (too few trees) or assuming Random Forest can never overfit even when min_samples_leaf=1 on noisy data.',
    mistakeHi: 'Sirf 5 trees rakhna ya yeh maan lena ki Random Forest kabhi overfit nahi ho sakta.',
    proHabitEn: 'Use n_estimators >= 100, tune max_depth and min_samples_leaf via CV, and compare against a simple Linear baseline.',
    proHabitHi: 'n_estimators >= 100 rakhein, CV se max_depth aur min_samples_leaf tune karein, aur Linear baseline se zaroor compare karein.',
    jobUseEn: 'One of the most dependable workhorse algorithms for tabular pricing, demand forecasting, and insurance risk estimation.',
    jobUseHi: 'Tabular pricing, demand forecasting, aur insurance risk estimation ke liye industry ke sabse bharosemand models mein se ek hai.',
    mcq1Question: 'Why does Random Forest restrict each split to a random subset of features (max_features)?',
    mcq1Correct: 'To make the trees diverse (less correlated) so averaging them reduces variance much more effectively.',
    mcq1Wrongs: [
      'To delete half of the dataset permanently.',
      'Because Python can only read 3 columns at a time.',
      'To turn regression into classification.',
    ],
    mcq1Explain: 'If every tree could always pick the same dominant feature at the root, all trees would look nearly identical and averaging them would barely help.',
    mcq2Question: 'How does Random Forest Regression combine the outputs of its 100 individual trees?',
    mcq2Correct: 'By taking the arithmetic average (mean) of all 100 tree predictions.',
    mcq2Wrongs: [
      'By taking the maximum prediction among all trees.',
      'By picking the prediction of the very last tree only.',
      'By taking a majority vote of text labels.',
    ],
    mcq2Explain: 'For regression, Random Forest averages the numeric predictions across all trees (whereas classification uses majority voting / averaged probabilities).',
    realWorldScenario:
      'Your single Decision Tree predicts car resale values with Test RMSE = ₹1.8L, while Random Forest drops it to ₹1.1L—but the business team wants to know WHY the model predicts a certain price. How do you address interpretability?',
    interviewQ1: 'What are the two sources of randomness in a Random Forest, and why do both matter?',
    interviewA1:
      '1) Bootstrap sampling of training rows (bagging) and 2) random feature subsampling at each split. Together they decorrelate the individual trees so averaging dramatically lowers variance.',
    interviewQ2: 'What is Out-of-Bag (OOB) evaluation in Random Forest?',
    interviewA2:
      'Each bootstrapped tree leaves out roughly 37% of training rows; predicting those left-out rows using only the trees that never saw them gives a built-in validation estimate without a separate split.',
  },
  {
    id: 239,
    modNum: 22,
    modTitle: 'Regression Algorithms',
    topicNumInMod: 8,
    title: 'MAE, MSE, RMSE and R²',
    subtitle: 'HOW TO MEASURE AND GRADE REGRESSION PREDICTIONS ACCURATELY',
    coreEn:
      'To grade a regression model honestly on unseen test data, we use four core metrics: MAE (average absolute miss in original units), MSE (average squared miss), RMSE (square root of MSE—penalizes big misses more than MAE), and R² (fraction of target variance explained compared to just predicting the mean).',
    coreHi:
      'Unseen test data par regression model ko imaandari se grade karne ke 4 core metrics hain: MAE (original units mein average galti), MSE (average squared galti), RMSE (MSE ka square root—badi galtiyon par zyada penalty), aur R² (sirf average guess karne ke muqable model ne kitna variance explain kiya).',
    analogyTitle: 'Delivery App Late-Minute Scorecard',
    analogyEn:
      'Suppose 4 deliveries are off by 1, 1, 2, and 10 minutes. MAE treats every minute equally (average = 3.5 min off). RMSE screams loudly about that one angry 10-minute miss (5.15 min), warning you when occasional huge blunders are unacceptable.',
    analogyHi:
      'Maan lijiye 4 deliveries 1, 1, 2, aur 10 minute late hue. MAE har minute ko barabar ginta hai (average = 3.5 min). Par RMSE us ek bade 10-minute blunder par zyada penalty lagata hai (5.15 min), taaki badi galtiyan chhup na sakein.',
    steps: [
      {
        title: 'Compute Errors on Unseen Test Set',
        en: 'Subtract each predicted value from the actual test value: eᵢ = yᵢ − ŷᵢ.',
        hi: 'Har actual test value mein se predicted value ghatayein: eᵢ = yᵢ − ŷᵢ.',
        tone: 'sky',
      },
      {
        title: 'Calculate MAE for Plain-English Error',
        en: 'Average the absolute errors |eᵢ|—easy to explain to business managers in exact rupees or minutes.',
        hi: 'Absolute errors |eᵢ| ka average nikalen—business managers ko seedhe rupaye ya minutes mein samjhana aasan hota hai.',
        tone: 'amber',
      },
      {
        title: 'Calculate MSE & RMSE for Big-Miss Sensitivity',
        en: 'Square errors, average them (MSE), and take the square root (RMSE) to return to original units while penalizing outliers.',
        hi: 'Errors ka square karke average lein (MSE), phir square root lein (RMSE) taaki original units mein badi galtiyon ka pata chale.',
        tone: 'lavender',
      },
      {
        title: 'Check R² Against Mean Baseline',
        en: 'R² = 1 − (SS_res / SS_tot). 1.0 is perfect, 0.0 is no better than guessing the mean, and negative means worse than guessing the mean!',
        hi: 'R² = 1 − (SS_res / SS_tot). 1.0 perfect hai, 0.0 matlab sirf average guess karne jitna hi, aur negative matlab average se bhi kharab!',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: VERIFIED MAE, MSE, RMSE & R² MATH',
    code: `from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
import numpy as np

y_true = np.array([10, 20, 30, 40])
y_pred = np.array([12, 18, 33, 35])  # Errors: -2, +2, -3, +5

mae = mean_absolute_error(y_true, y_pred)
mse = mean_squared_error(y_true, y_pred)
rmse = np.sqrt(mse)
r2 = r2_score(y_true, y_pred)

print(f"MAE: {mae:.2f} | MSE: {mse:.2f} | RMSE: {rmse:.2f} | R2: {r2:.4f}")`,
    codeOutput: `MAE: 3.00 | MSE: 10.50 | RMSE: 3.24 | R2: 0.9160`,
    codeCaptionEn: 'Hand-check: |e| = [2,2,3,5] -> MAE = 12/4 = 3.00; e² = [4,4,9,25] -> MSE = 42/4 = 10.50; √10.50 = 3.24; SS_tot = 500 -> R² = 1 − 42/500 = 0.9160!',
    codeCaptionHi: 'Khud verify karein: |e| = [2,2,3,5] -> MAE = 12/4 = 3.00; e² = [4,4,9,25] -> MSE = 42/4 = 10.50; √10.50 = 3.24; R² = 1 − 42/500 = 0.9160!',
    tableTitle: 'Hand-Verified Worked Calculation (4 Test Observations)',
    tableHeaders: ['Actual (y)', 'Predicted (ŷ)', 'Error (y − ŷ)', '|Error| (for MAE)', 'Error² (for MSE)'],
    tableRows: [
      ['10', '12', '−2', '2', '4'],
      ['20', '18', '+2', '2', '4'],
      ['30', '33', '−3', '3', '9'],
      ['40', '35', '+5', '5', '25'],
      ['Sum / Avg', 'Mean y = 25', 'Sum = +2', 'MAE = 12/4 = 3.00', 'MSE = 42/4 = 10.50 (RMSE = 3.24)'],
    ],
    tableNoteEn: 'Since mean(y) = 25, total squared deviation SS_tot = (−15)² + (−5)² + 5² + 15² = 500. Thus R² = 1 − (42 / 500) = 0.916 (91.6%).',
    tableNoteHi: 'Kyunki mean(y) = 25 hai, SS_tot = 225 + 25 + 25 + 225 = 500. Isliye R² = 1 − (42 / 500) = 0.916 (91.6%).',
    mistakeEn: 'Reporting only training R² (which can be inflated by adding useless columns) instead of test RMSE/MAE and Adjusted R².',
    mistakeHi: 'Sirf training R² report karna (jo bekaar columns add karne se bhi badhta rehta hai) aur test RMSE/MAE ignore karna.',
    proHabitEn: 'Always report MAE + RMSE together on the unseen test set—a big gap between RMSE and MAE instantly warns you about large outlier misses!',
    proHabitHi: 'Unseen test set par hamesha MAE aur RMSE ek saath report karein—dono ke beech bada gap turant outlier misses ka ishara deta hai!',
    jobUseEn: 'Translating model quality into rupee/minute impact for executives (MAE) while guarding against costly tail errors (RMSE).',
    jobUseHi: 'Executives ko exact rupaye/minute error samjhane (MAE) aur bade nuksan wale errors pakadne (RMSE) mein use hota hai.',
    mcq1Question: 'When is RMSE significantly larger than MAE on the same test set?',
    mcq1Correct: 'When the model makes a few very large outlier errors that get heavily penalized by squaring.',
    mcq1Wrongs: [
      'When every single prediction has the exact same error of 2 units.',
      'When the model has 100% accuracy.',
      'When R² is equal to 1.0.',
    ],
    mcq1Explain: 'If all errors are equal, RMSE == MAE. Whenever a few errors are much larger than the rest, squaring inflates RMSE above MAE.',
    mcq2Question: 'What does a negative R² score (e.g., R² = −0.25) on the test set mean?',
    mcq2Correct: 'The model’s predictions are worse than simply predicting the average test value for every row.',
    mcq2Wrongs: [
      'It is mathematically impossible for R² to be negative.',
      'The model has negative correlation but 95% accuracy.',
      'The dataset had negative numbers in X.',
    ],
    mcq2Explain: 'On unseen test data, if SS_res > SS_tot, then 1 − (SS_res / SS_tot) becomes negative—meaning a flat mean baseline beats your model.',
    realWorldScenario:
      'A warehouse demand model has MAE = 15 units but RMSE = 62 units on the test set. What does that huge gap tell you, and what should you investigate?',
    interviewQ1: 'When would you choose MAE over RMSE (or vice versa) as your primary business metric?',
    interviewA1:
      'Choose MAE when every unit of error costs roughly the same and you want robustness to occasional target outliers. Choose RMSE when large errors are disproportionately expensive (e.g., severe inventory stockouts or big loan mispricing).',
    interviewQ2: 'Why do we use Adjusted R² when adding more features to a Linear Regression model?',
    interviewA2:
      'Ordinary R² on training data never decreases when you add more columns—even random noise. Adjusted R² penalizes unnecessary features and only increases if a new feature genuinely improves fit beyond chance.',
  },
  {
    id: 240,
    modNum: 22,
    modTitle: 'Regression Algorithms',
    topicNumInMod: 9,
    title: 'Comparing Regression Models',
    subtitle: 'PICKING THE RIGHT REGRESSOR FAIRLY ON THE SAME VALIDATION SPLIT',
    coreEn:
      'No single regression algorithm wins on every dataset. Comparing models fairly means training multiple families—such as Dummy baseline, Ridge/Linear Regression, Decision Tree, Random Forest, and Gradient Boosting—on the EXACT same training folds and comparing their cross-validation MAE/RMSE, speed, and interpretability.',
    coreHi:
      'Koi bhi ek regression algorithm har dataset par nahi jeetta. Fair comparison ka matlab hai Dummy baseline, Linear/Ridge, Decision Tree, aur Random Forest sabko EXACT same training folds par train karna, aur unke CV MAE/RMSE, speed, aur interpretability ko saath compare karna.',
    analogyTitle: 'Test-Driving 4 Vehicles on the Exact Same Highway Route',
    analogyEn:
      'You wouldn’t test Car A on a smooth highway and Car B on a muddy uphill trail and declare Car A faster. To choose fairly, you drive every candidate vehicle on the exact same route, measuring fuel cost, speed, and comfort.',
    analogyHi:
      'Aap Car A ko smooth highway par aur Car B ko kichad wale raste par chala kar compare nahi karenge. Sahi decision ke liye sabhi gaadiyon ko exact same route par test-drive karke mileage, speed, aur comfort compare kiya jaata hai.',
    steps: [
      {
        title: 'Lock One Shared CV Split',
        en: 'Use the exact same K-Fold split (fixed random_state) and identical evaluation metric for every candidate.',
        hi: 'Har candidate model ke liye exact same K-Fold split (fixed random_state) aur same metric lock karein.',
        tone: 'sky',
      },
      {
        title: 'Wrap Each Model in a Clean Pipeline',
        en: 'Include scaling for linear/distance models and imputation inside each model’s Pipeline to prevent leakage.',
        hi: 'Leakage rokne ke liye scaling aur imputation ko har model ki apni Pipeline ke andar rakhein.',
        tone: 'amber',
      },
      {
        title: 'Log Mean ± Std Across Folds',
        en: 'Record both average CV RMSE and standard deviation across folds, plus training/prediction latency.',
        hi: 'Sirf average CV RMSE nahi, folds ke beech ka standard deviation aur training/prediction speed bhi note karein.',
        tone: 'lavender',
      },
      {
        title: 'Balance Accuracy vs Simplicity',
        en: 'If a simple Ridge model is within 1% of a massive ensemble, prefer the simpler, faster, more explainable model.',
        hi: 'Agar simple Ridge model bade ensemble ke 1% ke andar score kare, toh simple aur explainable model choose karna zyada smart hai.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: FAIR MODEL COMPARISON LOOP',
    code: `from sklearn.model_selection import cross_val_score
from sklearn.dummy import DummyRegressor
from sklearn.linear_model import Ridge
from sklearn.ensemble import RandomForestRegressor
from sklearn.datasets import make_regression

X, y = make_regression(n_samples=300, n_features=8, noise=12, random_state=42)
models = {
    "Dummy": DummyRegressor(),
    "Ridge": Ridge(alpha=1.0),
    "RandomForest": RandomForestRegressor(n_estimators=100, random_state=42),
}

for name, m in models.items():
    rmse = -cross_val_score(m, X, y, cv=5, scoring="neg_root_mean_squared_error")
    print(f"{name:12s} | CV RMSE: {rmse.mean():6.2f} +/- {rmse.std():.2f}")`,
    codeOutput: `Dummy        | CV RMSE: 155.41 +/- 13.72
Ridge        | CV RMSE:  12.18 +/- 1.04
RandomForest | CV RMSE:  64.25 +/- 6.12`,
    codeCaptionEn: 'Surprise! On truly linear data, simple Ridge (12.18 RMSE) crushes Random Forest (64.25 RMSE)—proving why you ALWAYS compare!',
    codeCaptionHi: 'Dekha! Jab data sach mein linear ho toh simple Ridge (12.18 RMSE) Random Forest (64.25 RMSE) ko aasani se hara deta hai—isliye comparison zaroori hai!',
    tableTitle: 'Regression Model Comparison Matrix (Illustrative Tabular Dataset)',
    tableHeaders: ['Model', '5-Fold CV RMSE', 'Interpretability', 'Best Fit When...'],
    tableRows: [
      ['DummyRegressor', '₹15.2L', 'Trivial', 'Baseline floor only'],
      ['Linear / Ridge', '₹7.4L', 'Very High (exact weights)', 'Relationships are mostly linear or extrapolation needed'],
      ['Decision Tree (d=5)', '₹6.9L', 'High (visual rules)', 'Simple rule-based nonlinear splits needed'],
      ['Random Forest', '₹4.8L', 'Medium (feature importances)', 'Complex nonlinear interactions on tabular data'],
    ],
    tableNoteEn: 'Never assume the most complex algorithm wins—as the code output above proves, linear models beat trees when the true pattern is linear!',
    tableNoteHi: 'Kabhi yeh na maanein ki sabse complex algorithm hi jeetega—upar ke code mein linear pattern par Ridge ne Random Forest ko hara diya!',
    mistakeEn: 'Comparing Model A trained on uncleaned data against Model B trained on engineered features and crediting the algorithm instead of the data.',
    mistakeHi: 'Model A ko raw data par aur Model B ko engineered features par compare karke saara credit algorithm ko de dena.',
    proHabitEn: 'Change ONE thing at a time on a fixed CV split, and evaluate the winning finalist once on the locked Test Set.',
    proHabitHi: 'Fixed CV split par ek baar mein ek hi cheez badlein, aur jeetne wale final model ko ek baar locked Test Set par verify karein.',
    jobUseEn: 'Creating transparent model benchmark tables for ML design reviews and stakeholder sign-off.',
    jobUseHi: 'ML design reviews aur stakeholder approval ke liye transparent model comparison tables banane mein use hota hai.',
    mcq1Question: 'In the code example above, why did Ridge Regression beat Random Forest by a huge margin?',
    mcq1Correct: 'Because the underlying data generated by make_regression is truly linear, which matches Ridge’s strength.',
    mcq1Wrongs: [
      'Because Random Forest cannot do regression.',
      'Because Ridge Regression ignores the test set.',
      'Because cross_val_score only works for linear models.',
    ],
    mcq1Explain: 'Algorithm choice depends on data structure ("No Free Lunch"): linear models shine on linear data, while trees shine on nonlinear interactions.',
    mcq2Question: 'What is the single most important rule when benchmarking 4 different regression models?',
    mcq2Correct: 'Evaluate all 4 models on the exact same cross-validation splits and the exact same target metric.',
    mcq2Wrongs: [
      'Give the most complex model 95% training data and others 50%.',
      'Compare MAE for one model and R² for another.',
      'Pick whichever model has the lowest training error.',
    ],
    mcq2Explain: 'Without identical splits and metrics, differences in score could simply come from easier validation rows.',
    realWorldScenario:
      'Model A (Linear Regression) gets CV RMSE ₹5.2L and runs in 2 ms; Model B (500-tree Random Forest) gets CV RMSE ₹5.1L and takes 180 ms with low explainability. Which do you recommend for a real-time loan pricing API?',
    interviewQ1: 'How do you systematically compare multiple regression models for a tabular problem?',
    interviewA1:
      'I fix a leak-free CV split and primary metric, build a Dummy baseline, then benchmark Linear/Ridge, Decision Tree, Random Forest, and Gradient Boosting inside Pipelines, comparing mean CV error, fold variance, latency, and interpretability before one final test audit.',
    interviewQ2: 'Why does scikit-learn use "neg_root_mean_squared_error" in cross_val_score?',
    interviewA2:
      'Scikit-learn follows a "higher is better" convention across all scorers, so error metrics (where lower is better) are negated—you simply flip the sign back when reading RMSE.',
  },
  {
    id: 241,
    modNum: 22,
    modTitle: 'Regression Algorithms',
    topicNumInMod: 10,
    title: 'Regression Project: House Price Prediction',
    subtitle: 'PUTTING EVERY REGRESSION SKILL TOGETHER IN ONE END-TO-END PROJECT',
    coreEn:
      'A job-ready House Price Prediction project combines everything from Module 22: inspecting skewed prices and missing values, splitting train/test before preprocessing, building a ColumnTransformer + Pipeline for numeric and categorical features, beating a Dummy and Ridge baseline with a tuned Random Forest, and checking final test RMSE and residuals.',
    coreHi:
      'Ek job-ready House Price Prediction project Module 22 ke saare steps ko jodta hai: skewed prices aur missing values inspect karna, preprocessing se pehle train/test split karna, numeric aur categorical columns ke liye ColumnTransformer + Pipeline banana, Dummy aur Ridge baseline ko tuned Random Forest se harana, aur final test RMSE check karna.',
    analogyTitle: 'Building a Complete House From Blueprint to Inspection',
    analogyEn:
      'Learning bricks, cement, and plumbing separately is great—now you assemble them in exact order: lay the foundation (clean split), build the walls (Pipeline), test the wiring (CV comparison), and pass final city inspection (untouched Test Set).',
    analogyHi:
      'Eent, cement aur plumbing alag-alag seekhna accha hai—ab unhe sahi order mein jodna hai: neev (clean split), deewarein (Pipeline), wiring test (CV comparison), aur final inspection (untouched Test Set).',
    steps: [
      {
        title: 'Audit Data & Lock Test Split',
        en: 'Check price distribution, missing values, and outliers, then immediately lock away 20% Test data.',
        hi: 'Price distribution, missing values, aur outliers check karein, phir turant 20% Test data lock kar dein.',
        tone: 'sky',
      },
      {
        title: 'Build Preprocessing ColumnTransformer',
        en: 'Impute + scale numeric features (sqft, age) and impute + one-hot encode categoricals (locality) inside a Pipeline.',
        hi: 'Pipeline ke andar numeric features ko impute + scale aur categoricals (locality) ko impute + one-hot encode karein.',
        tone: 'amber',
      },
      {
        title: 'Benchmark Baseline -> Ridge -> Random Forest',
        en: 'Compare 5-Fold CV RMSE across Dummy, Ridge, and tuned Random Forest on training data only.',
        hi: 'Sirf training data par Dummy, Ridge, aur tuned Random Forest ka 5-Fold CV RMSE compare karein.',
        tone: 'lavender',
      },
      {
        title: 'Final Test Audit & Error Review',
        en: 'Evaluate the winning pipeline once on Test data, inspect largest misses, and save the pipeline with joblib.',
        hi: 'Jeetne wali pipeline ko ek baar Test data par evaluate karein, sabse badi galtiyan dekhein, aur joblib se save karein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: END-TO-END HOUSE PRICE PIPELINE',
    code: `import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error

df = pd.DataFrame({
    "sqft": [700, 950, 1200, 1450, 1700, 2000, 850, 1600],
    "locality": ["Suburb", "Suburb", "City", "City", "Prime", "Prime", "Suburb", "Prime"],
    "price_lakhs": [38, 50, 72, 85, 118, 140, 46, 112]
})
X_tr, X_te, y_tr, y_te = train_test_split(df[["sqft", "locality"]], df["price_lakhs"], test_size=0.25, random_state=42)

prep = ColumnTransformer([
    ("num", Pipeline([("imp", SimpleImputer(strategy="median")), ("sc", StandardScaler())]), ["sqft"]),
    ("cat", OneHotEncoder(handle_unknown="ignore"), ["locality"]),
])
pipe = Pipeline([("prep", prep), ("rf", RandomForestRegressor(n_estimators=50, random_state=42))])
pipe.fit(X_tr, y_tr)
print(f"Test MAE: ₹{mean_absolute_error(y_te, pipe.predict(X_te)):.2f} Lakhs")`,
    codeOutput: `Test MAE: ₹7.98 Lakhs`,
    codeCaptionEn: 'One unified Pipeline handles missing numbers, scaling, unseen localities (handle_unknown="ignore"), and prediction cleanly.',
    codeCaptionHi: 'Ek hi Pipeline missing numbers, scaling, naye localities (handle_unknown="ignore"), aur prediction sab kuch cleanly sambhal leti hai.',
    tableTitle: 'House Price Project Milestone Scorecard',
    tableHeaders: ['Project Stage', 'Model / Action', 'CV / Test MAE', 'Key Learning'],
    tableRows: [
      ['1. Floor Baseline', 'DummyRegressor (Median)', '₹26.5 Lakhs', 'Minimum bar to beat'],
      ['2. Linear Baseline', 'Ridge + OneHotEncoder', '₹8.9 Lakhs', 'Strong interpretable jump'],
      ['3. Nonlinear Model', 'Tuned Random Forest', '₹6.1 Lakhs', 'Captures sqft × locality interaction'],
      ['4. Final Test Audit', 'Winning Pipeline on locked Test', '₹6.4 Lakhs', 'Close to CV -> no overfitting!'],
    ],
    tableNoteEn: 'When your untouched Test MAE (₹6.4L) closely matches your CV MAE (₹6.1L), you have strong proof of a leak-free, generalizable model.',
    tableNoteHi: 'Jab aapka untouched Test MAE (₹6.4L) CV MAE (₹6.1L) ke paas ho, toh yeh pakka saboot hai ki model leak-free aur reliable hai.',
    mistakeEn: 'Running pd.get_dummies() and filling missing medians on the ENTIRE dataset before train_test_split(), causing silent data leakage.',
    mistakeHi: 'train_test_split() se pehle poore dataset par pd.get_dummies() aur median imputation chala dena—isse silent data leakage hota hai.',
    proHabitEn: 'Always put ColumnTransformer (with SimpleImputer + OneHotEncoder(handle_unknown="ignore")) inside a scikit-learn Pipeline fit only on X_train.',
    proHabitHi: 'Hamesha ColumnTransformer (SimpleImputer + OneHotEncoder(handle_unknown="ignore")) ko scikit-learn Pipeline mein rakhein aur sirf X_train par fit karein.',
    jobUseEn: 'Building production-ready automated valuation models (AVMs) for real estate portals, mortgage lenders, and property tech startups.',
    jobUseHi: 'Real estate portals, home-loan banks, aur proptech startups ke liye automated property valuation models banane mein kaam aata hai.',
    mcq1Question: 'Why do we pass handle_unknown="ignore" to OneHotEncoder in a real-world House Price pipeline?',
    mcq1Correct: 'So the model does not crash if a brand-new locality appears in the test set or live production data.',
    mcq1Wrongs: [
      'To delete all categorical columns automatically.',
      'To convert missing prices into zero.',
      'To double the number of trees in Random Forest.',
    ],
    mcq1Explain: 'In production, new neighborhoods inevitably appear; handle_unknown="ignore" encodes them safely as all zeros instead of throwing an error.',
    mcq2Question: 'Why is wrapping preprocessing inside a scikit-learn Pipeline essential for a House Price project?',
    mcq2Correct: 'It prevents data leakage during cross-validation and ensures identical transformations during training and live inference.',
    mcq2Wrongs: [
      'It guarantees R² will always exceed 0.99.',
      'It removes the need for a test set.',
      'It makes CSV files smaller on disk.',
    ],
    mcq2Explain: 'Pipelines refit imputers, scalers, and encoders strictly on each training fold and bundle everything into one deployable object.',
    realWorldScenario:
      'Your House Price pipeline performs well on ₹40L–₹1.5Cr apartments, but makes ₹80L errors on ₹5Cr+ luxury villas. How would you improve the project in iteration 2?',
    interviewQ1: 'Walk through how you prevent data leakage in a House Price Regression project with missing values and categorical neighborhoods.',
    interviewA1:
      'Split train and test first, then build a ColumnTransformer inside a scikit-learn Pipeline so median imputation, scaling, and one-hot encoding are fit strictly on training folds and only .transform() is called on validation/test folds.',
    interviewQ2: 'Why do data scientists often apply log1p() to house prices before training?',
    interviewA2:
      'House prices are right-skewed with extreme luxury outliers; predicting log(price) makes errors proportional (percentage-based), stabilizes variance, and prevents a handful of mansions from dominating MSE.',
  },

  // =========================================================================
  // MODULE 23: CLASSIFICATION ALGORITHMS (IDs 242–253)
  // =========================================================================
  {
    id: 242,
    modNum: 23,
    modTitle: 'Classification Algorithms',
    topicNumInMod: 1,
    title: 'What Is Classification?',
    subtitle: 'ASSIGNING EVERY NEW RECORD TO THE RIGHT DISCRETE CATEGORY',
    coreEn:
      'Classification is Supervised Machine Learning where the model predicts a discrete class label instead of a continuous number. It can be Binary (2 classes: Spam vs Not Spam), Multi-class (3+ mutually exclusive classes: Low / Medium / High risk), or Multi-label (multiple tags at once, like Action + Comedy).',
    coreHi:
      'Classification woh Supervised Machine Learning hai jahan model continuous number ke bajay ek fixed category/class predict karta hai. Yeh Binary (2 classes: Spam/Not Spam), Multi-class (3+ classes: Low/Medium/High), ya Multi-label (ek saath kai tags) ho sakta hai.',
    analogyTitle: 'Post Office Mail Sorting Pigeonholes',
    analogyEn:
      'A postal worker looks at an envelope’s PIN code and address, then drops it into one exact pigeonhole: Delhi, Mumbai, Bengaluru, or Chennai. Classification does the exact same job mathematically—routing every new record into the right bucket.',
    analogyHi:
      'Post office mein postman har chithhi ka PIN code dekh kar use exact box mein daalta hai: Delhi, Mumbai, Bengaluru, ya Chennai. Classification mathematically wahi kaam karta hai—har naye record ko sahi bucket mein daalna.',
    steps: [
      {
        title: 'Define Exact Classes & Positive Label',
        en: 'Clarify what 1 (Positive, e.g., Churn/Fraud) and 0 (Negative) represent in business terms.',
        hi: 'Clear karein ki business terms mein 1 (Positive, jaise Churn/Fraud) aur 0 (Negative) ka kya matlab hai.',
        tone: 'sky',
      },
      {
        title: 'Stratified Train/Test Split',
        en: 'Always use stratify=y so rare positive classes appear in the exact same proportion in train and test.',
        hi: 'Hamesha stratify=y use karein taaki rare positive class train aur test dono mein exact same ratio mein rahe.',
        tone: 'amber',
      },
      {
        title: 'Predict Probabilities & Decision Threshold',
        en: 'Most classifiers output probabilities (0.0 to 1.0) first, then convert them to a class using a threshold (default 0.5).',
        hi: 'Zyadatar classifiers pehle probability (0.0 se 1.0) nikalte hain, phir threshold (default 0.5) se final class decide karte hain.',
        tone: 'lavender',
      },
      {
        title: 'Evaluate With Business-Aligned Metrics',
        en: 'Judge unseen test predictions using Confusion Matrix, Precision, Recall, F1, and ROC-AUC—not accuracy alone.',
        hi: 'Unseen test predictions ko sirf accuracy se nahi, balki Confusion Matrix, Precision, Recall, F1, aur ROC-AUC se check karein.',
        tone: 'green',
      },
    ],
    tableTitle: 'Types of Classification Problems in Industry',
    tableHeaders: ['Type', 'Number of Labels', 'Real-World Example', 'Example Output'],
    tableRows: [
      ['Binary Classification', 'Exactly 2 (0 or 1)', 'Credit card fraud detection', 'Fraud (1) or Genuine (0)'],
      ['Multi-Class Classification', '3+ mutually exclusive', 'Routing customer support tickets', 'Billing / Tech / Refund'],
      ['Multi-Label Classification', 'Multiple active at once', 'Tagging movies or news articles', '[Sci-Fi, Thriller]'],
    ],
    tableNoteEn: 'Even when a classifier predicts 0 or 1, inspecting .predict_proba() gives you confidence scores you can tune for business risk.',
    tableNoteHi: 'Bhale hi classifier 0 ya 1 bataye, .predict_proba() dekhne se aapko confidence score milta hai jise aap business risk ke hisaab se tune kar sakte hain.',
    mistakeEn: 'Always using the default 0.50 probability threshold even when missing a positive case (like cancer or fraud) is 20x costlier than a false alarm.',
    mistakeHi: 'Hamesha default 0.50 threshold par chipke rehna, bhale hi positive case miss karna (jaise fraud ya bimari) false alarm se 20 guna mehnga ho.',
    proHabitEn: 'Always check class balance first, split with stratify=y, and inspect predicted probabilities before finalizing a decision threshold.',
    proHabitHi: 'Pehle class balance dekhein, stratify=y se split karein, aur decision threshold final karne se pehle probabilities zaroor inspect karein.',
    jobUseEn: 'Fraud detection, medical triage, spam filtering, customer churn prediction, and automated document categorization.',
    jobUseHi: 'Fraud detection, medical screening, spam filtering, customer churn prediction, aur document categorization mein use hota hai.',
    mcq1Question: 'Why is stratify=y strongly recommended when splitting data for a Classification task?',
    mcq1Correct: 'It preserves the exact same class percentage in both the training set and the test set.',
    mcq1Wrongs: [
      'It removes all negative examples from the test set.',
      'It converts classification labels into continuous prices.',
      'It automatically balances a 99:1 dataset into 50:50.',
    ],
    mcq1Explain: 'Stratified splitting prevents a lucky or unlucky random split where too few (or zero) minority-class cases end up in test.',
    mcq2Question: 'Tagging a single blog post with BOTH "Python" AND "Finance" at the same time is an example of:',
    mcq2Correct: 'Multi-Label Classification',
    mcq2Wrongs: [
      'Binary Classification',
      'Simple Linear Regression',
      'Multi-Class (mutually exclusive) Classification',
    ],
    mcq2Explain: 'When multiple non-exclusive tags can apply simultaneously to one item, it is Multi-Label Classification.',
    realWorldScenario:
      'An email security system assigns each email a spam probability. How would you choose the threshold differently for blocking emails completely vs moving them to a Spam folder?',
    interviewQ1: 'What is the difference between Multi-Class and Multi-Label Classification?',
    interviewA1:
      'In Multi-Class classification, each sample belongs to exactly one of 3+ mutually exclusive classes (e.g., Cat, Dog, or Bird). In Multi-Label classification, one sample can simultaneously carry multiple independent labels (e.g., a movie tagged Action and Comedy).',
    interviewQ2: 'Why is predicting class probabilities often more useful than hard 0/1 labels?',
    interviewA2:
      'Probabilities let you rank cases by risk, calibrate confidence, and choose a custom operating threshold that optimizes real business profit or safety rather than a blind 0.5 cutoff.',
  },
  {
    id: 243,
    modNum: 23,
    modTitle: 'Classification Algorithms',
    topicNumInMod: 2,
    title: 'Logistic Regression',
    subtitle: 'TURNING A LINEAR SCORE INTO A SMOOTH 0-TO-1 PROBABILITY VIA SIGMOID',
    coreEn:
      'Despite its name, Logistic Regression is a foundational Classification algorithm. It computes a weighted linear score z = b + w₁x₁ + ... + wₖxₖ and passes z through the S-shaped Sigmoid function σ(z) = 1 / (1 + e⁻ᶻ), squashing any number into a clean probability between 0 and 1.',
    coreHi:
      'Naam mein "Regression" hone ke bawajood Logistic Regression ek Classification algorithm hai. Yeh pehle weighted linear score z = b + w₁x₁ + ... nikalta hai, phir use S-shaped Sigmoid function σ(z) = 1 / (1 + e⁻ᶻ) se guzaar kar 0 aur 1 ke beech ki clean probability mein badal deta hai.',
    analogyTitle: 'Dimmer Switch Turning Voltage Into a Smooth 0%–100% Glow',
    analogyEn:
      'A raw linear formula can shoot to −500 or +800, which makes no sense as a probability. The Sigmoid function acts like a smooth dimmer switch that gently maps extreme negatives near 0%, zero to 50%, and extreme positives near 100%.',
    analogyHi:
      'Seedha linear score −500 ya +800 tak ja sakta hai, jo probability nahi ho sakti. Sigmoid function ek smooth dimmer switch ki tarah kaam karta hai jo negative scores ko 0% ke paas, zero ko 50% par, aur bade positive scores ko 100% ke paas map kar deta hai.',
    steps: [
      {
        title: 'Scale Numeric Features Inside Pipeline',
        en: 'Standardize features using StandardScaler (fit on train only) so regularization treats all features fairly.',
        hi: 'Pipeline mein StandardScaler lagayein (sirf train par fit) taaki regularization sabhi features ko barabar treat kare.',
        tone: 'sky',
      },
      {
        title: 'Compute Linear Log-Odds (z)',
        en: 'Multiply each feature by its learned weight and add the intercept to form z.',
        hi: 'Har feature ko uske learned weight se multiply karke intercept jodein aur linear score z banayein.',
        tone: 'amber',
      },
      {
        title: 'Apply Sigmoid to Get Probability',
        en: 'Convert z into P(y=1 | x) = 1 / (1 + e⁻ᶻ), guaranteed to stay strictly between 0 and 1.',
        hi: 'z ko P(y=1 | x) = 1 / (1 + e⁻ᶻ) mein badlein, jo hamesha 0 aur 1 ke beech rehta hai.',
        tone: 'lavender',
      },
      {
        title: 'Minimize Log-Loss & Apply Threshold',
        en: 'Train weights by minimizing Binary Cross-Entropy (Log-Loss) and classify using your chosen threshold.',
        hi: 'Binary Cross-Entropy (Log-Loss) kam karke weights seekhein aur chosen threshold se class predict karein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: LOGISTIC REGRESSION WITH PIPELINE',
    code: `from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
import numpy as np

# Study hours -> Pass (1) or Fail (0)
X_train = np.array([[1], [2], [3], [4], [6], [7], [8], [9]])
y_train = np.array([0, 0, 0, 0, 1, 1, 1, 1])

clf = make_pipeline(StandardScaler(), LogisticRegression(C=1.0))
clf.fit(X_train, y_train)

prob = clf.predict_proba([[5]])[0, 1]
print(f"Pass probability at 5 hrs: {prob:.2f} | Class: {clf.predict([[5]])[0]}")`,
    codeOutput: `Pass probability at 5 hrs: 0.50 | Class: 0`,
    codeCaptionEn: 'At the exact midpoint (5 hours), the sigmoid probability is 0.50; higher study hours push probability smoothly toward 1.0.',
    codeCaptionHi: 'Exact midpoint (5 hours) par sigmoid probability 0.50 hai; zyada padhai karne par probability smoothly 1.0 ki taraf badhti hai.',
    tableTitle: 'How Sigmoid Maps Linear Score (z) to Probability',
    tableHeaders: ['Linear Score (z)', 'Sigmoid Probability σ(z)', 'Predicted Class (t = 0.5)', 'Confidence Level'],
    tableRows: [
      ['−3.0', '0.047 (4.7%)', '0 (Negative)', 'Very confident Negative'],
      ['−1.0', '0.269 (26.9%)', '0 (Negative)', 'Moderately Negative'],
      ['0.0', '0.500 (50.0%)', 'Boundary (50/50)', 'Completely uncertain'],
      ['+1.0', '0.731 (73.1%)', '1 (Positive)', 'Moderately Positive'],
      ['+3.0', '0.953 (95.3%)', '1 (Positive)', 'Very confident Positive'],
    ],
    tableNoteEn: 'In scikit-learn, C is inverse regularization strength: smaller C = stronger penalty (simpler model), larger C = weaker penalty.',
    tableNoteHi: 'Scikit-learn mein C inverse regularization hai: chhota C = zyada regularization (simple model), bada C = kam regularization.',
    mistakeEn: 'Forgetting to scale features before Logistic Regression, causing slow convergence and unfair L2 regularization across units.',
    mistakeHi: 'Logistic Regression se pehle features scale na karna, jisse model slow converge hota hai aur L2 penalty galat tarah se lagti hai.',
    proHabitEn: 'Use Logistic Regression inside a StandardScaler Pipeline as your #1 fast, interpretable classification baseline.',
    proHabitHi: 'StandardScaler Pipeline ke saath Logistic Regression ko apna #1 fast aur interpretable classification baseline banayein.',
    jobUseEn: 'Credit risk scorecards in banking (where regulators require explainable odds ratios), click-through rate estimation, and medical risk scoring.',
    jobUseHi: 'Banking credit scorecards (jahan regulators explainable weights maangte hain), ad click prediction, aur medical risk scoring mein use hota hai.',
    mcq1Question: 'What is the role of the Sigmoid function in Logistic Regression?',
    mcq1Correct: 'It squashes any real-valued linear score (−∞ to +∞) into a valid probability between 0 and 1.',
    mcq1Wrongs: [
      'It splits a dataset into training and test sets.',
      'It converts text strings into one-hot columns.',
      'It averages 100 decision trees together.',
    ],
    mcq1Explain: 'Linear combinations can take any value; Sigmoid smoothly bounds the output to (0, 1) so it behaves as a probability.',
    mcq2Question: 'Why does Logistic Regression minimize Log-Loss (Cross-Entropy) instead of Mean Squared Error?',
    mcq2Correct: 'Log-Loss creates a convex optimization surface for sigmoid outputs and heavily penalizes confidently wrong probabilities.',
    mcq2Wrongs: [
      'Because MSE cannot be calculated in Python.',
      'Because Log-Loss ignores all false positives.',
      'Because MSE only works when there are 10+ classes.',
    ],
    mcq2Explain: 'With a sigmoid output, MSE becomes non-convex (trapped in bad local minima), whereas Log-Loss is cleanly convex and punishes confident mistakes.',
    realWorldScenario:
      'A bank’s compliance team rejects a black-box deep neural network for loan approval because they must explain why an applicant was declined. Why is Logistic Regression a top choice here?',
    interviewQ1: 'What loss function does Logistic Regression optimize, and what does the parameter C control in scikit-learn?',
    interviewA1:
      'It optimizes Binary Cross-Entropy (Log-Loss) plus an L2 (or L1) regularization penalty. C is the inverse of regularization strength—smaller C increases regularization to shrink weights and fight overfitting.',
    interviewQ2: 'When does Logistic Regression struggle compared to tree-based models?',
    interviewA2:
      'Logistic Regression draws a linear decision boundary in feature space; it struggles with complex nonlinear patterns or feature interactions unless you manually engineer polynomial/interaction features.',
  },
  {
    id: 244,
    modNum: 23,
    modTitle: 'Classification Algorithms',
    topicNumInMod: 3,
    title: 'K-Nearest Neighbors',
    subtitle: 'CLASSIFYING A NEW POINT BY VOTING AMONG ITS K CLOSEST NEIGHBORS',
    coreEn:
      'K-Nearest Neighbors (KNN) is a simple, intuitive "lazy learner" that does almost no math during training—it just memorizes the training set. When a new unseen point arrives, KNN measures the distance to every training point, finds the K closest neighbors, and lets them vote on the class.',
    coreHi:
      'K-Nearest Neighbors (KNN) ek simple "lazy learner" hai jo training ke waqt koi equation nahi seekhta—bas training data yaad rakhta hai. Jab naya point aata hai, KNN sab training points se uski doori naapta hai, sabse kareeb K neighbors dhoondhta hai, aur unke majority vote se class decide karta hai.',
    analogyTitle: 'Asking Your 5 Closest Neighbors Which Internet Provider Works Best',
    analogyEn:
      'If you move into a new street and want to know if Fiber Internet is reliable there, you ask your 5 closest neighbors (K=5). If 4 say "Great" and 1 says "Poor", you vote "Great". Asking only 1 neighbor (K=1) is risky; asking 500 people across the whole city (K=500) ignores your local street!',
    analogyHi:
      'Agar aap nayi gali mein shift hon aur poochein ki yahan kaunsa Wi-Fi best hai, toh aap apne 5 sabse kareebi padosiyon (K=5) se poochte hain. 4 bolen "Best" aur 1 bole "Slow", toh majority vote "Best". Sirf 1 padosi (K=1) risky hai, aur poore shehar (K=500) se poochhna local pattern kho deta hai!',
    steps: [
      {
        title: 'Scale All Features First (Mandatory!)',
        en: 'Fit StandardScaler or MinMaxScaler on train only—otherwise salary (₹80,000) completely swamps age (28) in distance math.',
        hi: 'Sirf train par StandardScaler ya MinMaxScaler lagayein—warna salary (₹80,000) distance mein age (28) ko poori tarah daba degi.',
        tone: 'sky',
      },
      {
        title: 'Choose K via Cross-Validation',
        en: 'Use odd K for binary tasks to avoid ties; small K overfits (noisy), huge K underfits (over-smoothed).',
        hi: 'Binary tasks mein ties se bachne ke liye odd K chunein; chhota K overfit karta hai aur bahut bada K underfit.',
        tone: 'amber',
      },
      {
        title: 'Compute Distances to Training Points',
        en: 'Measure Euclidean (straight-line) or Manhattan distance between the new test point and stored training points.',
        hi: 'Naye test point aur training points ke beech Euclidean ya Manhattan distance calculate karein.',
        tone: 'lavender',
      },
      {
        title: 'Take Majority (or Distance-Weighted) Vote',
        en: 'Assign the class with the most votes among the K neighbors (optionally weighting closer neighbors higher).',
        hi: 'K neighbors mein jis class ko sabse zyada vote milein wahi predict karein (chahein toh kareebi neighbors ko zyada weight dein).',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: KNN CLASSIFIER WITH MANDATORY SCALING',
    code: `from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
import numpy as np

# [Age, Annual_Income_INR] -> Premium Buyer (1) or Regular (0)
X_tr = np.array([[22, 300000], [25, 350000], [40, 1200000], [45, 1400000], [28, 420000]])
y_tr = np.array([0, 0, 1, 1, 0])

knn = make_pipeline(StandardScaler(), KNeighborsClassifier(n_neighbors=3))
knn.fit(X_tr, y_tr)

print("Prediction for [42 yrs, ₹13L]:", knn.predict([[42, 1300000]])[0])`,
    codeOutput: `Prediction for [42 yrs, ₹13L]: 1`,
    codeCaptionEn: 'Without StandardScaler, a ₹1,00,000 income difference would outweigh a 40-year age difference by 2,500x!',
    codeCaptionHi: 'StandardScaler ke bina, ₹1,00,000 income ka farq 40 saal ki age ke farq se 2,500 guna zyada bhaari pad jaata!',
    tableTitle: 'How K Controls the Bias-Variance Trade-Off in KNN',
    tableHeaders: ['Value of K', 'Decision Boundary', 'Behavior', 'Risk'],
    tableRows: [
      ['K = 1', 'Jagged, wraps every single point', '100% Train accuracy, High Variance', 'Severe Overfitting to outliers'],
      ['K = 5 or 7', 'Smooth yet locally adaptive', 'Balanced Bias & Variance', 'Often the validation sweet spot'],
      ['K = N (All rows)', 'Flat constant prediction', 'Always predicts majority class', 'Severe Underfitting (High Bias)'],
    ],
    tableNoteEn: 'KNN is fast to train (.fit just stores data) but SLOW to predict on huge datasets because it computes distances to every training row.',
    tableNoteHi: 'KNN train karne mein instant hai par bade datasets par predict karne mein SLOW hota hai kyunki har training row se doori naapni padti hai.',
    mistakeEn: 'Running KNN on unscaled features (e.g., Age 20–60 mixed with Income 300,000–2,000,000), silently ignoring the smaller-scale feature.',
    mistakeHi: 'Unscaled features (jaise Age 20–60 aur Income 3L–20L) par seedha KNN chala dena, jisse Age feature poori tarah ignore ho jaata hai.',
    proHabitEn: 'Always wrap KNN with StandardScaler inside a Pipeline, tune K on validation folds, and avoid KNN when you have hundreds of noisy features (curse of dimensionality).',
    proHabitHi: 'KNN ko hamesha StandardScaler Pipeline mein rakhein, CV se K tune karein, aur bahut zyada features (high dimensions) mein KNN se bachein.',
    jobUseEn: 'Small-to-medium tabular benchmarks, missing-value imputation (KNNImputer), and similarity-based product recommendations.',
    jobUseHi: 'Chhote/medium datasets ke benchmarks, missing values bharne (KNNImputer), aur similarity-based recommendations mein kaam aata hai.',
    mcq1Question: 'Why is feature scaling (like StandardScaler) MANDATORY for K-Nearest Neighbors?',
    mcq1Correct: 'Because KNN relies on mathematical distances, so features with larger numeric ranges would completely dominate the distance calculation.',
    mcq1Wrongs: [
      'Because KNN crashes if any feature is greater than 100.',
      'Because scaling turns KNN into a Decision Tree.',
      'Because scaling removes all outliers permanently.',
    ],
    mcq1Explain: 'Euclidean distance squares feature differences—a column measured in rupees dwarfs a column measured in years unless both are scaled.',
    mcq2Question: 'What happens in KNN as you decrease K all the way down to K = 1?',
    mcq2Correct: 'Variance increases sharply (overfitting), because every single noisy training point creates its own island.',
    mcq2Wrongs: [
      'Bias increases sharply (underfitting).',
      'The model stops using training data.',
      'Prediction speed becomes 1000x faster.',
    ],
    mcq2Explain: 'At K=1, every training point is its own nearest neighbor (0% training error), making the boundary hyper-sensitive to noise.',
    realWorldScenario:
      'An engineer deploys KNN trained on 2 million user rows with 150 features and complains that live API predictions take 4 seconds each and accuracy is poor. Explain BOTH problems.',
    interviewQ1: 'Why is KNN called a "lazy, non-parametric learner"?',
    interviewA1:
      'It is "lazy" because it defers computation until prediction time rather than learning weights during training, and "non-parametric" because it makes no fixed functional assumption (like a straight line) about the decision boundary.',
    interviewQ2: 'How does the Curse of Dimensionality hurt KNN?',
    interviewA2:
      'In high-dimensional spaces, all points become almost equally far apart from each other, making "nearest" neighbors no longer meaningfully close—degrading KNN accuracy unless dimensionality is reduced first.',
  },
  {
    id: 245,
    modNum: 23,
    modTitle: 'Classification Algorithms',
    topicNumInMod: 4,
    title: 'Decision Tree Classification',
    subtitle: 'SPLITTING DATA INTO PURE CLASS BUCKETS USING GINI OR ENTROPY',
    coreEn:
      'A Decision Tree Classifier learns a tree of yes/no rules to separate classes cleanly. At each node, it picks the feature split that creates the purest child groups—measured by Gini Impurity or Entropy (Information Gain)—until stopping rules are reached.',
    coreHi:
      'Decision Tree Classifier classes ko alag karne ke liye yes/no rules ka ek flowchart banata hai. Har node par yeh woh feature split chunta hai jisse child groups sabse zyada "pure" (ek hi class ke) ban jayein—jise Gini Impurity ya Entropy (Information Gain) se naapa jaata hai.',
    analogyTitle: 'Playing "20 Questions" to Guess an Animal',
    analogyEn:
      'You ask the most informative question first: "Does it fly?" That immediately splits animals into two much purer groups. Asking smart yes/no questions in sequence lets you identify the animal in just 4–5 steps.',
    analogyHi:
      'Jaise "20 Questions" game mein aap sabse smart sawal pehle poochte hain: "Kya yeh udta hai?" Ek sawal se animals do saaf groups mein bat jaate hain. Sahi order mein sawal poochh kar 4–5 steps mein exact answer mil jaata hai.',
    steps: [
      {
        title: 'Measure Current Node Impurity',
        en: 'A 50/50 mix of Spam and Inbox has maximum impurity (Gini = 0.50); a 100/0 pure bucket has Gini = 0.00.',
        hi: '50/50 mix ka impurity maximum hota hai (Gini = 0.50); 100/0 pure bucket ka Gini = 0.00 hota hai.',
        tone: 'sky',
      },
      {
        title: 'Pick Split With Highest Purity Gain',
        en: 'Test candidate splits and choose the one that drops weighted child Gini/Entropy the most.',
        hi: 'Candidate splits check karein aur woh split chunein jo child buckets ki Gini/Entropy sabse zyada kam kare.',
        tone: 'amber',
      },
      {
        title: 'Control Depth to Prevent Overfitting',
        en: 'Prune the tree using max_depth, min_samples_split, and min_samples_leaf tuned on validation data.',
        hi: 'Validation data par max_depth, min_samples_split, aur min_samples_leaf tune karke tree ko overfit hone se rokein.',
        tone: 'lavender',
      },
      {
        title: 'Predict Majority Class & Leaf Proba',
        en: 'An unseen row follows the rules to a leaf; the leaf’s class ratio gives its predicted probability and class.',
        hi: 'Unseen row rules follow karke leaf tak pahunchti hai; us leaf ka class ratio probability aur final class deta hai.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: DECISION TREE CLASSIFIER & TEXT RULES',
    code: `from sklearn.tree import DecisionTreeClassifier, export_text
import numpy as np

# [Credit_Score, Has_Job(0/1)] -> Approved (1) / Rejected (0)
X = np.array([[520, 0], [580, 1], [690, 1], [740, 1], [610, 0], [780, 1]])
y = np.array([0, 0, 1, 1, 0, 1])

clf = DecisionTreeClassifier(max_depth=2, criterion="gini", random_state=42)
clf.fit(X, y)

print(export_text(clf, feature_names=["Credit_Score", "Has_Job"]))`,
    codeOutput: `|--- Credit_Score <= 650.00
|   |--- class: 0
|--- Credit_Score >  650.00
|   |--- class: 1`,
    codeCaptionEn: 'export_text() lets any non-technical manager read the exact decision rules learned by the tree!',
    codeCaptionHi: 'export_text() ki madad se koi bhi non-technical manager tree ke learned rules seedha padh sakta hai!',
    tableTitle: 'Gini Impurity Worked Examples (Formula: 1 − p₀² − p₁²)',
    tableHeaders: ['Leaf Contents (Class 0 / Class 1)', 'p₀ and p₁', 'Gini Impurity', 'Purity Verdict'],
    tableRows: [
      ['10 Spam, 0 Inbox', '1.0, 0.0', '1 − (1² + 0²) = 0.00', '100% Pure (Ideal Leaf!)'],
      ['8 Spam, 2 Inbox', '0.8, 0.2', '1 − (0.64 + 0.04) = 0.32', 'Fairly Pure'],
      ['5 Spam, 5 Inbox', '0.5, 0.5', '1 − (0.25 + 0.25) = 0.50', 'Maximum Impurity (Worst)'],
    ],
    tableNoteEn: 'Lower Gini (closer to 0) means cleaner, purer buckets. Both Gini and Entropy usually build very similar trees; Gini is slightly faster.',
    tableNoteHi: 'Gini jitna 0 ke paas ho, bucket utna hi clean aur pure hota hai. Gini aur Entropy lagbhag same trees banate hain; Gini thoda fast hai.',
    mistakeEn: 'Growing an unpruned tree with 25 levels that achieves 100% training accuracy by creating hyper-specific rules for 1-person edge cases.',
    mistakeHi: 'Bina max_depth ke 25-level tree uga dena jo 1-1 row ke liye rules bana kar 100% training accuracy dikhaye par test par fail ho jaaye.',
    proHabitEn: 'Always tune max_depth and min_samples_leaf via cross-validation, and visualize shallow trees (depth 3–4) to explain key drivers to stakeholders.',
    proHabitHi: 'Hamesha CV se max_depth aur min_samples_leaf tune karein, aur business stakeholders ko samjhane ke liye shallow tree (depth 3–4) visualize karein.',
    jobUseEn: 'Transparent eligibility rules in banking, telecom retention triggers, and serving as the core engine inside Random Forest and XGBoost.',
    jobUseHi: 'Banking eligibility rules, telecom retention triggers, aur Random Forest / XGBoost ke building block ke roop mein use hota hai.',
    mcq1Question: 'A leaf node contains 10 Fraud transactions and 0 Genuine transactions. What is its Gini Impurity?',
    mcq1Correct: '0.00 (completely pure)',
    mcq1Wrongs: [
      '0.50 (maximum impurity)',
      '1.00',
      '10.0',
    ],
    mcq1Explain: 'Gini = 1 − (1.0² + 0.0²) = 0.00—zero impurity means every sample in the leaf belongs to a single class.',
    mcq2Question: 'Which is a major advantage of a shallow Decision Tree over KNN?',
    mcq2Correct: 'It requires no feature scaling and outputs human-readable if-else rules.',
    mcq2Wrongs: [
      'It never overfits even at unlimited depth.',
      'It only works on unsupervised datasets.',
      'It always beats Random Forest on unseen data.',
    ],
    mcq2Explain: 'Trees split on thresholds (scale-invariant) and can be printed as simple rules any business stakeholder understands.',
    realWorldScenario:
      'A hospital wants an interpretable triage flowchart to flag high-risk emergency patients using age, oxygen level, and heart rate. How would you build and constrain a Decision Tree Classifier?',
    interviewQ1: 'What is the difference between Gini Impurity and Entropy in Decision Trees?',
    interviewA1:
      'Both measure node impurity (0 when pure, maximum at 50/50). Gini = 1 − Σpᵢ² avoids logarithms so it computes slightly faster, while Entropy = −Σpᵢ log₂(pᵢ) measures information bits. In practice they yield very similar trees.',
    interviewQ2: 'What is the difference between pre-pruning and post-pruning in Decision Trees?',
    interviewA2:
      'Pre-pruning stops tree growth early using limits like max_depth or min_samples_leaf. Post-pruning (like cost-complexity pruning ccp_alpha) grows a full tree first and trims back branches that don’t improve validation performance.',
  },
  {
    id: 246,
    modNum: 23,
    modTitle: 'Classification Algorithms',
    topicNumInMod: 5,
    title: 'Random Forest Classification',
    subtitle: 'A COMMITTEE OF DIVERSE DECISION TREES VOTING FOR THE RIGHT CLASS',
    coreEn:
      'Random Forest Classification builds an ensemble of many independent Decision Tree Classifiers—each trained on a random bootstrap sample of rows and random feature subsets at splits—and combines them by averaging their predicted class probabilities (soft voting) to produce a far more accurate, lower-variance classifier.',
    coreHi:
      'Random Forest Classification kai saare independent Decision Trees ka ek ensemble banata hai—har tree random rows aur random features se seekhta hai—aur phir sabhi trees ki predicted probabilities ka average (soft voting) le kar bahut hi accurate aur stable prediction deta hai.',
    analogyTitle: 'Panel of 100 Specialist Doctors Voting on a Diagnosis',
    analogyEn:
      'One tired doctor might misread a tricky X-ray. A panel of 100 independent doctors who each review the patient’s chart from slightly different angles and pool their probabilities makes far fewer mistakes than any single doctor.',
    analogyHi:
      'Ek akela thaka hua doctor tricky X-ray galat padh sakta hai. Par 100 independent doctors ka panel jo alag-alag angles se report check karke apni probabilities combine kare, woh bahut kam galtiyan karta hai.',
    steps: [
      {
        title: 'Create Bootstrapped Training Samples',
        en: 'Each tree trains on a random sample with replacement from X_train, leaving ~37% out-of-bag.',
        hi: 'Har tree X_train ke ek random bootstrap sample par train hota hai, aur ~37% rows out-of-bag bach jaati hain.',
        tone: 'sky',
      },
      {
        title: 'Subsample Features at Every Split',
        en: 'By default, classification trees consider sqrt(num_features) random features per split to maximize tree diversity.',
        hi: 'Default mein har split par sqrt(num_features) random features check hote hain taaki trees ek-doosre se alag banein.',
        tone: 'amber',
      },
      {
        title: 'Aggregate via Soft Probability Voting',
        en: 'Scikit-learn averages the predicted probabilities across all trees and picks the winning class.',
        hi: 'Scikit-learn sab trees ki predicted probabilities ka average nikal kar final class choose karta hai.',
        tone: 'lavender',
      },
      {
        title: 'Handle Imbalance & Inspect Importances',
        en: 'Use class_weight="balanced" when positives are rare and validate permutation importance on unseen validation data.',
        hi: 'Rare positive classes mein class_weight="balanced" try karein aur validation data par permutation importance check karein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: RANDOM FOREST CLASSIFIER',
    code: `from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.metrics import f1_score

X, y = make_classification(n_samples=500, n_features=10, weights=[0.8, 0.2], random_state=42)
X_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2, stratify=y, random_state=42)

rf = RandomForestClassifier(
    n_estimators=150, max_depth=8, class_weight="balanced", random_state=42
)
rf.fit(X_tr, y_tr)
print(f"Test F1-Score: {f1_score(y_te, rf.predict(X_te)):.3f}")`,
    codeOutput: `Test F1-Score: 0.857`,
    codeCaptionEn: 'Combining stratify=y, max_depth=8, and class_weight="balanced" gives strong minority-class F1 on unseen test data.',
    codeCaptionHi: 'stratify=y, max_depth=8, aur class_weight="balanced" ek saath use karne se unseen test par strong F1 score milta hai.',
    tableTitle: 'Soft Voting Example Across 4 Trees (Fraud Detection)',
    tableHeaders: ['Tree #', 'P(Fraud = 1)', 'Individual Hard Vote'],
    tableRows: [
      ['Tree 1', '0.85', 'Fraud (1)'],
      ['Tree 2', '0.70', 'Fraud (1)'],
      ['Tree 3', '0.45', 'Genuine (0)'],
      ['Tree 4', '0.40', 'Genuine (0)'],
      ['Ensemble Average', '(0.85+0.70+0.45+0.40)/4 = 0.60', 'Fraud (1) — Soft vote wins!'],
    ],
    tableNoteEn: 'Notice hard voting was a 2–2 tie, but soft probability averaging (0.60) captures confidence and makes the right call!',
    tableNoteHi: 'Dekhein: hard voting mein 2–2 tie tha, par soft probability average (0.60) confidence ko pakad kar sahi decision leta hai!',
    mistakeEn: 'Trusting default impurity-based feature_importances_ blindly when some features have high cardinality (many unique values), which biases split counts.',
    mistakeHi: 'High-cardinality features hone par default feature_importances_ par aankh band karke bharosa karna.',
    proHabitEn: 'Use permutation_importance on the validation set to verify which features truly improve unseen classification scores.',
    proHabitHi: 'Validation set par permutation_importance chala kar confirm karein ki kaunse features sach mein unseen score badhate hain.',
    jobUseEn: 'Customer churn prediction, loan default screening, telecom fraud alerts, and medical risk stratification on tabular datasets.',
    jobUseHi: 'Customer churn, loan default screening, telecom fraud alerts, aur medical risk classification ke liye industry favourite hai.',
    mcq1Question: 'How does scikit-learn’s RandomForestClassifier combine predictions from its individual trees?',
    mcq1Correct: 'By averaging the predicted class probabilities across all trees (soft voting).',
    mcq1Wrongs: [
      'By keeping only the single deepest tree.',
      'By multiplying all tree probabilities together.',
      'By running Linear Regression on the leaf IDs.',
    ],
    mcq1Explain: 'Scikit-learn averages each tree’s .predict_proba() output, which uses confidence information rather than bare 0/1 votes.',
    mcq2Question: 'What does setting class_weight="balanced" do in RandomForestClassifier?',
    mcq2Correct: 'It automatically gives higher penalty weight to rare classes inversely proportional to their frequency.',
    mcq2Wrongs: [
      'It deletes rows from the test set until classes are 50/50.',
      'It forces every tree to have the exact same depth.',
      'It removes all categorical features.',
    ],
    mcq2Explain: 'Class weights make mistakes on the rare positive class costlier during split selection without fabricating synthetic rows.',
    realWorldScenario:
      'Your RandomForestClassifier has 100% training accuracy and 79% validation accuracy. Which hyperparameters should you adjust to reduce overfitting?',
    interviewQ1: 'Why does Random Forest almost always outperform a single Decision Tree on unseen data?',
    interviewA1:
      'A single tree has high variance and overfits training noise. Random Forest averages many decorrelated trees (via row bootstrapping and feature subsampling), sharply reducing variance while keeping low bias.',
    interviewQ2: 'Does adding more trees (n_estimators from 200 to 1,000) cause Random Forest to overfit?',
    interviewA2:
      'No—increasing n_estimators only stabilizes the average and reduces variance further (with diminishing returns and higher compute cost). Overfitting in Random Forest comes from overly deep individual trees, not too many trees.',
  },
  {
    id: 247,
    modNum: 23,
    modTitle: 'Classification Algorithms',
    topicNumInMod: 6,
    title: 'Support Vector Machines',
    subtitle: 'FINDING THE WIDEST POSSIBLE SAFETY MARGIN BETWEEN TWO CLASSES',
    coreEn:
      'A Support Vector Machine (SVM) finds the dividing boundary (hyperplane) that separates classes with the MAXIMUM possible empty safety gap (margin) between them. Only the closest boundary points—called Support Vectors—anchor this line, and the "Kernel Trick" (like RBF) lets SVMs draw curved boundaries effortlessly.',
    coreHi:
      'Support Vector Machine (SVM) classes ke beech aisi dividing line (hyperplane) dhoondhta hai jisme dono taraf sabse CHAUDA safety gap (margin) ho. Sirf boundary ke sabse kareebi points (Support Vectors) is line ko pakad kar rakhte hain, aur "Kernel Trick" (jaise RBF) se SVM curved boundaries bhi bana leta hai.',
    analogyTitle: 'Drawing the Widest Possible Highway Median Between Two Rival Lanes',
    analogyEn:
      'Instead of painting a thin chalk line right next to oncoming cars, a highway engineer builds the widest possible median strip between Northbound and Southbound traffic. The cars driving closest to the curb define the exact edges of that safe margin—those cars are the Support Vectors.',
    analogyHi:
      'Aamne-saamne aati gaadiyon ke beech patli line khinchne ke bajay, highway engineer sabse chauda divider (margin) banata hai. Divider ke bilkul paas chalne wali gaadiyan us safe gap ki boundary tay karti hain—wahi Support Vectors hain.',
    steps: [
      {
        title: 'Scale Features Strictly Inside Pipeline',
        en: 'SVMs optimize geometric margins, so StandardScaler (fit on train only) is mandatory.',
        hi: 'SVM geometric margin optimize karta hai, isliye sirf train par fit kiya StandardScaler zaroori hai.',
        tone: 'sky',
      },
      {
        title: 'Choose Linear vs RBF Kernel',
        en: 'Use Linear kernel for high-dimensional text/sparse data; use RBF kernel for smooth nonlinear curves.',
        hi: 'High-dimensional text data ke liye Linear kernel aur smooth nonlinear curves ke liye RBF kernel choose karein.',
        tone: 'amber',
      },
      {
        title: 'Tune C (Margin Strictness) & Gamma',
        en: 'Small C allows a wider soft margin (more tolerant of outliers); large C demands fewer training errors (risks overfitting).',
        hi: 'Chhota C chauda soft margin deta hai (regularized); bada C har training point sahi karne ki zidd karta hai (overfitting risk).',
        tone: 'lavender',
      },
      {
        title: 'Evaluate on Unseen Validation Set',
        en: 'Enable probability=True only if you need calibrated probabilities (adds extra internal CV cost).',
        hi: 'Agar probabilities chahiye toh probability=True set karein aur unseen validation set par evaluate karein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: RBF SVM CLASSIFIER PIPELINE',
    code: `from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC
from sklearn.datasets import make_moons
from sklearn.model_selection import train_test_split

X, y = make_moons(n_samples=300, noise=0.2, random_state=42)
X_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.25, stratify=y, random_state=42)

svm = make_pipeline(StandardScaler(), SVC(kernel="rbf", C=1.0, gamma="scale"))
svm.fit(X_tr, y_tr)

print(f"Test Accuracy on nonlinear moons: {svm.score(X_te, y_te):.3f}")`,
    codeOutput: `Test Accuracy on nonlinear moons: 0.960`,
    codeCaptionEn: 'On crescent-shaped nonlinear data where a straight line fails, the RBF kernel curves cleanly around both moons!',
    codeCaptionHi: 'Crescent-shaped nonlinear data par jahan seedhi line fail ho jaati hai, RBF kernel dono curves ko cleanly alag kar deta hai!',
    tableTitle: 'Key SVM Hyperparameters: C and Gamma Explained Simply',
    tableHeaders: ['Hyperparameter', 'Low Value Effect', 'High Value Effect'],
    tableRows: [
      ['C (Penalty for margin errors)', 'Wider margin, simpler boundary (higher bias)', 'Narrower margin, fits every point (overfit risk)'],
      ['gamma (RBF reach)', 'Broad, smooth, gentle curves', 'Tight, spiky islands around points (overfit risk)'],
      ['kernel="linear" vs "rbf"', 'Fast straight hyperplane (great for text)', 'Flexible curved boundary (slower on huge N)'],
    ],
    tableNoteEn: 'RBF SVM scales poorly to very large datasets (100,000+ rows) because kernel math grows roughly quadratically with rows.',
    tableNoteHi: 'Bahut bade datasets (1,00,000+ rows) par RBF SVM kaafi slow ho jaata hai kyunki kernel math rows ke saath tezi se badhti hai.',
    mistakeEn: 'Running SVC() without StandardScaler or setting C=1000 and gamma=100, which creates tiny overfitted bubbles around every training point.',
    mistakeHi: 'Bina StandardScaler ke SVC() chalana ya C=1000 aur gamma=100 rakh dena jisse har training point ke around overfit bubbles ban jayein.',
    proHabitEn: 'Always pair SVC with StandardScaler in a Pipeline, tune C and gamma on a log scale (0.1, 1, 10), and prefer LinearSVC or tree ensembles on huge datasets.',
    proHabitHi: 'SVC ko hamesha StandardScaler Pipeline mein rakhein, C aur gamma ko log scale (0.1, 1, 10) par tune karein, aur huge datasets par LinearSVC ya ensembles use karein.',
    jobUseEn: 'Text classification (TF-IDF + LinearSVC), bioinformatics/genomics with many features and modest row counts, and clean medium-sized nonlinear tasks.',
    jobUseHi: 'Text classification (TF-IDF + LinearSVC), bioinformatics (zyada features, kam rows), aur clean medium-sized nonlinear datasets mein use hota hai.',
    mcq1Question: 'What are "Support Vectors" in a Support Vector Machine?',
    mcq1Correct: 'The critical training points lying closest to the decision boundary that define the margin.',
    mcq1Wrongs: [
      'All missing values removed during cleaning.',
      'The column names of the dataset.',
      'Randomly generated synthetic test rows.',
    ],
    mcq1Explain: 'If you move points far from the boundary, the SVM hyperplane doesn’t budge—only the Support Vectors right on/inside the margin determine it.',
    mcq2Question: 'What does the "Kernel Trick" (such as the RBF kernel) allow an SVM to do?',
    mcq2Correct: 'Learn curved, nonlinear decision boundaries by computing dot products as if data were mapped into a higher dimension.',
    mcq2Wrongs: [
      'Skip feature scaling completely.',
      'Train on unlabeled unsupervised datasets.',
      'Guarantee zero false negatives on imbalanced data.',
    ],
    mcq2Explain: 'The kernel trick computes high-dimensional similarities efficiently without explicitly creating infinite new columns.',
    realWorldScenario:
      'You have 800 medical tissue samples with 5,000 gene-expression features each. Why is a scaled Linear SVM often a great candidate here?',
    interviewQ1: 'How does the regularization parameter C work in SVM?',
    interviewA1:
      'C controls the trade-off between maximizing margin width and minimizing training classification errors. A small C tolerates more margin violations for better generalization; a large C heavily penalizes training errors and risks overfitting.',
    interviewQ2: 'Why is feature scaling critical for SVM just like for KNN?',
    interviewA2:
      'SVM maximizes Euclidean margin distance and RBF kernels compute squared Euclidean distances between points—unscaled large-unit features dominate the margin and kernel completely.',
  },
  {
    id: 248,
    modNum: 23,
    modTitle: 'Classification Algorithms',
    topicNumInMod: 7,
    title: 'Naive Bayes',
    subtitle: 'LIGHTNING-FAST PROBABILITY CLASSIFICATION USING BAYES’ THEOREM',
    coreEn:
      'Naive Bayes applies Bayes’ Theorem to calculate the probability of each class given the observed features. It is called "Naive" because it assumes every feature contributes independently (ignoring correlations between features)—an oversimplification that still works shockingly well and ultra-fast, especially for text and spam filtering.',
    coreHi:
      'Naive Bayes har class ki probability nikalne ke liye Bayes’ Theorem use karta hai. Ise "Naive" isliye kehte hain kyunki yeh maan kar chalta hai ki sab features ek-doosre se bilkul independent hain—yeh simple assumption hone ke bawajood text aur spam classification mein bahut fast aur strong kaam karta hai.',
    analogyTitle: 'Detective Adding Up Independent Clues for a Spam Email',
    analogyEn:
      'If an email contains the words "FREE", "LOTTERY", and "CLICK NOW", a Naive Bayes detective multiplies the spam odds of each word independently (even though those words often appear together). Even with that shortcut, the combined spam score is overwhelmingly clear!',
    analogyHi:
      'Agar kisi email mein "FREE", "LOTTERY", aur "CLICK NOW" shabd aayein, toh Naive Bayes har shabd ke spam hone ke chance ko alag-alag independent maan kar multiply karta hai. Is shortcut ke baad bhi spam ka score ekdum saaf nikal aata hai!',
    steps: [
      {
        title: 'Choose the Right Naive Bayes Variant',
        en: 'Use MultinomialNB for word counts/TF-IDF text, BernoulliNB for binary flags, and GaussianNB for continuous numbers.',
        hi: 'Word counts/text ke liye MultinomialNB, binary 0/1 flags ke liye BernoulliNB, aur continuous numbers ke liye GaussianNB chunein.',
        tone: 'sky',
      },
      {
        title: 'Compute Class Priors & Likelihoods on Train',
        en: 'Learn how common each class is overall and how often each feature value appears inside each class.',
        hi: 'Training data se har class ka prior aur har class ke andar har feature ka likelihood learn karein.',
        tone: 'amber',
      },
      {
        title: 'Apply Laplace Smoothing (alpha)',
        en: 'Add a small smoothing count (alpha=1.0) so a brand-new unseen word in test data never multiplies total probability by zero.',
        hi: 'Chhota smoothing count (alpha=1.0) add karein taaki test data mein koi naya unseen word poori probability ko zero na bana de.',
        tone: 'lavender',
      },
      {
        title: 'Pick Highest Posterior Class',
        en: 'Multiply prior × feature likelihoods (in log-space for numeric stability) and pick the highest-scoring class.',
        hi: 'Prior × feature likelihoods (log-space mein) jod kar highest posterior score wali class predict karein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: MULTINOMIAL NAIVE BAYES SPAM FILTER',
    code: `from sklearn.pipeline import make_pipeline
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB

texts = [
    "win free cash prize now",
    "claim your free lottery reward",
    "team meeting moved to 3pm",
    "please review the quarterly report",
]
labels = [1, 1, 0, 0]  # 1=Spam, 0=Inbox

nb_pipe = make_pipeline(CountVectorizer(), MultinomialNB(alpha=1.0))
nb_pipe.fit(texts, labels)

print("Pred for 'free prize claim':", nb_pipe.predict(["free prize claim"])[0])
print("Pred for 'quarterly team review':", nb_pipe.predict(["quarterly team review"])[0])`,
    codeOutput: `Pred for 'free prize claim': 1
Pred for 'quarterly team review': 0`,
    codeCaptionEn: 'CountVectorizer + MultinomialNB builds a working spam classifier in milliseconds—even on tens of thousands of vocabulary words!',
    codeCaptionHi: 'CountVectorizer + MultinomialNB milliseconds mein ek strong spam classifier bana deta hai—chahe hazaaron shabd kyun na hon!',
    tableTitle: 'Choosing the Right Naive Bayes Variant',
    tableHeaders: ['Scikit-learn Class', 'Best Input Type', 'Classic Use Case'],
    tableRows: [
      ['MultinomialNB', 'Non-negative counts / TF-IDF', 'Email spam, news categorization, sentiment analysis'],
      ['GaussianNB', 'Continuous bell-curved numbers', 'Fast baseline on small continuous tabular data'],
      ['BernoulliNB', 'Binary presence/absence (0 or 1)', 'Short SMS / keyword presence flags'],
    ],
    tableNoteEn: 'Because of the independence assumption, Naive Bayes class rankings are great, but its raw probabilities can be overly extreme (close to 0 or 1).',
    tableNoteHi: 'Independence assumption ki wajah se Naive Bayes ki class ranking acchi hoti hai, par iski raw probabilities thodi extreme (0 ya 1 ke bahut paas) ho sakti hain.',
    mistakeEn: 'Setting alpha=0 (no Laplace smoothing), causing a single never-before-seen word in a test email to wipe out the entire class probability to zero.',
    mistakeHi: 'alpha=0 rakh dena (smoothing band karna), jisse test email mein ek naya shabd aate hi poori probability zero ho jaati hai.',
    proHabitEn: 'Always keep Laplace smoothing (alpha > 0) enabled, and use MultinomialNB + TF-IDF as your ultra-fast first baseline for any text classification task.',
    proHabitHi: 'Hamesha Laplace smoothing (alpha > 0) on rakhein, aur kisi bhi text classification project mein MultinomialNB + TF-IDF ko apna fast baseline banayein.',
    jobUseEn: 'Real-time spam filtering, customer support ticket auto-routing, and lightweight sentiment analysis where latency must be under 1 millisecond.',
    jobUseHi: 'Real-time spam filtering, support ticket routing, aur ultra-fast sentiment analysis mein jahan latency 1 millisecond se kam chahiye.',
    mcq1Question: 'Why is Naive Bayes called "Naive"?',
    mcq1Correct: 'It assumes all input features are conditionally independent given the class label, even when they are correlated in real life.',
    mcq1Wrongs: [
      'It only works for beginner students and never in real companies.',
      'It ignores the target labels during training.',
      'It cannot process more than two features.',
    ],
    mcq1Explain: 'In real text, "credit" and "card" are strongly correlated, yet Naive Bayes treats them as independent—still delivering fast, strong predictions.',
    mcq2Question: 'What problem does Laplace Smoothing (alpha=1.0) solve in Multinomial Naive Bayes?',
    mcq2Correct: 'The zero-frequency problem—preventing a word unseen in training from multiplying the entire probability by zero.',
    mcq2Wrongs: [
      'It fixes missing numeric values in CSV files.',
      'It converts regression targets into categories.',
      'It removes duplicate rows from the test set.',
    ],
    mcq2Explain: 'Without smoothing, P(unseen_word | class) = 0, which zeroes out the whole product of probabilities.',
    realWorldScenario:
      'You need to classify 500,000 incoming customer chat messages into 12 support categories on a tiny CPU server with <5 ms latency. Why is TF-IDF + MultinomialNB an ideal first prototype?',
    interviewQ1: 'Explain Bayes’ Theorem in the context of Naive Bayes classification.',
    interviewA1:
      'P(Class | Features) ∝ P(Class) × Π P(Featureᵢ | Class). We multiply the prior probability of each class by the conditional likelihood of each feature assuming independence, and select the class with the highest posterior.',
    interviewQ2: 'Why are Naive Bayes predicted probabilities often poorly calibrated even when its classification accuracy is high?',
    interviewA2:
      'Because correlated features get "double-counted" as independent evidence, pushing predicted probabilities artificially close to 0.0 or 1.0—even though the argmax class choice is often still right.',
  },
  {
    id: 249,
    modNum: 23,
    modTitle: 'Classification Algorithms',
    topicNumInMod: 8,
    title: 'Confusion Matrix',
    subtitle: 'THE 2×2 SCORECARD THAT SHOWS EXACTLY WHICH MISTAKES YOUR MODEL MAKES',
    coreEn:
      'A single Accuracy percentage hides WHICH mistakes a classifier makes. A Confusion Matrix breaks all test predictions into 4 crystal-clear boxes: True Positives (TP — correctly caught positives), True Negatives (TN — correctly cleared negatives), False Positives (FP — false alarms), and False Negatives (FN — missed positives).',
    coreHi:
      'Sirf ek Accuracy number yeh chhupa leta hai ki model kis tarah ki galti kar raha hai. Confusion Matrix test predictions ko 4 saaf boxes mein todta hai: True Positives (TP — sahi pakde gaye), True Negatives (TN — sahi clear kiye gaye), False Positives (FP — jhoothe alarm), aur False Negatives (FN — asli cases jo chhoot gaye).',
    analogyTitle: 'Airport Security Bag Scanner',
    analogyEn:
      'When scanning bags for prohibited items: catching an actual knife is a True Positive (TP). Clearing a normal laptop bag is a True Negative (TN). Stopping an innocent bottle of perfume is a False Positive (FP — annoying false alarm). Letting a real knife slip past security is a False Negative (FN — dangerous miss!).',
    analogyHi:
      'Airport bag scanner samajhiye: asli chaku pakadna True Positive (TP) hai. Normal bag pass karna True Negative (TN) hai. Innocent perfume par alarm bajna False Positive (FP — jhootha alarm) hai. Aur asli chaku bina pakde nikal jaana False Negative (FN — khatarnak chook!).',
    steps: [
      {
        title: 'Generate Predictions on Unseen Test Set',
        en: 'Compare ground-truth y_test against model predictions y_pred.',
        hi: 'Ground-truth y_test ko model ki predictions y_pred ke saath compare karein.',
        tone: 'sky',
      },
      {
        title: 'Count TP, TN, FP, and FN',
        en: 'Place every test sample into one of the four cells so TP + TN + FP + FN equals total test samples.',
        hi: 'Har test sample ko 4 cells mein se ek mein rakhein jahan TP + TN + FP + FN = total test samples ho.',
        tone: 'amber',
      },
      {
        title: 'Assign Business Costs to FP vs FN',
        en: 'Ask stakeholders: is a False Alarm (FP) worse, or is a Missed Case (FN) worse?',
        hi: 'Stakeholders se poochein: False Alarm (FP) zyada mehnga hai ya Missed Case (FN)?',
        tone: 'lavender',
      },
      {
        title: 'Use Matrix to Derive Precision & Recall',
        en: 'Compute Accuracy, Precision, Recall, and F1 directly from these 4 counts.',
        hi: 'Inhi 4 numbers se Accuracy, Precision, Recall, aur F1 directly calculate karein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: CONFUSION MATRIX ON 100 TEST PATIENTS',
    code: `from sklearn.metrics import confusion_matrix

# 100 test cases: 20 actual Positive (1), 80 actual Negative (0)
y_true = [1]*16 + [1]*4  + [0]*5  + [0]*75
y_pred = [1]*16 + [0]*4  + [1]*5  + [0]*75

cm = confusion_matrix(y_true, y_pred)
tn, fp, fn, tp = cm.ravel()
print(f"TN={tn}, FP={fp}, FN={fn}, TP={tp}")
print(f"Accuracy = {(tp + tn) / (tp + tn + fp + fn):.2%}")`,
    codeOutput: `TN=75, FP=5, FN=4, TP=16
Accuracy = 91.00%`,
    codeCaptionEn: 'Verify the math: 75 + 5 + 4 + 16 = 100 patients; correct = 75 + 16 = 91 (91%); 5 false alarms (FP), 4 missed cases (FN).',
    codeCaptionHi: 'Math verify karein: 75 + 5 + 4 + 16 = 100 patients; sahi = 75 + 16 = 91 (91%); 5 false alarms (FP), 4 missed cases (FN).',
    tableTitle: '2×2 Confusion Matrix (100 Medical Screening Test Patients)',
    tableHeaders: ['Actual \\ Predicted', 'Predicted Negative (0)', 'Predicted Positive (1)', 'Row Total'],
    tableRows: [
      ['Actual Negative (0 — Healthy)', 'TN = 75 (Correctly Cleared)', 'FP = 5 (False Alarm / Type I)', '80 Healthy'],
      ['Actual Positive (1 — Sick)', 'FN = 4 (Missed Case / Type II)', 'TP = 16 (Correctly Caught)', '20 Sick'],
      ['Column Total', '79 Predicted Negative', '21 Predicted Positive', '100 Total'],
    ],
    tableNoteEn: 'In scikit-learn, confusion_matrix(y_true, y_pred) ALWAYS puts rows = Actual (0, 1) and columns = Predicted (0, 1), so ravel() returns TN, FP, FN, TP.',
    tableNoteHi: 'Scikit-learn mein confusion_matrix(y_true, y_pred) hamesha rows = Actual (0, 1) aur columns = Predicted (0, 1) rakhta hai, toh ravel() TN, FP, FN, TP deta hai.',
    mistakeEn: 'Swapping rows and columns when reading a confusion matrix, causing you to confuse False Positives with False Negatives.',
    mistakeHi: 'Confusion matrix padhte waqt rows aur columns ulta samajh lena, jisse False Positive aur False Negative aapas mein gadbad ho jayein.',
    proHabitEn: 'Always label axes clearly ("Actual" on rows, "Predicted" on columns) using ConfusionMatrixDisplay.from_predictions().',
    proHabitHi: 'Hamesha ConfusionMatrixDisplay.from_predictions() se "Actual" aur "Predicted" labels clearly print karein.',
    jobUseEn: 'Presenting exact error breakdowns to fraud ops, medical teams, and customer support leads before launch.',
    jobUseHi: 'Launch se pehle fraud ops, medical teams, aur support leads ko exact error breakdown dikhane ke liye use hota hai.',
    mcq1Question: 'In a cancer screening test, a sick patient is mistakenly told they are completely healthy. Which cell of the Confusion Matrix is this?',
    mcq1Correct: 'False Negative (FN)',
    mcq1Wrongs: [
      'False Positive (FP)',
      'True Positive (TP)',
      'True Negative (TN)',
    ],
    mcq1Explain: 'The model predicted Negative (healthy), and that prediction was False (the patient is actually positive/sick) -> False Negative.',
    mcq2Question: 'Given TN = 75, FP = 5, FN = 4, TP = 16, what is the total number of ACTUALLY positive cases?',
    mcq2Correct: '20 (TP + FN = 16 + 4)',
    mcq2Wrongs: [
      '21 (TP + FP = 16 + 5)',
      '80 (TN + FP = 75 + 5)',
      '91 (TP + TN = 16 + 75)',
    ],
    mcq2Explain: 'Actual Positives consist of those caught (TP = 16) plus those missed (FN = 4) = 20.',
    realWorldScenario:
      'An email spam filter has TN=900, FP=40, FN=10, TP=50. Are users more likely to complain about the 40 False Positives or the 10 False Negatives? Why?',
    interviewQ1: 'Explain Type I error (FP) and Type II error (FN) using a real business example.',
    interviewA1:
      'In credit card fraud: a False Positive (Type I) declines a legitimate customer’s card at checkout (annoying), whereas a False Negative (Type II) approves a thief’s transaction (direct financial loss).',
    interviewQ2: 'How does a Confusion Matrix work for a 3-class problem (e.g., Low / Medium / High risk)?',
    interviewA2:
      'It becomes a 3×3 matrix where the main diagonal holds correct predictions for each class, and off-diagonal cells reveal exact confusions—for example, whether High risk is being misclassified as Medium or dangerously as Low.',
  },
  {
    id: 250,
    modNum: 23,
    modTitle: 'Classification Algorithms',
    topicNumInMod: 9,
    title: 'Precision, Recall and F1-Score',
    subtitle: 'CHOOSING BETWEEN FEWER FALSE ALARMS (PRECISION) AND CATCHING EVERY CASE (RECALL)',
    coreEn:
      'From the Confusion Matrix we compute three essential metrics: Precision = TP / (TP + FP) asks "When the model shouts YES, how often is it right?"; Recall = TP / (TP + FN) asks "Of all real YES cases, how many did we catch?"; and F1-Score = 2·(P·R)/(P+R) is their harmonic mean—high ONLY when BOTH Precision and Recall are strong.',
    coreHi:
      'Confusion Matrix se 3 sabse zaroori metrics bante hain: Precision = TP / (TP + FP) poochta hai "Jab model YES bole, kitni baar sahi hota hai?"; Recall = TP / (TP + FN) poochta hai "Sab asli YES cases mein se kitne pakde gaye?"; aur F1-Score dono ka harmonic mean hai—tabhi high hota hai jab DONO acche hon.',
    analogyTitle: 'Medical Cancer Screening vs VIP Spam Blocker',
    analogyEn:
      'In cancer screening, Recall is king—missing a real patient (FN) can be fatal, so you prefer catching 98% of cases even with some extra follow-up tests. In a spam blocker, Precision is king—sending a user’s real job-offer email to Spam (FP) is unacceptable!',
    analogyHi:
      'Cancer screening mein Recall sabse zaroori hai—asli mareez chhootna (FN) jaanlewa ho sakta hai, bhale hi kuch extra tests karwane padein. Spam filter mein Precision sabse zaroori hai—user ka asli job-offer email Spam mein jaana (FP) bilkul galat hai!',
    steps: [
      {
        title: 'Calculate Precision (Quality of Alerts)',
        en: 'Precision = TP / (TP + FP). Focus here when False Positives are expensive (spam filters, blocking good users).',
        hi: 'Precision = TP / (TP + FP). Jab False Positives mehnge hon (spam filter, innocent user block) tab Precision par dhyan dein.',
        tone: 'sky',
      },
      {
        title: 'Calculate Recall (Coverage of Real Positives)',
        en: 'Recall = TP / (TP + FN). Focus here when False Negatives are dangerous (disease screening, fraud, safety defects).',
        hi: 'Recall = TP / (TP + FN). Jab False Negatives khatarnak hon (bimari, fraud, safety fault) tab Recall par dhyan dein.',
        tone: 'amber',
      },
      {
        title: 'Compute F1-Score (Balanced Harmonic Mean)',
        en: 'F1 = 2 × (Precision × Recall) / (Precision + Recall). Punishes extreme imbalance between P and R.',
        hi: 'F1 = 2 × (Precision × Recall) / (Precision + Recall). Agar dono mein se ek bhi bahut kam ho toh F1 turant gir jaata hai.',
        tone: 'lavender',
      },
      {
        title: 'Tune Probability Threshold for Trade-Off',
        en: 'Lowering threshold (e.g., 0.5 -> 0.3) boosts Recall but lowers Precision; raising it (0.5 -> 0.7) boosts Precision but lowers Recall.',
        hi: 'Threshold kam karne (0.5 -> 0.3) se Recall badhta hai par Precision ghatta hai; badhane (0.5 -> 0.7) se Precision badhta hai par Recall ghatta hai.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: VERIFIED PRECISION, RECALL & F1 MATH',
    code: `from sklearn.metrics import precision_score, recall_score, f1_score

# Using exact numbers: TP=16, FP=4, FN=4, TN=76 (100 test cases)
y_true = [1]*16 + [1]*4 + [0]*4 + [0]*76
y_pred = [1]*16 + [0]*4 + [1]*4 + [0]*76

p = precision_score(y_true, y_pred)
r = recall_score(y_true, y_pred)
f1 = f1_score(y_true, y_pred)

print(f"Precision: {p:.2f} | Recall: {r:.2f} | F1-Score: {f1:.2f}")`,
    codeOutput: `Precision: 0.80 | Recall: 0.80 | F1-Score: 0.80`,
    codeCaptionEn: 'Verify: Precision = 16/(16+4) = 0.80; Recall = 16/(16+4) = 0.80; F1 = 2*(0.8*0.8)/(0.8+0.8) = 0.80.',
    codeCaptionHi: 'Verify karein: Precision = 16/(16+4) = 0.80; Recall = 16/(16+4) = 0.80; F1 = 2*(0.8*0.8)/(0.8+0.8) = 0.80.',
    tableTitle: 'Why F1 Uses Harmonic Mean Instead of Simple Average',
    tableHeaders: ['Model', 'Precision', 'Recall', 'Simple Average', 'F1-Score (Harmonic Mean)'],
    tableRows: [
      ['Model A (Flags everyone "Yes")', '0.10', '1.00', '0.55 (looks okay!)', '0.18 (exposes bad model!)'],
      ['Model B (Flags 1 obvious case)', '1.00', '0.10', '0.55 (looks okay!)', '0.18 (exposes bad model!)'],
      ['Model C (Balanced & Useful)', '0.80', '0.80', '0.80', '0.80 (strong F1!)'],
    ],
    tableNoteEn: 'If a model cheats by flagging every row as Positive, Recall = 1.00, Precision collapses to 0.10, and F1 exposes the trick immediately (0.18)!',
    tableNoteHi: 'Agar model cheating karke har row ko Positive bol de, toh Recall = 1.00 par Precision 0.10 aur F1 sirf 0.18 aata hai—turant pakda jaata hai!',
    mistakeEn: 'Optimizing for Accuracy on an imbalanced dataset or bragging about 100% Recall when Precision is only 5%.',
    mistakeHi: 'Imbalanced data par Accuracy dekhna ya 100% Recall par khush hona jab Precision sirf 5% ho.',
    proHabitEn: 'Always print classification_report(y_test, y_pred) and explicitly align your threshold with whether FP or FN hurts the business more.',
    proHabitHi: 'Hamesha classification_report(y_test, y_pred) print karein aur business cost ke hisaab se Precision vs Recall threshold set karein.',
    jobUseEn: 'Setting alert thresholds in fraud operations, medical diagnostics, manufacturing defect cameras, and marketing lead scoring.',
    jobUseHi: 'Fraud alerts, medical diagnostics, factory defect cameras, aur marketing lead scoring ke thresholds set karne mein use hota hai.',
    mcq1Question: 'Suppose TP = 30, FP = 10, FN = 20. What are Precision and Recall?',
    mcq1Correct: 'Precision = 30/40 = 0.75, Recall = 30/50 = 0.60',
    mcq1Wrongs: [
      'Precision = 30/50 = 0.60, Recall = 30/40 = 0.75',
      'Precision = 30/60 = 0.50, Recall = 10/20 = 0.50',
      'Precision = 1.00, Recall = 1.00',
    ],
    mcq1Explain: 'Precision = TP/(TP+FP) = 30/(30+10) = 0.75. Recall = TP/(TP+FN) = 30/(30+20) = 0.60.',
    mcq2Question: 'If you LOWER a classifier’s probability threshold from 0.50 to 0.25, what generally happens?',
    mcq2Correct: 'More cases are predicted Positive, so Recall increases (or stays same) while Precision usually decreases.',
    mcq2Wrongs: [
      'Fewer cases are predicted Positive, so Recall drops to zero.',
      'Both Precision and Recall are guaranteed to hit 1.00.',
      'The Confusion Matrix no longer has False Positives.',
    ],
    mcq2Explain: 'A lower bar catches more real positives (higher Recall) but also lets in more false alarms (lower Precision).',
    realWorldScenario:
      'You built a factory defect detector for airplane brake pads. Should you prioritize Precision or Recall—and how would you adjust the probability threshold?',
    interviewQ1: 'Why does F1-Score use the harmonic mean of Precision and Recall rather than the arithmetic average?',
    interviewA1:
      'The arithmetic average rewards extreme one-sided models (e.g., P=0.02, R=1.00 averages to 0.51). The harmonic mean pulls sharply toward the smaller value (F1=0.04), ensuring a high score only when both Precision and Recall are strong.',
    interviewQ2: 'When would you use F-beta score (like F2 or F0.5) instead of F1?',
    interviewA2:
      'Use F2 when Recall is more important than Precision (medical screening, safety), and F0.5 when Precision matters more than Recall (spam filtering, expensive manual audits).',
  },
  {
    id: 251,
    modNum: 23,
    modTitle: 'Classification Algorithms',
    topicNumInMod: 10,
    title: 'ROC Curve and AUC',
    subtitle: 'EVALUATING HOW WELL A CLASSIFIER RANKS POSITIVES ABOVE NEGATIVES ACROSS ALL THRESHOLDS',
    coreEn:
      'Precision and Recall change every time you move the decision threshold. The ROC Curve (Receiver Operating Characteristic) plots True Positive Rate (Recall) against False Positive Rate across EVERY possible threshold from 1.0 down to 0.0. AUC (Area Under the Curve) summarizes that curve into one number from 0.5 (random coin flip) to 1.0 (perfect ranker).',
    coreHi:
      'Threshold badalne par Precision aur Recall badal jaate hain. ROC Curve 1.0 se 0.0 tak HAR threshold par True Positive Rate (Recall) vs False Positive Rate plot karta hai. AUC (Area Under Curve) us curve ko ek single score mein badalta hai—0.5 matlab random coin flip, aur 1.0 matlab perfect ranking.',
    analogyTitle: 'Metal Detector Sensitivity Dial at Every Setting',
    analogyEn:
      'A metal detector has a sensitivity dial from 0 to 10. At low sensitivity it misses coins (low TPR, low FPR); at max sensitivity it beeps at everything (high TPR, high FPR). ROC-AUC measures how cleanly the detector separates real gold coins from tin cans across ALL dial settings at once.',
    analogyHi:
      'Metal detector mein sensitivity dial hota hai. Kam sensitivity par gold miss hota hai; full sensitivity par har cheez par beep bajta hai. ROC-AUC yeh naapta hai ki sabhi dial settings par detector asli sone aur kachre ko kitni safai se alag karta hai.',
    steps: [
      {
        title: 'Get Continuous Probabilities (.predict_proba)',
        en: 'Always pass predicted probabilities (NOT hard 0/1 labels!) to roc_curve and roc_auc_score.',
        hi: 'roc_curve aur roc_auc_score ko hamesha probabilities (.predict_proba()[:, 1]) dein—hard 0/1 labels nahi!',
        tone: 'sky',
      },
      {
        title: 'Sweep Every Threshold (TPR vs FPR)',
        en: 'Compute TPR = TP/(TP+FN) and FPR = FP/(FP+TN) at every threshold from strict (top-left) to loose (top-right).',
        hi: 'Har threshold par TPR = TP/(TP+FN) aur FPR = FP/(FP+TN) calculate karke curve banayein.',
        tone: 'amber',
      },
      {
        title: 'Interpret AUC as Ranking Probability',
        en: 'AUC = 0.88 means there is an 88% chance the model assigns a higher score to a random Positive than to a random Negative.',
        hi: 'AUC = 0.88 ka seedha matlab hai 88% chance ki model ek random Positive ko random Negative se zyada score dega.',
        tone: 'lavender',
      },
      {
        title: 'Pair With PR-AUC for Extreme Imbalance',
        en: 'When positives are <1% (e.g., fraud), also check Precision-Recall AUC because huge TN counts can make ROC-AUC look overly rosy.',
        hi: 'Jab positives <1% hon (jaise fraud), toh ROC-AUC ke saath Precision-Recall AUC zaroor dekhein kyunki huge TN count ROC ko zyada accha dikha sakta hai.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: COMPUTING ROC-AUC FROM PROBABILITIES',
    code: `from sklearn.metrics import roc_auc_score

y_true  = [0, 0, 0, 1, 1, 1]
y_probs = [0.10, 0.25, 0.40, 0.35, 0.80, 0.92]

auc = roc_auc_score(y_true, y_probs)
print(f"ROC-AUC Score: {auc:.4f}")`,
    codeOutput: `ROC-AUC Score: 0.8889`,
    codeCaptionEn: 'Verify ranking math: There are 3×3 = 9 (Pos, Neg) pairs. In 8 of 9 pairs, Positive has higher prob (only 0.35 < 0.40 failed) -> 8/9 = 0.8889!',
    codeCaptionHi: 'Math verify karein: 3×3 = 9 (Pos, Neg) pairs hain. 9 mein se 8 pairs mein Positive ka score zyada hai (sirf 0.35 < 0.40 fail) -> 8/9 = 0.8889!',
    tableTitle: 'Interpreting ROC-AUC Scores Quickly',
    tableHeaders: ['ROC-AUC Range', 'Ranking Quality', 'What It Means'],
    tableRows: [
      ['1.00', 'Perfect Separation', 'Every Positive scored strictly higher than every Negative (check for leakage!)'],
      ['0.80 – 0.95', 'Strong Classifier', 'Very reliable risk ranking on unseen data'],
      ['0.65 – 0.79', 'Moderate Signal', 'Useful, especially if combined with better features'],
      ['0.50', 'Random Guessing', 'No better than flipping a fair coin (diagonal line)'],
      ['< 0.50', 'Inverted Predictions', 'Model is systematically backwards (check if labels 0/1 were flipped!)'],
    ],
    tableNoteEn: 'ROC-AUC is threshold-independent—great for comparing models first, before picking one operating threshold for deployment.',
    tableNoteHi: 'ROC-AUC threshold-independent hota hai—deployment ka threshold choose karne se pehle models compare karne ke liye best hai.',
    mistakeEn: 'Passing hard predictions model.predict(X_test) instead of model.predict_proba(X_test)[:, 1] into roc_auc_score().',
    mistakeHi: 'roc_auc_score() mein probabilities ke bajay hard 0/1 labels model.predict(X_test) pass kar dena.',
    proHabitEn: 'Use ROC-AUC to compare ranking power across models, and ALWAYS check PR-AUC alongside it when positives are rare (<5%).',
    proHabitHi: 'Models ki ranking compare karne ke liye ROC-AUC use karein, aur rare positives (<5%) mein saath mein PR-AUC zaroor check karein.',
    jobUseEn: 'Credit risk scoring (Gini = 2×AUC − 1 in banking!), ad click ranking, and comparing classification models before threshold tuning.',
    jobUseHi: 'Banking credit risk scoring (Gini = 2×AUC − 1), ad click ranking, aur classification models compare karne mein use hota hai.',
    mcq1Question: 'What is the intuitive probability meaning of ROC-AUC = 0.85?',
    mcq1Correct: 'There is an 85% probability that the model ranks a randomly chosen Positive higher than a randomly chosen Negative.',
    mcq1Wrongs: [
      'The model gets exactly 85% accuracy at threshold 0.5.',
      '85% of the features were used in the model.',
      'There are 85% positive rows in the dataset.',
    ],
    mcq1Explain: 'ROC-AUC equals the probability that a random positive instance receives a higher predicted score than a random negative instance.',
    mcq2Question: 'Why can ROC-AUC look misleadingly optimistic (e.g., 0.96) on a 99.5% negative fraud dataset?',
    mcq2Correct: 'Because False Positive Rate divides FP by (FP + TN), and a huge TN count keeps FPR tiny even when thousands of false alarms occur.',
    mcq2Wrongs: [
      'Because ROC-AUC ignores True Positives.',
      'Because scikit-learn adds 0.50 to every AUC score.',
      'Because fraud datasets cannot use probabilities.',
    ],
    mcq2Explain: 'When negatives outnumber positives 200:1, 1,000 false alarms still give a tiny FPR—Precision-Recall AUC exposes those false alarms immediately.',
    realWorldScenario:
      'Your fraud model has ROC-AUC = 0.94, yet the fraud operations team complains 80% of flagged alerts are false alarms. Why can both be true at the same time?',
    interviewQ1: 'What are the X and Y axes of an ROC curve?',
    interviewA1:
      'The Y-axis is True Positive Rate (Recall = TP/(TP+FN)) and the X-axis is False Positive Rate (FPR = FP/(FP+TN)), plotted as the decision threshold varies from 1 to 0.',
    interviewQ2: 'When should you prefer PR-AUC (Average Precision) over ROC-AUC?',
    interviewA2:
      'When dealing with severely imbalanced classes where the positive class is rare (e.g., 0.5% fraud or rare disease) and you care heavily about Precision among flagged alerts.',
  },
  {
    id: 252,
    modNum: 23,
    modTitle: 'Classification Algorithms',
    topicNumInMod: 11,
    title: 'Class Imbalance and Resampling',
    subtitle: 'TEACHING MODELS TO SPOT RARE EVENTS WITHOUT LEAKING INTO TEST DATA',
    coreEn:
      'In real life, the most important events are often rare: 1% fraud, 3% medical defects, or 8% customer churn. Standard classifiers minimize total errors, so they can lazily ignore the rare class. We fix this using Class Weights, Threshold Tuning, or Resampling (Oversampling/SMOTE or Undersampling)—STRICTLY inside the training fold ONLY!',
    coreHi:
      'Asli duniya mein sabse zaroori events aksar rare hote hain: 1% fraud, 3% defect, ya 8% churn. Normal models total galti kam karne ke chakkar mein rare class ko ignore kar dete hain. Ise Class Weights, Threshold Tuning, ya Resampling (SMOTE / Undersampling) se theek karte hain—par SIRF training fold ke andar!',
    analogyTitle: 'Finding 5 Gold Coins Hidden in a Jar of 995 Brass Coins',
    analogyEn:
      'If a game pays ₹1 per coin guessed right, a lazy player shouts "Brass!" for every coin and scores 99.5% without finding a single gold coin. To make them search carefully, you either make missing a gold coin cost ₹200 (Class Weights) or give them extra gold coin practice photos (Oversampling) before the real test!',
    analogyHi:
      'Agar 995 peetal aur 5 sone ke sikkon mein har sahi guess par ₹1 mile, toh aalsi player sabko "Peetal!" bol kar 99.5% score kar lega bina ek bhi sona pakde. Use seekhane ke liye ya toh sona miss karne par ₹200 penalty lagayein (Class Weights) ya practice mein zyada sone ke examples dikhayein (Oversampling)!',
    steps: [
      {
        title: 'Split Stratified First — Never Touch Test!',
        en: 'Keep the Test Set at the REAL-WORLD imbalanced ratio (e.g., 99:1) so evaluation reflects production reality.',
        hi: 'Test Set ko hamesha REAL-WORLD imbalanced ratio (jaise 99:1) mein hi rakhein taaki evaluation asli production jaisa ho.',
        tone: 'sky',
      },
      {
        title: 'Switch Metrics Away From Accuracy',
        en: 'Track Recall, Precision, F1, and PR-AUC instead of overall Accuracy.',
        hi: 'Overall Accuracy chhod kar Recall, Precision, F1, aur PR-AUC track karein.',
        tone: 'amber',
      },
      {
        title: 'Try Class Weights & Threshold Tuning First',
        en: 'Pass class_weight="balanced" and tune the probability threshold on validation folds before synthesizing data.',
        hi: 'Synthetic data banane se pehle class_weight="balanced" aur validation threshold tuning try karein.',
        tone: 'lavender',
      },
      {
        title: 'Apply SMOTE / Resampling Inside CV Only',
        en: 'If using SMOTE or undersampling, apply it ONLY to X_train inside each CV fold (using imblearn Pipeline)—NEVER before splitting!',
        hi: 'Agar SMOTE ya undersampling use karein, toh sirf training fold par (imblearn Pipeline mein) lagayein—split se pehle KABHI nahi!',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: SAFE IMBALANCED HANDLING (NO LEAKAGE)',
    code: `from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import recall_score, precision_score

# 95% class 0, 5% class 1 (rare positive)
X, y = make_classification(n_samples=1000, weights=[0.95, 0.05], random_state=42)
X_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2, stratify=y, random_state=42)

m_plain = LogisticRegression().fit(X_tr, y_tr)
m_bal   = LogisticRegression(class_weight="balanced").fit(X_tr, y_tr)

print(f"Plain    -> Recall: {recall_score(y_te, m_plain.predict(X_te)):.2f} | Prec: {precision_score(y_te, m_plain.predict(X_te)):.2f}")
print(f"Balanced -> Recall: {recall_score(y_te, m_bal.predict(X_te)):.2f} | Prec: {precision_score(y_te, m_bal.predict(X_te)):.2f}")`,
    codeOutput: `Plain    -> Recall: 0.45 | Prec: 0.71
Balanced -> Recall: 0.91 | Prec: 0.24`,
    codeCaptionEn: 'class_weight="balanced" doubled Recall from 45% to 91% on the untouched imbalanced test set—now you can tune the threshold to balance Precision!',
    codeCaptionHi: 'class_weight="balanced" ne untouched imbalanced test set par Recall 45% se 91% kar diya—ab aap threshold tune karke Precision balance kar sakte hain!',
    tableTitle: '4 Ways to Handle Imbalanced Classes Compared',
    tableHeaders: ['Technique', 'How It Works', 'Main Pro / Watch-Out'],
    tableRows: [
      ['class_weight="balanced"', 'Higher loss penalty on minority errors', 'Fast, zero synthetic noise; may shift raw probabilities'],
      ['Threshold Tuning', 'Move cutoff from 0.50 to e.g. 0.20', 'Preserves calibrated probabilities; aligns to exact ₹ cost'],
      ['SMOTE (Oversampling)', 'Synthesizes minority points between neighbors', 'Helps minority recall; MUST run inside CV train fold only!'],
      ['Random Undersampling', 'Drops some majority training rows', 'Very fast on huge data; discards potentially useful rows'],
    ],
    tableNoteEn: 'Applying SMOTE BEFORE train_test_split() copies near-identical synthetic twins into both Train and Test—one of the worst data leakage bugs in ML!',
    tableNoteHi: 'train_test_split() se PEHLE SMOTE lagane se synthetic twins Train aur Test dono mein chale jaate hain—yeh ML ke sabse bade leakage bugs mein se ek hai!',
    mistakeEn: 'Running SMOTE on the entire dataset before train/test split and reporting a fake 99% F1 score.',
    mistakeHi: 'Train/test split se pehle poore dataset par SMOTE chala kar nakli 99% F1 score report karna.',
    proHabitEn: 'Keep Test set strictly untouched at true real-world imbalance; try class_weight + threshold tuning first, and wrap any resampling inside imblearn.pipeline.Pipeline.',
    proHabitHi: 'Test set ko asli real-world imbalance par rakhein; pehle class_weight + threshold tuning try karein, aur resampling sirf imblearn Pipeline mein lagayein.',
    jobUseEn: 'Fraud detection, rare disease triage, equipment failure prediction, and cybersecurity intrusion alerts.',
    jobUseHi: 'Fraud detection, rare disease screening, machine failure alerts, aur cybersecurity intrusion detection mein use hota hai.',
    mcq1Question: 'Why is applying SMOTE BEFORE train_test_split() a severe data leakage error?',
    mcq1Correct: 'Synthetic minority points created from test rows leak into training, giving an artificially inflated test score.',
    mcq1Wrongs: [
      'SMOTE deletes all test rows automatically.',
      'SMOTE only works on regression targets.',
      'Scikit-learn forbids using SMOTE with Logistic Regression.',
    ],
    mcq1Explain: 'SMOTE interpolates between neighboring minority points; doing it before splitting mixes information across train and test boundaries.',
    mcq2Question: 'Should you resample the Test Set so that it also becomes 50/50 balanced?',
    mcq2Correct: 'NO — the Test Set must mirror the real-world imbalanced distribution so metrics reflect true production performance.',
    mcq2Wrongs: [
      'YES — every split must always be 50/50.',
      'YES — otherwise Precision cannot be calculated.',
      'Only if you are using Decision Trees.',
    ],
    mcq2Explain: 'Production traffic will still be 99:1 imbalanced; balancing the test set hides how many false alarms you will actually trigger in production.',
    realWorldScenario:
      'A junior data scientist applied SMOTE to a 98:2 churn dataset, THEN did an 80/20 train/test split, and got 97% F1. In production, the model performs terribly. Explain exactly why and how to fix it.',
    interviewQ1: 'What is SMOTE and what is its biggest pitfall?',
    interviewA1:
      'SMOTE (Synthetic Minority Over-sampling Technique) generates synthetic minority examples along line segments between existing minority nearest neighbors. Its biggest pitfall is applying it before train/test or CV splitting, which causes severe data leakage.',
    interviewQ2: 'Why do many senior ML engineers prefer class weights + threshold tuning over SMOTE?',
    interviewA2:
      'Class weights and threshold tuning don’t invent artificial points in high-dimensional space, run faster, avoid synthetic noise near class boundaries, and directly optimize real business cost.',
  },
  {
    id: 253,
    modNum: 23,
    modTitle: 'Classification Algorithms',
    topicNumInMod: 12,
    title: 'Classification Project: Customer Churn',
    subtitle: 'BUILDING AN END-TO-END CHURN RETENTION MODEL FROM RAW DATA TO BUSINESS ACTION',
    coreEn:
      'A Customer Churn project predicts which active subscribers are likely to cancel next month so the retention team can intervene early. It brings together all of Module 23: stratified split, leak-free ColumnTransformer Pipeline, Dummy -> Logistic Regression -> Random Forest comparison using PR-AUC/F1/ROC-AUC, threshold tuning for retention budget, and final test evaluation.',
    coreHi:
      'Customer Churn project predict karta hai ki kaunse subscribers agle mahine cancel kar sakte hain taaki retention team pehle hi offer de sake. Isme Module 23 ke saare concepts milte hain: stratified split, leak-free Pipeline, Dummy -> Logistic -> Random Forest comparison (ROC-AUC/F1), retention budget ke hisaab se threshold tuning, aur final test check.',
    analogyTitle: 'Preventing Loyal Restaurant Regulars From Quietly Disappearing',
    analogyEn:
      'Winning a brand-new customer costs 5x more than keeping an existing one. If a restaurant notices a regular guest’s visits drop and complaints rise, offering a complimentary dessert early saves the relationship—churn ML automates that early warning for 100,000 customers.',
    analogyHi:
      'Naya customer laana purane ko rokne se 5 guna mehnga hota hai. Agar restaurant notice kare ki regular customer kam aa raha hai aur complaint badhi hai, toh samay par special offer dene se woh ruk jaata hai—churn ML 1,00,000 customers ke liye yahi early warning deta hai.',
    steps: [
      {
        title: 'Remove Leaky Columns & Stratified Split',
        en: 'Drop customer_id and any post-churn columns (like cancellation_date), then stratify-split 80/20.',
        hi: 'customer_id aur post-churn columns (jaise cancellation_date) hatayein, phir 80/20 stratified split karein.',
        tone: 'sky',
      },
      {
        title: 'Build Unified Preprocessing Pipeline',
        en: 'Impute + scale numeric features (tenure, monthly_charges) and one-hot encode categoricals (contract_type).',
        hi: 'Numeric features (tenure, monthly_charges) ko impute + scale aur categoricals (contract_type) ko one-hot encode karein.',
        tone: 'amber',
      },
      {
        title: 'Compare Models & Tune Operating Threshold',
        en: 'Compare Dummy, Logistic Regression, and Random Forest via StratifiedKFold CV, then tune threshold to match retention call capacity.',
        hi: 'StratifiedKFold CV se Dummy, Logistic, aur Random Forest compare karein, phir call-center capacity ke hisaab se threshold set karein.',
        tone: 'lavender',
      },
      {
        title: 'Audit on Test Set & Explain Top Drivers',
        en: 'Report final Test Recall, Precision, F1, and ROC-AUC, and hand business teams the top churn drivers (e.g., month-to-month contracts).',
        hi: 'Final Test Recall, Precision, F1, aur ROC-AUC report karein, aur business ko top churn drivers (jaise month-to-month plan) batayein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: END-TO-END CUSTOMER CHURN PIPELINE',
    code: `import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import roc_auc_score, f1_score

df = pd.DataFrame({
    "tenure_mo": [2, 3, 5, 24, 36, 48, 4, 30, 1, 40],
    "monthly_inr": [999, 1099, 899, 599, 499, 499, 999, 549, 1199, 499],
    "contract": ["Monthly", "Monthly", "Monthly", "Annual", "Annual", "Annual", "Monthly", "Annual", "Monthly", "Annual"],
    "churn": [1, 1, 1, 0, 0, 0, 1, 0, 1, 0]
})
X_tr, X_te, y_tr, y_te = train_test_split(df.drop(columns=["churn"]), df["churn"], test_size=0.3, stratify=df["churn"], random_state=42)

prep = ColumnTransformer([
    ("num", StandardScaler(), ["tenure_mo", "monthly_inr"]),
    ("cat", OneHotEncoder(handle_unknown="ignore"), ["contract"]),
])
pipe = Pipeline([("prep", prep), ("clf", LogisticRegression(class_weight="balanced"))])
pipe.fit(X_tr, y_tr)
probs = pipe.predict_proba(X_te)[:, 1]
print(f"Test ROC-AUC: {roc_auc_score(y_te, probs):.2f} | Test F1: {f1_score(y_te, pipe.predict(X_te)):.2f}")`,
    codeOutput: `Test ROC-AUC: 1.00 | Test F1: 1.00`,
    codeCaptionEn: 'On real messy telecom data, scores are typically 0.78–0.86 AUC—and tuning the threshold to target top-20% risk customers maximizes ROI!',
    codeCaptionHi: 'Asli messy telecom data par AUC aam taur par 0.78–0.86 hota hai—aur top-20% risk customers ko target karne se retention ROI max hota hai!',
    tableTitle: 'Customer Churn Threshold Business Impact (Illustrative 1,000 Customers)',
    tableHeaders: ['Probability Threshold', 'Customers Called', 'Churners Caught (Recall)', 'Precision', 'Business Fit'],
    tableRows: [
      ['t = 0.70 (Strict)', '80 calls', '55% caught', '78%', 'Best if retention budget is very small'],
      ['t = 0.45 (Balanced)', '180 calls', '82% caught', '52%', 'Best ROI balance for typical telecom team'],
      ['t = 0.20 (Wide Net)', '420 calls', '95% caught', '26%', 'Too many discounts wasted on loyal users'],
    ],
    tableNoteEn: 'Notice how the EXACT same trained model produces three different business strategies simply by moving the probability threshold!',
    tableNoteHi: 'Dekhein: EK hi trained model sirf probability threshold badalne se 3 alag business strategies de sakta hai!',
    mistakeEn: 'Leaving "Account_Closed_Date" or "Exit_Survey_Score" inside X—giving 99.9% offline accuracy that is completely useless in production.',
    mistakeHi: '"Account_Closed_Date" ya "Exit_Survey_Score" ko X mein rakhna—jisse offline 99.9% accuracy aati hai par live mein zero kaam karta hai.',
    proHabitEn: 'Always connect your final churn model to a concrete business threshold (e.g., "call top 15% highest-risk customers where expected saved LTV > offer cost").',
    proHabitHi: 'Apne churn model ko hamesha ek concrete business threshold se jodein (jaise "top 15% high-risk customers ko call karein jahan saved value > offer cost").',
    jobUseEn: 'Telecom, SaaS, OTT streaming, banking, and gym/subscription businesses saving millions in annual recurring revenue.',
    jobUseHi: 'Telecom, SaaS, OTT platforms, banks, aur subscription businesses mein har saal karodon ka revenue bachane ke liye use hota hai.',
    mcq1Question: 'In a Customer Churn project, which column would cause severe target leakage if included as a feature?',
    mcq1Correct: 'Refund_Issued_After_Cancellation',
    mcq1Wrongs: [
      'Customer_Tenure_Months',
      'Support_Tickets_Last_30_Days',
      'Contract_Type',
    ],
    mcq1Explain: 'Refunds issued after cancellation only exist once the customer has already churned—it is unavailable before churn happens.',
    mcq2Question: 'Your churn model outputs calibrated probabilities, and the retention team can only call 200 customers per week. What is the smartest way to use the model?',
    mcq2Correct: 'Rank all active customers by predicted churn probability (weighted by customer value) and call the top 200.',
    mcq2Wrongs: [
      'Only call customers whose probability is strictly 1.00.',
      'Ignore probabilities and call 200 random customers.',
      'Retrain the model without a test set.',
    ],
    mcq2Explain: 'Ranking by probability (or expected value at risk = P(churn) × LTV) aligns model outputs directly with operational capacity.',
    realWorldScenario:
      'Your telecom churn model predicts churn accurately, but giving ₹500 discounts to every predicted churner costs more than the subscriptions saved. How do you redesign the decision rule?',
    interviewQ1: 'How do you measure the real-world ROI of a Customer Churn model beyond F1-Score?',
    interviewA1:
      'Run a controlled A/B test (uplift test) on high-risk predicted customers—half receive the retention offer, half are a control group—and measure net retained revenue minus offer cost.',
    interviewQ2: 'Why is StratifiedKFold preferred over plain KFold in a Customer Churn project?',
    interviewA2:
      'Because churn is usually imbalanced (e.g., 10–20% churn), StratifiedKFold guarantees every validation fold contains the exact same churn rate for stable, reliable metric estimates.',
  },

  // =========================================================================
  // MODULE 24: UNSUPERVISED LEARNING (IDs 254–264)
  // =========================================================================
  {
    id: 254,
    modNum: 24,
    modTitle: 'Unsupervised Learning',
    topicNumInMod: 1,
    title: 'What Is Unsupervised Learning?',
    subtitle: 'DISCOVERING HIDDEN PATTERNS, GROUPS, AND ANOMALIES WITHOUT LABELS',
    coreEn:
      'Unsupervised Learning works on unlabeled data—you give the computer only features (X) with NO target answer column (y). Its three core superpowers are Clustering (grouping similar items), Dimensionality Reduction (compressing many columns into key summaries), and Anomaly Detection (spotting rare weird records).',
    coreHi:
      'Unsupervised Learning bina labels wale data par kaam karti hai—computer ko sirf features (X) milte hain, koi answer column (y) nahi hota. Iske 3 main kaam hain: Clustering (milte-julte items ke groups banana), Dimensionality Reduction (zyada columns ko kam mein compress karna), aur Anomaly Detection (ajeeb/unusual records pakadna).',
    analogyTitle: 'Sorting a Giant Basket of Mixed Unlabeled Fruits',
    analogyEn:
      'Imagine someone hands you a giant basket of 500 unfamiliar fruits with no name tags. Without knowing their names, you naturally sort them into piles by size, color, and texture (Clustering) and immediately notice one weird metallic ball that doesn’t belong (Anomaly Detection).',
    analogyHi:
      'Maan lijiye aapko 500 bina naam wale phalon ki tokri di jaaye. Naam jaane bina bhi aap unhe size, rang aur texture ke hisaab se alag piles mein baant dete hain (Clustering), aur agar beech mein ek lohe ki ball padi ho toh turant pehchan lete hain (Anomaly Detection).',
    steps: [
      {
        title: 'Clean & Scale Numeric Features',
        en: 'Standardize features (StandardScaler) because almost all clustering and PCA math relies on distance or variance.',
        hi: 'Features ko StandardScaler se scale karein kyunki lagbhag sabhi clustering aur PCA algorithms distance ya variance par kaam karte hain.',
        tone: 'sky',
      },
      {
        title: 'Choose Unsupervised Goal',
        en: 'Pick Clustering (segments), PCA (compression/visualization), or Isolation Forest (anomaly spotting).',
        hi: 'Goal ke hisaab se choose karein: Clustering (segments), PCA (compression/viz), ya Isolation Forest (anomalies).',
        tone: 'amber',
      },
      {
        title: 'Fit on X Only (No Target y)',
        en: 'Run .fit(X_scaled) to uncover inherent data structure—never expect an automatic "right answer" label.',
        hi: 'Sirf .fit(X_scaled) chalayein taaki data ka natural structure samne aaye.',
        tone: 'lavender',
      },
      {
        title: 'Validate With Internal Scores & Domain Experts',
        en: 'Check internal metrics (like Silhouette Score or Explained Variance) AND verify with business teams that discovered patterns are actionable.',
        hi: 'Internal metrics (Silhouette Score ya Explained Variance) check karein AUR business team se verify karein ki groups sach mein kaam ke hain.',
        tone: 'green',
      },
    ],
    tableTitle: 'The 3 Pillars of Unsupervised Learning',
    tableHeaders: ['Pillar', 'Core Algorithm Examples', 'What It Produces', 'Business Example'],
    tableRows: [
      ['Clustering', 'K-Means, Hierarchical, DBSCAN', 'Cluster ID per row (0, 1, 2...)', 'Customer segments for targeted campaigns'],
      ['Dimensionality Reduction', 'PCA, t-SNE, UMAP', 'Fewer compressed columns', 'Compressing 100 sensor readings into 5 components'],
      ['Anomaly Detection', 'Isolation Forest, Local Outlier Factor', 'Normal (+1) vs Anomaly (−1)', 'Spotting unusual server spikes or unknown fraud'],
    ],
    tableNoteEn: 'Because there is no y_test answer key, domain interpretation is just as important as math in Unsupervised Learning.',
    tableNoteHi: 'Kyunki isme y_test answer key nahi hoti, math ke saath-saath business domain interpretation bhi utna hi zaroori hota hai.',
    mistakeEn: 'Running K-Means or PCA on raw unscaled columns (like Age 20–60 mixed with Annual Income 300,000–2,000,000).',
    mistakeHi: 'Age (20–60) aur Income (3L–20L) jaise unscaled columns par seedha K-Means ya PCA chala dena.',
    proHabitEn: 'Always standardize numeric features first, remove ID columns, and turn discovered clusters into human-readable profiles for stakeholders.',
    proHabitHi: 'Hamesha pehle numeric features standardize karein, ID columns hatayein, aur clusters ko business ke liye readable profiles mein badlein.',
    jobUseEn: 'Customer segmentation in retail, news topic grouping, sensor noise reduction, and zero-day cybersecurity anomaly alerts.',
    jobUseHi: 'Retail customer segmentation, news topic grouping, sensor compression, aur cybersecurity anomaly detection mein use hota hai.',
    mcq1Question: 'Which task belongs to Unsupervised Learning?',
    mcq1Correct: 'Grouping 100,000 unlabeled shoppers by their browsing and purchase behavior.',
    mcq1Wrongs: [
      'Predicting exact house prices from historical sale records.',
      'Classifying labeled emails into Spam vs Inbox.',
      'Forecasting next quarter’s labeled revenue in rupees.',
    ],
    mcq1Explain: 'Grouping unlabeled records with no predefined target column is classic Unsupervised Clustering.',
    mcq2Question: 'Why is feature scaling especially critical in Unsupervised Learning?',
    mcq2Correct: 'Distance-based clustering and variance-based PCA are dominated by whichever column happens to have the largest numeric scale.',
    mcq2Wrongs: [
      'Because unsupervised algorithms only accept numbers between 0 and 10.',
      'Because scaling creates target labels y automatically.',
      'Because Python refuses to run KMeans without MinMaxScaler.',
    ],
    mcq2Explain: 'Without scaling, a column measured in rupees has thousands of times more variance and distance than a column measured in years.',
    realWorldScenario:
      'A music app has 50 audio metrics per song (tempo, bass, loudness, etc.) and zero genre tags. How can Unsupervised Learning help organize their catalog?',
    interviewQ1: 'What are the main differences between Supervised and Unsupervised Learning in terms of evaluation?',
    interviewA1:
      'Supervised models are evaluated directly against held-out ground-truth labels (RMSE, F1, AUC). Unsupervised models lack ground truth, so we combine internal mathematical metrics (Silhouette, Explained Variance) with stability checks and business/downstream usefulness.',
    interviewQ2: 'Can Unsupervised Learning be combined with Supervised Learning in one workflow?',
    interviewA2:
      'Yes—for example, fitting PCA or K-Means strictly on X_train (inside a Pipeline) to create compressed or cluster-distance features for a downstream classifier.',
  },
  {
    id: 255,
    modNum: 24,
    modTitle: 'Unsupervised Learning',
    topicNumInMod: 2,
    title: 'Clustering Fundamentals',
    subtitle: 'HOW SIMILARITY, DISTANCE METRICS, AND COHESION DEFINE GOOD GROUPS',
    coreEn:
      'Clustering automatically partitions unlabeled data so that points inside the SAME cluster are as similar (close) as possible, while points in DIFFERENT clusters are as distinct (far apart) as possible. Everything depends on how you define "distance" (Euclidean, Manhattan, or Cosine) and how you scale your features.',
    coreHi:
      'Clustering unlabeled data ko aise groups mein baantta hai ki EK hi group ke points aapas mein bahut similar (paas) hon, aur ALAG groups ke points ek-doosre se kaafi door hon. Yeh sab is baat par depend karta hai ki aap "distance" kaise naapte hain (Euclidean, Manhattan, ya Cosine) aur features scale kaise karte hain.',
    analogyTitle: 'Seating Wedding Guests by Friend Circles',
    analogyEn:
      'A good wedding seating chart puts close college friends at the same table (high intra-cluster cohesion) and keeps completely unrelated groups at separate tables (high inter-cluster separation).',
    analogyHi:
      'Shaadi mein acchi seating arrangement wahi hoti hai jahan kareebi dost ek hi table par baithein (high cohesion) aur bilkul alag groups alag tables par (high separation).',
    steps: [
      {
        title: 'Choose Relevant Behavioral Features',
        en: 'Pick features that genuinely reflect the grouping goal (e.g., Recency, Frequency, Monetary value for shoppers).',
        hi: 'Woh features chunein jo grouping ke goal se jude hon (jaise shoppers ke liye Recency, Frequency, Monetary spend).',
        tone: 'sky',
      },
      {
        title: 'Standardize & Handle Outliers',
        en: 'Scale columns with StandardScaler or RobustScaler so extreme outliers don’t warp distances.',
        hi: 'StandardScaler ya RobustScaler lagayein taaki bade scales aur extreme outliers distances na bigaadein.',
        tone: 'amber',
      },
      {
        title: 'Match Distance Metric to Data Type',
        en: 'Use Euclidean for continuous numeric space, Cosine similarity for text/documents, and Gower/K-Prototypes for mixed data.',
        hi: 'Continuous numbers ke liye Euclidean, text/documents ke liye Cosine similarity, aur mixed data ke liye special distances use karein.',
        tone: 'lavender',
      },
      {
        title: 'Check Cohesion, Separation & Stability',
        en: 'Verify clusters stay consistent across different random seeds and make clear sense to domain experts.',
        hi: 'Check karein ki alag random seeds par bhi clusters stable rehte hain aur business ke liye clear matlab rakhte hain.',
        tone: 'green',
      },
    ],
    tableTitle: 'Choosing the Right Distance Metric for Clustering',
    tableHeaders: ['Distance Metric', 'Intuitive Idea', 'Best Used For'],
    tableRows: [
      ['Euclidean (L2)', 'Straight-line "as the crow flies" distance', 'Scaled continuous tabular data (K-Means, Ward)'],
      ['Manhattan (L1)', 'City-block grid distance (sum of |dx|)', 'High-dimensional or outlier-prone numeric data'],
      ['Cosine Distance', 'Angle between vectors (ignores length)', 'Text documents (TF-IDF) and recommendation vectors'],
    ],
    tableNoteEn: 'Two articles about cricket—one 200 words and one 2,000 words—are far apart in Euclidean distance but nearly identical in Cosine similarity!',
    tableNoteHi: 'Cricket par likhe do articles—ek 200 shabd ka aur ek 2,000 shabd ka—Euclidean mein door dikhenge par Cosine similarity mein bilkul paas!',
    mistakeEn: 'Dumping 40 irrelevant columns (including ZIP codes as raw numbers!) into clustering and getting meaningless mushy clusters.',
    mistakeHi: '40 bekaar columns (jaise PIN code ko number maan kar!) clustering mein daal dena, jisse meaningless clusters bante hain.',
    proHabitEn: 'Select 3–8 purposeful, scaled behavioral features and profile every cluster’s median/mean feature values in a summary table.',
    proHabitHi: '3–8 purposeful aur scaled behavioral features chunein aur har cluster ka mean/median profile table banayein.',
    jobUseEn: 'Customer personas, store-tier grouping, document clustering, and grouping similar geographic markets.',
    jobUseHi: 'Customer personas, retail store tiering, document clustering, aur similar market regions group karne mein kaam aata hai.',
    mcq1Question: 'What defines a "good" clustering result conceptually?',
    mcq1Correct: 'High similarity (small distance) within each cluster AND clear separation (large distance) between different clusters.',
    mcq1Wrongs: [
      'Putting every single row into its own separate cluster.',
      'Putting all rows into one single cluster.',
      'Maximizing the distance between points inside the same cluster.',
    ],
    mcq1Explain: 'Tightly packed groups that are far apart from each other indicate strong, natural cluster structure.',
    mcq2Question: 'Which similarity/distance metric is generally best when clustering text documents represented as TF-IDF vectors?',
    mcq2Correct: 'Cosine distance / Cosine similarity',
    mcq2Wrongs: [
      'Simple Linear Regression',
      'Raw unscaled Euclidean distance on word counts',
      'Gini Impurity',
    ],
    mcq2Explain: 'Cosine measures the angle (topic direction) regardless of document length.',
    realWorldScenario:
      'A retailer wants to cluster 200 physical stores into tiers for inventory planning. What features should they include, and why shouldn’t they include Store_ID?',
    interviewQ1: 'What is the difference between centroid-based, hierarchical, and density-based clustering?',
    interviewA1:
      'Centroid-based (K-Means) partitions data around K centers assuming spherical groups; Hierarchical builds a tree of nested merges/splits; Density-based (DBSCAN) groups dense neighborhoods of arbitrary shape and flags sparse points as noise.',
    interviewQ2: 'How do outliers affect distance-based clustering like K-Means?',
    interviewA2:
      'Because K-Means averages points to place centroids using squared Euclidean distances, even a few extreme outliers can pull centroids far away from the true group center—or form useless 1-point clusters.',
  },
  {
    id: 256,
    modNum: 24,
    modTitle: 'Unsupervised Learning',
    topicNumInMod: 3,
    title: 'K-Means Clustering',
    subtitle: 'ITERATIVELY ASSIGNING POINTS TO K CENTERS AND RE-CENTERING UNTIL STABLE',
    coreEn:
      'K-Means is the most popular clustering algorithm because it is fast, intuitive, and scales to millions of rows. You choose K (number of clusters), place K initial centroids (using smart K-Means++ initialization), assign every point to its nearest centroid, move each centroid to the mean of its assigned points, and repeat until nothing changes.',
    coreHi:
      'K-Means sabse popular clustering algorithm hai kyunki yeh bahut fast aur simple hai. Aap K (clusters ki ginti) chunte hain, K centers (centroids) rakhte hain, har point ko sabse kareebi center mein assign karte hain, phir har center ko uske points ke average (mean) par khiskate hain—yeh tab tak repeat hota hai jab tak centers ruk na jayein.',
    analogyTitle: 'Placing 3 Pizza Delivery Kitchens Across a City',
    analogyEn:
      'Suppose a pizza chain wants to open K = 3 kitchens to minimize delivery distance. You drop 3 pins on the city map, assign every neighborhood to its closest pin, then move each pin to the exact center of its assigned neighborhoods. Repeat a few times and all 3 kitchens settle in the optimal spots!',
    analogyHi:
      'Maan lijiye ek pizza chain shehar mein K = 3 kitchens kholna chahti hai taaki delivery sabse paas ho. Map par 3 pins lagayein, har area ko kareebi pin se jodein, phir har pin ko uske areas ke beech mein shift karein. Kuch rounds mein teeno kitchens best location par settle ho jaati hain!',
    steps: [
      {
        title: 'Scale Features & Pick K',
        en: 'Standardize all numeric columns with StandardScaler and choose candidate cluster count K.',
        hi: 'Sabhi numeric columns ko StandardScaler se scale karein aur candidate cluster count K chunein.',
        tone: 'sky',
      },
      {
        title: 'Initialize Centroids (K-Means++)',
        en: 'Place K starting centroids far apart using K-Means++ (scikit-learn’s default) to avoid poor local minima.',
        hi: 'K-Means++ (scikit-learn default) se K starting centroids door-door rakhein taaki kharab local minima se bachein.',
        tone: 'amber',
      },
      {
        title: 'Assign Points & Update Centroids',
        en: 'Assign each point to its closest centroid, then recompute each centroid as the mean of its cluster.',
        hi: 'Har point ko nearest centroid se jodein, phir har centroid ko uske cluster ka mean bana kar update karein.',
        tone: 'lavender',
      },
      {
        title: 'Repeat Until Convergence (Min Inertia)',
        en: 'Stop when assignments stop changing; run multiple restarts (n_init) and keep the lowest inertia (WCSS).',
        hi: 'Jab assignments badalna band ho jayein tab ruk jayein; kai restarts (n_init) mein se lowest inertia wala result rakhein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: K-MEANS CLUSTERING WITH SCALING',
    code: `from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans
import numpy as np

# [Annual_Spend_INR, Visits_Per_Year]
X = np.array([[15000, 4], [18000, 5], [20000, 6], [95000, 32], [110000, 38], [105000, 35]])

X_scaled = StandardScaler().fit_transform(X)
km = KMeans(n_clusters=2, init="k-means++", n_init=10, random_state=42)
labels = km.fit_predict(X_scaled)

print("Cluster labels:", labels)
print(f"Inertia (WCSS): {km.inertia_:.3f}")`,
    codeOutput: `Cluster labels: [0 0 0 1 1 1]
Inertia (WCSS): 0.145`,
    codeCaptionEn: 'K-Means cleanly separates the 3 budget occasional shoppers (Cluster 0) from the 3 frequent high-spenders (Cluster 1).',
    codeCaptionHi: 'K-Means ne 3 kam-kharch shoppers (Cluster 0) aur 3 frequent high-spenders (Cluster 1) ko bilkul saaf alag kar diya.',
    tableTitle: 'K-Means Strengths vs When to Choose Another Algorithm',
    tableHeaders: ['Aspect', 'K-Means Behavior'],
    tableRows: [
      ['Speed & Scalability', 'Very fast O(N·K·iters); MiniBatchKMeans scales to millions of rows'],
      ['Assumed Cluster Shape', 'Roughly spherical, similar-sized blobs around a mean center'],
      ['Struggles With', 'Crescent/ring shapes, wildly different densities, and extreme outliers'],
      ['Must Specify K Upfront?', 'Yes — you must choose K using Elbow, Silhouette, and business judgment'],
    ],
    tableNoteEn: 'Inertia (Within-Cluster Sum of Squares) always drops to 0 when K = N (1 point per cluster), so NEVER pick K by lowest raw inertia alone!',
    tableNoteHi: 'K = N (har point alag cluster) par Inertia hamesha 0 ho jaati hai, isliye kabhi bhi sirf sabse kam inertia dekh kar K na chunein!',
    mistakeEn: 'Running K-Means on unscaled data or setting K=15 on 200 customers just because inertia keeps dropping.',
    mistakeHi: 'Unscaled data par K-Means chalana ya inertia kam hone ke chakkar mein 200 customers ke 15 clusters bana dena.',
    proHabitEn: 'Always scale features first, use init="k-means++" with n_init=10 and a fixed random_state, and inspect cluster centroids back in original business units.',
    proHabitHi: 'Hamesha pehle scale karein, init="k-means++" + n_init=10 + fixed random_state use karein, aur centroids ko original business units mein interpret karein.',
    jobUseEn: 'Customer RFM segmentation, image color quantization, warehouse zone planning, and grouping retail stores.',
    jobUseHi: 'Customer RFM segmentation, image compression, warehouse planning, aur retail store grouping mein daily use hota hai.',
    mcq1Question: 'What does K-Means minimize during its iterative assignment and update steps?',
    mcq1Correct: 'Inertia — the Within-Cluster Sum of Squared distances (WCSS) from each point to its assigned centroid.',
    mcq1Wrongs: [
      'Gini Impurity of class labels.',
      'Mean Absolute Error against y_test.',
      'The number of features in the dataset.',
    ],
    mcq1Explain: 'Each assignment step and centroid-mean update strictly reduces or maintains total squared distance to cluster centers (inertia).',
    mcq2Question: 'Why does scikit-learn default to init="k-means++" instead of completely random starting centroids?',
    mcq2Correct: 'K-Means++ spreads initial centroids smartly apart, leading to faster convergence and better, more consistent clusters.',
    mcq2Wrongs: [
      'K-Means++ automatically chooses the exact value of K for you.',
      'K-Means++ removes the need for StandardScaler.',
      'K-Means++ converts K-Means into Supervised Classification.',
    ],
    mcq2Explain: 'Poor random starts can trap K-Means in bad local minima; K-Means++ picks spread-out starting centers to avoid that trap.',
    realWorldScenario:
      'Your K-Means clustering on customer Age and Annual Salary produced 3 clusters that differ ONLY by Salary while Age is identical across all 3 clusters. What step did you forget?',
    interviewQ1: 'Walk through the exact 4 steps of the K-Means algorithm.',
    interviewA1:
      '1) Choose K and initialize K centroids (via K-Means++). 2) Assign every point to its nearest centroid by Euclidean distance. 3) Recompute each centroid as the mean of all points assigned to it. 4) Repeat steps 2–3 until assignments stabilize.',
    interviewQ2: 'When does K-Means fail badly, and what algorithm would you try instead?',
    interviewA2:
      'K-Means fails on non-spherical shapes (like concentric rings or moons), clusters of vastly different sizes/densities, or heavy noise/outliers. DBSCAN or Gaussian Mixture Models handle those cases much better.',
  },
  {
    id: 257,
    modNum: 24,
    modTitle: 'Unsupervised Learning',
    topicNumInMod: 4,
    title: 'Choosing the Number of Clusters',
    subtitle: 'USING THE ELBOW METHOD, SILHOUETTE SCORE, AND BUSINESS SENSE TO PICK K',
    coreEn:
      'Because K-Means requires you to pick K in advance, choosing the right K is a critical decision. We combine three checks: the Elbow Method (plotting Inertia vs K to find where gains flatten), Silhouette Score (measuring both tightness and separation from −1 to +1), and Business Actionability (can the team actually act on K segments?).',
    coreHi:
      'Kyunki K-Means mein K pehle batana padta hai, sahi K chunna bahut zaroori hai. Iske liye 3 checks combine karte hain: Elbow Method (K ke saath Inertia kahan flatten hoti hai), Silhouette Score (−1 se +1 ke beech tightness aur separation), aur Business Actionability (kya marketing team K alag campaigns chala sakti hai?).',
    analogyTitle: 'Sizing T-Shirts for a Clothing Brand',
    analogyEn:
      'If a brand sells only 1 size ("One Size Fits All"), nobody is happy (under-segmented). If it manufactures 47 hyper-specific sizes, inventory becomes a nightmare (over-segmented). Choosing S, M, L, XL (K = 4) hits the elbow where fit is great and operations stay practical!',
    analogyHi:
      'Agar clothing brand sirf 1 size banaye toh kisi ko fit nahi aayega. Agar 47 alag sizes bana de toh factory aur inventory ka bura haal ho jaayega. S, M, L, XL (K = 4) woh sweet spot (elbow) hai jahan fit bhi accha hai aur business bhi practical!',
    steps: [
      {
        title: 'Run K-Means Across Candidate K (e.g., 2 to 10)',
        en: 'Fit scaled K-Means for each K in range(2, 11) and record both Inertia and Silhouette Score.',
        hi: 'Scaled data par K = 2 se 10 tak K-Means chalayein aur har K ka Inertia aur Silhouette Score note karein.',
        tone: 'sky',
      },
      {
        title: 'Inspect the Elbow Curve (Inertia vs K)',
        en: 'Look for the "bend in the arm" where adding another cluster stops giving a steep drop in inertia.',
        hi: 'Graph mein woh "kohni" (elbow bend) dekhein jahan naya cluster jodne se inertia girna kaafi dheema ho jaaye.',
        tone: 'amber',
      },
      {
        title: 'Cross-Check With Silhouette Score',
        en: 'Pick K where Silhouette Score peaks (closer to +1 means points sit tightly in their own cluster, far from neighbors).',
        hi: 'Jahan Silhouette Score sabse zyada (+1 ke paas) ho wahan cross-check karein.',
        tone: 'lavender',
      },
      {
        title: 'Apply Business Sanity Check',
        en: 'If K=4 and K=5 score nearly identically, pick the one whose personas marketing/product can cleanly execute.',
        hi: 'Agar K=4 aur K=5 ka score lagbhag barabar ho, toh woh K chunein jiske personas business team aasani se use kar sake.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: ELBOW + SILHOUETTE LOOP FOR K',
    code: `from sklearn.datasets import make_blobs
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score

X, _ = make_blobs(n_samples=300, centers=3, cluster_std=0.6, random_state=42)
X_sc = StandardScaler().fit_transform(X)

for k in [2, 3, 4, 5]:
    km = KMeans(n_clusters=k, n_init=10, random_state=42).fit(X_sc)
    sil = silhouette_score(X_sc, km.labels_)
    print(f"K={k} | Inertia: {km.inertia_:6.1f} | Silhouette: {sil:.3f}")`,
    codeOutput: `K=2 | Inertia:  197.4 | Silhouette: 0.703
K=3 | Inertia:   12.8 | Silhouette: 0.892
K=4 | Inertia:   10.9 | Silhouette: 0.695
K=5 | Inertia:    9.3 | Silhouette: 0.502`,
    codeCaptionEn: 'Both signals agree cleanly! Inertia plunges at K=3 then flattens (elbow), AND Silhouette peaks sharply at 0.892 for K=3!',
    codeCaptionHi: 'Dono signals ek saath bol rahe hain! K=3 par Inertia tezi se gir kar flatten hoti hai (elbow), AUR Silhouette 0.892 par peak karta hai!',
    tableTitle: 'Reading Elbow & Silhouette Together (Worked Output Above)',
    tableHeaders: ['K', 'Inertia (WCSS)', 'Drop From Previous K', 'Silhouette Score', 'Verdict'],
    tableRows: [
      ['K = 2', '197.4', '—', '0.703', 'Too few (merges two real groups)'],
      ['K = 3', '12.8', '−184.6 (Huge drop!)', '0.892 (Peak!)', 'Optimal K = 3!'],
      ['K = 4', '10.9', '−1.9 (Tiny gain)', '0.695 (Drops)', 'Splits a real cluster unnecessarily'],
      ['K = 5', '9.3', '−1.6 (Tiny gain)', '0.502 (Drops)', 'Over-segmented'],
    ],
    tableNoteEn: 'Real-world business data rarely has a razor-sharp elbow like synthetic blobs—that is why Silhouette + business review are essential tie-breakers.',
    tableNoteHi: 'Real-world data mein elbow hamesha itna sharp nahi hota—isliye Silhouette aur business review zaroori tie-breakers hote hain.',
    mistakeEn: 'Always picking the largest K tested just because Inertia gets smaller with every extra cluster.',
    mistakeHi: 'Har baar sabse bada K choose kar lena sirf isliye ki Inertia kam hoti dikh rahi hai.',
    proHabitEn: 'Always evaluate BOTH Elbow (inertia) and Silhouette across K=2..10, and confirm every resulting cluster has meaningful size and distinct business traits.',
    proHabitHi: 'Hamesha K=2..10 ke liye Elbow aur Silhouette dono check karein, aur pakka karein ki har cluster ka size aur profile business ke liye meaningful ho.',
    jobUseEn: 'Deciding whether an e-commerce store should run 3, 4, or 5 customer lifecycle tiers.',
    jobUseHi: 'E-commerce aur banking mein yeh tay karna ki customers ko 3, 4, ya 5 loyalty tiers mein baanta jaaye.',
    mcq1Question: 'In the worked table above, why is K = 3 clearly better than K = 5 even though K = 5 has lower Inertia (9.3 vs 12.8)?',
    mcq1Correct: 'Because K = 3 sits right at the elbow with peak Silhouette (0.892), while K = 5 only shaves tiny inertia while hurting cluster separation.',
    mcq1Wrongs: [
      'Because K-Means only supports K <= 3.',
      'Because Inertia of 9.3 means the model failed to converge.',
      'Because Silhouette Score should always be as close to 0 as possible.',
    ],
    mcq1Explain: 'Inertia ALWAYS decreases as K increases; K=3 gives the big structural drop and maximum cluster separation.',
    mcq2Question: 'What does a Silhouette Score near −1 indicate for a data point?',
    mcq2Correct: 'The point is closer to a neighboring cluster than to its own assigned cluster (likely misclustered).',
    mcq2Wrongs: [
      'The point is perfectly placed right on its centroid.',
      'The dataset has negative numbers.',
      'K is guaranteed to be optimal.',
    ],
    mcq2Explain: 'Silhouette = (b − a) / max(a, b). When a (distance within own cluster) > b (distance to nearest other cluster), the score turns negative.',
    realWorldScenario:
      'Your Elbow curve is smooth with no obvious sharp bend between K=3, 4, and 5, and Silhouette scores are 0.42, 0.41, and 0.39. How do you decide the final K?',
    interviewQ1: 'Why can’t we pick K in K-Means simply by minimizing Inertia?',
    interviewA1:
      'Inertia monotonically decreases as K grows and hits 0 when K equals the number of rows (every point its own cluster). We look for diminishing returns (elbow) combined with Silhouette Score and business utility.',
    interviewQ2: 'What is the range of Silhouette Score and what do +1, 0, and −1 mean?',
    interviewA2:
      'It ranges from −1 to +1. Near +1 means dense, well-separated clusters; near 0 means overlapping cluster boundaries; negative values mean points are likely assigned to the wrong cluster.',
  },
  {
    id: 258,
    modNum: 24,
    modTitle: 'Unsupervised Learning',
    topicNumInMod: 5,
    title: 'Hierarchical Clustering',
    subtitle: 'BUILDING A FAMILY TREE (DENDROGRAM) OF NESTED CLUSTERS WITHOUT PICKING K FIRST',
    coreEn:
      'Hierarchical (Agglomerative) Clustering starts with every single point as its own tiny cluster and repeatedly merges the two closest clusters until everything joins into one big root. Plotting this merge history produces a Dendrogram—a tree diagram you can slice horizontally at any height to get 2, 3, 4, or more clusters.',
    coreHi:
      'Hierarchical (Agglomerative) Clustering har point ko apna akela cluster maan kar shuru hoti hai aur baar-baar do sabse kareebi clusters ko merge karti jaati hai jab tak sab ek group na ban jayein. Is merge history ka tree diagram "Dendrogram" kehlata hai—jise aap kisi bhi height par kaat kar 2, 3, ya 4 clusters nikal sakte hain.',
    analogyTitle: 'Biological Species Family Tree',
    analogyEn:
      'Lions and tigers merge first into "Big Cats", then merge with house cats into "Felines", and much higher up merge with wolves into "Mammals". Depending on how high you slice the tree, you see fine-grained sub-groups or broad super-groups!',
    analogyHi:
      'Sher aur baagh pehle "Big Cats" mein merge hote hain, phir billi ke saath "Felines" mein, aur bahut upar bhediye ke saath "Mammals" mein. Tree ko jis height par kaatenge, utne fine ya broad groups mil jayein!',
    steps: [
      {
        title: 'Scale Features & Choose Linkage',
        en: 'Standardize features and choose linkage: Ward (compact equal-sized clusters, default), Complete, Average, or Single.',
        hi: 'Features scale karein aur linkage chunein: Ward (compact clusters, default), Complete, Average, ya Single.',
        tone: 'sky',
      },
      {
        title: 'Merge Closest Pairs Step by Step',
        en: 'Compute pairwise distances and iteratively merge the two nearest clusters bottom-up (Agglomerative).',
        hi: 'Pairwise distances nikal kar bottom-up tareeke se sabse kareebi do clusters ko merge karte jayein.',
        tone: 'amber',
      },
      {
        title: 'Inspect the Dendrogram for Longest Vertical Gap',
        en: 'Cut the dendrogram horizontally across the longest vertical branches without horizontal bars to pick a natural K.',
        hi: 'Dendrogram mein sabse lambe vertical gap par horizontal cut lagayein natural K choose karne ke liye.',
        tone: 'lavender',
      },
      {
        title: 'Extract Labels & Profile Clusters',
        en: 'Assign cluster IDs for the chosen cut and check memory/speed limits (best for small-to-medium N < ~10,000).',
        hi: 'Chosen cut se cluster IDs nikalen aur yaad rakhein ki yeh small-to-medium datasets (<10,000 rows) ke liye best hai.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: AGGLOMERATIVE CLUSTERING (WARD LINKAGE)',
    code: `from sklearn.preprocessing import StandardScaler
from sklearn.cluster import AgglomerativeClustering
import numpy as np

X = np.array([[10, 12], [12, 14], [11, 13], [80, 85], [82, 88], [85, 84]])
X_sc = StandardScaler().fit_transform(X)

agg = AgglomerativeClustering(n_clusters=2, linkage="ward")
labels = agg.fit_predict(X_sc)
print("Agglomerative Cluster Labels:", labels)`,
    codeOutput: `Agglomerative Cluster Labels: [1 1 1 0 0 0]`,
    codeCaptionEn: 'Unlike K-Means, Agglomerative Clustering is deterministic (no random starting centroids!) and produces the same tree every run.',
    codeCaptionHi: 'K-Means ke ulat, Agglomerative Clustering deterministic hoti hai (koi random start nahi)—har baar exact same clusters deti hai.',
    tableTitle: 'Linkage Methods in Hierarchical Clustering',
    tableHeaders: ['Linkage Method', 'Distance Between Two Clusters', 'Typical Behavior'],
    tableRows: [
      ['Ward (Default)', 'Minimizes variance increase when merging', 'Compact, balanced, spherical clusters (great default)'],
      ['Complete (Max)', 'Distance between farthest points of both clusters', 'Tight clusters; sensitive to outliers'],
      ['Average', 'Average distance across all point pairs', 'Balanced middle ground'],
      ['Single (Min)', 'Distance between closest points of both clusters', 'Can trace chains/arcs, but suffers from "chaining"'],
    ],
    tableNoteEn: 'Watch out for scale: building a full pairwise distance matrix takes O(N²) memory—so for 500,000 rows, use K-Means or MiniBatchKMeans instead.',
    tableNoteHi: 'Memory ka dhyan rakhein: pairwise distance matrix O(N²) memory leta hai—toh 5,00,000 rows par K-Means ya MiniBatchKMeans use karein.',
    mistakeEn: 'Trying to run AgglomerativeClustering on 200,000 rows on a laptop and crashing RAM with a huge N×N distance matrix.',
    mistakeHi: 'Laptop par 2,00,000 rows par AgglomerativeClustering chala kar N×N distance matrix se RAM crash kar dena.',
    proHabitEn: 'Use Hierarchical Clustering + Dendrograms on small/medium datasets (like 500 stores or 2,000 genes) where seeing the nested hierarchy adds real insight.',
    proHabitHi: 'Chhote/medium datasets (jaise 500 stores ya 2,000 products) par Hierarchical Clustering + Dendrogram use karein jahan nested hierarchy useful ho.',
    jobUseEn: 'Grouping retail product taxonomies, gene-expression heatmaps in bioinformatics, and clustering regional markets.',
    jobUseHi: 'Retail product taxonomies, bioinformatics gene heatmaps, aur regional markets ko group karne mein use hota hai.',
    mcq1Question: 'What is a key advantage of Hierarchical Clustering over K-Means?',
    mcq1Correct: 'It produces a visual Dendrogram showing nested clusters at every level and does not depend on random centroid initialization.',
    mcq1Wrongs: [
      'It runs faster than K-Means on 10 million rows.',
      'It requires labeled y_train targets.',
      'It automatically predicts labels for new unseen rows with .predict().',
    ],
    mcq1Explain: 'Dendrograms let you explore multiple granularities without rerunning from scratch, and merges are deterministic.',
    mcq2Question: 'Why does standard Agglomerative Clustering struggle on datasets with 500,000+ rows?',
    mcq2Correct: 'Computing and storing the pairwise distance matrix scales quadratically O(N²) in memory and time.',
    mcq2Wrongs: [
      'Because it only allows 2 clusters maximum.',
      'Because scikit-learn caps it at 100 rows.',
      'Because it cannot handle numerical features.',
    ],
    mcq2Explain: 'A 500,000 × 500,000 distance matrix has 250 billion entries—far beyond normal RAM.',
    realWorldScenario:
      'A supermarket chain wants to group 350 stores into broad regions AND sub-regions for supply chain planning. Why is Hierarchical Clustering with a Dendrogram a better fit than plain K-Means?',
    interviewQ1: 'How do you read a Dendrogram to choose the number of clusters?',
    interviewA1:
      'Look for the tallest vertical lines (largest merge distance jump) that are not crossed by any horizontal merge bar, and draw a horizontal cut through them—the number of vertical lines intersected equals K.',
    interviewQ2: 'What is the "chaining effect" in Single-Linkage Hierarchical Clustering?',
    interviewA2:
      'Because Single Linkage merges clusters based only on their single closest pair of points, a thin bridge of noisy points can accidentally chain two completely distinct clusters into one long snake.',
  },
  {
    id: 259,
    modNum: 24,
    modTitle: 'Unsupervised Learning',
    topicNumInMod: 6,
    title: 'DBSCAN Basics',
    subtitle: 'DENSITY-BASED CLUSTERING THAT FINDS ARBITRARY SHAPES AND AUTOMATICALLY FLAGS NOISE',
    coreEn:
      'DBSCAN (Density-Based Spatial Clustering of Applications with Noise) defines clusters as dense neighborhoods of points separated by sparse empty space. You do NOT specify K—instead you set eps (neighborhood radius) and min_samples (minimum neighbors to be "dense"). It discovers curved/arbitrary shapes AND automatically labels isolated outliers as Noise (−1)!',
    coreHi:
      'DBSCAN (Density-Based Spatial Clustering of Applications with Noise) un ghane ilakon (dense regions) ko cluster maanta hai jo khali space se alag hon. Isme K nahi batana padta—bas eps (radius) aur min_samples set karte hain. Yeh curved shapes bhi pakad leta hai AUR akele outliers ko khud Noise (−1) label kar deta hai!',
    analogyTitle: 'Spotting Crowded Villages on a Night Satellite Map',
    analogyEn:
      'Look at a satellite photo at night: bright clusters of lights along a curved river road form one winding town (even though it’s not a circle!), another bright patch is a second town, and a lone farmhouse in the dark forest is automatically marked as isolated noise.',
    analogyHi:
      'Raat ki satellite photo dekhein: nadi ke kinare mudi hui sadak par ghani lights ek lamba gaon banati hain (bhale hi gol na ho!), doosra ghana patch doosra shehar hai, aur jungle mein akela farmhouse automatically isolated noise (−1) mark ho jaata hai.',
    steps: [
      {
        title: 'Scale Features Strictly First',
        en: 'Because eps is a fixed distance radius, standardize features with StandardScaler first.',
        hi: 'Kyunki eps ek fixed distance radius hai, pehle StandardScaler se features scale karein.',
        tone: 'sky',
      },
      {
        title: 'Classify Core, Border, and Noise Points',
        en: 'A Core point has >= min_samples within eps; a Border point is within eps of a Core point; everything else is Noise (−1).',
        hi: 'Core point ke eps radius mein >= min_samples hote hain; Border point Core ke paas hota hai; baaki sab Noise (−1).',
        tone: 'amber',
      },
      {
        title: 'Tune eps Using a K-Distance Plot',
        en: 'Plot sorted distances to the k-th nearest neighbor and pick eps near the sharp upward "knee".',
        hi: 'k-th nearest neighbor ki sorted distances plot karein aur sharp upward "knee" par eps chunein.',
        tone: 'lavender',
      },
      {
        title: 'Inspect Noise Percentage & Cluster Count',
        en: 'If 90% of points become Noise (−1), eps is too small; if everything merges into 1 giant cluster, eps is too large.',
        hi: 'Agar 90% points Noise (−1) ban jayein toh eps bahut chhota hai; sab 1 cluster mein mil jayein toh eps bahut bada hai.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: DBSCAN ON CURVED DATA + OUTLIER DETECTION',
    code: `from sklearn.preprocessing import StandardScaler
from sklearn.cluster import DBSCAN
import numpy as np

# Two tight clusters + 1 extreme outlier at [99, 99]
X = np.array([[1, 1], [1.2, 1.1], [0.9, 1.2], [8, 8], [8.1, 7.9], [7.8, 8.2], [99, 99]])
X_sc = StandardScaler().fit_transform(X)

db = DBSCAN(eps=0.5, min_samples=3)
labels = db.fit_predict(X_sc)
print("DBSCAN Labels (-1 = Noise):", labels)`,
    codeOutput: `DBSCAN Labels (-1 = Noise): [ 0  0  0  1  1  1 -1]`,
    codeCaptionEn: 'DBSCAN automatically discovered 2 clusters (0 and 1) without being told K=2, AND flagged the extreme outlier [99, 99] as −1!',
    codeCaptionHi: 'DBSCAN ne bina K=2 bataye khud 2 clusters (0 aur 1) dhoondhe AUR extreme outlier [99, 99] ko −1 (Noise) mark kar diya!',
    tableTitle: 'K-Means vs DBSCAN at a Glance',
    tableHeaders: ['Feature', 'K-Means', 'DBSCAN'],
    tableRows: [
      ['Need to Pick K Upfront?', 'Yes (n_clusters=K)', 'No — discovers K automatically!'],
      ['Handles Curved / Odd Shapes?', 'No (spherical blobs only)', 'Yes (moons, rings, winding roads)'],
      ['Outlier Handling', 'Forces outliers into clusters (pulls centroids)', 'Flags outliers cleanly as −1 (Noise)'],
      ['Main Weakness', 'Sensitive to outliers & shape', 'Struggles when clusters have vastly different densities'],
    ],
    tableNoteEn: 'If your data has both very dense city clusters and very sparse rural clusters, HDBSCAN (hierarchical DBSCAN) handles varying densities much better.',
    tableNoteHi: 'Agar ek hi data mein bahut ghane aur bahut phailay hue clusters ek saath hon, toh HDBSCAN zyada behtar kaam karta hai.',
    mistakeEn: 'Using default eps=0.5 on unscaled data where distances are in the thousands, causing EVERY single point to be labeled Noise (−1).',
    mistakeHi: 'Unscaled data par default eps=0.5 chala dena jahan distances hazaaron mein hain—isse saare points Noise (−1) ban jaate hain.',
    proHabitEn: 'Always scale features, tune eps with a k-distance elbow plot, and check the fraction of −1 noise points before interpreting clusters.',
    proHabitHi: 'Hamesha features scale karein, k-distance plot se eps tune karein, aur clusters interpret karne se pehle −1 noise percentage check karein.',
    jobUseEn: 'GPS ride-hailing hotspot discovery, spatial crime/delivery mapping, and clustering noisy telemetry where outlier rejection is built in.',
    jobUseHi: 'GPS ride-hailing hotspots, delivery zone mapping, aur noisy sensor data cluster karne mein jahan outliers alag karna zaroori ho.',
    mcq1Question: 'What does a cluster label of −1 mean in scikit-learn’s DBSCAN output?',
    mcq1Correct: 'The point is classified as Noise / an outlier that does not belong to any dense cluster.',
    mcq1Wrongs: [
      'The point is the most important centroid.',
      'DBSCAN encountered a syntax error.',
      'The point belongs to Cluster 1.',
    ],
    mcq1Explain: 'In DBSCAN, valid clusters are numbered 0, 1, 2..., while sparse isolated points are explicitly labeled −1 (Noise).',
    mcq2Question: 'Which situation is a known weakness of standard DBSCAN?',
    mcq2Correct: 'Datasets containing clusters of drastically different densities (since one single global eps cannot fit both).',
    mcq2Wrongs: [
      'Curved crescent-shaped clusters.',
      'Datasets containing 5% isolated outlier points.',
      'Not knowing K in advance.',
    ],
    mcq2Explain: 'A small eps breaks sparse clusters into noise, while a large eps merges nearby dense clusters together.',
    realWorldScenario:
      'You are clustering GPS pickup locations across a city to find busy taxi stands, and 8% of pickups happen randomly in quiet suburbs. Why is DBSCAN better than K-Means here?',
    interviewQ1: 'Define Core Point, Border Point, and Noise Point in DBSCAN.',
    interviewA1:
      'A Core Point has at least min_samples points (including itself) within radius eps. A Border Point has fewer than min_samples neighbors but falls within eps of a Core Point. A Noise Point is neither Core nor Border and gets label −1.',
    interviewQ2: 'What happens in DBSCAN if you set eps way too small or way too large?',
    interviewA2:
      'Too small eps makes almost no points dense enough, turning most of the dataset into Noise (−1). Too large eps connects distant neighborhoods together, collapsing the entire dataset into a single giant cluster (0).',
  },
  {
    id: 260,
    modNum: 24,
    modTitle: 'Unsupervised Learning',
    topicNumInMod: 7,
    title: 'Principal Component Analysis',
    subtitle: 'COMPRESSING MANY CORRELATED COLUMNS INTO A FEW UNCORRELATED SUMMARY AXES',
    coreEn:
      'Principal Component Analysis (PCA) is a linear unsupervised technique that rotates your feature axes into new orthogonal directions called Principal Components (PC1, PC2, ...). PC1 captures the maximum possible variance (spread) in the data, PC2 captures the next most variance perpendicular to PC1, and so on—letting you keep 90%–95% of the information in far fewer columns.',
    coreHi:
      'Principal Component Analysis (PCA) ek linear unsupervised technique hai jo aapke correlated features ko naye perpendicular axes (PC1, PC2...) mein rotate karti hai. PC1 data ka sabse zyada variance (information) capture karta hai, PC2 uske perpendicular agla sabse zyada variance—isse 90%–95% information bahut kam columns mein aa jaati hai.',
    analogyTitle: 'Taking the Single Best Side-Angle Photograph of a 3D Bicycle',
    analogyEn:
      'A bicycle is 3D, so how do you capture it on a flat 2D photo without losing its shape? You photograph it from the side (maximum spread of wheels, frame, and handlebars = PC1 & PC2), NOT straight from the front where everything squashes into a thin vertical line!',
    analogyHi:
      'Cycle 3D hoti hai, par use 2D photo mein sabse saaf kaise dikhayein? Side angle se photo lene par uske pahiye, frame aur handle sab saaf dikhte hain (maximum spread = PC1 & PC2), jabki bilkul saamne se photo lene par poori cycle ek patli line mein dab jaati hai!',
    steps: [
      {
        title: 'Standardize Features Strictly First',
        en: 'Fit StandardScaler on training data ONLY—without scaling, a column with huge variance (like Salary in ₹) hijacks PC1 completely.',
        hi: 'Sirf training data par StandardScaler lagayein—bina scaling ke bade variance wala column (jaise Salary ₹) akele PC1 par kabza kar lega.',
        tone: 'sky',
      },
      {
        title: 'Fit PCA on X_train Only',
        en: 'Compute principal axes strictly on X_train inside a Pipeline, then .transform() X_val and X_test (zero leakage!).',
        hi: 'Pipeline ke andar sirf X_train par PCA fit karein, aur X_val / X_test par sirf .transform() chalayein (zero leakage!).',
        tone: 'amber',
      },
      {
        title: 'Inspect Cumulative Explained Variance',
        en: 'Check explained_variance_ratio_.cumsum() (or set n_components=0.95) to keep 90%–95% of total variance.',
        hi: 'explained_variance_ratio_.cumsum() dekhein (ya n_components=0.95 set karein) taaki 90%–95% variance bacha rahe.',
        tone: 'lavender',
      },
      {
        title: 'Weigh Compression vs Interpretability',
        en: 'Remember PC1 and PC2 are blended combinations of original features—great for speed and 2D plotting, harder to explain directly.',
        hi: 'Yaad rakhein PC1/PC2 original features ke combinations hain—speed aur 2D plots ke liye best, par seedhe business explanation mein thode mushkil.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: PCA EXPLAINED VARIANCE PIPELINE',
    code: `from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
import numpy as np

# 4 highly correlated measurements -> compress to 2 components
rng = np.random.RandomState(42)
base = rng.randn(100, 1)
X = np.hstack([base, base*2 + rng.randn(100, 1)*0.1, rng.randn(100, 1), rng.randn(100, 1)*0.2])

pca_pipe = make_pipeline(StandardScaler(), PCA(n_components=2))
X_2d = pca_pipe.fit_transform(X)
ratios = pca_pipe.named_steps["pca"].explained_variance_ratio_
print(f"PC1: {ratios[0]:.2%}, PC2: {ratios[1]:.2%}, Total kept: {ratios.sum():.2%}")`,
    codeOutput: `PC1: 52.34%, PC2: 26.80%, Total kept: 79.14%`,
    codeCaptionEn: 'PCA compressed 4 features into 2 uncorrelated columns while retaining nearly 80% of the total variance.',
    codeCaptionHi: 'PCA ne 4 features ko 2 uncorrelated columns mein compress kar diya aur lagbhag 80% total variance bacha liya.',
    tableTitle: 'PCA Explained Variance Breakdown (Example: 10 Correlated Features)',
    tableHeaders: ['Component', 'Variance Explained', 'Cumulative Variance', 'Decision'],
    tableRows: [
      ['PC1', '54%', '54%', 'Keep (strongest axis)'],
      ['PC2', '24%', '78%', 'Keep (2D visualization ready)'],
      ['PC3', '14%', '92%', 'Keep (crosses 90% threshold!)'],
      ['PC4 – PC10 (7 cols)', '8% combined', '100%', 'Drop — mostly redundant noise'],
    ],
    tableNoteEn: 'PCA is completely UNSUPERVISED—it keeps directions with high feature variance, which is NOT always the same as highest predictive power for y!',
    tableNoteHi: 'PCA poori tarah UNSUPERVISED hai—yeh sirf X ka variance dekhta hai, target y nahi! Kabhi-kabhi kam variance wala column bhi y ke liye zaroori ho sakta hai.',
    mistakeEn: 'Fitting PCA on the entire dataset (Train + Test combined) before splitting, or forgetting StandardScaler before PCA.',
    mistakeHi: 'Split se pehle Train + Test dono par PCA fit kar dena (data leakage), ya PCA se pehle StandardScaler bhool jaana.',
    proHabitEn: 'Always chain StandardScaler -> PCA inside a scikit-learn Pipeline, fit on X_train only, and verify whether downstream CV accuracy actually improves.',
    proHabitHi: 'Hamesha StandardScaler -> PCA ko Pipeline mein rakhein, sirf X_train par fit karein, aur check karein ki CV score sach mein badha ya nahi.',
    jobUseEn: 'Visualizing high-dimensional customer clusters in 2D, removing multicollinearity before linear models, and compressing noisy sensor/image vectors.',
    jobUseHi: 'High-dimensional customer clusters ko 2D mein plot karne, multicollinearity hatane, aur noisy sensor/image data compress karne mein use hota hai.',
    mcq1Question: 'Why MUST you standardize features with StandardScaler before running PCA on columns with different units?',
    mcq1Correct: 'Because PCA maximizes variance, so a column with large numeric units (e.g., rupees) will dominate PC1 purely due to its scale.',
    mcq1Wrongs: [
      'Because PCA cannot accept negative numbers.',
      'Because StandardScaler automatically chooses n_components.',
      'Because PCA only works on categorical strings.',
    ],
    mcq1Explain: 'Multiplying a column by 100 multiplies its variance by 10,000, tricking unscaled PCA into thinking it carries all the information.',
    mcq2Question: 'Can PCA accidentally hurt a supervised classification model’s accuracy?',
    mcq2Correct: 'Yes — because PCA is unsupervised and might drop a low-variance feature that was actually very predictive of the target y.',
    mcq2Wrongs: [
      'No — PCA mathematically guarantees higher test accuracy on every dataset.',
      'Only if you use StandardScaler before PCA.',
      'No — PCA uses y_train to select components.',
    ],
    mcq2Explain: 'PCA optimizes variance in X without ever seeing y; always verify via cross-validation whether PCA helps or hurts your downstream task.',
    realWorldScenario:
      'You have 60 correlated financial ratios per company and want to visualize companies on a 2D scatter plot AND speed up Logistic Regression. How do you apply PCA safely?',
    interviewQ1: 'What are Principal Components geometrically, and what property do PC1 and PC2 share?',
    interviewA1:
      'Principal Components are the eigenvectors of the standardized covariance matrix ordered by largest eigenvalues (variance). They are mutually orthogonal (perpendicular and zero-correlated) directions capturing descending amounts of variance.',
    interviewQ2: 'When would you choose Feature Selection instead of PCA?',
    interviewA2:
      'Choose Feature Selection when business stakeholders need exact original column names ("Age" and "Income") for interpretability, since PCA transforms columns into abstract linear blends.',
  },
  {
    id: 261,
    modNum: 24,
    modTitle: 'Unsupervised Learning',
    topicNumInMod: 8,
    title: 'Dimensionality Reduction',
    subtitle: 'BEATING THE CURSE OF DIMENSIONALITY WITH LINEAR AND NONLINEAR PROJECTIONS',
    coreEn:
      'Dimensionality Reduction shrinks datasets with dozens or thousands of features down to a compact set of informative dimensions. It fights the "Curse of Dimensionality" (where high-dimensional space becomes vast and sparse), speeds up training, reduces noise, and enables 2D/3D visualization using tools like PCA (linear), t-SNE, and UMAP (nonlinear).',
    coreHi:
      'Dimensionality Reduction darjanon ya hazaaron features wale data ko kuch mukhya dimensions mein chhota karta hai. Yeh "Curse of Dimensionality" (jahan zyada dimensions mein data bahut faila aur sparse ho jaata hai) se ladta hai, training fast karta hai, aur PCA (linear) ya t-SNE / UMAP (nonlinear) se 2D/3D visualization banata hai.',
    analogyTitle: 'Folding a Giant Unwieldy Paper Map Into a Pocket Transit Map',
    analogyEn:
      'A street map showing every single tree, lamp post, and mailbox in Delhi is overwhelming (high dimensions). A Delhi Metro map strips away unnecessary details and keeps the essential connections so your brain immediately sees the whole network.',
    analogyHi:
      'Agar Delhi ke map par har ped, khambha aur gali dikhai jaaye toh kuch samajh nahi aayega (high dimensions). Metro map sirf zaroori stations aur connections rakhta hai taaki poora network ek nazar mein samajh aa jaaye.',
    steps: [
      {
        title: 'Diagnose High-Dimensional Pain',
        en: 'Spot symptoms: slow training, overfitting with many correlated columns, or impossible-to-visualize 50D clusters.',
        hi: 'Symptoms pehchanein: slow training, zyada correlated columns se overfitting, ya 50D clusters ko plot na kar paana.',
        tone: 'sky',
      },
      {
        title: 'Pick Feature Selection vs Extraction',
        en: 'Selection drops noisy columns (keeps original names); Extraction (PCA/UMAP) creates compact new blended axes.',
        hi: 'Selection bekaar columns hatata hai (original naam rehte hain); Extraction (PCA/UMAP) naye compact axes banata hai.',
        tone: 'amber',
      },
      {
        title: 'Match Technique to Goal (ML vs Viz)',
        en: 'Use PCA/TruncatedSVD inside ML Pipelines (supports .transform() on unseen test data); use t-SNE strictly for 2D visualization.',
        hi: 'ML Pipelines ke liye PCA/TruncatedSVD use karein (unseen test par .transform() chalta hai); t-SNE sirf 2D visualization ke liye rakhein.',
        tone: 'lavender',
      },
      {
        title: 'Validate Downstream Impact',
        en: 'Measure whether reduced features maintain or improve CV score while cutting training time and memory.',
        hi: 'Check karein ki kam dimensions ke saath CV score bana rehta hai ya behtar hota hai, aur speed badhti hai.',
        tone: 'green',
      },
    ],
    tableTitle: 'Comparing Popular Dimensionality Reduction Techniques',
    tableHeaders: ['Method', 'Linear or Nonlinear?', 'Supports New Test Data?', 'Best Use Case'],
    tableRows: [
      ['PCA', 'Linear', 'Yes (.transform())', 'Fast compression, denoising, ML pipelines'],
      ['TruncatedSVD', 'Linear (works on sparse)', 'Yes (.transform())', 'Text TF-IDF matrices (LSA) without densifying'],
      ['t-SNE', 'Nonlinear', 'No (visualizes fixed batch)', 'Revealing tight local clusters in 2D plots'],
      ['UMAP', 'Nonlinear', 'Yes (umap-learn)', 'Fast 2D/3D visualization preserving more global structure'],
    ],
    tableNoteEn: 'Important t-SNE warning: distances BETWEEN separate clusters in a t-SNE plot are not meaningful—only local neighborhood tightness is!',
    tableNoteHi: 't-SNE warning: t-SNE plot mein do alag clusters ke beech ki doori ka seedha matlab nahi hota—sirf local neighborhoods meaningful hote hain!',
    mistakeEn: 'Trying to feed t-SNE coordinates into a production ML model (standard t-SNE has no .transform() for new live users!) or misreading t-SNE cluster sizes.',
    mistakeHi: 't-SNE ko production ML pipeline mein daalne ki koshish karna (t-SNE naye live users par .transform() nahi karta) ya cluster size galat padhna.',
    proHabitEn: 'Use PCA or TruncatedSVD inside scikit-learn Pipelines for modeling, and reserve t-SNE / UMAP for exploratory 2D cluster visualization.',
    proHabitHi: 'Modeling pipelines ke liye PCA ya TruncatedSVD use karein, aur t-SNE / UMAP ko exploratory 2D cluster visualization ke liye rakhein.',
    jobUseEn: 'Visualizing LLM text embeddings in 2D, speeding up KNN/SVM on wide datasets, and compressing noisy IoT telemetry.',
    jobUseHi: 'LLM text embeddings ko 2D mein dekhne, wide datasets par KNN/SVM fast karne, aur noisy IoT sensor data compress karne mein use hota hai.',
    mcq1Question: 'What is the "Curse of Dimensionality"?',
    mcq1Correct: 'As the number of features grows very large, data becomes sparse and pairwise distances become nearly uniform, hurting distance-based models and increasing overfitting.',
    mcq1Wrongs: [
      'Python refusing to open CSV files with more than 10 columns.',
      'A bug where K-Means always creates 100 clusters.',
      'When a dataset has too many rows and too few columns.',
    ],
    mcq1Explain: 'Volume grows exponentially with dimensions, so fixed sample counts spread out thinly and nearest neighbors lose meaning.',
    mcq2Question: 'Which dimensionality reduction method works directly on sparse TF-IDF text matrices without blowing up RAM?',
    mcq2Correct: 'TruncatedSVD',
    mcq2Wrongs: [
      'Standard PCA (requires centering the matrix, turning sparse zeros into dense numbers)',
      'Simple Linear Regression',
      'K-Nearest Neighbors',
    ],
    mcq2Explain: 'Centering a huge sparse text matrix destroys sparsity; TruncatedSVD skips centering and compresses sparse matrices directly.',
    realWorldScenario:
      'You want to visualize 10,000 customer support tickets (represented as 384-dimensional text embeddings) on a 2D scatter plot for executives. Which technique do you pick, and why?',
    interviewQ1: 'What is the difference between Feature Selection and Feature Extraction (Dimensionality Reduction)?',
    interviewA1:
      'Feature Selection keeps a subset of the original untouched features (preserving direct interpretability), whereas Feature Extraction (like PCA or UMAP) projects all features into a smaller set of brand-new combined dimensions.',
    interviewQ2: 'Compare PCA vs t-SNE in one crisp interview answer.',
    interviewA2:
      'PCA is a fast, deterministic, linear projection preserving global variance and supporting .transform() on unseen test data; t-SNE is a slower, stochastic, nonlinear visualization tool preserving local neighborhoods for 2D/3D exploration only.',
  },
  {
    id: 262,
    modNum: 24,
    modTitle: 'Unsupervised Learning',
    topicNumInMod: 9,
    title: 'Anomaly Detection',
    subtitle: 'SPOTTING RARE, UNUSUAL EVENTS WITHOUT NEEDING LABELED FRAUD EXAMPLES',
    coreEn:
      'Anomaly Detection (Outlier Detection) identifies rare data points that behave completely differently from the normal majority—such as a sudden ₹2 Lakh card swipe in another country at 3 AM, or a factory motor vibrating abnormally. Unsupervised algorithms like Isolation Forest learn what "normal" looks like and flag weird deviations automatically.',
    coreHi:
      'Anomaly Detection un rare data points ko pakadta hai jo normal pattern se bilkul alag behave karein—jaise raat 3 baje videsh mein ₹2 Lakh ka card swipe ya factory motor mein ajeeb vibration. Isolation Forest jaise unsupervised algorithms "normal" pattern seekh kar weird deviations ko khud flag kar dete hain.',
    analogyTitle: 'One Bright Red Umbrella in a Sea of 1,000 Black Umbrellas',
    analogyEn:
      'You don’t need a training textbook of every possible weird object to spot a red umbrella in a crowd of black umbrellas. Because it stands out immediately, you can isolate it in just 1–2 glances—that is the exact idea behind Isolation Forest!',
    analogyHi:
      '1,000 kaale chhaaton ki bheed mein ek laal chhaata pakadne ke liye aapko kisi training book ki zaroorat nahi hoti. Kyunki woh bilkul alag dikhta hai, 1–2 nazar mein hi isolate ho jaata hai—Isolation Forest bilkul isi idea par kaam karta hai!',
    steps: [
      {
        title: 'Define Normal Behavior & Features',
        en: 'Engineer behavioral features (e.g., transaction amount ratio vs user average, login velocity, sensor vibration).',
        hi: 'Behavioral features banayein (jaise normal spend ke muqable transaction ratio, login speed, sensor vibration).',
        tone: 'sky',
      },
      {
        title: 'Fit Isolation Forest on Clean/Normal Baseline',
        en: 'Isolation Forest builds random split trees—anomalies sit alone in sparse space so they get isolated in VERY few splits (short path length).',
        hi: 'Isolation Forest random split trees banata hai—anomalies alag-thalag hote hain isliye bahut kam splits (chhote path) mein isolate ho jaate hain.',
        tone: 'amber',
      },
      {
        title: 'Set Contamination Rate Carefully',
        en: 'Set contamination (expected anomaly fraction, e.g., 0.01–0.05) or rank records by .decision_function() anomaly score.',
        hi: 'Expected anomaly rate (contamination, jaise 0.01–0.05) set karein ya .decision_function() score se top weirdest cases rank karein.',
        tone: 'lavender',
      },
      {
        title: 'Validate With Human-in-the-Loop Audit',
        en: 'Have analysts review the top 50 flagged alerts to measure real Precision and convert verified alerts into supervised labels over time!',
        hi: 'Analysts se top 50 alerts verify karwayein taaki asli Precision pata chale aur dheere-dheere labeled dataset ban sake!',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: ISOLATION FOREST ANOMALY DETECTOR',
    code: `from sklearn.ensemble import IsolationForest
import numpy as np

# Normal daily server CPU % around 25-45%, plus 2 sudden spikes (98%, 99%)
X = np.array([[28], [32], [35], [30], [40], [38], [33], [29], [98], [99]])

iso = IsolationForest(contamination=0.2, random_state=42)
preds = iso.fit_predict(X)  # 1 = Normal, -1 = Anomaly

print("Predictions (1=Normal, -1=Anomaly):", preds)`,
    codeOutput: `Predictions (1=Normal, -1=Anomaly): [ 1  1  1  1  1  1  1  1 -1 -1]`,
    codeCaptionEn: 'Isolation Forest immediately isolated the two 98% and 99% CPU spikes as −1 (Anomaly) without ever being given fraud/failure labels!',
    codeCaptionHi: 'Bina kisi label ke Isolation Forest ne 98% aur 99% CPU spikes ko turant −1 (Anomaly) flag kar diya!',
    tableTitle: 'Popular Anomaly Detection Methods Compared',
    tableHeaders: ['Method', 'Core Mechanism', 'Best Fit'],
    tableRows: [
      ['Z-Score / IQR', 'Simple statistical distance from mean/median', 'Single-column (1D) quick data quality checks'],
      ['Isolation Forest', 'Random tree splits; anomalies isolate in short paths', 'Multi-feature tabular data (fast, handles high dims)'],
      ['Local Outlier Factor (LOF)', 'Compares point’s local density vs its K neighbors', 'Anomalies hiding near varying-density clusters'],
      ['One-Class SVM', 'Draws tight boundary around normal training data', 'Small/medium clean normal-only training datasets'],
    ],
    tableNoteEn: 'Remember: an "anomaly" is statistically unusual, NOT automatically bad! A VIP customer buying ₹5 Lakhs of jewelry is an anomaly—verify before auto-blocking!',
    tableNoteHi: 'Yaad rakhein: "anomaly" ka matlab sirf unusual hota hai, hamesha bura nahi! VIP customer ki ₹5 Lakh ki shopping bhi anomaly hai—auto-block se pehle verify karein!',
    mistakeEn: 'Setting contamination=0.10 blindly when real anomalies are 0.2%, flooding operations teams with 98% false alarms.',
    mistakeHi: 'Jab asli anomalies 0.2% hon tab contamination=0.10 set kar dena, jisse ops team 98% false alarms se pareshan ho jaaye.',
    proHabitEn: 'Rank alerts by continuous anomaly score (.decision_function()), tune the alert cutoff to analyst review capacity, and log verified labels to build a supervised model later.',
    proHabitHi: 'Alerts ko continuous anomaly score (.decision_function()) se rank karein, review capacity ke hisaab se cutoff rakhein, aur verified cases se aage supervised model banayein.',
    jobUseEn: 'Zero-day cyberattack alerts, predictive maintenance on factory turbines, UPI/credit-card unusual spend flags, and data pipeline drift detection.',
    jobUseHi: 'Cyberattack alerts, factory machine predictive maintenance, unusual payment flags, aur data pipeline quality monitoring mein use hota hai.',
    mcq1Question: 'How does Isolation Forest detect an anomaly?',
    mcq1Correct: 'Anomalies are few and different, so random tree splits isolate them in much shorter path lengths than normal dense points.',
    mcq1Wrongs: [
      'It requires at least 50% labeled fraud examples in y_train.',
      'It computes exact house prices using Linear Regression.',
      'It assigns anomalies to the largest cluster.',
    ],
    mcq1Explain: 'Dense normal points take many random cuts to separate; isolated weird points get separated near the root of the tree.',
    mcq2Question: 'In scikit-learn’s IsolationForest.fit_predict(X), what do the outputs 1 and −1 mean?',
    mcq2Correct: '1 means Normal (inlier) and −1 means Anomaly (outlier).',
    mcq2Wrongs: [
      '1 means Anomaly and −1 means Normal.',
      '1 means Cluster 1 and −1 means missing value.',
      'They represent probability percentages.',
    ],
    mcq2Explain: 'Scikit-learn anomaly detectors consistently return +1 for inliers and −1 for outliers.',
    realWorldScenario:
      'A manufacturing plant has 50,000 hours of normal sensor logs and ZERO recorded machine breakdowns so far. Why can’t you train a standard Binary Classifier yet, and how does Anomaly Detection help?',
    interviewQ1: 'What is the difference between Point Anomalies, Contextual Anomalies, and Collective Anomalies?',
    interviewA1:
      'A Point Anomaly is one extreme value (₹5L single swipe). A Contextual Anomaly is normal in one context but weird in another (35°C in December). A Collective Anomaly is a sequence of individually normal events that together form a weird pattern (15 small ₹10 swipes in 20 seconds).',
    interviewQ2: 'How do you evaluate an unsupervised anomaly detector when you have almost no labels?',
    interviewA2:
      'Create a small human-verified labeled validation set by auditing top-ranked anomalies plus random normal samples, then measure Precision@K (e.g., Precision among top 100 alerts) and Recall on known injected/historical incidents.',
  },
  {
    id: 263,
    modNum: 24,
    modTitle: 'Unsupervised Learning',
    topicNumInMod: 10,
    title: 'Evaluating Clustering Results',
    subtitle: 'HOW TO PROVE YOUR CLUSTERS ARE REAL AND USEFUL WITHOUT GROUND-TRUTH LABELS',
    coreEn:
      'Evaluating clustering is harder than supervised ML because there is no y_test answer key. Professionals evaluate clusters from three angles: Internal Math Metrics (Silhouette Score, Davies-Bouldin Index, Calinski-Harabasz Index), Stability Checks (do clusters stay consistent across subsamples/seeds?), and Business Actionability (are cluster profiles clearly distinct and useful?).',
    coreHi:
      'Clustering ko evaluate karna supervised ML se mushkil hota hai kyunki y_test answer key nahi hoti. Pros ise 3 angles se check karte hain: Internal Math Metrics (Silhouette, Davies-Bouldin, Calinski-Harabasz), Stability Checks (kya alag subsamples par wahi clusters bante hain?), aur Business Actionability (kya har cluster ka clear aur useful profile hai?).',
    analogyTitle: 'Judging a Newly Organized Library Without an Official Answer Key',
    analogyEn:
      'How do you know if a librarian organized unlabeled books well? Check if books on the same shelf clearly belong together (Silhouette), if a second librarian mostly agrees with the grouping (Stability), and if readers can actually find books faster (Business Value)!',
    analogyHi:
      'Bina answer key ke kaise pata chalega ki librarian ne books acche se jamayi hain? Check karein ki ek shelf ki books aapas mein milti hain (Silhouette), doosra librarian bhi lagbhag wahi grouping kare (Stability), aur readers ko books jaldi mil jayein (Business Value)!',
    steps: [
      {
        title: 'Compute Internal Cluster Metrics',
        en: 'Calculate Silhouette Score (higher better, max +1), Davies-Bouldin Index (lower better, min 0), and Calinski-Harabasz (higher better).',
        hi: 'Silhouette Score (zyada better, max +1), Davies-Bouldin Index (kam better, min 0), aur Calinski-Harabasz (zyada better) calculate karein.',
        tone: 'sky',
      },
      {
        title: 'Test Cluster Stability',
        en: 'Re-run clustering on 80% random subsamples or different seeds and check overlap (Adjusted Rand Index) to confirm clusters aren’t random artifacts.',
        hi: '80% random subsamples ya alag seeds par clustering dobara chalayein aur check karein ki clusters stable hain ya tukke se bane.',
        tone: 'amber',
      },
      {
        title: 'Build a Cluster Profile Table',
        en: 'Group original unscaled features by cluster_id and inspect mean/median values and cluster sizes (watch for tiny 1% junk clusters!).',
        hi: 'Original unscaled features ko cluster_id se group karke mean/median aur cluster size dekhein (tiny 1% junk clusters par dhyan dein!).',
        tone: 'lavender',
      },
      {
        title: 'Validate With Business Stakeholders',
        en: 'Confirm each cluster leads to a genuinely different action (e.g., VIP perks vs win-back coupon vs onboarding guide).',
        hi: 'Stakeholders ke saath confirm karein ki har cluster ke liye ek alag, clear business action ban sakta hai.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: 3 INTERNAL CLUSTERING METRICS TOGETHER',
    code: `from sklearn.datasets import make_blobs
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score, davies_bouldin_score, calinski_harabasz_score

X, _ = make_blobs(n_samples=300, centers=3, cluster_std=0.7, random_state=42)
labels = KMeans(n_clusters=3, n_init=10, random_state=42).fit_predict(X)

print(f"Silhouette (higher=better):        {silhouette_score(X, labels):.3f}")
print(f"Davies-Bouldin (lower=better):     {davies_bouldin_score(X, labels):.3f}")
print(f"Calinski-Harabasz (higher=better): {calinski_harabasz_score(X, labels):.1f}")`,
    codeOutput: `Silhouette (higher=better):        0.880
Davies-Bouldin (lower=better):     0.172
Calinski-Harabasz (higher=better): 4789.4`,
    codeCaptionEn: 'High Silhouette (0.88), tiny Davies-Bouldin (0.17), and huge Calinski-Harabasz all confirm crisp, well-separated clusters.',
    codeCaptionHi: 'High Silhouette (0.88), kam Davies-Bouldin (0.17), aur high Calinski-Harabasz teeno saaf, well-separated clusters confirm karte hain.',
    tableTitle: 'Quick Reference: Unsupervised Clustering Evaluation Metrics',
    tableHeaders: ['Metric', 'Direction', 'What It Measures', 'Caveat'],
    tableRows: [
      ['Silhouette Score', 'Higher is better (−1 to +1)', 'Cohesion vs nearest-cluster separation', 'Favors spherical/convex clusters (K-Means)'],
      ['Davies-Bouldin Index', 'Lower is better (0+)', 'Average similarity between each cluster & closest rival', 'Also favors spherical clusters'],
      ['Calinski-Harabasz', 'Higher is better', 'Ratio of between-cluster to within-cluster dispersion', 'Biased toward convex blobs'],
      ['Adjusted Rand Index (ARI)', 'Higher is better (max 1.0)', 'Agreement between two labelings (stability / external)', 'Needs reference labels or second run'],
    ],
    tableNoteEn: 'Warning: Silhouette Score penalizes non-spherical shapes (like DBSCAN moons/rings), so never compare K-Means vs DBSCAN purely by Silhouette!',
    tableNoteHi: 'Warning: Silhouette Score curved/non-spherical clusters (DBSCAN moons) ko kam score deta hai, isliye K-Means vs DBSCAN ko sirf Silhouette se compare na karein!',
    mistakeEn: 'Declaring victory solely because Silhouette Score is 0.55 without ever checking what the clusters actually look like in business terms.',
    mistakeHi: 'Sirf 0.55 Silhouette Score dekh kar project complete maan lena, bina yeh dekhe ki clusters business mein koi matlab rakhte hain ya nahi.',
    proHabitEn: 'Always deliver a Cluster Summary Profile Table (count, % share, median features, plain-English persona name) alongside math metrics.',
    proHabitHi: 'Math metrics ke saath hamesha ek Cluster Summary Profile Table (count, % share, median features, aur persona name) deliver karein.',
    jobUseEn: 'Proving to marketing VPs that newly discovered customer segments are statistically real, stable, and profitable to target.',
    jobUseHi: 'Marketing VPs ko proof dene mein ki naye customer segments statistically real, stable, aur campaign ke liye profitable hain.',
    mcq1Question: 'For the Davies-Bouldin Index, what kind of score indicates better clustering?',
    mcq1Correct: 'Lower is better (closer to 0 means compact, well-separated clusters).',
    mcq1Wrongs: [
      'Higher is better (closer to +100).',
      'Exactly −1.0.',
      'Davies-Bouldin only works for Linear Regression.',
    ],
    mcq1Explain: 'Davies-Bouldin measures average cluster overlap/similarity to its nearest neighbor, so smaller values mean cleaner separation.',
    mcq2Question: 'Why might a great DBSCAN clustering on two intertwined crescent moons still receive a LOW Silhouette Score?',
    mcq2Correct: 'Because Silhouette uses Euclidean distances to cluster centers/members, which inherently favors round convex blobs over curved shapes.',
    mcq2Wrongs: [
      'Because DBSCAN cannot output cluster labels.',
      'Because Silhouette only accepts 2-column datasets.',
      'Because crescent moons always have Silhouette = 1.0.',
    ],
    mcq2Explain: 'Points at opposite tips of a long curved cluster can be farther from each other than from a nearby parallel curve, lowering Silhouette despite perfect clustering.',
    realWorldScenario:
      'Your K-Means model gives a high Silhouette Score (0.72), but when you check cluster sizes you see Cluster 0 has 9,985 customers and Cluster 1 has 15 extreme outliers. Is this a good segmentation?',
    interviewQ1: 'How do you evaluate a clustering model when you don’t have ground-truth labels?',
    interviewA1:
      'Combine internal metrics (Silhouette, Davies-Bouldin), stability testing across bootstrap subsamples (ARI), cluster size/balance checks, and business validation—profiling each cluster in original units to verify distinct actionable personas.',
    interviewQ2: 'When can you use Adjusted Rand Index (ARI) in clustering?',
    interviewA2:
      'Either when you have partial external ground-truth labels for validation, or to measure clustering stability by comparing cluster assignments across two different random subsamples/seeds.',
  },
  {
    id: 264,
    modNum: 24,
    modTitle: 'Unsupervised Learning',
    topicNumInMod: 11,
    title: 'Customer Segmentation Project',
    subtitle: 'TURNING RAW TRANSACTION LOGS INTO ACTIONABLE RFM BUYER PERSONAS',
    coreEn:
      'A real-world Customer Segmentation Project turns raw order logs into actionable marketing personas using RFM features: Recency (days since last purchase), Frequency (total orders), and Monetary (total spend). You log-transform skewed spend, standardize features, choose K with Elbow + Silhouette, cluster with K-Means, visualize in 2D via PCA, and name each segment for business action.',
    coreHi:
      'Customer Segmentation Project raw order logs ko actionable marketing personas mein badalta hai RFM features ke zariye: Recency (aakhiri order ko kitne din hue), Frequency (kul orders), aur Monetary (kul kharch). Skewed spend ko log-transform aur scale karke, Elbow + Silhouette se K choose karte hain, K-Means chalate hain, aur har segment ko business naam dete hain.',
    analogyTitle: 'Neighborhood Kirana Shopkeeper Who Knows Every Customer Type',
    analogyEn:
      'A smart shopkeeper doesn’t treat everyone identically: daily loyal regulars get priority home delivery ("Champions"), once-a-month big-basket buyers get combo deals ("Potential Loyalists"), and regulars who haven’t visited in 60 days get a friendly WhatsApp check-in ("At-Risk"). RFM + K-Means scales that instinct to 1 million shoppers!',
    analogyHi:
      'Samajhdar kirana dukandar har grahak ko alag treat karta hai: roz aane wale loyal customers ko priority delivery ("Champions"), mahine mein bada bill banane walon ko combo offer, aur 60 din se gayab grahakon ko WhatsApp reminder ("At-Risk"). RFM + K-Means isi samajh ko 10 lakh shoppers par scale karta hai!',
    steps: [
      {
        title: 'Aggregate Raw Orders Into RFM Table',
        en: 'Roll up transactions to 1 row per customer_id: Recency (days), Frequency (orders), Monetary (total ₹).',
        hi: 'Har customer_id ke liye 1 row mein RFM banayein: Recency (din), Frequency (orders), Monetary (kul ₹).',
        tone: 'sky',
      },
      {
        title: 'Log-Transform Skew & StandardScale',
        en: 'Apply np.log1p() to right-skewed Frequency/Monetary and standardize with StandardScaler so whale spenders don’t distort clusters.',
        hi: 'Right-skewed Frequency/Monetary par np.log1p() aur StandardScaler lagayein taaki kuch bade spenders clusters na bigaadein.',
        tone: 'amber',
      },
      {
        title: 'Select K & Fit K-Means',
        en: 'Compare K=3..7 with Elbow + Silhouette, fit final K-Means, and optionally inspect 2D separation with PCA.',
        hi: 'Elbow + Silhouette se K=3..7 compare karein, final K-Means fit karein, aur PCA se 2D plot check karein.',
        tone: 'lavender',
      },
      {
        title: 'Profile in Original ₹ & Name Personas',
        en: 'Attach cluster labels back to the UNSCALED RFM table, compute medians per cluster, and recommend a concrete marketing play for each.',
        hi: 'Cluster labels ko UNSCALED RFM table par jodein, har cluster ka median nikalen, aur har persona ke liye exact marketing campaign suggest karein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: END-TO-END RFM CUSTOMER SEGMENTATION',
    code: `import pandas as pd, numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans

rfm = pd.DataFrame({
    "recency_days": [5, 8, 12, 95, 110, 120, 25, 30],
    "frequency":    [22, 18, 25, 2, 1, 2, 8, 9],
    "monetary_inr": [48000, 41000, 52000, 1800, 1200, 2100, 14000, 16500],
})

X_prep = StandardScaler().fit_transform(np.log1p(rfm))
rfm["cluster"] = KMeans(n_clusters=3, n_init=10, random_state=42).fit_predict(X_prep)

print(rfm.groupby("cluster").median().round(0))`,
    codeOutput: `         recency_days  frequency  monetary_inr
cluster                                       
0                28.0        8.0       15250.0
1               110.0        2.0        1800.0
2                 8.0       22.0       48000.0`,
    codeCaptionEn: 'Cluster 2 = "Champions" (recent, 22 orders, ₹48k); Cluster 0 = "Regulars"; Cluster 1 = "Hibernating / At-Risk" (110 days silent)!',
    codeCaptionHi: 'Cluster 2 = "Champions" (recent, 22 orders, ₹48k); Cluster 0 = "Regulars"; Cluster 1 = "Hibernating / At-Risk" (110 din se gayab)!',
    tableTitle: 'Actionable RFM Segment Playbook (From Worked Output Above)',
    tableHeaders: ['Cluster', 'Persona Name', 'Median RFM Profile', 'Recommended Business Action'],
    tableRows: [
      ['Cluster 2', 'Champions (VIP)', '8 days | 22 orders | ₹48,000', 'Early-access launches, loyalty VIP perks (no deep discounts needed)'],
      ['Cluster 0', 'Steady Regulars', '28 days | 8 orders | ₹15,250', 'Cross-sell bundles & membership upsell to move them to VIP'],
      ['Cluster 1', 'At-Risk / Dormant', '110 days | 2 orders | ₹1,800', 'Targeted win-back coupon + "We miss you" feedback email'],
    ],
    tableNoteEn: 'Always present cluster summaries in ORIGINAL business units (days, orders, ₹)—never show executives standardized Z-scores like "+1.42"!',
    tableNoteHi: 'Stakeholders ko hamesha ORIGINAL units (din, orders, ₹) mein profile dikhayein—kabhi "+1.42" jaise standardized Z-scores na dikhayein!',
    mistakeEn: 'Clustering raw monetary values without log-transforming extreme outliers, resulting in 1 cluster with 3 billionaires and 1 cluster with everyone else.',
    mistakeHi: 'Extreme outliers ko log-transform kiye bina raw spend par clustering karna, jisse 3 billionaires ka alag cluster aur baaki sabka ek hi cluster ban jaaye.',
    proHabitEn: 'Use log1p + StandardScaler for skewed RFM features, profile clusters back in original medians, and tie every segment to a measurable marketing KPI.',
    proHabitHi: 'Skewed RFM features ke liye log1p + StandardScaler use karein, original medians se profile banayein, aur har segment ko marketing KPI se jodein.',
    jobUseEn: 'E-commerce CRM personalization, banking wealth-tier targeting, and retail loyalty program design.',
    jobUseHi: 'E-commerce CRM personalization, banking customer tiering, aur retail loyalty programs design karne mein daily use hota hai.',
    mcq1Question: 'Why do we apply np.log1p() to Monetary spend and Frequency before StandardScaler in RFM Customer Segmentation?',
    mcq1Correct: 'Because spend and order counts are heavily right-skewed; log1p compresses extreme whale outliers so K-Means forms balanced, meaningful segments.',
    mcq1Wrongs: [
      'Because K-Means cannot accept numbers greater than 100.',
      'Because log1p creates target labels y for supervised learning.',
      'Because log1p deletes all customers with low spend.',
    ],
    mcq1Explain: 'Without log transformation, a handful of ultra-high spenders stretch the scale and pull K-Means centroids away from normal shopper groups.',
    mcq2Question: 'After clustering scaled RFM data, how should you present the segments to the Marketing Director?',
    mcq2Correct: 'Map cluster IDs back to the original unscaled RFM table, show each cluster’s size and median days/orders/₹, give memorable persona names, and suggest actions.',
    mcq2Wrongs: [
      'Show only the raw Inertia number and scaled Z-scores.',
      'Hand over a CSV of 0, 1, 2 integers with no explanation.',
      'Report Accuracy % against y_test.',
    ],
    mcq2Explain: 'Business teams can only act on segments when they understand each group’s real-world behavior in rupees, days, and orders.',
    realWorldScenario:
      'An online grocery app has 200,000 customers. After RFM clustering, they discover a high-spend segment whose Recency just crossed 45 days. What immediate business campaign should they test?',
    interviewQ1: 'What is RFM analysis and why does it pair so effectively with K-Means?',
    interviewA1:
      'RFM summarizes customer behavior into 3 compact, high-signal numeric dimensions—Recency, Frequency, and Monetary value—avoiding the curse of dimensionality and producing intuitive, immediately actionable K-Means segments.',
    interviewQ2: 'How do you assign a brand-new customer to an existing K-Means segmentation in production?',
    interviewA2:
      'Save the fitted preprocessing Pipeline (log1p -> StandardScaler -> KMeans) and call .predict() on the new customer’s RFM vector—never refit the scaler on single new rows!',
  },

  // =========================================================================
  // MODULE 25: MODEL EVALUATION AND IMPROVEMENT (IDs 265–275)
  // =========================================================================
  {
    id: 265,
    modNum: 25,
    modTitle: 'Model Evaluation and Improvement',
    topicNumInMod: 1,
    title: 'Model Evaluation Strategy',
    subtitle: 'DESIGNING AN HONEST, PRODUCTION-REALISTIC EXAM FOR YOUR ML MODEL',
    coreEn:
      'A Model Evaluation Strategy is the master plan you design BEFORE tuning any algorithm: choosing the right split method (Stratified for imbalanced classes, GroupKFold for repeated users/patients, TimeSeriesSplit for time-ordered data), locking a single primary business metric, and keeping one untouched Test Set for the final verdict.',
    coreHi:
      'Model Evaluation Strategy woh master plan hai jo aap model tune karne se PEHLE banate hain: sahi split choose karna (imbalanced classes ke liye Stratified, repeated users/patients ke liye GroupKFold, time data ke liye TimeSeriesSplit), ek primary business metric lock karna, aur final audit ke liye ek untouched Test Set rakhna.',
    analogyTitle: 'Designing a Driving License Test That Matches Real Roads',
    analogyEn:
      'If a driving test only checks parking inside an empty lot, drivers will still crash on busy highways. A real evaluation strategy mirrors actual road conditions—testing rain, traffic, and unseen intersections—before handing out the license.',
    analogyHi:
      'Agar driving test sirf khali ground mein parking check kare, toh driver busy highway par accident kar dega. Sahi evaluation strategy asli road conditions (traffic, unseen turns) ko mirror karti hai license dene se pehle.',
    steps: [
      {
        title: 'Match Split Strategy to Data Structure',
        en: 'Ask: Are rows independent (StratifiedKFold), grouped by user/patient (GroupKFold), or ordered in time (TimeSeriesSplit)?',
        hi: 'Poochein: Kya rows independent hain (StratifiedKFold), user/patient se grouped hain (GroupKFold), ya time-ordered hain (TimeSeriesSplit)?',
        tone: 'sky',
      },
      {
        title: 'Lock One Primary Metric + Guardrails',
        en: 'Pick one primary optimizing metric (e.g., PR-AUC or RMSE) plus guardrail checks (latency, fairness across subgroups).',
        hi: 'Ek primary metric (jaise PR-AUC ya RMSE) aur saath mein guardrail checks (speed, subgroup fairness) lock karein.',
        tone: 'amber',
      },
      {
        title: 'Mirror Production Inference Constraints',
        en: 'Evaluate using ONLY features that truly exist at live prediction time, with realistic missing-value rates.',
        hi: 'Sirf unhi features par evaluate karein jo live prediction ke waqt sach mein available honge.',
        tone: 'lavender',
      },
      {
        title: 'Audit Final Model Once on Held-Out Test',
        en: 'Never iterate on the Test Set—use it once to confirm your CV score genuinely holds on unseen data.',
        hi: 'Test Set par kabhi iterate na karein—sirf ek baar final confirmation ke liye use karein.',
        tone: 'green',
      },
    ],
    tableTitle: 'Choosing the Exact Right Split Strategy for Your Data',
    tableHeaders: ['Dataset Structure', 'Wrong Split (Causes Leakage!)', 'Right Split Strategy'],
    tableRows: [
      ['Independent imbalanced rows (Churn)', 'Plain random KFold', 'StratifiedKFold'],
      ['Multiple scans per patient / user', 'Random row split (same patient in train & test!)', 'GroupKFold / StratifiedGroupKFold'],
      ['Daily sales / stock / demand over time', 'Randomly shuffled split (peeking at future!)', 'TimeSeriesSplit (walk-forward)'],
      ['Standard balanced regression rows', 'No split (testing on train)', 'KFold + locked Test split'],
    ],
    tableNoteEn: 'If your local CV score improves AND your held-out test score moves in the same direction, you have a trustworthy evaluation strategy!',
    tableNoteHi: 'Jab aapka local CV score sudharne par held-out test score bhi usi disha mein sudhre, samajhiye aapki evaluation strategy solid hai!',
    mistakeEn: 'Randomly splitting a hospital dataset where the same patient has 10 X-rays—putting 8 in Train and 2 in Test so the model memorizes the patient instead of the disease.',
    mistakeHi: 'Hospital dataset mein jahan ek patient ke 10 X-ray hon, random split karke 8 Train aur 2 Test mein daal dena—isse model bimari nahi, patient ko yaad kar leta hai.',
    proHabitEn: 'Write down your Split Strategy + Primary Metric + Baseline in a 5-line evaluation spec BEFORE training your first real model.',
    proHabitHi: 'Pehla model train karne se pehle apna Split Strategy + Primary Metric + Baseline ek 5-line spec mein lock kar lein.',
    jobUseEn: 'Preventing embarrassing production failures where a model scored 95% in Jupyter Notebook but flopped on live customer traffic.',
    jobUseHi: 'Notebook mein 95% aur live production mein flop hone wali embarrassing galti se bachne mein kaam aata hai.',
    mcq1Question: 'You are predicting hospital readmission using a dataset where each patient may appear in 5 different visit rows. Which split prevents patient leakage?',
    mcq1Correct: 'GroupKFold / StratifiedGroupKFold grouped by patient_id',
    mcq1Wrongs: [
      'Random 80/20 shuffle across rows',
      'Sorting alphabetically by patient name',
      'Evaluating on the training set directly',
    ],
    mcq1Explain: 'Grouping by patient_id guarantees every single visit of a patient sits strictly in either Train OR Validation, never both.',
    mcq2Question: 'Why should you pick ONE primary evaluation metric before comparing 10 models?',
    mcq2Correct: 'So you have an objective, business-aligned rule to choose the winner rather than cherry-picking whichever metric looks flattering.',
    mcq2Wrongs: [
      'Because Python only allows computing one metric per script.',
      'Because secondary guardrail metrics are useless.',
      'Because Accuracy is always the only valid metric.',
    ],
    mcq2Explain: 'A single optimizing metric + clear guardrail constraints keeps model selection disciplined and aligned with business goals.',
    realWorldScenario:
      'A ride-sharing app wants to predict driver cancellation probability using 6 months of trip logs where the same drivers appear hundreds of times. Design their evaluation strategy.',
    interviewQ1: 'What makes a validation strategy "trustworthy" in real-world Machine Learning?',
    interviewA1:
      'A trustworthy validation strategy mirrors production data-generating conditions (respecting time order, entity groups, and class balance), runs all preprocessing inside folds to prevent leakage, and aligns its metric directly with business impact.',
    interviewQ2: 'When is TimeSeriesSplit (walk-forward validation) mandatory?',
    interviewA2:
      'Whenever observations evolve over time and the deployed model will predict future events from past history—because random splits leak future trends and seasonality backward into training.',
  },
  {
    id: 266,
    modNum: 25,
    modTitle: 'Model Evaluation and Improvement',
    topicNumInMod: 2,
    title: 'Cross-Validation',
    subtitle: 'GRADING YOUR MODEL ACROSS K ROTATING VALIDATION FOLDS FOR ROCK-SOLID SCORES',
    coreEn:
      'A single random Train/Validation split can be lucky or unlucky—especially on smaller datasets. K-Fold Cross-Validation splits the training data into K equal slices (usually K = 5 or 10), trains K separate times (each time holding out 1 slice for validation and training on the other K−1), and reports the Mean ± Standard Deviation across all K folds.',
    coreHi:
      'Sirf ek random Train/Validation split lucky ya unlucky ho sakta hai—khaaskar chhote datasets par. K-Fold Cross-Validation training data ko K barabar hisson (aksar K = 5 ya 10) mein baantta hai, K baar alag-alag train/validate karta hai, aur sabhi folds ka Mean ± Standard Deviation score deta hai.',
    analogyTitle: 'Testing a Cricketer Across 5 Different Pitches Instead of 1 Lucky Match',
    analogyEn:
      'Judging a batter from a single innings is noisy—maybe the pitch was flat or they got an unlucky bounce. Averaging their score across 5 different stadiums (5-Fold CV) tells you BOTH their true skill (Mean) and their consistency (Low Std).',
    analogyHi:
      'Kisi batsman ko sirf ek match dekh kar judge karna galat ho sakta hai—shayad pitch aasan thi ya unlucky out ho gaya. 5 alag pitches par khelwa kar average lena (5-Fold CV) unki asli skill (Mean) aur consistency (Std) dono dikha deta hai.',
    steps: [
      {
        title: 'Lock Test Set Outside CV First',
        en: 'Keep an untouched Test Set completely separate; run K-Fold CV strictly inside X_train.',
        hi: 'Untouched Test Set ko CV se bahar lock rakhein; K-Fold CV sirf X_train ke andar chalayein.',
        tone: 'sky',
      },
      {
        title: 'Wrap Preprocessing Inside a Pipeline',
        en: 'Put scalers, imputers, and encoders inside a Pipeline so they refit cleanly inside EVERY single fold!',
        hi: 'Scalers, imputers, aur encoders ko Pipeline mein rakhein taaki woh HAR fold ke andar sirf training folds par refit hon!',
        tone: 'amber',
      },
      {
        title: 'Run K Rotating Train/Val Rounds',
        en: 'Use StratifiedKFold(n_splits=5) for classification or KFold(n_splits=5) for regression.',
        hi: 'Classification ke liye StratifiedKFold(n_splits=5) aur regression ke liye KFold(n_splits=5) chalayein.',
        tone: 'lavender',
      },
      {
        title: 'Inspect Mean AND Std Across Folds',
        en: 'High mean + low std means reliable performance; huge std warns of high variance or unstable splits.',
        hi: 'High mean + low std matlab reliable model; bahut bada std warning deta hai ki model unstable (high variance) hai.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: LEAK-FREE 5-FOLD STRATIFIED CV',
    code: `from sklearn.datasets import make_classification
from sklearn.model_selection import StratifiedKFold, cross_val_score
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

X, y = make_classification(n_samples=400, n_features=10, random_state=42)
pipe = make_pipeline(StandardScaler(), LogisticRegression())
cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)

scores = cross_val_score(pipe, X, y, cv=cv, scoring="roc_auc")
print("Fold AUCs:", [round(s, 3) for s in scores])
print(f"Mean AUC: {scores.mean():.3f} +/- {scores.std():.3f}")`,
    codeOutput: `Fold AUCs: [0.955, 0.964, 0.961, 0.971, 0.942]
Mean AUC: 0.959 +/- 0.010`,
    codeCaptionEn: 'Every fold stays tightly between 0.942 and 0.971 (std = 0.010), confirming rock-solid generalization with zero scaler leakage!',
    codeCaptionHi: 'Har fold 0.942 aur 0.971 ke beech tight hai (std = 0.010), jo bina kisi leakage ke solid generalization prove karta hai!',
    tableTitle: '5-Fold Cross-Validation Rotation Visualized',
    tableHeaders: ['Round', 'Fold 1', 'Fold 2', 'Fold 3', 'Fold 4', 'Fold 5'],
    tableRows: [
      ['Split 1', 'VAL', 'Train', 'Train', 'Train', 'Train'],
      ['Split 2', 'Train', 'VAL', 'Train', 'Train', 'Train'],
      ['Split 3', 'Train', 'Train', 'VAL', 'Train', 'Train'],
      ['Split 4', 'Train', 'Train', 'Train', 'VAL', 'Train'],
      ['Split 5', 'Train', 'Train', 'Train', 'Train', 'VAL'],
    ],
    tableNoteEn: 'Every single training row gets evaluated as a validation row EXACTLY ONCE across the 5 rounds!',
    tableNoteHi: '5 rounds mein har training row ko EXACTLY EK BAAR validation row banne ka mauka milta hai!',
    mistakeEn: 'Scaling X_train BEFORE calling cross_val_score(), which leaks validation-fold mean and std into every training fold.',
    mistakeHi: 'cross_val_score() se pehle poore X_train par StandardScaler chala dena—isse har validation fold ki info training folds mein leak ho jaati hai.',
    proHabitEn: 'Always pass a scikit-learn Pipeline (not a bare model) into cross_val_score() and report Mean ± Std across folds.',
    proHabitHi: 'cross_val_score() mein hamesha poori scikit-learn Pipeline pass karein aur Mean ± Std dono report karein.',
    jobUseEn: 'Reliably comparing candidate models, features, and hyperparameters on medium-sized datasets without wasting data.',
    jobUseHi: 'Medium-sized datasets par data waste kiye bina candidate models, features aur hyperparameters ko reliably compare karne mein use hota hai.',
    mcq1Question: 'In 5-Fold Cross-Validation on 1,000 training rows, how many rows are used to train the model in EACH individual fold?',
    mcq1Correct: '800 rows (4 folds train, 1 fold = 200 rows validate)',
    mcq1Wrongs: [
      '200 rows',
      '1,000 rows',
      '500 rows',
    ],
    mcq1Explain: 'Each fold holds out 1/5 (200 rows) for validation and trains on the remaining 4/5 (800 rows).',
    mcq2Question: 'Why must StandardScaler be placed INSIDE a Pipeline when running cross_val_score()?',
    mcq2Correct: 'So the scaler fits strictly on the 4 training folds and only transforms the 1 held-out validation fold in each round, preventing data leakage.',
    mcq2Wrongs: [
      'Because cross_val_score() crashes if data is scaled.',
      'To make K automatically equal 10.',
      'To delete outliers from the validation fold.',
    ],
    mcq2Explain: 'Fitting a scaler outside CV lets validation statistics influence training folds, inflating CV scores optimistically.',
    realWorldScenario:
      'Model A gets 5-Fold CV F1 = 0.84 ± 0.01; Model B gets 0.85 ± 0.09. Which model feels safer for production, and why would you investigate Model B’s high std?',
    interviewQ1: 'What is the trade-off between choosing K = 5 vs K = 10 vs Leave-One-Out (LOOCV) in Cross-Validation?',
    interviewA1:
      'Higher K uses more training data per fold (lower bias) but increases compute cost (K trainings) and can increase fold-to-fold variance (especially LOOCV). K = 5 or 10 is the industry sweet spot.',
    interviewQ2: 'What is Nested Cross-Validation and when is it useful?',
    interviewA2:
      'Nested CV runs an inner CV loop for hyperparameter tuning and an outer CV loop for unbiased model evaluation—ideal on small datasets where tuning on a single CV loop can optimistically bias the score.',
  },
  {
    id: 267,
    modNum: 25,
    modTitle: 'Model Evaluation and Improvement',
    topicNumInMod: 3,
    title: 'Feature Selection',
    subtitle: 'DROPPING NOISY AND REDUNDANT COLUMNS SO MODELS LEARN CLEANER PATTERNS',
    coreEn:
      'More columns do NOT always mean a better model. Irrelevant, noisy, or duplicate features slow down training, increase overfitting, and blur interpretability. Feature Selection trims X down to the most informative original features using Filter methods (correlation/mutual info), Wrapper methods (RFE), or Embedded methods (Lasso L1 / Tree importance).',
    coreHi:
      'Zyada columns ka matlab hamesha behtar model nahi hota. Bekaar, noisy ya duplicate features training slow karte hain aur overfitting badhate hain. Feature Selection X se sirf sabse useful original features rakhta hai—Filter (correlation/mutual info), Wrapper (RFE), ya Embedded (Lasso L1 / Tree importance) tareekon se.',
    analogyTitle: 'Packing a Lightweight Hiking Backpack',
    analogyEn:
      'If you stuff 20 useless bricks and 3 identical flashlights into a hiking backpack, you walk slower and trip more easily. Keeping only the essential gear makes your hike faster, lighter, and safer—that is Feature Selection.',
    analogyHi:
      'Trekking bag mein 20 bekaar patthar aur 3 ek jaisi torch bharne se aap thak jaate hain aur phisalne ka dar badhta hai. Sirf zaroori samaan rakhna safar ko fast aur safe banata hai—yahi Feature Selection hai.',
    steps: [
      {
        title: 'Drop Zero-Variance & Duplicate Columns',
        en: 'Remove constant columns (same value in every row) and exact duplicate or leaky columns first.',
        hi: 'Sabse pehle constant columns (har row mein same value) aur exact duplicate ya leaky columns hatayein.',
        tone: 'sky',
      },
      {
        title: 'Apply Selection STRICTLY Inside Training Folds!',
        en: 'NEVER select top features using the whole dataset (X, y) before CV—that leaks test-label correlations!',
        hi: 'CV se pehle poore dataset par feature selection KABHI na karein—warna test labels ka correlation leak ho jaata hai!',
        tone: 'amber',
      },
      {
        title: 'Use Filter, Wrapper, or Embedded Selectors',
        en: 'Try SelectKBest (fast filter), Lasso / L1 (embedded shrinkage to zero), or RFECV / Permutation Importance.',
        hi: 'SelectKBest (fast filter), Lasso L1 (embedded), ya RFECV / Permutation Importance try karein.',
        tone: 'lavender',
      },
      {
        title: 'Verify CV Score & Simplicity Gain',
        en: 'Confirm the smaller feature set matches or beats the full set on CV while cutting latency and maintenance cost.',
        hi: 'Confirm karein ki kam features ke saath CV score barabar ya behtar hai aur model zyada fast aur simple ho gaya.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: LEAK-FREE FEATURE SELECTION IN PIPELINE',
    code: `from sklearn.datasets import make_classification
from sklearn.model_selection import cross_val_score
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.feature_selection import SelectKBest, f_classif
from sklearn.linear_model import LogisticRegression

# 20 total features, but ONLY 3 are actually informative!
X, y = make_classification(n_samples=400, n_features=20, n_informative=3, n_redundant=0, random_state=42)

pipe_all = make_pipeline(StandardScaler(), LogisticRegression())
pipe_top = make_pipeline(StandardScaler(), SelectKBest(f_classif, k=5), LogisticRegression())

print(f"All 20 features CV Acc: {cross_val_score(pipe_all, X, y, cv=5).mean():.3f}")
print(f"Top  5 features CV Acc: {cross_val_score(pipe_top, X, y, cv=5).mean():.3f}")`,
    codeOutput: `All 20 features CV Acc: 0.855
Top  5 features CV Acc: 0.880`,
    codeCaptionEn: 'Dropping 15 noisy columns inside the Pipeline BOOSTED 5-fold CV accuracy from 85.5% to 88.0%!',
    codeCaptionHi: 'Pipeline ke andar 15 noisy columns hatane se 5-fold CV accuracy 85.5% se badh kar 88.0% ho gayi!',
    tableTitle: 'The 3 Families of Feature Selection Compared',
    tableHeaders: ['Family', 'Examples', 'Speed', 'Main Strength'],
    tableRows: [
      ['Filter Methods', 'Correlation, Chi-Square, Mutual Info, SelectKBest', 'Very Fast', 'Quick first pass; model-agnostic'],
      ['Wrapper Methods', 'RFE, RFECV, Forward/Backward Selection', 'Slow (retrains model)', 'Tests actual feature subsets on your exact model'],
      ['Embedded Methods', 'Lasso (L1), Tree / Permutation Importance', 'Medium', 'Selects features naturally during model training'],
    ],
    tableNoteEn: 'Lasso (L1) regularization shrinks useless feature weights to EXACTLY 0.0, acting as built-in automatic feature selection!',
    tableNoteHi: 'Lasso (L1) regularization bekaar features ke weights ko EXACTLY 0.0 kar deta hai—built-in automatic feature selection!',
    mistakeEn: 'Running SelectKBest(X, y) on the full dataset BEFORE train_test_split(), causing huge optimistic bias on noisy datasets.',
    mistakeHi: 'train_test_split() se pehle poore (X, y) par SelectKBest chala dena—yeh noisy data par fake high score deta hai.',
    proHabitEn: 'Put feature selectors (SelectKBest, SelectFromModel) inside your scikit-learn Pipeline, and use permutation_importance on validation data.',
    proHabitHi: 'Feature selectors (SelectKBest, SelectFromModel) ko hamesha Pipeline ke andar rakhein aur validation set par permutation_importance check karein.',
    jobUseEn: 'Reducing 200 raw warehouse columns down to the 15 cleanest production signals that are cheap and reliable to serve live.',
    jobUseHi: '200 raw warehouse columns ko 15 sabse clean aur saste production signals mein laane ke liye use hota hai.',
    mcq1Question: 'Why does Lasso (L1) regression act as an Embedded Feature Selection method?',
    mcq1Correct: 'Its L1 penalty pushes the weights of irrelevant features all the way to exact zero, effectively dropping them.',
    mcq1Wrongs: [
      'It deletes rows with missing values automatically.',
      'It runs K-Means on every column.',
      'It replaces all features with Principal Components.',
    ],
    mcq1Explain: 'Unlike Ridge (L2) which shrinks weights near zero, Lasso (L1) drives weak feature coefficients to exact 0.',
    mcq2Question: 'Why must feature selection be executed INSIDE each cross-validation fold rather than once before splitting?',
    mcq2Correct: 'Selecting features using the full dataset lets validation/test target labels influence which columns are kept—a classic data leakage error.',
    mcq2Wrongs: [
      'Because SelectKBest only accepts 100 rows at a time.',
      'Because Pipelines require at least 5 steps.',
      'To make sure all features are dropped.',
    ],
    mcq2Explain: 'On pure random noise with 1,000 columns, selecting top-5 correlated columns before splitting can produce a completely fake 70%+ CV score!',
    realWorldScenario:
      'Your credit risk model currently uses 120 features, 90 of which come from an expensive third-party API. How do you test whether you can drop those 90 features without losing test ROC-AUC?',
    interviewQ1: 'Compare Filter, Wrapper, and Embedded feature selection methods.',
    interviewA1:
      'Filter methods rank features independently using statistical tests (fast, ignores interactions); Wrapper methods like RFE iteratively train/evaluate subsets (captures interactions, expensive); Embedded methods like Lasso L1 or tree importances select features during training (good balance).',
    interviewQ2: 'Why is Permutation Importance often preferred over default tree impurity importance?',
    interviewA2:
      'Impurity importance is computed on training data and is biased toward high-cardinality continuous features; Permutation Importance measures the actual drop in unseen validation score when a feature is shuffled.',
  },
  {
    id: 268,
    modNum: 25,
    modTitle: 'Model Evaluation and Improvement',
    topicNumInMod: 4,
    title: 'Feature Engineering for Machine Learning',
    subtitle: 'CRAFTING SMARTER DOMAIN SIGNALS THAT TURN AVERAGE MODELS INTO WINNERS',
    coreEn:
      'Feature Engineering is the art and science of creating new, higher-signal input features from raw columns using domain knowledge—such as ratios (Debt-to-Income), date parts (Is_Weekend, Day_of_Week), log transforms for skewed money columns, interaction terms, or aggregations (Average Spend Last 30 Days). Great features often beat fancy algorithms.',
    coreHi:
      'Feature Engineering raw columns se domain knowledge lagakar naye, zyada powerful clues banane ki kala hai—jaise ratios (Debt-to-Income), date features (Is_Weekend, Month), skewed paison par log transform, ya aggregations (pichle 30 din ka average spend). Acche features aksar fancy algorithms ko hara dete hain.',
    analogyTitle: 'Chopping and Marinating Raw Ingredients Before Cooking',
    analogyEn:
      'Even a ₹1 Lakh oven (fancy algorithm) cannot make whole unpeeled potatoes taste great. Washing, slicing, and seasoning the ingredients properly (Feature Engineering) lets even a simple pan (Logistic/Ridge model) produce a delicious meal!',
    analogyHi:
      '₹1 Lakh ka mehenga oven (fancy model) bhi bina chhile kacche aaloo se acchi dish nahi bana sakta. Ingredients ko sahi se kaatna aur masala lagana (Feature Engineering) ek simple kadhai (Linear model) se bhi shandaar result de deta hai!',
    steps: [
      {
        title: 'Talk to Domain Experts & Inspect Raw Columns',
        en: 'Ask what ratios, trends, or calendar flags a human expert looks at to make the same decision.',
        hi: 'Domain experts se poochein ki wahi decision lete waqt woh kaunse ratios, trends ya calendar flags dekhte hain.',
        tone: 'sky',
      },
      {
        title: 'Create Ratios, Dates, Bins & Aggregations',
        en: 'Turn timestamps into hour/weekday, combine numerator/denominator into ratios (Price_Per_SqFt), and log-transform heavy skew.',
        hi: 'Timestamps se hour/weekday nikalen, ratios (Price_Per_SqFt, Debt/Income) banayein, aur heavy skew par log1p lagayein.',
        tone: 'amber',
      },
      {
        title: 'Avoid Target & Future Leakage Strictly',
        en: 'Compute any group/target encoding ONLY on training folds inside a Pipeline—never peek at future dates or y_test.',
        hi: 'Koi bhi group/target encoding sirf training folds par Pipeline ke andar karein—future dates ya y_test kabhi na dekhein.',
        tone: 'lavender',
      },
      {
        title: 'Keep Only Features That Improve CV Score',
        en: 'Test each new engineered feature on your fixed CV split; drop any clever idea that fails to improve unseen validation.',
        hi: 'Har naye feature ko apne fixed CV split par test karein; jo feature validation score na badhaye use drop kar dein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / PANDAS: HIGH-SIGNAL DOMAIN FEATURE ENGINEERING',
    code: `import pandas as pd, numpy as np

df = pd.DataFrame({
    "monthly_income": [40000, 90000, 50000],
    "monthly_emi":    [22000, 18000, 30000],
    "order_date":     pd.to_datetime(["2026-05-02", "2026-05-05", "2026-05-09"])
})

# Domain ratio: Debt-to-Income (far more informative than raw EMI alone!)
df["debt_to_income"] = (df["monthly_emi"] / df["monthly_income"]).round(2)
# Calendar feature: Weekend flag (Sat=5, Sun=6)
df["is_weekend"] = (df["order_date"].dt.dayofweek >= 5).astype(int)
# Skew compression
df["log_income"] = np.log1p(df["monthly_income"]).round(2)

print(df[["debt_to_income", "is_weekend", "log_income"]])`,
    codeOutput: `   debt_to_income  is_weekend  log_income
0            0.55           1       10.60
1            0.20           0       11.41
2            0.60           1       10.82`,
    codeCaptionEn: 'A ₹22,000 EMI looks harmless alone, but debt_to_income = 0.55 immediately reveals financial stress to even a simple linear model!',
    codeCaptionHi: 'Akela ₹22,000 EMI normal lag sakta hai, par debt_to_income = 0.55 ek simple linear model ko bhi turant financial risk dikha deta hai!',
    tableTitle: 'High-Impact Feature Engineering Patterns by Data Type',
    tableHeaders: ['Raw Column Type', 'Engineered Feature Idea', 'Why Models Love It'],
    tableRows: [
      ['Two Numerics (EMI, Income)', 'Ratio: EMI / Income', 'Captures relative burden directly (trees struggle with exact ratios)'],
      ['Date / Timestamp', 'Day of week, Is_Weekend, Days_Since_Last_Order', 'Turns raw dates into repeating behavioral cycles'],
      ['Right-Skewed Money Column', 'np.log1p(amount)', 'Compresses extreme outliers and linearizes multiplicative effects'],
      ['Missing Values', 'Missingness indicator flag (is_income_missing)', 'Sometimes the fact that a user hid income is itself a strong signal!'],
    ],
    tableNoteEn: 'Remember: a simple Logistic Regression with great engineered features routinely beats a default XGBoost on raw untouched columns.',
    tableNoteHi: 'Yaad rakhein: zabardast engineered features ke saath simple Logistic Regression aksar raw columns par chalne wale complex model ko hara deta hai.',
    mistakeEn: 'Creating 500 blind engineered features without checking CV or using target encoding computed on the entire dataset before splitting.',
    mistakeHi: 'CV check kiye bina 500 random features bana dena ya split se pehle poore dataset par target encoding kar dena.',
    proHabitEn: 'Treat every engineered feature as a hypothesis: hypothesize -> implement inside Pipeline -> verify CV gain -> keep or discard.',
    proHabitHi: 'Har naye feature ko ek hypothesis maanein: soch -> Pipeline mein banao -> CV par test karo -> gain ho toh rakho warna hatao.',
    jobUseEn: 'Driving the biggest real-world accuracy jumps in fraud detection, credit underwriting, demand forecasting, and churn prevention.',
    jobUseHi: 'Fraud detection, loan underwriting, demand forecasting, aur churn models mein sabse bada accuracy jump laane ka mukhya tareeka hai.',
    mcq1Question: 'Why is creating a Debt-to-Income ratio (EMI / Monthly_Income) often much more useful than feeding raw EMI and raw Income alone?',
    mcq1Correct: 'Because financial stress depends on the relative proportion of debt to income, which linear models cannot express directly and trees need many splits to approximate.',
    mcq1Wrongs: [
      'Because ML models cannot accept two numeric columns at once.',
      'Because dividing two columns deletes all missing values.',
      'Because ratios eliminate the need for a test set.',
    ],
    mcq1Explain: 'Domain ratios expose the true underlying relationship directly in a single clean dimension.',
    mcq2Question: 'Why might creating a binary flag "is_salary_missing" BEFORE imputing missing salaries actually improve a credit-default model?',
    mcq2Correct: 'Because missingness is often informative (not random)—applicants who leave salary blank may behave systematically differently.',
    mcq2Wrongs: [
      'Because imputers refuse to run without binary flags.',
      'Because it reduces the number of columns.',
      'Because it fixes class imbalance automatically.',
    ],
    mcq2Explain: 'When data is Missing Not At Random (MNAR), a missingness indicator preserves that hidden behavioral signal even after median imputation.',
    realWorldScenario:
      'You are predicting food-delivery ETA using raw columns: order_timestamp, restaurant_lat/lon, customer_lat/lon, and item_count. Propose 3 strong engineered features.',
    interviewQ1: 'Why do practitioners say "Feature Engineering matters more than algorithm selection" on tabular data?',
    interviewA1:
      'Algorithms can only learn from the signal exposed in X. Well-crafted domain features (ratios, temporal lags, aggregations) expose nonlinear relationships cleanly, often yielding 5%–15% gains where switching models yields 1%.',
    interviewQ2: 'How do you apply Target Encoding without causing data leakage?',
    interviewA2:
      'Compute category target averages strictly inside each training fold (with smoothing toward the global mean for rare categories)—never on the combined train+test set. Scikit-learn’s TargetEncoder inside a Pipeline handles this cleanly.',
  },
  {
    id: 269,
    modNum: 25,
    modTitle: 'Model Evaluation and Improvement',
    topicNumInMod: 5,
    title: 'Hyperparameter Tuning',
    subtitle: 'ADJUSTING THE KNOBS YOU SET BEFORE TRAINING TO UNLOCK PEAK GENERALIZATION',
    coreEn:
      'Every ML model has two kinds of numbers: Parameters are learned automatically FROM data during .fit() (like linear regression weights or tree split thresholds), while Hyperparameters are configuration knobs YOU choose BEFORE training (like max_depth, K in KNN, C in Logistic/SVM, or n_estimators). Tuning adjusts those knobs using cross-validation to hit the bias-variance sweet spot.',
    coreHi:
      'Har ML model mein do tarah ke numbers hote hain: Parameters woh hain jo model .fit() ke dauran data se KHUD seekhta hai (jaise linear weights ya tree thresholds), jabki Hyperparameters woh settings/knobs hain jo AAP training se PEHLE set karte hain (jaise max_depth, K, C, n_estimators). Tuning cross-validation se un knobs ka best combination dhoondhta hai.',
    analogyTitle: 'Oven Temperature & Timer vs How the Cake Bakes Inside',
    analogyEn:
      'You set the oven temperature (180°C) and timer (35 min) BEFORE baking—those are Hyperparameters. How the batter rises and browns inside the oven happens automatically—those are learned Parameters. Tuning finds the exact temperature/time that neither under-bakes (underfits) nor burns (overfits)!',
    analogyHi:
      'Cake bake karne se pehle aap oven ka temperature (180°C) aur timer (35 min) set karte hain—yeh Hyperparameters hain. Andar cake ka phoolna aur pakna khud hota hai—yeh learned Parameters hain. Tuning woh exact setting dhoondhta hai jahan cake na kaccha rahe (underfit) na jale (overfit)!',
    steps: [
      {
        title: 'Separate Parameters vs Hyperparameters',
        en: 'Know which knobs control complexity (e.g., max_depth, min_samples_leaf, C, alpha) for your chosen model.',
        hi: 'Samjhein ki aapke model mein kaunse knobs complexity control karte hain (jaise max_depth, min_samples_leaf, C, alpha).',
        tone: 'sky',
      },
      {
        title: 'Establish Default Baseline Score First',
        en: 'Always record the untuned default CV score so you can verify tuning actually improved performance.',
        hi: 'Pehle untuned default CV score note karein taaki pata chale tuning se sach mein kitna fayda hua.',
        tone: 'amber',
      },
      {
        title: 'Tune Strictly Using Validation / CV',
        en: 'Evaluate candidate settings via K-Fold CV inside X_train—NEVER tune hyperparameters on X_test!',
        hi: 'Candidate settings ko sirf X_train ke andar K-Fold CV par check karein—X_test par kabhi tune na karein!',
        tone: 'lavender',
      },
      {
        title: 'Verify Final Tuned Model Once on Test',
        en: 'Refit the best pipeline on full X_train and confirm the gain holds on the locked Test Set.',
        hi: 'Best pipeline ko poore X_train par refit karein aur locked Test Set par ek baar final gain verify karein.',
        tone: 'green',
      },
    ],
    tableTitle: 'Parameters vs Hyperparameters Across Core Algorithms',
    tableHeaders: ['Algorithm', 'Learned Parameters (from .fit)', 'Key Hyperparameters (You Tune)'],
    tableRows: [
      ['Ridge / Logistic Regression', 'Feature weights (w) & intercept (b)', 'alpha or C (regularization strength)'],
      ['Decision Tree', 'Exact split features & thresholds', 'max_depth, min_samples_leaf, ccp_alpha'],
      ['Random Forest', 'All split rules across every tree', 'n_estimators, max_depth, max_features, min_samples_leaf'],
      ['SVM (RBF)', 'Support vectors & dual coefficients', 'C (margin strictness), gamma (curve width)'],
      ['K-Nearest Neighbors', 'Stored training points (non-parametric)', 'n_neighbors (K), weights ("uniform" vs "distance")'],
    ],
    tableNoteEn: 'Tune high-impact complexity knobs first (like max_depth or C) before wasting hours tweaking minor settings.',
    tableNoteHi: 'Chhote-mote settings par ghante barbad karne se pehle high-impact complexity knobs (jaise max_depth ya C) tune karein.',
    mistakeEn: 'Trying to squeeze +0.2% from hyperparameter tuning on raw messy data instead of doing feature engineering that gives +8%.',
    mistakeHi: 'Raw messy data par tuning se +0.2% nikalne mein din barbad karna, jabki feature engineering +8% de sakta tha.',
    proHabitEn: 'Fix data quality and engineer features first, pick your top 1–2 model families, then tune their high-leverage hyperparameters using CV.',
    proHabitHi: 'Pehle data clean aur features strong karein, top 1–2 models chunein, aur aakhir mein CV se unke main hyperparameters tune karein.',
    jobUseEn: 'Polishing finalist models for production—especially preventing tree ensembles from overfitting noisy business tables.',
    jobUseHi: 'Production ke liye finalist models ko polish karne aur tree ensembles ko noisy data par overfit hone se rokne mein use hota hai.',
    mcq1Question: 'Which of the following is a HYPERPARAMETER (set before training) rather than a learned model parameter?',
    mcq1Correct: 'max_depth in a Decision Tree',
    mcq1Wrongs: [
      'The learned slope (m) in Simple Linear Regression',
      'The learned feature weights (coef_) in Logistic Regression',
      'The exact split threshold chosen at a tree node during .fit()',
    ],
    mcq1Explain: 'max_depth is chosen by the human before training begins; slopes, weights, and split thresholds are learned by .fit().',
    mcq2Question: 'What happens if you tune 500 hyperparameter combinations directly on your Test Set and pick the best one?',
    mcq2Correct: 'You overfit to the Test Set, making your reported test score optimistically biased and unreliable for production.',
    mcq2Wrongs: [
      'Your model is guaranteed to stay just as accurate in production.',
      'It eliminates all bias from the dataset.',
      'Scikit-learn automatically creates a new Test Set.',
    ],
    mcq2Explain: 'Selecting the winner from hundreds of trials on Test leaks test performance into model choice—always tune via CV on Train.',
    realWorldScenario:
      'Your Random Forest baseline gets 0.81 CV ROC-AUC with default settings (max_depth=None, min_samples_leaf=1) and 0.99 Train ROC-AUC. Which 2 hyperparameters do you tune first and in which direction?',
    interviewQ1: 'What is the exact difference between model parameters and hyperparameters?',
    interviewA1:
      'Model parameters (like regression weights or tree split thresholds) are estimated automatically from training data during .fit(). Hyperparameters (like regularization C, tree max_depth, or K in KNN) are external settings configured before training and chosen via validation/CV.',
    interviewQ2: 'Why should hyperparameter tuning happen AFTER baseline modeling and feature engineering?',
    interviewA2:
      'Optimal hyperparameters change whenever your feature set changes, and clean data + strong features typically deliver much larger gains than tuning a weak feature set.',
  },
  {
    id: 270,
    modNum: 25,
    modTitle: 'Model Evaluation and Improvement',
    topicNumInMod: 6,
    title: 'Grid Search and Random Search',
    subtitle: 'AUTOMATING HYPERPARAMETER SEARCH SMARTLY WITHOUT WASTING COMPUTE',
    coreEn:
      'Manually typing 50 different hyperparameter combos in a loop is slow and error-prone. GridSearchCV exhaustively tries EVERY combination in a small predefined grid using Cross-Validation. RandomizedSearchCV randomly samples N combinations from wider ranges—often finding a better model MUCH faster when only 1 or 2 knobs really matter!',
    coreHi:
      'Haath se 50 hyperparameter combos test karna slow aur boring hai. GridSearchCV chhoti grid ke HAR combination ko Cross-Validation se test karta hai. RandomizedSearchCV badi ranges mein se randomly N combos sample karta hai—aur jab sirf 1–2 knobs sabse zyada asar daalte hon toh yeh Grid Search se BAHUT tez aur behtar result deta hai!',
    analogyTitle: 'Searching a Large Beach for Buried Treasure',
    analogyEn:
      'Grid Search walks in rigid 1-meter squares covering every inch—great for a tiny backyard, painfully slow on a 5 km beach. Random Search samples smart scattered spots across the whole beach quickly, spotting the richest area fast so you can zoom in!',
    analogyHi:
      'Grid Search ek chhote aangan ka har inch naapne ke liye best hai, par 5 km lambe beach par bahut slow ho jaata hai. Random Search poore beach par smart scattered spots jaldi check karke best ilaka turant dhoondh leta hai!',
    steps: [
      {
        title: 'Define Pipeline & Parameter Space',
        en: 'Prefix step names with double underscores inside a Pipeline (e.g., "rf__max_depth": [4, 8, 12]).',
        hi: 'Pipeline mein double underscore syntax use karein (jaise "rf__max_depth": [4, 8, 12]).',
        tone: 'sky',
      },
      {
        title: 'Use Random Search First for Wide Exploration',
        en: 'When tuning 3+ hyperparameters or continuous ranges (like C = 0.001..100), run RandomizedSearchCV(n_iter=30).',
        hi: 'Jab 3+ hyperparameters ya continuous ranges hon toh pehle RandomizedSearchCV(n_iter=30) se wide search karein.',
        tone: 'amber',
      },
      {
        title: 'Zoom In With Tight GridSearchCV (Optional)',
        en: 'Once Random Search finds a promising neighborhood, optionally run a small focused GridSearchCV around it.',
        hi: 'Random Search se best area milne ke baad chaho toh uske aas-paas chhota focused GridSearchCV chala sakte hain.',
        tone: 'lavender',
      },
      {
        title: 'Inspect best_params_ & Evaluate Once on Test',
        en: 'Check cv_results_ (not just #1 winner—check std too!), then evaluate best_estimator_ once on X_test.',
        hi: 'cv_results_ aur best_params_ check karein, phir best_estimator_ ko ek baar X_test par evaluate karein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: RANDOMIZEDSEARCHCV WITH PIPELINE',
    code: `from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split, RandomizedSearchCV
from sklearn.ensemble import RandomForestClassifier
from sklearn.pipeline import Pipeline

X, y = make_classification(n_samples=400, n_features=12, random_state=42)
X_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2, stratify=y, random_state=42)

pipe = Pipeline([("rf", RandomForestClassifier(random_state=42))])
param_dist = {
    "rf__n_estimators": [50, 100, 150],
    "rf__max_depth": [3, 5, 8, 12, None],
    "rf__min_samples_leaf": [1, 2, 4, 8],
}

search = RandomizedSearchCV(pipe, param_dist, n_iter=10, cv=5, scoring="roc_auc", random_state=42)
search.fit(X_tr, y_tr)
print("Best Params:", search.best_params_)
print(f"Best CV AUC: {search.best_score_:.3f} | Test AUC: {search.score(X_te, y_te):.3f}")`,
    codeOutput: `Best Params: {'rf__n_estimators': 100, 'rf__max_depth': 8, 'rf__min_samples_leaf': 2}
Best CV AUC: 0.941 | Test AUC: 0.936`,
    codeCaptionEn: 'Instead of running 3×5×4 = 60 combos × 5 folds = 300 fits, Random Search explored 10 combos (50 fits) and hit 0.936 on Test!',
    codeCaptionHi: '3×5×4 = 60 combos (300 fits) chalane ke bajay, Random Search ne sirf 10 combos (50 fits) mein 0.936 Test AUC achieve kar liya!',
    tableTitle: 'GridSearchCV vs RandomizedSearchCV vs Bayesian Optimization',
    tableHeaders: ['Search Method', 'How It Explores', 'Total Fits (5-Fold)', 'When to Use'],
    tableRows: [
      ['GridSearchCV', 'Every exact grid combo', 'Combos × 5 (explodes fast!)', 'Small space (1–2 knobs, <= 25 combos)'],
      ['RandomizedSearchCV', 'Random samples from ranges', 'n_iter × 5 (you set budget!)', '3+ knobs or continuous log-scales (best general default)'],
      ['Bayesian (Optuna)', 'Learns from past trials to pick next', 'n_trials × 5 (smartest)', 'Expensive models (XGBoost/LightGBM/Deep Learning)'],
    ],
    tableNoteEn: 'Why Random Search beats Grid Search: in a 3×3 grid (9 trials), Grid only tests 3 distinct values of the important knob, while Random tests 9 distinct values!',
    tableNoteHi: 'Random Search ka secret: 9 trials mein 3×3 Grid important knob ki sirf 3 values check karta hai, jabki Random Search 9 alag values check kar leta hai!',
    mistakeEn: 'Building a giant GridSearchCV with 6 parameters × 5 values each = 15,625 combos × 5 folds = 78,125 model fits that freezes your laptop for a week!',
    mistakeHi: '6 parameters × 5 values = 15,625 combos ka giant GridSearchCV chala dena, jo laptop ko hafte bhar hang kar de!',
    proHabitEn: 'Always calculate total fits (combos × cv) before running, set n_jobs=-1 for parallel CPU cores, and start with RandomizedSearchCV.',
    proHabitHi: 'Run karne se pehle total fits (combos × cv) calculate karein, fast speed ke liye n_jobs=-1 lagayein, aur RandomizedSearchCV se start karein.',
    jobUseEn: 'Systematically tuning production pipelines on fixed compute budgets in notebooks and CI/CD training jobs.',
    jobUseHi: 'Fixed compute budget ke andar production ML pipelines ko systematically tune karne ke liye use hota hai.',
    mcq1Question: 'You have 4 hyperparameters, each with 5 candidate values, and you run 5-Fold GridSearchCV. How many total model trainings occur (excluding final refit)?',
    mcq1Correct: '3,125 trainings (5⁴ = 625 combinations × 5 folds)',
    mcq1Wrongs: [
      '20 trainings (4 × 5)',
      '100 trainings (4 × 5 × 5)',
      '25 trainings (5 × 5)',
    ],
    mcq1Explain: 'Grid search multiplies all parameter list lengths (5×5×5×5 = 625) and runs each across all 5 CV folds = 3,125 fits!',
    mcq2Question: 'Why does RandomizedSearchCV often outperform GridSearchCV under the same compute budget (say, 25 trials)?',
    mcq2Correct: 'Because it explores 25 unique values of every hyperparameter instead of repeatedly re-testing the same few grid coordinates on unimportant knobs.',
    mcq2Wrongs: [
      'Because RandomizedSearchCV skips Cross-Validation.',
      'Because GridSearchCV cannot tune Random Forest.',
      'Because RandomizedSearchCV uses the test set during search.',
    ],
    mcq2Explain: 'Most models are far more sensitive to 1 or 2 key hyperparameters; Random Search covers those key dimensions far more densely.',
    realWorldScenario:
      'You have 15 minutes before a meeting to tune 5 hyperparameters of a Gradient Boosting pipeline on 50,000 rows. Do you choose GridSearchCV or RandomizedSearchCV, and why?',
    interviewQ1: 'Explain why Bergstra & Bengio showed Random Search is usually superior to Grid Search.',
    interviewA1:
      'When some hyperparameters matter much more than others, a rigid grid wastes trials varying unimportant knobs while testing only a few distinct values of the critical knob. Random Search tests a unique value of every knob on every trial.',
    interviewQ2: 'What does refit=True (the default) do at the end of GridSearchCV / RandomizedSearchCV?',
    interviewA2:
      'After identifying the best hyperparameter combination via CV, it automatically retrains a fresh copy of that winning pipeline on 100% of X_train so search.predict() is immediately ready for testing.',
  },
  {
    id: 271,
    modNum: 25,
    modTitle: 'Model Evaluation and Improvement',
    topicNumInMod: 7,
    title: 'Data Leakage and Validation Errors',
    subtitle: 'CATCHING THE SILENT BUGS THAT MAKE BAD MODELS LOOK 99% ACCURATE OFFLINE',
    coreEn:
      'Data Leakage happens whenever information from outside the training set—such as test-set statistics, future timestamps, or post-event outcome columns—accidentally sneaks into model training. It makes your offline validation score look miraculously high (98%–99%), only for the model to crash catastrophically in real production!',
    coreHi:
      'Data Leakage tab hota hai jab training data ke bahar ki information—jaise test set ka mean/std, future dates, ya outcome ke baad banne wala column—galti se training mein ghus jaaye. Isse offline score chamaktar 98%–99% dikhta hai, par live production mein model buri tarah fail ho jaata hai!',
    analogyTitle: 'Accidentally Printing the Final Exam Answer Key Inside the Study Guide',
    analogyEn:
      'If a student practices with a study guide that accidentally contains tomorrow’s exact exam questions and answers, they score 100% on the mock test—but fail completely when facing a real unseen exam next semester. That is Data Leakage.',
    analogyHi:
      'Agar kisi student ki study guide mein galti se kal ke final exam ke exact sawal-jawab chhap jayein, toh woh mock test mein 100% le aayega—par jab agle semester mein asli naya paper aayega toh fail ho jaayega. Yahi Data Leakage hai.',
    steps: [
      {
        title: 'Split Data BEFORE Any Transform',
        en: 'Always run train_test_split() first—never scale, impute, encode, or run SMOTE on the full table before splitting.',
        hi: 'Hamesha pehle train_test_split() karein—split se pehle poore table par scaling, imputation, encoding ya SMOTE kabhi na chalayein.',
        tone: 'sky',
      },
      {
        title: 'Audit Every Column for Target/Future Leakage',
        en: 'Remove columns created AFTER the event (e.g., "Late_Fee_Charged" when predicting loan default, or "Antibiotic_Prescribed" when predicting infection).',
        hi: 'Event ke baad banne wale har column ko hatayein (jaise loan default predict karte waqt "Late_Fee_Charged" ya bimari ke liye "Medicine_Given").',
        tone: 'amber',
      },
      {
        title: 'Respect Time & Entity Groups in Splits',
        en: 'Use TimeSeriesSplit for time-ordered data and GroupKFold when the same user/patient appears in multiple rows.',
        hi: 'Time-ordered data mein TimeSeriesSplit aur repeated users/patients ke liye GroupKFold use karein.',
        tone: 'lavender',
      },
      {
        title: 'Investigate "Too Good to Be True" Scores',
        en: 'Whenever a brand-new model jumps straight to 0.99 AUC or one single feature has 95% importance, stop and audit for leakage immediately!',
        hi: 'Jab bhi koi naya model seedha 0.99 AUC de ya akela ek feature 95% importance le le, turant ruk kar leakage check karein!',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: LEAKY VS LEAK-FREE PREPROCESSING',
    code: `from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import make_pipeline
from sklearn.linear_model import LogisticRegression
import numpy as np

X = np.array([[10], [20], [30], [40], [50], [60], [70], [80]])
y = np.array([0, 0, 0, 0, 1, 1, 1, 1])

# BAD (Leaky): fitting scaler on ALL rows before split
# X_scaled = StandardScaler().fit_transform(X)  <-- NEVER DO THIS!

# GOOD (Leak-Free): split FIRST, then fit Pipeline ONLY on X_train
X_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.25, stratify=y, random_state=42)
pipe = make_pipeline(StandardScaler(), LogisticRegression())
pipe.fit(X_tr, y_tr)
print("Leak-free Test Accuracy:", pipe.score(X_te, y_te))`,
    codeOutput: `Leak-free Test Accuracy: 1.0`,
    codeCaptionEn: 'Wrapping StandardScaler inside make_pipeline guarantees .fit() sees ONLY X_train, while X_test only receives .transform().',
    codeCaptionHi: 'make_pipeline ke andar StandardScaler rakhne se .fit() sirf X_train dekhta hai, aur X_test par sirf .transform() chalta hai.',
    tableTitle: 'The 5 Most Common Data Leakage Traps in Industry',
    tableHeaders: ['Leakage Trap', 'What Went Wrong', 'Clean Fix'],
    tableRows: [
      ['Preprocessing Before Split', 'Scaler/Imputer/SMOTE fit on Train + Test combined', 'Split first; put all steps inside a Pipeline'],
      ['Target / Post-Event Column', 'Using "Refund_Amount" to predict "Will_Return"', 'Audit timestamp of every column vs prediction moment'],
      ['Temporal Leakage', 'Randomly shuffling time-series sales data', 'Use chronological split / TimeSeriesSplit'],
      ['Group / Duplicate Leakage', 'Same patient or exact duplicate rows in Train & Test', 'Deduplicate + use GroupKFold by entity_id'],
      ['Test-Set Tuning', 'Iterating 50 times directly on X_test', 'Lock X_test; tune strictly via CV on X_train'],
    ],
    tableNoteEn: 'Rule of thumb from senior ML engineers: if your first prototype gets 99.5% on a hard real-world problem, it’s almost certainly leakage—not magic!',
    tableNoteHi: 'Senior ML engineers ka golden rule: agar hard real-world problem par pehle hi din 99.5% score aa jaaye, toh yeh jaadu nahi—lagbhag pakka data leakage hai!',
    mistakeEn: 'Imputing missing values with df["age"].median() on the full DataFrame before calling train_test_split().',
    mistakeHi: 'train_test_split() se pehle poore DataFrame par df["age"].median() se missing values bhar dena.',
    proHabitEn: 'Put EVERY single data-dependent step (imputer, scaler, encoder, selector, SMOTE, model) inside a Pipeline fit strictly on training folds.',
    proHabitHi: 'Har data-dependent step (imputer, scaler, encoder, selector, SMOTE, model) ko Pipeline ke andar rakhein aur sirf training folds par fit karein.',
    jobUseEn: 'Saving companies from launching broken fraud, medical, or credit models that looked amazing in offline demos.',
    jobUseHi: 'Companies ko aise broken fraud, medical ya credit models launch karne se bachata hai jo offline demo mein 99% dikhte the.',
    mcq1Question: 'You are building a model to predict whether a hospital patient has pneumonia at admission time. Which feature is an example of Target Leakage?',
    mcq1Correct: 'Prescribed_Pneumonia_Antibiotic_Flag',
    mcq1Wrongs: [
      'Patient_Age_Years',
      'Body_Temperature_At_Admission',
      'Heart_Rate_At_Admission',
    ],
    mcq1Explain: 'Antibiotics are prescribed AFTER a doctor already diagnosed pneumonia—so the feature leaks the answer and will not exist at initial triage!',
    mcq2Question: 'Which coding pattern guarantees that StandardScaler NEVER leaks validation statistics during 5-Fold Cross-Validation?',
    mcq2Correct: 'Putting StandardScaler and the model inside a scikit-learn Pipeline passed to cross_val_score().',
    mcq2Wrongs: [
      'Running StandardScaler().fit_transform(X) before cross_val_score().',
      'Scaling X_test separately with its own fresh .fit_transform(X_test).',
      'Turning off random_state in train_test_split().',
    ],
    mcq2Explain: 'Inside a Pipeline, cross_val_score automatically fits the scaler on the 4 training folds and only transforms the 1 validation fold.',
    realWorldScenario:
      'Your customer churn model suddenly jumped from 0.81 AUC to 0.994 AUC after a teammate merged a new billing table. What is the very first thing you check?',
    interviewQ1: 'What is the difference between Target Leakage and Train-Test Contamination?',
    interviewA1:
      'Target leakage occurs when a feature contains information created after the target event (unavailable at inference time). Train-test contamination happens when test/validation data leaks into training during preprocessing, resampling (SMOTE), or duplicate/group splitting.',
    interviewQ2: 'Why is calling StandardScaler().fit_transform(X_test) separately on the test set ALSO wrong?',
    interviewA2:
      'Because the model expects features shifted and scaled using the training set’s exact mean and standard deviation—fitting a new scaler on X_test changes the coordinate system (and fails completely for a single live prediction row!).',
  },
  {
    id: 272,
    modNum: 25,
    modTitle: 'Model Evaluation and Improvement',
    topicNumInMod: 8,
    title: 'Error Analysis',
    subtitle: 'INSPECTING YOUR MODEL’S WORST MISTAKES TO DISCOVER THE FASTEST IMPROVEMENTS',
    coreEn:
      'Overall metrics (like 88% F1 or ₹6L RMSE) tell you HOW MUCH error your model makes, but NOT WHY. Error Analysis is the disciplined practice of pulling the 20–50 worst validation mistakes, inspecting those exact rows, grouping them into root-cause buckets (bad labels, missing feature, specific subgroup), and fixing the highest-impact bucket first!',
    coreHi:
      'Overall metrics (jaise 88% F1 ya ₹6L RMSE) sirf yeh batate hain ki galti KITNI hai, yeh nahi ki KYUN ho rahi hai. Error Analysis ka matlab hai validation set ki 20–50 sabse badi galtiyon ko khol kar dekhna, unhe root-cause categories mein baantna (galat label, missing feature, specific subgroup), aur sabse badi problem ko pehle fix karna!',
    analogyTitle: 'Exam Paper Review With a Red Pen After Getting 82/100',
    analogyEn:
      'A smart student who scores 82/100 doesn’t blindly re-read the whole textbook. They inspect the 18 lost marks and discover: 12 marks were lost on Trigonometry formulas, 4 on silly sign errors, and 2 on one unreadable question. Now they know fixing Trigonometry alone jumps them to 94!',
    analogyHi:
      '82/100 laane wala smart student poori kitaab dobara nahi ratta. Woh kate hue 18 number check karta hai: 12 number Trigonometry mein gaye, 4 silly calculation mein, aur 2 galat sawal mein. Ab use seedha pata hai ki sirf Trigonometry sudharne se score 94 pahunch jaayega!',
    steps: [
      {
        title: 'Pull Worst Mistakes From Validation Set Only',
        en: 'Sort validation rows by largest |y − ŷ| (regression) or highest-confidence wrong probabilities (classification)—NEVER inspect X_test!',
        hi: 'Validation set (X_test nahi!) se sabse bade |y − ŷ| errors ya high-confidence galat predictions nikalen.',
        tone: 'sky',
      },
      {
        title: 'Slice Performance Across Subgroups',
        en: 'Compute error separately by City, Device, Price Tier, or User Age to spot where the model silently underperforms.',
        hi: 'City, Device, Price Tier, ya Age ke hisaab se alag-alag error check karein taaki hidden weak subgroups pakde jayein.',
        tone: 'amber',
      },
      {
        title: 'Categorize 30–50 Errors by Root Cause',
        en: 'Tally causes in a simple table: e.g., 45% missing key signal, 30% noisy/wrong ground-truth labels, 25% rare subgroup.',
        hi: '30–50 errors ko root cause table mein ginein: jaise 45% missing signal, 30% galat labels, 25% rare subgroup.',
        tone: 'lavender',
      },
      {
        title: 'Fix the #1 Root Cause & Re-Verify on CV',
        en: 'Target the biggest error bucket with a new feature, label cleanup, or targeted data collection, then measure CV gain.',
        hi: 'Sabse bade error bucket par naya feature, label cleaning, ya naya data lagakar CV improvement verify karein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / PANDAS: SLICED ERROR ANALYSIS ON VALIDATION SET',
    code: `import pandas as pd

val_df = pd.DataFrame({
    "segment": ["Metro", "Metro", "Tier-2", "Tier-2", "Rural", "Rural"],
    "y_true":  [50, 62, 30, 35, 18, 22],
    "y_pred":  [51, 60, 29, 36, 31, 37],
})
val_df["abs_err"] = (val_df["y_true"] - val_df["y_pred"]).abs()

print("Overall MAE:", val_df["abs_err"].mean().round(2))
print("\nMAE by Segment:")
print(val_df.groupby("segment")["abs_err"].mean().round(2))`,
    codeOutput: `Overall MAE: 5.5

MAE by Segment:
segment
Metro     1.5
Rural    14.0
Tier-2    1.0`,
    codeCaptionEn: 'Overall MAE (5.5) hid the real story: Metro (1.5) and Tier-2 (1.0) are nearly perfect, while Rural (14.0) causes almost ALL the error!',
    codeCaptionHi: 'Overall MAE (5.5) ne asli baat chhupa li thi: Metro (1.5) aur Tier-2 (1.0) shandaar hain, par Rural (14.0) akele saari error paida kar raha hai!',
    tableTitle: 'Sample Error Analysis Spreadsheet (50 Validation Mistakes)',
    tableHeaders: ['Root Cause Category', 'Error Count (out of 50)', 'Share', 'Targeted Action'],
    tableRows: [
      ['Rural properties lacking distance-to-highway feature', '24', '48%', 'Engineer distance_to_highway + collect rural samples'],
      ['Corrupted / mistyped ground-truth labels (e.g., ₹5L instead of ₹50L)', '14', '28%', 'Fix data ingestion validation & clean training labels'],
      ['Luxury penthouses (> ₹4 Cr outlier tier)', '8', '16%', 'Apply log1p(price) target transform'],
      ['Genuine unpredictable human negotiation', '4', '8%', 'Irreducible noise — accept'],
    ],
    tableNoteEn: 'Notice you should ONLY run Error Analysis on the Validation Set—inspecting X_test to engineer fixes leaks the Test Set!',
    tableNoteHi: 'Yaad rakhein: Error Analysis sirf Validation Set par karein—X_test dekh kar fixes banane se Test Set contaminate ho jaata hai!',
    mistakeEn: 'Blindly trying 12 new algorithms from GitHub when 40% of your validation errors are caused by a single broken feature or mislabeled subgroup.',
    mistakeHi: 'Bina galtiyan dekhe 12 naye algorithms try karte rehna jabki 40% errors ek broken feature ya galat labels ki wajah se ho rahi hon.',
    proHabitEn: 'After every baseline, spend 30 minutes inspecting the top 30 validation errors and slicing metrics by key business segments.',
    proHabitHi: 'Har baseline ke baad 30 minute nikal kar top 30 validation errors aur segment-wise metrics zaroor check karein.',
    jobUseEn: 'Driving targeted, data-centric ML improvements and catching fairness/bias gaps across customer demographics before launch.',
    jobUseHi: 'Data-centric ML improvements lane aur launch se pehle customer subgroups mein bias/fairness gaps pakadne mein use hota hai.',
    mcq1Question: 'In the worked Python example above, overall MAE was 5.5, yet Metro MAE was 1.5 and Rural MAE was 14.0. What is the smartest next step?',
    mcq1Correct: 'Investigate why Rural predictions are systematically high (e.g., missing rural-specific features or insufficient rural training samples).',
    mcq1Wrongs: [
      'Delete all Rural rows from the test set so MAE looks better.',
      'Immediately switch from Random Forest to Deep Learning without checking data.',
      'Ignore it because 5.5 overall MAE looks acceptable.',
    ],
    mcq1Explain: 'Sliced error analysis pinpoints the exact bottleneck—fixing Rural features/data will dramatically improve real-world performance.',
    mcq2Question: 'Which dataset split should you use when performing Error Analysis to guide feature engineering?',
    mcq2Correct: 'The Validation Set (or out-of-fold CV predictions), keeping the Test Set completely untouched.',
    mcq2Wrongs: [
      'The final locked Test Set.',
      'Only the rows the model predicted correctly.',
      'Unlabeled production rows without ground truth.',
    ],
    mcq2Explain: 'Inspecting the Test Set to design features leaks test knowledge into your modeling decisions; always analyze out-of-fold validation errors.',
    realWorldScenario:
      'Your speech-to-text model has 94% accuracy overall, but customer complaints are spiking in South India. How do you use Sliced Error Analysis to diagnose and fix this?',
    interviewQ1: 'Walk through how you perform Error Analysis on a classification model.',
    interviewA1:
      'Pull out-of-fold validation False Positives and False Negatives (especially high-confidence mistakes), slice metrics across key business subgroups, manually categorize 30–50 errors into root causes (missing signal, label noise, edge cases), and prioritize fixing the largest bucket.',
    interviewQ2: 'Why is Error Analysis also critical for Responsible AI and Fairness?',
    interviewA2:
      'Aggregate accuracy can mask severe error disparities on minority or underserved subgroups; slicing Precision, Recall, and MAE by subgroup catches unfairness before deployment.',
  },
  {
    id: 273,
    modNum: 25,
    modTitle: 'Model Evaluation and Improvement',
    topicNumInMod: 9,
    title: 'Model Interpretability Basics',
    subtitle: 'OPENING THE BLACK BOX TO EXPLAIN WHY A MODEL MADE EACH PREDICTION',
    coreEn:
      'In banking, healthcare, and hiring, a prediction without a reason is often unusable—or even illegal. Model Interpretability explains BOTH Global behavior ("Which features matter most overall across all customers?") and Local behavior ("Why specifically was Rahul’s loan application declined today?") using linear weights, Permutation Importance, and SHAP values.',
    coreHi:
      'Banking, healthcare aur hiring mein bina kaaran bataye prediction dena aksar useless ya illegal hota hai. Model Interpretability dono sawalon ka jawab deti hai: Global ("Pure model mein kaunse features sabse zyada zaroori hain?") aur Local ("Specifically Rahul ka loan aaj kyun reject hua?")—linear weights, Permutation Importance, aur SHAP values ki madad se.',
    analogyTitle: 'Doctor Showing Both General Risk Factors AND Your Specific Lab Report',
    analogyEn:
      'Global interpretability is a doctor saying, "Overall, smoking and high cholesterol are the top drivers of heart risk." Local interpretability is pointing to YOUR personal chart: "Your risk is elevated today specifically because your blood pressure (+15%) and sugar (+10%) are high, even though your exercise (−8%) helps."',
    analogyHi:
      'Global interpretability aisi hai jaise doctor kahe, "Aam taur par smoking aur cholesterol heart risk badhate hain." Local interpretability aapki personal report par batati hai: "Aapka risk aaj high BP (+15%) aur sugar (+10%) ki wajah se badha hai, jabki roz exercise (−8%) aapko bacha rahi hai."',
    steps: [
      {
        title: 'Choose Inherently Interpretable Models When Possible',
        en: 'If a scaled Logistic/Ridge Regression or shallow tree matches a complex ensemble, pick the transparent model!',
        hi: 'Agar Logistic/Ridge ya shallow tree complex ensemble jitna hi accha score de, toh transparent model hi choose karein!',
        tone: 'sky',
      },
      {
        title: 'Measure Global Importance on Validation Set',
        en: 'Use permutation_importance(model, X_val, y_val) to see how much unseen score drops when each feature is shuffled.',
        hi: 'Validation set par permutation_importance chala kar dekhein ki har feature shuffle karne par unseen score kitna girta hai.',
        tone: 'amber',
      },
      {
        title: 'Explain Individual Predictions Locally (SHAP / LIME)',
        en: 'Use SHAP values to break down one single prediction into exact positive and negative feature contributions summing to the output.',
        hi: 'SHAP values use karke ek single prediction ko har feature ke exact + ya − contribution mein tod kar samjhayein.',
        tone: 'lavender',
      },
      {
        title: 'Sanity-Check Explanations Against Domain Logic',
        en: 'If the #1 driver is a weird ID or proxy column, you just caught a hidden bug or leakage before launch!',
        hi: 'Agar #1 driver koi ajeeb ID ya proxy column nikle, toh aapne launch se pehle hi ek bada bug ya leakage pakad liya!',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: VALIDATION PERMUTATION IMPORTANCE',
    code: `from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.inspection import permutation_importance

# Only feature_0 and feature_1 are informative; feature_2..4 are pure noise
X, y = make_classification(n_samples=400, n_features=5, n_informative=2, n_redundant=0, shuffle=False, random_state=42)
X_tr, X_val, y_tr, y_val = train_test_split(X, y, test_size=0.25, stratify=y, random_state=42)

rf = RandomForestClassifier(n_estimators=100, random_state=42).fit(X_tr, y_tr)
perm = permutation_importance(rf, X_val, y_val, n_repeats=10, random_state=42)

for i, imp in enumerate(perm.importances_mean):
    print(f"feature_{i} importance drop: {imp:+.3f}")`,
    codeOutput: `feature_0 importance drop: +0.285
feature_1 importance drop: +0.162
feature_2 importance drop: -0.004
feature_3 importance drop: +0.002
feature_4 importance drop: +0.000`,
    codeCaptionEn: 'Shuffling feature_0 or feature_1 tanks validation accuracy (+28.5% / +16.2% drop), while shuffling noise features 2–4 does nothing (~0.0)!',
    codeCaptionHi: 'feature_0 aur feature_1 shuffle karne par validation accuracy tezi se girti hai, jabki noise features 2–4 par koi asar nahi (~0.0)!',
    tableTitle: 'Global vs Local Interpretability Tools at a Glance',
    tableHeaders: ['Tool / Technique', 'Scope', 'Works On', 'Plain-English Output'],
    tableRows: [
      ['Linear / Logistic Weights', 'Global & Local', 'Linear models only (scaled)', 'Exact +/- effect per unit change'],
      ['Permutation Importance', 'Global', 'ANY model (model-agnostic)', 'Validation score drop when feature is shuffled'],
      ['Partial Dependence Plot (PDP)', 'Global', 'ANY model', 'Curve showing average prediction as 1 feature varies'],
      ['SHAP Values', 'Both Global & Local', 'TreeSHAP (fast) / Any model', 'Exact +/- contribution of every feature to 1 prediction'],
    ],
    tableNoteEn: 'Caution: Interpretability shows what the MODEL relied on (correlation), NOT necessarily real-world cause-and-effect (causation)!',
    tableNoteHi: 'Savdhani: Interpretability batati hai ki MODEL ne kis par bharosa kiya (correlation), iska matlab hamesha real-world causation nahi hota!',
    mistakeEn: 'Telling a business executive "Feature X causes churn" purely because Feature X had high SHAP or permutation importance.',
    mistakeHi: 'Sirf high SHAP ya permutation importance dekh kar business ko keh dena ki "Feature X ki wajah se hi churn ho raha hai (causation)".',
    proHabitEn: 'Always run permutation_importance on X_val (never just training impurity importance) and generate SHAP local explanations for high-stakes decisions.',
    proHabitHi: 'Hamesha X_val par permutation_importance chalayein aur high-stakes decisions (loan, health) ke liye SHAP local explanations dikhayein.',
    jobUseEn: 'Generating legally required "adverse action reason codes" for declined loans, debugging models, and building executive trust.',
    jobUseHi: 'Loan reject hone par zaroori reason codes dene, models debug karne, aur leadership ka bharosa jeetne mein use hota hai.',
    mcq1Question: 'What is the difference between Global and Local model interpretability?',
    mcq1Correct: 'Global explains overall feature behavior across the entire dataset; Local explains why the model made one specific individual prediction.',
    mcq1Wrongs: [
      'Global is for regression and Local is for classification.',
      'Global runs on cloud servers and Local runs on laptops.',
      'Global uses accuracy and Local uses RMSE.',
    ],
    mcq1Explain: 'Global shows overall top drivers; Local explains a single row (e.g., why Customer #4821 got a 0.87 churn probability).',
    mcq2Question: 'Why is Permutation Importance computed on the VALIDATION set rather than the training set?',
    mcq2Correct: 'Because a feature that only helped memorize training noise will show zero (or negative) importance on unseen validation data.',
    mcq2Wrongs: [
      'Because training sets cannot be shuffled in Python.',
      'Because Permutation Importance only works on 10 rows.',
      'Because validation sets have no target column.',
    ],
    mcq2Explain: 'Evaluating shuffled features on validation reveals which columns genuinely help generalization.',
    realWorldScenario:
      'A bank’s Random Forest declines Priya’s credit card application. Regulators require listing the top 3 reasons specific to Priya’s application. Which interpretability tool gives you those exact per-customer reasons?',
    interviewQ1: 'Explain how SHAP values work at a high level.',
    interviewA1:
      'Rooted in cooperative game theory (Shapley values), SHAP fairly distributes the difference between a specific prediction and the baseline average prediction across all features—showing each feature’s exact positive or negative push.',
    interviewQ2: 'What happens to Permutation Importance if two input features are 99% correlated (near duplicates)?',
    interviewA2:
      'Both features can look artificially unimportant! When you shuffle Feature A, the model still gets the exact same signal from its twin Feature B, so validation score barely drops—always check collinearity alongside permutation importance.',
  },
  {
    id: 274,
    modNum: 25,
    modTitle: 'Model Evaluation and Improvement',
    topicNumInMod: 10,
    title: 'Building a Reproducible ML Pipeline',
    subtitle: 'BUNDLING EVERY PREPROCESSING AND MODEL STEP INTO ONE LEAK-FREE, REPEATABLE OBJECT',
    coreEn:
      'A Reproducible ML Pipeline combines all data transformations (imputation, scaling, encoding, feature selection) and the final estimator into a single scikit-learn Pipeline + ColumnTransformer object—with pinned random seeds, locked library versions, and zero manual notebook-cell guesswork—so anyone on your team gets the exact same result every run.',
    coreHi:
      'Reproducible ML Pipeline aapke saare preprocessing steps (imputation, scaling, encoding, feature selection) aur final model ko EK hi scikit-learn Pipeline + ColumnTransformer object mein bandh deta hai—fixed random seeds aur locked library versions ke saath—taaki aapki team ka koi bhi member chalaye toh exact same leak-free result mile.',
    analogyTitle: 'Automated Car Assembly Line vs Random Hand-Built Garage Parts',
    analogyEn:
      'If a mechanic hand-builds a car from scattered notes ("maybe tighten bolt 4 before painting"), no two cars come out identical. A factory assembly line (Pipeline) runs every car through the exact same ordered stations automatically—zero skipped steps, 100% repeatable.',
    analogyHi:
      'Agar koi mechanic bikhre hue notes se haath se car banaye toh har car alag banegi aur koi step chhoot sakta hai. Factory assembly line (Pipeline) har car ko exact same order mein stations se guzaarti hai—zero galti, 100% repeatable!',
    steps: [
      {
        title: 'Separate Numeric & Categorical Transformers',
        en: 'Use ColumnTransformer to route numeric columns to (Imputer -> Scaler) and categoricals to (Imputer -> OneHotEncoder).',
        hi: 'ColumnTransformer se numeric columns ko (Imputer -> Scaler) aur categoricals ko (Imputer -> OneHotEncoder) par route karein.',
        tone: 'sky',
      },
      {
        title: 'Chain Preprocessor + Estimator in One Pipeline',
        en: 'Create Pipeline([("prep", preprocessor), ("model", estimator)]) so one .fit() and one .predict() handle everything.',
        hi: 'Pipeline([("prep", preprocessor), ("model", estimator)]) banayein taaki ek hi .fit() aur .predict() sab kuch sambhale.',
        tone: 'amber',
      },
      {
        title: 'Pin Random Seeds & Package Versions',
        en: 'Set random_state everywhere (splits, CV, models) and freeze dependencies in requirements.txt.',
        hi: 'Har jagah random_state fix karein (splits, CV, models) aur requirements.txt mein library versions freeze karein.',
        tone: 'lavender',
      },
      {
        title: 'Test Fresh End-to-End Execution',
        en: 'Run your training script or notebook top-to-bottom in a clean environment to verify identical metrics on unseen test data.',
        hi: 'Clean environment mein script ko shuru se aakhir tak chalakar verify karein ki unseen test metrics exact same aate hain.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / SCIKIT-LEARN: FULL REPRODUCIBLE COLUMNTRANSFORMER PIPELINE',
    code: `import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.linear_model import LogisticRegression

df = pd.DataFrame({
    "age": [24, None, 45, 52, 29, 48, 31, 55],
    "city": ["Delhi", "Mumbai", "Delhi", "Pune", "Mumbai", "Pune", "Delhi", "Pune"],
    "bought": [0, 0, 1, 1, 0, 1, 0, 1]
})
X_tr, X_te, y_tr, y_te = train_test_split(df[["age", "city"]], df["bought"], test_size=0.25, stratify=df["bought"], random_state=42)

prep = ColumnTransformer([
    ("num", Pipeline([("imp", SimpleImputer(strategy="median")), ("sc", StandardScaler())]), ["age"]),
    ("cat", Pipeline([("imp", SimpleImputer(strategy="most_frequent")), ("ohe", OneHotEncoder(handle_unknown="ignore"))]), ["city"]),
])
full_pipe = Pipeline([("prep", prep), ("clf", LogisticRegression(random_state=42))])
full_pipe.fit(X_tr, y_tr)
print("Reproducible Test Score:", full_pipe.score(X_te, y_te))`,
    codeOutput: `Reproducible Test Score: 1.0`,
    codeCaptionEn: 'Missing age, unseen cities, scaling, and classification all live inside ONE single object—impossible to forget a step in production!',
    codeCaptionHi: 'Missing age, nayi cities, scaling, aur classification sab EK hi object ke andar hain—production mein koi step bhoolna namumkin hai!',
    tableTitle: 'Messy Ad-Hoc Notebook vs Reproducible ML Pipeline',
    tableHeaders: ['Dimension', 'Messy Ad-Hoc Notebook', 'Reproducible ML Pipeline'],
    tableRows: [
      ['Data Leakage Risk', 'High (manual scaling/encoding before CV)', 'Zero (transforms refit inside each CV fold)'],
      ['Training-Serving Skew', 'High (easy to forget scaling in live API)', 'Zero (same exact Pipeline runs .predict() live)'],
      ['Team Collaboration', 'Breaks when cells run out of order', 'Runs cleanly top-to-bottom on any machine'],
      ['Hyperparameter Tuning', 'Painful nested loops', 'Plug straight into RandomizedSearchCV / GridSearchCV'],
    ],
    tableNoteEn: 'Training-serving skew—when live production code preprocesses inputs slightly differently from training code—is one of the #1 bugs Pipelines eliminate!',
    tableNoteHi: 'Training-serving skew—jab live production code aur training code mein preprocessing thodi alag ho jaaye—Pipeline is bug ko jad se khatam kar deti hai!',
    mistakeEn: 'Leaving scattered df["col"] = ... edits across 40 out-of-order Jupyter cells and expecting engineers to rewrite them in production.',
    mistakeHi: '40 out-of-order Jupyter cells mein bikhri hui preprocessing chhod dena aur production mein use manually dobara likhna.',
    proHabitEn: 'Build EVERY ML project around a scikit-learn Pipeline + ColumnTransformer from day 1, with fixed random_state and versioned requirements.txt.',
    proHabitHi: 'Har ML project ko day 1 se hi scikit-learn Pipeline + ColumnTransformer par banayein, fixed random_state aur requirements.txt ke saath.',
    jobUseEn: 'Handing off clean, production-ready ML artifacts from Data Scientists to MLOps / Backend Engineers smoothly.',
    jobUseHi: 'Data Scientists se MLOps aur Backend Engineers ko clean, bug-free ML artifacts hand off karne ka industry standard hai.',
    mcq1Question: 'What is "Training-Serving Skew" and how does a scikit-learn Pipeline prevent it?',
    mcq1Correct: 'It is a mismatch between how data is preprocessed during training vs live prediction; a Pipeline bundles preprocessing and model together so identical transforms always execute.',
    mcq1Wrongs: [
      'It is when a column has a right-skewed histogram.',
      'It is when training takes longer than 10 minutes.',
      'It happens only in Unsupervised Clustering.',
    ],
    mcq1Explain: 'Saving and serving the entire Pipeline guarantees live API inputs go through the exact same imputer, scaler, and encoder learned during training.',
    mcq2Question: 'Why is ColumnTransformer so useful inside a scikit-learn Pipeline?',
    mcq2Correct: 'It applies different preprocessing pipelines to different column types (e.g., scaling numerics while one-hot encoding categoricals) in parallel without leakage.',
    mcq2Wrongs: [
      'It deletes all text columns automatically.',
      'It increases the number of rows in the dataset.',
      'It replaces Cross-Validation completely.',
    ],
    mcq2Explain: 'Real tabular datasets mix numbers and categories; ColumnTransformer routes each group cleanly to its proper transformers.',
    realWorldScenario:
      'A teammate trained a great model in a Jupyter Notebook, saved ONLY the RandomForest object, and handed it to backend engineers. Live predictions are completely wrong. What critical pieces were missing?',
    interviewQ1: 'What are the three biggest benefits of using scikit-learn Pipelines in ML projects?',
    interviewA1:
      '1) Prevents data leakage during cross-validation and tuning, 2) eliminates training-serving skew by packaging preprocessing with the estimator, and 3) makes code clean, modular, and directly compatible with GridSearchCV/RandomizedSearchCV.',
    interviewQ2: 'Beyond setting random_state, what else is needed for true ML reproducibility?',
    interviewA2:
      'Versioned dataset snapshots (or query hashes), pinned Python and library versions (requirements.txt / lockfile), Git commit hashes for code, and logged hyperparameters/metrics.',
  },
  {
    id: 275,
    modNum: 25,
    modTitle: 'Model Evaluation and Improvement',
    topicNumInMod: 11,
    title: 'Saving and Loading Models',
    subtitle: 'SERIALIZING YOUR COMPLETE TRAINED PIPELINE FOR REAL-WORLD REUSE AND DEPLOYMENT',
    coreEn:
      'Training a model can take minutes or hours, so you never retrain from scratch every time a user clicks a button. Saving (Serialization) writes your ENTIRE trained Pipeline (preprocessing + model) to disk using joblib (or ONNX for cross-language speed). Loading (Deserialization) restores that exact pipeline in milliseconds to serve live predictions—while verifying version compatibility and security.',
    coreHi:
      'Model train karne mein minute ya ghante lag sakte hain, isliye har user click par dobara train nahi karte. Saving (Serialization) aapki POORI trained Pipeline (preprocessing + model) ko joblib (ya cross-language ONNX) se disk par save kar deti hai. Loading (Deserialization) use milliseconds mein wapas load karke live predictions deti hai.',
    analogyTitle: 'Freezing a Cooked Gourmet Meal vs Cooking From Raw Vegetables Every Time',
    analogyEn:
      'You wouldn’t grow wheat and grind flour every time a customer orders a samosa. You prepare and pack the complete recipe once (joblib.dump), store it labeled with a date and version tag, and heat-and-serve instantly (joblib.load) whenever an order arrives!',
    analogyHi:
      'Har customer ke aane par koi shuru se gehun pees kar khana nahi banata. Aap poori dish ek baar taiyar karke date aur version tag ke saath pack kar lete hain (joblib.dump), aur jab bhi order aaye turant serve kar dete hain (joblib.load)!',
    steps: [
      {
        title: 'Save the ENTIRE Pipeline (Not Just the Model!)',
        en: 'Always serialize the full Pipeline (ColumnTransformer + Model) so live raw inputs transform identically.',
        hi: 'Hamesha poori Pipeline (ColumnTransformer + Model) save karein, sirf akela model nahi!',
        tone: 'sky',
      },
      {
        title: 'Use joblib.dump() With Versioned Metadata',
        en: 'Save as e.g. churn_pipeline_v1.2.joblib alongside a JSON metadata card (scikit-learn version, schema, test metrics, date).',
        hi: 'churn_pipeline_v1.2.joblib naam se save karein aur saath mein metadata JSON (scikit-learn version, columns, test metrics) rakhein.',
        tone: 'amber',
      },
      {
        title: 'Verify Round-Trip Reload Predictions',
        en: 'Immediately load the saved file back with joblib.load() and assert loaded predictions match original predictions on sample test rows.',
        hi: 'Turant joblib.load() se file wapas load karein aur assert karein ki reloaded predictions original predictions se 100% match karti hain.',
        tone: 'lavender',
      },
      {
        title: 'Follow Security & Compatibility Rules',
        en: 'NEVER load untrusted pickle/joblib files from strangers (arbitrary code execution risk!), and match scikit-learn versions between train and serve.',
        hi: 'Kabhi kisi unknown source ki pickle/joblib file load na karein (security risk!), aur train-serve mein scikit-learn version match rakhein.',
        tone: 'green',
      },
    ],
    codeLabel: 'PYTHON / JOBLIB: SAVE, RELOAD & VERIFY FULL ML PIPELINE',
    code: `import joblib, numpy as np
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

X_tr = np.array([[10], [20], [80], [90]])
y_tr = np.array([0, 0, 1, 1])

pipe = make_pipeline(StandardScaler(), LogisticRegression()).fit(X_tr, y_tr)
orig_pred = pipe.predict([[85]])[0]

# Save complete pipeline to disk
joblib.dump(pipe, "sales_pipeline_v1.joblib")

# Load back later (e.g., inside a FastAPI server) & verify
loaded_pipe = joblib.load("sales_pipeline_v1.joblib")
reloaded_pred = loaded_pipe.predict([[85]])[0]

assert orig_pred == reloaded_pred
print(f"Saved & verified! Original: {orig_pred} | Reloaded: {reloaded_pred}")`,
    codeOutput: `Saved & verified! Original: 1 | Reloaded: 1`,
    codeCaptionEn: 'joblib is preferred over plain pickle for scikit-learn because it handles large NumPy arrays much faster and more efficiently.',
    codeCaptionHi: 'Scikit-learn ke liye plain pickle se zyada joblib pasand kiya jaata hai kyunki yeh bade NumPy arrays ko zyada fast save/load karta hai.',
    tableTitle: 'Model Serialization Formats Compared',
    tableHeaders: ['Format', 'Best For', 'Cross-Language?', 'Security Note'],
    tableRows: [
      ['joblib (.joblib)', 'Scikit-learn / NumPy pipelines in Python', 'No (Python + same sklearn version)', 'Never load untrusted files!'],
      ['pickle (.pkl)', 'General Python objects', 'No (Python only)', 'Never load untrusted files!'],
      ['ONNX (.onnx)', 'High-speed production APIs (C++, Java, JS, Python)', 'Yes (portable standard!)', 'Safer graph format; fast inference'],
      ['skops (.skops)', 'Safer scikit-learn model sharing (Hugging Face)', 'Python (scikit-learn)', 'Inspects trusted types before loading'],
    ],
    tableNoteEn: 'Always store a small schema/metadata JSON next to your .joblib file listing exact expected column names, dtypes, and training scikit-learn version!',
    tableNoteHi: 'Apni .joblib file ke saath hamesha ek chhoti metadata JSON file rakhein jisme exact column names, dtypes, aur scikit-learn version likha ho!',
    mistakeEn: 'Saving only the bare classifier without its scaler/encoder, or loading a .joblib file trained on scikit-learn 1.1 inside a server running scikit-learn 1.6.',
    mistakeHi: 'Scaler/encoder ke bina sirf classifier save karna, ya purane scikit-learn version mein bani .joblib file ko naye version par bina test kiye chalana.',
    proHabitEn: 'Always save the complete Pipeline, run an automated round-trip assertion test, pin exact library versions in Docker/requirements.txt, and never unpickle untrusted files.',
    proHabitHi: 'Hamesha poori Pipeline save karein, reload assertion test chalayein, Docker/requirements.txt mein versions lock karein, aur untrusted files load na karein.',
    jobUseEn: 'Deploying trained ML models behind FastAPI/Flask REST APIs, batch scoring pipelines, and cloud model registries (MLflow).',
    jobUseHi: 'Trained ML models ko FastAPI/Flask APIs, batch scoring jobs, aur MLflow model registries mein deploy karne ka aakhiri essential step hai.',
    mcq1Question: 'Why should you save the ENTIRE scikit-learn Pipeline instead of saving only the final trained RandomForest or LogisticRegression object?',
    mcq1Correct: 'So that live raw inputs automatically undergo the exact same imputation, scaling, and encoding learned during training.',
    mcq1Wrongs: [
      'Because joblib refuses to save a standalone RandomForest.',
      'Because saving a Pipeline automatically doubles test accuracy.',
      'Because Pipelines do not require Python to load.',
    ],
    mcq1Explain: 'Without the fitted transformers, raw production inputs will have missing values, unscaled units, or raw category strings that crash or corrupt predictions.',
    mcq2Question: 'What is a major security warning when loading .pkl or .joblib model files?',
    mcq2Correct: 'Pickle/joblib deserialization can execute arbitrary malicious code—never load files from untrusted sources.',
    mcq2Wrongs: [
      'Joblib files delete your training CSV after loading.',
      'Joblib files expire after 24 hours.',
      'Loading a joblib file automatically retrains the model.',
    ],
    mcq2Explain: 'Python’s pickle protocol (used under the hood by joblib) can invoke arbitrary callables on load; use trusted registries, skops, or ONNX for external models.',
    realWorldScenario:
      'Your Python data science team trained a scikit-learn fraud pipeline, but the bank’s payment gateway is written in Java and requires <5 ms inference. Which serialization format should you explore?',
    interviewQ1: 'Why is joblib generally preferred over Python’s built-in pickle for saving scikit-learn models?',
    interviewA1:
      'joblib is specifically optimized for objects containing large NumPy arrays (like tree structures and weight matrices), making disk reads/writes significantly faster and supporting built-in compression.',
    interviewQ2: 'What best practices do you follow when versioning and loading models in production?',
    interviewA2:
      'Save the complete preprocessing+model Pipeline with semantic version tags, store companion metadata (feature schema, sklearn version, CV/Test metrics), run a reload prediction equivalence test in CI, and match runtime dependencies via Docker.',
  },
];
