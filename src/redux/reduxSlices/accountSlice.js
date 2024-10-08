import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import {
  createAccount,
  getUserDetails,
  loginAccount,
  updateLimit,
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

export const updateLimitUser = createAsyncThunk(
  "auth/updateLimit", // Sửa lại tên hành động đúng
  async ({ id, limit }, thunkAPI) => {
    try {
      const data = await updateLimit(id, limit);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: Cookies.get("accessToken") || "",
    userDetails: JSON.parse(localStorage.getItem("userDetails")) || {},
    status: "idle",
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.accessToken = "";
      state.refreshToken = "";
      state.userDetails = {};
      localStorage.removeItem("userDetails");
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
    },
  },
  extraReducers: (builder) => {
    // Login
    builder
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
      // Get Details Data
      .addCase(fetchDetailUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDetailUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userDetails = action.payload;
        localStorage.setItem("userDetails", JSON.stringify(action.payload));
      })
      .addCase(fetchDetailUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // REGISTER AUTH
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
      // UPDATE LIMIT
      .addCase(updateLimitUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateLimitUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userDetails.limit = action.meta.arg.limit;
        let oldUser = JSON.parse(localStorage.getItem("userDetails"));
        oldUser = {
          ...oldUser,
          limit: action.meta.arg.limit,
        };

        localStorage.setItem("userDetails", JSON.stringify(oldUser));
      })
      .addCase(updateLimitUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice;
