import React from "react"

const videoURL= 'https://player.vimeo.com/video/364423260';

const confTitle = {
  color: '#007dff',
  textTransform: 'uppercase',
  fontWeight: '800'
}


const Header = () => (
  <div>
    <h1 className="uk-heading-hero" style={confTitle}>Reverb 2020</h1>
    <div className="uk-margin-large-bottom">

        <iframe className="promo-video"
          src={videoURL} title="Sons and Daughters Promo"
          frameBorder="0" width="100%" height="100%" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen>
        </iframe>


    </div>
  </div>
)



export default Header
