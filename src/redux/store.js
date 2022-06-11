import { configureStore } from '@reduxjs/toolkit'
import stepsCount from './slices/stepsCountSlice'

export const store = configureStore({
  reducer: {
    stepsCount
  },
})