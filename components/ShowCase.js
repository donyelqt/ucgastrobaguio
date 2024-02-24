import React from "react"
import { Title } from "./common/Title"
import { showcase } from "@/assets/data/dummydata"
import { Card } from "./common/Card"
import Link from "next/link"
import { HiOutlineArrowRight } from "react-icons/hi"
import { RxOpenInNewWindow } from "react-icons/rx";


const ShowCase = () => {
  return (
    <>
      <section className='showcase'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='INFORMATION ABOUT THE HOSPITALS IN BAGUIO CITY.' />
          </div>
          <div className='hero-content grid-2 py'>
            {showcase.map((item) => (
              <Card data={item} key={item.id} />
            ))}
          </div>
          <div className='card links'>
            <Link href='/'>
              VIEW ALL CASES <RxOpenInNewWindow className='link-icon' />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ShowCase