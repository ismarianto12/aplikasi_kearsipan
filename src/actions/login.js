import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API_ADDR from '../helpers/app'
import Swal from "sweetalert2";

export const loginSlice = createSlice({
    name: 'login',
    initialState: {},
    reducers: {
        loginAction: (state, action) => {

            let username = action.payload.username
            let password = action.payload.password
            
            localStorage.setItem('token', username)
            console.log(localStorage.getItem('token').length)
            // window.location.href='/dashboard';
            // const options = {
            //     method: 'POST',
            //     url: API_ADDR + '/api/v1/login',
            //     data: {
            //         username: username,
            //         password: password
            //     },
            //     headers: {
            //         'Content-type': 'Application/json',
            //     }
            // }
            // axios(options)
            //     .then(response => {
            //     }).catch(function (error) {
            //         console.log(error)
            //         Swal.fire('Error', 'Password tidak boleh kosong', error)


            //     })

            // navigator('dashboard')


        },
    }

})



export const {
    loginAction
} = loginSlice.actions

export default loginSlice.reducer