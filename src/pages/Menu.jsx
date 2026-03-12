import React from "react";
import useFetch from "../hooks/useFetch";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const { products, isError, loading } = useFetch();

  if (loading && !isError) {
    return <div className="text-center mt-10 text-xl">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center mt-10 text-red-500">Something went wrong</div>;
  }

  return (
    <div className="px-6 py-12">

      {products?.length > 0 ? (

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {products.map((items) => (
            <div
              key={items.id}
              className="shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition duration-300 bg-white"
            >
              <img
                src={items.image}
                alt={items.name}
                className="h-52 w-full object-cover"
              />

              <div className="p-4 space-y-2">
                <h2 className="font-semibold text-lg">{items.name}</h2>

                <p className="text-gray-600">
                  Rs. {items.caloriesPerServing}
                </p>

                <NavLink
                  to="/productDetails"
                  state={items}
                  className="text-[#D95103] font-semibold hover:underline"
                >
                  View Details
                </NavLink>
              </div>
            </div>
          ))}

        </div>

      ) : (
        <div className="text-center text-xl mt-10">Products Not Found</div>
      )}

    </div>
  );
};

export default Menu;