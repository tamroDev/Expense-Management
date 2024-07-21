import MyCalendar from "./components/Calendar";
import ScrollBar from "../../layouts/components/ScrollBar";
import OverviewHome from "./components/OverviewHome";
import Chart from "../../components/Chart/Chart";

function Home() {
  return (
    <div className="flex items-start justify-center gap-2 h-[100%]">
      <ScrollBar flex={"60%"}>
        <OverviewHome />
      </ScrollBar>

      <ScrollBar flex={"40%"}>
        <MyCalendar />
        <Chart />
      </ScrollBar>
    </div>
  );
}

export default Home;
