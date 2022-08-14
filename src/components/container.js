import React, { createContext } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import Login from '../modules/Login'
import { router } from '../modules/routers'
import { getItem } from './helpers'


function PrivateRoute({ path, exact, element }) {
    const history = useNavigate()
    let auth = localStorage.getItem('nama');
    if (!auth) {
        return history('login')
    }
    return <Route path={path} exact={exact} element={element} />
}

function Container() {
    const history = useNavigate()
    const isAuthenticated = getItem('nama')
    console.log('nama :' + isAuthenticated.length)
    return (<>

        {/* <RouteContext.Provider value={{ props }}> */}
        <Routes>

            {
                isAuthenticated.length !== 0 ?
                router.map((data) => {
                    return (<Route path={data.path} exact={true} element={data.component} />)
                }) : <Login />

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
