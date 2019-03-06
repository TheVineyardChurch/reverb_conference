import React from "react"
import "../components/layout.css"

import SEO from "../components/seo"
import Landing from "../components/landing"

const IndexPage = () => (
  <div style={{backgroundColor: '#f2f4f4', color: '#222222',}}>
    <SEO title="Homepage" />
    <Landing />
  </div>
)

export default IndexPage
