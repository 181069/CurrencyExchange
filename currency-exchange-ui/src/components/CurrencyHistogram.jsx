import React from "react";
import "./CurrencyHistogram.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);




/**
 *
 * @param {Object} props
 * @param {number[]} props.data
 * @param {boolean} props.positiveChange
 * @returns
 */
const CurrencyHistogram = (props) => {
  const positiveChange = props.data[0] < props.data.slice(-1);

  console.log(props);
  const data = {
    labels: Array(props.data.length).join(".").split("."),
    datasets: [
      {
        // label: "# of Votes",
        data: props.data,
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: [
          positiveChange ? "green" : "red",
          // "rgba(54, 162, 235, 1)",
          // "rgba(255, 206, 86, 1)",
          // "rgba(75, 192, 192, 1)",
          // "rgba(153, 102, 255, 1)",
          // "rgba(255, 159, 64, 1)",
        ],
        // borderWidth: 1,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    plugins: {
      legend: false, // Hide legend
      datalabels: {
        display: false,
      },
    },
    scales: {
      y: {
        display: false, // Hide Y axis labels
      },
      x: {
        display: false, // Hide X axis labels
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  return (
    <div className="CurrencyHistogram">
      <Line data={data} options={options} />
    </div>
  );
};

export default CurrencyHistogram;
