import Head from 'next/head'
import React from 'react'
import Team from '@/sections/Team'
import Hospitals from '../sections/Hospitals'

const hospitals = () => {
  return (
    <>
        <Head>
            <title>HOSPITALS - UC GASTROBAGUIO</title>
        </Head>
        <Hospitals />
    </>
  )
}

export default hospitals