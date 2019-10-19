const route = require('express').Router();
const Product = require('../db/models/Products');
const {
    productValid
} = require('../utils/validation');

//Find all products : 
route.get('/all', async (req, res) => {

    try {
        const allProducts = await Product.find();
        res.json(allProducts);
    } catch (err) {
        res.json({
            msg: err
        })
    }

});
//Find specific products : 
route.get('/:productId', async (req, res) => {

    try {
        const product = await Product.findOne({
            _id: req.params.productId
        });
        res.json(product);
    } catch (err) {
        res.json({
            msg: err
        })
    }

});

//Add new product:
route.post('/add', async (req, res) => {

    const {
        error
    } = productValid(req.body);

    if (error) {
        res.status(400).send({
            msg: error.details[0].message
        })
    } else {

        const productExist = await Product.findOne({
            title: req.body.title
        })
        if (productExist) {
            res.status(400).send({
                msg: "Product already Exists.."
            })
        } else {
            const newProduct = new Product({
                title: req.body.title,
                price: req.body.price,
                description: req.body.description
            })

            await newProduct.save().then(data => {
                res.json(data);
            }).catch(err => {
                res.status(400).json({
                    msg: err
                })
            })
        }
    }
})

//Delete product by title
route.delete('/:productId', async (req, res) => {

    try {
        const deletedProduct = await Product.findById({
            _id: req.params.productId
        });
        await Product.deleteOne({
            _id: req.params.productId
        });
        res.json(`${deletedProduct.title} deleted..`)
    } catch (err) {
        res.status(400).json({
            msg: err
        })
    }
})

route.patch('/:productId', async (req, res) => {


    Product.findByIdAndUpdate({
        _id: req.params.productId
    }, req.body).then(() => {
        Product.findOne({
            _id: req.params.productId
        }).then(product => {
            res.json(product)
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


})

module.exports = route;