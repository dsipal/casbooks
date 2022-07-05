import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import logo from "../images/logo-sm-blue.png"

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="flex flex-wrap justify-between p-2 mb-2 bg-white">
      <div className="flex flex-shrink-0 mr-6 text-grey-400 w-full justify-center items-center">
        <div className="text-2xl tracking-wide text-grey-600 font-merriweather subpixel-antialiased text-center">
          <img src={logo} class="inline h-10 mr-4"></img> 
          <div className="inline-block">{siteTitle}</div>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
