
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'

import axios from "axios";
import Swal from "sweetalert2";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from "react-router-dom";
import { loginAction } from "../actions/login";
// imprt 

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [value, setValue] = useState({
        username: '',
        password: ''
    })
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {

    }, []);
    const handlechange = (e) => {
        setValue({
            ...value,
            [e.target.id]: e.target.value
        });
    }
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: "\n    .bd-placeholder-img {\n        font-size: 1.125rem;\n        text-anchor: middle;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n    }\n\n    @media (min-width: 768px) {\n        .bd-placeholder-img-lg {\n            font-size: 3.5rem;\n        }\n    }\n" }} />
            <div className="container" style={{ 'overflow': 'hidden', 'background': `url('https://cdn.corporatefinanceinstitute.com/assets/accounting-1024x683.jpeg')`, 'backgroundRepeat': 'no-repeat' }}>
                <div className="row">
                    <div className="col-md-8">

                    </div>
                    <div className="col-md-4" style={{ 'overflow': 'hidden', 'background': '#fff' }}>
                        <main className="form-signin" style={{ 'paddingLeft': '20px' }}>
                            <form onSubmit={(e) => {
                                e.preventDefault()
                                dispatch(loginAction(value))
                                navigate('dashboard')
                            }}>
                                <br /><br />
                                <h1 className="h3 mb-3 fw-normal text-center">Sistem Informasi Manajemen Asset</h1>
                                <div className="form-floating">
                                    <input type="text" onChange={handlechange} className="form-control" id="username" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Email address</label>
                                    {error ? error : ''}
                                </div>
                                <div className="form-floating">
                                    <input type="password" onChange={handlechange} className="form-control" id="password" placeholder="Password" />
                                    <label htmlFor="floatingPassword">Password</label>
                                    {error ? error : ''}

                                </div>
                                <div className="checkbox mb-3">
                                    <label>
                                        <input type="checkbox" defaultValue="remember-me" /> Remember me
                                    </label>
                                </div>
                                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                                <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
                            </form>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;