import { configureStore } from '@reduxjs/toolkit'
import appReducer from 'services/app/reducer'

export default configureStore({
  reducer: appReducer
})
