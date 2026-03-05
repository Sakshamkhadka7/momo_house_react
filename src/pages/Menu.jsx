import React from "react";
import useFetch from "../hooks/useFetch";
import { NavLink } from "react-router-dom";
const Menu = () => {
  const { products, isError, loading } = useFetch();

  if (!isError && loading) {
    return <div>Loading..........</div>;
  }

  return (
    <div>
      {products?.length > 0 ? (
        <div className="flex flex-wrap justify-center items-center gap-6 p-10">
          {products.map((items) => {
            return <div key={items.id} className="flex flex-wrap justify-center items-center items-center gap-6">
    
               <div key={items.id} className="shadow-xl">
                      <div >
                        <img src={items.image} className="rounded-t-2xl h-48 w-48"/>
                      </div>

                      <div className="p-3">
                        <div>{items.name}</div>
                        <div>{items.caloriesPerServing}</div>
                        <NavLink to="/productDetails" state={items} className="font-bold text-xl">View Details</NavLink>
                      </div>
                    </div>

            </div>;
          })}
        </div>
      ) : (
        <div>Products Not Founds</div>
      )}
    </div>
  );
};

export default Menu;
