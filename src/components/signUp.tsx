"use client";
import React, { useState } from "react";

const SignUp: React.FC = () => {
  const [isWaiting, setIsWaiting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="mx-auto max-w-6xl bg-white p-4 md:p-6 md:py-16">
      <h1 className="mb-6 text-3xl font-extrabold sm:mb-6 sm:text-4xl md:text-5xl lg:mb-8 lg:text-7xl text-center">
        Sign Up for Potential
      </h1>

      <h2 className=" mb-6 flex justify-center">
        {" "}
        We’re currently in a limited beta. Please use the form below to speak to
        a member of our team
      </h2>

      <form
        onSubmit={(e) => {
          console.log(e);
        }}
        className="space-y-4 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto"
      >
        <div className="flex flex-col mb-4">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Full Name"
            className={`md:text-md block w-full rounded-3xl p-4 px-10 lg:text-lg border-gray-800 bg-blue-100 focus:border-indigo-500 focus:ring-indigo-500`}
          />
        </div>
        <div className="flex flex-col mb-4">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your-email@domain.com"
            className={`md:text-md block w-full rounded-3xl p-4 px-10 lg:text-lg border-gray-800 bg-blue-100 focus:border-indigo-500 focus:ring-indigo-500`}
          />
        </div>
        <div className="flex flex-col mb-4">
          <input
            type="text"
            id="companyName"
            name="companyName"
            placeholder="Company Name"
            className={`md:text-md block w-full rounded-3xl p-4 px-10 lg:text-lg border-gray-800 bg-blue-100 focus:border-indigo-500 focus:ring-indigo-500`}
          />
        </div>
        <div className="flex flex-col mb-4">
          <textarea
            id="note"
            name="note"
            placeholder="Additional Notes"
            className={`md:text-md block w-full rounded-3xl p-4 px-10 lg:text-lg border-gray-800 bg-blue-100 focus:border-indigo-500 focus:ring-indigo-500`}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="text-md mx-auto w-4/12 rounded-sm bg-gray-100 px-2 py-1 text-gray-700 outline outline-1 outline-gray-400 hover:bg-gray-200 md:px-3 md:py-2 md:text-lg"
          >
            {isWaiting ? "Signing up..." : "Sign Up"}
          </button>
        </div>
      </form>
      {errorMessage && (
        <div
          className="relative mt-4 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
          role="alert"
        >
          <span className="block sm:inline">{errorMessage}</span>
        </div>
      )}
    </div>
  );
};

export default SignUp;
