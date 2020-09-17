import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import Footer from "./footer"
import Header from './header'
import './layout.css'



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
query {
  fileName: file(relativePath: { eq: "f0db4c2e-7f38-468e-b3df-6887e3119617.JPG" }) {
    childImageSharp {
      fluid(maxWidth: 600, maxHeight: 600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`);
  return (
    <>
    <div class='logo'>
    <Link to='/' >
         <Img fluid={data.fileName.childImageSharp.fluid} alt="Boxed bits logo" />
    </Link>
    </div>
      <Header />
            <main style={{
              padding: '5%',
            }} 

            className='wrapper'
            >{children}</main>
      <Footer />
    </>
  )
}

export default Layout