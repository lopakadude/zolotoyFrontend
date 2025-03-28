import { configureStore } from '@reduxjs/toolkit';
import { api } from './zolotoy/zolotoy.api';
import { authReducer } from './zolotoy/auth.slice';
import { modalReducer } from './zolotoy/modal.slice';
import { popupReducer } from './zolotoy/popup.slice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    modal: modalReducer,
    popup: popupReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});

