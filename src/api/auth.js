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
