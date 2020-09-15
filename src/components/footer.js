import React from "react"

const Footer = () => (
    <div className="footer">
<footer>
        <div style = {{
                padding: '2%',
                textAlign: 'center'
         }}>
            All rights reserved, BoxedBits © {new Date().getFullYear()}, Built with
             <a href="https://www.gatsbyjs.org" style={{
            textDecoration: 'none',
            color: '#999999'
        }}> Gatsby </a>
            </div>
</footer>
    </div>
)
export default Footer