import React from "react"
import { Link } from "gatsby"

import "../styles/styles.css"

function FourOFour() {
  return (
    <div className={"flex-column"}>
      <h1 className={"btc-ticker"}>404.</h1>
      <h3 className={"subtitle"}>
        How... how did you get here? This is a 1-page website!
      </h3>
      <Link to="/" className={"subtitle"}>
        Take me home
      </Link>
      <Link to="/easter-egg" className={"sub-subtitle"}>
        Take me... somewhere else.
      </Link>
    </div>
  )
}

export default FourOFour
