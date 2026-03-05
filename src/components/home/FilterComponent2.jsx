import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const FilterComponent2 = () => {
  const { products, loading, isError } = useFetch();
  const [filterItems, setFilterItems] = useState([]);

  // Filter products by cuisine
  const filterProduct = (food = "American") => {
    const items = products.filter((item) => item.cuisine === food);
    setFilterItems(items);
  };

  // Run filter when products are loaded
  useEffect(() => {
    if (products.length > 0) {
      filterProduct();
    }
  }, [products]);

  return (
    <section className="flex flex-col justify-center items-center gap-6">
      {/* Heading */}
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">
          Our <span className="text-[#D95103]">Most Popular</span> Recipes
        </h1>
        <p className="text-[#6B788E]">
          Browse through a varieties of recipes with fresh ingredients selected
          only from the best places
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="space-x-5">
        <button
          onClick={() => filterProduct("American")}
          className="border rounded-3xl hover:bg-[#D95103] hover:text-white px-6 py-2"
        >
          Buff
        </button>
        <button
          onClick={() => filterProduct("Italian")}
          className="border rounded-3xl hover:bg-[#D95103] hover:text-white px-6 py-2"
        >
          Chicken
        </button>
        <button
          onClick={() => filterProduct("Mexican")}
          className="border rounded-3xl hover:bg-[#D95103] hover:text-white px-6 py-2"
        >
          Veg
        </button>
      </div>

      {/* Product Cards */}
      {loading && <div>Loading...</div>}
      {isError && <div>Something went wrong</div>}

      {!loading && !isError && (
        <div className="flex flex-wrap justify-center items-center gap-6">
          {filterItems.map((item) => (
            <div key={item.id} className="shadow-xl rounded-2xl">
              <img
                src={item.image}
                alt={item.name}
                className="rounded-t-2xl h-48 w-48 object-cover"
              />

              <div className="p-3 space-y-2">
                <div className="font-bold">{item.name}</div>
                <div>Rs. {item.caloriesPerServing}</div>

                {/* ✅ PASS PRODUCT DATA */}
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




      {/* Explore Menu */}
      <div className="flex bg-[#0C6967] px-8 py-4 justify-center items-center gap-2 rounded-3xl text-white">
        <NavLink to="/menu">Explore Our Menu</NavLink>
        <FaArrowRightLong />
      </div>
    </section>
  );
};

export default FilterComponent2;
