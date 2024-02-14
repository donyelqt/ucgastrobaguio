import React from 'react'
import { Logo, Title, TitleLogo, Yesucan } from './common/Title'

const Banner = () => {
  return (
    <div>
      <section className='banner'>
        <div className='container'>
          <div className='title-container'>
            <Title />
            <TitleLogo />
          </div>
          <div className='text-container'>
            <Yesucan />
          </div>
          <div className='text-container'>
            <Logo />
          </div>
          <div>
            <button className="button-primary" style={{ borderRadius: 5, border: 'none', cursor: 'pointer' }}>Schedule your consultation here!</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Banner