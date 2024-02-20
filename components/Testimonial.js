import React from 'react'
import { Logo, TitleSm, Title } from '@/components/common/Title';
import { testimonial } from '@/assets/data/dummydata';

const Testimonial = () => {
  return (
    <>
       <section className='testimonial'>
        <div className='container'>
          <div className='heading-title'>
            <Title title="PATIENTS REVIEW FOR THE HOSPITALS IN BAGUIO CITY." />
            <p><span className='white'></span></p>
          </div> 
          <div className='cards'>
            {testimonial.map((user, i) => (
             <div key={i}>
              <div className='card'>
                <div className='image'>
                  <div className='img'>
                    <img src={user.cover} alt='' />
                  </div>
                  <div className='img-text'>
                    <h3>{user.name}</h3>
                  </div>
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

export default Testimonial