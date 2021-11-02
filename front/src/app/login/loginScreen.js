import React, { useContext, useState } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { logInApi } from "../../api/user";

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorTextVisible, setErrorTextVisible] = useState(false);

  const logIn = async () => {
    try {
      const signInResponse = await logInApi({
        email,
        password,
      });
      dispatch({
        type: "login",
        payload: {
          name: signInResponse.data.name,
          email: signInResponse.data.email,
          accessToken: signInResponse.data.accessToken,
          id: signInResponse.data.id,
        },
      });
      history.replace("/");
    } catch (error) {
      setErrorTextVisible(true);
    }
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div className="bg-amarilloPastel h-full flex items-center ">
      <div className="p-4 bg-azulLaTiffany rounded-xl mx-auto shadow-md w-2/5">
        <div className="flex">
          <p className="text-white mx-auto text-4xl">Log In</p>
        </div>
        <div className="grid grid-cols-2">
          <div className="items-center flex">
            <FontAwesomeIcon
              icon="envelope-open-text"
              className="h-24 self-center mx-auto"
              size="10x"
              color="#FFF"
            />
          </div>
          <div>
            <div className="mt-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
                onChange={handleChangeEmail}
              ></input>
            </div>
            <div className="mt-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                onChange={handleChangePassword}
              ></input>
            </div>
            <div>
              <Link
                className="mt-3 font-bold text-sm text-blue-500 hover:text-blue-800"
                to="/signin"
              >
                No tenés account?
              </Link>
            </div>
            {errorTextVisible && (
              <div>
                <p className="mt-3 font-bold text-sm text-red-500 hover:text-red-800">
                  Log in attempt failed
                </p>
              </div>
            )}
            <button
              className="bg-rosaCaliente hover:bg-pink-300 text-white font-bold py-2 w-full rounded"
              onClick={logIn}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
