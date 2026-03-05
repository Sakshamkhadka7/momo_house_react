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
    <div>
      <form

      className="w-96  bg-white rounded-2xl  font-serif m-auto mt-14 p-9 flex flex-col gap-y-6"
        action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
        method="POST"
      >
        <input type="hidden" id="amount" name="amount" value={state} required />

        <input
          type="hidden"
          id="tax_amount"
          name="tax_amount"
          value="0"
          required
        />

        <input
          type="hidden"
          id="total_amount"
          name="total_amount"
          value={state}
          required
        />
        <input
          type="hidden"
          id="transaction_uuid"
          name="transaction_uuid"
          value={transaction_uuid}
          required
        />
        <input
          type="hidden"
          id="product_code"
          name="product_code"
          value="EPAYTEST"
          required
        />
        <input
          type="hidden"
          id="product_service_charge"
          name="product_service_charge"
          value="0"
          required
        />
        <input
          type="hidden"
          id="product_delivery_charge"
          name="product_delivery_charge"
          value="0"
          required
        />
        <input
          type="hidden"
          id="success_url"
          name="success_url"
          value="http://localhost:5173/success"
          required
        />
        <input
          type="hidden"
          id="failure_url"
          name="failure_url"
          value="http://localhost:5173/failure"
          required
        />

        <input
          type="hidden"
          id="signed_field_names"
          name="signed_field_names"
          value="total_amount,transaction_uuid,product_code"
          required
        />
        <input
          type="hidden"
          id="signature"
          name="signature"
          value={signature}
          required
        />
        <h1 className="text-4xl text-center font-bold "  >Rs.{state}</h1>

        <input  className="bg-orange-500  text-2xl  p-4 text-white"  value="Pay  Using Esewa" type="submit" />
      </form>
    </div>
  );
}

export default Payment;