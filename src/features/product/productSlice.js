import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts, signupuser } from "./productAPI";

const initialState = {
  products: [],
  status: "idle",
};
export const fetchAsync = createAsyncThunk(
  "products/fetchProduct",
  async () => {
    const response = await fetchProducts();
    return response.data;
  }
);
// export const signupAsync = createAsyncThunk("signup/signupuser", async () => {
//   const response = await signupuser();
//   return response.data;
// });

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      });
    // .addCase(signupAsync.fulfilled, (state, action) => {
    //   state.status = "idle";
    //   state.products = action.payload;
    // });
    // .addCase(addAsync.fulfilled, (state, action) => {
    //   state.status = "idle";
    //   state.products += action.payload;
    // });
  },
});

export default productSlice.reducer;
