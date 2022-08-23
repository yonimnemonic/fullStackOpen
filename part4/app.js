const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const { clearScreenDown } = require('readline')
require('dotenv').config()


const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})
//transform id to string format
blogSchema.set( 'toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Blog = mongoose.model('Blog', blogSchema)

const mongoUrl = process.env.MONGODB_URI

mongoose.connect(mongoUrl)
  .then( ()=> {
  }).catch( err => {
    console.log(err)
})
  
  app.use(cors())
  app.use(express.json())
  
app.get('/api/blogs', (request, response) => {
    Blog
    .find({})
    .then(blogs => { 
      response.json(blogs)
    })
})

app.post('/api/blogs', (request, response) => {
  const blog = new Blog(request.body)
  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})