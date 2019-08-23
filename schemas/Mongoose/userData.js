const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');


var userSchema = new mongoose.Schema({

    userName: {
        type: String,
        default: 'admin'
    },
    password: {
        type: String,
        default: 'admin@123'
    },
    data: {
        type: Object,
        default: 'object'
    },
    date: {
        type: Date,
        default: Date.now()
    }
},{
    collection: "learningCol"
});

module.exports = {
    userSchemaModel: db.model("userSchemaModel", userSchema)
}
