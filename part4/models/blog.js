const mongoose = require('mongoose')

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
  
  