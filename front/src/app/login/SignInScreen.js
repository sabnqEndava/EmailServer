import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const SignInScreen = () => {
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
                class="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Name
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
              ></input>
            </div>
            <div className="mt-3">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
              ></input>
            </div>
            <div className="mt-3">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              ></input>
            </div>

            <div className="mt-3">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password2"
              >
                Confirm Password
              </label>
              <input
                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password2"
                type="password"
                placeholder="******************"
              ></input>
            </div>

            <button class="mt-3 bg-rosaCaliente hover:bg-pink-300 text-white font-bold py-2 px-4 rounded">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
