import React from "react";
import "../App.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "",
    uv: 0,
    pv: 1,
    amt: 0,
  },
  {
    name: "",
    uv: 0,
    pv: 4.3,
    amt: 0,
  },
  {
    name: "",
    uv: 0,
    pv: 7.5,
    amt: 0,
  },
  {
    name: "",
    uv: 0,
    pv: 10,
    amt: 0,
  },
  {
    name: "",
    uv: 0,
    pv: 7.5,
    amt: 0,
  },
  {
    name: "",
    uv: 0,
    pv: 4.3,
    amt: 0,
  },
  {
    name: "",
    uv: 0,
    pv: 1,
    amt: 0,
  },
];

export default function App() {
  return (
    <>
      <h1>Channel 2</h1>
      <LineChart
        className="chart"
        width={300}
        height={200}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend /> */}
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          strokeWidth={2}
          // activeDot={{ r: 8 }}
        />
      </LineChart>
    </>
  );
}
