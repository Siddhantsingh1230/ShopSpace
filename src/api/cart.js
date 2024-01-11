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

export const getCart = async (userId) => {
  const { data } = await axios.get(
    process.env.REACT_APP_SERVER_BASE_URL + "/v1/cart/" + userId
  );
  return data.cart;
};

export const removeCart = async ({id, userId}) => {
  const {data} = await axios.delete(
    process.env.REACT_APP_SERVER_BASE_URL + "/v1/cart/delete/" + id,
    {
      data: { userId: userId },
    }
  );
  return data.cart;
};

export const updateCart = async ({ userId, productId, quantity }) => {
  const { data } = await axios.patch(
    process.env.REACT_APP_SERVER_BASE_URL + "/v1/cart/update",
    {
      userId: userId,
      productId: productId,
      quantity: quantity,
    }
  );
  return data.cart;
};
