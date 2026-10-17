import { SkillNode } from '../types';

export const SKILL_GRAPH_DATA: SkillNode[] = [
  {
    id: 'computational_thinking',
    name: 'Computational Thinking',
    description: 'Decomposing problems into algorithmic, deterministic steps.',
    category: 'core_logic',
    activeInDemo: true,
    mastery: 85,
    prerequisites: []
  },
  {
    id: 'sequence',
    name: 'Sequence & Execution',
    description: 'Understanding chronological order of operations and instruction flow.',
    category: 'core_logic',
    activeInDemo: true,
    mastery: 82,
    prerequisites: ['computational_thinking']
  },
  {
    id: 'variables',
    name: 'Variables & State',
    description: 'Memory containers, value storage, and dynamic re-assignment.',
    category: 'programming',
    activeInDemo: true,
    mastery: 75,
    prerequisites: ['sequence']
  },
  {
    id: 'conditions',
    name: 'Conditions & Branching',
    description: 'Boolean evaluation, if/else statements, and decision trees.',
    category: 'core_logic',
    activeInDemo: true,
    mastery: 60,
    prerequisites: ['variables']
  },
  {
    id: 'loops',
    name: 'Loops & Iteration',
    description: 'Repetitive patterns, for/while iteration, and loop invariants.',
    category: 'programming',
    activeInDemo: true,
    mastery: 50,
    prerequisites: ['conditions']
  },
  {
    id: 'debugging',
    name: 'Debugging & Diagnostics',
    description: 'Syntax, runtime, and logic error isolation and systematic repair.',
    category: 'programming',
    activeInDemo: false,
    mastery: 0,
    prerequisites: ['sequence', 'variables']
  },
  {
    id: 'data_structures',
    name: 'Data Structures',
    description: 'Lists, dictionaries, sets, and associative memory mappings.',
    category: 'data_foundations',
    activeInDemo: false,
    mastery: 0,
    prerequisites: ['loops', 'variables']
  },
  {
    id: 'python',
    name: 'Python Ecosystem',
    description: 'Idiomatic Python, standard library, and clean modular code writing.',
    category: 'programming',
    activeInDemo: false,
    mastery: 0,
    prerequisites: ['data_structures']
  },
  {
    id: 'sql',
    name: 'SQL & Relational Logic',
    description: 'Relational algebra, SELECT, JOIN, WHERE, and grouping queries.',
    category: 'data_foundations',
    activeInDemo: false,
    mastery: 0,
    prerequisites: ['data_structures']
  },
  {
    id: 'statistics',
    name: 'Statistical Reasoning',
    description: 'Distributions, variance, central tendency, and probabilistic thinking.',
    category: 'data_foundations',
    activeInDemo: false,
    mastery: 0,
    prerequisites: ['computational_thinking']
  },
  {
    id: 'data_analysis',
    name: 'Data Analysis',
    description: 'Hypothesis testing, exploratory data analysis, and anomaly detection.',
    category: 'data_foundations',
    activeInDemo: false,
    mastery: 0,
    prerequisites: ['python', 'statistics', 'sql']
  },
  {
    id: 'data_visualization',
    name: 'Data Visualization',
    description: 'Visual perception, storytelling with charts, and executive communication.',
    category: 'data_foundations',
    activeInDemo: false,
    mastery: 0,
    prerequisites: ['data_analysis']
  },
  {
    id: 'machine_learning',
    name: 'Machine Learning',
    description: 'Supervised vs unsupervised models, feature vectors, and prediction loss.',
    category: 'advanced_intelligence',
    activeInDemo: false,
    mastery: 0,
    prerequisites: ['data_analysis', 'statistics']
  },
  {
    id: 'ai',
    name: 'Artificial Intelligence Systems',
    description: 'Deep neural networks, transformers, and autonomous agent loops.',
    category: 'advanced_intelligence',
    activeInDemo: false,
    mastery: 0,
    prerequisites: ['machine_learning']
  }
];
