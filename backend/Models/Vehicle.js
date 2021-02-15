const mongoose = require('mongoose')
const Schema =mongoose.Schema

let vehicleSchema =new Schema({
    name:{
      type:String
    },
    color:{
        type:String
    },
    number:{
        type:Number
    }
},{
    collection:'vehicle'
})

module.exports =mongoose.model('Vehicle',vehicleSchema)