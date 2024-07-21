// App.js
import React from "react";
import Chart from "react-apexcharts";

class ChartPie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
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
      },
      series: [44, 55],
    };
  }

  render() {
    return (
      <div className="bg-white rounded-lg shadow-lg">
        <div className="row">
          <div className="mixed-chart font-[700] p-3 max-w-[500px]">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="pie"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ChartPie;
