import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../CallSection/CallSection.scss";
import Lottie from "react-lottie";
import Travel from "../../images/bear.json";
import CallIcon from "../../images/call_icon.png";
import CallNow from "../../images/callnow.png";

const CallSection = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Travel,
  };
  return (
    <div>
      <Row className="call_section_wrapper">
        <Col md={6} sm={12} className="left">
          <div className="lottie_section">
            <Lottie options={defaultOptions} id="lottie_icon" />
          </div>
        </Col>
        <Col md={6} sm={12} className="right">
          <h4>Turning on COX'S BAZAR</h4>
          <p>
            Get exciting deals on booking a Vehicle at Cox's Bazar. More
            services coming soon .
          </p>
          <div className="call_to_book">CALL TO BOOK NOW</div>
          <h5>
            <img src={CallIcon} style={{ height: "48px", width: "48px" }} />{" "}
            09611900153
          </h5>
          <div className="product-share">
            <a href="tel:09611900153" target="_blank">
              {" "}
              <img
                src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/null/external-call-100-most-used-icons-flaticons-flat-flat-icons-2.png"
                style={{ height: "48px", width: "48px" }}
              />{" "}
            </a>
            <a href="https://www.facebook.com/tourningon/" target="_blank">
              {" "}
              <img src="https://img.icons8.com/color/48/null/facebook-new.png" />{" "}
            </a>
            <a href="https://wa.me/8801723520759" target="_blank">
              {" "}
              <img src="https://img.icons8.com/3d-fluency/48/null/whatsapp.png" />{" "}
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CallSection;
