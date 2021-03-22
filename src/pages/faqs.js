import React from "react"
import Layout from "../components/layout"
import Hero from "../components/faqs/Hero"
import Questions from "../components/faqs/Questions"
import Footer from "../components/Footer"

const faqs = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <Questions />
        <Footer />
      </Layout>
    </div>
  )
}

export default faqs
