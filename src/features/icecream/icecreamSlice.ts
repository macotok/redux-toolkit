import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ordered as cakeOrdered } from '../cake/cakeSlice';

type InitialState = {
  numberOfIcecream: number;
};

const initialState: InitialState = {
  numberOfIcecream: 10,
};

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfIcecream--;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numberOfIcecream += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numberOfIcecream--;
    });
  },
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;
