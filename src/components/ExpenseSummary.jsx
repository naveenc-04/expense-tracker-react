function ExpenseSummary({ expenses }) {
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return <h3>Total Spent: ₹{total}</h3>;
}

export default ExpenseSummary;
