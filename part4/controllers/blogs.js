const blogsRouter = require('express').Router()
const Blog = require('../models/blog')


blogsRouter.get('/', async(request, response, next) =>{
  const blogs = await Blog.find({})
  response.json(blogs)
})

blogsRouter.post('/', async(request, response, next) =>{
    const blog = await new Blog(request.body)
    blog.save()
    response.status(201).json(result)
   
})


module.exports = blogsRouter