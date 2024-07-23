// App.js
import Chart from "react-apexcharts";

const ChartPie = () => {
  const options = {
    chart: {
      type: "pie",
    },
    labels: ["Last Month", "Current Month"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
            fontWeight: "600",
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    legend: {
      fontFamily: "Plus Jakarta Sans, sans-serif",
    },
    dataLabels: {
      style: {
        fontFamily: "Plus Jakarta Sans, sans-serif",
      },
    },
    title: {
      text: "Chart Expense",
      style: {
        fontFamily: "Plus Jakarta Sans, sans-serif",
        padding: "12px",
      },
    },
  };

  const series = [44, 55];

  return (
    <div className="row">
      <div className="mixed-chart font-[700] p-3 max-w-[500px]">
        <Chart options={options} series={series} type="pie" width="500" />
      </div>
    </div>
  );
};

export default ChartPie;
