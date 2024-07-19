import { blogdata } from '@/assets/data/dummydata'
import React from 'react'
import { Card } from './common/Card'
import Link from 'next/link';

const BlogCard = () => {
  return (
    <div>
      <div className='container blog-card grid-2 py'>
        {blogdata.map((item) => (
          <div key={item.id}>
            <Link href={item.link}>
              <a>
                <Card data={item} path='blogs' />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;