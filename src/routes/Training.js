import React from 'react'

import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Footer from '../components/Footer'
import TrainigCom from '../components/Training'

const Training = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading='TRAINING.' text='Pre-flight & In-Flight Training.' />
      <TrainigCom />
      <Footer />
    </div>
  )
}

export default Training
