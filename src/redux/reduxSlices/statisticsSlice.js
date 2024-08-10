import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getExpenseById } from "../../service/expense";
import { getRevenuById } from "../../service/revenu";
import { logout } from "./accountSlice";
import { handleFetch } from "../thunk/thunkBuilder/handleBuilder";

// Thunk để lấy thông tin revenu
export const getDataStatistic = createAsyncThunk(
  "statistic/getData",
  async (id, thunkAPI) => {
    try {
      const dataRevenu = await getRevenuById(id);
      const dataExpense = await getExpenseById(id);

      const data = {
        dataExpense,
        dataRevenu,
      };

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Slice để xử lý các state và action liên quan đến thống kê
const statisticSlice = createSlice({
  name: "statistic",
  initialState: {
    expenses: [],
    revenu: [],
    totalExpenses: 0,
    totalRevenu: 0,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    handleFetch(builder, getDataStatistic, (state, action) => {
      state.revenu = action.payload.dataRevenu;
      state.expenses = action.payload.dataExpense;

      if (Array.isArray(state.revenu) && Array.isArray(state.expenses)) {
        state.totalRevenu = state.revenu.reduce(
          (sum, expense) => sum + parseInt(expense.budget),
          0
        );

        state.totalExpenses = state.expenses.reduce(
          (sum, expense) => sum + parseInt(expense.budget),
          0
        );
      }
    });
    builder.addCase(logout, (state) => {
      state.expenses = [];
      state.revenu = [];
      state.totalExpenses = 0;
      state.totalRevenu = 0;
      state.status = "idle";
      state.error = null;
    });
  },
});

export const { calculateTotals } = statisticSlice.actions;

export default statisticSlice;
