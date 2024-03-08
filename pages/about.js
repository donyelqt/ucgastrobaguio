import Head from 'next/head'
import React from 'react'
import About from '../sections/About'

const about = () => {
  return (
    <>
        <Head>
            <title>ABOUT THE UC GastroBaguio</title>
        </Head>
        <About />
    </>
  )
}

export default about