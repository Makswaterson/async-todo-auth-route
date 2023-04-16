import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasks/slice';
import { filtersReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
