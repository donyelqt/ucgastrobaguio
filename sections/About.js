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

                    </div>
                </div>
            </div>
        </sections>
    </>
  )
}

export default About