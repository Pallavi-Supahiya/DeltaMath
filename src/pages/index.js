import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Cards from "../components/Cards"
import Testimonials from "../components/Testimonials"
import ForTeachers from "../components/ForTeachers"
import ForParents from "../components/ForParents"
import Footer from "../components/Footer"

const IndexPage = () => (
  <>
    <Layout />
    <SEO title="Home" />
    <Hero />
    <Cards />
    <ForTeachers />
    <ForParents />
    <Testimonials />

    <Footer />
  </>
)

export default IndexPage
