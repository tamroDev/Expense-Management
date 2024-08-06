import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createExpense,
  deleteExpenseById,
  getExpenseById,
  updateExpenseById,
} from "../../service/expense";

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

export const getExpenses = createAsyncThunk(
  "expense/getExpense",
  async (id, thunkAPI) => {
    try {
      const data = await getExpenseById(id);
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
    builder
      // Create
      .addCase(createEX.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createEX.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(createEX.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      })
      // GET
      .addCase(getExpenses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getExpenses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.expenseList = action.payload;
      })
      .addCase(getExpenses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      })
      // GET
      .addCase(deleteExpense.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteExpense.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.expenseList = state.expenseList.filter(
          (expense) => expense._id !== action.payload.id
        );
      })
      .addCase(deleteExpense.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      })
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
      });
  },
});

export default expenseSlice;
