import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reduxSlices/accountSlice";
import expenseSlice from "./reduxSlices/expenseSlice";
import revenuSlice from "./reduxSlices/revenuSlice";
import statisticSlice from "./reduxSlices/statisticsSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    expense: expenseSlice.reducer,
    revenu: revenuSlice.reducer,
    statistic: statisticSlice.reducer,
  },
});

export default store;
