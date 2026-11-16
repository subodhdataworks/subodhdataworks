/**
 * FUTURE IT INDUSTRY — SQL VISUAL EXPLANATION ENGINE (TOPIC 1: SELECT BASICS)
 * 
 * PostgreSQL-compatible, question-aware, beginner-friendly SQL tokenizer
 * and teaching step generator.
 * 
 * Explains SQL from absolute zero:
 * - SELECT Keyword
 * - Wildcard (*) vs Specific Columns
 * - Comma separators
 * - FROM Clause & Table References
 * - AS Column Aliases
 * - Arithmetic Expressions: (salary * 12)
 * - String Literals: 'Future IT Industry'
 * - DISTINCT Keyword
 * - Semicolon Statement Terminators
 * - Verified Query Execution & Result Set Output
 */

import { SqlChallengeTask } from './data/sqlCodingChallengesBank';

export type SqlVisualType =
  | 'select_keyword'
  | 'select_all_columns'
  | 'select_specific_column'
  | 'select_multiple_columns'
  | 'from_clause'
  | 'table_reference'
  | 'column_alias'
  | 'arithmetic_expression'
  | 'string_literal'
  | 'distinct_keyword'
  | 'semicolon'
  | 'complete_execution';

export interface SqlTeachingStep {
  stepNumber: number;
  totalSteps: number;
  tokenText: string;
  tokenType: string;
  sourceRange: [number, number]; // [startIndex, endIndex] in query string
  title: string;
  explanationHinglish: string;
  explanationEnglish: string;
  visualType: SqlVisualType;
  highlightedColumns?: string[];
  highlightedTable?: string;
  aliasMapping?: { original: string; alias: string };
  arithmeticCalc?: { formula: string; resultExample: string };
  literalValue?: string;
  resultHeaders?: string[];
  resultRows?: Record<string, string | number>[];
}

export interface SqlQueryExplanationData {
  query: string;
  steps: SqlTeachingStep[];
  allColumns: string[];
  tableName: string;
  sampleInputRows: Record<string, string | number>[];
  expectedHeaders: string[];
  expectedRows: Record<string, string | number>[];
}

/**
 * Builds teaching steps dynamically from any verified SQL Query in Topic 1
 */
