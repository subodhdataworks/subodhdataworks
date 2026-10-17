import { Course } from '../types';

export const learningCourses: Course[] = [
  {
    id: 'python',
    title: 'Python',
    iconType: 'python',
    progress: 72,
    color: '#0284c7', // Sky / Cyan
    gradientClass: 'from-amber-400 to-sky-500',
    accentBg: 'bg-amber-50',
    accentText: 'text-[#0284c7]',
    totalLessons: 24,
    completedLessons: 17,
    nextLessonTitle: 'Data Wrangling with Pandas & DataFrames',
    description: 'Master core Python programming, data structures, and the Pandas library for real data exploration.',
    tags: ['Pandas', 'NumPy', 'Data Cleaning']
  },
  {
    id: 'sql',
    title: 'SQL',
    iconType: 'sql',
    progress: 64,
    color: '#0d9488', // Teal
    gradientClass: 'from-teal-400 to-emerald-500',
    accentBg: 'bg-teal-50',
    accentText: 'text-[#0d9488]',
    totalLessons: 20,
    completedLessons: 13,
    nextLessonTitle: 'Window Functions: ROW_NUMBER & DENSE_RANK',
    description: 'Query relational databases with complex joins, aggregations, CTEs, and analytical window functions.',
    tags: ['Joins', 'Aggregations', 'Window Functions']
  },
  {
    id: 'excel',
    title: 'Excel',
    iconType: 'excel',
    progress: 81,
    color: '#8b5cf6', // Purple
    gradientClass: 'from-purple-500 to-indigo-600',
    accentBg: 'bg-purple-50',
    accentText: 'text-[#8b5cf6]',
    totalLessons: 16,
    completedLessons: 13,
    nextLessonTitle: 'Advanced XLOOKUP, INDEX-MATCH & Pivot Tables',
    description: 'Modern Excel modeling, Power Query transformations, dynamic array formulas, and executive dashboards.',
    tags: ['XLOOKUP', 'Power Query', 'Pivot Tables']
  },
  {
    id: 'powerbi',
    title: 'Power BI',
    iconType: 'powerbi',
    progress: 35,
    color: '#f59e0b', // Amber/gold
    gradientClass: 'from-amber-400 to-orange-500',
    accentBg: 'bg-amber-50',
    accentText: 'text-[#f59e0b]',
    totalLessons: 18,
    completedLessons: 6,
    nextLessonTitle: 'DAX Measures & Star Schema Data Modeling',
    description: 'Create interactive business intelligence dashboards, DAX metrics, and automated reporting pipelines.',
    tags: ['DAX', 'Star Schema', 'Dashboards']
  }
];
