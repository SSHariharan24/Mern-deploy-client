import React from 'react'
import { Navbar } from '../newcomponents/Navbar'
import { Hero } from '../newcomponents/Hero'
import { About } from '../newcomponents/About'
import { Service } from '../newcomponents/Service'
import { Projects } from '../newcomponents/Projects'
import { Contacts } from '../newcomponents/Contacts'
import Footer from '../newcomponents/Footer'
export const Home = () => {
  return (
    <>
  <Navbar/>
 <Hero/>
 <About/>
 <Service/>
 <Projects/>
 <Contacts/>
 <Footer/>
    </>
  )
}
export default Home
