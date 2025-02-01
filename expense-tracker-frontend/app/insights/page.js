// app/insights/page.js
'use client';

import InsightsChart from '../components/Dashboard/InsightsChart';

export default function InsightsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Spending Insights</h1>
      <InsightsChart />
    </div>
  );
}
