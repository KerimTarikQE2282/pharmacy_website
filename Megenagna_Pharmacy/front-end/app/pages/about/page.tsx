import React from 'react'
import Hero from './Components/Hero'
import WhatWeDo from '../home/Components/WhatWeDo'
import OurTeam from './Components/OurTeam'
import OurHistory from './Components/OurHistory'
import Awards from './Components/Awards'
import WhoWeAre from '../home/Components/WhoWeAre'
export default function page() {
  return (
    <div>
      <Hero/>
      <WhoWeAre/>
      <OurTeam/>
      <OurHistory/>
      <Awards/>
    </div>
  )
}
