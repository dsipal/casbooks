import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="w-full hero">
    
    </div>
    <StaticImage src="../images/hero.jpg" alt="Global Logistics" class="-ml-6 -mr-6"></StaticImage>
    
    

    <div className="grid grid-cols-2">
      <div>
        <StaticImage src="../images/plane.jpg" alt="A plane on a blue background" class="m-6"></StaticImage>
      </div>
      <div class="flex min-h-full justify-center items-center">
        <h1 class="p-12 pt-6 max-w-xl">We find the best manufacturers in Turkey and help bring their goods to American markets.</h1>
      </div>
    </div>

    <div class="grid grid-cols-2">
      <div class="flex min-h-full justify-center items-center">
        <h1 class="p-12 max-w-lg">Connecting the world through products that create memories.</h1>
      </div>
      <div>
        <StaticImage src="../images/map.jpg" alt="The world on a blue background" class="m-6"></StaticImage>
      </div>
    </div>


    <div class="mt-24 p-12 xl:pr-48 xl:pl-48 lg:pr-24 lg:pl-24 md:pr-12 md:pl-12 sm:pr-6 sm:pl-6">
      <h1 className="mb-12 text-center"> How we can help you </h1>
      <ul>
        <li>
          <div className="grid grid-cols-2">
            <div>
              <h2>Warehousing & Fulfillment</h2>
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </li>

        <li>
          <div className="grid grid-cols-2 mt-12">
            <div>
              <h2>Marketing & Analytics</h2>
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </li>

        <li>
          <div className="grid grid-cols-2 mt-12">
            <div>
              <h2>Accounting</h2>
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="p-12 font-montserrat mt-24 xl:pr-48 xl:pl-48 lg:pr-24 lg:pl-24 md:pr-12 md:pl-12 sm:pr-6 sm:pl-6">
      <h1 class="text-center mb-12">Some of our partners</h1>

      <div class="grid grid-cols-2 mb-12">
        <div>
          <StaticImage src="../images/wlo.webp" alt="Global Logistics" class="mr-12"></StaticImage>
        </div>
        <div className="">
          <h1 className="mb-6">WLO Wood</h1>
          <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>

      <div class="grid grid-cols-2 mb-12">
        <div>
          <StaticImage src="../images/sbs.jpg" alt="Global Logistics" class="mr-12"></StaticImage>
        </div>
        <div className="">
          <h1 className="mb-6">Silver By Selene</h1>
          <p className="text-xl sm:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>



      <button className="">View More</button>
    </div>

    





  </Layout>
)

export default IndexPage
