export interface TopicItem {
  id: string;
  topicNum: number;
  title: string;
  duration: string;
  type: 'video' | 'quiz' | 'project' | 'reading';
  status: 'completed' | 'in-progress' | 'locked';
}

export interface ChapterItem {
  id: string;
  chapterNum: number;
  title: string;
  subtitle: string;
  topics: TopicItem[];
}

export interface TabItem {
  id: string;
  tabNum: number;
  title: string;
  shortTitle: string;
  subtitle: string;
  iconName: string;
  isFree?: boolean;
  chapters: ChapterItem[];
}

export const DEEP_LEARNING_CURRICULUM: TabItem[] = [
  {
    "id": "tab-1",
    "tabNum": 1,
    "title": "Deep Learning Foundations",
    "shortTitle": "Deep Learning Foundations",
    "subtitle": "Core AI vs ML vs DL concepts, calculus intuition, Python and GPU dev environments.",
    "iconName": "genai",
    "isFree": true,
    "chapters": [
      {
        "id": "mod-1",
        "chapterNum": 1,
        "title": "Module 1: Introduction to Deep Learning",
        "subtitle": "Core concepts and practical exercises for Introduction to Deep Learning.",
        "topics": [
          {
            "id": "dl-t-1",
            "topicNum": 1,
            "title": "What Is Artificial Intelligence?",
            "duration": "Quiz • 12 min",
            "type": "quiz",
            "status": "completed"
          },
          {
            "id": "dl-t-2",
            "topicNum": 2,
            "title": "What Is Machine Learning?",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "dl-t-3",
            "topicNum": 3,
            "title": "What Is Deep Learning?",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "dl-t-4",
            "topicNum": 4,
            "title": "AI vs Machine Learning vs Deep Learning",
            "duration": "Project • 18 min",
            "type": "project",
            "status": "in-progress"
          },
          {
            "id": "dl-t-5",
            "topicNum": 5,
            "title": "How Neural Networks Learn",
            "duration": "Reading • 16 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-6",
            "topicNum": 6,
            "title": "Real-World Applications of Deep Learning",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-7",
            "topicNum": 7,
            "title": "Deep Learning vs Traditional Machine Learning",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-8",
            "topicNum": 8,
            "title": "Understanding the Deep Learning Workflow",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-9",
            "topicNum": 9,
            "title": "Deep Learning Engineer Roles and Responsibilities",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-10",
            "topicNum": 10,
            "title": "Choosing the Right Deep Learning Approach",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-2",
        "chapterNum": 2,
        "title": "Module 2: Mathematics for Neural Networks",
        "subtitle": "Core concepts and practical exercises for Mathematics for Neural Networks.",
        "topics": [
          {
            "id": "dl-t-11",
            "topicNum": 1,
            "title": "Scalars, Vectors and Matrices",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-12",
            "topicNum": 2,
            "title": "Vector Operations",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-13",
            "topicNum": 3,
            "title": "Matrix Addition and Multiplication",
            "duration": "Quiz • 18 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-14",
            "topicNum": 4,
            "title": "Dot Products and Their Applications",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-15",
            "topicNum": 5,
            "title": "Transpose and Matrix Dimensions",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-16",
            "topicNum": 6,
            "title": "Functions and Mathematical Notation",
            "duration": "Project • 8 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-17",
            "topicNum": 7,
            "title": "Exponents and Logarithms",
            "duration": "Reading • 10 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-18",
            "topicNum": 8,
            "title": "Derivatives and Rates of Change",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-19",
            "topicNum": 9,
            "title": "Partial Derivatives and Gradients",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-20",
            "topicNum": 10,
            "title": "Chain Rule Intuition",
            "duration": "Quiz • 14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-21",
            "topicNum": 11,
            "title": "Probability Fundamentals",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-22",
            "topicNum": 12,
            "title": "Common Probability Distributions",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-23",
            "topicNum": 13,
            "title": "Mean, Variance and Standard Deviation",
            "duration": "Project • 20 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-24",
            "topicNum": 14,
            "title": "Loss Functions and Optimization Intuition",
            "duration": "Reading • 8 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-3",
        "chapterNum": 3,
        "title": "Module 3: Python and Development Environment",
        "subtitle": "Core concepts and practical exercises for Python and Development Environment.",
        "topics": [
          {
            "id": "dl-t-25",
            "topicNum": 1,
            "title": "What Is Python and Why Use It?",
            "duration": "Project • 14 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-26",
            "topicNum": 2,
            "title": "Installing Python and Setting Up VS Code",
            "duration": "Reading • 18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-27",
            "topicNum": 3,
            "title": "Introduction to Jupyter Notebooks",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-28",
            "topicNum": 4,
            "title": "Python Variables and Data Types",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-29",
            "topicNum": 5,
            "title": "Conditions, Loops and Functions",
            "duration": "Quiz • 8 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-30",
            "topicNum": 6,
            "title": "Lists, Dictionaries and Other Data Structures",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-31",
            "topicNum": 7,
            "title": "NumPy Arrays and Dimensions",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-32",
            "topicNum": 8,
            "title": "NumPy Indexing and Slicing",
            "duration": "Project • 15 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-33",
            "topicNum": 9,
            "title": "Vectorized Operations and Broadcasting",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-34",
            "topicNum": 10,
            "title": "Introduction to Pandas",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-35",
            "topicNum": 11,
            "title": "Installing Deep Learning Libraries",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-36",
            "topicNum": 12,
            "title": "Understanding Project Structure",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-37",
            "topicNum": 13,
            "title": "CPU vs GPU",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-38",
            "topicNum": 14,
            "title": "Reproducible Experiments and Random Seeds",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          }
        ]
      }
    ]
  },
  {
    "id": "tab-2",
    "tabNum": 2,
    "title": "Neural Network Fundamentals",
    "shortTitle": "Neural Network Fundamentals",
    "subtitle": "Perceptrons, activations, backpropagation, Adam optimizers, and regularization.",
    "iconName": "chart",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-4",
        "chapterNum": 4,
        "title": "Module 4: Artificial Neurons and Network Architecture",
        "subtitle": "Core concepts and practical exercises for Artificial Neurons and Network Architecture.",
        "topics": [
          {
            "id": "dl-t-39",
            "topicNum": 1,
            "title": "What Is an Artificial Neuron?",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-40",
            "topicNum": 2,
            "title": "The Perceptron Model",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-41",
            "topicNum": 3,
            "title": "Weights and Biases",
            "duration": "Project • 20 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-42",
            "topicNum": 4,
            "title": "Weighted Sums and Neuron Outputs",
            "duration": "Reading • 8 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-43",
            "topicNum": 5,
            "title": "Activation Functions",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-44",
            "topicNum": 6,
            "title": "Step, Sigmoid and Tanh Activations",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-45",
            "topicNum": 7,
            "title": "ReLU and Its Variants",
            "duration": "Quiz • 15 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-46",
            "topicNum": 8,
            "title": "Softmax for Multiclass Classification",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-47",
            "topicNum": 9,
            "title": "Input, Hidden and Output Layers",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-48",
            "topicNum": 10,
            "title": "Dense or Fully Connected Layers",
            "duration": "Project • 16 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-49",
            "topicNum": 11,
            "title": "Designing a Basic Neural Network",
            "duration": "Reading • 20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-50",
            "topicNum": 12,
            "title": "Forward Propagation Step by Step",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-5",
        "chapterNum": 5,
        "title": "Module 5: Loss Functions and Model Training",
        "subtitle": "Core concepts and practical exercises for Loss Functions and Model Training.",
        "topics": [
          {
            "id": "dl-t-51",
            "topicNum": 1,
            "title": "What Is a Loss Function?",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-52",
            "topicNum": 2,
            "title": "Mean Squared Error",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-53",
            "topicNum": 3,
            "title": "Binary Cross-Entropy",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-54",
            "topicNum": 4,
            "title": "Categorical Cross-Entropy",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-55",
            "topicNum": 5,
            "title": "Understanding Prediction Errors",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-56",
            "topicNum": 6,
            "title": "Gradient Descent Fundamentals",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-57",
            "topicNum": 7,
            "title": "Learning Rate and Its Effects",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-58",
            "topicNum": 8,
            "title": "Batch Gradient Descent",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-59",
            "topicNum": 9,
            "title": "Stochastic and Mini-Batch Gradient Descent",
            "duration": "Quiz • 16 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-60",
            "topicNum": 10,
            "title": "Epochs, Batches and Iterations",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-61",
            "topicNum": 11,
            "title": "Backpropagation Intuition",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-62",
            "topicNum": 12,
            "title": "How Neural Networks Update Weights",
            "duration": "Project • 10 min",
            "type": "project",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-6",
        "chapterNum": 6,
        "title": "Module 6: Optimization and Training Stability",
        "subtitle": "Core concepts and practical exercises for Optimization and Training Stability.",
        "topics": [
          {
            "id": "dl-t-63",
            "topicNum": 1,
            "title": "Why Optimization Matters",
            "duration": "Reading • 20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-64",
            "topicNum": 2,
            "title": "Stochastic Gradient Descent",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-65",
            "topicNum": 3,
            "title": "Momentum-Based Optimization",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-66",
            "topicNum": 4,
            "title": "RMSprop and Adam",
            "duration": "Quiz • 12 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-67",
            "topicNum": 5,
            "title": "Learning Rate Scheduling",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-68",
            "topicNum": 6,
            "title": "Weight Initialization",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-69",
            "topicNum": 7,
            "title": "Vanishing and Exploding Gradients",
            "duration": "Project • 18 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-70",
            "topicNum": 8,
            "title": "Batch Normalization",
            "duration": "Reading • 16 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-71",
            "topicNum": 9,
            "title": "Layer Normalization",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-72",
            "topicNum": 10,
            "title": "Gradient Clipping",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-73",
            "topicNum": 11,
            "title": "Diagnosing Unstable Training",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-7",
        "chapterNum": 7,
        "title": "Module 7: Generalization and Model Improvement",
        "subtitle": "Core concepts and practical exercises for Generalization and Model Improvement.",
        "topics": [
          {
            "id": "dl-t-74",
            "topicNum": 1,
            "title": "Training, Validation and Test Datasets",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-75",
            "topicNum": 2,
            "title": "Overfitting and Underfitting",
            "duration": "Project • 10 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-76",
            "topicNum": 3,
            "title": "Bias-Variance Trade-Off",
            "duration": "Reading • 12 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-77",
            "topicNum": 4,
            "title": "Learning Curves",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-78",
            "topicNum": 5,
            "title": "Dropout Regularization",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-79",
            "topicNum": 6,
            "title": "L1 and L2 Regularization",
            "duration": "Quiz • 18 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-80",
            "topicNum": 7,
            "title": "Early Stopping",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-81",
            "topicNum": 8,
            "title": "Data Augmentation",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-82",
            "topicNum": 9,
            "title": "Handling Imbalanced Datasets",
            "duration": "Project • 8 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-83",
            "topicNum": 10,
            "title": "Error Analysis",
            "duration": "Reading • 10 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-84",
            "topicNum": 11,
            "title": "Preventing Data Leakage",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-85",
            "topicNum": 12,
            "title": "Improving Model Generalization",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          }
        ]
      }
    ]
  },
  {
    "id": "tab-3",
    "tabNum": 3,
    "title": "Deep Learning Frameworks",
    "shortTitle": "Deep Learning Frameworks",
    "subtitle": "Tensors, computational autograd graphs, PyTorch nn.Module, TensorFlow and Keras.",
    "iconName": "python",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-8",
        "chapterNum": 8,
        "title": "Module 8: Tensors and Automatic Differentiation",
        "subtitle": "Core concepts and practical exercises for Tensors and Automatic Differentiation.",
        "topics": [
          {
            "id": "dl-t-86",
            "topicNum": 1,
            "title": "What Is a Tensor?",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-87",
            "topicNum": 2,
            "title": "Scalars, Vectors, Matrices and Higher Dimensions",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-88",
            "topicNum": 3,
            "title": "Tensor Shapes and Dimensions",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-89",
            "topicNum": 4,
            "title": "Creating and Reshaping Tensors",
            "duration": "Project • 14 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-90",
            "topicNum": 5,
            "title": "Tensor Indexing and Slicing",
            "duration": "Reading • 18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-91",
            "topicNum": 6,
            "title": "Tensor Arithmetic and Broadcasting",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-92",
            "topicNum": 7,
            "title": "CPU and GPU Device Placement",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-93",
            "topicNum": 8,
            "title": "Automatic Differentiation",
            "duration": "Quiz • 8 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-94",
            "topicNum": 9,
            "title": "Computational Graphs",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-95",
            "topicNum": 10,
            "title": "Gradients and Gradient Tracking",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-96",
            "topicNum": 11,
            "title": "Memory Usage and Tensor Operations",
            "duration": "Project • 15 min",
            "type": "project",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-9",
        "chapterNum": 9,
        "title": "Module 9: Deep Learning with PyTorch",
        "subtitle": "Core concepts and practical exercises for Deep Learning with PyTorch.",
        "topics": [
          {
            "id": "dl-t-97",
            "topicNum": 1,
            "title": "Introduction to PyTorch",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-98",
            "topicNum": 2,
            "title": "Creating and Manipulating Tensors",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-99",
            "topicNum": 3,
            "title": "Understanding Autograd",
            "duration": "Quiz • 14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-100",
            "topicNum": 4,
            "title": "Building a Neural Network with nn.Module",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-101",
            "topicNum": 5,
            "title": "Defining Loss Functions and Optimizers",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-102",
            "topicNum": 6,
            "title": "Preparing Datasets and DataLoaders",
            "duration": "Project • 20 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-103",
            "topicNum": 7,
            "title": "Writing a Training Loop",
            "duration": "Reading • 8 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-104",
            "topicNum": 8,
            "title": "Writing an Evaluation Loop",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-105",
            "topicNum": 9,
            "title": "Saving and Loading Model Checkpoints",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-106",
            "topicNum": 10,
            "title": "Using a GPU with PyTorch",
            "duration": "Quiz • 15 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-107",
            "topicNum": 11,
            "title": "Debugging Training Problems",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-108",
            "topicNum": 12,
            "title": "Building a Neural Network in PyTorch",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-10",
        "chapterNum": 10,
        "title": "Module 10: Deep Learning with TensorFlow and Keras",
        "subtitle": "Core concepts and practical exercises for Deep Learning with TensorFlow and Keras.",
        "topics": [
          {
            "id": "dl-t-109",
            "topicNum": 1,
            "title": "Introduction to TensorFlow",
            "duration": "Project • 15 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-110",
            "topicNum": 2,
            "title": "Introduction to Keras",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-111",
            "topicNum": 3,
            "title": "Creating Tensors",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-112",
            "topicNum": 4,
            "title": "Building Models with the Sequential API",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-113",
            "topicNum": 5,
            "title": "Building Models with the Functional API",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-114",
            "topicNum": 6,
            "title": "Compiling a Neural Network",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-115",
            "topicNum": 7,
            "title": "Training Models with fit()",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-116",
            "topicNum": 8,
            "title": "Evaluating Models with evaluate()",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-117",
            "topicNum": 9,
            "title": "Making Predictions with predict()",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-118",
            "topicNum": 10,
            "title": "Callbacks and Early Stopping",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-119",
            "topicNum": 11,
            "title": "Saving and Loading Models",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-120",
            "topicNum": 12,
            "title": "Comparing PyTorch and TensorFlow",
            "duration": "Quiz • 16 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-11",
        "chapterNum": 11,
        "title": "Module 11: Deep Learning Experiment Management",
        "subtitle": "Core concepts and practical exercises for Deep Learning Experiment Management.",
        "topics": [
          {
            "id": "dl-t-121",
            "topicNum": 1,
            "title": "Organizing Training Experiments",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-122",
            "topicNum": 2,
            "title": "Tracking Model Parameters",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-123",
            "topicNum": 3,
            "title": "Recording Training and Validation Metrics",
            "duration": "Project • 16 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-124",
            "topicNum": 4,
            "title": "Saving Training History",
            "duration": "Reading • 20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-125",
            "topicNum": 5,
            "title": "Managing Random Seeds",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-126",
            "topicNum": 6,
            "title": "Versioning Datasets and Code",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-127",
            "topicNum": 7,
            "title": "Experiment Tracking Fundamentals",
            "duration": "Quiz • 12 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-128",
            "topicNum": 8,
            "title": "Comparing Model Experiments",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-129",
            "topicNum": 9,
            "title": "Reproducing Training Results",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-130",
            "topicNum": 10,
            "title": "Documenting Experimental Results",
            "duration": "Project • 18 min",
            "type": "project",
            "status": "locked"
          }
        ]
      }
    ]
  },
  {
    "id": "tab-4",
    "tabNum": 4,
    "title": "Computer Vision",
    "shortTitle": "Computer Vision",
    "subtitle": "Image preprocessing, convolution filters, CNNs, YOLO object detection, and U-Net.",
    "iconName": "genai",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-12",
        "chapterNum": 12,
        "title": "Module 12: Image Data and Preprocessing",
        "subtitle": "Core concepts and practical exercises for Image Data and Preprocessing.",
        "topics": [
          {
            "id": "dl-t-131",
            "topicNum": 1,
            "title": "What Is Computer Vision?",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-132",
            "topicNum": 2,
            "title": "How Computers Represent Images",
            "duration": "Quiz • 16 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-133",
            "topicNum": 3,
            "title": "Pixels, Channels and Color Spaces",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-134",
            "topicNum": 4,
            "title": "RGB and Grayscale Images",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-135",
            "topicNum": 5,
            "title": "Image Formats and File Handling",
            "duration": "Project • 10 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-136",
            "topicNum": 6,
            "title": "Image Resizing and Cropping",
            "duration": "Reading • 12 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-137",
            "topicNum": 7,
            "title": "Image Normalization",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-138",
            "topicNum": 8,
            "title": "Image Augmentation",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-139",
            "topicNum": 9,
            "title": "Loading Images into Batches",
            "duration": "Quiz • 18 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-140",
            "topicNum": 10,
            "title": "Train, Validation and Test Splits for Images",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-141",
            "topicNum": 11,
            "title": "Visualizing Images and Labels",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-142",
            "topicNum": 12,
            "title": "Diagnosing Incorrect Predictions",
            "duration": "Project • 8 min",
            "type": "project",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-13",
        "chapterNum": 13,
        "title": "Module 13: Convolutional Neural Networks",
        "subtitle": "Core concepts and practical exercises for Convolutional Neural Networks.",
        "topics": [
          {
            "id": "dl-t-143",
            "topicNum": 1,
            "title": "Why Fully Connected Networks Struggle with Images",
            "duration": "Reading • 16 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-144",
            "topicNum": 2,
            "title": "CNN Architecture Fundamentals",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-145",
            "topicNum": 3,
            "title": "Convolution Operations",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-146",
            "topicNum": 4,
            "title": "Filters and Kernels",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-147",
            "topicNum": 5,
            "title": "Stride and Padding",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-148",
            "topicNum": 6,
            "title": "Feature Maps",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-149",
            "topicNum": 7,
            "title": "Pooling Layers",
            "duration": "Project • 14 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-150",
            "topicNum": 8,
            "title": "Receptive Fields",
            "duration": "Reading • 18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-151",
            "topicNum": 9,
            "title": "Flattening and Fully Connected Layers",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-152",
            "topicNum": 10,
            "title": "CNN Training and Evaluation",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-153",
            "topicNum": 11,
            "title": "Understanding CNN Predictions",
            "duration": "Quiz • 8 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-154",
            "topicNum": 12,
            "title": "Building an Image Classification CNN",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-14",
        "chapterNum": 14,
        "title": "Module 14: Transfer Learning and Image Classification",
        "subtitle": "Core concepts and practical exercises for Transfer Learning and Image Classification.",
        "topics": [
          {
            "id": "dl-t-155",
            "topicNum": 1,
            "title": "What Is Transfer Learning?",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-156",
            "topicNum": 2,
            "title": "Pretrained Models and ImageNet",
            "duration": "Project • 8 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-157",
            "topicNum": 3,
            "title": "Feature Extraction vs Fine-Tuning",
            "duration": "Reading • 10 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-158",
            "topicNum": 4,
            "title": "Freezing and Unfreezing Layers",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-159",
            "topicNum": 5,
            "title": "Transfer Learning with PyTorch",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-160",
            "topicNum": 6,
            "title": "Transfer Learning with Keras",
            "duration": "Quiz • 14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-161",
            "topicNum": 7,
            "title": "Preparing a Custom Image Dataset",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-162",
            "topicNum": 8,
            "title": "Choosing a Classification Architecture",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-163",
            "topicNum": 9,
            "title": "Evaluating Image Classification Models",
            "duration": "Project • 20 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-164",
            "topicNum": 10,
            "title": "Confusion Matrix for Image Classification",
            "duration": "Reading • 8 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-165",
            "topicNum": 11,
            "title": "Class Imbalance in Image Datasets",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-166",
            "topicNum": 12,
            "title": "Image Classification Project",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-15",
        "chapterNum": 15,
        "title": "Module 15: Object Detection and Image Segmentation",
        "subtitle": "Core concepts and practical exercises for Object Detection and Image Segmentation.",
        "topics": [
          {
            "id": "dl-t-167",
            "topicNum": 1,
            "title": "Image Classification vs Object Detection",
            "duration": "Quiz • 8 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-168",
            "topicNum": 2,
            "title": "Bounding Boxes and Object Labels",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-169",
            "topicNum": 3,
            "title": "Intersection over Union",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-170",
            "topicNum": 4,
            "title": "Object Detection Metrics and Mean Average Precision",
            "duration": "Project • 15 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-171",
            "topicNum": 5,
            "title": "Introduction to YOLO",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-172",
            "topicNum": 6,
            "title": "Object Detection Workflow",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-173",
            "topicNum": 7,
            "title": "Semantic Segmentation Fundamentals",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-174",
            "topicNum": 8,
            "title": "Instance Segmentation Fundamentals",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-175",
            "topicNum": 9,
            "title": "Introduction to U-Net",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-176",
            "topicNum": 10,
            "title": "Preparing Image Annotation Data",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-177",
            "topicNum": 11,
            "title": "Evaluating Detection and Segmentation Models",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-178",
            "topicNum": 12,
            "title": "Computer Vision Deployment Considerations",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      }
    ]
  },
  {
    "id": "tab-5",
    "tabNum": 5,
    "title": "Sequence Models, NLP and Transformers",
    "shortTitle": "Sequence Models, NLP and Transformers",
    "subtitle": "RNNs, LSTMs, attention mechanisms, Transformer encoders/decoders, and Hugging Face.",
    "iconName": "stats",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-16",
        "chapterNum": 16,
        "title": "Module 16: Sequential Data and Recurrent Networks",
        "subtitle": "Core concepts and practical exercises for Sequential Data and Recurrent Networks.",
        "topics": [
          {
            "id": "dl-t-179",
            "topicNum": 1,
            "title": "What Is Sequential Data?",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-180",
            "topicNum": 2,
            "title": "Time-Series Data Fundamentals",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-181",
            "topicNum": 3,
            "title": "Sequence Length and Time Steps",
            "duration": "Quiz • 15 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-182",
            "topicNum": 4,
            "title": "Recurrent Neural Network Architecture",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-183",
            "topicNum": 5,
            "title": "Hidden States in RNNs",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-184",
            "topicNum": 6,
            "title": "Backpropagation Through Time",
            "duration": "Project • 16 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-185",
            "topicNum": 7,
            "title": "Vanishing and Exploding Gradients in RNNs",
            "duration": "Reading • 20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-186",
            "topicNum": 8,
            "title": "Long Short-Term Memory Networks",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-187",
            "topicNum": 9,
            "title": "Gated Recurrent Units",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-188",
            "topicNum": 10,
            "title": "Sequence Padding and Masking",
            "duration": "Quiz • 12 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-189",
            "topicNum": 11,
            "title": "RNN Training and Evaluation",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-190",
            "topicNum": 12,
            "title": "Time-Series Prediction Project",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-17",
        "chapterNum": 17,
        "title": "Module 17: Natural Language Processing with Deep Learning",
        "subtitle": "Core concepts and practical exercises for Natural Language Processing with Deep Learning.",
        "topics": [
          {
            "id": "dl-t-191",
            "topicNum": 1,
            "title": "Introduction to NLP",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-192",
            "topicNum": 2,
            "title": "Text Cleaning and Normalization",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-193",
            "topicNum": 3,
            "title": "Tokenization and Vocabulary Building",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-194",
            "topicNum": 4,
            "title": "Word-to-Index Mapping",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-195",
            "topicNum": 5,
            "title": "One-Hot Encoding",
            "duration": "Quiz • 16 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-196",
            "topicNum": 6,
            "title": "Word Embeddings",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-197",
            "topicNum": 7,
            "title": "Embedding Layers in Neural Networks",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-198",
            "topicNum": 8,
            "title": "Text Classification with Neural Networks",
            "duration": "Project • 10 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-199",
            "topicNum": 9,
            "title": "Sequence Padding and Masking",
            "duration": "Reading • 12 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-200",
            "topicNum": 10,
            "title": "Sentiment Analysis",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-201",
            "topicNum": 11,
            "title": "NLP Evaluation Metrics",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-202",
            "topicNum": 12,
            "title": "Building a Text Classification Model",
            "duration": "Quiz • 18 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-18",
        "chapterNum": 18,
        "title": "Module 18: Attention and Transformer Architecture",
        "subtitle": "Core concepts and practical exercises for Attention and Transformer Architecture.",
        "topics": [
          {
            "id": "dl-t-203",
            "topicNum": 1,
            "title": "Why Attention Was Introduced",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-204",
            "topicNum": 2,
            "title": "Attention Mechanism Intuition",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-205",
            "topicNum": 3,
            "title": "Query, Key and Value Concepts",
            "duration": "Project • 18 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-206",
            "topicNum": 4,
            "title": "Scaled Dot-Product Attention",
            "duration": "Reading • 16 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-207",
            "topicNum": 5,
            "title": "Self-Attention",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-208",
            "topicNum": 6,
            "title": "Multi-Head Attention",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-209",
            "topicNum": 7,
            "title": "Positional Encoding",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-210",
            "topicNum": 8,
            "title": "Transformer Encoder",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-211",
            "topicNum": 9,
            "title": "Transformer Decoder",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-212",
            "topicNum": 10,
            "title": "Encoder-Decoder Architecture",
            "duration": "Project • 14 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-213",
            "topicNum": 11,
            "title": "Masked Attention",
            "duration": "Reading • 18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-214",
            "topicNum": 12,
            "title": "Transformer Training Fundamentals",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-19",
        "chapterNum": 19,
        "title": "Module 19: Pretrained Language and Vision Models",
        "subtitle": "Core concepts and practical exercises for Pretrained Language and Vision Models.",
        "topics": [
          {
            "id": "dl-t-215",
            "topicNum": 1,
            "title": "What Are Foundation Models?",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-216",
            "topicNum": 2,
            "title": "Pretraining vs Fine-Tuning",
            "duration": "Quiz • 18 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-217",
            "topicNum": 3,
            "title": "Encoder-Only Models",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-218",
            "topicNum": 4,
            "title": "Decoder-Only Models",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-219",
            "topicNum": 5,
            "title": "Encoder-Decoder Models",
            "duration": "Project • 8 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-220",
            "topicNum": 6,
            "title": "Introduction to BERT",
            "duration": "Reading • 10 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-221",
            "topicNum": 7,
            "title": "Introduction to GPT-Style Models",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-222",
            "topicNum": 8,
            "title": "Vision Transformers",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-223",
            "topicNum": 9,
            "title": "Introduction to Hugging Face",
            "duration": "Quiz • 14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-224",
            "topicNum": 10,
            "title": "Loading Pretrained Models",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-225",
            "topicNum": 11,
            "title": "Evaluating Model Capabilities and Limitations",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-226",
            "topicNum": 12,
            "title": "Selecting a Model for a Practical Task",
            "duration": "Project • 20 min",
            "type": "project",
            "status": "locked"
          }
        ]
      }
    ]
  },
  {
    "id": "tab-6",
    "tabNum": 6,
    "title": "Generative Deep Learning",
    "shortTitle": "Generative Deep Learning",
    "subtitle": "Autoencoders, GANs, Stable Diffusion architectures, and Multimodal CLIP models.",
    "iconName": "genai",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-20",
        "chapterNum": 20,
        "title": "Module 20: Autoencoders and Representation Learning",
        "subtitle": "Core concepts and practical exercises for Autoencoders and Representation Learning.",
        "topics": [
          {
            "id": "dl-t-227",
            "topicNum": 1,
            "title": "What Is Representation Learning?",
            "duration": "Reading • 18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-228",
            "topicNum": 2,
            "title": "Encoder and Decoder Architecture",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-229",
            "topicNum": 3,
            "title": "Latent Space",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-230",
            "topicNum": 4,
            "title": "Reconstruction Loss",
            "duration": "Quiz • 8 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-231",
            "topicNum": 5,
            "title": "Building a Basic Autoencoder",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-232",
            "topicNum": 6,
            "title": "Denoising Autoencoders",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-233",
            "topicNum": 7,
            "title": "Dimensionality Reduction with Autoencoders",
            "duration": "Project • 15 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-234",
            "topicNum": 8,
            "title": "Variational Autoencoders",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-235",
            "topicNum": 9,
            "title": "Latent Distributions and Sampling",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-236",
            "topicNum": 10,
            "title": "Anomaly Detection with Autoencoders",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-237",
            "topicNum": 11,
            "title": "Evaluating Reconstruction Quality",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-21",
        "chapterNum": 21,
        "title": "Module 21: Generative Adversarial Networks",
        "subtitle": "Core concepts and practical exercises for Generative Adversarial Networks.",
        "topics": [
          {
            "id": "dl-t-238",
            "topicNum": 1,
            "title": "What Is a Generative Model?",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-239",
            "topicNum": 2,
            "title": "Introduction to GANs",
            "duration": "Project • 20 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-240",
            "topicNum": 3,
            "title": "Generator and Discriminator",
            "duration": "Reading • 8 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-241",
            "topicNum": 4,
            "title": "Adversarial Training",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-242",
            "topicNum": 5,
            "title": "GAN Loss Functions",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-243",
            "topicNum": 6,
            "title": "Training a Basic GAN",
            "duration": "Quiz • 15 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-244",
            "topicNum": 7,
            "title": "Mode Collapse",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-245",
            "topicNum": 8,
            "title": "Training Stability Challenges",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-246",
            "topicNum": 9,
            "title": "Introduction to DCGAN",
            "duration": "Project • 16 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-247",
            "topicNum": 10,
            "title": "Evaluating Generated Images",
            "duration": "Reading • 20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-248",
            "topicNum": 11,
            "title": "GAN Applications and Limitations",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-22",
        "chapterNum": 22,
        "title": "Module 22: Diffusion Models and Modern Image Generation",
        "subtitle": "Core concepts and practical exercises for Diffusion Models and Modern Image Generation.",
        "topics": [
          {
            "id": "dl-t-249",
            "topicNum": 1,
            "title": "Introduction to Diffusion Models",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-250",
            "topicNum": 2,
            "title": "Forward Diffusion and Adding Noise",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-251",
            "topicNum": 3,
            "title": "Reverse Diffusion and Denoising",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-252",
            "topicNum": 4,
            "title": "Training a Denoising Network",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-253",
            "topicNum": 5,
            "title": "Sampling from a Diffusion Model",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-254",
            "topicNum": 6,
            "title": "Conditional Image Generation",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-255",
            "topicNum": 7,
            "title": "Text Conditioning and Text Embeddings",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-256",
            "topicNum": 8,
            "title": "Latent Diffusion",
            "duration": "Quiz • 16 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-257",
            "topicNum": 9,
            "title": "Understanding Stable Diffusion Architecture",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-258",
            "topicNum": 10,
            "title": "Image Generation Quality Evaluation",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-259",
            "topicNum": 11,
            "title": "Generation Speed and Compute Requirements",
            "duration": "Project • 10 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-260",
            "topicNum": 12,
            "title": "Safety, Copyright and Responsible Generation",
            "duration": "Reading • 12 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-23",
        "chapterNum": 23,
        "title": "Module 23: Multimodal Deep Learning",
        "subtitle": "Core concepts and practical exercises for Multimodal Deep Learning.",
        "topics": [
          {
            "id": "dl-t-261",
            "topicNum": 1,
            "title": "What Is Multimodal AI?",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-262",
            "topicNum": 2,
            "title": "Combining Text, Image and Audio Data",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-263",
            "topicNum": 3,
            "title": "Text and Image Embeddings",
            "duration": "Quiz • 12 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-264",
            "topicNum": 4,
            "title": "Contrastive Learning Fundamentals",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-265",
            "topicNum": 5,
            "title": "Introduction to CLIP",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-266",
            "topicNum": 6,
            "title": "Image-Text Similarity",
            "duration": "Project • 18 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-267",
            "topicNum": 7,
            "title": "Speech and Audio Model Fundamentals",
            "duration": "Reading • 16 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-268",
            "topicNum": 8,
            "title": "Multimodal Model Applications",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-269",
            "topicNum": 9,
            "title": "Evaluating Multimodal Predictions",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-270",
            "topicNum": 10,
            "title": "Limitations and Responsible Use",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      }
    ]
  },
  {
    "id": "tab-7",
    "tabNum": 7,
    "title": "Model Evaluation, Optimization and Deployment",
    "shortTitle": "Model Evaluation, Optimization and Deployment",
    "subtitle": "Classification metrics, mixed-precision, FastAPI serving, Docker, and model drift.",
    "iconName": "target",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-24",
        "chapterNum": 24,
        "title": "Module 24: Deep Learning Model Evaluation",
        "subtitle": "Core concepts and practical exercises for Deep Learning Model Evaluation.",
        "topics": [
          {
            "id": "dl-t-271",
            "topicNum": 1,
            "title": "Defining Evaluation Objectives",
            "duration": "Project • 10 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-272",
            "topicNum": 2,
            "title": "Classification Metrics",
            "duration": "Reading • 12 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-273",
            "topicNum": 3,
            "title": "Regression Metrics",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-274",
            "topicNum": 4,
            "title": "Confusion Matrix and Error Analysis",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-275",
            "topicNum": 5,
            "title": "Precision, Recall and F1-Score",
            "duration": "Quiz • 18 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-276",
            "topicNum": 6,
            "title": "ROC-AUC and Precision-Recall Curves",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-277",
            "topicNum": 7,
            "title": "Class Imbalance",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-278",
            "topicNum": 8,
            "title": "Confidence Scores and Calibration",
            "duration": "Project • 8 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-279",
            "topicNum": 9,
            "title": "Robustness and Generalization",
            "duration": "Reading • 10 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-280",
            "topicNum": 10,
            "title": "Evaluating Model Performance on Unseen Data",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-281",
            "topicNum": 11,
            "title": "Documenting Limitations and Failure Cases",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-25",
        "chapterNum": 25,
        "title": "Module 25: Performance and Model Optimization",
        "subtitle": "Core concepts and practical exercises for Performance and Model Optimization.",
        "topics": [
          {
            "id": "dl-t-282",
            "topicNum": 1,
            "title": "Training Time vs Inference Time",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-283",
            "topicNum": 2,
            "title": "Batch Size and Throughput",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-284",
            "topicNum": 3,
            "title": "GPU Memory Management",
            "duration": "Project • 14 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-285",
            "topicNum": 4,
            "title": "Profiling Training Performance",
            "duration": "Reading • 18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-286",
            "topicNum": 5,
            "title": "Identifying Computational Bottlenecks",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-287",
            "topicNum": 6,
            "title": "Mixed-Precision Training",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-288",
            "topicNum": 7,
            "title": "Gradient Accumulation",
            "duration": "Quiz • 8 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-289",
            "topicNum": 8,
            "title": "Efficient Data Loading",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-290",
            "topicNum": 9,
            "title": "Model Pruning Fundamentals",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-291",
            "topicNum": 10,
            "title": "Quantization Fundamentals",
            "duration": "Project • 15 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-292",
            "topicNum": 11,
            "title": "Knowledge Distillation",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-293",
            "topicNum": 12,
            "title": "Balancing Accuracy, Latency and Resource Costs",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-26",
        "chapterNum": 26,
        "title": "Module 26: Deployment and Inference Systems",
        "subtitle": "Core concepts and practical exercises for Deployment and Inference Systems.",
        "topics": [
          {
            "id": "dl-t-294",
            "topicNum": 1,
            "title": "Preparing a Model for Deployment",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-295",
            "topicNum": 2,
            "title": "Saving and Exporting Models",
            "duration": "Quiz • 14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-296",
            "topicNum": 3,
            "title": "Building an Inference Function",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-297",
            "topicNum": 4,
            "title": "REST API Fundamentals",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-298",
            "topicNum": 5,
            "title": "Creating a Prediction API with FastAPI",
            "duration": "Project • 20 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-299",
            "topicNum": 6,
            "title": "Input Validation and Error Handling",
            "duration": "Reading • 8 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-300",
            "topicNum": 7,
            "title": "Docker Fundamentals",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-301",
            "topicNum": 8,
            "title": "Containerizing a Deep Learning Application",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-302",
            "topicNum": 9,
            "title": "Cloud Deployment Concepts",
            "duration": "Quiz • 15 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-303",
            "topicNum": 10,
            "title": "Batch vs Real-Time Inference",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-304",
            "topicNum": 11,
            "title": "Model Versioning and Rollback",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-305",
            "topicNum": 12,
            "title": "Testing a Deployed Model",
            "duration": "Project • 16 min",
            "type": "project",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-27",
        "chapterNum": 27,
        "title": "Module 27: Monitoring, Security and Responsible AI",
        "subtitle": "Core concepts and practical exercises for Monitoring, Security and Responsible AI.",
        "topics": [
          {
            "id": "dl-t-306",
            "topicNum": 1,
            "title": "Monitoring Model Performance",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-307",
            "topicNum": 2,
            "title": "Data Drift and Concept Drift",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-308",
            "topicNum": 3,
            "title": "Prediction Drift",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-309",
            "topicNum": 4,
            "title": "Latency, Throughput and Error Monitoring",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-310",
            "topicNum": 5,
            "title": "Collecting Feedback and Ground Truth",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-311",
            "topicNum": 6,
            "title": "Alerts and Retraining Triggers",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-312",
            "topicNum": 7,
            "title": "Privacy and Sensitive Data",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-313",
            "topicNum": 8,
            "title": "Model Bias and Fairness",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-314",
            "topicNum": 9,
            "title": "Secure Model Serving",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-315",
            "topicNum": 10,
            "title": "Logging and Audit Trails",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-316",
            "topicNum": 11,
            "title": "Failure Recovery and Fallbacks",
            "duration": "Quiz • 16 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-317",
            "topicNum": 12,
            "title": "Responsible AI in Production",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          }
        ]
      }
    ]
  },
  {
    "id": "tab-8",
    "tabNum": 8,
    "title": "Projects and Career Readiness",
    "shortTitle": "Projects and Career Readiness",
    "subtitle": "5 Capstone projects, GitHub portfolio, case studies, and Deep Learning interview prep.",
    "iconName": "project",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-28",
        "chapterNum": 28,
        "title": "Module 28: Computer Vision Project",
        "subtitle": "Core concepts and practical exercises for Computer Vision Project.",
        "topics": [
          {
            "id": "dl-t-318",
            "topicNum": 1,
            "title": "Selecting an Image Classification Problem",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-319",
            "topicNum": 2,
            "title": "Defining Project Objectives and Metrics",
            "duration": "Project • 16 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-320",
            "topicNum": 3,
            "title": "Collecting and Labeling Images",
            "duration": "Reading • 20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-321",
            "topicNum": 4,
            "title": "Validating and Splitting the Dataset",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-322",
            "topicNum": 5,
            "title": "Building a Baseline CNN",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-323",
            "topicNum": 6,
            "title": "Applying Transfer Learning",
            "duration": "Quiz • 12 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-324",
            "topicNum": 7,
            "title": "Fine-Tuning a Pretrained Model",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-325",
            "topicNum": 8,
            "title": "Evaluating Predictions and Errors",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-326",
            "topicNum": 9,
            "title": "Saving and Packaging the Model",
            "duration": "Project • 18 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-327",
            "topicNum": 10,
            "title": "Presenting Results and Limitations",
            "duration": "Reading • 16 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-29",
        "chapterNum": 29,
        "title": "Module 29: NLP or Sequence Learning Project",
        "subtitle": "Core concepts and practical exercises for NLP or Sequence Learning Project.",
        "topics": [
          {
            "id": "dl-t-328",
            "topicNum": 1,
            "title": "Choosing a Text or Time-Series Problem",
            "duration": "Quiz • 16 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-329",
            "topicNum": 2,
            "title": "Defining Data and Evaluation Metrics",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-330",
            "topicNum": 3,
            "title": "Preparing and Validating the Dataset",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-331",
            "topicNum": 4,
            "title": "Building a Baseline Model",
            "duration": "Project • 10 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-332",
            "topicNum": 5,
            "title": "Training an RNN, LSTM or Transformer",
            "duration": "Reading • 12 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-333",
            "topicNum": 6,
            "title": "Comparing Model Performance",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-334",
            "topicNum": 7,
            "title": "Analyzing Prediction Errors",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-335",
            "topicNum": 8,
            "title": "Saving the Trained Model",
            "duration": "Quiz • 18 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-336",
            "topicNum": 9,
            "title": "Building a Reproducible Demo",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-337",
            "topicNum": 10,
            "title": "Documenting Results and Limitations",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-30",
        "chapterNum": 30,
        "title": "Module 30: Generative Deep Learning Project",
        "subtitle": "Core concepts and practical exercises for Generative Deep Learning Project.",
        "topics": [
          {
            "id": "dl-t-338",
            "topicNum": 1,
            "title": "Selecting a Generative AI Use Case",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-339",
            "topicNum": 2,
            "title": "Preparing the Training Dataset",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-340",
            "topicNum": 3,
            "title": "Choosing an Appropriate Generative Architecture",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-341",
            "topicNum": 4,
            "title": "Building an Autoencoder or GAN Prototype",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-342",
            "topicNum": 5,
            "title": "Understanding Diffusion Model Workflows",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-343",
            "topicNum": 6,
            "title": "Evaluating Generated Outputs",
            "duration": "Project • 14 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-344",
            "topicNum": 7,
            "title": "Managing Compute and Training Costs",
            "duration": "Reading • 18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-345",
            "topicNum": 8,
            "title": "Documenting Safety and Limitations",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-346",
            "topicNum": 9,
            "title": "Presenting the Generative Model Demo",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-31",
        "chapterNum": 31,
        "title": "Module 31: End-to-End Deep Learning Capstone",
        "subtitle": "Core concepts and practical exercises for End-to-End Deep Learning Capstone.",
        "topics": [
          {
            "id": "dl-t-347",
            "topicNum": 1,
            "title": "Defining a Real-World Problem",
            "duration": "Project • 8 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-348",
            "topicNum": 2,
            "title": "Designing the Data and Model Pipeline",
            "duration": "Reading • 10 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-349",
            "topicNum": 3,
            "title": "Establishing a Baseline",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-350",
            "topicNum": 4,
            "title": "Training and Improving the Model",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-351",
            "topicNum": 5,
            "title": "Evaluating Generalization and Failure Cases",
            "duration": "Quiz • 14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-352",
            "topicNum": 6,
            "title": "Optimizing Performance and Resource Usage",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-353",
            "topicNum": 7,
            "title": "Packaging and Deploying the Model",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-354",
            "topicNum": 8,
            "title": "Testing Inference and Reliability",
            "duration": "Project • 20 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-355",
            "topicNum": 9,
            "title": "Documenting Architecture and Trade-Offs",
            "duration": "Reading • 8 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-356",
            "topicNum": 10,
            "title": "Demonstrating the Complete Solution",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-32",
        "chapterNum": 32,
        "title": "Module 32: Portfolio and Interview Preparation",
        "subtitle": "Core concepts and practical exercises for Portfolio and Interview Preparation.",
        "topics": [
          {
            "id": "dl-t-357",
            "topicNum": 1,
            "title": "Building a Deep Learning GitHub Portfolio",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-358",
            "topicNum": 2,
            "title": "Writing Project Case Studies",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-359",
            "topicNum": 3,
            "title": "Python and NumPy Coding Practice",
            "duration": "Project • 15 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-360",
            "topicNum": 4,
            "title": "Linear Algebra and Calculus Interview Questions",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-361",
            "topicNum": 5,
            "title": "Neural Network Fundamentals Interview Questions",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-362",
            "topicNum": 6,
            "title": "Backpropagation and Optimization Questions",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-363",
            "topicNum": 7,
            "title": "CNN and Computer Vision Interview Questions",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "dl-t-364",
            "topicNum": 8,
            "title": "NLP and Transformer Interview Questions",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-365",
            "topicNum": 9,
            "title": "Generative Model Interview Questions",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-366",
            "topicNum": 10,
            "title": "Model Evaluation and Optimization Questions",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "dl-t-367",
            "topicNum": 11,
            "title": "Deployment and Production Troubleshooting",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "dl-t-368",
            "topicNum": 12,
            "title": "Explaining Architecture and Engineering Trade-Offs",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-369",
            "topicNum": 13,
            "title": "Resume and Project Presentation",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "dl-t-370",
            "topicNum": 14,
            "title": "Creating a Continued Learning Roadmap",
            "duration": "Quiz • 16 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      }
    ]
  }
];
