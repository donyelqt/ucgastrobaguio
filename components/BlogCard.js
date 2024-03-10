import { blogdata } from '@/assets/data/dummydata'
import React from 'react'
import { Card } from './common/Card'

const BlogCard = () => {
  return (
    <div>
        <div className='container blog-card grid-2 ml py'>
            {blogdata.map((item) => (
              <Card data={item} key={item.id} path='blogs' />
            ))}
        </div>
    </div>
  )
}

export default BlogCard