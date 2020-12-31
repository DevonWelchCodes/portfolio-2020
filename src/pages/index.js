import React, { useState, Component, useRef } from 'react';
import { Link } from "gatsby"
import Modal from 'react-modal';
import Layout from "../components/layout";
import SEO from "../components/seo";
import VideoIcon from "../images/video-icon.svg";
import QuestionIcon from "../images/question.svg";
import GotoLinkIcon from "../images/goto-link.svg";
import Project1 from "../videos/the-gaming-stadium.mp4"
import Project2 from "../videos/optigo.mp4"
import Project3 from "../videos/cam.mp4"
import Project4 from "../images/hayco.jpg";
import Project5 from "../images/mink.jpg";
import DevonWaveLight from "../images/devon-light.svg";
import DevonWaveDark from "../images/devon-dark.svg";



const IndexPage = () => {

  const [isVisible, setIsVisible] = useState(false);

  const [projectHovered, isHovered] = useState(false);

  const projectsRef = useRef(null);
  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };

  // The Gaming Stadium (Modal 1)
  const [modalIsOpen1,setIsOpen1] = React.useState(false);
  function openModal1() {
    setIsOpen1(true);
  }
  function closeModal1(){
    setIsOpen1(false);
  }

  // Optigo (Modal 2)
  const [modalIsOpen2,setIsOpen2] = React.useState(false);
  function openModal2() {
    setIsOpen2(true);
  }
  function closeModal2(){
    setIsOpen2(false);
  }

  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      zIndex                : '9999999999 !important',
      maxWidth              : '40rem'
    }
  };

  var blacks = projectsRef.current ? projectsRef.current.getElementsByClassName('project'): [];
  const projectHover = () => {
    isHovered(true);
    for(var i =0; i< blacks.length; i++){
        blacks[i].onmouseenter = function(){ 
            const video = this.querySelectorAll('.project--video')[0];
            video.play();
            this.classList.add("project-hovered");
        }
    } 

  };

  const projectMouseOut = () => {
    isHovered(false);
    for(var i =0; i< blacks.length; i++){
      blacks[i].onmouseleave = function(){ 
          const video = this.querySelectorAll('.project--video')[0];
          video.pause();
          this.classList.remove("project-hovered");
      }
  } 
  }

  function handleClick(e) {
    e.preventDefault()
  }
  




  return (
  <Layout>
    <SEO title="Home" />


    <div className="flex flex-wrap overflow-hidden">

      <div className="w-full overflow-hidden lg:w-1/2 xl:w-2/3">
        <h1 className="text-7xl text-stroke inline">Hi, I'm <span className="text-color-primary text-shadow">Devon</span> </h1>
        <h2 className="text-color-primary mt-2">I’m a Front-end Developer & Graphic Designer</h2>
        <p className="flex items-center"><div className="h-8 bg-primary inline-block w-small border-right border-primary mr-2"></div> I craft beautiful UI/UX experiences for the web, and do it well.</p>
      </div>

      <div className="w-full overflow-hidden lg:w-1/2 xl:w-1/3">
        <object className="waving-illu--light waving-illu" type="image/svg+xml" data={DevonWaveLight}> 
        </object>
        <object className="waving-illu--dark waving-illu" type="image/svg+xml" data={DevonWaveDark}> 
        </object>
        
      </div>

    </div>


    {/* <button type="button" className="block p-3 bg-primary text-white" onClick={toggleVisible}>
        Hide/Show MailWidget
    </button>
    <div className={isVisible ? 'block' : 'hidden'}>
      <h1>Hello, I'm your mailwidget</h1>
    </div> */}

    <section ref={projectsRef} className="projects text-center bg-grayLighter rounded-xlg relative" id="projects">

    <h5 className="text-center text-lg status absolute bg-grayLighter lg:bg-transparent">Here’s what my 2018-2020 looked like…</h5>

      <div className="flex flex-wrap -mx-2 p-4">

          <div className="my-2 px-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/3">
            {/* Start Project */}
            <div onMouseEnter={projectHover} onMouseLeave={projectMouseOut} id="project" className={"project rounded-xlg bg-red-500 px-6 py-5 relative overflow-hidden h-full"}>
              <div className="relative z-40 h-full flex flex-col justify-between">
              <div className="camera-icon flex h-auto  items-baseline justify-end">
                <img className="w-6 block m-0" src={VideoIcon} alt=""/>
              </div>
              <h3 className="text-white m-0 text-left text-3xl">The Gaming <br></br>Stadium</h3>
              <div className="flex items-end justify-between">
                <div className="bg-black rounded-xlg py-2 px-3 text-white">
                  <p className="m-0 text-xxs font-bold">UI/UX & Development</p>
                </div>
                <div className="project--buttons flex items-end">
                  <button title="View Details" id="project--button_details" onClick={openModal1} className="btn rounded-full bg-primary w-8 h-8 flex items-center justify-center mr-1">
                    <img className="m-0 w-2 relative z-10" src={QuestionIcon} alt=""/>
                  </button>
                  <a href="https://www.thegamingstadium.com/" title="View Site" id="project--button_link" className="btn rounded-full bg-primary w-12 h-12 flex items-center justify-center">
                    <img className="m-0 w-6 relative z-10" src={GotoLinkIcon} alt=""/>
                  </a>
                </div>
              </div>
              </div>

              <video className="project--video absolute" width="320" height="240" muted loop>
              <source src={Project1} type="video/mp4"/>
              Your browser does not support the video tag.
              </video>

              <div className="filter absolute top-0 left-0 w-full h-full gradient-1 opacity-90"></div>
              <div className="filter-2 absolute top-0 left-0 w-full h-full gradient-2 opacity-100"></div>

            </div>
            {/* End Project  */}
          </div>


          <div className="my-2 px-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/3">
            {/* Start Project */}
            <div onMouseEnter={projectHover} onMouseLeave={projectMouseOut} className={"project rounded-xlg bg-red-500 px-6 py-5 relative overflow-hidden h-full"}>
              <div className="relative z-40 h-full flex flex-col justify-between">
              <div className="camera-icon flex h-auto  items-baseline justify-end">
                <img className="w-6 block m-0" src={VideoIcon} alt=""/>
              </div>
              <h3 className="text-white m-0 text-left text-3xl">Optigo</h3>
              <div className="flex items-end justify-between">
                <div className="bg-black rounded-xlg py-2 px-3 text-white">
                  <p className="m-0 text-xxs font-bold">Development</p>
                </div>
                <div className="project--buttons flex items-end">
                  <button title="View Details" id="project--button_details" className="btn rounded-full bg-primary w-8 h-8 flex items-center justify-center mr-1">
                    <img className="m-0 w-2 relative z-10" src={QuestionIcon} alt=""/>
                  </button>
                  <a href="https://optigo.net/" title="View Site" id="project--button_link" className="btn rounded-full bg-primary w-12 h-12 flex items-center justify-center">
                    <img className="m-0 w-6 relative z-10" src={GotoLinkIcon} alt=""/>
                  </a>
                </div>
              </div>
              </div>

              <video className="project--video absolute" width="320" height="240" muted loop>
              <source src={Project2} type="video/mp4"/>
              Your browser does not support the video tag.
              </video>

              <div className="filter absolute top-0 left-0 w-full h-full gradient-3 opacity-90"></div>
              <div className="filter-2 absolute top-0 left-0 w-full h-full gradient-2 opacity-100"></div>

            </div>
            {/* End Project  */}
          </div>

          <div className="my-2 px-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/3">
            {/* Start Project */}
            <div onMouseEnter={projectHover} onMouseLeave={projectMouseOut} id="project" className={"project rounded-xlg bg-red-500 px-6 py-5 relative overflow-hidden h-full"}>
              <div className="relative z-40 h-full flex flex-col justify-between">
              <div className="camera-icon flex h-auto  items-baseline justify-end">
                <img className="w-6 block m-0" src={VideoIcon} alt=""/>
              </div>
              <h3 className="text-white m-0 text-left text-3xl">Mover.net</h3>
              <div className="flex items-end justify-between">
                <div className="bg-black rounded-xlg py-2 px-3 text-white">
                  <p className="m-0 text-xxs font-bold">Development</p>
                </div>
                <div className="project--buttons flex items-end">
                  <button title="View Details" id="project--button_details" className="btn rounded-full bg-primary w-8 h-8 flex items-center justify-center mr-1">
                    <img className="m-0 w-2 relative z-10" src={QuestionIcon} alt=""/>
                  </button>
                  <a href="http://mover.net/" title="View Site" id="project--button_link" className="btn rounded-full bg-primary w-12 h-12 flex items-center justify-center">
                    <img className="m-0 w-6 relative z-10" src={GotoLinkIcon} alt=""/>
                  </a>
                </div>
              </div>
              </div>

              <video className="project--video absolute" width="320" height="240" muted loop>
              <source src={Project3} type="video/mp4"/>
              Your browser does not support the video tag.
              </video>

              <div className="filter absolute top-0 left-0 w-full h-full gradient-4 opacity-90"></div>
              <div className="filter-2 absolute top-0 left-0 w-full h-full gradient-2 opacity-100"></div>

            </div>
            {/* End Project  */}
          </div>

          <div className="my-2 px-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/3">
            {/* Start Project */}
            <div id="project--img" className={"project--img rounded-xlg bg-red-500 px-6 py-5 relative overflow-hidden h-full"}>
              <div className="relative z-40 h-full flex flex-col justify-between">
              <div className="camera-icon flex h-auto  items-baseline justify-end">
                <img className="w-6 block m-0" src={VideoIcon} alt=""/>
              </div>
              <h3 className="text-white m-0 text-left text-3xl">Hayco Equip</h3>
              <div className="flex items-end justify-between">
                <div className="bg-black rounded-xlg py-2 px-3 text-white">
                  <p className="m-0 text-xxs font-bold">Development</p>
                </div>
                <div className="project--buttons flex items-end">
                  <button title="View Details" id="project--button_details" className="btn rounded-full bg-primary w-8 h-8 flex items-center justify-center mr-1">
                    <img className="m-0 w-2 relative z-10" src={QuestionIcon} alt=""/>
                  </button>
                  <a href="https://www.haycoequip.com/" title="View Site" id="project--button_link" className="btn rounded-full bg-primary w-12 h-12 flex items-center justify-center">
                    <img className="m-0 w-6 relative z-10" src={GotoLinkIcon} alt=""/>
                  </a>
                </div>
              </div>
              </div>

              <img className="rounded-xlg" src={Project4} alt=""/>

              <div className="filter absolute top-0 left-0 w-full h-full gradient-5 opacity-90"></div>
              <div className="filter-2 absolute top-0 left-0 w-full h-full gradient-2 opacity-100"></div>

            </div>
            {/* End Project  */}
          </div>

          <div className="my-2 px-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/3">
            {/* Start Project */}
            <div id="project--img" className={"project--img rounded-xlg bg-red-500 px-6 py-5 relative overflow-hidden h-full"}>
              <div className="relative z-40 h-full flex flex-col justify-between">
              <div className="camera-icon flex h-auto  items-baseline justify-end">
                <img className="w-6 block m-0" src={VideoIcon} alt=""/>
              </div>
              <h3 className="text-white m-0 text-left text-3xl">Mink Chocolates</h3>
              <div className="flex items-end justify-between">
                <div className="bg-black rounded-xlg py-2 px-3 text-white">
                  <p className="m-0 text-xxs font-bold">Development</p>
                </div>
                <div className="project--buttons flex items-end">
                  <button title="View Details" id="project--button_details" className="btn rounded-full bg-primary w-8 h-8 flex items-center justify-center mr-1">
                    <img className="m-0 w-2 relative z-10" src={QuestionIcon} alt=""/>
                  </button>
                  <a href="https://www.minkchocolates.com/" title="View Site" id="project--button_link" className="btn rounded-full bg-primary w-12 h-12 flex items-center justify-center">
                    <img className="m-0 w-6 relative z-10" src={GotoLinkIcon} alt=""/>
                  </a>
                </div>
              </div>
              </div>

              <img className="rounded-xlg" src={Project5} alt=""/>

              <div className="filter absolute top-0 left-0 w-full h-full gradient-6 opacity-90"></div>
              <div className="filter-2 absolute top-0 left-0 w-full h-full gradient-2 opacity-100"></div>

            </div>
            {/* End Project  */}
          </div>
          


      </div>

    </section>    

        {/* The Gaming Stadium (Modal 1) */}
        <Modal
          isOpen={modalIsOpen1}
          onRequestClose={closeModal1}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2>The Gaming Stadium</h2>
          <p>The Gaming Stadium is Canada's first E-Sports Gaming Stadium. Being an avid gamer myself, I was honored to design & develop the website from scratch. Picking the color schemes, code-base, and everything else to make this website happen. I worked directly with the Vice President of Operations to achieve a desirable product for Gamers in B.C.</p>
          <h4 className="mb-2">Tools Used:</h4>
          <div className="mb-4 p-4 rounded-lrger bg-trans">
            <div className="bg-red-500 mr-1 rounded-xlg py-2 px-3 inline-block text-white"><p className="m-0 text-xxs font-bold">HTML5</p></div>
            <div className="bg-blue-500 mr-1 rounded-xlg py-2 px-3 inline-block text-white"><p className="m-0 text-xxs font-bold">CSS3</p></div>
            <div className="bg-orange-500 mr-1 rounded-xlg py-2 px-3 inline-block text-white"><p className="m-0 text-xxs font-bold">JavaScript</p></div>
            <div className="bg-blue-800 mr-1 rounded-xlg py-2 px-3 inline-block text-white"><p className="m-0 text-xxs font-bold">WordPress</p></div>
            <div className="bg-pink-600 mr-1 rounded-xlg py-2 px-3 inline-block text-white"><p className="m-0 text-xxs font-bold">Adobe XD</p></div>
          </div>

          <button onClick={closeModal1}>close</button>
        </Modal>


        {/* Optigo (Modal 2) */}
        <Modal
          isOpen={modalIsOpen2}
          onRequestClose={closeModal2}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2>The Gaming Stadium</h2>
          <p>The Gaming Stadium is Canada's first E-Sports Gaming Stadium. Being an avid gamer myself, I was honored to design & develop the website from scratch. Picking the color schemes, code-base, and everything else to make this website happen. I worked directly with the Vice President of Operations to achieve a desirable product for Gamers in B.C.</p>
          <h4 className="mb-2">Tools Used:</h4>
          <div className="mb-4 p-4 rounded-lrger bg-trans">
            <div className="bg-red-500 mr-1 rounded-xlg py-2 px-3 inline-block text-white"><p className="m-0 text-xxs font-bold">HTML5</p></div>
            <div className="bg-blue-500 mr-1 rounded-xlg py-2 px-3 inline-block text-white"><p className="m-0 text-xxs font-bold">CSS3</p></div>
            <div className="bg-orange-500 mr-1 rounded-xlg py-2 px-3 inline-block text-white"><p className="m-0 text-xxs font-bold">JavaScript</p></div>
            <div className="bg-blue-800 mr-1 rounded-xlg py-2 px-3 inline-block text-white"><p className="m-0 text-xxs font-bold">WordPress</p></div>
            <div className="bg-pink-600 mr-1 rounded-xlg py-2 px-3 inline-block text-white"><p className="m-0 text-xxs font-bold">Adobe XD</p></div>
          </div>
        </Modal>






        


    <Link to="/about-me/"><div className="btn-block text-center mt-2">Check out my <span className="text-color-primary font-bold">About Me</span> page</div></Link>
  </Layout>

  );
  
  };

export default IndexPage
