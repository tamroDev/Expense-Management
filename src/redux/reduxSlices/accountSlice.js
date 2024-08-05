import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import {
  createAccount,
  getUserDetails,
  loginAccount,
} from "../../service/auth";

export const login = createAsyncThunk(
  "auth/login",
  async (account, thunkAPI) => {
    try {
      const response = await loginAccount(account);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (newAccount, thunkAPI) => {
    try {
      const response = await createAccount(newAccount);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchDetailUser = createAsyncThunk(
  "auth/me",
  async (_, thunkAPI) => {
    try {
      const response = await getUserDetails();

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: Cookies.get("accessToken") || "",
    userDetails: {},
    status: "idle",
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.accessToken = "";
      state.refreshToken = "";
      state.userDetails = {};
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        const { accessToken, refreshToken } = action.payload;
        if (accessToken && refreshToken) {
          state.status = "succeeded";
          state.accessToken = accessToken;
          Cookies.set("accessToken", accessToken);
          Cookies.set("refreshToken", refreshToken);
        } else {
          state.status = "failed";
          state.error = action.payload.message;
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      })
      // Register
      .addCase(register.pending, (state) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      })
      // Get Details Data
      .addCase(fetchDetailUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDetailUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userDetails = action.payload;
      })
      .addCase(fetchDetailUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice;
