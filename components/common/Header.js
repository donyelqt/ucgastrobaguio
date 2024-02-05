import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { TitleLogo } from './Title';
import { useRouter } from 'next/router';
import { AiOutlineClose } from 'react-icons/ai';
import { RiMenu4Line, RiMenu5Fill, RiMenuFoldLine, RiMoneyEuroCircleLine } from 'react-icons/ri';


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
            <Link href='/'>
            <TitleLogo   />
            </Link>
          </div>
          <nav className={open ? "openMenu":"closeMenu"} onClick={()=>setOpen(null)}>
            <Link href='/' className={activeLink ==="/" ? "activeLink" : "none"}>
              Home
            </Link>
            <Link href='/' className={activeLink ==="/about" ? "activeLink" : "none"}>
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
              HealthBlog
            </Link>
            <Link href='/' className={activeLink ==="/contact" ? "activeLink" : "none"}>
              Contact
            </Link>
            <button className="button-primary">schedule a consultation</button>
          </nav>
          <button onClick={() => setOpen(!open)}>{open ? <AiOutlineClose/> : <RiMenuFoldLine/> }</button>
        </div>
       </header>
    </>
  )
}

export default Header