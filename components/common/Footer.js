import React from 'react'
import { Logo, TitleLogo, Bghmc, Slu, Notre, Pines, GoogleMaps, Facebook, Hospital, GastroBaguio } from './Title';
import Link from 'next/link';
import { FaFacebookSquare } from "react-icons/fa";       

const Footer = () => {
  return (
    <>
        <footer>
          <div className='container'>
            <div className='grid-4 py'>
              <div className='logo'>
                <Logo />
                <span className='green1 flex flex-col'><GoogleMaps />Gov. Pack Rd, Baguio City, Philippines</span>
                <br />
                <span>Contact us with this schedule</span>
                <br />
                <span>Monday - Friday from 10 am to 4 pm</span>
                <br />
                <br />
                <button className="button-primary" style={{ borderRadius: 5, border: 'none', cursor: 'pointer' }}>get in touch with us.</button>
              </div>
              <ul>
                <h3><span className='green1 flex flex-col'>UC GASTROBAGUIO<GastroBaguio /></span></h3>
                <li>
                  <Link href="/">About the UC GastroBaguio</Link>
                </li>
                <li>
                  <Link href="/">Meet Our Team!</Link>
                </li>
                <li>
                  <Link href="/">Services</Link>
                </li>
                <li>
                  <Link href="/">Hospitals</Link>
                </li>
                <li>
                  <Link href="/">HealthBlogs</Link>
                </li>
                <li>
                  <Link href="/">Contact</Link>
                </li>
              </ul>
              <ul>
                <h3><span className='green1 flex flex-col'>HOSPITAL SERVICES<Hospital /></span></h3>
                <li>
                  <Link href="/">Baguio General Hospital and Medical Center</Link>
                </li>
                <li>
                  <Link href="/">Saint Louis University - Hospital of the Sacred Heart</Link>
                </li>
                <li>
                  <Link href="/">Notre Dame De Chartres Hospital</Link>
                </li>
                <li>
                  <Link href="/">Pines City Doctors Hospital</Link>
                </li>
              </ul>
              <ul>
                <h3><span className='green1 flex flex-col'>FACEBOOK PAGES<Facebook /></span></h3>
                <div className='connect'>
                  <li>
                    <Link href="/">
                      <Bghmc />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.facebook.com/share/zaztTCV1A8RX4i5G/?mibextid=LQQJ4d/" target="_blank" rel="noopener noreferrer">
                      <Slu />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.facebook.com/profile.php?id=100063608002884&mibextid=LQQJ4d/" target="_blank" rel="noopener noreferrer">
                      <Notre />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <Pines />
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
            <div className='legal connect py'>
              <span className='green1'>Copyright © 2024 UC GastroBaguio. All Rights Reserved.</span>
              <span className='green1'></span>
            </div>
            <div className='connect'>
            <span className='green1'></span>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer;