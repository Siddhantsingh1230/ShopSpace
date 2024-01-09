import axios from "axios";
const options = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

//no state is need (noslice)
export const getReviewOfProductByid = async (id) => {
  const { data } = await axios.get(
    process.env.REACT_APP_SERVER_BASE_URL + "/v1/reviews/" + id
  );
  return data;
};

export const addReview = async (review) => {
  let data = await axios.post(
    process.env.REACT_APP_SERVER_BASE_URL + "/v1/reviews/add",
    review,
    options
  );

  return data.wishlist;
};
