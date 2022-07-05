import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import logo from "../images/logo-sm-blue.png"

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="flex flex-wrap justify-between p-2 mt-6 mb-24 bg-white">
      <div className="flex flex-shrink-0 mr-6 w-full justify-center items-center">
        <div className="flex text-center">
          <img src={logo} class="inline h-9 xl:h-12 mr-4"></img> 
          <div className="inline-block xl:text-5xl text-2xl text-gray-700 subpixel-antialiased font-bold font-montserrat tracking-tighter">{siteTitle}</div>
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
