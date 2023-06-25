import axios from "axios";
import { REACT_APP_SERVER_URL } from "../urls";

export const fetchVehicleList = async () => {
  const response = await axios.get(`${REACT_APP_SERVER_URL}/vehicles`);
  return response;
};
export const fetchPackageList = async (context) => {
  const response = await axios.get(`${REACT_APP_SERVER_URL}/packages`, {
    params: {
      _id: context.queryKey[1],
      name: context.queryKey[2],
      isActive: context.queryKey[3],
      vehicleId: context.queryKey[4],
      vehicleModelId: context.queryKey[5],
    },
  });
  return response;
};

export const initiateBooking = async (values) => {
  const response = await axios.post(
    `${REACT_APP_SERVER_URL}/bookings/add`,
    values
  );
  return response;
};
