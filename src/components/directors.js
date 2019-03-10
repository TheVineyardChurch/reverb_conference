import React from "react"

import "../components/uikit.min.css"
import "../components/layout.css"


const Sam = {
  name: "Samuel Worden",
  img: "https://s3.us-east-2.amazonaws.com/assets-reverb.us/guests/SamuelWorden.jpeg"
}

const Brandon = {
  name: "Brandon Henderson",
  img: "https://s3.us-east-2.amazonaws.com/assets-reverb.us/guests/BrandonHenderson.jpeg"
}

const Keirstyn = {
  name: "Keirstyn Worden",
  img: "https://s3.us-east-2.amazonaws.com/assets-reverb.us/guests/KeirstynWorden.jpeg"
}

const speakerHeadshot = {
  width: '350px',
  height: '350px'
}

const confTeamTitle = {
  color: '#222222',
  textTransform: 'uppercase',
  fontWeight: '800'
}

/* exported for about page */
const Guests = () => (
  <div className="uk-margin-large-top">
    <h1 className="uk-heading-hero" style={confTeamTitle}>Conference Team</h1>
    <div className="uk-grid">
      <div className="uk-width-auto@m uk-text-center uk-margin-bottom">
        <img style={speakerHeadshot} src={Sam.img} alt={Sam.name} />
        <h2 className="uk-margin-remove">{Sam.name}</h2>
      </div>
      <div className="uk-width-auto@m uk-text-center uk-margin-bottom">
        <img style={speakerHeadshot} src={Brandon.img} alt={Brandon.name} />
        <h2 className="uk-margin-remove">{Brandon.name}</h2>
      </div>
      <div className="uk-width-auto@m uk-text-center uk-margin-bottom">
        <img style={speakerHeadshot} src={Keirstyn.img} alt={Keirstyn.name} />
        <h2 className="uk-margin-remove">{Keirstyn.name}</h2>
      </div>
    </div>
  </div>
)

export default Guests
