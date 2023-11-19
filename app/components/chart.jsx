"use client";
import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const [chartData, setchartData] = useState({ datasets: [] });
  const [chartOptions, setchartOptions] = useState({});

  useEffect(() => {
    setchartData({
      labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Sales $",
          data: [12434, 28679, 37546, 18768, 25675, 5637],
          borderColor: "green",
          backgroundColor: " rgb(59, 59, 159)",
        },
      ],
    });
    setchartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "DailyRevenue",
        },
        maintainAspectRatio: false,
        responsive: true,
      },
    });
  }, []);

  return (
    <div className="chart">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default Chart;
