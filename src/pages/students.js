import React from "react"
import Layout from "../components/layout"
import Hero from "../components/Students/Hero"
import Footer from "../components/Footer"
import { GlobalStyle } from "../components/styles/GlobalStyles"

const students = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Hero />
      <Footer />
    </Layout>
  )
}

export default students
