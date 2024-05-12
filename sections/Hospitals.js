import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"
import { hospitals } from "@/assets/data/dummydata";
import { GastroBaguio1} from "../components/common/Title"

const Hospitals = () => {
  return (
    <>
      <sections className="hospitals">
        <div className='container'>
          <div className='heading-title'>
              <GastroBaguio1 />
              <TitleSm title='Hospitals' className='text-primary' fontFamily='"Lucida Fax Demi", serif'/>
              <br />
            <Title title='ABOUT THE HOSPITALS IN BAGUIO CITY.' className='title-bg' />
          </div>
          <div className='grid-4 py'>
            {hospitals.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </div>
          <div className='py btn'>
            <button className='secondary-button'>View More</button>
          </div>
        </div>
      </sections>
    </>
  )
}

export default Hospitals