import axios from "axios";

export const getOrderLocations = async () => {
  const { data } = await axios.get(
    process.env.REACT_APP_SERVER_BASE_URL + "/v1/orderLocations/"
  );
  return data.orderLocations;
};
