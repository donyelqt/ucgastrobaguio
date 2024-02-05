import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
       <header>
        <div className='container'>
          <div className=''>
            <Link href='/'></Link>
          </div>
          <nav>
            <Link href='/'>Home</Link>
            <button>book a consultation</button>
          </nav>
        </div>
       </header>
    </>
  )
}

export default Header