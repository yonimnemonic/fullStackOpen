const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const blog = require('../models/blog')
const { deleteOne } = require('../models/blog')

const api = supertest(app)

describe('Fetching existing blogs in json format' , ()=>{
  test('blogs are returned as json', async ()=> {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })
})

test('Checks that _id is the default identifier', async()=>{
  const response = await api.get('/api/blogs')
  const result = response.body.map(resp => resp.id)
  
  expect(result).toBeDefined()
  
})

afterAll(() => {
  mongoose.connection.close()
})