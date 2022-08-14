import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import Swal from "sweetalert2";


export const arsipSlice = createSlice({
    name: 'arsip',
    initialState: { value: [] },
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