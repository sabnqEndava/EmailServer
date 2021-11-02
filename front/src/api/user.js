import axios from "axios";

export const logInApi = async (payload) => {
  const response = await axios.post("http://localhost:4000/user/auth", payload);
  return response;
};

export const signUp = async (payload) => {
  const response = await axios.post("http://localhost:4000/user/", payload);
  return response;
};
