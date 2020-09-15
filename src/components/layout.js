import React from "react"
import Footer from "./footer"
import Header from './header'
import './layout.css'



const Layout = ({ children }) => {
  return (
    <>
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