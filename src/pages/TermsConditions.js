import React from "react";

import NavBar from "../components/NavBar";
import NewNavbar from "../components/NewNavbar/NewNavbar";
import Footer from "../components/Footer";
const TermsConditions = () => {
  return (
    <div>
      <div>
        {/* <NavBar> </NavBar> */}
        <NewNavbar />
      </div>

      <div className="post text-center" style={{ marginTop: "7rem" }}>
        <h1>Terms and Conditions</h1>
      </div>
      <div>
        <h5 className="my-margin30">Rental Requirements </h5>
        <p className="   my-margin40 ">
          The renter must be at least 18 years old and hold a valid driver's
          license and NID card to avail motorbike/scooter service.
        </p>
        <h5 className="my-margin30">Reservation: </h5>
        <p className=" font-weight-normal text-justify my-margin40 ">
          All reservations are subject to availability. A valid payment must be
          provided at the time of booking to secure the reservation.
        </p>
        <h5 className="my-margin30">Payment: </h5>
        <p className=" font-weight-normal text-justify my-margin40 ">
          Booking will be confirmed after the full payment. Payment can be kept
          due and to be paid while taking this service. But, in that case
          bookings are not guaranteed but can avail the service based on the
          availability. We accept all credit/debit cards, MFS, banks and cash. A
          security deposit might be taken at the time of rental and will be
          returned at the end of the rental period, provided that the terms and
          conditions of the rental agreement have been met.
        </p>
        <h5 className="my-margin30">Rental Extensions: </h5>
        <p className=" font-weight-normal text-justify my-margin40 ">
          If the renter wishes to extend the rental period, they must contact
          tourningon through support number and as soon as possible to make
          arrangements. Failure to return the vehicle on the agreed-upon date
          and time will result in additional charges.
        </p>
        <h5 className="my-margin30">Fuel Policy: </h5>
        <p className=" font-weight-normal text-justify  my-margin30 ">
          The vehicle must be returned with the same level of fuel as when it
          was rented. If the vehicle is returned with less fuel, a refueling
          charge will apply. Company does not provide fuel.
        </p>
        <h5 className="my-margin30">Use of Vehicle: </h5>
        <p className=" font-weight-normal text-justify my-margin40 ">
          The vehicle may only be driven by the renter. The vehicle must be used
          in a responsible manner and in accordance with all applicable laws and
          regulations. The renter is responsible for any fines, penalties, or
          damages resulting from the use of the vehicle during the rental period
          according to all the rules of the agreed service provider of tourning
          on.
        </p>
        <h5 className="my-margin30">Damage and Loss: </h5>
        <p className=" font-weight-normal text-justify my-margin40 ">
          The renter is responsible for any damage or loss to the vehicle,
          including theft, vandalism, or accidents. The renter is responsible
          for the full value of the vehicle in the event of total loss or theft.
        </p>
        <h5 className="my-margin30">Insurance: </h5>
        <p className=" font-weight-normal text-justify my-margin40 ">
          The renter must have insurance that covers the rented vehicle. If the
          renter does not have insurance, they may purchase insurance from the
          rental location at an additional cost.
        </p>
        <h5 className="my-margin30">Maintenance:</h5>
        <p className=" font-weight-normal text-justify my-margin40 ">
          The renter must maintain the vehicle in the same condition as when it
          was rented. The renter is responsible for any damage resulting from
          failure to maintain the vehicle, including oil changes and tire
          rotations.
        </p>
        <h5 className="my-margin30">Prohibited Uses:</h5>
        <p className=" font-weight-normal text-justify my-margin40 ">
          The renter may not use the vehicle for any illegal purposes, including
          but not limited to transporting illegal substances, committing a
          crime, or driving under the influence of drugs or alcohol. In that
          case, the company will not bear any obligations. The user will be
          penalized according to the existing rules and law of the Govt.
        </p>
        <h5 className="my-margin30">Termination of Rental: </h5>
        <p className=" font-weight-normal text-justify my-margin40 ">
          The rental agreement may be terminated by the rental location at any
          time if the renter violates any of the terms and conditions of the
          rental agreement. No refund will be paid for that.
        </p>
        <h5 className="my-margin30">Governing Law: </h5>
        <p className=" font-weight-normal text-justify my-margin40 ">
          This rental agreement shall be governed by and construed in accordance
          with the laws of the jurisdictionof the government of Bangladesh.
        </p>
        <h5 className="my-margin30">Entire Agreement: </h5>
        <p className=" font-weight-normal text-justify my-margin40 ">
          This rental agreement contains the entire understanding between the
          parties and supersedes all prior agreements and understandings,
          whether oral or written.
        </p>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default TermsConditions;
