import { useLocation } from "react-router-dom";
import { TiMinus, TiPlus } from "react-icons/ti";
import { useContext, useState } from "react";
import { CartContext } from "../context/CardProvider";

function ProductDetails() {
  const location = useLocation();
  const state = location.state; // product data
  const [counter, setCounter] = useState(1);

  const {dispatch}=useContext(CartContext);
  
  console.log(state);

  //  SAFETY CHECK (important)
  if (!state) {
    return (
      <div className="text-center mt-20 text-xl">
        Product not found. Please go back.
      </div>
    );
  }

  const { ingredients, instructions, mealType, tags } = state;

  return (
    <main className="my-10">
      {/* Top Section */}
      <section className="w-[90vw] m-auto flex gap-5 p-5 bg-white">
        <div className="p-5">
          <img
            className="w-80"
            src={state.image}
            alt={state.name}
          />
        </div>

        <div className="space-y-6 p-4">
          <h1 className="text-4xl font-bold">{state.name}</h1>
          <h1 className="text-xl">{state.rating} (rating)</h1>

          <h1 className="text-4xl text-orange-500">
            Rs. {state.caloriesPerServing}
          </h1>

          {/* Quantity */}
          <div className="flex gap-x-3 items-center text-xl">
            <p>Quantity</p>

            <button
              onClick={() => counter > 1 && setCounter(counter - 1)}
              className="bg-gray-400 w-8 h-8 flex justify-center items-center"
            >
              <TiMinus />
            </button>

            <p className="bg-gray-100 w-8 h-8 flex justify-center items-center">
              {counter}
            </p>

            <button
              onClick={() => setCounter(counter + 1)}
              className="bg-gray-400 w-8 h-8 flex justify-center items-center"
            >
              <TiPlus />
            </button>
          </div>

          {/* Buttons */}
          <div className="space-x-3">
            <button className="bg-[#2abbe8] p-3 w-48 text-white">
              Buy Now
            </button>
            <button className="bg-amber-600 p-3 w-48 text-white" onClick={()=>{
              dispatch({type:"addToCart",payload:state})
            }}>
              Add To Cart
            </button>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="mt-5 w-[90vw] m-auto bg-white p-5">
        <div className="flex gap-x-16">
          {/* Ingredients */}
          <div>
            <h1 className="text-2xl font-bold">Ingredients</h1>
            <ol className="list-decimal p-5">
              {ingredients?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>

          {/* Instructions */}
          <div>
            <h1 className="text-2xl font-bold">Instructions</h1>
            <ol className="list-decimal p-5">
              {instructions?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        </div>

        <hr />

        <div className="flex gap-x-16 p-5">
          {/* Meta Info */}
          <section className="font-bold space-y-1">
            <p>Cook Time: {state.cookTimeMinutes} min</p>
            <p>Prep Time: {state.prepTimeMinutes} min</p>
            <p>Cuisine: {state.cuisine}</p>
            <p>Difficulty: {state.difficulty}</p>
            <p>Reviews: {state.reviewCount}</p>
            <p>Servings: {state.servings}</p>
          </section>

          {/* Meal Type & Tags */}
          <section>
            <h1 className="text-xl font-bold">Meal Type</h1>
            <ul className="p-3">
              {mealType?.map((type, index) => (
                <li key={index}>{type}</li>
              ))}
            </ul>

            <h1 className="text-xl font-bold">Tags</h1>
            <ul className="p-3">
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
