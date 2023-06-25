import React from "react";

import NavBar from "../components/NavBar";
import NewNavbar from "../components/NewNavbar/NewNavbar";
const Contact = () => {
  return (
    <div>
      {/* <NavBar></NavBar> */}
      <div>
        <NewNavbar />
      </div>
      <div className="text-center" style={{ marginTop: "7rem" }}>
        <h3 className="text-uppercase">Contact Us</h3>
      </div>

      <p className="text-center">
        Please feel free to call or write to us for any kind of queries or
        requests.
      </p>
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <p>Email: mail@tourningon.com</p>
              <p>Contact: 09611 900 153</p>
              <p>Website www.tourningon.com</p>
              <p>facebook: www.facebook.com/tourningon/</p>
            </div>
            <div className="col"></div>
            <div className="col">
              <p>Corporate Address: </p>
              <p>tourning on </p>
              <p>Level: 03, Ventura Iconia</p>
              <p>House: 37, Road: 11</p>
              <p>Banani, Dhaka - 1213</p>
              <p>BD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
