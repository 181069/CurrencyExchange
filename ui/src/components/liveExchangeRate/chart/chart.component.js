import React from "react";
import classes from "./chart.module.css";
import { LineChart, Line } from "recharts";

const data = [
  { name: "Hour 1", uv: 55, pv: 2000, amt: 2000 },
  { name: "Hour 2", uv: 85, pv: 2000, amt: 2000 },
  { name: "Hour 3", uv: 80, pv: 2000, amt: 2000 },
  { name: "Hour 4", uv: 75, pv: 2000, amt: 2000 },
];

const Chart = () => {
  return (
    <LineChart width={90} height={50} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
  );
};

export default Chart;
