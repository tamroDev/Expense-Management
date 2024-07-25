// BarChart.js
import ApexCharts from "react-apexcharts";

const BarChart = () => {
  const options = {
    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    yaxis: {
      title: {
        text: "Revenue",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  };

  const series = [
    {
      name: "Revenue",
      data: [30, 40, 35, 50, 49, 60, 70],
    },
  ];

  return (
    <div className="row">
      <div className="mixed-chart font-[700] p-3 max-w-[450px]">
        <ApexCharts
          options={options}
          series={series}
          type="bar"
          height={350}
          width={450}
        />
      </div>
    </div>
  );
};

export default BarChart;
