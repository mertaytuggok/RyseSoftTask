import React from "react";
import { Chart } from "react-google-charts";

export const options = {
  title: "Revenue",
  curveType: "function",
  legend: { position: "bottom" },
};

export function Revenue({ chartData }) {
  return (
    <>
      <Chart
        chartType="LineChart"
        width="90%"
        height="300px"
        data={chartData}
        options={options}
      />
    </>
  );
}
