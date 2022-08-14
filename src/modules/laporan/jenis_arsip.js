import DataTable from 'react-data-table-component'
// import Template from '../components/Template';
import Template from '../../components/Template'


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


const JenisArsip = () => {
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
                    <div className='card-header'><h3><i className="fa fa-copy"></i>Master Jenis arsip</h3></div>
                    <div className='card-body'>
                        <DataTable columns={columns} data={data} pagination customStyles={customStyles} />
                    </div>
                </div>
            </>
        } title={'master data purchasing'} />
    )
}

export default JenisArsip