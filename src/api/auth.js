import axios from "axios";

export const signup = async (userData) => {
  const { data } = await axios.post(
    process.env.REACT_APP_SERVER_BASE_URL + "/v1/signup",
    {
      ...userData,
    }
  );
  return data;
};

export const login = async (userData) => {
  const { data } = await axios.post(
    process.env.REACT_APP_SERVER_BASE_URL + "/v1/login",
    {
      ...userData,
    }
  );
  return data;
};

export const logout = async () => {
  const { data } = await axios.post(
    process.env.REACT_APP_SERVER_BASE_URL + "/v1/logout"
  );
  return data;
};
