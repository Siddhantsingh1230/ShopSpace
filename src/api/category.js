import axios from "axios";

export const getAllCategories = async () => {
  const { data } = await axios.get(
    process.env.REACT_APP_SERVER_BASE_URL + "/categories"
  );
  return data.categories;
};
