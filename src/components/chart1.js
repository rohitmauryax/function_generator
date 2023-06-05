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

export default function App() {
  const data = [
    {
      name: "",
      uv: 4000,
      pv: 6,
      amt: 0,
    },
    {
      name: "",
      uv: 3000,
      pv: 11,
      amt: 0,
    },
    {
      name: "",
      uv: 2000,
      pv: 1,
      amt: 0,
    },
    {
      name: "",
      uv: 2780,
      pv: 6,
      amt: 0,
    },
    // {
    //   name: "",
    //   uv: 1890,
    //   pv: 4800,
    //   amt: 2181,
    // },
    // {
    //   name: "",
    //   uv: 2390,
    //   pv: 3800,
    //   amt: 2500,
    // },
    // {
    //   name: "Freq",
    //   uv: 3490,
    //   pv: 4300,
    //   amt: 2100,
    // },
  ];
  return (
    <>
      <h1>Channel 1</h1>
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
