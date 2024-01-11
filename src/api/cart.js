import axios from "axios";

export const addTocart = async (userId, productId, quantity) => {
  const { data } = await axios.patch(
    process.env.REACT_APP_SERVER_BASE_URL + "/v1/cart/add",
    {
      userId,
      productId,
      quantity,
    }
  );
  return data.cart;
};
