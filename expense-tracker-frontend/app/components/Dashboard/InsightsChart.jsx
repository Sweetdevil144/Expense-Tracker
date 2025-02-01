// app/components/Dashboard/InsightsChart.jsx
"use client";

import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { getInsightsApi } from "../../services/api";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const InsightsChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const data = await getInsightsApi();
        const labels = data.map((item) => item.category);
        const totals = data.map((item) => item.total);

        setChartData({
          labels,
          datasets: [
            {
              label: "Spending",
              data: totals,
              backgroundColor: "rgba(0, 0, 0, 0.8)",
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching insights:", error);
      }
    };

    fetchInsights();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Spending Insights</h2>
      {chartData && chartData.labels ? (
        <Bar
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: { position: "top" },
              title: { display: true, text: "Spending by Category" },
            },
          }}
        />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
};

export default InsightsChart;
