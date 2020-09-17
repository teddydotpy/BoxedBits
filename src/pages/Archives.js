import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './Indexlayout.css'

export default () => {
  const data = useStaticQuery(graphql`
query {
  allFile(filter: {
    extension: {regex: "/(jpg)|(jpeg)|(png)/"}, 
    sourceInstanceName: {eq: "Spring2020"}}) 
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

      <SEO title="Pictures" />
       <div className='magine'>
       <h1> Archives </h1>
       <div class='spring2020'>
           <h2> Spring 2020 Collection</h2>
        {data.allFile.edges.map(({ node }) => (
            <Img fluid={node.childImageSharp.fluid} />
            ))}
        </div>
      </div>
    </Layout>
  )
}

