import React from "react";
import "./SocialMediaSection.scss";

const SocialMediaSection = () => {
  return (
    <div className="sm_wrapper">
      {/* <div className="heading_section container d-flex justify-content-evenly align-items-center">
        <h3>For Quick Booking please call 019611900153</h3>
      </div> */}
      <div className="image_grid_section d-flex justify-content-evenly align-items-center">
        <img
          src="logo1.jpg"
          className=""
          alt="logo"
          style={{ width: "1920px", height: "`160px", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default SocialMediaSection;
