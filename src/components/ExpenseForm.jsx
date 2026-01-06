import { useState } from "react";

function ExpenseForm({ addExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    addExpense({
      id: Date.now(),
      title,
      amount: Number(amount),
      category,
    });

    setTitle("");
    setAmount("");
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <input
        placeholder="Expense name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
        <option>Other</option>
      </select>
      <button>Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
