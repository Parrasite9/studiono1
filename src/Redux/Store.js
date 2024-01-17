import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Reducers/Reducer';

const store = configureStore({
  reducer: rootReducer
});

export default store;
