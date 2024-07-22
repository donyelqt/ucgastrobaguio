import { teamdata, teamdata1 } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import team from "@/pages/team"
import React from "react"
import { GastroBaguio1} from "../components/common/Title"

const Team = () => {
  return (
    <>
      <sections className="agency bg-top">
        <div className='container'>
          <div className='heading-title'>
              <GastroBaguio1 />
              <TitleSm title='Meet Our Passionate Team' className='text-primary' fontFamily='"Lucida Fax Demi", serif'/>
              <br />
              <Title title='A TEAM OF INNOVATIVE & PASSIONATE FROM UC BAGUIO.' className='title-bg'/>
          </div>
          <div className='grid-2 py team'>
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