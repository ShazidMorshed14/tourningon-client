import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid mt-5 shadow">
      <div className="text-center p-2">
        <h3 className="text-uppercase">Contact Us</h3>
      </div>

      <p className="text-center p-2" style={{ fontWeight: "600" }}>
        Please feel free to call or write to us for any kind of queries or
        requests.
      </p>
      <div>
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 col-sm-12"
              style={{ fontWeight: "600", color: "#333" }}
            >
              <p style={{ fontSize: "large", color: "green" }}>
                Contact Details :{" "}
              </p>
              <p>
                <img
                  src="https://img.icons8.com/fluency/48/null/circled-envelope.png"
                  style={{ height: "20px", width: "20px" }}
                />{" "}
                mail@tourningon.com
              </p>
              <p>
                <img
                  src="https://img.icons8.com/color/48/null/apple-phone.png"
                  style={{ height: "20px", width: "20px" }}
                />{" "}
                09611 900 153
              </p>
              <p>
                <img
                  src="https://img.icons8.com/fluency/48/null/domain.png"
                  style={{ height: "20px", width: "20px" }}
                />{" "}
                www.tourningon.com
              </p>
              <p>
                <img
                  src="https://img.icons8.com/color/48/null/facebook-new.png"
                  style={{ height: "20px", width: "20px" }}
                />{" "}
                www.facebook.com/tourningon/
              </p>
            </div>

            <div className="col-md-6 col-sm-12" style={{ fontWeight: "600" }}>
              <p style={{ fontSize: "large", color: "green" }}>
                Corporate Address :{" "}
              </p>
              <p>tourning on </p>
              <p>Level: 03, Ventura Iconia</p>
              <p>House: 37, Road: 11</p>
              <p>Banani, Dhaka - 1213</p>
              <p>BD</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="d-flex justify-content-center"
        style={{ color: "#333", width: "100%", padding: "2rem 0rem" }}
      >
        <h6>Copyright By Tourning - Created By Noman and Salekin!</h6>
      </div>
    </div>
  );
};

export default Footer;
