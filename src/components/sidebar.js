import React, { useEffect, useState, createContext } from "react"
import { Link } from 'react-router-dom'
import menu from "./menu_app"

let Sidebarcontext = createContext()

export const Sidebar = (props) => {

    const Sidebarcontext = createContext()
    const [navbarcls, setNavbarcls] = useState(false)
    const [value, setValue] = useState({
        username: ''
    })
    const [navbar, setNavbar] = useState(false)
    const Sidebarclass = navbar ? 'sidebar_active' : ''

    return (
        <>
            <Sidebarcontext.Provider value={props}>
                <ul className={navbar ? 'nav flex-column sidebar_active' : 'nav flex-column'} style={{
                    'overflow': 'auto'
                }}>
                    <li className="nav-item">
                        <div className="nav-link"> Hy {value.username ? value.username : '...'}</div>
                    </li>
                    <br />

                    <li className="nav-item">
                        <Link to="/dashboard">
                            <a className={'nav-link'} aria-current="page">
                                <i className="fa fa-dashboard"></i>
                                &nbsp;&nbsp;Dashboard
                            </a>
                        </Link>
                    </li>
                    {menu.map((a, i) => {
                        return (a.child === '' ? a.child.map((b) => {
                            (<li className="nav-item" onClick={() => {
                                'admin/report' && navbarcls == true ? setNavbarcls(false) : setNavbarcls(true)
                            }}>

                                <a href="#" className="nav-link">
                                    <i className="fa fa-copy" /> <span className="ms-1 d-none d-sm-inline">{b.menu}</span> </a>
                                <ul className={navbarcls ? "nav-item collapse show" : "nav-item collapse"} id="submenu2" data-bs-parent="#menu" style={{ background: '#063e8d' }}>
                                    <li className="nav-item w-100">
                                        <Link to="">
                                            <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> {b.menu}</a>
                                        </Link>
                                    </li>

                                </ul>
                            </li>)
                        }) : <li className="nav-item">
                            <Link to={a.route}>
                                <a className={'nav-link'}>
                                    {a.icon}
                                    &nbsp;&nbsp;{a.menu}
                                </a>
                            </Link></li>)

                    })}
                </ul>
            </Sidebarcontext.Provider>

        </>
    )
}
