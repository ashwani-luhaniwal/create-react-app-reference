// Entry point to our server

const express = require('express')
const routes = require('./routes/')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cloudinary = require('cloudinary')

const app = express()
const router = express.Router()
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/medium'

// configure cloudinary
cloudinary.config({
  cloud_name: 'duvo4v8ua',
  api_key: '285413158652564',
  api_secret: '4ysALXdklLixpftRreBMvamXKpM'
})

// connect to MongoDB database
try {
  mongoose.connect(url, {
    // useMongoClient: true
  })
} catch (error) {

}

let port = 3000 || process.env.PORT

// set up routes {API Endpoints}
routes(router)

// set up middlewares
app.use(cors())               // prevents cross-origin errors
app.use(bodyParser.json())    // parse form data in POST requests into req.body object
app.use(helmet())             // armours our API to prevent attacks
// app.use('/static', express.static(path.join(__dirname, 'static)))

app.use('/api', router)

// start server
app.listen(port, () => {
  console.log(`Server started at port: ${port}`)
})