import React from "react";
import { useSearchParams } from "react-router-dom";

const Success = () => {
  const [searchParams] = useSearchParams();

  let res = searchParams.get("data");
  if (res) {
    try {
      res = JSON.parse(atob(res));
    } catch (error) {
      console.error("Failed to parse response:", error);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-2xl rounded-2xl">
        <div className="flex justify-center">
          <img
            className="w-24 md:w-32"
            src="https://www.kablooe.com/wp-content/uploads/2019/08/check_mark.png"
            alt="successful"
          />
        </div>

        <div className="text-lg md:text-xl space-y-4">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold">Status:</h1>
            <span className="text-green-500 font-bold">{res?.status || "N/A"}</span>
          </div>

          <div className="flex justify-between items-center">
            <h1 className="font-semibold">Total Amount:</h1>
            <span className="text-red-500 font-bold">
              {res?.total_amount || "N/A"}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <h1 className="font-semibold">Transaction Code:</h1>
            <span className="text-red-500 font-bold">
              {res?.transaction_code || "N/A"}
            </span>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={() => window.location.replace("/menu")}
            className="bg-[#0C6967] text-white px-6 py-2 rounded-3xl text-sm md:text-base hover:bg-[#095753] transition"
          >
            Back to Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;