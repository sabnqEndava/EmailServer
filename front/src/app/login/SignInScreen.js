import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { signUp } from "../../api/user";

export const SignInScreen = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errorTextVisible, setErrorTextVisible] = useState(false);
  const [errorText, setErrorText] = useState("");

  const signIn = async () => {
    try {
      if (password !== passwordConfirmation) {
        setErrorText("Password and confirmation dont coincide");
        setErrorTextVisible(true);
        return;
      }
      const signUpResponse = await signUp({
        name,
        email,
        password,
        passwordConfirmation,
      });
      if (signUpResponse.status === 201) {
        history.push("/login");
      }
    } catch (error) {
      setErrorText("Sign up attempt failed");
      setErrorTextVisible(true);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handlePasswordConfirmationChange = (event) => {
    setPasswordConfirmation(event.target.value);
  };
  return (
    <div className="bg-amarilloPastel h-full flex items-center ">
      <div className="p-4 bg-azulLaTiffany rounded-xl mx-auto shadow-md w-2/5">
        <div className="flex">
          <p className="text-white mx-auto text-4xl">Create an account</p>
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
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
                onChange={handleNameChange}
              ></input>
            </div>
            <div className="mt-3">
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
                onChange={handleEmailChange}
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
                onChange={handlePasswordChange}
              ></input>
            </div>

            <div className="mt-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password2"
              >
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password2"
                type="password"
                placeholder="******************"
                onChange={handlePasswordConfirmationChange}
              ></input>
            </div>
            {errorTextVisible && (
              <div>
                <p className="mt-3 font-bold text-sm text-red-500 hover:text-red-800">
                  {errorText}
                </p>
              </div>
            )}
            <button
              className="mt-3 bg-rosaCaliente hover:bg-pink-300 text-white font-bold py-2 px-4 rounded"
              onClick={signIn}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
