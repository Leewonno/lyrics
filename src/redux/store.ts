import { configureStore } from '@reduxjs/toolkit';
import toastReducer from './toast'

export default configureStore({
  reducer: {
    visible: toastReducer
  },
})
