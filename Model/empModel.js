const mongoose = require('mongoose')
const empSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    age:{
        type: String,
        require: true,   
    },
    city: {
        type: String,
        require: true
    },
    salary: {
        type: String,
        require: true
    },
    mobile: {
        type: String,
        require: true
    }
})
const useModel = mongoose.model('employee', empSchema)
module.exports = useModel