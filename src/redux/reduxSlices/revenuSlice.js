import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createRevenu,
  getRevenuById,
  deleteRevenuById,
  updateRevenuById,
} from "../../service/revenu";

export const createRV = createAsyncThunk(
  "revenu/create",
  async (revenu, thunkAPI) => {
    try {
      const data = await createRevenu(revenu);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getRevenu = createAsyncThunk(
  "revenu/getRevenu",
  async (id, thunkAPI) => {
    try {
      const data = await getRevenuById(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteRevenu = createAsyncThunk(
  "revenu/deleteRevenu",
  async (id, thunkAPI) => {
    try {
      const data = await deleteRevenuById(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateRevenu = createAsyncThunk(
  "revenu/updateRevenu",
  async ({ id, revenu }, thunkAPI) => {
    try {
      console.log(revenu);
      const data = await updateRevenuById(id, revenu);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const revenuSlice = createSlice({
  name: "revenu",
  initialState: {
    revenuList: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create
      .addCase(createRV.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createRV.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(createRV.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      })
      // GET
      .addCase(getRevenu.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getRevenu.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.revenuList = action.payload;
      })
      .addCase(getRevenu.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      }) // GET
      .addCase(deleteRevenu.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteRevenu.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.revenuList = state.revenuList.filter(
          (revenu) => revenu._id !== action.payload.id
        );
      })
      .addCase(deleteRevenu.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      })
      // UPDATE
      .addCase(updateRevenu.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateRevenu.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.revenuList.findIndex(
          (revenu) => revenu._id === action.payload._id
        );
        if (index !== -1) {
          state.revenuList[index] = action.payload;
        }
      })
      .addCase(updateRevenu.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      });
  },
});
export default revenuSlice;
