import React, { useContext } from "react";
import { CartContext } from "../context/CardProvider";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
const CardPage = () => {
   
  const navigate=useNavigate();

  const { state,dispatch } = useContext(CartContext);

  const { cartItems } = state;

 const subTotal=cartItems.reduce((acc,item)=>{
   
  return acc+item.qty;

 },0);




 const total=cartItems.reduce((acc,items)=>{
  return acc+items.qty * items.caloriesPerServing;
 },0)

 const shippingFee=100;

  return (
    <main>
      {cartItems?.length > 0 ? (
        <section className="flex justify-center gap-x-5 p-10 ">
          <div className="cart_items w-[60vw] shadow-2xl">
            {cartItems.map((items) => {
              return (
                <div key={items.id} className=" flex justify-between items-center p-6">
                  <div className="1 flex gap-x-5">
                    <div>
                      <img src={items.image} width={100} />
                    </div>
                    <div className="text-xl w-[80px] font-bold">
                      <h1>{items.name}</h1>
                    </div>
                  </div>

                  <div className="2 flex flex-col gap-y-3">
                    <div>
                      <h1 className="text-xl">{items.caloriesPerServing}</h1>
                    </div>

                    <button onClick={()=> dispatch({type:"delete",payload:{id:items.id}})}>
                      <MdDelete size={30} />
                    </button>
                  </div>

                  <div className="3 flex items-center justify-center gap-x-4">
                    <button className="bg-gray-400 hover:bg-gray-100 w-8 p-1 flex justify-center items-center h-8"
                    onClick={()=> dispatch({type:"increment",payload:{id:items.id}})}
                    >
                      <FaPlus />
                    </button>
                    <div>
                      {" "}
                      <p>{items.qty}</p>
                    </div>
                    <button className="bg-gray-400 hover:bg-gray-100 w-8 p-1 flex justify-center items-center h-8"
                     onClick={()=> dispatch({type:"decrement",payload:{id:items.id}})}
                    >
                      <FaMinus />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-[30vw] shadow-2xl p-6 space-y-5">
            <h1 className="text-2xl font-bold text-center">Order Summary</h1>

            <div className="flex justify-between items-center">
              <div>
                <h1>Subtotal ({subTotal}) </h1>
              </div>

              <div>
                <h1>Rs {total} </h1>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h1>Shippping Fee</h1>
              </div>

              <div>
                <h1>Rs {shippingFee} </h1>
              </div>
            </div>

            <div className="flex justify-center items-center p-7 gap-2">
              <input
                type="text"
                placeholder="Enter Voucher Code"
                className="outline-none"
              />
              <button className="bg-blue-300 p-2 rounded-xl px-9">Apply</button>
            </div>

            <div className="flex flex-col gap-y-5">
              <div className="flex justify-between items-center">
                <div>
                  <h1> Total </h1>
                </div>
                <div>
                  {" "}
                  <h1>Rs ({total +shippingFee})</h1>
                </div>
              </div>

              <buttton className="p-2 px-9 rounded-xl bg-amber-600 text-white text-center" onClick={()=>{
                 navigate("/payments",{state:total +shippingFee});
              }}>
                PROCEED TO CHECKOUT
              </buttton>
            </div>
          </div>
        </section>
      ) : (
        <div className=" w-96 p-4 flex flex-col justify-center items-center gap-y-5 m-auto mt-16">
          <h1 className="text-xl">There are no items in cart</h1>
          <NavLink to="/menu">Continue Shopping</NavLink>
        </div>
      )}
    </main>
  );
};

export default CardPage;
