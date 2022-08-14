import { Barang, BarangDepan, HalamanDepan, BarangTambah, NoMatch, EditBarang } from '../modules/Barang'
import Dashboard from './Dashboard'


import Arsip from './arsip/index'
import JenisArsip from './arsip/jenis_arsip'

import Purcashing from './Purchasing'
import ArsipTambah from './arsip/arsip_tambah'
 

export const router = [
    {
        'path': '/dashboard',
        'component': <Dashboard />,
        'index': 'index'
    },
    {
        'path': '/master/arsip',
        'component': <Arsip />,
        'index': ''
    }, 
    {
        'path': 'master/arsip/tambah',
        'component': <ArsipTambah />,
        'index': ''
    },
    {
        'path': 'master/arsip/jenis',
        'component': <JenisArsip />,
        'index': ''
    },
    {
        'path': 'detail/arsip/:id',
        'component': <BarangTambah />,
        'index': ''
    },
    {
        'path': 'barang/edit/:id',
        'component': <EditBarang />,
        'index': '',
    },
    {
        'path': '*',
        'component': <NoMatch />,
        'index': ''

    },
    // kategori
    {
        'path': '/',
        'component': <HalamanDepan />,


        'index': ''
    },
    {
        'path': 'kateogi',
        'component': <BarangDepan />,
        'index': ''
    }, {
        'path': 'kategori/tambah',
        'component': <BarangTambah />,


        'index': ''
    },
    {
        'path': 'kategori/:id',
        'component': <BarangTambah />,  
        'index': ''
    },
    {
        'path': 'kategori/edit/:id',
        'component': <EditBarang />,
        'index': '',
    },
    {
        'path': 'purchasing',
        'component': <Purcashing />,
        'index': '',
    },
    {
        'path': '*',
        'component': <NoMatch />,
        'index': ''

    },
    {
        'path': 'dashboard',
        'component': <Dashboard />,
        'index': '',
    },
   
]