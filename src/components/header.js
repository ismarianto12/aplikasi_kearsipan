import React, { useEffect, useState, createContext } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import { Helmet } from "react-helmet";


const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
})

const logout = () => {
    const navigate = useNavigate
    swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.clear()
            // navigate('/login')
            window.location.href = '/';
        } else if (
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
            )
        }
    })
}
let Headercontext = createContext()

export const Header = ({ title }) => {
    const [collapsed, setCollapsed] = useState(false)
    const [navbar, setNavbar] = useState(false)
    const [navbarcls, setNavbarcls] = useState(false)
    const Sidebarclass = navbar ? 'sidebar_active' : ''
    const [value, setValue] = useState({
        username: ''
    })
    console.log('posisiheader ' + collapsed)

    const handleclink = () => {
        collapsed === false ? setCollapsed(true) : setCollapsed(false);
    }
    return (<>
        <Headercontext.Provider value={collapsed}>
            <Helmet>
                <title>{`${title}`}</title>
            </Helmet>
            <header className="navbar navbar-light sticky-top bg-light flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" style={{ background: '#2c2ce9', color: '#fff' }}>Welcome Admin Panel  <button onClick={() => { navbar ? setNavbar(false) : setNavbar(true) }} className={"navbar-toggler"} aria-expanded="false" aria-label="Toggle navigation" style={{ border: 'unset', 'marginLeft': '60px' }}>
                    <i className="fa fa-bars"></i></button></a>
                <button onClick={handleclink} className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                {collapsed ?
                    <><input className="form-control form-control-light w-100" type="text" placeholder="Search" aria-label="Search" />
                        <div className="navbar-nav">
                            <div className="nav-item text-nowrap">

                                <a className="nav-link px-3" onClick={logout}>Sign out</a>

                            </div>
                        </div></> : <div className="navbar-nav">
                        <div className="nav-item text-nowrap">

                            <a className="nav-link px-3" onClick={logout}><i Class="fa fa-user"></i>   Sign out</a>

                        </div>
                    </div>}
            </header>
        </Headercontext.Provider>
    </>)
}

export { Headercontext }