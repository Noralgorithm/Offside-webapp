import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import albumReducer from '../features/album/albumSlice'
import inventoryReducer from '../features/inventory/inventorySlice'
import fantasyReducer from '../features/fantasy/fantasySlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    album: albumReducer,
    inventory: inventoryReducer,
    fantasy: fantasyReducer
  }
})

export default store
