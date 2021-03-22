import React from "react"
import Layout from "../components/layout"
import Hero from "../components/Families/Hero"
import UpperText from "../components/Families/UpperText"
import { GlobalStyle } from "../components/styles/GlobalStyles"
import CoursePlan from "../components/Families/CoursePlan"
import Footer from "../components/Footer"
import GettingStarted from "../components/Families/GettingStarted"
import FormSection from "../components/Families/FormSection"

const familiesIndividuals = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Hero />
      <UpperText />

      <CoursePlan />
      <GettingStarted />
      <FormSection />
      <Footer />
    </Layout>
  )
}

export default familiesIndividuals
