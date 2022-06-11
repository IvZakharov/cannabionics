import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const stepsCountSlice = createSlice({
  name: 'stepsCount',
  initialState,
  reducers: {
    countPlus(state, action) {
      state.count += 1;
    },

    countMinus(state, action) {
      state.count -= 1;
    },

    countReset(state, action) {
      state.count = 0;
    },
  },
});

export const { countPlus, countMinus, countReset } = stepsCountSlice.actions;
export default stepsCountSlice.reducer;
