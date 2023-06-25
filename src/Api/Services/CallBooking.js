import axios from "axios";
import { REACT_APP_SERVER_URL } from "../urls";

export const initiateCallBooking = async (values) => {
  const response = await axios.post(
    `${REACT_APP_SERVER_URL}/callbookings/add`,
    {
      phone: values.phone,
    }
  );
  return response;
};
