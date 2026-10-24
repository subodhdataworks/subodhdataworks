import React, { useState } from 'react';
import {
  ChevronRight, ChevronDown, ChevronUp, Play, Clock, FileText, Gamepad2, Code2, Mic,
  BarChart3, CheckCircle2, BookOpen, FolderKanban, Wrench, ArrowRight, Zap, Award,
  Timer, Bot, Sparkles, Circle, Cpu, Terminal, Flame
} from 'lucide-react';
import './SqlChapterView.css';

interface Props {
  userName?: string;
  onBack: () => void;
  onOpenUnlockModal?: (moduleName?: string) => void;
  onOpenAdvisor?: () => void;
}

type LessonStatus = 'completed' | 'progress' | 'todo';
interface Lesson { title: string; time: string; status: LessonStatus }
interface Chapter {
  id: number;
  title: string;
  desc: string;
  free?: boolean;
  color: string;
  icon: React.ReactNode;
  lessons: Lesson[];
}

const GENAI_COLOR = '#ef4444';

const GENAI_CHAPTERS: Chapter[] = [
  {
    id: 1,
    title: 'Introduction to Generative AI & LLMs',
    free: true,
    color: GENAI_COLOR,
    desc: 'Foundations of GenAI: How Large Language Models work, tokens, embeddings, Transformers architecture, and the paradigm shift in data analytics.',
    icon: <Bot />,
    lessons: [
      { title: '1.1 What is Generative AI and How Does it Differ from Traditional AI?', time: '06:30', status: 'todo' },
      { title: '1.2 Evolution of LLMs: From Word2Vec and RNNs to Transformers', time: '07:45', status: 'todo' },
      { title: '1.3 Transformer Architecture: Self-Attention & Positional Encodings', time: '09:00', status: 'todo' },
      { title: '1.4 Understanding Tokens, Tokenization, and Context Windows', time: '07:20', status: 'todo' },
      { title: '1.5 Vector Embeddings: Turning Words and Tables into High-Dimensional Vectors', time: '08:40', status: 'todo' },
      { title: '1.6 LLM Training Pipeline: Pre-training, SFT, and RLHF', time: '08:15', status: 'todo' },
      { title: '1.7 Temperature, Top-P, Top-K and Frequency Penalty Parameters', time: '07:50', status: 'todo' },
      { title: '1.8 Hallucinations in LLMs and Why They Occur', time: '06:55', status: 'todo' },
      { title: '1.9 The GenAI Landscape: OpenAI, Claude, Gemini, Llama, Mistral', time: '08:10', status: 'todo' },
      { title: '1.10 How Generative AI is Disrupting Business Intelligence & Analytics', time: '08:30', status: 'todo' },
    ],
  },
  {
    id: 2,
    title: 'Prompt Engineering for Data Analytics',
    color: '#f43f5e',
    desc: 'Master professional prompt crafting: Zero-shot, Few-shot, Chain-of-Thought (CoT), System Prompts, and Structured JSON outputs.',
    icon: <Terminal />,
    lessons: [
      { title: '2.1 Fundamentals of Effective Prompt Design for Analytical Tasks', time: '06:50', status: 'todo' },
      { title: '2.2 Zero-Shot vs Few-Shot Prompting with In-Context Examples', time: '07:30', status: 'todo' },
      { title: '2.3 Role Prompting: Persona-Driven Analytical Questioning', time: '06:40', status: 'todo' },
      { title: '2.4 Chain-of-Thought (CoT) & Step-by-Step Reasoning Prompts', time: '08:20', status: 'todo' },
      { title: '2.5 Directional Stimulus & Least-to-Most Prompting', time: '07:15', status: 'todo' },
      { title: '2.6 Enforcing Structured Outputs: JSON, CSV, and Markdown Tables', time: '08:50', status: 'todo' },
      { title: '2.7 Pydantic / OpenAI Function Calling Schema Integration', time: '09:10', status: 'todo' },
      { title: '2.8 Guardrails & Output Sanitization to Prevent Prompt Injections', time: '07:45', status: 'todo' },
      { title: '2.9 Building a Personal Prompt Library for Daily Data Tasks', time: '07:00', status: 'todo' },
      { title: '2.10 Hands-on Workshop: Debugging Faulty Prompts for Complex Metrics', time: '09:30', status: 'todo' },
    ],
  },
  {
    id: 3,
    title: 'AI-Powered SQL Query Generation & Optimization',
    color: '#e11d48',
    desc: 'Use GenAI to write complex SQL: Text-to-SQL, auto-debugging errors, query optimization, join recommendations, and schema translation.',
    icon: <Cpu />,
    lessons: [
      { title: '3.1 Text-to-SQL Architecture: Translating Business Questions to Queries', time: '07:40', status: 'todo' },
      { title: '3.2 Providing DB Schemas (DDL) and Table Metadata into Context', time: '08:30', status: 'todo' },
      { title: '3.3 Generating Complex Multi-Table INNER, LEFT & FULL OUTER Joins', time: '08:50', status: 'todo' },
      { title: '3.4 Writing Window Functions (ROW_NUMBER, DENSE_RANK, LEAD/LAG) with AI', time: '09:15', status: 'todo' },
      { title: '3.5 AI-Assisted SQL Debugging: Fixing Syntax and Logic Errors Instantly', time: '07:30', status: 'todo' },
      { title: '3.6 Query Performance Tuning: Index Recommendations and Execution Plans', time: '09:00', status: 'todo' },
      { title: '3.7 Cross-Database Translation (PostgreSQL to Snowflake / BigQuery / MySQL)', time: '08:10', status: 'todo' },
      { title: '3.8 Vanna.ai: Open-Source Text-to-SQL RAG Pipeline', time: '10:00', status: 'todo' },
      { title: '3.9 Preventing Dangerous SQL Injections and Schema Drops with Guardrails', time: '07:45', status: 'todo' },
      { title: '3.10 Building an Automated Natural Language Query Tool in Python', time: '10:30', status: 'todo' },
    ],
  },
  {
    id: 4,
    title: 'AI-Assisted Python & Pandas Data Analysis',
    color: '#be123c',
    desc: 'Supercharge data workflows with ChatGPT Advanced Data Analysis / Code Interpreter, auto-cleaning, profiling, and visualization.',
    icon: <Code2 />,
    lessons: [
      { title: '4.1 Exploring ChatGPT Advanced Data Analysis (Code Interpreter)', time: '08:00', status: 'todo' },
      { title: '4.2 Uploading Datasets and Automated Exploratory Data Analysis (EDA)', time: '08:45', status: 'todo' },
      { title: '4.3 Automated Data Cleaning: Missing Values, Outliers, and Type Casting', time: '09:10', status: 'todo' },
      { title: '4.4 Feature Engineering with AI: Generating Domain-Specific Signals', time: '08:30', status: 'todo' },
      { title: '4.5 Generating Publication-Ready Seaborn & Plotly Interactive Visuals', time: '09:00', status: 'todo' },
      { title: '4.6 GitHub Copilot & Cursor for Data Analysts: In-IDE Autocomplete', time: '08:20', status: 'todo' },
      { title: '4.7 Generating Unit Tests for Data Pipelines with LLMs', time: '07:40', status: 'todo' },
      { title: '4.8 Converting Legacy Spaghetti Scripts into Clean Modular Code', time: '08:50', status: 'todo' },
      { title: '4.9 Security & Data Privacy Guidelines when Uploading Corporate CSVs', time: '07:15', status: 'todo' },
      { title: '4.10 Complete Case Study: E-Commerce Churn Analysis in 10 Minutes with AI', time: '11:00', status: 'todo' },
    ],
  },
  {
    id: 5,
    title: 'AI in Excel & Microsoft 365 Copilot',
    color: '#9f1239',
    desc: 'Master AI formulas in Excel, Microsoft 365 Copilot, LABS.GENERATIVEAI formulas, Python in Excel, and automated spreadsheet generation.',
    icon: <Bot />,
    lessons: [
      { title: '5.1 Microsoft 365 Copilot in Excel: Overview and System Architecture', time: '07:20', status: 'todo' },
      { title: '5.2 Writing Complex Excel Formulas using Natural Language', time: '08:00', status: 'todo' },
      { title: '5.3 Generating Dynamic Nested XLOOKUP, INDEX-MATCH & FILTER Formulas', time: '08:30', status: 'todo' },
      { title: '5.4 Auto-Generating PivotTables and Trend Summaries with Copilot', time: '07:50', status: 'todo' },
      { title: '5.5 Python in Excel with Copilot: Running Machine Learning on Worksheets', time: '09:40', status: 'todo' },
      { title: '5.6 Writing VBA Macros & Office Scripts using GenAI Prompts', time: '08:45', status: 'todo' },
      { title: '5.7 Cleaning Dirty Unstructured Text in Excel via AI Pattern Matching', time: '08:10', status: 'todo' },
      { title: '5.8 Connecting OpenAI API to Excel Sheets via Power Query & Web Queries', time: '09:20', status: 'todo' },
      { title: '5.9 Scenario Modeling and What-If Analysis with Copilot Insights', time: '08:05', status: 'todo' },
      { title: '5.10 Building an Automated Executive Sales Report in Excel with Copilot', time: '10:00', status: 'todo' },
    ],
  },
  {
    id: 6,
    title: 'Microsoft Copilot in Power BI & DAX Generation',
    color: '#881337',
    desc: 'Use Copilot in Power BI Desktop & Service: Automatic DAX measures, narrative visual summaries, report page drafting, and semantic models.',
    icon: <BarChart3 />,
    lessons: [
      { title: '6.1 Introduction to Microsoft Copilot for Power BI (Fabric Integration)', time: '07:30', status: 'todo' },
      { title: '6.2 Auto-Generating Smart Narrative Visuals & Executive Summaries', time: '08:15', status: 'todo' },
      { title: '6.3 Drafting Entire Power BI Report Pages with a Single Prompt', time: '09:00', status: 'todo' },
      { title: '6.4 Writing Complex DAX Formulas (CALCULATE, Time Intelligence) with AI', time: '09:30', status: 'todo' },
      { title: '6.5 Debugging DAX Syntax and Filter Context Issues using LLMs', time: '08:40', status: 'todo' },
      { title: '6.6 Optimizing Semantic Models for Copilot Accuracy (Synonyms & Q&A)', time: '08:20', status: 'todo' },
      { title: '6.7 Copilot for Mobile Report Layouts and Fast Prototyping', time: '07:10', status: 'todo' },
      { title: '6.8 Licensing, Capacity, and Data Privacy for Power BI Copilot', time: '06:50', status: 'todo' },
      { title: '6.9 Building Custom Copilot Prompts for Business Stakeholders', time: '08:00', status: 'todo' },
      { title: '6.10 End-to-End Walkthrough: Building an Operations Dashboard with Copilot', time: '11:15', status: 'todo' },
    ],
  },
  {
    id: 7,
    title: 'Vector Databases & Similarity Search',
    color: '#dc2626',
    desc: 'The memory of GenAI: High-dimensional vector spaces, Euclidean distance, Cosine similarity, Pinecone, ChromaDB, and FAISS.',
    icon: <Cpu />,
    lessons: [
      { title: '7.1 What is a Vector Database and Why Do LLMs Need It?', time: '07:45', status: 'todo' },
      { title: '7.2 Vector Distance Metrics: Cosine Similarity, Dot Product, Euclidean Distance', time: '08:50', status: 'todo' },
      { title: '7.3 Approximate Nearest Neighbors (ANN) and HNSW Indexing', time: '09:15', status: 'todo' },
      { title: '7.4 Generating Embeddings with OpenAI text-embedding-3-small/large', time: '08:20', status: 'todo' },
      { title: '7.5 Open-Source Vector DBs: ChromaDB and FAISS Setup in Python', time: '09:30', status: 'todo' },
      { title: '7.6 Cloud Vector DBs: Pinecone, Weaviate, and Qdrant Architecture', time: '08:40', status: 'todo' },
      { title: '7.7 Storing Metadata and Performing Hybrid Search (Keyword + Vector)', time: '09:00', status: 'todo' },
      { title: '7.8 Scaling Vector Search to Millions of Enterprise Documents', time: '08:15', status: 'todo' },
      { title: '7.9 Chunking Strategies: Recursive Text Splitters, Windowing, Semantic Chunking', time: '09:40', status: 'todo' },
      { title: '7.10 Hands-on: Building a Semantic Search Engine for Customer Feedback', time: '11:00', status: 'todo' },
    ],
  },
  {
    id: 8,
    title: 'Retrieval-Augmented Generation (RAG) Architecture',
    color: '#b91c1c',
    desc: 'Eliminate hallucinations: End-to-end RAG architecture, retrieval, re-ranking, context injection, and enterprise question-answering.',
    icon: <Bot />,
    lessons: [
      { title: '8.1 What is RAG and Why is it the #1 Enterprise AI Pattern?', time: '08:10', status: 'todo' },
      { title: '8.2 Naive RAG vs Advanced RAG vs Modular RAG', time: '09:00', status: 'todo' },
      { title: '8.3 Document Ingestion: PDFs, Word, Notion, and CSV Parsers', time: '08:30', status: 'todo' },
      { title: '8.4 Query Rewriting, HyDE (Hypothetical Document Embeddings), and Multi-Query', time: '09:25', status: 'todo' },
      { title: '8.5 Re-ranking Retrieved Documents with Cohere Rerank', time: '08:45', status: 'todo' },
      { title: '8.6 Context Stuffing vs Lost-in-the-Middle Problem in Large Context Windows', time: '08:15', status: 'todo' },
      { title: '8.7 Citation Grounding: Returning Exact Source References to Users', time: '08:00', status: 'todo' },
      { title: '8.8 Evaluating RAG Systems with RAGAS (Faithfulness, Relevance, Recall)', time: '10:00', status: 'todo' },
      { title: '8.9 Graph RAG: Combining Knowledge Graphs with Vector Search', time: '09:30', status: 'todo' },
      { title: '8.10 Building a Corporate Financial Policy Q&A RAG Bot in Python', time: '12:00', status: 'todo' },
    ],
  },
  {
    id: 9,
    title: 'Building AI Apps with LangChain & LlamaIndex',
    color: '#991b1b',
    desc: 'Master the top GenAI frameworks: PromptTemplates, LLMChains, Document Loaders, Indexes, and Agents in LangChain and LlamaIndex.',
    icon: <Terminal />,
    lessons: [
      { title: '9.1 Introduction to the Modern LLM Application Framework Ecosystem', time: '07:20', status: 'todo' },
      { title: '9.2 LangChain Core: Models, Prompts, Output Parsers, and LCEL', time: '09:15', status: 'todo' },
      { title: '9.3 LangChain Chains: Sequential, Router, and Transform Chains', time: '08:40', status: 'todo' },
      { title: '9.4 LlamaIndex Overview: Data Ingestion, Indexing, and Query Engines', time: '09:00', status: 'todo' },
      { title: '9.5 Structuring Tabular Data in LlamaIndex with PandasQueryEngine', time: '09:30', status: 'todo' },
      { title: '9.6 Memory Systems: BufferMemory, SummaryMemory, and VectorStoreMemory', time: '08:20', status: 'todo' },
      { title: '9.7 Tools & Tool Calling: Giving LLMs Access to Calculators and APIs', time: '09:10', status: 'todo' },
      { title: '9.8 Asynchronous Execution and Streaming Responses in Streamlit', time: '08:50', status: 'todo' },
      { title: '9.9 Comparing LangChain vs LlamaIndex: When to Pick Which', time: '07:45', status: 'todo' },
      { title: '9.10 Workshop: Building an End-to-End Chat-with-Your-CSV Streamlit App', time: '13:00', status: 'todo' },
    ],
  },
  {
    id: 10,
    title: 'Autonomous AI Agents & Multi-Agent Systems',
    color: '#7f1d1d',
    desc: 'The next frontier: ReAct prompting, autonomous tool-use agents, CrewAI, AutoGen, LangGraph, and automated research workflows.',
    icon: <Cpu />,
    lessons: [
      { title: '10.1 What are AI Agents? From Passive Chatbots to Autonomous Executors', time: '08:15', status: 'todo' },
      { title: '10.2 The ReAct Framework: Reasoning + Action Loop Explained', time: '09:00', status: 'todo' },
      { title: '10.3 Planning, Sub-Goal Decomposition, and Self-Reflection in Agents', time: '08:40', status: 'todo' },
      { title: '10.4 Introduction to LangGraph: Cyclical Graphs and State Machines', time: '10:15', status: 'todo' },
      { title: '10.5 CrewAI: Role-Playing Autonomous Multi-Agent Collaborative Teams', time: '10:30', status: 'todo' },
      { title: '10.6 Microsoft AutoGen: Conversational Multi-Agent Workflows', time: '09:50', status: 'todo' },
      { title: '10.7 Giving Agents Real Tools: Web Search, SQL Runner, and Python Sandbox', time: '09:20', status: 'todo' },
      { title: '10.8 Handling Infinite Loops, Rate Limits, and Agent Failure Recovery', time: '08:30', status: 'todo' },
      { title: '10.9 Human-in-the-Loop (HITL) Guardrails for Critical Actions', time: '08:00', status: 'todo' },
      { title: '10.10 Capstone: Building a 3-Agent Autonomous Competitor Research Team', time: '14:00', status: 'todo' },
    ],
  },
  {
    id: 11,
    title: 'Fine-Tuning LLMs vs RAG for Analytics',
    color: '#f43f5e',
    desc: 'When to fine-tune: PEFT, LoRA, QLoRA, dataset preparation, cost analysis, and domain adaptation vs retrieval.',
    icon: <Zap />,
    lessons: [
      { title: '11.1 RAG vs Fine-Tuning: The Decision Matrix for Data Teams', time: '08:15', status: 'todo' },
      { title: '11.2 Types of Fine-Tuning: Full Fine-Tuning vs Parameter-Efficient (PEFT)', time: '09:00', status: 'todo' },
      { title: '11.3 LoRA (Low-Rank Adaptation) and QLoRA 4-bit Quantization', time: '09:40', status: 'todo' },
      { title: '11.4 Preparing Training Datasets: Instruction Tuning Formatting (JSONL)', time: '08:50', status: 'todo' },
      { title: '11.5 Fine-Tuning OpenAI Models via OpenAI Platform API', time: '08:30', status: 'todo' },
      { title: '11.6 Open-Source Fine-Tuning using Hugging Face Transformers & SFTTrainer', time: '10:15', status: 'todo' },
      { title: '11.7 Evaluating Fine-Tuned Models: Loss Curves, Perplexity, and Benchmarks', time: '08:45', status: 'todo' },
      { title: '11.8 Catastrophic Forgetting and How to Mitigate It', time: '07:30', status: 'todo' },
      { title: '11.9 Cost Comparison: RAG Storage & Calls vs GPU Compute for Training', time: '08:00', status: 'todo' },
      { title: '11.10 Case Study: Fine-Tuning Llama 3 for Specialized Healthcare Billing Codes', time: '12:00', status: 'todo' },
    ],
  },
  {
    id: 12,
    title: 'Automated Dashboard & Report Generation with AI',
    color: '#e11d48',
    desc: 'Generate interactive dashboards on the fly: AI-generated Streamlit apps, Evidence.dev, automated slide decks, and data storytelling.',
    icon: <BarChart3 />,
    lessons: [
      { title: '12.1 The Concept of Generative UI and On-Demand Analytics Interfaces', time: '07:45', status: 'todo' },
      { title: '12.2 Auto-Generating Streamlit Dashboards from Natural Language Prompts', time: '09:20', status: 'todo' },
      { title: '12.3 Evidence.dev: Markdown + SQL + AI for Interactive Data Products', time: '08:50', status: 'todo' },
      { title: '12.4 Generating Dynamic Executive PowerPoint Slides with python-pptx and AI', time: '09:10', status: 'todo' },
      { title: '12.5 AI-Generated PDF Reports with ReportLab and WeasyPrint', time: '08:30', status: 'todo' },
      { title: '12.6 Narrative Storytelling: Converting Raw Numbers into Compelling Business Insights', time: '08:00', status: 'todo' },
      { title: '12.7 Automated Weekly Email Summaries Powered by LLM Scheduled Jobs', time: '08:40', status: 'todo' },
      { title: '12.8 Interactive Chart Selection with AI (Plotly JSON Generation)', time: '08:15', status: 'todo' },
      { title: '12.9 Real-Time Voice Queries over Business Dashboards', time: '09:00', status: 'todo' },
      { title: '12.10 Building an AI CFO Bot that Generates Monthly Financial Scorecards', time: '13:00', status: 'todo' },
    ],
  },
  {
    id: 13,
    title: 'AI-Driven Data Quality, Profiling & Synthesis',
    color: '#be123c',
    desc: 'Improve data hygiene: Synthetic data generation for testing, automated schema validation, missing data imputation, and PII anonymization.',
    icon: <Cpu />,
    lessons: [
      { title: '13.1 The "Garbage In, Garbage Out" Dilemma in AI-Driven Workflows', time: '07:10', status: 'todo' },
      { title: '13.2 Automated Dataset Profiling and Anomaly Flagging using LLMs', time: '08:30', status: 'todo' },
      { title: '13.3 Synthetic Data Generation: Creating Realistic Mock Data for Privacy & Testing', time: '09:15', status: 'todo' },
      { title: '13.4 Preserving Statistical Properties & Distributions in Synthetic Datasets', time: '09:00', status: 'todo' },
      { title: '13.5 Automatic PII (Personally Identifiable Information) Redaction with AI', time: '08:20', status: 'todo' },
      { title: '13.6 Handling Extreme Outliers and Missing Value Imputation with GenAI', time: '08:45', status: 'todo' },
      { title: '13.7 Schema Matching across Disparate Enterprise Data Sources', time: '08:35', status: 'todo' },
      { title: '13.8 Generating Unit Tests for Data Quality Checks with Great Expectations', time: '09:10', status: 'todo' },
      { title: '13.9 Data Lineage Tracking and Audit Trails in AI-Generated Datasets', time: '07:50', status: 'todo' },
      { title: '13.10 Hands-on: Synthesizing a 50,000-Row HIPAA-Compliant Medical Dataset', time: '11:30', status: 'todo' },
    ],
  },
  {
    id: 14,
    title: 'Computer Vision & Multimodal Analytics for Data Teams',
    color: '#9f1239',
    desc: 'Analyze images and documents: Vision models (GPT-4o, Claude 3.5 Sonnet, Gemini Flash), OCR, receipt parsing, and chart digitizers.',
    icon: <Flame />,
    lessons: [
      { title: '14.1 Introduction to Multimodal AI: Combining Text, Tables, and Images', time: '07:40', status: 'todo' },
      { title: '14.2 Vision-Language Models (VLMs) Architecture Overview', time: '08:20', status: 'todo' },
      { title: '14.3 Extracting Clean Tabular Data from Scanned PDF Receipts and Invoices', time: '09:30', status: 'todo' },
      { title: '14.4 Digitizing Legacy Paper Charts and Graphs into Raw Data Points', time: '08:50', status: 'todo' },
      { title: '14.5 Visual Inspection and Defect Analytics in Manufacturing Pipelines', time: '08:15', status: 'todo' },
      { title: '14.6 Video Analytics: Generating Automated Event Timestamps and Metrics', time: '09:10', status: 'todo' },
      { title: '14.7 UI/UX Screenshot Auditing: Extracting Design Metrics with Vision LLMs', time: '08:00', status: 'todo' },
      { title: '14.8 Audio & Speech-to-Text: Whisper API for Call Center Sentiment Analytics', time: '09:40', status: 'todo' },
      { title: '14.9 Cost Optimization and Token Sizing for High-Resolution Images', time: '07:30', status: 'todo' },
      { title: '14.10 Building an Automated Invoice-to-SQL Pipeline in Python', time: '12:00', status: 'todo' },
    ],
  },
  {
    id: 15,
    title: 'Local LLMs & Privacy-Preserving Analytics',
    color: '#881337',
    desc: 'Run AI 100% offline: Ollama, LM Studio, vLLM, open weights (Llama 3, DeepSeek, Mistral, Qwen), and air-gapped data compliance.',
    icon: <Terminal />,
    lessons: [
      { title: '15.1 Why Cloud LLMs are Banned in Certain Enterprise & Banking Sectors', time: '07:30', status: 'todo' },
      { title: '15.2 Overview of Open-Weight Models: Llama 3, DeepSeek, Mistral, Qwen', time: '08:45', status: 'todo' },
      { title: '15.3 Running Local LLMs in 60 Seconds with Ollama', time: '08:00', status: 'todo' },
      { title: '15.4 LM Studio for Visual Experimentation and OpenAI-Compatible Local Endpoints', time: '07:50', status: 'todo' },
      { title: '15.5 High-Throughput Production Serving with vLLM and PagedAttention', time: '10:00', status: 'todo' },
      { title: '15.6 Hardware Requirements: VRAM, Quantization (GGUF, AWQ, EXL2)', time: '09:15', status: 'todo' },
      { title: '15.7 Air-Gapped Analytics: Connecting Local LLMs to Internal Databases', time: '08:40', status: 'todo' },
      { title: '15.8 Benchmarking Local vs Cloud Models on Analytical Accuracy', time: '08:10', status: 'todo' },
      { title: '15.9 Compliance: GDPR, HIPAA, and Zero-Data-Retention Agreements', time: '07:20', status: 'todo' },
      { title: '15.10 Deploying an Offline Privacy-First Analytics Assistant on Company Servers', time: '12:30', status: 'todo' },
    ],
  },
  {
    id: 16,
    title: 'AI Governance, Ethics & Safety in Data Analytics',
    color: '#dc2626',
    desc: 'Mitigate risk: Algorithmic bias, data privacy, EU AI Act, hallucination mitigation, explainability (XAI), and corporate policies.',
    icon: <Award />,
    lessons: [
      { title: '16.1 Key Risks of Deploying GenAI in Business Intelligence & Decision-Making', time: '07:40', status: 'todo' },
      { title: '16.2 Algorithmic Bias: How LLMs Can Perpetuate Historical Inequities', time: '08:20', status: 'todo' },
      { title: '16.3 The EU AI Act and Global Regulatory Compliance for Data Teams', time: '08:50', status: 'todo' },
      { title: '16.4 Intellectual Property, Copyright, and Training Data Lineage', time: '07:30', status: 'todo' },
      { title: '16.5 Explainable AI (XAI): Auditing Why an AI Model Recommended a Decision', time: '09:10', status: 'todo' },
      { title: '16.6 Jailbreaking, Prompt Injections, and Red-Teaming Enterprise LLMs', time: '08:45', status: 'todo' },
      { title: '16.7 Output Verification Frameworks: Combining LLMs with Deterministic Rules', time: '08:15', status: 'todo' },
      { title: '16.8 Environmental Impact: Carbon Footprint of Training and Inference', time: '06:50', status: 'todo' },
      { title: '16.9 Drafting a Corporate GenAI Acceptable Use Policy for Employees', time: '07:15', status: 'todo' },
      { title: '16.10 Case Study: Post-Mortem of an AI Analytics Failure and Recovery', time: '09:30', status: 'todo' },
    ],
  },
  {
    id: 17,
    title: 'LLMOps: Deploying & Monitoring GenAI Pipelines',
    color: '#b91c1c',
    desc: 'Production operations: Model latency, caching (GPTCache), tracing with LangSmith / Phoenix, rate limiting, and cost monitoring.',
    icon: <Cpu />,
    lessons: [
      { title: '17.1 Introduction to LLMOps: DevOps Principles for Generative AI', time: '07:50', status: 'todo' },
      { title: '17.2 Tracking API Latency, Time-to-First-Token (TTFT), and Token Throughput', time: '08:30', status: 'todo' },
      { title: '17.3 Observability and Tracing with LangSmith, Arize Phoenix, and Weights & Biases', time: '10:00', status: 'todo' },
      { title: '17.4 Semantic Caching with GPTCache and Redis to Cut API Costs by 80%', time: '09:15', status: 'todo' },
      { title: '17.5 Implementing Circuit Breakers and Fallback Providers (OpenAI to Anthropic)', time: '08:40', status: 'todo' },
      { title: '17.6 Managing Token Rate Limits (TPM / RPM) and Exponential Backoff Retries', time: '08:00', status: 'todo' },
      { title: '17.7 CI/CD Pipelines for Prompt Testing and Regression Detection', time: '09:10', status: 'todo' },
      { title: '17.8 Real-Time Cost Tracking Dashboards by User and Department', time: '08:20', status: 'todo' },
      { title: '17.9 Continuous Evaluation in Production: Capturing Thumbs Up / Down Feedback', time: '07:45', status: 'todo' },
      { title: '17.10 Production Architecture Blueprint for a High-Scale Enterprise AI Service', time: '11:45', status: 'todo' },
    ],
  },
  {
    id: 18,
    title: 'OpenAI, Anthropic & Gemini API Integration in Python',
    color: '#991b1b',
    desc: 'Hands-on API engineering: OpenAI SDK, Anthropic Claude SDK, Google Gemini SDK, async batching, structured JSON mode, and streaming.',
    icon: <Code2 />,
    lessons: [
      { title: '18.1 Setting Up API Keys, Virtual Environments, and Environment Variables', time: '06:30', status: 'todo' },
      { title: '18.2 OpenAI Python SDK Deep Dive: Chat Completions, Models, and Streaming', time: '09:00', status: 'todo' },
      { title: '18.3 Anthropic Claude SDK: Messages API, System Prompts, and 200k Context', time: '08:45', status: 'todo' },
      { title: '18.4 Google Gemini SDK: Free Tier, Flash Models, and Multimodal Prompts', time: '08:20', status: 'todo' },
      { title: '18.5 Using LiteLLM: One Unified SDK to Call Over 100+ LLMs Seamlessly', time: '09:10', status: 'todo' },
      { title: '18.6 High-Speed Batch Processing: Asyncio and ThreadPoolExecutor in Python', time: '10:00', status: 'todo' },
      { title: '18.7 Pydantic Structured Outputs (response_format={"type": "json_object"})', time: '08:50', status: 'todo' },
      { title: '18.8 Handling API Errors, Retries, and Status Code 429 Gracefully', time: '07:40', status: 'todo' },
      { title: '18.9 Calculating and Logging Exact Cost per API Call in Real-Time', time: '08:15', status: 'todo' },
      { title: '18.10 Building a Robust Multi-Model CLI Data Query Tool from Scratch', time: '12:00', status: 'todo' },
    ],
  },
  {
    id: 19,
    title: 'Future Trends: Reasoning Models, Small Language Models & Agents',
    color: '#7f1d1d',
    desc: 'The frontier of AI: OpenAI o1 / o3, DeepSeek-R1, Chain-of-Thought reasoning models, Small Language Models (SLMs: Phi-3), and Agentic AI.',
    icon: <Sparkles />,
    lessons: [
      { title: '19.1 The Paradigm Shift to Test-Time Compute & Reasoning Models (o1, DeepSeek-R1)', time: '08:45', status: 'todo' },
      { title: '19.2 Why Reasoning Models Excel at Complex Math, Logic & SQL Optimization', time: '09:15', status: 'todo' },
      { title: '19.3 The Rise of Small Language Models (SLMs: Microsoft Phi-3, Gemma 2)', time: '08:20', status: 'todo' },
      { title: '19.4 Running SLMs Directly on Edge Devices, Laptops and Mobile Phones', time: '07:50', status: 'todo' },
      { title: '19.5 Agentic Workflows vs Single-Prompt LLM Interactions', time: '09:00', status: 'todo' },
      { title: '19.6 Autonomous Enterprise Workflows: The End of Routine Business Reporting?', time: '08:10', status: 'todo' },
      { title: '19.7 Multimodal Real-Time Streaming AI (GPT-4o Voice, Gemini Live)', time: '08:35', status: 'todo' },
      { title: '19.8 Synthetic Intelligence in Quantitative Finance and Market Simulations', time: '08:50', status: 'todo' },
      { title: '19.9 How Data Analysts Must Adapt Their Skills to Thrive in 2026-2030', time: '09:30', status: 'todo' },
      { title: '19.10 Final Strategic Roadmap: Becoming a 10x AI-Augmented Data Professional', time: '10:00', status: 'todo' },
    ],
  },
  {
    id: 20,
    title: 'Capstone GenAI Projects & FAANG Interview Mastery',
    color: GENAI_COLOR,
    desc: '4 industry capstone portfolio projects: Text-to-SQL Engine, Automated RAG Assistant, Multi-Agent Analyst Team, and Top 35 Interview Prep.',
    icon: <Award />,
    lessons: [
      { title: '20.1 Project 1: Enterprise Text-to-SQL Query Generator with Self-Correction Loop', time: '15:00', status: 'todo' },
      { title: '20.2 Project 1: Testing Schema Accuracy and Dockerizing the Application', time: '12:00', status: 'todo' },
      { title: '20.3 Project 2: Multimodal Financial Report Analysis Engine with Citation Grounding', time: '14:30', status: 'todo' },
      { title: '20.4 Project 2: PDF Parsing, Vector Storage, and Interactive Streamlit UI', time: '12:45', status: 'todo' },
      { title: '20.5 Project 3: Autonomous 3-Agent Market Research Team using CrewAI & LangGraph', time: '15:30', status: 'todo' },
      { title: '20.6 Project 3: Tool Integration (Google Search, Python Code Exec, Report Compiler)', time: '13:00', status: 'todo' },
      { title: '20.7 Project 4: Full-Stack AI Analytics Assistant with Voice & Local LLM Fallback', time: '16:00', status: 'todo' },
      { title: '20.8 Project 4: Packaging and Publishing to GitHub & Portfolio Presentation', time: '11:00', status: 'todo' },
      { title: '20.9 Top 35 Generative AI Data Analytics Interview Questions Asked by Top Tech Firms', time: '16:00', status: 'todo' },
      { title: '20.10 Final GenAI Certification Exam, Capstone Evaluation & Next Steps', time: '10:00', status: 'todo' },
    ],
  },
];

