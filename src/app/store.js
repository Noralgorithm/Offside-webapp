import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import albumReducer from '../features/album/albumSlice'
import inventoryReducer from '../features/inventory/inventorySlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    album: albumReducer,
    inventory: inventoryReducer
  }
})

export default store