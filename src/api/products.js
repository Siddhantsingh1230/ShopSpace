import axios from "axios";
import { RECOMMENDATIONS } from "../constants/constants";
const options = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

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

// increase the viewCount of a product if displayed (not on clicked)

export const incViewCount = async (productId) => {
  const { data } = await axios.patch(
    process.env.REACT_APP_SERVER_BASE_URL +
      `/v1/products/viewcount/${productId}`,
    options
  );
  return data;
};

// used in productsSlice
export const getTopViewed = async ()=>{
  const { data } = await axios.get(
    process.env.REACT_APP_SERVER_BASE_URL + `/v1/products/topviewed`
  );
  return data;
}

// used in productsSlice
export const getTopRated = async ()=>{
  const { data } = await axios.get(
    process.env.REACT_APP_SERVER_BASE_URL + `/v1/products/toprated`
  );
  return data;
}

// used in productsSlice
export const getLatestProducts = async ()=>{
  const { data } = await axios.get(
    process.env.REACT_APP_SERVER_BASE_URL + `/v1/products/latestproducts`
  );
  return data;
}
// used in productsSlice
export const getRecommendations = async ()=>{
  //takes count as query params and returns the count X products
  const { data } = await axios.get(
    process.env.REACT_APP_SERVER_BASE_URL + `/v1/products/getrecommendations?count=12`
  );
  return data;
}