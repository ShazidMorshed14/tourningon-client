import React, { useState } from "react";
import "../NewCallSection/NewCallSection.scss";
import { Col, Container, Row } from "react-bootstrap";
import bikeImg from "../../images/bike.png";
import scooterImg from "../../images/scooter.png";
import zipImg from "../../images/zip.png";
import { initiateCallBooking } from "../../Api/Services/CallBooking";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const NewCallSection = () => {
  const [phone, setPhone] = useState("");

  const { mutate: callBookMutate, isLoading: isCallBookLoading } = useMutation({
    mutationFn: (value) => initiateCallBooking(value),
    onError: (error) => {
      console.log(error.response.data.message);
    },
    onSuccess: (response) => {
      console.log(response);
      setPhone("");
      toast.success("Placed successfully!");
    },
  });

  const handleCallBooking = () => {
    if (phone) {
      const value = {
        phone: "+88" + phone,
      };
      callBookMutate(value);
    } else {
      toast.warn("Please provide valid phone number");
    }
  };

  return (
    <div className="new_call_section_wrapper">
      <Row className="heading_section">
        <h1>LET US BOOK FOR YOU</h1>
      </Row>

      <div className="call_sending_section">
        {/* <div className="contact_head">CONTACT NUMBER</div> */}
        <div className="d-flex" style={{ gap: 5 }}>
          <div className="box">+88</div>
          <input
            value={phone}
            type="text"
            className="box"
            placeholder="Enter contact no."
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div
          className="box fill_green"
          style={{ fontWeight: "600" }}
          onClick={() => handleCallBooking()}
        >
          REQUEST A CALL
        </div>
      </div>

      <Row className="chat_section">
        <Row className="heading_section">
          <h1>CHAT WITH OUR TRAVEL ADVISORS</h1>
        </Row>
        <Container style={{ padding: "1rem 0em" }}>
          <div className="calling_icon_section d-flex justify-content-center align-content-center gap-5">
            <a href="tel:09611900153" target="_blank">
              {" "}
              <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/null/external-call-100-most-used-icons-flaticons-flat-flat-icons-2.png" />{" "}
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
        </Container>
      </Row>

      <Row className="image_section">
        <Col md={4} sm={4} xs={4}>
          <img src={bikeImg}></img>
        </Col>
        <Col md={4} sm={4} xs={4}>
          {" "}
          <img src={scooterImg}></img>
        </Col>
        <Col md={4} sm={4} xs={4}>
          <img src={zipImg}></img>
        </Col>
      </Row>
    </div>
  );
};

export default NewCallSection;
