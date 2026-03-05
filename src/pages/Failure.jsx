import React from 'react'

const Failure = () => {
  return (
    <div>
          <div className="w-80 p-8 space-y-6 shadow-2xl m-auto rounded-2xl mt-10">
        <div>
          <img
            className="w-full"
            src="https://cdn.printme.online/wp-content/uploads/2020/04/payment_fail_icon.png"
            alt="failed"
          />
        </div>

        <div className="text-xl">
          <div   className="flex justify-between items-center gap-2" >
            <h1>Status:</h1>
          <h1 className="text-red-500">Fail</h1>
          </div>
         <div   className="flex justify-between items-center gap-2" >
             <h1>Total Amount:</h1>
          <h1 className="text-red-500">Failed</h1>
         </div>
          <div   className="flex justify-between items-center gap-2" >
            <h1>Transaction Code</h1>
          <h1 className="text-red-500">Failed</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Failure