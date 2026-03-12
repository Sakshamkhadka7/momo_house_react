import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const FilterComponent2 = () => {
  const { products, loading, isError } = useFetch();
  const [filterItems, setFilterItems] = useState([]);

  const filterProduct = (food = "American") => {
    const items = products.filter((item) => item.cuisine === food);
    setFilterItems(items);
  };

  useEffect(() => {
    if (products.length > 0) {
      filterProduct();
    }
  }, [products]);

  return (
    <section className="px-6 py-14 lg:px-20 flex flex-col items-center gap-10">

      {/* Heading */}
      <div className="text-center space-y-4 max-w-2xl">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Our <span className="text-[#D95103]">Most Popular</span> Recipes
        </h1>

        <p className="text-[#6B788E] text-sm sm:text-base">
          Browse through varieties of recipes with fresh ingredients selected
          only from the best places.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => filterProduct("American")}
          className="border rounded-full px-6 py-2 hover:bg-[#D95103] hover:text-white transition"
        >
          Buff
        </button>

        <button
          onClick={() => filterProduct("Italian")}
          className="border rounded-full px-6 py-2 hover:bg-[#D95103] hover:text-white transition"
        >
          Chicken
        </button>

        <button
          onClick={() => filterProduct("Mexican")}
          className="border rounded-full px-6 py-2 hover:bg-[#D95103] hover:text-white transition"
        >
          Veg
        </button>
      </div>

      {/* Loading & Error */}
      {loading && <div>Loading...</div>}
      {isError && <div>Something went wrong</div>}

      {/* Product Cards */}
      {!loading && !isError && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl">
          {filterItems.map((item) => (
            <div
              key={item.id}
              className="shadow-xl rounded-2xl overflow-hidden hover:scale-105 transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-52 w-full object-cover"
              />

              <div className="p-4 space-y-2">
                <div className="font-bold text-lg">{item.name}</div>
                <div className="text-gray-600">
                  Rs. {item.caloriesPerServing}
                </div>

                <NavLink
                  to="/productDetails"
                  state={item}
                  className="font-bold text-[#D95103]"
                >
                  View Details
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Explore Menu Button */}
      <div className="flex bg-[#0C6967] px-8 py-4 justify-center items-center gap-3 rounded-full text-white hover:bg-[#095c5b] transition">
        <NavLink to="/menu">Explore Our Menu</NavLink>
        <FaArrowRightLong />
      </div>

    </section>
  );
};

export default FilterComponent2;