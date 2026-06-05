import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import CryptoJS from "crypto-js";

function Payment() {
  const { state } = useLocation();

  const transaction_uuid = uuidv4();
  const message = `total_amount=${state},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`;
  let hash = CryptoJS.HmacSHA256(message, "8gBm/:&EnhH.1/q");
  let signature = CryptoJS.enc.Base64.stringify(hash);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* Header */}
        <div className="bg-[#0C6967] px-8 py-6 text-white text-center">
          <p className="text-sm font-medium tracking-widest uppercase opacity-80 mb-1">
            Momo Restaurant
          </p>
          <h1 className="text-4xl font-bold">Rs. {state}</h1>
          <p className="text-sm mt-2 opacity-75">Order Total (incl. shipping)</p>
        </div>

        {/* eSewa Badge */}
        <div className="flex items-center justify-center gap-2 bg-green-50 border-b py-3">
          <span className="text-green-700 font-bold text-lg">eSewa</span>
          <span className="text-gray-500 text-sm">Secure Payment</span>
        </div>

        {/* Form */}
        <form
          className="px-8 py-6 flex flex-col gap-5"
          action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
          method="POST"
        >
          <input type="hidden" name="amount" value={state} required />
          <input type="hidden" name="tax_amount" value="0" required />
          <input type="hidden" name="total_amount" value={state} required />
          <input type="hidden" name="transaction_uuid" value={transaction_uuid} required />
          <input type="hidden" name="product_code" value="EPAYTEST" required />
          <input type="hidden" name="product_service_charge" value="0" required />
          <input type="hidden" name="product_delivery_charge" value="0" required />
          <input type="hidden" name="success_url" value="http://localhost:5173/success" required />
          <input type="hidden" name="failure_url" value="http://localhost:5173/failure" required />
          <input type="hidden" name="signed_field_names" value="total_amount,transaction_uuid,product_code" required />
          <input type="hidden" name="signature" value={signature} required />

          {/* Order Summary */}
          <div className="bg-gray-50 rounded-xl p-4 space-y-2 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>Rs. {state - 100}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Rs. 100</span>
            </div>
            <div className="flex justify-between font-bold text-gray-800 border-t pt-2 mt-1">
              <span>Total</span>
              <span>Rs. {state}</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 transition-colors text-white font-bold py-4 rounded-xl text-lg cursor-pointer"
          >
            Pay with eSewa
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 pb-5">
          Your payment is secured by eSewa
        </p>
      </div>
    </div>
  );
}

export default Payment;