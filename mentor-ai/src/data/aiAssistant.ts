import { ChatMessage } from '../types';

export const initialAiMessages: ChatMessage[] = [
  {
    id: 'msg-1',
    sender: 'ai',
    text: "Hi Subodh! 👋 I'm your AI Mentor. I see you're currently mastering Pandas DataFrames and SQL aggregations. What can I help you conquer today?",
    timestamp: 'Just now',
    topicBadge: 'Mentor AI'
  }
];

export const quickPromptChips = [
  {
    id: 'explain',
    label: 'Explain this concept',
    icon: 'lightbulb',
    prompt: 'Can you explain the difference between GROUP BY and WHERE in SQL with a simple example?'
  },
  {
    id: 'hint',
    label: 'Give me a hint',
    icon: 'sparkle',
    prompt: 'Give me a hint for today\'s SQL mission: finding the top 3 products by revenue.'
  },
  {
    id: 'check',
    label: 'Check my code',
    icon: 'code',
    prompt: 'Can you check my Pandas code for filtering missing values: df.dropna(subset=["revenue"])?'
  }
];

export const getMockAiResponse = (userInput: string): string => {
  const query = userInput.toLowerCase();

  if (query.includes('hint') || query.includes('top 3') || query.includes('mission')) {
    return "💡 **Mentor AI Hint:**\nTo calculate revenue for each product, calculate `SUM(unit_price * quantity)`. Then use `GROUP BY product_name` to aggregate, `ORDER BY total_revenue DESC` to rank the highest, and finally `LIMIT 3` to get the top three!";
  }

  if (query.includes('group by') || query.includes('where') || query.includes('concept')) {
    return "🧠 **Concept Breakdown:**\n- `WHERE` filters individual rows **before** any aggregation happens.\n- `GROUP BY` bundles rows that share values into summary rows.\n- `HAVING` filters the groups **after** aggregation.\n\n*Rule of thumb:* Filter raw records with `WHERE`, filter totals with `HAVING`!";
  }

  if (query.includes('pandas') || query.includes('code') || query.includes('check')) {
    return "✅ **Code Review:**\nYour code `df.dropna(subset=['revenue'])` is completely valid! It removes rows where the 'revenue' column contains `NaN`.\n\n*Bonus Pro-Tip:* If you want to replace NaNs instead of dropping them, use `df['revenue'].fillna(0, inplace=True)`.";
  }

  if (query.includes('power bi') || query.includes('dax')) {
    return "📊 **Power BI Tip:**\nWhen creating DAX measures, always separate **calculated columns** (evaluated row-by-row during data refresh) from **measures** (evaluated dynamically on-the-fly based on report slicer context). Use `CALCULATE()` for context transition!";
  }

  if (query.includes('excel') || query.includes('xlookup')) {
    return "📈 **Excel Pro-Tip:**\n`XLOOKUP` replaces both `VLOOKUP` and `INDEX-MATCH`! It defaults to exact match, searches both left and right, and handles errors gracefully with `[if_not_found]` syntax: `=XLOOKUP(lookup_val, lookup_col, return_col, \"Not Found\")`.";
  }

  return `🤖 **Great question, Subodh!**\nAs your AI Mentor for Data Analytics, I've analyzed your question: "${userInput}".\n\nKey takeaway: In data analysis, always start by validating your data types and checking for null values. Keep practicing step-by-step—every query you write builds your intuition for real-world business analytics!`;
};
