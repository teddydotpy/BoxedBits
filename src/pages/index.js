import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import './Indexlayout.css'

import img1 from '../Spring2020/abd752dc-555f-4304-b19f-53ccbd941f7c.jpg'
import img2 from '../Spring2020/d53faed5-3224-4cae-a963-786f6c7b579f.jpg'
import img3 from '../Spring2020/72f8c67c-8fb5-48f3-8afe-683df88ef53f.jpg'

export default () => {

return(
    <Layout>
    <SEO title="Home" />

        <div class='title-index'>
          <h3 align='center'>
          Perfectly curated gift boxes.
          </h3>
        </div>
        
        <img src={img1} alt='The closed black box'></img>
        <img src={img2} alt='The closed black box'></img>
        <img src={img3} alt='The closed black box'></img>

        <div class='description-index' align='center'>
          <h2 >
            Boxed with love and you in mind.
          </h2>

        </div>
    </Layout>
  )
}

