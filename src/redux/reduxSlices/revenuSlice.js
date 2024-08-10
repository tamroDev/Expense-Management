import {
  createRevenu,
  getRevenuById,
  deleteRevenuById,
  updateRevenuById,
} from "../../service/revenu";
import {
  handleFetch,
  handlePost,
  handleDelete,
} from "../thunk/thunkBuilder/handleBuilder";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logout } from "./accountSlice";
import { createFetchThunk } from "../thunk/thunkService/fetchDataThunk";

// [GET] Get Revenu by ID
export const getRevenu = createFetchThunk("revenu/getRevenu", getRevenuById);
// [POST] Create Revenu
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
// [DELETE] Delete Revenu
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
// [PUT]: Update revenu
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
    handleFetch(builder, getRevenu, (state, action) => {
      state.revenuList = action.payload;
    });
    handlePost(builder, createRV);
    handleDelete(builder, deleteRevenu, (state, action) => {
      state.revenuList = state.revenuList.filter(
        (expense) => expense._id !== action.payload.id
      );
    });
    builder

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
      })
      .addCase(logout, (state) => {
        state.revenuList = [];
        state.status = "idle";
        state.error = null;
      });
  },
});
export default revenuSlice;
