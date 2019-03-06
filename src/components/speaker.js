import PropTypes from "prop-types"
import React from "react"

const Speaker = ({ speakerName, speakerBio }) => (
  <div key={speakerName}>
    <h1>{speakerName}</h1>
    <p>{speakerBio}</p>
  </div>
)

Speaker.propTypes = {
  speakerName: PropTypes.string,
  speakerBio: PropTypes.string,
}

Speaker.defaultProps = {
  speakerName: ``,
  speakerBio: ``,
  speakerImg: ``,
}

export default Speaker
