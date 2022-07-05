import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="mt-12 mb-24 grid grid-cols-2 gap-y-12 gap-x-3 lg:gap-x-6 xl:gap-x-12">

      <div className="flex justify-end items-center">
        <StaticImage src="../images/plane.jpg" alt="A plane on a blue background" class="object-cover max-w-md xl:max-w-2xl"></StaticImage>
      </div>
      <div className="flex min-h-96 justify-start items-center ">
        <div className="max-w-md xl:max-w-2xl text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-6xl">We find the best manufacturers in Turkey and help bring their goods to American markets.</div>
      </div>



      <div className="flex min-h-96 justify-end items-center">
        <div className="text-right max-w-md xl:max-w-2xl text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-6xl">Connecting the world through products that create memories.</div>
      </div>
      <div className="flex justify-start items-center">
        <StaticImage src="../images/map.jpg" alt="The world on a blue background" className="object-cover max-w-md xl:max-w-2xl"></StaticImage>
      </div>
    </div>


    <h1 className="mb-12 md:mb-24 text-center md:text-6xl text-4xl font-bold">
      <span className="text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500">How we can help you</span>
    </h1>

    <div className="grid grid-cols-1 xl:grid-cols-2  gap-y-12 gap-x-6 p-12 md:p-24 xl:p-48 pt-0 md:pt-0 xl:pt-0 text-center xl:text-left">
      <h2 className="text-4xl xl:text-6xl">Warehousing & Fulfillment</h2>
      <p className="text-xl lg:text-2xl xl:text-4xl">
        We operate a warehouse in central North Carolina, located in Sanford and are in the process of purchasing a larger facility nearby.
        Our current warehouse offers 7,000 sq ft of warehouse space, and our new, larger facility will offer 20,000. Our professional staff
        people are fully equipped to receive, store, and ship your products throughout the United States.
      </p>

      <h2 className="text-4xl xl:text-6xl">Marketing & Analytics</h2>
      <p className="text-xl lg:text-2xl xl:text-4xl">
        We can help build your presence through many different streams of traffic, from your social media presence to the search engine
        optimization of your main storefront. We manage ad campaigns for clients in many different markets. In addition to designing ad 
        creatives and landing pages we ensure that you are getting the most out of your ad spend by fully integrating Google Analytics 
        into your marketing process.
        
      </p>

      <h2 className="text-4xl xl:text-6xl">E-Commerce Account Management</h2>
      <p className="text-xl lg:text-2xl xl:text-4xl">
        We assist international artisans and manufacturers who wish to open and operate E-Commerce accounts within the United States. We act as
        your agent to open and maintain accounts with Amazon, Etsy, and many others, as well as providing account management and advice. We 
        also can offer financial accounting and tax services.
      </p>

    </div>
  </Layout>
)

export default IndexPage
