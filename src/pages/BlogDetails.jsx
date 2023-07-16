import React from 'react'
import { useLoaderData } from 'react-router-dom'

const BlogDetails = () => {
  const data = useLoaderData()
  return (
    <div>
      <h1 className='text-5xl font-bold'>{data.title}</h1>
      <figure className='aspect-video my-5'>
        <img className='w-full rounded-lg' src='https://via.placeholder.com/1280x720' alt="" />
      </figure>
      <div>
        <p className='mb-2'>{data.body}</p>
        
      </div>
    </div>
  )
}

export default BlogDetails