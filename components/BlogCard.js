import { blogdata } from '@/assets/data/dummydata'
import React from 'react'
import { Card } from './common/Card'
import Link from 'next/link';

const BlogCard = () => {
  return (
    <div>
      <div className='container blog-card grid-2 py'>
        {blogdata.map((item) => (
          <Link href={item.link} key={item.id}>
            <Card data={item} path='blogs' />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;