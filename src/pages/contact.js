import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import './Indexlayout.css'
import './splide-default.css'
import Socials from '../components/socials'
export default () => {

return(
    <Layout>
    <SEO title="Home" />

        <div>
          <h1 align='center'>
            BoxedBits
          </h1>
        </div>
    <div align='center'>
        <Socials />
    </div>

    </Layout>
  )
}

