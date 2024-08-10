import {
  createExpense,
  deleteExpenseById,
  getExpenseById,
  updateExpenseById,
} from "../../service/expense";
import {
  handleDelete,
  handlePost,
  handleFetch,
} from "../thunk/thunkBuilder/handleBuilder";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { logout } from "./accountSlice";
import { createFetchThunk } from "../thunk/thunkService/fetchDataThunk";

export const getExpenses = createFetchThunk(
  "expense/getExpense",
  getExpenseById
);

export const createEX = createAsyncThunk(
  "expense/createEX",
  async (expense, thunkAPI) => {
    try {
      const data = await createExpense(expense);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteExpense = createAsyncThunk(
  "expense/deleteExpense",
  async (id, thunkAPI) => {
    try {
      const data = await deleteExpenseById(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateExpense = createAsyncThunk(
  "expense/updateExpense",
  async ({ id, expense }, thunkAPI) => {
    try {
      console.log(expense);
      const data = await updateExpenseById(id, expense);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const expenseSlice = createSlice({
  name: "expense",
  initialState: {
    expenseList: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    handleFetch(builder, getExpenses, (state, action) => {
      state.expenseList = action.payload;
    });
    handlePost(builder, createEX);
    handleDelete(builder, deleteExpense, (state, action) => {
      state.expenseList = state.expenseList.filter(
        (expense) => expense._id !== action.payload.id
      );
    });

    builder
      // UPDATE
      .addCase(updateExpense.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateExpense.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.expenseList.findIndex(
          (expense) => expense._id === action.payload._id
        );
        if (index !== -1) {
          state.expenseList[index] = action.payload;
        }
      })
      .addCase(updateExpense.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      })
      .addCase(logout, (state) => {
        state.expenseList = [];
        state.status = "idle";
        state.error = null;
      });
  },
});

export default expenseSlice;
