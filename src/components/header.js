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
            <Link to='/pictures'>
                Pictures
            </Link>
        </li>

    </ul> 
    <div align='center' className='socDist'>
    <Socials />
    </div>

    </div>
  </>
)

export default Header
