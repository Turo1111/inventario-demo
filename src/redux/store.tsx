import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import loadingSlice from './loadingSlice'
import alertSlice from './alertSlice'
import saleSlice from './saleSlice'

export const store = configureStore({
    reducer: {
        user: userSlice,
        loading: loadingSlice,
        alert: alertSlice,
        sale: saleSlice,
    }
})

