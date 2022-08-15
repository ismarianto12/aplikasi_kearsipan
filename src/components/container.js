import React, { createContext } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import Login from '../modules/Login'
import { router } from '../modules/routers'
import { getItem } from './helpers'
function Container() {
    const history = useNavigate()
    const isAuthenticated = getItem('token')
    console.log('nama :' + isAuthenticated.length)
    return (<>

        <Routes>

            {
                isAuthenticated.length !== 0 ?
                    router.map((data) => {
                        return (<Route path={data.path} exact={true} element={data.component} />)
                    }) : <Route path={<Login />} exact={true} element={<Login />} />

            }

        </Routes>



    </>)
}

function Public() {
    return (<> <Routes><Route path='/' exact={<Login />} element={<Login />} />
        <Route path='*' exact={<Login />} element={<Login />} />
    </Routes></>)
}


export { Container, Public }
