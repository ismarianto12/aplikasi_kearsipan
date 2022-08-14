import * as Icon from 'react-feather'


const menu = [{
    'menu': 'Arsip',
    'icon': <Icon.AtSign />,
    'route': '/master/arsip',
},
{
    'menu': 'Jenis arsip',
    'icon': <Icon.Copy />,
    'route': '/master/arsip/jenis',
},
{
    'menu': 'Report',
    'icon': <Icon.Copy />,
    'route': '/purchasing',
    'child': [
        {
            'menu': 'Report Arsip',
            'icon': 'fa fa-copy',
            'route': '/master/arsip',
        },
        {
            'menu': 'Data Arsip',
            'icon': 'fa fa-copy',
            'route': '/master/arsip',
        }
    ]
},
{
    'menu': 'Jenis arsip',
    'icon': <Icon.Copy />,
    'route': '/master/arsip',
},
]

export default menu