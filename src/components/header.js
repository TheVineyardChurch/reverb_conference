import React from "react"

const videoURL= 'https://player.vimeo.com/video/318806849';

const confTitle = {
  color: '#222222',
  textTransform: 'uppercase',
  fontWeight: '800'
}

const Header = () => (
  <div>
    <h1 className="uk-heading-hero" style={confTitle}>Sons & Daughters</h1>
    <div className="uk-grid uk-margin-large-bottom">
      <div className="uk-width-auto@l">
        <iframe className="promo-video"
          src={videoURL} title="Sons and Daughters Promo"
          frameBorder="0" width="640" height="360" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen>
        </iframe>
      </div>
      <div className="uk-width-expand@l">
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
  </div>
)



export default Header
