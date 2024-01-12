import axios from "axios";

export const createOrder = async (order) => {
  const { data } = await axios.post(
    process.env.REACT_APP_SERVER_BASE_URL + "/v1/orders/add",
    {
      ...order,
    }
  );
  return data.result;
};

export const getOrders = async (userId) => {
  const { data } = await axios.get(
    process.env.REACT_APP_SERVER_BASE_URL + "/v1/orders/" + userId
  );
  return data.orders;
};

export const deleteOrder = async ({id,userId}) => {
  const { data } = await axios.delete(
    process.env.REACT_APP_SERVER_BASE_URL + "/v1/orders/delete/" + id
  );
  const result = await getOrders(userId)
  return result.data.orders;
};

