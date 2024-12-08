import Card1 from '@/components/Card1'
import Card2 from '@/components/Card2'
import Card3 from '@/components/Card3'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import FeaturesPost from '@/components/FeaturesPost'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Card1/>
      <Card2/>
      <Card3/>
      <FeaturesPost/>
      
    </div>
  )
}

export default page
