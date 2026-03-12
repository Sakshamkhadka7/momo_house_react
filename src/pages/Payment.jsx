import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import CryptoJS from "crypto-js";

function Payment() {
  const { state } = useLocation();

  const transaction_uuid = uuidv4();

  const message = `total_amount=${state},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`;

  const hash = CryptoJS.HmacSHA256(message, "8gBm/:&EnhH.1/q");
  const signature = CryptoJS.enc.Base64.stringify(hash);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 px-4">

      <form
        action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
        method="POST"
        className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 flex flex-col gap-6"
      >

        {/* Hidden Inputs */}
        <input type="hidden" name="amount" value={state} />
        <input type="hidden" name="tax_amount" value="0" />
        <input type="hidden" name="total_amount" value={state} />
        <input type="hidden" name="transaction_uuid" value={transaction_uuid} />
        <input type="hidden" name="product_code" value="EPAYTEST" />
        <input type="hidden" name="product_service_charge" value="0" />
        <input type="hidden" name="product_delivery_charge" value="0" />

        <input
          type="hidden"
          name="success_url"
          value="http://localhost:5173/success"
        />

        <input
          type="hidden"
          name="failure_url"
          value="http://localhost:5173/failure"
        />

        <input
          type="hidden"
          name="signed_field_names"
          value="total_amount,transaction_uuid,product_code"
        />

        <input type="hidden" name="signature" value={signature} />

        {/* UI */}
        <h1 className="text-3xl font-bold text-center">
          Payment Amount
        </h1>

        <div className="text-center text-4xl font-bold text-orange-500">
          Rs. {state}
        </div>

        <button
          type="submit"
          className="bg-[#60BB46] hover:bg-[#4fa93a] text-white text-xl py-3 rounded-xl transition"
        >
          Pay with eSewa
        </button>

      </form>

    </div>
  );
}

export default Payment;