import React from "react";
import { FcBusinessman } from "react-icons/fc";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Carousel1() {
  return (
    <div className="container-fluid">
      <Carousel style={{color:"white"}}>
        <div className="py-5">
          <p className="text-center pt-3">WHAT PEOPLE SAY</p>
          <div className="container">
            <div className="row">
              <div className="offset-md-3 col-md-6 text-center">
                <h4>
                  Read about what our clients have to say about our services.
                </h4>
              </div>
            </div>
          </div>
          <div className="container my-5">
            <div className="row">
              <div className="offset-md-1 col-md-2">
                <div className="row d-flex justify-content-center">
                  <div className="col-md-12 ">
                    <FcBusinessman size={"5rem"} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 justify-content-end">GAJANAN K</div>
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-start">
                <p>
                  It is a great working experience with Awrange. Rahul and his
                  team made all the efforts to put up all the good work. We
                  would have never asked for a better team to collaborate with.
                  Thank you so much team Awrange for all the great work. All the
                  best for your future endeavors.
                </p>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center">WHAT PEOPLE SAY</p>
          <div className="container">
            <div className="row">
              <div className="offset-md-3 col-md-6 text-center">
                <h4>
                  Read about what our clients have to say about our services.
                </h4>
              </div>
            </div>
          </div>
          <div className="container my-5">
            <div className="row">
              <div className="offset-md-1 col-md-2">
                <div className="row d-flex justify-content-center">
                  <div className="col-md-12 ">
                    <FcBusinessman size={"5rem"} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 justify-content-end">GAJANAN K</div>
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-start">
                <p>
                  It is a great working experience with Awrange. Rahul and his
                  team made all the efforts to put up all the good work. We
                  would have never asked for a better team to collaborate with.
                  Thank you so much team Awrange for all the great work. All the
                  best for your future endeavors.
                </p>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Carousel1;
