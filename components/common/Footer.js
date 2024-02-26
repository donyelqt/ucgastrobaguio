import React from 'react'
import { TitleLogo } from './Title';

const Footer = () => {
  return (
    <>
        <footer>
          <div className='container'>
            <div className='grid-4'>
              <div className='logo'>
                <TitleLogo />
              </div>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer;