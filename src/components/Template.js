import { Headercontext } from "./header"

import React, { useEffect, useState, useContext } from "react"
import { Link, useLocation } from "react-router-dom"
import Swal from "sweetalert2"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from "./header"
import { Sidebar } from "./sidebar"


// let AppContext = createContext()

const Template = ({
    container, title
}) => {
    // const [collapsed, setCollapsed] = useState(false)
    const [navbar, setNavbar] = useState(false)
    const [navbarcls, setNavbarcls] = useState(false)
    const Sidebarclass = navbar ? 'sidebar_active' : ''
    const [value, setValue] = useState({
        username: ''
    })

    const router = useLocation();
    const collapsed = useContext(Headercontext);
    console.log('passed' + collapsed)
 
    return (<>
        <Header title={title}></Header>
        <div className="container-fluid">
            <div className="row">

                {Sidebarclass ? '' :
                    <nav id="sidebarMenu" className={collapsed ? 'col-md-3 col-lg-2 d-md-block sidebar collapse show' : 'col-md-3 col-lg-2 d-md-block sidebar collapse'}>
                        <div className="position-sticky pt-3">
                            <Sidebar />
                        </div>
                    </nav>
                }
                <main className={Sidebarclass ? "" : "col-md-9 ms-sm-auto col-lg-10 px-md-4"}>
                    <div data-aos="fade-left" style={{ 'margin-top': '18px' }}>
                        {container}
                    </div>
                </main>
            </div>
        </div >
    </>)

}

export default Template