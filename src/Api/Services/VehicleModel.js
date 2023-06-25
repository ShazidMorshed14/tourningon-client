import axios from "axios";
import { REACT_APP_SERVER_URL } from "../urls";

export const fetchVehicleModels = async (context) => {
  const response = await axios.get(`${REACT_APP_SERVER_URL}/models`, {
    params: {
      _id: context.queryKey[1],
      name: context.queryKey[2],
      vehicleId: context.queryKey[3],
      vehicleModelId: context.queryKey[4],
    },
  });
  return response;
};
