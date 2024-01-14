import axios from "axios";

// Used in slice
export const getPosters = async() => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_SERVER_BASE_URL}/v1/offer/getposters`
  );
  return data;
};
