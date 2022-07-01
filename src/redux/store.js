import { configureStore } from '@reduxjs/toolkit'
import stepsCount from './slices/stepsCountSlice'
import recomendations from "./slices/recomendationsSlice";

export const store = configureStore({
  reducer: {
    stepsCount,
    recomendations
  },
})