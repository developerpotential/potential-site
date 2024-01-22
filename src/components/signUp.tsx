"use client";
import React, { useState, FormEvent, useRef } from "react";
import { handleLeadGenForm } from "@/(lead-gen)/SendLeadGenForm";
import TextareaAutosize from "react-textarea-autosize";

const SignUp: React.FC = () => {
  const [isWaiting, setIsWaiting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [note, setNote] = useState("");
  const [roundedClass, setRoundedClass] = useState("rounded-full");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleHeightChange = (height: number) => {
    const inputHeight = inputRef.current ? inputRef.current.offsetHeight : 0;
    setRoundedClass(height > inputHeight ? "rounded-3xl" : "rounded-full");
  };

  const validateForm = () => {
    if (!name || !email) {
      setErrorMessage("Please fill in all the fields.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!validateForm()) return;
    setIsWaiting(true);
    setErrorMessage("");

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("companyName", companyName);
      formData.append("note", note);
      await handleLeadGenForm(formData);
      setIsWaiting(false);
      setIsSuccess(true);
    } catch (error) {
      setIsWaiting(false);
      setErrorMessage(
        "There was an error submitting the form. Please try again."
      );
    }
  };

  return (
    <div className="mx-auto max-w-6xl bg-white p-4 md:p-6 md:py-16">
      {!isSuccess && (
        <h1 className="mb-6 mt-3 text-4xl font-medium sm:mb-6 sm:text-4xl md:text-5xl lg:mb-8 lg:text-6xl text-center">
          Sign Up for Potential
        </h1>
      )}

      {isSuccess ? (
        <div className="text-center">
          <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl m-10">
            Thank you for your interest!
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl">
            We have received your information.
          </p>
        </div>
      ) : (
        <div>
          <h2 className="mb-6 flex text-xl justify-center">
            {
              "We're currently in a limited beta. Please use the form below to speak to a member of our team"
            }
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 max-w-md md:max-w-lg mx-auto"
          >
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name*"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-lg md:text-xl block w-full rounded-full p-4 px-10 border-gray-800 bg-white focus:border-indigo-500 focus:ring-indigo-500"
                ref={inputRef}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email*"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-lg md:text-xl block w-full rounded-full p-4 px-10 border-gray-800 bg-white focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="companyName" className="sr-only">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                placeholder="Company Name*"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="text-lg md:text-xl block w-full rounded-full p-4 px-10 border-gray-800 bg-white focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="note" className="sr-only">
                Note
              </label>
              <TextareaAutosize
                id="note"
                name="note"
                placeholder="Note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                onHeightChange={handleHeightChange}
                minRows={1}
                className={`${roundedClass} text-lg md:text-xl block resize-none w-full p-4 px-10 border-gray-800 bg-white focus:border-indigo-500 focus:ring-indigo-500`}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                disabled={isWaiting}
                className="text-lg pr-5 md:text-xl mt-2 mx-auto w-10/12 rounded-sm bg-gray-100 px-4 py-3 text-gray-700 outline outline-1 outline-gray-400 hover:bg-gray-200"
              >
                {isWaiting ? "Submitting..." : "Submit"}
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
      )}
    </div>
  );
};

export default SignUp;
