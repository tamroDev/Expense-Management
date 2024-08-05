import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reduxSlices/accountSlice";
import expenseSlice from "./reduxSlices/expenseSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    expense: expenseSlice.reducer,
  },
});

export default store;
