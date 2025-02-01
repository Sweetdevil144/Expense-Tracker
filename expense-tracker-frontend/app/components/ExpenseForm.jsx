"use client";
import { useState, useEffect } from 'react';

const ExpenseForm = ({ initialData = {}, onSubmit }) => {
  const [amount, setAmount] = useState(initialData.amount || '');
  const [category, setCategory] = useState(initialData.category || '');
  const [date, setDate] = useState(initialData.date ? initialData.date.slice(0,10) : '');
  const [description, setDescription] = useState(initialData.description || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass form data back to parent
    onSubmit({ amount, category, date, description });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 border rounded shadow my-4">
      <h2 className="text-2xl font-bold mb-4">{initialData._id ? 'Edit Expense' : 'Add New Expense'}</h2>
      <div className="mb-4">
        <label htmlFor="amount" className="block mb-1">Amount</label>
        <input
          type="number"
          id="amount"
          className="w-full p-2 border rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block mb-1">Category</label>
        <input
          type="text"
          id="category"
          className="w-full p-2 border rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block mb-1">Date</label>
        <input
          type="date"
          id="date"
          className="w-full p-2 border rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block mb-1">Description</label>
        <textarea
          id="description"
          className="w-full p-2 border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Optional description"
        />
      </div>
      <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
        {initialData._id ? 'Update Expense' : 'Add Expense'}
      </button>
    </form>
  );
};

export default ExpenseForm;
