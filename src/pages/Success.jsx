import React from "react";
import { useSearchParams } from "react-router-dom";

const Success = () => {
  const [SearchParams] = useSearchParams();
  // console.log(SearchParams.get("data"));

  let res = SearchParams.get("data");
  console.log(res);
  res = atob(res);
  res = JSON.parse(res);
  console.log(res);

  return (
    <div>
      <div className="w-80 p-8 space-y-6 shadow-2xl m-auto rounded-2xl mt-10">
        <div>
          <img
            className="w-full"
            src="https://www.kablooe.com/wp-content/uploads/2019/08/check_mark.png"
            alt="succesfull"
          />
        </div>

        <div className="text-xl">
          <div   className="flex justify-between items-center gap-2" >
            <h1>Status:</h1>
          <h1 className="text-green-400">{res?.status}</h1>
          </div>
         <div   className="flex justify-between items-center gap-2" >
             <h1>Total Amount:</h1>
          <h1 className="text-red-500">{res?.total_amount}</h1>
         </div>
          <div   className="flex justify-between items-center gap-2" >
            <h1>Transaction Code</h1>
          <h1 className="text-red-500">{res?.transaction_code}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
