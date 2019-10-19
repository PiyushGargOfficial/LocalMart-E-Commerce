const router = require('express').Router();
const User = require('../db/models/User');
const jwt = require('jsonwebtoken');

const {
    regValid,
    loginValid
} = require('../utils/validation');
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {

    const {
        error
    } = regValid(req.body);

    if (error) {
        res.status(400).send({
            msg: error.details[0].message
        });
    } else {
        //Check if User Already Exists :
        console.log(req.body);
        const emailExist = await User.findOne({
            email: req.body.email
        })
        if (emailExist) {
            res.status(400).json({
                msg: "Email already Exists.."
            })
        }

        //Hash Password: 
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword
        });
        try {
            const savedUser = await user.save();
            const {
                name,
                email,
                _id,
                isAdmin
            } = savedUser;
            res.send({
                name,
                email,
                _id,
                isAdmin
            });
            // res.send('Logged In..');
        } catch (err) {
            res.status(400).send({
                msg: err
            });
        }
    }
});

//Login
router.post('/login', async (req, res) => {
    const {
        error
    } = loginValid(req.body);

    if (error) {
        res.status(400).send({
            msg: error.details[0].message
        });
    } else {
        //Check if Email  Exists :
        const user = await User.findOne({
            email: req.body.email
        })
        if (!user) {
            res.status(400).send({
                msg: "Email doesnt exists"
            })
        }
        //Password is correct
        const validPass = await bcrypt.compare(req.body.password, user.password);
        if (!validPass) {
            res.status(400).send({
                msg: "Password is wrong"
            });
        }

        //Create a jwt token:
        const Secret_Key = process.env.Token_Secret;
        const token = jwt.sign({
            _id: user._id
        }, Secret_Key);

        const {
            name,
            email,
            _id,
            isAdmin
        } = user
        res.header('auth-token', token).send({
            token,
            email,
            name,
            _id,
            isAdmin
        });
        // res.send('Logged In..');
    }
});


module.exports = router;