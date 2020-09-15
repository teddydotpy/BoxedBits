import React from 'react'
import './layout.css'


const Btnt = () => (
    <>
    <input id="test" type="checkbox" aria-label="Save" />
    <label htmlFor="test" >
    <svg className="burger" width="86" height="60" viewBox="0 0 150 150">
          <g strokeWidth="12">   
              <line x1="6" y1="6" x2="80" y2="6"></line>
              <line x1="6" y1="28" x2="80" y2="28"></line>
              <line x1="6" y1="50" x2="80" y2="50"> </line>
          </g>
      </svg>
      <svg className="close" width="86" height="60" viewBox="0 0 150 150">
          <g strokeWidth="12">   
              <line x1="42" y1="6" x2="42" y2="80"></line>
              <line x1="6" y1="42" x2="80" y2="42"></line>
          </g>
      </svg> 
    </label>
</>  
)

export default Btnt