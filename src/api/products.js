import axios from "axios";

export const getAllProducts = async (page, quantum, searchKeyword) => {
  const { data } = await axios.get(
    process.env.REACT_APP_SERVER_BASE_URL +
      `/v1/products/${page}/${quantum}?s=${encodeURIComponent(searchKeyword)}`
  );
  return data;
};

// used no where for creating slices , used as a standalone API

export const getProductById = async (productId) => {
  const { data } = await axios.get(
    process.env.REACT_APP_SERVER_BASE_URL + `/v1/products/${productId}`
  );
  return data;
};
