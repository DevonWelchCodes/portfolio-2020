/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react';

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet";
import Header from "./header"
import "./layout.css"
import "../index.scss"
import { Link } from "gatsby"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import Moon from "../images/moon.svg"
import Sun from "../images/sun.svg"
import ElipseSmallLight from "../images/Ellipse4-light.svg"
import ElipseBigLight from "../images/Ellipse9-light.svg"
import downloadResume from '../resume/resume-devon-welch.pdf'
// import DarkModePrompt from "../images/dark-mode-prompt.svg";


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [toggleBurger, setToggleBurger] = useState(false);

  const toggleHamburger = () => {
    setToggleBurger(!toggleBurger);

    
  };

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Helmet>
            <title>My Awesome Website</title>
            <link rel="stylesheet" href="https://use.typekit.net/ohz7iqq.css"></link>
     </Helmet>
     <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div className="dark-mode-wrapper flex flex-col absolute top-0 mt-8">
            <input
              type="checkbox"
              className="light-toggler hidden"
              id="dark-mode"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            <label className="dark-mode-label dark-mode-wrapper" for="dark-mode"> <img className="dark-mode-label--off" alt="light-mode-svg" src={Moon} /> <img className="dark-mode-label--on" alt="dark-mode-svg" src={Sun} /> <p> <span className="dark-mode-label--on">Light</span> <span className="dark-mode-label--off">Dark</span> Mode </p></label>
            {/* <object onClick={e => toggleTheme('dark')} className="dark-mode-prompt" type="image/svg+xml" data={DarkModePrompt}></object> */}
          </div>
        )}
      </ThemeToggler>

      <div className="social-icons">
        <a target="_blank" href="https://github.com/DevonWelchCodes/"><div className="social-icon rounded-full border-2 border-primary w-7 h-7 flex items-center justify-center transition-primary hover:bg-primary cursor-pointer mb-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="19.985" height="15.989" viewBox="0 0 19.985 15.989">
          <path id="github-alt-brands" d="M7.748,75.021c0,.87-.454,2.294-1.528,2.294s-1.528-1.424-1.528-2.294.454-2.294,1.528-2.294S7.748,74.151,7.748,75.021Zm12.237-2.1a9.024,9.024,0,0,1-.729,3.955c-1.578,3.189-5.916,3.114-9.022,3.114-3.156,0-7.753.112-9.393-3.114A8.912,8.912,0,0,1,0,72.918a7.16,7.16,0,0,1,1.728-4.73,6.518,6.518,0,0,1-.321-2.032A4.146,4.146,0,0,1,2.015,64a6.505,6.505,0,0,1,4.53,1.5,15.948,15.948,0,0,1,3.693-.416,14.363,14.363,0,0,1,3.348.383A6.435,6.435,0,0,1,18.074,64a4.107,4.107,0,0,1,.608,2.157,6.426,6.426,0,0,1-.321,2.007A7.174,7.174,0,0,1,19.985,72.918Zm-2.677,2.1a3.146,3.146,0,0,0-3.06-3.439,17.118,17.118,0,0,0-2.332.25,12.233,12.233,0,0,1-1.878.133,12.308,12.308,0,0,1-1.878-.133,16.84,16.84,0,0,0-2.332-.25,3.146,3.146,0,0,0-3.06,3.439c0,3.656,3.348,4.218,6.262,4.218h2.007C13.965,79.239,17.308,78.681,17.308,75.021Zm-3.439-2.294c-1.074,0-1.528,1.424-1.528,2.294s.454,2.294,1.528,2.294S15.4,75.891,15.4,75.021,14.943,72.727,13.869,72.727Z" transform="translate(0 -64)"/>
        </svg>
        </div></a>
        <a target="_blank" href="https://ca.linkedin.com/in/devon-welch-6b7724132"><div className="social-icon rounded-full border-2 border-primary w-7 h-7 flex items-center justify-center transition-primary hover:bg-primary cursor-pointer mb-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="17.134" height="17.133" viewBox="0 0 17.134 17.133">
          <path id="linkedin-in-brands" d="M3.835,17.143H.283V5.7H3.835Zm-1.778-13A2.067,2.067,0,1,1,4.114,2.067,2.075,2.075,0,0,1,2.057,4.144Zm15.073,13H13.585V11.575c0-1.327-.027-3.029-1.847-3.029-1.847,0-2.13,1.442-2.13,2.933v5.664H6.06V5.7H9.467v1.56h.05a3.732,3.732,0,0,1,3.361-1.847c3.6,0,4.256,2.367,4.256,5.442v6.284Z" transform="translate(0 -0.01)"/>
        </svg>
        </div></a>
        <a target="_blank" href="mailto:devondevs@gmail.com"><div className="social-icon rounded-full border-2 border-primary w-7 h-7 flex items-center justify-center transition-primary hover:bg-primary cursor-pointer">
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" className="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
        </div></a>
      </div>
        <div className="body-wrapper relative box-shadow my-8 mx-10 rounded-xlg border-solid border-8">


        <svg className={toggleBurger ? 'ham hamRotate ham7 active absolute z-50 shadow-lg' : 'ham hamRotate ham7 absolute z-50'}  viewBox="0 0 100 100" width="80" onClick={toggleHamburger}>
          <path className="line top" d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013" />
          <path className="line middle" d="m 70,50 h -40" />
          <path className="line bottom"
            d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40" />
        </svg>
        <div className="absolute ham-label cursor-pointer z-50" onClick={toggleHamburger}>
          <span className={toggleBurger ? 'font-bold text-white mr-3 relative z-20 transition-primary' : 'font-bold text-color-primary transition-primary'} >{toggleBurger ? 'CLOSE' : 'MENU'}</span>
        </div>
         


        <div className="relative h-full overflow-auto flex items-center">
          <main className="p-8 overflow-hidden container mx-auto m-auto z-30">{children}
          <div className={`hamburger-filter absolute w-full h-full top-0 left-0 z-40 transition-primary ${toggleBurger ? "opacity-75" : "opacity-0 pointer-events-none"}`}></div>
          </main>
    

        {/* <div className="body-wrapper--circle circle-1 absolute rounded-full h-screen">
        <div className="body-wrapper--circle circle-2 absolute rounded-full h-screen"></div>
        </div> */}


        </div>

        <div className="body-wrapper-fake wrapper-fake--menu relative  my-8 mx-10 rounded-xlg z-49">
          <div className={toggleBurger ? 'menu menu-active z-49 relative' : 'menu'}>
            <ul className="absolute menu--links">
              <li className="menu--link"><Link to="/">Home</Link></li>
              <li className="menu--link"><Link to="/about-me/">About</Link></li>
              <li className="menu--link"><a href={downloadResume}>Resume</a></li>
            </ul>
          </div>
          
          </div>

          <div className="body-wrapper-fake relative circle-wrapper my-8 mx-10 rounded-xlg">
            <div className="absolute w-full h-full flex items-center justify-center top-0 pointer-events-none">

              <img className="absolute w-5/6 p-24 circle" src={ElipseBigLight} alt=""/>
              <img className="absolute p-24 circle" src={ElipseSmallLight} alt=""/>

            </div>
          </div>

          <footer>
            <div className="text-center mt-3 text-xs text-color-primary">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">&hearts; by Devon Welch using Gatsby</a>
            </div>
          </footer>

        </div> 
        {/* End body wrapper */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
