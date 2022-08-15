import { configureStore } from '@reduxjs/toolkit'
import arsipReducer from '../actions/arsip'
import loginReducer from '../actions/login';


export const store = configureStore({
    reducer: {
        arsip: arsipReducer,
        login: loginReducer
    }
});