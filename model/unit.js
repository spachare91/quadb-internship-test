const mongoose = require('mongoose')

// document schema with assignment specific fields
const UnitSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    last:{
        type: String,
        required: true
    },
    buy:{
        type: String,
        required: true
    },
    sell:{
        type: String,
        required: true
    },
    volume: {
        type: String,
        required: true
       
    },
    base_unit:{
        type: String,
        required: true

    }
})

module.exports= mongoose.model('Unit', UnitSchema)