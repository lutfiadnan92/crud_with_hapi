const DB = require('../Model/Produk')
exports.Get = () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM produks"
        DB.query(query)
            .then(res => resolve(res.rows))
            .catch(err => reject(err))
    })
}
exports.FindByName = (req) => {
    return new Promise((resolve, reject) => {
        const produk = req.query.produk
        const query = `SELECT * FROM produks WHERE nama_produk like '%${produk}%'`
        DB.query(query)
            .then(res => resolve(res.rows))
            .catch(err => reject(err))
    })
}
exports.Create = (req) => {
    return new Promise((resolve, reject) => {
        const { produk, sku, gambar, description, harga } = req.payload
        const query = "INSERT INTO produks VALUES($1,$2,$3,$4,$5)"
        const values = [produk, sku, gambar, description, harga]
        DB.query(query, values)
            .then(() => resolve(req.payload))
            .catch(err => reject(err))
    })
}
exports.Update = (req) => {
    return new Promise((resolve, reject) => {
        const { produk, sku, gambar, description, harga } = req.payload
        const id = req.query.produk
        const query = "UPDATE produks set nama_produk=$1, sku=$2, gambar=$3, description=$4, harga=$5 WHERE nama_produk=$6"
        const values = [produk, sku, gambar, description, harga, id]
        DB.query(query, values)
            .then(() => resolve(req.payload))
            .catch(err => reject(err))
    })
}
exports.Delete = (req, res) => {
    return new Promise((resolve, reject) => {
        const produk = req.query.produk
        const query = `DELETE FROM produks WHERE nama_produk='${produk}'`
        DB.query(query)
            .then(res => {
                if (res.rowCount === 0) {
                    resolve(`${produk} not found`)
                } else {
                    resolve(`Delete ${produk} from table produk`)
                }
            }).catch(err => reject(err))
    })
}