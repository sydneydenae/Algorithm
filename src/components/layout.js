import * as React from 'react'
import { Link } from 'gatsby'
import { container, logo, heading, navbar, navLinks, navLinkItem, navLinkText, intro, footer } from './layout.module.css'
import logoImg from '../images/logo.png'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav className={navbar}>
      <img className={logo} src={logoImg} alt="Logo"/>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
          <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
      <footer className={footer}>
        This is the Footer!
      </footer>
    </div>
  )
}

export default Layout
//This was between main
//<h1 className={heading}>{pageTitle}</h1>