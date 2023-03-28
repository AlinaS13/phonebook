import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import { contactsReducer } from './contacts/contactSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contactsStore: contactsReducer,
  },
});
