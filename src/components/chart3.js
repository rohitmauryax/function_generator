import "../App.css";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const series = [
  {
    name: "Series 1",
    data: [
      { category: "A", value: 2 },
      { category: "B", value: 2 },
      { category: "B", value: 6 },
      { category: "C", value: 6 },
      { category: "D", value: 6 },
      { category: "D", value: 2 },
      { category: "F", value: 2 }


    ]
  },
];

export default function App() {
  return (
<>
<h1>Channel 3</h1>
    <LineChart
        className="chart"
        width={300}
        height={200}
        margin={{
            top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis
        dataKey="category"
        type="category"
        allowDuplicatedCategory={false}
      />
      {/* <YAxis dataKey="value" />
      <Tooltip />
      <Legend /> */}
      {series.map((s) => (
        <Line dataKey="value" data={s.data} name={s.name} key={s.name} strokeWidth={2} stroke="#8884d8"/>
        ))}
    </LineChart>
 </>
  );
}