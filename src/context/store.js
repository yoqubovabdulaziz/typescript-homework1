import { configureStore } from '@reduxjs/toolkit'
import sidebarSlice from './sidebarSlice'
import modeSlice from './modeSlice'

export const store = configureStore({
    reducer: {
        sidebar: sidebarSlice,
        mode: modeSlice
    }
})