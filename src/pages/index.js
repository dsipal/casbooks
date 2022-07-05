import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="mt-12">
      
      <div className="grid grid-cols-2 mb-8">
        <div className="flex justify-center items-center">
          <StaticImage src="../images/plane.jpg" alt="A plane on a blue background" class="m-6 max-w-xl object-cover"></StaticImage>
        </div>
        <div className="flex min-h-96 justify-center items-center">
          <h1 className="pt-6 max-w-xl">We find the best manufacturers in Turkey and help bring their goods to American markets.</h1>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="flex min-h-96 justify-center items-center">
          <h1 className="p-12 max-w-lg">Connecting the world through products that create memories.</h1>
        </div>
        <div className="flex justify-center items-center">
          <StaticImage src="../images/map.jpg" alt="The world on a blue background" className="m-6 max-w-xl"></StaticImage>
        </div>
      </div>
    </div>



    <div className="mt-24 p-12 xl:pr-48 xl:pl-48 lg:pr-24 lg:pl-24 md:pr-12 md:pl-12 sm:pr-6 sm:pl-6">
      <h1 className="mb-12 text-center"> How we can help you </h1>
      <ul>
        <li>
          <div className="grid grid-cols-2">
            <div>
              <h2>Warehousing & Fulfillment</h2>
            </div>
            <div>
              We operate a warehouse in central North Carolina, located in Sanford and are in the process of purchasing a larger facility nearby.  Our current warehouse offers 7,000 sq ft of warehouse space, and our new, larger facility will offer 20,000. Our professional staff people are fully equipped to receive, store, and ship your products throughout the United States.            </div>
          </div>
        </li>

        <li>
          <div className="grid grid-cols-2 mt-12">
            <div>
              <h2>Marketing & Analytics</h2>
            </div>
            <div>
              We assist international artisans and manufacturers who wish to open and operate seller accounts within the United States. We act as your agent to open and maintain these accounts and provide account management and advise.            </div>
          </div>
        </li>

        <li>
          <div className="grid grid-cols-2 mt-12">
            <div>
              <h2>Accounting</h2>
            </div>
            <div>
              We can create a data driven marketing campaign, design creatives and websites, and help get your product in front of customers.
            </div>
          </div>
        </li>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
