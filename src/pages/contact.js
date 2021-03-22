import React from "react"
import Layout from "../components/layout"
import Hero from "../components/Contact/Hero"
import Contacting from "../components/Contact/Contacting"
import Footer from "../components/Footer"

const contact = () => {
  return (
    <Layout>
      <Hero />
      <Contacting />
      <Footer />
    </Layout>
  )
}

export default contact
