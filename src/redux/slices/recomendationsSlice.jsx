import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const recomendationsSlice = createSlice({
  name: 'recomendations',
  initialState,
  reducers: {
    addItems(state, action) {
      const findItem = state.data.find((obj) => {
        if (obj.type === action.payload.type) {
          return obj;
        }
        return null
      });

      if (findItem) {
        Object.assign(findItem, action.payload);
      } else {
        state.data.push(action.payload);
      }
    },

    clearItems(state) {
      state.data = [];
    },
  },
});

export const { addItems, clearItems} = recomendationsSlice.actions;
export default recomendationsSlice.reducer;
