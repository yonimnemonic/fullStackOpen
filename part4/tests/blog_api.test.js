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

test('Checks _id is the default identifier', async()=>{
  const response = await api.get('/api/blogs')
  const result = response.body.map(resp => resp.id)
  
  expect(result).toBeDefined()
  
})
test('Checks a new blog is created in the Database', async()=>{
  const firstResponse = await api.get('/api/blogs')
  const firstValue = firstResponse.body.length

 // console.log('first Value lenght: ', firstValue);

  const newBlog = {
    'title': 'La revelión de las máquinas',
    'author': 'Agustín Martínez',
    'url': 'https://larevelion.info',
    'likes': 78,
  }
  await api.post('/api/blogs')
    .send(newBlog)
    .expect(201)  
    .expect('Content-Type', /application\/json/)  
    
    expect(firstValue).toHaveLength( firstValue + 1 ) 
  });


afterAll(() => {
  mongoose.connection.close()
})