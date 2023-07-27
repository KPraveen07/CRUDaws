const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const ItemsModel = require('./models/Items')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://Praveenaws:<RK3xDvMANtRBAp57>@mern.ximp82z.mongodb.net/?retryWrites=true&w=majority')

app.get("/", (req, res) => {
    ItemsModel.find({})
    .then(items => res.json(items))
    .catch(err => res.json(err))
})
 
app.post("/CreateItems", (req, res) => {
    ItemsModel.create(req.body)
    .then(items => res.json(items))
    .catch(err => res.json(err))
})

app.get('/getItem/:id', (req, res) => {
    const id = req.params.id;
    ItemsModel.findById({_id:id})
    .then(items => res.json(items))
    .catch(err => res.json(err))
})

app.put('/UpdateItems/:id', (req, res) => {
    const id = req.params.id;
    ItemsModel.findByIdAndUpdate({_id :id}, {
        sn:req.body.sn,
         name:req.body.name, 
         image:req.body.image, 
         category:req.body.category, 
         label:req.body.label, 
         price:req.body.price, 
         description:req.body.description})
        .then(items => res.json(items))
        .catch(err => res.json(err))   
    })

// app.delete('/deleteItem/:id', (req, res) => {
//     const id = req.params.id;
//     ItemsModel.findByIdAndDelete({_id: id})
//     .then(res => res.json(res))
//     .catch(err => json(err))
// })
app.listen(3001, () => {
    console.log("Server is Running")
})