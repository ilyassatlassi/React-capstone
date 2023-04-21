import { configureStore } from '@reduxjs/toolkit';
import populationReducer from './stock/populationSlice';

const store = configureStore({
  reducer: {
    population: populationReducer,
  },
});

export default store;
