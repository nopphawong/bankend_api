require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()
const cors = require('cors')
const corsOptions = require('./src/config/corsOptons')
const mongoose = require('mongoose')
const connectDB = require('./src/config/dbConn')

connectDB()

app.use(express.json())
app.use(cors(corsOptions))

/* MONGOOSE SETUP */
const port = process.env.PORT || 5001

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')
  app.listen(port, () => console.log(`Server is runing with port ${port}`))
})

mongoose.connection.on('error', (err) => console.log(err))
