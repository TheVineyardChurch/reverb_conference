import PropTypes from "prop-types"
import React from "react"

const speakerHeadshot = {
  width: '400px',
  height: '300px'
}

const Speaker = ({ speakerName, speakerBio, speakerImg }) => (
  <div key={speakerName}>
    <div className="uk-grid uk-margin-large-bottom">
      <div className="uk-width-auto@m">
        <img style={speakerHeadshot} src={speakerImg} alt={speakerName} />
      </div>
      <div className="uk-width-expand@m">
        <h2>{speakerName}</h2>
        <p>{speakerBio}</p>

      </div>
    </div>
  </div>
)

Speaker.propTypes = {
  speakerName: PropTypes.string,
  speakerBio: PropTypes.string,
  speakerImg: PropTypes.string,
}

Speaker.defaultProps = {
  speakerName: ``,
  speakerBio: ``,
  speakerImg: ``,
}

export default Speaker
