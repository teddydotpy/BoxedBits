import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import './Indexlayout.css'

import img from '../Spring2020/0f608e27-205d-4d2e-b819-2894adf5ca61.jpg'
import img1 from '../Spring2020/4bd0f35a-3c74-4995-968e-ec1294fda934.jpg'
import img2 from '../Spring2020/8fdb3529-267d-44ac-abdd-9efc3c7a8003.jpg'
import img3 from '../Spring2020/9ccc87c4-84bc-4e0b-883c-3b543d8c8430.jpg'
import img4 from '../Spring2020/9facdeda-c2c6-458d-b5e4-c9030c690f25.jpg'
import img5 from '../Spring2020/72f8c67c-8fb5-48f3-8afe-683df88ef53f.jpg'
import img6 from '../Spring2020/77f64622-942a-4266-b07f-0c47bdce0001.jpg'
import img7 from '../Spring2020/359653e7-da3d-48ef-961f-9a88af5db890.jpg'
import img8 from '../Spring2020/a2d30edf-c407-44fa-ab06-824831984bd1.jpg'
import img9 from '../Spring2020/abd752dc-555f-4304-b19f-53ccbd941f7c.jpg'
import img10 from '../Spring2020/bb00115d-bf39-44e5-bbe8-605002d29092.jpg'
import img11 from '../Spring2020/d53faed5-3224-4cae-a963-786f6c7b579f.jpg'
import img12 from '../Spring2020/e637a836-8871-4c7b-9305-b1f3b110fa17.jpg'

export default () => {
 
  return (
    <Layout>

      <SEO title="Pictures" />
       <div className='magine'>
       <h1> Spring Range 2020 </h1>

        <h2> ' BB Sweet Classic Box ' </h2>
       <img src={img7} alt="open box"/>
       <img src={img} alt="open box"/>
       <img src={img11} alt="open box"/>

       <h2> 'BB Pretty Pink Box ' </h2>
       <img src={img4} alt="open box"/>
       <img src={img3} alt="open box"/>
       <img src={img9} alt="open box"/>

       <h2> 'BB classic Kem Box </h2>
       <img src={img6} alt="open box"/>
       <img src={img12} alt="open box"/>
       <img src={img5} alt="open box"/>

       <h2> ' Spoil Yourself with the best '</h2>
       <img src={img8} alt="open box"/>
       <img src={img2} alt="open box"/>
       <img src={img1} alt="open box"/>
       <img src={img10} alt="open box"/>
        
      </div>
    </Layout>
  )
}

