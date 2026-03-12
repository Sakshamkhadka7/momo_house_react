import React from "react";
import { NavLink } from "react-router-dom";

const Failure = () => {
  return (
    <div className="min-h-screen flex justify-center items-center px-4 bg-gray-50">

      <div className="max-w-sm w-full p-8 space-y-6 shadow-2xl rounded-2xl bg-white">

        <div className="flex justify-center">
          <img
            className="w-32 md:w-40"
            src="https://cdn.printme.online/wp-content/uploads/2020/04/payment_fail_icon.png"
            alt="failed"
          />
        </div>

        <h1 className="text-center text-2xl font-bold text-red-500">
          Payment Failed
        </h1>

        <div className="text-lg space-y-3">

          <div className="flex justify-between">
            <span>Status</span>
            <span className="text-red-500 font-semibold">Failed</span>
          </div>

          <div className="flex justify-between">
            <span>Total Amount</span>
            <span className="text-red-500 font-semibold">Failed</span>
          </div>

          <div className="flex justify-between">
            <span>Transaction Code</span>
            <span className="text-red-500 font-semibold">Failed</span>
          </div>

        </div>

        <div className="flex flex-col gap-3">

          <NavLink
            to="/menu"
            className="text-center bg-[#D95103] text-white py-2 rounded-xl hover:bg-[#b94200]"
          >
            Try Again
          </NavLink>

          <NavLink
            to="/"
            className="text-center border py-2 rounded-xl hover:bg-gray-100"
          >
            Go Home
          </NavLink>

        </div>

      </div>

    </div>
  );
};

export default Failure;