import React from "react"
import { Link } from "gatsby"
import Socials from './socials'
import Btnt from './button'
import "./layout.css"

const Header = () => (
    
    <>
    <Btnt />
    <div className='Menu-thing'>
<ul style={{
        listStyle: 'none',
    }}>
        <li className='lis-item'>
            <Link to='/' >
                Home
            </Link>
        </li>

        <li className='lis-item'>
            <Link to='/about'>
                About
            </Link>
        </li>
        <li className='lis-item'>
            <Link to='/contact'>
                Contact us
            </Link>
        </li>
        <li className='lis-item'>
            <Link to='/Spring2020'>
                Spring Range <br></br> 2020
            </Link>
        </li>
        <li className='lis-item'>
            <Link to='/Archives'>
                Archives
            </Link>
        </li>

    </ul> 
    <div align='center' className='socDist'>
    <h1 class="brand-name">
            BoxedBits
    </h1>
    <Socials />
    </div>

    </div>
  </>
)

export default Header
