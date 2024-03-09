import { TitleSm, Title, GastroBaguio1 } from '@/components/common/Title'
import React from 'react'

const About = () => {
  return (
    <>
        <sections classname="agency bg-top">
            <div className='container'>
                <div className='heading-title'>
                    <GastroBaguio1 />
                    <TitleSm title='ABOUT THE UC GASTROBAGUIO.' className='text-primary' fontFamily='"Lucida Fax Demi", serif'/>
                    <br />
                    <Title title='THE FIRST ONLINE PLATFORM OF UC FOR THE HOSPITALS BASED IN BAGUIO CITY, PHILIPPINES.' className='title-bg'/>
                </div>

                <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='' />
              <p className='desc-p' style={{color: 'white'}}>This platform aims to provide convenient access to medical services and information for the residents of Baguio City. With this online platform, patients can schedule appointments, access their medical records, and even consult with doctors remotely. It also allows hospitals to streamline their operations and improve efficiency in delivering healthcare services.</p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='green1'>2000+</h1>
                  <h3>Gastroenteritis Cases.</h3>
                </div>
                <div className='box'>
                  <h1 className='green1'>4+</h1>
                  <h3>Hospitals Partnership.</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/ucgastromac.png' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/uclogonew.png' alt='Img' className='round' width='70%' height='75%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='MISSION OF UC GASTROBAGUIO' className='text-primary green1' fontFamily='"Lucida Fax Demi", serif' />
              <br />
              <p className='desc-p'></p>
            </div>
          </div>
        </div>
        </sections>
    </>
  )
}

export default About