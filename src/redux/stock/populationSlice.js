import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPopulationData = createAsyncThunk(
  'population/fetchPopulationData',
  async () => {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    return response.data.map((country) => ({
      name: country.name.common,
      population: country.population,
      flag: country.flags.png,
      capital: country.capital,
      region: country.region,
      subregion: country.subregion,
      // currencies:country.currencies.name,
      // symbol:country.currencies.symbol,

    }));
  },
);

export const populationSlice = createSlice({
  name: 'population',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setData: (state, action) => {
      /* eslint-disable */
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopulationData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPopulationData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchPopulationData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
/* eslint-disable */

export const selectFilteredData = (state) => state.population.data;

export const { setData } = populationSlice.actions;

export default populationSlice.reducer;
