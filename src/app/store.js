import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import fantasyReducer from '../features/fantasy/fantasySlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    fantasy: fantasyReducer
  }
})

export default store