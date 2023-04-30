import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

const JobsChart = () => {
  const [chartData, setChartData] = useState({});
  const experiences = useSelector((state) => state.experiences);

    const experienceMonths = experiences.map((exp) => exp.timeInMonths);
    console.log(experienceMonths)
    setChartData({
      labels: experiences.map((exp) => exp.jobTitle),
      datasets: [
        {
          label: "Months Worked",
          data: experienceMonths,
          fill: false,
          borderColor: "rgba(75,192,192,1)",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
        },
      ],
    });

  return (
    <div>
      <h2>Months Worked by Job Title</h2>
      <Line
        data={chartData}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export { JobsChart };
