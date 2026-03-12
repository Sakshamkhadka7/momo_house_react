import { useLocation } from "react-router-dom";
import { TiMinus, TiPlus } from "react-icons/ti";
import { useContext, useState } from "react";
import { CartContext } from "../context/CardProvider";

function ProductDetails() {
  const location = useLocation();
  const state = location.state;
  const [counter, setCounter] = useState(1);

  const { dispatch } = useContext(CartContext);

  if (!state) {
    return (
      <div className="text-center mt-20 text-xl">
        Product not found. Please go back.
      </div>
    );
  }

  const { ingredients, instructions, mealType, tags } = state;

  return (
    <main className="my-10 px-4 lg:px-10">

      {/* TOP SECTION */}
      <section className="max-w-6xl mx-auto bg-white shadow-md rounded-xl p-6 flex flex-col lg:flex-row gap-10">

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            className="w-full max-w-sm rounded-xl object-cover"
            src={state.image}
            alt={state.name}
          />
        </div>

        {/* PRODUCT INFO */}
        <div className="space-y-6 flex-1">

          <h1 className="text-2xl md:text-4xl font-bold">{state.name}</h1>

          <p className="text-lg">{state.rating} ⭐ rating</p>

          <h2 className="text-3xl text-orange-500 font-semibold">
            Rs. {state.caloriesPerServing}
          </h2>

          {/* QUANTITY */}
          <div className="flex items-center gap-3 text-lg">
            <p>Quantity</p>

            <button
              onClick={() => counter > 1 && setCounter(counter - 1)}
              className="bg-gray-300 w-8 h-8 flex items-center justify-center rounded"
            >
              <TiMinus />
            </button>

            <p className="bg-gray-100 w-8 h-8 flex items-center justify-center rounded">
              {counter}
            </p>

            <button
              onClick={() => setCounter(counter + 1)}
              className="bg-gray-300 w-8 h-8 flex items-center justify-center rounded"
            >
              <TiPlus />
            </button>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">

            <button className="bg-[#2abbe8] px-6 py-3 text-white rounded-lg w-full sm:w-auto">
              Buy Now
            </button>

            <button
              className="bg-amber-600 px-6 py-3 text-white rounded-lg w-full sm:w-auto"
              onClick={() => {
                dispatch({ type: "addToCart", payload: state });
              }}
            >
              Add To Cart
            </button>

          </div>
        </div>
      </section>

      {/* DETAILS SECTION */}
      <section className="max-w-6xl mx-auto bg-white shadow-md rounded-xl p-6 mt-8 space-y-10">

        {/* INGREDIENTS + INSTRUCTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div>
            <h1 className="text-2xl font-bold mb-3">Ingredients</h1>
            <ol className="list-decimal pl-5 space-y-1">
              {ingredients?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-3">Instructions</h1>
            <ol className="list-decimal pl-5 space-y-1">
              {instructions?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>

        </div>

        <hr />

        {/* META INFO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <section className="font-medium space-y-1">
            <p>Cook Time: {state.cookTimeMinutes} min</p>
            <p>Prep Time: {state.prepTimeMinutes} min</p>
            <p>Cuisine: {state.cuisine}</p>
            <p>Difficulty: {state.difficulty}</p>
            <p>Reviews: {state.reviewCount}</p>
            <p>Servings: {state.servings}</p>
          </section>

          <section>

            <h1 className="text-xl font-bold">Meal Type</h1>
            <ul className="pl-4 list-disc mb-4">
              {mealType?.map((type, index) => (
                <li key={index}>{type}</li>
              ))}
            </ul>

            <h1 className="text-xl font-bold">Tags</h1>
            <ul className="pl-4 list-disc">
              {tags?.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>

          </section>

        </div>

      </section>
    </main>
  );
}

export default ProductDetails;