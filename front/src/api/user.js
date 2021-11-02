import axios from "axios";

export const signIn = async (payload) => {
  const response = await axios.post("http://localhost:3000/user/auth", payload);
  return response;
};

export const signUp = async (payload) => {
  const response = await axios.post("http://localhost:3000/user/", payload);
  return response;
};
