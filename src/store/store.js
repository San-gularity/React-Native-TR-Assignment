// store.js

import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from '../commentSlice'; // Import your slice

const store = configureStore({
  reducer: {
    comments: commentsReducer, // Add your slice reducer here
  },
});

export default store;
