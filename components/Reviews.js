import React from 'react'
import { Logo, TitleSm, Title } from '@/components/common/Title';
import { reviews } from '@/assets/data/dummydata';
import Link from 'next/link';
import { RxOpenInNewWindow } from "react-icons/rx";

const Reviews = () => {
  return (
    <>
       <section className='reviews'>
        <div className='container'>
          <div className='heading-title'>
            <Title title="PATIENTS REVIEW FOR THE HOSPITALS IN BAGUIO CITY." />
            <p><span className='white'></span></p>
          </div> 
          <div className='cards'>
            {reviews.map((user, i) => (
             <div key={i}>
              <div className='card'>
                <div className='image'>
                  <div className='img'>
                    <img src={user.cover} alt='' />
                  </div>
                  <div className='img-text'>
                    <h3>{user.name}</h3>
                    <span>{user.post}</span>
                  </div>
                </div>
                <div className='details'>
                  <p>{user.desc}</p>
                  <Link href="/#">
                    VIEW HOSPITALS  <RxOpenInNewWindow  className='link-icon'/> 
                  </Link>
                </div>
              </div>
             </div>
            ))}
          </div>
        </div>
       </section>
    </>
  )
}

export default Reviews;