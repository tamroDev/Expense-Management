import MyCalendar from "./components/Calendar";
import ScrollBar from "../../layouts/components/ScrollBar";
import OverviewHome from "./components/OverviewHome";
import TableHome from "./components/TableHome";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDataStatistic } from "../../redux/reduxSlices/statisticsSlice";
import { fetchDetailUser } from "../../redux/reduxSlices/accountSlice";

function Home() {
  const dispatch = useDispatch();
  const { _id } = useSelector((state) => state.auth.userDetails);

  useEffect(() => {
    dispatch(fetchDetailUser());
  }, [dispatch]);

  useEffect(() => {
    if (_id) {
      const timeoutId = setTimeout(() => {
        dispatch(getDataStatistic(_id));
      }, 500);

      // Cleanup the timeout if _id or dispatch changes or if the component unmounts
      return () => clearTimeout(timeoutId);
    }
  }, [_id, dispatch]);

  const { totalExpenses, totalRevenu } = useSelector(
    (state) => state.statistic
  );

  return (
    <div className="flex items-start justify-center gap-2 h-[100%]">
      <ScrollBar flex={"60%"}>
        <OverviewHome totalExpenses={totalExpenses} totalRevenu={totalRevenu} />
      </ScrollBar>

      <ScrollBar flex={"40%"}>
        <MyCalendar />
        <TableHome totalExpenses={totalExpenses} totalRevenu={totalRevenu} />
      </ScrollBar>
    </div>
  );
}

export default Home;
