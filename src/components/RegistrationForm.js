import React from "react";
import { useState } from "react";
import URL from "../helpers/url";
import "./RegistrationForm.scss";
import Sea from "../images/backgroundFrom.jpg";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import {
  fetchPackageList,
  fetchVehicleList,
  initiateBooking,
} from "../Api/Services/Booking";
import { fetchVehicleModels } from "../Api/Services/VehicleModel";
import { isArrayAndHasContent } from "../helpers/const";
import Swal from "sweetalert2";

const RegistrationForm = () => {
  const [timePicker] = useState([
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
  ]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [vehicleId, setVehicleId] = useState(null);
  const [packageId, setPackageId] = useState(null);
  const [terms, setTerms] = useState(false);
  const [vehicleModelId, setVehicleModelId] = useState(null);
  const [type, setType] = useState(true);

  const {
    data: vehicleList,
    isLoading: vehicleListLoading,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["vehicles"],
    queryFn: fetchVehicleList,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    retry: false,
    onError: (error) => {
      //toast.error(error.message);
    },
  });

  console.log("vehicle list", vehicleList?.data?.data);

  const {
    data: vehicleModelList,
    isLoading: vehicleModelListLoading,
    error: vehicleModelListError,
    isFetching: vehicleModelFetching,
  } = useQuery({
    queryKey: ["fetch-vehicle-models", null, null, vehicleId, null],
    enabled: vehicleId ? true : false,
    queryFn: fetchVehicleModels,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    retry: false,
    onError: (error) => {
      //handleErrorResponse(error);
    },
  });

  const {
    data: packageList,
    isLoading: packageListLoading,
    error: packageListError,
    isFetching: packageListIsFetching,
  } = useQuery({
    queryKey: ["packages", null, null, type, vehicleId, vehicleModelId],
    queryFn: fetchPackageList,
    enabled: vehicleId ? true : false,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    retry: false,
    onError: (error) => {
      //toast.error(error.message);
    },
  });

  console.log("package list", packageList?.data?.data);

  const {
    mutate: bookingMutate,
    isLoading: isBookingLoading,
    isMutating,
  } = useMutation({
    mutationFn: (value) => initiateBooking(value),
    onError: (error) => {
      console.log(error.response.data.message);
    },
    onSuccess: (response) => {
      console.log(response);
      setName("");
      setEmail("");
      setContact("");
      setDate("");
      setTime("");
      setPackageId("select");
      setVehicleId("select");
      setTerms(false);
      //toast.success("Booking Placed successfully!");
      Swal.fire("Congratulations!", "Your Booking is Confirmed!", "success");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && contact && date && vehicleId && packageId) {
      if (
        vehicleId !== "select" &&
        packageId !== "select" &&
        vehicleId !== "Select" &&
        packageId !== "Select"
      ) {
        const request = {
          name: name,
          email: email,
          contact: contact,
          date: date,
          time: time,
          vehicleId: vehicleId,
          packageId: packageId,
        };
        console.log("sending request", request);
        bookingMutate(request);
      } else {
        toast.warning("Please Select valid package and vehicle");
      }
    } else {
      toast.error("Please fill required fields");
    }
  };

  return (
    <div
      className="form_container container-fluid  mx-auto"
      style={{ backgroundImage: `url(${Sea})` }}
    >
      <div className="heading_section d-flex justify-content-center align-items-center">
        <h1 style={{ color: "white" }}>Book A Bike/ Scooty/ Chander-Gari</h1>
      </div>
      <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
        <div className="shadow form_wrapper">
          <div className="row g-3 m-2 align-items-center">
            <div className="col-3">
              <label htmlFor="name" className="col-form-label">
                Name:
              </label>
            </div>
            <div className="col-9">
              <input
                type="text"
                id="name"
                className="form-control"
                aria-labelledby="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="row g-3 m-2 align-items-center">
            <div className="col-3">
              <label htmlFor="email" className="col-form-label">
                Email:
              </label>
            </div>
            <div className="col-9">
              <input
                type="email"
                id="email"
                className="form-control"
                aria-labelledby="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="row g-3 m-2 align-items-center">
            <div className="col-3">
              <label htmlFor="contact" className="col-form-label">
                Contact:
              </label>
            </div>
            <div className="col-9">
              <input
                type="text"
                id="contact"
                className="form-control"
                aria-labelledby="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
          </div>

          <div className="row g-3 m-2 align-items-center">
            <div className="col-3">
              <label htmlFor="date" className="col-form-label">
                Date:
              </label>
            </div>
            <div className="col-9">
              <input
                type="date"
                id="date"
                className="form-control"
                aria-labelledby="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>

          <div className="row g-3 m-2 align-items-center">
            <div className="col-3">
              <label htmlFor="time" className="col-form-label">
                Time:
              </label>
            </div>
            <div className="col-9">
              <select
                className="form-select"
                aria-label="Package"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option defaultValue={"select"}>Select</option>
                {timePicker.map((time, index) => {
                  return (
                    <option key={index} value={time}>
                      {time}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="row g-3 m-2 align-items-center">
            <div className="col-3">
              <label htmlFor="service-type" className="col-form-label">
                Vehicle Type:
              </label>
            </div>

            <div className="col-9">
              <select
                className="form-select"
                aria-label="service type"
                value={vehicleId}
                onChange={(e) => setVehicleId(e.target.value)}
              >
                <option defaultValue={"select"}>Select</option>

                {vehicleList?.data?.data.map((vehicle, index) => {
                  return (
                    <option key={index} value={vehicle._id}>
                      {vehicle.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="row g-3 m-2 align-items-center">
            <div className="col-3">
              <label htmlFor="service-type" className="col-form-label">
                Vehicle Model:
              </label>
            </div>

            <div className="col-9">
              <select
                className="form-select"
                aria-label="service type"
                value={vehicleModelId}
                disabled={
                  isArrayAndHasContent(vehicleModelList?.data?.data)
                    ? false
                    : true
                }
                onChange={(e) => setVehicleModelId(e.target.value)}
              >
                <option defaultValue={"select"}>Select</option>

                {vehicleModelList &&
                  vehicleModelList?.data?.data.map((model, index) => {
                    return (
                      <option key={index} value={model._id}>
                        {model.name}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>

          <div className="row g-3 m-2 align-items-center">
            <div className="col-3">
              <label htmlFor="package" className="col-form-label">
                Package:
              </label>
            </div>
            <div className="col-9">
              <select
                className="form-select"
                aria-label="service type"
                value={packageId}
                onChange={(e) => setPackageId(e.target.value)}
                disabled={
                  isArrayAndHasContent(packageList?.data?.data) ? false : true
                }
              >
                <option defaultValue={"select"}>Select</option>

                {packageList?.data?.data.map((p, index) => {
                  return (
                    <option
                      key={index}
                      value={p._id}
                      style={{ fontWeight: 600 }}
                    >
                      {p.name} - {p.price} BDT
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="row g-3 m-2 align-items-center">
            <div className="col-3">
              <label htmlFor="pickup point" className="col-form-label">
                Pickup Point:
              </label>
            </div>
            <div className="col-9">
              <input
                type="text"
                id="pickup-point"
                className="form-control"
                aria-labelledby="pickup-point"
              />
            </div>
          </div>
          <div className="row g-3 m-2 align-items-center">
            <label>
              <input
                type="checkbox"
                name="terms"
                checked={terms}
                onChange={() => setTerms(!terms)}
                required
                style={{ marginRight: "5px", cursor: "pointer" }}
              />
              I have read and agree to the Terms and Conditions.
            </label>
          </div>
          <div className="row g-3 m-2 align-items-center justify-content-center">
            <div className="submit_btn_section">
              {isMutating ? (
                <button
                  id="submit"
                  className="form-control  text-white"
                  aria-labelledby="submit"
                  style={{
                    fontWeight: "600",
                    backgroundColor: "#e1e1e1",
                    outline: "none !important",
                    color: "black",
                  }}
                >
                  Please Wait..
                </button>
              ) : (
                <button
                  type="submit"
                  id="submit"
                  className="form-control  text-white"
                  aria-labelledby="submit"
                  style={{
                    fontWeight: "600",
                    backgroundColor: "#23d244",
                    outline: "none !important",
                  }}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
