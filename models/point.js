const mongoose = require ('mongoose')
const Schema = mongoose.Schema;

const pointSchema = mongoose.Schema({
    Latitud: Number,
    Longitud: Number,
    gravedad: String,
    Radio: Number
})


const ModelPoint = mongoose.model('points',pointSchema)

module.exports = ModelPoint;
