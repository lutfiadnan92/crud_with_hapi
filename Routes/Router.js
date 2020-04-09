const Product = require('../Controller/Produks')
const routes = [
    {
        method: 'GET',
        path: '/',
        handler: () => {
            return '<center>Hello Api</center>'
        }
    },
    {
        method: 'GET',
        path: '/show',
        handler: Product.Get
    },
    {
        method: 'GET',
        path: '/showby',
        handler: Product.FindByName
    },
    {
        method: 'POST',
        path: '/create',
        handler: Product.Create
    },
    {
        method: 'PUT',
        path: '/update',
        handler: Product.Update
    },
    {
        method: 'DELETE',
        path: '/delete',
        handler: Product.Delete
    }
]

module.exports = routes