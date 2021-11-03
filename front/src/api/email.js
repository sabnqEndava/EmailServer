import axios from "axios";

export const getEmails = async (id, token) => {
  let config = {
    headers: {
      "x-access-token": token,
    },
  };
  const response = await axios.get(`http://localhost:4000/user/${id}`, config);
  return response;
};

export const sendEmail = async (payload, id, token) => {
  const config = {
    headers: {
      "x-access-token": token,
    },
  };
  const response = await axios.post(
    `http://localhost:4000/user/${id}`,
    payload,
    config
  );
  return response;
};
