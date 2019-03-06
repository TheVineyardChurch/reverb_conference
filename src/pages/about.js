import React from "react"
import { Link } from "gatsby"
import "../components/uikit.min.css"
import "../components/layout.css"
import "../images/s+d.png"

import Guests from "../components/guests"

import SEO from "../components/seo"

const videoURL= 'https://player.vimeo.com/video/318806849';
const registerURL= 'https://thevineyardchurch.ccbchurch.com/goto/forms/915/responses/new';

const theme = {
  backgroundColor: '#f2f4f4',
  color: '#222222',
}

const confTitle = {
  color: '#222222',
  textTransform: 'uppercase',
  fontWeight: '800'
}


/* exported for about page */
const About = () => (
  <div style={theme}>
    <SEO title="About" />
    <div className="uk-container">
      <h1 className="uk-heading-hero" style={confTitle}>Sons & Daughters</h1>
      <div className="uk-grid uk-margin-large-bottom">
        <div className="uk-width-auto@m">
          <iframe className="promo-video"
            src={videoURL} title="Sons and Daughters Promo"
            frameborder="0" width="640" height="360" webkitallowfullscreen mozallowfullscreen allowfullscreen>
          </iframe>
        </div>
        <div className="uk-width-expand@m">
          <p>We have been restored to perfect unity with our Heavenly Father.
            Our relationship with Him is one that does not include our past
            mistakes but unlocks endless possibilities within our present and
            our future. We are the children of God. Made in His Image to reflect
            Him in the world around us. Because of Jesus' sacrifice, we are free
            to become all that we were created to be. Our destiny is to change
            environments and release the Kingdom of Heaven on this earth.
            We are fully empowered by the very Spirit of God.
            We are the sons and daughters of Heaven.
          </p>
          <p>
          Sons & Daughters is a conference dedicated to training, equipping,
          and encouraging students to step into the fullness of their identity
          as sons & daughters of God. Join us June 20th-22nd as we journey
          together through teaching, activation, and practice in supernatural
          ministry. We will cover topics such as prophecy, healing, words of
          knowledge, deliverance, and power evangelism.
          </p>
        </div>
      </div>

      <div>
        <p>
          <span className="uk-text-bold">When:</span> June 20th - 22nd <br />
          <span className="uk-text-bold">Time:</span> Friday: 6pm- 10pm  // Saturday: 8am-10pm <br />
          <span className="uk-text-bold">Where:</span> The Vineyard Church of Central Illinois, 1500 N. Lincoln Ave. Urbana, IL 61801
        </p>
        <p>
        <span className="uk-text-bold">Cost: $89</span> ($99 after Early-Bird ENDS on March 31st) <br />
        Week of: $109 June 17th-June 20th <br />
        (No refunds after June 16th)
        </p>
        <div className="uk-text-center">
          <a className="uk-button uk-button-secondary uk-margin-right uk-button-large" href={registerURL}>Register</a>
        </div>
      </div>


      <Guests />
      
      <Link to="/">Go back to the homepage</Link>
    </div>
  </div>
)

export default About
