// App.js
import Chart from "react-apexcharts";

const ChartPie = ({ totalExpenses, totalRevenu }) => {
  const ratioEx = (totalExpenses / (totalExpenses + totalRevenu)) * 100;
  const ratioRv = (totalRevenu / (totalExpenses + totalRevenu)) * 100;

  const options = {
    chart: {
      type: "pie",
    },
    labels: ["Expense", "Revenu"],
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

  const series = [ratioEx, ratioRv];

  return (
    <div className="row">
      <div className="mixed-chart font-[700] p-3 max-w-[450px]">
        <Chart options={options} series={series} type="pie" width="450" />
      </div>
    </div>
  );
};

export default ChartPie;
