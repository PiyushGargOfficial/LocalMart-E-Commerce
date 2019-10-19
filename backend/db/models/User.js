const mongoose = require('../connect');
const Schema = mongoose.Schema;

var UserSchema = new Schema({

    name: {
        type: String,
        required: [true, "Name field is required"],
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: [true, "Password field is required"],
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: [true, "Email field is required"],
        min: 6,
        max: 255
    },
    date: {
        type: Date,
        default: Date.now
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

var UserCollection = mongoose.model('users', UserSchema);

module.exports = UserCollection;