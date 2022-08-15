import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { useState } from "react";
import Swal from "sweetalert2";
import API_ADDR from '../helpers/app'
// async thunk

const getdata = () => {

    const options = {
        method: 'GET',
        url: API_ADDR + '/api/v1/arsip',
        headers: {
            'Content-type': 'Application/json',
        }
    }
    axios(options)
        .then(response => {
        }).catch(function (error) {
            console.log(error)

        })


}

export const arsipSlice = createSlice({
    name: 'arsip',
    initialState: {},
    reducers: {
        createarsip: (state, action) => {
            console.log(action.payload)
            const options = {
                method: 'POST',
                data: JSON.parse(JSON.stringify(action.payload)),
                url: '../api/v1',
                headers: {
                    'Content-type': 'Application/json',
                }
            }
            axios(options)
                .then(response => {
                    console.log(response.data.result)


                }).catch(function (error) {
                    console.log(error)
                })
        },
        updatearsip: (state, action) => {
            console.log(action.payload)
            const options = {
                method: 'POST',
                data: JSON.parse(JSON.stringify(action.payload)),
                url: '../api/v1',
                headers: {
                    'Content-type': 'Application/json',
                }
            }
            axios(options)
                .then(response => {
                    console.log(response.data.result)


                }).catch(function (error) {
                    console.log(error)
                })
        },
        deletearsip: (state, action) => {
            console.log(action.payload)
            const options = {
                method: 'POST',
                data: JSON.parse(JSON.stringify(action.payload)),
                url: '../api/v1',
                headers: {
                    'Content-type': 'Application/json',
                }
            }
            axios(options)
                .then(response => {
                    console.log(response.data.result)


                }).catch(function (error) {
                    console.log(error)
                })
        }
    }
})


export const {
    createarsip,
    updatearsip,
    deletearsip } = arsipSlice.actions

export default arsipSlice.reducer