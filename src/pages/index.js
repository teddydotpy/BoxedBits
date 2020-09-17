import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import './Indexlayout.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import './splide-default.css'



import img from '../Spring2020/d53faed5-3224-4cae-a963-786f6c7b579f.jpg'
import img2 from '../Spring2020/e637a836-8871-4c7b-9305-b1f3b110fa17.jpg'
import img3 from '../Spring2020/359653e7-da3d-48ef-961f-9a88af5db890.jpg'
import img4 from '../Spring2020/77f64622-942a-4266-b07f-0c47bdce0001.jpg'
import img5 from '../Spring2020/8fdb3529-267d-44ac-abdd-9efc3c7a8003.jpg'
import img6 from '../Spring2020/72f8c67c-8fb5-48f3-8afe-683df88ef53f.jpg'
import img7 from '../Spring2020/abd752dc-555f-4304-b19f-53ccbd941f7c.jpg'
import img8 from '../Spring2020/ebcc0d6b-84bc-42fa-a47c-72807e74b092.jpg'
import img9 from '../Spring2020/9facdeda-c2c6-458d-b5e4-c9030c690f25.jpg'

export default () => {

return(
    <Layout>
    <SEO title="Home" />

        <div class='title-index'>
          <h1 align='center'>
            BoxedBits
          </h1>
        </div>

        <Splide class="Splide" onArrowMounted={ ( splide, prev, next ) => {
                  console.log( prev, next ); } }
                  options={ { 
                    width  : '100%',
                    autoplay: true,
                    type: 'loop',
                    speed: 600,
                    perPage: 3,
                    gap: '1%'
                  } } >
  <SplideSlide>
    <img src={img} alt="open box"/>
  </SplideSlide>
  <SplideSlide>
    <img src={img2} alt="closed box"/>
  </SplideSlide>
  <SplideSlide>
    <img src={img3} alt="closed box" width='20%' />
  </SplideSlide>
  <SplideSlide>
    <img src={img4} alt="open box"/>
  </SplideSlide>
  <SplideSlide>
    <img src={img5} alt="closed box"/>
  </SplideSlide>
  <SplideSlide>
    <img src={img6} alt="closed box" width='20%' />
  </SplideSlide>
  <SplideSlide>
    <img src={img7} alt="open box"/>
  </SplideSlide>
  <SplideSlide>
    <img src={img8} alt="closed box"/>
  </SplideSlide>
  <SplideSlide>
    <img src={img9} alt="closed box" width='20%' />
  </SplideSlide>
        </Splide>

        <div class='description-index' align='center'>
          <h2 >
            Boxed with love and you in mind.
          </h2>
          <p>
            Perfectly curated gift boxes.
          </p>
        </div>
    </Layout>
  )
}

