import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"
import './Indexlayout.css'

export default () => {
  const data = useStaticQuery(graphql`
query {
  allFile(filter: {
    extension: {regex: "/(jpg)|(jpeg)|(png)|(JPG)/"}, 
    sourceInstanceName: {eq: "product-images"}}) 
  {
    edges {
      node {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}`);

  return (
    <Layout>
       <div className='magine'>

      <SEO title="Pictures" />
      Gali this is an example of how the products will look.

        {data.allFile.edges.map(({ node }) => (
          
          <Img fluid={node.childImageSharp.fluid} />
          ))}

      </div>
    </Layout>
  )
}

