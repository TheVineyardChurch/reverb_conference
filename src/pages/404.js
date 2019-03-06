import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const NotFoundPage = () => (
  <div className="uk-container">
    <SEO title="404: Not found" />
    <h1>UH OH</h1>
    <p>You have hit a dead end</p>
    <Link to="/">Take Me Home</Link>
  </div>
)

export default NotFoundPage
