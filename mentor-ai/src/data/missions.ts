import { Mission } from '../types';

export const todayMission: Mission = {
  id: 'sql-top-products',
  title: 'SQL Challenge',
  description: 'Find the top 3 products by revenue from the given dataset.',
  duration: '10 min',
  difficulty: 'Beginner',
  xpReward: 120,
  topic: 'SQL Aggregations & Ordering',
  sqlProblem: {
    tableSchema: 'orders (order_id INT, product_name VARCHAR, unit_price DECIMAL, quantity INT)',
    sampleData: [
      { order_id: 101, product_name: 'UltraBook Pro', unit_price: 1200, quantity: 4, revenue: 4800 },
      { order_id: 102, product_name: 'Wireless Mouse', unit_price: 45, quantity: 20, revenue: 900 },
      { order_id: 103, product_name: '4K Monitor 27"', unit_price: 450, quantity: 6, revenue: 2700 },
      { order_id: 104, product_name: 'Ergonomic Chair', unit_price: 320, quantity: 7, revenue: 2240 },
      { order_id: 105, product_name: 'Mechanical Keyboard', unit_price: 110, quantity: 12, revenue: 1320 }
    ],
    expectedQuerySnippet: 'SELECT product_name, SUM(unit_price * quantity) AS total_revenue\nFROM orders\nGROUP BY product_name\nORDER BY total_revenue DESC\nLIMIT 3;',
    explanation: 'Multiply unit_price by quantity, group by product_name, sort descending by revenue and limit the result to 3 records.'
  }
};
