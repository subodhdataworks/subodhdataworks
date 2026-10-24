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

export const ML_ENGINEERING_CURRICULUM: TabItem[] = [
  {
    "id": "tab-1",
    "tabNum": 1,
    "title": "ML Engineering Foundations",
    "shortTitle": "ML Engineering Foundations",
    "subtitle": "Core engineering principles, lifecycle, Python tooling, and math foundations.",
    "iconName": "chart",
    "isFree": true,
    "chapters": [
      {
        "id": "mod-1",
        "chapterNum": 1,
        "title": "Chapter 1: Introduction to Machine Learning Engineering",
        "subtitle": "Production concepts and hands-on exercises for Introduction to Machine Learning Engineering.",
        "topics": [
          {
            "id": "ml-t-1",
            "topicNum": 1,
            "title": "What Is Machine Learning Engineering?",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "ml-t-2",
            "topicNum": 2,
            "title": "Data Science vs ML Engineering",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "ml-t-3",
            "topicNum": 3,
            "title": "ML Product Lifecycle",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "ml-t-4",
            "topicNum": 4,
            "title": "ML Engineer Roles and Responsibilities",
            "duration": "Reading • 16 min",
            "type": "reading",
            "status": "in-progress"
          },
          {
            "id": "ml-t-5",
            "topicNum": 5,
            "title": "Defining Business and Model Success Metrics",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-2",
        "chapterNum": 2,
        "title": "Chapter 2: Python and Software Engineering Basics",
        "subtitle": "Production concepts and hands-on exercises for Python and Software Engineering Basics.",
        "topics": [
          {
            "id": "ml-t-6",
            "topicNum": 1,
            "title": "Python Refresher for ML",
            "duration": "Quiz • 14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ml-t-7",
            "topicNum": 2,
            "title": "Functions, Modules and Packages",
            "duration": "Project • 18 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ml-t-8",
            "topicNum": 3,
            "title": "Object-Oriented Programming Basics",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-9",
            "topicNum": 4,
            "title": "Git and Version Control",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-10",
            "topicNum": 5,
            "title": "Code Style, Documentation and Project Structure",
            "duration": "Video • 25 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-3",
        "chapterNum": 3,
        "title": "Chapter 3: Mathematics and Statistics for ML",
        "subtitle": "Production concepts and hands-on exercises for Mathematics and Statistics for ML.",
        "topics": [
          {
            "id": "ml-t-11",
            "topicNum": 1,
            "title": "Linear Algebra Essentials",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-12",
            "topicNum": 2,
            "title": "Probability and Distributions",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-13",
            "topicNum": 3,
            "title": "Descriptive and Inferential Statistics",
            "duration": "Reading • 20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ml-t-14",
            "topicNum": 4,
            "title": "Gradients and Optimization Intuition",
            "duration": "Quiz • 25 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ml-t-15",
            "topicNum": 5,
            "title": "Metrics, Uncertainty and Experimentation",
            "duration": "Project • 10 min",
            "type": "project",
            "status": "locked"
          }
        ]
      }
    ]
  },
  {
    "id": "tab-2",
    "tabNum": 2,
    "title": "Data Preparation and Feature Engineering",
    "shortTitle": "Data Preparation and Feature Engineering",
    "subtitle": "Data pipelines, schemas, validation, transformations, and feature engineering.",
    "iconName": "stats",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-4",
        "chapterNum": 4,
        "title": "Chapter 4: Data Collection and Validation",
        "subtitle": "Production concepts and hands-on exercises for Data Collection and Validation.",
        "topics": [
          {
            "id": "ml-t-16",
            "topicNum": 1,
            "title": "Structured and Unstructured Data",
            "duration": "Project • 16 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ml-t-17",
            "topicNum": 2,
            "title": "Data Sources and Formats",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-18",
            "topicNum": 3,
            "title": "Data Schemas and Data Contracts",
            "duration": "Video • 25 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-19",
            "topicNum": 4,
            "title": "Missing Values and Duplicate Records",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-20",
            "topicNum": 5,
            "title": "Data Quality Checks and Validation",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-5",
        "chapterNum": 5,
        "title": "Chapter 5: Data Processing Pipelines",
        "subtitle": "Production concepts and hands-on exercises for Data Processing Pipelines.",
        "topics": [
          {
            "id": "ml-t-21",
            "topicNum": 1,
            "title": "NumPy and Pandas for ML",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-22",
            "topicNum": 2,
            "title": "Transformations and Data Cleaning",
            "duration": "Reading • 25 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ml-t-23",
            "topicNum": 3,
            "title": "Train, Validation and Test Splits",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ml-t-24",
            "topicNum": 4,
            "title": "Reproducible Data Preparation",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ml-t-25",
            "topicNum": 5,
            "title": "Batch Processing Basics",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-6",
        "chapterNum": 6,
        "title": "Chapter 6: Feature Engineering",
        "subtitle": "Production concepts and hands-on exercises for Feature Engineering.",
        "topics": [
          {
            "id": "ml-t-26",
            "topicNum": 1,
            "title": "Numerical and Categorical Features",
            "duration": "Video • 25 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-27",
            "topicNum": 2,
            "title": "Encoding and Scaling",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-28",
            "topicNum": 3,
            "title": "Date and Text Features",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-29",
            "topicNum": 4,
            "title": "Feature Selection Basics",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-30",
            "topicNum": 5,
            "title": "Preventing Data Leakage",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      }
    ]
  },
  {
    "id": "tab-3",
    "tabNum": 3,
    "title": "Core Machine Learning",
    "shortTitle": "Core Machine Learning",
    "subtitle": "Supervised algorithms, clustering, model selection, metrics, and tuning.",
    "iconName": "chart",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-7",
        "chapterNum": 7,
        "title": "Chapter 7: Supervised Learning",
        "subtitle": "Production concepts and hands-on exercises for Supervised Learning.",
        "topics": [
          {
            "id": "ml-t-31",
            "topicNum": 1,
            "title": "Linear and Logistic Regression",
            "duration": "Reading • 10 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ml-t-32",
            "topicNum": 2,
            "title": "Decision Trees and Random Forests",
            "duration": "Quiz • 12 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ml-t-33",
            "topicNum": 3,
            "title": "Gradient Boosting Overview",
            "duration": "Project • 15 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ml-t-34",
            "topicNum": 4,
            "title": "Classification and Regression Metrics",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-35",
            "topicNum": 5,
            "title": "Cross-Validation",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-8",
        "chapterNum": 8,
        "title": "Chapter 8: Unsupervised Learning",
        "subtitle": "Production concepts and hands-on exercises for Unsupervised Learning.",
        "topics": [
          {
            "id": "ml-t-36",
            "topicNum": 1,
            "title": "Clustering with K-Means",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-37",
            "topicNum": 2,
            "title": "Dimensionality Reduction Overview",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-38",
            "topicNum": 3,
            "title": "Anomaly Detection Basics",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-39",
            "topicNum": 4,
            "title": "Similarity and Distance Measures",
            "duration": "Reading • 18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ml-t-40",
            "topicNum": 5,
            "title": "Evaluating Unsupervised Results",
            "duration": "Quiz • 16 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-9",
        "chapterNum": 9,
        "title": "Chapter 9: Model Selection and Tuning",
        "subtitle": "Production concepts and hands-on exercises for Model Selection and Tuning.",
        "topics": [
          {
            "id": "ml-t-41",
            "topicNum": 1,
            "title": "Baseline Models",
            "duration": "Quiz • 15 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ml-t-42",
            "topicNum": 2,
            "title": "Bias and Variance",
            "duration": "Project • 14 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ml-t-43",
            "topicNum": 3,
            "title": "Overfitting and Underfitting",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-44",
            "topicNum": 4,
            "title": "Hyperparameter Search",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-45",
            "topicNum": 5,
            "title": "Error Analysis and Model Selection",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          }
        ]
      }
    ]
  },
  {
    "id": "tab-4",
    "tabNum": 4,
    "title": "Deep Learning and Specialized Models",
    "shortTitle": "Deep Learning and Specialized Models",
    "subtitle": "Neural networks, PyTorch/TensorFlow, vision, NLP, and foundation models.",
    "iconName": "genai",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-10",
        "chapterNum": 10,
        "title": "Chapter 10: Neural Network Fundamentals",
        "subtitle": "Production concepts and hands-on exercises for Neural Network Fundamentals.",
        "topics": [
          {
            "id": "ml-t-46",
            "topicNum": 1,
            "title": "Neurons, Layers and Activation Functions",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-47",
            "topicNum": 2,
            "title": "Loss Functions and Optimizers",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-48",
            "topicNum": 3,
            "title": "Backpropagation Intuition",
            "duration": "Reading • 16 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ml-t-49",
            "topicNum": 4,
            "title": "Training and Validation Curves",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ml-t-50",
            "topicNum": 5,
            "title": "Regularization and Early Stopping",
            "duration": "Project • 25 min",
            "type": "project",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-11",
        "chapterNum": 11,
        "title": "Chapter 11: Deep Learning Frameworks",
        "subtitle": "Production concepts and hands-on exercises for Deep Learning Frameworks.",
        "topics": [
          {
            "id": "ml-t-51",
            "topicNum": 1,
            "title": "PyTorch or TensorFlow Overview",
            "duration": "Project • 18 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ml-t-52",
            "topicNum": 2,
            "title": "Tensors and Automatic Differentiation",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-53",
            "topicNum": 3,
            "title": "Dataset and DataLoader Concepts",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-54",
            "topicNum": 4,
            "title": "Training Loops and Checkpoints",
            "duration": "Video • 25 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-55",
            "topicNum": 5,
            "title": "GPU Usage and Resource Awareness",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-12",
        "chapterNum": 12,
        "title": "Chapter 12: NLP, Vision and Foundation Models",
        "subtitle": "Production concepts and hands-on exercises for NLP, Vision and Foundation Models.",
        "topics": [
          {
            "id": "ml-t-56",
            "topicNum": 1,
            "title": "Text Classification Basics",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-57",
            "topicNum": 2,
            "title": "Computer Vision Workflow Overview",
            "duration": "Reading • 20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ml-t-58",
            "topicNum": 3,
            "title": "Embeddings and Similarity",
            "duration": "Quiz • 25 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ml-t-59",
            "topicNum": 4,
            "title": "Transformer and Foundation Model Concepts",
            "duration": "Project • 10 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ml-t-60",
            "topicNum": 5,
            "title": "Choosing Models for a Task",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          }
        ]
      }
    ]
  },
  {
    "id": "tab-5",
    "tabNum": 5,
    "title": "ML Systems and MLOps",
    "shortTitle": "ML Systems and MLOps",
    "subtitle": "Packaging models, REST APIs, experiment tracking, and automated CI/CD pipelines.",
    "iconName": "sql",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-13",
        "chapterNum": 13,
        "title": "Chapter 13: Model Packaging and APIs",
        "subtitle": "Production concepts and hands-on exercises for Model Packaging and APIs.",
        "topics": [
          {
            "id": "ml-t-61",
            "topicNum": 1,
            "title": "Save and Load Trained Models",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-62",
            "topicNum": 2,
            "title": "Build Inference Functions",
            "duration": "Video • 25 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-63",
            "topicNum": 3,
            "title": "REST API Basics",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-64",
            "topicNum": 4,
            "title": "Request Validation and Error Handling",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-65",
            "topicNum": 5,
            "title": "Model Versioning",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-14",
        "chapterNum": 14,
        "title": "Chapter 14: Experiment Tracking and Reproducibility",
        "subtitle": "Production concepts and hands-on exercises for Experiment Tracking and Reproducibility.",
        "topics": [
          {
            "id": "ml-t-66",
            "topicNum": 1,
            "title": "Track Parameters and Metrics",
            "duration": "Reading • 25 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ml-t-67",
            "topicNum": 2,
            "title": "Record Datasets and Code Versions",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ml-t-68",
            "topicNum": 3,
            "title": "Compare Model Experiments",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ml-t-69",
            "topicNum": 4,
            "title": "Manage Random Seeds",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-70",
            "topicNum": 5,
            "title": "Reproduce a Training Run",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-15",
        "chapterNum": 15,
        "title": "Chapter 15: MLOps Pipelines",
        "subtitle": "Production concepts and hands-on exercises for MLOps Pipelines.",
        "topics": [
          {
            "id": "ml-t-71",
            "topicNum": 1,
            "title": "Training and Inference Pipelines",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-72",
            "topicNum": 2,
            "title": "Pipeline Orchestration Concepts",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-73",
            "topicNum": 3,
            "title": "Automated Tests for ML",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-74",
            "topicNum": 4,
            "title": "Model Registry Basics",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ml-t-75",
            "topicNum": 5,
            "title": "CI/CD Concepts for ML Systems",
            "duration": "Quiz • 18 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      }
    ]
  },
  {
    "id": "tab-6",
    "tabNum": 6,
    "title": "Deployment, Monitoring and Reliability",
    "shortTitle": "Deployment, Monitoring and Reliability",
    "subtitle": "Docker containers, cloud inference, monitoring, drift detection, and security.",
    "iconName": "target",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-16",
        "chapterNum": 16,
        "title": "Chapter 16: Deploying ML Models",
        "subtitle": "Production concepts and hands-on exercises for Deploying ML Models.",
        "topics": [
          {
            "id": "ml-t-76",
            "topicNum": 1,
            "title": "Batch vs Real-Time Inference",
            "duration": "Quiz • 12 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ml-t-77",
            "topicNum": 2,
            "title": "Containerization with Docker Basics",
            "duration": "Project • 15 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ml-t-78",
            "topicNum": 3,
            "title": "Cloud Deployment Concepts",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-79",
            "topicNum": 4,
            "title": "Scaling and Latency Trade-Offs",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-80",
            "topicNum": 5,
            "title": "Secure Configuration and Secrets",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-17",
        "chapterNum": 17,
        "title": "Chapter 17: Monitoring and Model Drift",
        "subtitle": "Production concepts and hands-on exercises for Monitoring and Model Drift.",
        "topics": [
          {
            "id": "ml-t-81",
            "topicNum": 1,
            "title": "Service Health and Latency Metrics",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-82",
            "topicNum": 2,
            "title": "Data and Prediction Drift",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-83",
            "topicNum": 3,
            "title": "Model Performance Monitoring",
            "duration": "Reading • 18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ml-t-84",
            "topicNum": 4,
            "title": "Alerts and Retraining Triggers",
            "duration": "Quiz • 16 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ml-t-85",
            "topicNum": 5,
            "title": "Feedback and Ground-Truth Collection",
            "duration": "Project • 20 min",
            "type": "project",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-18",
        "chapterNum": 18,
        "title": "Chapter 18: Reliability, Security and Governance",
        "subtitle": "Production concepts and hands-on exercises for Reliability, Security and Governance.",
        "topics": [
          {
            "id": "ml-t-86",
            "topicNum": 1,
            "title": "Input Validation and Abuse Prevention",
            "duration": "Project • 14 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ml-t-87",
            "topicNum": 2,
            "title": "Privacy and Sensitive Data",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-88",
            "topicNum": 3,
            "title": "Model Bias and Fairness Checks",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-89",
            "topicNum": 4,
            "title": "Audit Logs and Access Control",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-90",
            "topicNum": 5,
            "title": "Fallbacks and Incident Response",
            "duration": "Video • 25 min",
            "type": "video",
            "status": "locked"
          }
        ]
      }
    ]
  },
  {
    "id": "tab-7",
    "tabNum": 7,
    "title": "Generative AI and LLM Engineering",
    "shortTitle": "Generative AI and LLM Engineering",
    "subtitle": "Prompt engineering, vector search, RAG pipelines, and autonomous AI agents.",
    "iconName": "genai",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-19",
        "chapterNum": 19,
        "title": "Chapter 19: LLM Application Fundamentals",
        "subtitle": "Production concepts and hands-on exercises for LLM Application Fundamentals.",
        "topics": [
          {
            "id": "ml-t-91",
            "topicNum": 1,
            "title": "LLM Capabilities and Limitations",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-92",
            "topicNum": 2,
            "title": "Prompt Design and Structured Outputs",
            "duration": "Reading • 16 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ml-t-93",
            "topicNum": 3,
            "title": "Tokens, Context Windows and Cost",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ml-t-94",
            "topicNum": 4,
            "title": "Embeddings and Vector Search",
            "duration": "Project • 25 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ml-t-95",
            "topicNum": 5,
            "title": "Evaluation and Hallucination Checks",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-20",
        "chapterNum": 20,
        "title": "Chapter 20: RAG and Knowledge Systems",
        "subtitle": "Production concepts and hands-on exercises for RAG and Knowledge Systems.",
        "topics": [
          {
            "id": "ml-t-96",
            "topicNum": 1,
            "title": "Document Ingestion and Chunking",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-97",
            "topicNum": 2,
            "title": "Embedding and Indexing",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-98",
            "topicNum": 3,
            "title": "Retrieval and Reranking Basics",
            "duration": "Video • 25 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-99",
            "topicNum": 4,
            "title": "Grounded Answers and Citations",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-100",
            "topicNum": 5,
            "title": "Evaluating Retrieval and Answer Quality",
            "duration": "Reading • 12 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-21",
        "chapterNum": 21,
        "title": "Chapter 21: AI Agents and Tool Use",
        "subtitle": "Production concepts and hands-on exercises for AI Agents and Tool Use.",
        "topics": [
          {
            "id": "ml-t-101",
            "topicNum": 1,
            "title": "Assistant vs Agent Architectures",
            "duration": "Reading • 20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ml-t-102",
            "topicNum": 2,
            "title": "Tool Calling and Function Schemas",
            "duration": "Quiz • 25 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ml-t-103",
            "topicNum": 3,
            "title": "Planning and Multi-Step Workflows",
            "duration": "Project • 10 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ml-t-104",
            "topicNum": 4,
            "title": "Human Approval for Sensitive Actions",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-105",
            "topicNum": 5,
            "title": "Agent Evaluation and Safety Controls",
            "duration": "Video • 15 min",
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
    "subtitle": "End-to-end production ML capstone, portfolio case study, and tech interviews.",
    "iconName": "project",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-22",
        "chapterNum": 22,
        "title": "Chapter 22: End-to-End ML Project",
        "subtitle": "Production concepts and hands-on exercises for End-to-End ML Project.",
        "topics": [
          {
            "id": "ml-t-106",
            "topicNum": 1,
            "title": "Define a Real-World Problem",
            "duration": "Video • 25 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-107",
            "topicNum": 2,
            "title": "Prepare Data and Establish a Baseline",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-108",
            "topicNum": 3,
            "title": "Train and Evaluate Models",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-109",
            "topicNum": 4,
            "title": "Package an Inference API",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ml-t-110",
            "topicNum": 5,
            "title": "Document Results and Limitations",
            "duration": "Quiz • 14 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-23",
        "chapterNum": 23,
        "title": "Chapter 23: Production ML and MLOps Capstone",
        "subtitle": "Production concepts and hands-on exercises for Production ML and MLOps Capstone.",
        "topics": [
          {
            "id": "ml-t-111",
            "topicNum": 1,
            "title": "Build a Reproducible Pipeline",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ml-t-112",
            "topicNum": 2,
            "title": "Track Experiments and Model Versions",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ml-t-113",
            "topicNum": 3,
            "title": "Deploy a Model Service",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-114",
            "topicNum": 4,
            "title": "Add Monitoring and Tests",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-115",
            "topicNum": 5,
            "title": "Demonstrate Reliability and Recovery",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-24",
        "chapterNum": 24,
        "title": "Chapter 24: Portfolio and Interview Preparation",
        "subtitle": "Production concepts and hands-on exercises for Portfolio and Interview Preparation.",
        "topics": [
          {
            "id": "ml-t-116",
            "topicNum": 1,
            "title": "Write an ML System Case Study",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-117",
            "topicNum": 2,
            "title": "Explain Model and Architecture Trade-Offs",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ml-t-118",
            "topicNum": 3,
            "title": "Practice Python, ML and Statistics Questions",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ml-t-119",
            "topicNum": 4,
            "title": "Practice MLOps and Deployment Questions",
            "duration": "Quiz • 18 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ml-t-120",
            "topicNum": 5,
            "title": "Present a Portfolio and Development Roadmap",
            "duration": "Project • 16 min",
            "type": "project",
            "status": "locked"
          }
        ]
      }
    ]
  }
];
