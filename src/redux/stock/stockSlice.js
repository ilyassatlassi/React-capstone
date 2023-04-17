import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url =
  "https://financialmodelingprep.com/api/v3/balance-sheet-statement/AAPL?apikey=6f672427883fe56dd0c35cb0504f7bda&limit=120";

export const getStock = createAsyncThunk("stock/getStock", async () => {
  try {
    const resp = await axios.get(url);
    const data = resp.data;

    return data;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  stock: [],
  isLoading: false,
  error: undefined,
};

const stockSlice = createSlice({
    name: 'books',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
      builder
        .addCase(getStock.pending, (state) => ({
          ...state,
          isLoading: true,
        }))
        .addCase(getStock.fulfilled, (state, action) => {
            console.log(action.payload); // Add this console.log statement
            return {
              ...state,
              stock: action.payload,
              isLoading: false,
            }
          })
          
        .addCase(getStock.rejected, (state, action) => ({
          ...state,
          isLoading: false,
          error: action.payload,
        }))
    },
  
  });

  export default stockSlice.reducer;