import { Link } from "gatsby"
import React from "react"
import "./video.css"


const videoURL= 'https://player.vimeo.com/video/318806849?muted=1&autoplay=1&loop=1';
const registerURL= 'https://thevineyardchurch.ccbchurch.com/goto/forms/915/responses/new';

const buttonLeft = {
  color: '#f2f4f4',
  padding: '15px',
  backgroundColor: '#222222',
  border: '1px solid white',
  textDecoration: 'none',
  marginRight: '10px'
};

const button = {
  color: '#f2f4f4',
  padding: '15px',
  backgroundColor: '#222222',
  border: '1px solid white',
  textDecoration: 'none'
};

const Landing = () => (


      // <h1 style={{ margin: 0 }}>
      //   <Link
      //     to="/"
      //     style={{
      //       color: `white`,
      //       textDecoration: `none`,
      //     }}
      //   >
      //   </Link>
      // </h1>

      <div className="vimeo-wrapper">
        <iframe
          src={videoURL}
          frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
        </iframe>
        <div
            style={{
              position: 'absolute',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              width: '100%',
              pointerEvents: 'all'
            }}
          >
          <div className="landing-links">
            <a style={buttonLeft} href={registerURL}>Early-Bird</a>
            <Link style={button} to='/page-2'>Learn More</Link>
          </div>
        </div>
      </div>


)

export default Landing
