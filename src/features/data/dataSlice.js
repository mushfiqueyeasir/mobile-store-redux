import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  isLoading: true,
  isError: false,
  error: "",
};
export const getData = createAsyncThunk("data/getData", async () => {
  const res = await fetch(
    "https://epicvirtualsolution.com/linkskill/api/frontend.php"
  );
  const data =await res.json();
  return data;
});
const dataSlice = createSlice({
  name: "data",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.error = "";
      })
      .addCase(getData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export const {} = dataSlice.actions;
export default dataSlice.reducer;
