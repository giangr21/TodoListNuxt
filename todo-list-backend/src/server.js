require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const server = require('http').Server(app)
const ItemController = require ('./controller/ItemController')

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
    return response.json({
        message: 'Server running ...'
    })
})

app.get('/items', ItemController.index)

app.post('/items', ItemController.store)

app.delete('/items/:idItem', ItemController.destroy)

app.put('/items/:idItem', ItemController.update)

server.listen(process.env.PORT || 4000)

