import Box from "./components/Box";
import StatisticsGroup from "./components/StatisticsGroup";
import Chart from "../../components/Chart/Chart";

import { useDispatch, useSelector } from "react-redux";
import LimitSpending from "./components/LimitSpending/LimitSpending";
import { getDataStatistic } from "../../redux/reduxSlices/statisticsSlice";
import { useEffect } from "react";

function Statistics() {
  const dispatch = useDispatch();
  const { _id } = useSelector((state) => state.auth.userDetails);

  useEffect(() => {
    if (_id) {
      dispatch(getDataStatistic(_id));
    }
  }, [dispatch, _id]);

  const { totalExpenses, totalRevenu } = useSelector(
    (state) => state.statistic
  );

  return (
    <div className="custom-scrollbar overflow-auto w-full h-full flex flex-auto flex-wrap justify-start items-center gap-3 py-2 sm:justify-center sm:w-full">
      <Box>
        <Chart totalExpenses={totalExpenses} totalRevenu={totalRevenu} />
      </Box>
      <Box>
        <LimitSpending
          totalExpenses={totalExpenses}
          totalRevenu={totalRevenu}
        />
      </Box>
      <StatisticsGroup
        totalExpenses={totalExpenses}
        totalRevenu={totalRevenu}
      />
    </div>
  );
}

export default Statistics;
