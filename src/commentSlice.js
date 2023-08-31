// commentsSlice.js

import {createSlice} from '@reduxjs/toolkit';

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    data: [],
    error: null,
  },
  reducers: {
    fetchCommentsSuccess: (state, action) => {
      state.data = action.payload;
      state.error = null;
    },
    fetchCommentsFailure: (state, action) => {
      state.data = [];
      state.error = action.payload;
    },
  },
});

export const {fetchCommentsSuccess, fetchCommentsFailure} =
  commentsSlice.actions;
export default commentsSlice.reducer;
