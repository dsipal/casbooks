import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import logo from "../images/logo-sm-blue.png"

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="flex flex-wrap items-center justify-between p-2 mb-2 bg-white">
      <div className="flex items-center flex-shrink-0 mr-6 text-grey-400">
        <img src={logo} class="inline ml-5 mr-7 h-10"></img>
        <span className="text-2xl tracking-wide text-grey-600 font-merriweather subpixel-antialiased">
          {/* {siteTitle} */}
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 text-grey border border-grey rounded hover:text-grey hover:border-grey"
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${isExpanded ? `block` : `hidden`
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm text-grey lg:flex-grow">
          {/* <Link
            to={`/partners`}
            className="block mt-4 mr-4 text-grey lg:inline-block lg:mt-0 hover:text-grey"
          >
            Our Partners
          </Link> */}
        </div>
        <div className="font-montserrat">
          <Link
            to={`/partners`}
            className="block mt-4 mr-4 lg:inline-block lg:mt-0 hover:text-grey"
          >
            Partners
          </Link>
          <Link
            to={`/services`}
            className="block mt-4 mr-4 lg:inline-block lg:mt-0 hover:text-grey"
          >
            Services
          </Link>
          <Link
            to={`/contact`}
            className="block mt-4 mr-4 lg:inline-block lg:mt-0 hover:text-grey"
          >
            Contact
          </Link>
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
