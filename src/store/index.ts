// src/store/calculatorSlice.ts
import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from '../store/calculatorSlice';

const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
