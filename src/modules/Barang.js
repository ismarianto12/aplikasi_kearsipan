import { Helmet } from "react-helmet"
import { Link, useNavigate } from "react-router-dom"
import Template from "../components/Template"

export const Barang = () => {

    const logout = (props) => {
        localStorage.clear()
        window.location.href = '/';
    }

    return (<>
        <Helmet>
            <title>Halman Barang</title>
        </Helmet>
        <Link to='http://localhost:3000/barang' className="btn btn-primary">Data barang</Link>
        <Link to='http://localhost:3000/barang/tambah'>Tambah </Link>
        <Link to='http://localhost:3000/barang/edit'>Edit data barang</Link>
        <Link to='http://localhost:3000/barang/hapus'>Hapus data barang</Link>
        <Link to='http://localhost:3000/barang/delete'>Delete data barang</Link>
        <button onClick={logout}>logout</button>

        Halaman Barang</>)
}

export const HalamanDepan = (props) => {
    const navigation = useNavigate()
    const logout = () => {
        localStorage.clear()
        navigation('/login')
    }
    return (<>
        <Template container={
            <>
                <Helmet>
                    <title>Halman Barang</title>
                </Helmet>
                <Link to='/barang' className="btn btn-primary">Data barang</Link>
                <br />
                <Link to='/barang/tambah'>Tambah </Link>
                <br />
                <Link to='/barang/edit/1'>Edit data barang</Link>
                <br />
                <Link to='/barang/show/1'>Hapus data barang</Link>
                <br />
                <Link to='/barang/delete/2'>Delete data barang</Link>
                <button onClick={logout}>logout</button></>} title={"asd"} /></>)
}

export const BarangDepan = () => {
    return (<> <Template container={
        <>
            <Helmet>
                <title>Halman Barang</title>
            </Helmet>
            <Link to='/barang' className="btn btn-primary">Data barang</Link>
            <br />
            <Link to='/barang/tambah'>Tambah </Link>
            <br />
            <Link to='/barang/edit/1'>Edit data barang</Link>
            <br />
            <Link to='/barang/show/1'>Hapus data barang</Link>
            <br />
            <Link to='/barang/delete/2'>Delete data barang</Link></>} />

    </>)
}


export const EditBarang = () => {
    return (<> <Template container={
        <>
            <Helmet>
                <title>Halman Barang</title>
            </Helmet>
            <Link to='/barang' className="btn btn-primary">Data barang</Link>
            <br />
            <Link to='/barang/tambah'>Tambah </Link>
            <br />
            <Link to='/barang/edit/1'>Edit data barang</Link>
            <br />
            <Link to='/barang/show/1'>Hapus data barang</Link>
            <Link to='/params/show/1/detil/parameter'>Hapus data barang</Link>
            <br />
            <Link to='/barang/delete/2'>Delete data barang</Link></>} />

    </>)
}

export const BarangTambah = () => {
    return (<> <Template container={
        <>
            <Helmet>
                <title>Halman Barang</title>
            </Helmet>
            <Link to='/barang' className="btn btn-primary">Data barang</Link>
            <br />
            <Link to='/barang/tambah'>Tambah </Link>
            <br />
            <Link to='/barang/edit/1'>Edit data barang</Link>
            <br />
            <Link to='/barang/show/1'>Hapus data barang</Link>
            <br />
            <Link to='/barang/delete/2'>Delete data barang</Link></>} />

    </>)
}

export const NoMatch = () => {

    return (<> <Template container={
        <>
            <Helmet>
                <title>Halman Barang</title>
            </Helmet>

            <div className="container">Data yang di cari tidak di temukan<br /> <Link to="/dashboard">Dashboard</Link></div>

        </>} />

    </>)
}


export const User = () => {

    return (<> <Template container={
        <>
            <Helmet>
                <title>Halman Barang</title>
            </Helmet>
            <Link to='/barang' className="btn btn-primary">Data barang</Link>
            <br />
            <Link to='/barang/tambah'>Tambah </Link>
            <br />
            <Link to='/barang/edit/1'>Edit data barang</Link>
            <br />
            <Link to='/barang/show/1'>Hapus data barang</Link>
            <br />
            <Link to='/barang/delete/2'>Delete data barang</Link></>} />

    </>)
}