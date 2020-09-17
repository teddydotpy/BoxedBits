import React from "react"
import FeatherIcon from 'feather-icons-react';

const socials = () => (
   <ol> 
        <li className="nav">
            <a href="https://instagram.com/boxedbits"
            style={{ color: '#d49bd0', textDecoration: 'none'}}>
                <FeatherIcon icon="instagram" size="30" />
            </a>
        </li>
              <li className="nav">
            <a href="mailto:boxedbitsnthings@gmail.com"
            style={{ color: '#d49bd0', textDecoration: 'none'}}>
                <FeatherIcon icon="mail" size="30" />
            </a>
        </li>
              <li className="nav">
            <a href="tel:0683686451"
            style={{ color: '#d49bd0', textDecoration: 'none'}}>
                <FeatherIcon icon="phone" size="30" />
            </a>
        </li>
    </ol> 
)

export default socials
