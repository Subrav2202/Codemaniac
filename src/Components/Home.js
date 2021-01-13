import React from "react";
import Navbar from "./Navbar";
import Card1 from "./Homecomponents/Cards/Card1";
import Card2 from "./Homecomponents/Cards/Card2";
import meet from "../Assets/meet.jpg";
import { useHistory } from "react-router-dom";
import img1 from "../Assets/img4.jpg";
import img2 from "../Assets/img5.jpg";
import img3 from "../Assets/img6.jpg";
import Corousel1 from "./Homecomponents/Carousel1"
import {FiFacebook,FiTwitter,FiInstagram} from 'react-icons/fi';
import {FaGooglePlusG,FaLinkedinIn,FaPinterestP,FaWhatsapp,FaTelegramPlane} from 'react-icons/fa';
import { AiOutlineSkype } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
function Home() {
  const history = useHistory();
  const ClickHandler = () => {
    history.push(`/services`);
  };

  return (
    <div>
      <div className="bgimage">
        <Navbar />
        <div className="container-fluid">
          <div className="row align-items-center" style={{ height: "80vh" }}>
            <div className="col-md-7 d-flex justify-content-end">
              <h1>Developing your success online.</h1>
            </div>
            <div className="col-md-5 d-flex justify-content-center">
              <h1>LOGO</h1>
            </div>
          </div>
        </div>
      </div>
      <Card1 />
      <Card2 />

      <div className="container-fluid">
        <div className="row ">
          <div className="col-md-6" style={{ margin: 0, padding: 0 }}>
            <img src={meet} alt="img" className="img-fluid" />
          </div>
          <div className="col-md-6 bg-dark">
            <div className="row align-items-center" style={{ height: "100%" }}>
              <div className="col-md-2"></div>
              <div className="col-md-10" style={{ color: "white" }}>
                <h3>About US</h3>
                <h6 className="py-2">
                  Since our foundation our goal has been to use digital
                  technology to create experiences.
                </h6>
                <p
                  className="pb-2"
                  style={{ fontamily: "jura", fontSize: "14px" }}
                >
                  We’re a modern marketing & branding agency, helping brands &
                  personalities connect with their customers/audiences online.
                  We undertake projects for brand identity, web design,
                  application development, content generation, social strategy,
                  paid media strategy, influencer marketing & more. We blend
                  technical expertise and creative thinking to drive meaningful
                  engagement with your audience.
                </p>
                <button
                  type="button"
                  className="btn btn-outline-light"
                  onClick={ClickHandler}
                >
                  EXPLORE OUR SERVICES
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid my-5">
        <p className="text-center">DIGITAL MARKETING BLOG & NEWS</p>
        <h2 className="text-center">Latest Blog & News</h2>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-4">
              <div>
                <img
                  src={img1}
                  alt="img"
                  className="img-fluid w-100"
                  style={{ height: "50vh" }}
                />
                <div className="badge bg-info text-dark p-2">LATEST NEWS</div>
              </div>
              <h6 className="py-3">CORONA VIRUS IMPACT ON MARKET</h6>
              <button type="button" className="btn btn-outline-secondary">
                know More!!
              </button>
            </div>
            <div className="col-md-4">
              <div>
                <img
                  src={img2}
                  alt="img"
                  className="img-fluid w-100"
                  style={{ height: "50vh" }}
                />
                <div className="badge bg-info text-dark p-2">
                  DiGITAL MARKETTING
                </div>
              </div>

              <h6 className="py-3">
                What Are The Digital Marketing Trends In 2020?
              </h6>
              <button type="button" className="btn btn-outline-secondary">
                know More!!
              </button>
            </div>
            <div className="col-md-4">
              <div>
                <img
                  src={img3}
                  alt="img"
                  className="img-fluid w-100"
                  style={{ height: "50vh" }}
                />
                <div className="badge bg-info text-dark p-2">
                  SEARCH ENGINE OPTIMIZATION
                </div>
              </div>

              <h6 className="py-3">Winning SEO Trends For 2020</h6>
              <button type="button" class="btn btn-outline-secondary">
                know More!!
              </button>
            </div>
          </div>
        </div>
      </div>

     
     <Corousel1/> 
     
     
     <footer style={{backgroundColor:"#2486D6"}}>
     <div className='container py-5'>
      <div className='row'>
        <div className="col-md-4" style={{borderRight:"1px ridge"}}>
            <h3>CODEMANIAC</h3>
            <p>We undertake projects for brand identity, web design, application development, content generation, social strategy, paid media strategy, influencer marketing & more.</p>
            <div><i className="me-2"><FiFacebook/></i><FiTwitter/><i className="mx-2"><FaGooglePlusG/></i><FiInstagram/><i className="mx-2"><FaLinkedinIn/></i><FaPinterestP/></div>
          </div>
          <div className="col-md-4">
            <div className="row">
                <div className="offset-md-1 col-md-11">
                <h6>LETS DISCUSS</h6>
                <div><i><AiOutlineSkype size={"30px"} color={"white"}/></i><i><FaWhatsapp size={"30px"} color={"green"}/></i><i><FaTelegramPlane size={"30px"}/></i><i><RiMessengerLine size={"30px"}/></i></div>
                </div>
            </div>
              
          </div>
      </div>
      </div>
     </footer>  

     
    </div>
  );
}

export default Home;


