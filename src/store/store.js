import { configureStore } from '@reduxjs/toolkit'
import { reducers } from './counter'

const store = configureStore({
  reducer: reducers
})

export default store