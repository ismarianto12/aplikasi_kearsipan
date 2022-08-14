import { configureStore } from '@reduxjs/toolkit'
import arsipReducer from '../actions/arsip'


export const store = configureStore({
    reducer: {
        arsip: arsipReducer
    }
});