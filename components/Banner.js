import React from 'react';
import { Citcs, Innovation, Logo, Title, TitleLogo, Yesucan } from './common/Title';

const Banner = () => {
  return (
    <div>
      <section className='banner'>
        <div className='container' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className='title-container'>
            <Title />
            <Yesucan />
          </div>
          <div className='text-container'>
            
          </div>
          <div className='text-container'>
            <Logo />
          </div>
          <div className='text-container'>
            <Citcs />
          </div>
          <div className='text-container'>
            <Innovation />
          </div>
          <div style={{ marginTop: 'auto', textAlign: 'center' }}>
            <button className="button-primary" style={{ borderRadius: 5, border: 'none', cursor: 'pointer' }} onClick={() => {window.open("https://ucgastrobaguio-consultation.vercel.app/", "_blank");}} >Consultation!</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;


