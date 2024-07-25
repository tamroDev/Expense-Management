import Box from "./components/Box";
import StatisticsGroup from "./components/StatisticsGroup";
import Chart from "../../components/Chart/Chart";
import ChartsOverviewDemo from "../../components/Chart/Barchar";

function Statistics() {
  return (
    <div className="custom-scrollbar overflow-auto w-full h-full flex flex-auto flex-wrap justify-start items-center gap-3 py-2 sm:justify-center sm:w-full">
      <Box>
        <Chart />
      </Box>
      <Box>
        <ChartsOverviewDemo />
      </Box>
      <StatisticsGroup />
    </div>
  );
}

export default Statistics;
