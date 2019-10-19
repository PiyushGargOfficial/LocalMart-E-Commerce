const mongoose = require('mongoose');
const db = require('../config/keys').MongoDB_URL;
const chalk = require('chalk');

mongoose.connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, () => console.log(chalk.green("Connected To MongoDB..")));
module.exports = mongoose;