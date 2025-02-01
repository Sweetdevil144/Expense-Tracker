// app/components/Dashboard/ExpenseList.jsx
"use client";

import { useState, useEffect } from "react";
import { getExpensesApi } from "../../services/api";

const ExpenseList = ({ filters = {} }) => {
  const [expenses, setExpenses] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await getExpensesApi(page, 10, filters);
        setExpenses(data);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };

    fetchExpenses();
  }, [page, filters]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Expense List</h2>
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="px-4 py-2 text-left">Amount</th>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">Description</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense._id} className="border-b">
              <td className="px-4 py-2">{expense.amount}</td>
              <td className="px-4 py-2">{expense.category}</td>
              <td className="px-4 py-2">{new Date(expense.date).toLocaleDateString()}</td>
              <td className="px-4 py-2">{expense.description}</td>
              <td className="px-4 py-2 space-x-2">
                {/* Replace with proper links/buttons to edit or delete expense */}
                <button className="inline-block">
                  <img src="/icons/edit.png" alt="Edit" className="w-5 h-5" />
                </button>
                <button className="inline-block">
                  <img src="/icons/delete.png" alt="Delete" className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <button onClick={() => setPage(page - 1)} disabled={page === 1} className="px-4 py-2 bg-gray-200 rounded mr-2">
          Prev
        </button>
        <button onClick={() => setPage(page + 1)} className="px-4 py-2 bg-gray-200 rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default ExpenseList;
