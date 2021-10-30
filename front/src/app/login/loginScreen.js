import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const logIn = () => {
    dispatch({
      type: "login",
      payload: {
        name: "Zulma",
      },
    });
    history.replace("/");
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
