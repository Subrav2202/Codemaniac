import React from "react";
import { ImProfile } from "react-icons/im";
import { GiOnTarget } from "react-icons/gi";
import { IoGlobeOutline, IoShareSocialOutline } from "react-icons/io5";

function Card2() {
  return (
    <div>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-md-3 d-flex align-items-center" style={{flexDirection:"column"}}>
            <IoGlobeOutline size={"3rem"} color="#de2809"/>
            <h6>Search Engine Optimization</h6>
            <p>
              We facilitate you with a higher ranking in top search engine
              marketing, along with faster traffic and business growth.
            </p>
          </div>
          <div className="col-md-3 d-flex align-items-center" style={{flexDirection:"column"}}>
            <IoShareSocialOutline size={"3rem"} color="#de2809"/>
            <h6>Social Media Marketing</h6>
            <p>
              We develop and implement strategies that are specific and
              result-driven to promote your business on social media.
            </p>
          </div>
          <div className="col-md-3 d-flex align-items-center" style={{flexDirection:"column"}}>
            <GiOnTarget size={"3rem"} color="#de2809"/>
            <h6>Pay Per Click</h6>
            <p>
              Our PPC campaigns are focused on getting you more quality traffic
              and increased leads that help you reap maximum benefits.
            </p>
          </div>
          <div className="col-md-3 d-flex align-items-center" style={{flexDirection:"column"}}>
            <ImProfile size={"3rem"} color="#de2809"/>
            <h6>Social Profile Management</h6>
            <p>
              We help you build a professionally-managed social profile through
              which you can make connections and collaborations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2;
