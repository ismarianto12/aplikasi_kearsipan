import Button from 'react-bootstrap/Button'
import { useSelector, useDispatch } from 'react-redux'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'
import Template from '../../components/Template'
import { createarsip } from '../../actions/arsip'
import { useState } from 'react'
import Swal from "sweetalert2"

function ArsipTambah() {
    const dispatch = useDispatch()
    const [value, setValue] = useState({
        nama_arsip: '',
        jenis_arsip: '',
        type: '',
        satuan: ''
    })

    const navigator = useNavigate()

    const handlechange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }
    const simpan = (e) => {
        e.preventDefault()
        dispatch(createarsip(value))
        Swal.fire('Succes', 'Data Arsip berhasil di simpan', 'success')
        navigator('/master/arsip')
    }


    return (
        <Template container={
            <>
                <div className='card'>
                    <div className='card-body'>
                        <div className='container'>

                            <Form onSubmit={simpan}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Nama arsip</Form.Label>
                                    <Form.Control type="text" name="nama_arsip" value={value.nama_arsip} onChange={handlechange} placeholder="Enter email" />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Jenis</Form.Label>
                                    <Form.Control type="text" name="jenis_arsip" value={value.jenis_arsip} onChange={handlechange} placeholder="Password" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Satuan</Form.Label>
                                    <Form.Control type="text" name="satuan" value={value.satuan} onChange={handlechange} placeholder="Password" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Type Arsip</Form.Label>
                                    <Form.Control type="text" value={value.type} name="type" onChange={handlechange} placeholder="Password" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                                <Button variant="danger" type="submit">
                                    Cancel
                                </Button>
                                <Button variant="danger" type="submit" onClick={
                                    () => {
                                        navigator('/master/arsip')
                                    }
                                }>
                                    Home
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </>
        } />

    )
}

export default ArsipTambah