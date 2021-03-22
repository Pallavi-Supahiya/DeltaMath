import React from "react"
import Layout from "../components/layout"
import Hero from "../components/Teachers/Hero"
import Cards from "../components/Teachers/Cards"
import Footer from "../components/Footer"
import QuickTour from "../components/Teachers/QuickTour"
import Carousel from "../components/Carousel"

const TeachersSchools = () => {
  return (
    <Layout>
      <Hero />
      <Carousel />
      <Cards />
      <QuickTour />
      <Footer />
    </Layout>
  )
}

export default TeachersSchools
