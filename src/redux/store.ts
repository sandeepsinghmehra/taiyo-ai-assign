import { configureStore, createAction, createSlice } from '@reduxjs/toolkit';

// store configration

const initialState = {
  user: null,
};

const setUser = createAction<any>('SET_USER');

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder:any) => {
    builder.addCase(setUser, (state:any, action:any) => {
      state.user = action.payload;
    });
  },
});

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
