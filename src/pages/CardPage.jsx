import React, { useContext } from "react";
import { CartContext } from "../context/CardProvider";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";

const CardPage = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(CartContext);

  const { cartItems } = state;

  const subTotal = cartItems.reduce((acc, item) => acc + item.qty, 0);

  const total = cartItems.reduce(
    (acc, items) => acc + items.qty * items.caloriesPerServing,
    0
  );

  const shippingFee = 100;

  return (
    <main className="px-4 py-10 lg:px-10">

      {cartItems?.length > 0 ? (

        <section className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

          {/* CART ITEMS */}
          <div className="flex-1 shadow-xl rounded-xl">

            {cartItems.map((items) => (
              <div
                key={items.id}
                className="flex flex-col sm:flex-row justify-between items-center gap-6 p-6 border-b"
              >

                {/* PRODUCT INFO */}
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img
                    src={items.image}
                    alt={items.name}
                    className="w-20 h-20 object-cover rounded"
                  />

                  <h1 className="font-semibold">{items.name}</h1>
                </div>

                {/* PRICE + DELETE */}
                <div className="flex items-center gap-6">
                  <h1 className="text-lg">
                    Rs {items.caloriesPerServing}
                  </h1>

                  <button
                    onClick={() =>
                      dispatch({ type: "delete", payload: { id: items.id } })
                    }
                  >
                    <MdDelete size={24} className="text-red-500" />
                  </button>
                </div>

                {/* QUANTITY */}
                <div className="flex items-center gap-3">

                  <button
                    className="bg-gray-300 w-8 h-8 flex items-center justify-center rounded"
                    onClick={() =>
                      dispatch({ type: "increment", payload: { id: items.id } })
                    }
                  >
                    <FaPlus />
                  </button>

                  <p>{items.qty}</p>

                  <button
                    className="bg-gray-300 w-8 h-8 flex items-center justify-center rounded"
                    onClick={() =>
                      dispatch({ type: "decrement", payload: { id: items.id } })
                    }
                  >
                    <FaMinus />
                  </button>

                </div>
              </div>
            ))}

          </div>

          {/* ORDER SUMMARY */}
          <div className="w-full lg:w-80 shadow-xl rounded-xl p-6 space-y-6">

            <h1 className="text-xl font-bold text-center">
              Order Summary
            </h1>

            <div className="flex justify-between">
              <p>Subtotal ({subTotal})</p>
              <p>Rs {total}</p>
            </div>

            <div className="flex justify-between">
              <p>Shipping Fee</p>
              <p>Rs {shippingFee}</p>
            </div>

            {/* Voucher */}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Voucher Code"
                className="border p-2 flex-1 rounded"
              />
              <button className="bg-blue-300 px-4 rounded">
                Apply
              </button>
            </div>

            {/* Total */}
            <div className="flex justify-between font-bold">
              <p>Total</p>
              <p>Rs {total + shippingFee}</p>
            </div>

            <button
              className="w-full bg-amber-600 text-white py-3 rounded-lg"
              onClick={() => {
                navigate("/payments", { state: total + shippingFee });
              }}
            >
              PROCEED TO CHECKOUT
            </button>

          </div>

        </section>

      ) : (

        <div className="max-w-sm mx-auto text-center mt-20 space-y-4">
          <h1 className="text-xl">There are no items in cart</h1>

          <NavLink
            to="/menu"
            className="text-blue-500 underline"
          >
            Continue Shopping
          </NavLink>
        </div>

      )}

    </main>
  );
};

export default CardPage;