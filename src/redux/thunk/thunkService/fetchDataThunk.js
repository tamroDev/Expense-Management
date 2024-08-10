import { createAsyncThunk } from "@reduxjs/toolkit";

export const createFetchThunk = (name, apiCall) => {
  return createAsyncThunk(name, async (id, thunkAPI) => {
    try {
      const data = await apiCall(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  });
};
