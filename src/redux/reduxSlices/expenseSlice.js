import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expense",
  initialState: {
    expenseList: [],
    status: "idle",
    error: null,
  },
});

export default expenseSlice;
