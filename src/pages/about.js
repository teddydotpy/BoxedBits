import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <h1> I'm still learning.
    </h1>

    <p> 
      I guess this defines who I am more than anything in the world. People
      say it's imporssible to know everythint but I think for the longest time
      this has been my goal. I mean my interests range from the exploration
      of the brain using neurological techniques, to understanding the fundamentals
      of the univers either by modeling it using quantum mechanics or by observing
      the effects of gravity on space-time. 
    </p>
    <p>
      I mean i also love programming and coming up with algorithms that are 
      efficient and solve tasks without much overhead. I am terrible
      with design but I made it a point to have some basic understanding and
      practice so I am not too hopless...
      <br />
      In the world of computer science I interested in and proficient at: 
    </p>
      <h2> Programming stack </h2>
        <ul >
          <li> Python </li>
          <li> C/C++ </li>
          <li> Qt </li>
          <li> Javascript </li>
          <li> GatsbyJs </li>
          <li> GraphQl </li>
          <li> NodeJs </li>
          <li> Express </li>
          <li> MySql </li>
          <li> MongoDB </li> 
        </ul>
      <p>
        I am interested in many fields within Computer Science including but not 
        limited to:
      </p>
         <h4>
          Embedded systems, Network Admin, Machine Learning, etc.
        </h4>

      <p>
        Although my career seems to be directly pointed toward Computer science
        my one and true love will always be mathematics...
      </p>
  </Layout>
)

export default IndexPage