const ACTIONS = [
  { step: 'video', label: 'Video', icon: <Play className="w-3 h-3" />, cls: 'act-video video' },
  { step: 'mcq', label: 'MCQ', icon: <FileText className="w-3 h-3" />, cls: 'act-mcq mcq' },
  { step: 'interview', label: 'Mock Interview', icon: <Mic className="w-3 h-3" />, cls: 'act-interview interview' },
];

export const GenAiChapterView: React.FC<Props> = ({ onBack, onOpenAdvisor }) => {
  const [openId, setOpenId] = useState<number | null>(1);

  const totalLessons = GENAI_CHAPTERS.reduce((acc, c) => acc + c.lessons.length, 0);
  const doneLessons = GENAI_CHAPTERS.reduce((acc, c) => acc + c.lessons.filter(l => l.status === 'completed').length, 0);
  const pct = Math.round((doneLessons / totalLessons) * 100);

  return (
    <div className="scv-root">
      {/* ================= LEFT ================= */}
      <div className="scv-left">
        {/* Hero */}
        <section className="scv-hero scv-hero-genai">
          <video
            className="scv-hero-bg"
            src="/videos/card_video_genai.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="scv-hero-fade scv-hero-fade-genai" />
          <nav className="scv-crumbs">
            <button onClick={onBack}>Home</button>
            <ChevronRight />
            <button onClick={onBack}>Data Analytics with GenAI</button>
            <ChevronRight />
            <strong>Generative AI for Analytics Mastery</strong>
          </nav>
          <div className="scv-hero-body">
            <div className="scv-logo-halo scv-logo-halo-genai">
              <img src="/images/genai_logo_3d_hd.png" alt="GenAI 3D" className="scv-hero-logo" />
            </div>
            <div className="scv-hero-text">
              <h1>Generative AI for <span>Data Analytics &amp; AI</span></h1>
              <p>Master LLMs, Advanced Prompt Engineering, Text-to-SQL Engines, RAG with Vector DBs, Autonomous Multi-Agent Teams (CrewAI &amp; LangGraph), Copilot Workflows &amp; 4 Enterprise AI Projects.</p>
              
              {/* AI Models & Tools Ribbon — highly useful for learners */}
              <div className="gn-genai-ribbon">
                <span className="gn-genai-badge"><i>✦</i> AI Stack:</span>
                <span className="gn-genai-chip">ChatGPT &amp; Claude</span>
                <span className="gn-genai-chip">Gemini &amp; Llama 3</span>
                <span className="gn-genai-chip">Prompt Engineering</span>
                <span className="gn-genai-chip">Text-to-SQL</span>
                <span className="gn-genai-chip">RAG &amp; Vector DB</span>
                <span className="gn-genai-chip">CrewAI &amp; LangGraph</span>
              </div>

              <div className="scv-hero-pills">
                <span className="scv-pill"><BookOpen /> {totalLessons} Lessons</span>
                <span className="scv-pill"><FolderKanban /> 4 Capstone AI Projects</span>
                <span className="scv-pill"><Wrench /> OpenAI, Claude &amp; CrewAI</span>
                <span className="scv-pill scv-free">100% FREE</span>
              </div>
            </div>
          </div>
          <div className="scv-bubble scv-bubble-genai">“Supercharge your data workflows with autonomous AI agents! 🤖⚡”</div>
        </section>

        {/* Chapters list */}
        <section className="scv-chapters">
          {GENAI_CHAPTERS.map((c, idx) => {
            const isOpen = openId === c.id;
            const done = c.lessons.filter(l => l.status === 'completed').length;
            const tp = Math.round((done / c.lessons.length) * 100);
            return (
              <div key={c.id} id={`gacv-chapter-${c.id}`} className={`scv-chapter ${isOpen ? 'open' : ''}`}>
                <div className="scv-chapter-head" onClick={() => setOpenId(isOpen ? null : c.id)}>
                  <span className="scv-num" style={{ background: c.color }}>{idx + 1}</span>
                  <span className="scv-cicon" style={{ color: c.color, background: `${c.color}14` }}>{c.icon}</span>
                  <div className="scv-ctext">
                    <h3>{c.title} {c.free && <em className="scv-free-tag">FREE</em>}</h3>
                  </div>
                  <div className="scv-cprog">
                    <span className="scv-cprog-label">{c.lessons.length} Lessons</span>
                    <div className="scv-cprog-row">
                      <div className="scv-bar"><i style={{ width: `${tp}%`, background: c.color }} /></div>
                      <span className="scv-cprog-count">{done} / {c.lessons.length} completed</span>
                      <b>{tp}%</b>
                    </div>
                  </div>
                  <button className="scv-chev" aria-label="toggle">
                    {isOpen ? <ChevronUp /> : <ChevronDown />}
                  </button>
                </div>

                {isOpen && (
                  <div className="scv-lessons">
                    {c.lessons.map((l, li) => {
                      const displayTitle = l.title.replace(/^\d+\.\d+\s*/, '');
                      return (
                        <div key={l.title} className="scv-lesson" title={`Open ${l.title}`}>
                          <span className="scv-lnum" style={{ color: c.color, fontWeight: 700 }}>{c.id}.{li + 1}</span>
                          <button className="scv-lplay" style={{ background: c.color }} title={`Play ${l.title}`}>
                            <Play />
                          </button>
                          <span className="scv-ltitle" style={{ color: c.color }} title={`Click to start ${l.title}`}>
                            {displayTitle}
                          </span>
                          <span className="scv-ltime"><Clock /> {l.time}</span>
                          <div className="scv-actions">
                            {ACTIONS.map(a => (
                              <button key={a.step} className={`scv-act ${a.cls}`} title={`Open ${a.label} for ${l.title}`}>
                                {a.icon}{a.label}
                              </button>
                            ))}
                          </div>
                          <div className="scv-lstatus">
                            {l.status === 'completed' && <span className="st-done"><CheckCircle2 /> Completed</span>}
                            {l.status === 'progress' && <span className="st-prog"><Circle /> In Progress</span>}
                            {l.status === 'todo' && <span className="st-todo">Not Started</span>}
                          </div>
                          {l.status === 'progress' ? (
                            <button className="scv-continue">Continue <ArrowRight /></button>
                          ) : (
                            <button className="scv-lgo"><ChevronRight /></button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </section>
      </div>

      {/* ================= RIGHT ================= */}
      <aside className="scv-right">
        <div className="scv-card">
          <div className="scv-card-head">
            <h4>Your Progress</h4>
            <button className="scv-link">View Details <ArrowRight /></button>
          </div>
          <div className="scv-prog-top">
            <div className="scv-ring" style={{ background: `conic-gradient(${GENAI_COLOR} 0 ${pct * 0.5}%, #f87171 ${pct * 0.5}% ${pct}%, #e2e8f0 ${pct}% 100%)` }}>
              <span>{pct}%</span>
            </div>
            <div className="scv-prog-info">
              <strong>{doneLessons} / {totalLessons} Lessons Completed</strong>
              <div className="scv-bar big"><i style={{ width: `${pct}%`, background: GENAI_COLOR }} /></div>
            </div>
          </div>
          <div className="scv-mini-stats">
            <div><FolderKanban style={{ color: GENAI_COLOR }} /><b>4</b><span>Projects</span></div>
            <div><Zap className="c-amber" /><b>0</b><span>Quiz</span></div>
            <div><Award className="c-pink" /><b>0</b><span>Certificate</span></div>
            <div><Timer className="c-teal" /><b>0 hr</b><span>Time Spent</span></div>
          </div>
        </div>

        <div className="scv-card">
          <div className="scv-card-head">
            <h4>Learning Path</h4>
            <button className="scv-link">View All <ArrowRight /></button>
          </div>
          <ul className="scv-path">
            {GENAI_CHAPTERS.map((c, i) => {
              const done = c.lessons.filter(l => l.status === 'completed').length;
              const active = i === 0;
              return (
                <li key={c.id} className={active ? 'active' : ''} onClick={() => setOpenId(c.id)}>
                  <span className="scv-path-num">{i + 1}</span>
                  <span className="scv-path-check">{active ? <CheckCircle2 /> : <Circle />}</span>
                  <div>
                    <strong>{c.title}</strong>
                    <span>{done} / {c.lessons.length} lessons</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="scv-card scv-mentor">
          <div className="scv-mentor-text">
            <h4>AI Mentor</h4>
            <p>Ask anything about GenAI. Get prompt templates, RAG architecture guidance, model fine-tuning advice, and interview prep.</p>
            <button className="scv-mentor-btn" onClick={() => onOpenAdvisor?.()}>
              <Bot /> Ask AI Mentor <ArrowRight />
            </button>
          </div>
          <img src="/images/pcv_ai_robot.jpg" alt="AI Mentor" />
          <Sparkles className="scv-spark" />
        </div>
      </aside>
    </div>
  );
};

export default GenAiChapterView;
