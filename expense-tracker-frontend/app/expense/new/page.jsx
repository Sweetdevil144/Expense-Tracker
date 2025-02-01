// app/expense/new/page.jsx
"use client";

import ExpenseForm from "../../components/ExpenseForm";
import { useRouter } from "next/navigation";
import { createExpenseApi } from "../../services/api";

export default function NewExpensePage() {
  const router = useRouter();

  const handleAddExpense = async (expenseData) => {
    try {
      const data = await createExpenseApi(expenseData);
      console.log("Expense created:", data);
      router.push("/");
    } catch (error) {
      console.error("Error creating expense:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <ExpenseForm onSubmit={handleAddExpense} />
    </div>
  );
}
