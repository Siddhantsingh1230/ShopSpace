import axios from "axios";

export const getAllProducts = async (page,quantum) => {
  const { data } = await axios.get(
    process.env.REACT_APP_SERVER_BASE_URL + `/v1/products/${page}/${quantum}/`
  );
  return data;
};
