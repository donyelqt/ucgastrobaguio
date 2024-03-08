import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { TitleLogo } from './Title';
import { useRouter } from 'next/router';
import { AiOutlineClose } from 'react-icons/ai';
import { RiMenuLine} from 'react-icons/ri';


const Header = () => {
  const [activeLink, setActiveLink,] = useState("")
  const [open, setOpen,] = useState(false)

  const router = useRouter()
  useEffect(() => {
    setActiveLink(router.pathname)
  },[router.pathname])

  return (
    <>
       <header>
        <div className='container'>
          <div className='logo'>
            <a href='https://uc-bcf.edu.ph/' target='_blank' rel='noopener noreferrer'>
            <TitleLogo />
            </a>
          </div>
          <nav className={open ? "openMenu":"closeMenu"} onClick={()=>setOpen(null)}>
            <Link href='/' className={activeLink ==="/" ? "activeLink" : "none"}>
              Home
            </Link>
            <Link href='/about' className={activeLink ==="/about" ? "activeLink" : "none"}>
              About
            </Link>
            <Link href='/' className={activeLink ==="/team" ? "activeLink" : "none"}>
              Team
            </Link>
            <Link href='/' className={activeLink ==="/services" ? "activeLink" : "none"}>
              Services
            </Link>
            <Link href='/' className={activeLink ==="/hospitals" ? "activeLink" : "none"}>
              Hospitals
            </Link>
            <Link href='/' className={activeLink ==="/healthblog" ? "activeLink" : "none"}>
              HealthBlogs
            </Link>
            <Link href='/' className={activeLink ==="/contact" ? "activeLink" : "none"}>
              Contact
            </Link>
            <button  className="button-primary" style={{ borderRadius: 5, border: 'none', cursor: 'pointer' }} onClick={() => {window.open("https://ucgastrobaguio-consultation.vercel.app/", "_blank");}} >Consultation!</button>
          </nav>
          <button className="menucontrol" onClick={() => setOpen(!open)}>{open ? <AiOutlineClose size={35} color="red" />  : <RiMenuLine size={35}/> }</button>
        </div>
       </header>
    </>
  )
}

export default Header