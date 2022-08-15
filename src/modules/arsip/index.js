import DataTable from 'react-data-table-component'
import Template from '../../components/Template'
import * as Icon from 'react-feather'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { arsipSlice, createarsip } from '../../actions/arsip'
import { useState } from 'react';








const Arsip = () => {

    const dispatch = useDispatch()
    const [data, Setdata] = useState([])
    // const data  = useSelector(arsipSlice())

    const columns = [
        {
            name: 'jenis',
            selector: row => row.jenis,
            sortable: true,
        },
        {
            name: 'pejabat',
            selector: row => row.pejabat,
            sortable: true,
        },
        {
            name: 'nama_arsip',
            selector: row => row.nama_arip,
            sortable: true,
        },
        {
            name: 'file_arsip',
            selector: row => row.file_arsip,
            sortable: true,
        },
        {
            name: 'jumlah',
            selector: row => row.jumlah,
            sortable: true,
        },
        {
            name: 'id_satuan',
            selector: row => row.satuan,
            sortable: true,
        },
        {
            name: 'lokasi',
            selector: row => row.lokasi,
            sortable: true,
        },
        {
            name: 'ket_isi',
            selector: row => row.ket_isi,
            sortable: true,
        },
        {
            name: 'tanggal',
            selector: row => row.tanggal,
            sortable: true,
        },
        {
            name: 'permision',
            selector: row => row.permision,
            sortable: true,
        },
    ];

    const customStyles = {
        rows: {
            style: {
                // minHeight: '72px', // override the row height
            },
        },
        headCells: {
            style: {
                fontSize: '15px'
            },
        },
        cells: {
            style: {

            },
        },
    };
    return (

        <Template container={
            <>
                <div className='card'>
                    <div className='card-header'><h3><i className="fa fa-copy"></i>Master Arsip</h3></div>
                    <div className='card-body'>
                        <Link className='btn btn-primary' to={'/master/arsip/tambah'}><Icon.Activity /></Link>

                        <DataTable columns={columns} data={data} pagination customStyles={customStyles} />
                    </div>
                </div>
            </>
        } title={'master data purchasing'} />
    )
}

export default Arsip