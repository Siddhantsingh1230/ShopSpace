import axios from "axios";
//used in dod slice
export const getDealOfTheDay = async() => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_SERVER_BASE_URL}/v1/dod/getcurrentdeal`
  );
  return data;
};
