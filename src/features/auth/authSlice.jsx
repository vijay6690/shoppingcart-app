import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser, signupUser } from "./authApi";

const initialState = {
  users: [
    {
      username: "",
      email: "",
      phone: "",
      password: "",
    },
  ],
};

export const signupAsync = createAsyncThunk(
  "users/signupuser",
  async (user) => {
    const response = await signupUser(user);
    return response.data;
  }
);
export const loginAsync = createAsyncThunk(
  "users/loginuser",
  async (username) => {
    const response = await loginUser(username);
    return response.data;
  }
);

export const authSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(signupAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.users = action.payload;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.users = action.payload;
        console.log(action.payload);
      });
  },
});
export default authSlice.reducer;
