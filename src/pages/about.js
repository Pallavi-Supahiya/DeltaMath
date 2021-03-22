import React from "react"
import Layout from "../components/layout"
import Hero from "../components/About/Hero"
import Contactus from "../components/About/Contactus"
import Leadership from "../components/About/Leadership"
import Quote from "../components/About/Quote"
import Footer from "../components/Footer"

const about = () => {
  return (
    <Layout>
      <Hero />
      <Contactus />
      <Leadership />
      <Quote />
      <Footer />
    </Layout>
  )
}

export default about
