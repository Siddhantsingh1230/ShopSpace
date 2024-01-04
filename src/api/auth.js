import axios from "axios";
const options = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

export const signup = async (userData) => {
  const { data } = await axios.post(
    process.env.REACT_APP_SERVER_BASE_URL + "/v1/signup",
    {
      ...userData,
    },
    options
  );
  return data;
};

export const login = async (userData) => {
  const { data } = await axios.post(
    process.env.REACT_APP_SERVER_BASE_URL + "/v1/login",
    {
      ...userData,
    },
    options
  );
  return data;
};

export const logout = async () => {
  const { data } = await axios.get(
    process.env.REACT_APP_SERVER_BASE_URL + "/v1/logout",
    options
  );
  return data;
};

export const getUser = async () => {
  const { data } = await axios.get(
    process.env.REACT_APP_SERVER_BASE_URL + "/v1/me",
    options
  );
  return data;
};

export const updateUser = async (userid) => {
  const { data } = await axios.put(
    process.env.REACT_APP_SERVER_BASE_URL + "/v1/update/"+userid,
    options
  );
  return data;
};

export const deleteUser = async (userid) => {
  const { data } = await axios.delete(
    process.env.REACT_APP_SERVER_BASE_URL + "/v1/delete/"+userid,
    options
  );
  return data;
};
