import { teamdata, teamdata1 } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import team from "@/pages/team"
import React from "react"
import { GastroBaguio1} from "../components/common/Title"

const Team = () => {
  return (
    <>
      <sections classname="agency bg-top">
        <div className='container'>
          <div className='heading-title'>
              <GastroBaguio1 />
              <TitleSm title='Meet Our Passionate Team' className='text-primary' fontFamily='"Lucida Fax Demi", serif'/>
              <br />
              <Title title='THE FIRST ONLINE PLATFORM OF UC FOR THE HOSPITALS BASED IN BAGUIO CITY, PHILIPPINES.' className='title-bg'/>
          </div>
          <div className='grid-3 py'>
            {teamdata.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </div>
        </div>
      </sections>
    </>
  )
}

export default Team