// app/expense/[id]/page.jsx
"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ExpenseForm from "../../components/ExpenseForm";
import { getExpenseApi, updateExpenseApi } from "../../services/api";

export default function EditExpensePage() {
  const router = useRouter();
  const { id } = useParams(); // dynamic route parameter
  const [expenseData, setExpenseData] = useState(null);

  useEffect(() => {
    const fetchExpense = async () => {
      try {
        const data = await getExpenseApi(id);
        setExpenseData(data);
      } catch (error) {
        console.error("Error fetching expense:", error);
      }
    };

    if (id) fetchExpense();
  }, [id]);

  const handleUpdateExpense = async (updatedData) => {
    try {
      const data = await updateExpenseApi(id, updatedData);
      console.log("Expense updated:", data);
      router.push("/");
    } catch (error) {
      console.error("Error updating expense:", error);
    }
  };

  if (!expenseData) {
    return <p className="text-center">Loading expense data...</p>;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <ExpenseForm initialData={expenseData} onSubmit={handleUpdateExpense} />
    </div>
  );
}
