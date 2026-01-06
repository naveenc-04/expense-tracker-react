function ExpenseList({ expenses, deleteExpense }) {
  if (expenses.length === 0) return <p>No expenses added yet.</p>;

  return (
    <ul className="list">
      {expenses.map((exp) => (
        <li key={exp.id}>
          <span>
            {exp.title} – ₹{exp.amount} ({exp.category})
          </span>
          <button onClick={() => deleteExpense(exp.id)}>X</button>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
