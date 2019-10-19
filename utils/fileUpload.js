const routers = require('express').Router();
const path = require('path');
const Product = require('../db/models/Products');

routers.post('/upload', (req, res) => {
    if (req.files === null) {
        return res.status(400).json({
            msg: "No file was uploaded.."
        });
    }
    const file = req.files.file;
    const imagePath = path.join(__dirname, '..', 'uploads', `${file.name}`);
    file.mv(imagePath, err => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                msg: err
            });
        }

        const id = req.headers.productid

        const Path = {
            imagepath: `/uploads/${file.name}`,
            imagename: `${file.name}`
        }

        Product.findByIdAndUpdate({
            _id: id
        }, Path).then(() => {
            Product.findOne({
                _id: id
            }).then(product => {
                console.log(product)
            }).catch(error => {
                res.json({
                    msg: error
                })
            })
        }).catch(err => {
            res.json({
                msg: err
            })
        })


        res.json({
            fileName: file.name,
            filePath: `/uploads/${file.name}`
        });
    });

    //mv is a method to move the file.
})

module.exports = routers;