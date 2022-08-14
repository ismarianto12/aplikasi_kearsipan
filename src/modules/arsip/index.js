import DataTable from 'react-data-table-component'
import Template from '../../components/Template'
import * as Icon from 'react-feather'
import { Link } from 'react-router-dom'

const columns = [
    {
        name: 'Title',
        selector: row => row.title,
        sortable: true,
    },
    {
        name: 'Year',
        selector: row => row.year,
        sortable: true,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
        headCells: {
            style: {
                fontSize: '15px'
            },
        },
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
        headCells: {
            style: {
                fontSize: '15px'
            },
        },
    },
]


const Arsip = () => {
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