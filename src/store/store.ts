import { configureStore } from '@reduxjs/toolkit'
import { postSlices } from './slices/posts/postSlices'

export const store = configureStore({
  reducer: {
    post: postSlices.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
