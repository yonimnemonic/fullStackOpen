//dummy
const dummy = ( blogs ) => {
  // ...
  return Number( blogs + 1 )
}
//totalLiles
const totalLikes = (blogs) => {

  if (!Array.isArray(blogs) || !blogs.length) return 0;
  if (blogs.length === 1) return blogs[0].likes;

  return blogs.reduce((total, blog) => total + blog.likes, 0);
}
//favoriteBlog
const favoriteBlog = (blogs) => {
  return blogs.length === 0
  ? {}
  : blogs.reduce((maxLikes, blog) => blog.likes > maxLikes ? blog.likes : maxLikes, blogs[0].likes)
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}

