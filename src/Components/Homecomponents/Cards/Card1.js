import React from "react";
import { FcSpeaker } from "react-icons/fc";
import { GiLaptop } from "react-icons/gi";
import { AiFillWechat, AiOutlineMobile } from "react-icons/ai";
import meeting from "../../../Assets/1.jpg";

function Card1() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-6"
            style={{ margin: 0, padding: 0 }}
          >
            <img src={meeting} alt="img" className="img-fluid" />
          </div>
          <div className="col-md-6" style={{ backgroundColor: "#dfebe6" }}>
            <div className="row">
              <h2 className="p-3">
                We deliver knockout digital products
              </h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <FcSpeaker size={"3rem"} />
                <h6>Create a Strong Brand Identity</h6>
                <p>
                  "Going beyond just a memorable logo, we help in establishing
                  the identity of your company as a distinguished name."
                </p>
              </div>
              <div className="col-md-6">
                <GiLaptop size={"3rem"} />
                <h6>Website Design & Development</h6>
                <p>
                  "We design websites that are innovative, easy-to-navigate and
                  thoughtful, ensuring they deliver required results and help
                  attract customers."
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <AiFillWechat size={"3rem"} />
                <h6>Application Development"</h6>
                <p>
                  "With focus on our clients’ success, we build custom app
                  solutions that strengthen their business model."
                </p>
              </div>
              <div className="col-md-6">
                <AiOutlineMobile size={"3rem"} />
                <h6>Digital Marketing</h6>
                <p>
                  "Every channel of our digital marketing plan strategically
                  works towards the growth of your business."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
