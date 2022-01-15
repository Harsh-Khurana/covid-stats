import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { historicData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./MyChart.module.css";

const MyChart = ({ data: { active, recovered, deaths, updated }, country }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      const data = await historicData();
      setData(data);
    })();
  }, []);

  const LineChart = data.cases ? (
    <Line
      data={{
        labels: Object.keys(data.cases),
        datasets: [
          {
            data: Object.values(data.cases),
            label: "Infected",
            borderColor: "blue",
            fill: true,
            backgroundColor: "rgba(0, 0, 255, 0.3)",
          },
          {
            data: Object.values(data.deaths),
            label: "Deaths",
            borderColor: "red",
            fill: true,
            backgroundColor: "rgba(255, 0, 0, 0.3)",
          },
        ],
      }}
    />
  ) : null;

  const BarChart = (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [active, recovered, deaths],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state is ${country}` },
      }}
    />
  );

  return (
    <div className={styles.container}>{country ? BarChart : LineChart}</div>
  );
};

export default MyChart;
