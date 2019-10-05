import React from "react"

import "../components/uikit.min.css"
import "../components/layout.css"

import Header from "../components/header"

import SEO from "../components/seo"

const registerURL= 'https://www.eiseverywhere.com/ereg/index.php?eventid=491147&';

const theme = {
  backgroundColor: '#0c0c0c',
  color: '#fff',
}

/* exported for about page */
const About = () => (
  <div style={theme}>
    <SEO title="About" />
    <div className="uk-container">

      <Header />

      <div className="uk-margin-large-bottom">
        <p class="uk-text-lead">
          <span className="uk-text-bold">When:</span> Feb 14 - 16 <br />
          <span className="uk-text-bold">Where:</span> Lake Williamson Retreat Center <br />
          <span className="uk-text-bold">Cost:</span> $149 <br /> <br />
        </p>
        <div className="uk-text-center">
          <a className="uk-button uk-button-secondary uk-margin-right uk-button-large" href={registerURL}>Register</a>
        </div>
      </div>


    </div>
  </div>
)

export default About
