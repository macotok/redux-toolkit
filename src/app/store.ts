import cakeReducer from '../features/cake/cakeSlice';
import { configureStore } from '@reduxjs/toolkit';
import icecreamReducer from '../features/icecream/iceCreamSlice';

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
