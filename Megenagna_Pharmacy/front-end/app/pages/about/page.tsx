import React from 'react'
import Hero from './Components/Hero'
import WhatWeDo from './Components/WhatWeDo'
import OurTeam from './Components/OurTeam'
import OurHistory from './Components/OurHistory'
import Awards from './Components/Awards'
export default function page() {
  return (
    <div>
      <Hero/>
      <WhatWeDo/>
      <OurTeam/>
      <OurHistory/>
      <Awards/>
    </div>
  )
}
