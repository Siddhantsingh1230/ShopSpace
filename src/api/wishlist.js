import axios from "axios";

export const getWishlist = async (id) => {
  const { data } = await axios.get(
    process.env.REACT_APP_SERVER_BASE_URL + "/v1/wishlist/" +id
  );
  return data.wishlist;
};

export const removeProductFromWishlist = async (id,productId) => {
  let data  = await axios.patch(
    process.env.REACT_APP_SERVER_BASE_URL + "/v1/wishlist/remove/" +id,
    {
      "productId" : productId
    }
  );
  
  return data.wishlist;
};

export const addProductToWishlist = async (id,productId) => {
  let data  = await axios.patch(
    process.env.REACT_APP_SERVER_BASE_URL + "/v1/wishlist/add/" +id,
    {
      "productId" : productId
    }
  );
  
  return data.wishlist;
};
