const express = require("express");
const app = express();
const bodyParser = require('body-parser')
app.use(express.json())


const port = process.env.PORT || 3500;

const mongoose = require('mongoose')

const url = 'mongodb+srv://Lord-Fabi:123qwe@primercluster.b0pfh.mongodb.net/MapCrash'

const ModelPoint = require('./models/point');
const res = require("express/lib/response");

mongoose.connect(url).then(()=>{
    console.log("conexión exitosa")}).catch((e)=>{
        console.log(e)

})


//Mostrar

const mostrar = async () => {
    const points = await ModelPoint.find()
    //console.log(points)
    return points
}

app.get('/pointsCrash', async (req, res) => {
    var data = await mostrar()
    
    res.send(data)
})


app.listen(port, () => {
    console.log('el servidor esta corriendo')
})