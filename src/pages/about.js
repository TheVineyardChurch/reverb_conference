import React from "react"

import "../components/uikit.min.css"
import "../components/layout.css"

import Guests from "../components/guests"
import Directors from "../components/directors"
import Header from "../components/header"
import Schedule from "../components/schedule"
import Footer from "../components/footer"

import SEO from "../components/seo"

const registerURL= 'https://thevineyardchurch.ccbchurch.com/goto/forms/915/responses/new';

const theme = {
  backgroundColor: '#f2f4f4',
  color: '#222222',
}

/* exported for about page */
const About = () => (
  <div style={theme}>
    <SEO title="About" />
    <div className="uk-container">

      <Header />

      <div className="uk-margin-large-bottom">
        <p>
          <span className="uk-text-bold">When:</span> June 20th @ 6pm - June 22nd @ 12pm <br />
          <span className="uk-text-bold">Where:</span> The Vineyard Church of Central Illinois, 1500 N. Lincoln Ave. Urbana, IL 61801
        </p>
        <p>
        <span className="uk-text-bold">Cost: $99<br />
        Week of: $109 June 17th-June 20th <br />
        (No refunds after June 16th) <br />
        Registration price includes lodging and  food
        </p>
        <div className="uk-text-center">
          <a className="uk-button uk-button-secondary uk-margin-right uk-button-large" href={registerURL}>Register</a>
        </div>
      </div>

      <Guests />

      <Schedule />

      <div className="uk-margin-large-top">
        <div className="uk-text-center">
          <a className="uk-button uk-button-secondary uk-margin-right uk-button-large" href={registerURL}>Register</a>
        </div>
      </div>

      <Directors />

      <Footer />
    </div>
  </div>
)

export default About
