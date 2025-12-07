import React from "react";
import Url_form from "../components/Url_form";

const Homepage = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            URL Shortener
          </h1>
          <Url_form/>
        </div>
      </div>
    </>
  );
};

export default Homepage;