export function buildSqlTopic1Explanation(task: SqlChallengeTask): SqlQueryExplanationData {
  const query = (task.solution || 'SELECT * FROM employees;').trim();
  const tableName = task.tableName || 'employees';
  const sampleHeaders = task.sampleInputHeaders || ['id', 'name', 'age', 'department', 'salary'];
  const sampleRows = task.sampleInputRows || [];
  const expectedHeaders = task.expectedOutputHeaders || sampleHeaders;
  const expectedRows = task.expectedOutputRows || sampleRows;

  const rawSteps: Omit<SqlTeachingStep, 'stepNumber' | 'totalSteps'>[] = [];

  // Helper to locate exact substring range
  const findRange = (sub: string, afterIndex = 0): [number, number] => {
    const idx = query.indexOf(sub, afterIndex);
    if (idx === -1) return [0, 0];
    return [idx, idx + sub.length];
  };

  // 1. SELECT Keyword
  const selectRange = findRange('SELECT');
  rawSteps.push({
    tokenText: 'SELECT',
    tokenType: 'KEYWORD',
    sourceRange: selectRange,
    title: 'SELECT Keyword',
    explanationHinglish:
      'सबसे पहले SELECT लिखा है। इसका काम Database को बताना है कि हमें कौन-सा Data चाहिए। जैसे तुम किसी दुकान में जाकर कहते हो कि मुझे ये चीज़ दिखाओ, वैसे ही SQL में SELECT से हम बताते हैं कि कौन-से Columns चाहिए।',
    explanationEnglish:
      'We start with the SELECT keyword. It commands the database which columns of data you want to retrieve from the storage.',
    visualType: 'select_keyword',
    highlightedTable: tableName,
  });

  // Check for DISTINCT
  if (/SELECT\s+DISTINCT\b/i.test(query)) {
    const distinctRange = findRange('DISTINCT', selectRange[1]);
    rawSteps.push({
      tokenText: 'DISTINCT',
      tokenType: 'KEYWORD',
      sourceRange: distinctRange,
      title: 'DISTINCT Keyword',
      explanationHinglish:
        'यहाँ SELECT के तुरंत बाद DISTINCT Keyword आया है। इसका काम Duplicate Values को हटाना है। अगर किसी Department का नाम कई बार आया है, तो वो Result में केवल एक बार ही यूनिक दिखेगा।',
      explanationEnglish:
        'The DISTINCT keyword eliminates duplicate rows from the output, ensuring only unique values are displayed.',
      visualType: 'distinct_keyword',
      highlightedColumns: ['department'],
    });
  }

  // Check Columns / Wildcards / Expressions between SELECT (or DISTINCT) and FROM
  const fromIndex = query.search(/\bFROM\b/i);
  const selectClauseEnd = fromIndex !== -1 ? fromIndex : query.length;
  const selectBody = query.slice(selectRange[1], selectClauseEnd).replace(/\bDISTINCT\b/i, '').trim();

  if (selectBody === '*') {
    // Wildcard *
    const starRange = findRange('*', selectRange[1]);
    rawSteps.push({
      tokenText: '*',
      tokenType: 'WILDCARD',
      sourceRange: starRange,
      title: '* All Columns Wildcard',
      explanationHinglish:
        'यहाँ Star Symbol (*) लगा है। इसका मतलब है कि हमें Table के सभी Columns चाहिए। इसलिए हमें एक-एक Column का नाम अलग से लिखने की ज़रूरत नहीं है।',
      explanationEnglish:
        'The asterisk (*) is a wildcard meaning "all columns". It instructs the database to fetch every column in the table.',
      visualType: 'select_all_columns',
      highlightedColumns: sampleHeaders,
    });
  } else {
    // Specific columns, aliases, or expressions
    // Check if there are aliases with AS
    if (/\bAS\b/i.test(selectBody)) {
      // Split by comma outside parentheses
      const parts = selectBody.split(/,\s*(?![^()]*\))/);
      parts.forEach((part) => {
        const trimmedPart = part.trim();
        const partRange = findRange(trimmedPart, selectRange[1]);

        if (/\(salary\s*\*\s*12\)\s+AS\s+annual_salary/i.test(trimmedPart)) {
          // Arithmetic Calculation + Alias
          rawSteps.push({
            tokenText: trimmedPart,
            tokenType: 'EXPRESSION & ALIAS',
            sourceRange: partRange,
            title: 'Arithmetic Expression & Alias',
            explanationHinglish:
              'यहाँ (salary * 12) लिखा है, जो Monthly Salary को 12 से Multiply करके Annual Salary calculate करता है। आगे "AS annual_salary" से Output में इसे एक साफ नया नाम दिया गया है।',
            explanationEnglish:
              'Calculates annual salary by multiplying monthly salary by 12, and labels the resulting column "annual_salary" using an AS alias.',
            visualType: 'arithmetic_expression',
            highlightedColumns: ['salary'],
            arithmeticCalc: { formula: 'salary × 12', resultExample: '60000 × 12 = 720000' },
            aliasMapping: { original: 'salary * 12', alias: 'annual_salary' },
          });
        } else if (/'Future IT Industry'\s+AS\s+company/i.test(trimmedPart)) {
          // Literal text + Alias
          rawSteps.push({
            tokenText: trimmedPart,
            tokenType: 'STRING LITERAL & ALIAS',
            sourceRange: partRange,
            title: 'Fixed Text Literal & Alias',
            explanationHinglish:
              "Single Quotes (' ') के अंदर 'Future IT Industry' लिखा है। यह एक Fixed Constant Value है जो हर Employee Record के साथ Result में 'company' Column बनकर जुड़ेगी।",
            explanationEnglish:
              'The text inside single quotes is a string literal. It adds a fixed constant value labeled "company" to every row.',
            visualType: 'string_literal',
            literalValue: 'Future IT Industry',
            aliasMapping: { original: "'Future IT Industry'", alias: 'company' },
          });
        } else if (/\bAS\b/i.test(trimmedPart)) {
          // Column Alias: e.g. name AS employee_name
          const match = trimmedPart.match(/([a-zA-Z0-9_]+)\s+AS\s+([a-zA-Z0-9_]+)/i);
          const col = match ? match[1] : trimmedPart;
          const alias = match ? match[2] : '';
          rawSteps.push({
            tokenText: trimmedPart,
            tokenType: 'COLUMN ALIAS',
            sourceRange: partRange,
            title: `Rename Column: ${col} AS ${alias}`,
            explanationHinglish:
              `यहाँ "${col}" Column के आगे AS Keyword लगाकर नया नाम "${alias}" दिया गया है। इसे Column Alias कहते हैं। यह Original Table को बदले बिना केवल Output Header को Rename करता है।`,
            explanationEnglish:
              `Renames the output column header from "${col}" to "${alias}" using the AS alias keyword.`,
            visualType: 'column_alias',
            highlightedColumns: [col],
            aliasMapping: { original: col, alias },
          });
        } else {
          // Plain column in aliased query
          rawSteps.push({
            tokenText: trimmedPart,
            tokenType: 'COLUMN',
            sourceRange: partRange,
            title: `Column: ${trimmedPart}`,
            explanationHinglish:
              `यहाँ "${trimmedPart}" Column मांगा गया है। Database केवल इस Column का Data पढ़ेगा।`,
            explanationEnglish:
              `Selects the "${trimmedPart}" column from the table.`,
            visualType: 'select_specific_column',
            highlightedColumns: [trimmedPart],
          });
        }
      });
    } else {
      // Multiple or single plain columns: e.g. "name", "name, age", "department", "name, salary"
      const cols = selectBody.split(',').map((c) => c.trim()).filter(Boolean);
      if (cols.length === 1) {
        const col = cols[0];
        const colRange = findRange(col, selectRange[1]);
        rawSteps.push({
          tokenText: col,
          tokenType: 'COLUMN',
          sourceRange: colRange,
          title: `Column: ${col}`,
          explanationHinglish:
            `SELECT के बाद हमने "${col}" Column का नाम लिखा है। इसका मतलब है कि हमें Table के बाकी Columns छोड़कर केवल ${col} वाला Column ही Output में चाहिए।`,
          explanationEnglish:
            `Specifies the "${col}" column to retrieve, ignoring unrequested columns.`,
          visualType: 'select_specific_column',
          highlightedColumns: [col],
        });
      } else {
        // Multiple columns
        const colsRange = findRange(selectBody, selectRange[1]);
        rawSteps.push({
          tokenText: selectBody,
          tokenType: 'MULTIPLE COLUMNS',
          sourceRange: colsRange,
          title: `Columns: ${cols.join(', ')}`,
          explanationHinglish:
            `यहाँ Comma (,) से अलग करके Columns "${cols.join(', ')}" लिखे हैं। SQL में जब हमें एक से ज़्यादा Columns चाहिए होते हैं, तो हम उनके बीच Comma लगाते हैं। Output में भी ये इसी क्रम में दिखेंगे।`,
          explanationEnglish:
            `Specifies multiple columns separated by commas: "${cols.join(', ')}". They will appear in this exact order.`,
          visualType: 'select_multiple_columns',
          highlightedColumns: cols,
        });
      }
    }
  }

  // FROM Clause
  if (fromIndex !== -1) {
    const fromRange: [number, number] = [fromIndex, fromIndex + 4];
    rawSteps.push({
      tokenText: 'FROM',
      tokenType: 'CLAUSE KEYWORD',
      sourceRange: fromRange,
      title: 'FROM Clause',
      explanationHinglish:
        'अब Database को ये भी बताना पड़ेगा कि Data किस Table से लेना है। इसलिए हम FROM लिखते हैं। SELECT बताता है क्या चाहिए और FROM बताता है कहाँ से चाहिए।',
      explanationEnglish:
        'The FROM clause specifies the source table. While SELECT defines what to get, FROM defines where to get it.',
      visualType: 'from_clause',
      highlightedTable: tableName,
    });

    // Table Name
    const tableSub = query.slice(fromIndex + 4).trim();
    const tableMatch = tableSub.match(/^([a-zA-Z0-9_]+)/);
    const tbl = tableMatch ? tableMatch[1] : tableName;
    const tableRange = findRange(tbl, fromIndex + 4);

    rawSteps.push({
      tokenText: tbl,
      tokenType: 'TABLE IDENTIFIER',
      sourceRange: tableRange,
      title: `Table: ${tbl}`,
      explanationHinglish:
        `यहाँ "${tbl}" हमारी Database Table का नाम है। Database इसी Table की Rows और Columns को Scan करेगा।`,
      explanationEnglish:
        `"${tbl}" is the name of the database table containing the records to be queried.`,
      visualType: 'table_reference',
      highlightedTable: tbl,
    });
  }

  // Semicolon ;
  if (query.includes(';')) {
    const semiRange = findRange(';', query.length - 2);
    rawSteps.push({
      tokenText: ';',
      tokenType: 'STATEMENT TERMINATOR',
      sourceRange: semiRange[0] !== -1 ? semiRange : [query.length - 1, query.length],
      title: 'Semicolon (;)',
      explanationHinglish:
        'यह Semicolon (;) SQL Statement को समाप्त करने का Standard Marker है। यह Database Parser को बताता है कि Query का अंत यहाँ हो गया है।',
      explanationEnglish:
        'The semicolon terminates the SQL statement, indicating the query is complete.',
      visualType: 'semicolon',
    });
  }

  // Final Step: Complete Query Execution & Verified Result Set
  rawSteps.push({
    tokenText: query,
    tokenType: 'QUERY EXECUTION',
    sourceRange: [0, query.length],
    title: 'Complete Query Execution',
    explanationHinglish:
      `अब पूरी Query तैयार है! जब Database इसे Execute करता है, तो यह "${tableName}" Table से मांगे गए Data को Filter और Format करके ठीक वैसा ही Result Set लौटाता है जैसा नीचे Result Grid में दिख रहा है।`,
    explanationEnglish:
      'The entire query executes! The database fetches and formats the requested columns, producing the verified result set shown below.',
    visualType: 'complete_execution',
    resultHeaders: expectedHeaders,
    resultRows: expectedRows,
  });

  const totalSteps = rawSteps.length;
  const steps: SqlTeachingStep[] = rawSteps.map((s, idx) => ({
    ...s,
    stepNumber: idx + 1,
    totalSteps,
  }));

  return {
    query,
    steps,
    allColumns: sampleHeaders,
    tableName,
    sampleInputRows: sampleRows,
    expectedHeaders,
    expectedRows,
  };
}
