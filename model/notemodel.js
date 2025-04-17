const mongoose  = require('mongoose')

const noteData = mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("note",noteData)