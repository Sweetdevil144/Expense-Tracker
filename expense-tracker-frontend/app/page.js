"use client";

import ExpenseList from "./components/Dashboard/ExpenseList";
import InsightsChart from "./components/Dashboard/InsightsChart";
import Filters from "./components/Dashboard/Filters";
import { useState } from "react";

export default function DashboardPage() {
  // State for filters; pass to ExpenseList if needed.
  const [filters, setFilters] = useState({});

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    // You can also pass filters to ExpenseList via props or use context.
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-center">Dashboard</h1>
      <Filters onFilterChange={handleFilterChange} />
      <ExpenseList filters={filters} />
      <InsightsChart />
    </div>
  );
}
