import { services } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"
import { services as services2 } from "@/assets/data/dummydata";

const Services = () => {
  return (
    <>
      <sections classname="agency bg-top">
        <div className='container'>
          <div className='heading-title'>
              <TitleSm title='Services of the Hospitals in Baguio City' className='text-primary' fontFamily='"Lucida Fax Demi", serif'/>
              <br />
            <Title title='Unique technologies & modern approach' className='title-bg' />
          </div>
          <div className='grid-4 py'>
            {services2.map((item) => (
              <Card data={item} key={item.id} caption={item.post} show={true} />
            ))}
          </div>
        </div>
      </sections>
    </>
  )
}

export default Services