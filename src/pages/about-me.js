import React from "react"
import { Link } from "gatsby"

import LayoutNoScroll from "../components/layoutNoScroll"
import RealMe from "../images/real-me.svg";
import SEO from "../components/seo"

const SecondPage = () => (
  <LayoutNoScroll>
    <SEO title="About Me" />


    
    <h1 className="text-color-primary">About Me</h1>
    <p>🎵 Just a small-town boy, livin’ in a code-like world. I took the morning train to British Columbia Institute of Technologyyyy 🎸</p>

    <p>And that’s how my journey started into Front-end Development, well not really. I was always into UI/UX design from a very young age, and knew I wanted to have a creative impact on the world.</p>

    <p ><em><strong>"UGH!</strong> I love this design I made but now I got to hand it over to Kevin in London, UK to splice it up in photoshop and send me back the code. What? He forgot to make the button hover effect! <strong>This is LUDICROUS.</strong>"</em></p>

    <p class="mb-4">Gone were those days, I picked up HTML, CSS and JavaScript and now I’m on my way to becoming a full-stack developer, due to my passion and curiosity with all things development/computers. </p>
    <Link to="/">Go back to the <span class="text-color-primary font-bold">Homepage</span></Link>

    <div className="img-about-wrapper">
      <object className="real-me-deco" type="image/svg+xml" data={RealMe}></object>
      <img className="absolute bottom-0 right-0 m-0 w-25 about-me--img overflow-hidden" src="https://web.archive.org/web/20180827091600im_/http://devondevs.com/assets/images/itsame.png" alt=""/></div>

 

  </LayoutNoScroll>
)

export default SecondPage
