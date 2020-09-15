import React from "react"
import site from '../../gatsby-config'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
  <SEO title="Home" />
    <h1> {site.siteMetadata.author} </h1>
  </Layout>
)

export default IndexPage
