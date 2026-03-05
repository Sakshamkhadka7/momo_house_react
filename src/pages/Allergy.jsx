import React from "react";
import chef2 from "../assets/chef2.png";
import ingredients from "../assets/ingredients.png";
import sakshamqr from "../assets/sakshamqr.jpeg";


const Allergy = () => {
  return (
    <div className="min-h-screen">
      <div className="flex justify-around ">
        <div className="mt-30">
          <h1 className="text-[#0C6967] text-5xl font-Allura">Allergy Advices</h1>

          <div className="flex flex-col mt-20 gap-4">
            <h2 className="text-[#6B788E] text-xl">AT OUR RESTAURANT</h2>

            <div>
              <h1 className="text-2xl text-[#101828] font-bold mt-2">
                We use only the freshest and highest <br />
                quality ingredients in all our dishes,
                <br />
              </h1>
              <span className="text-[#D95103] font-bold text-3xl">
                and offer transparency in our ingredient <br /> labeling .
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <img src={chef2} alt="chef image" height={300} width={300} />
        </div>
      </div>

      {/* section  */}

      <div className="flex flex-col justify-center items-center gap-4 p-27 relative mt-80">
       

        <svg
          width="521"
          height="490"
          viewBox="0 0 521 490"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M276.86 0.262188C334.922 3.11578 387.089 32.4751 427.332 74.4179C466.653 115.401 481.798 169.058 492.352 224.859C506.562 299.993 546.063 386.385 497.509 445.464C448.112 505.568 354.665 487.633 276.86 487.061C199.934 486.496 114.937 495.497 59.4336 442.242C3.30875 388.391 -6.74717 301.943 3.58678 224.859C12.6856 156.989 57.9207 102.348 110.83 58.8626C157.962 20.1259 215.921 -2.73282 276.86 0.262188Z"
            fill="#388482"
          />
        </svg>

        <img src={ingredients} alt="backgroun Image" />

        <div
          className="flex flex-col justify-center items-center gap-18 mt-36
         absolute inset-0 
        "
        >
           <h1 className="font-bold text-4xl ">
          <span className="text-[#D95103] ">Ingredients</span> Used
        </h1>
          <div className="border-[#0C6967] border-2 p-10 rounded-2xl w-120 bg-[#faf8f6]">
            <h1>For The Dough</h1>

            <div className="max-w-md p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-[#0C6967]">
                Ingredients
              </h3>
              <ul className="space-y-3">
                {/* List Item 1 */}
                <li className="flex items-center text-[#4A5568] text-base">
                  <span className="w-2 h-2 bg-[#0C6967] rounded-full mr-3"></span>
                  <span className="font-medium mr-1">120 gms</span> refined
                  flour
                </li>

                {/* List Item 2 */}
                <li className="flex items-center text-[#4A5568] text-base">
                  <span className="w-2 h-2 bg-[#0C6967] rounded-full mr-3"></span>
                  <span className="font-medium mr-1">1/4 tsp</span> baking
                  powder
                </li>

                {/* List Item 3 */}
                <li className="flex items-center text-[#4A5568] text-base">
                  <span className="w-2 h-2 bg-[#0C6967] rounded-full mr-3"></span>
                  <span className="font-medium mr-1">1/2 tsp</span> salt water
                  for kneading
                </li>
              </ul>
            </div>
          </div>

          <div className="border-[#0C6967] border-2 p-10 rounded-2xl w-120 bg-[#faf8f6]">
            <div className="max-w-md p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-[#0C6967]">
                For the chicken drilling
              </h3>
              <ul className="space-y-3">
                {/* List Item 1 */}
                <li className="flex items-center text-[#4A5568] text-base">
                  <span className="w-2 h-2 bg-[#0C6967] rounded-full mr-3"></span>
                  <span className="font-medium mr-1">1 cup</span> chicken minced
                </li>

                {/* List Item 2 */}
                <li className="flex items-center text-[#4A5568] text-base">
                  <span className="w-2 h-2 bg-[#0C6967] rounded-full mr-3"></span>
                  <span className="font-medium mr-1">1/2 </span>cup onions
                  finely chiped
                </li>

                {/* List Item 3 */}
                <li className="flex items-center text-[#4A5568] text-base">
                  <span className="w-2 h-2 bg-[#0C6967] rounded-full mr-3"></span>
                  <span className="font-medium mr-1">1/4 tsp</span> black pepper
                  powder
                </li>

                <li className="flex items-center text-[#4A5568] text-base">
                  <span className="w-2 h-2 bg-[#0C6967] rounded-full mr-3"></span>
                  <span className="font-medium mr-1">1 tbsp oil</span>
                </li>

                 <li className="flex items-center text-[#4A5568] text-base">
                  <span className="w-2 h-2 bg-[#0C6967] rounded-full mr-3"></span>
                  <span className="font-medium mr-1">1/2 tsp garlic paste</span>
                </li>

                  <li className="flex items-center text-[#4A5568] text-base">
                  <span className="w-2 h-2 bg-[#0C6967] rounded-full mr-3"></span>
                  <span className="font-medium mr-1">1/2 tsp soya sauce</span>
                </li>

                
                  <li className="flex items-center text-[#4A5568] text-base">
                  <span className="w-2 h-2 bg-[#0C6967] rounded-full mr-3"></span>
                  <span className="font-medium mr-1">salt</span>
                </li>

                
                  <li className="flex items-center text-[#4A5568] text-base">
                  <span className="w-2 h-2 bg-[#0C6967] rounded-full mr-3"></span>
                  <span className="font-medium mr-1">1/4 tsp vinegar</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-[#0C6967] border-2 p-10 rounded-2xl w-120 bg-[#faf8f6]">
            <div className="max-w-md p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-[#0C6967]">
                For the Vegeterian Filling
              </h3>
              <ul className="space-y-3">
                {/* List Item 1 */}
                <li className="flex items-center text-[#4A5568] text-base">
                  <span className="w-2 h-2 bg-[#0C6967] rounded-full mr-3"></span>
                  <span className="font-medium mr-1">1 cup</span> cabbage and carrots ,grated
                </li>

                {/* List Item 2 */}
                <li className="flex items-center text-[#4A5568] text-base">
                  <span className="w-2 h-2 bg-[#0C6967] rounded-full mr-3"></span>
                  <span className="font-medium mr-1">2 tbsp</span>onions
                  ,finely chopped
                </li>

                {/* List Item 3 */}
                <li className="flex items-center text-[#4A5568] text-base">
                  <span className="w-2 h-2 bg-[#0C6967] rounded-full mr-3"></span>
                  <span className="font-medium mr-1">1/2 tsp garlic</span>finely chopped
                </li>

                 <li className="flex items-center text-[#4A5568] text-base">
                  <span className="w-2 h-2 bg-[#0C6967] rounded-full mr-3"></span>
                  <span className="font-medium mr-1">1 tbsp oil</span>
                </li>

                 <li className="flex items-center text-[#4A5568] text-base">
                  <span className="w-2 h-2 bg-[#0C6967] rounded-full mr-3"></span>
                  <span className="font-medium mr-1">1/4 tsp vinegar</span>
                </li>
                 <li className="flex items-center text-[#4A5568] text-base">
                  <span className="w-2 h-2 bg-[#0C6967] rounded-full mr-3"></span>
                  <span className="font-medium mr-1">1/2 tsp soya sauce</span>
                </li>
         
          <li className="flex items-center text-[#4A5568] text-base">
                  <span className="w-2 h-2 bg-[#0C6967] rounded-full mr-3"></span>
                  <span className="font-medium mr-1">to taste salt</span>
                </li>

                <li className="flex items-center text-[#4A5568] text-base">
                  <span className="w-2 h-2 bg-[#0C6967] rounded-full mr-3"></span>
                  <span className="font-medium mr-1">to taste pepper</span>
                </li>

                <li className="flex items-center text-[#4A5568] text-base">
                  <span className="w-2 h-2 bg-[#0C6967] rounded-full mr-3"></span>
                  <span className="font-medium mr-1">to tbsp cornflour</span>
                </li>
                

              </ul>
            </div>
          </div>

          <div className="border-[#0C6967] border-2 p-10 rounded-2xl w-120 bg-[#faf8f6]">
            <div className="max-w-md p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-[#0C6967]">
                For chilli sauce
              </h3>
              <ul className="space-y-3">
                {/* List Item 1 */}
                <li className="flex items-center text-[#4A5568] text-base">
                  <span className="w-2 h-2 bg-[#0C6967] rounded-full mr-3"></span>
                  <span className="font-medium mr-1">25 grams</span> garlic , peeled
                </li>

                {/* List Item 2 */}
                <li className="flex items-center text-[#4A5568] text-base">
                  <span className="w-2 h-2 bg-[#0C6967] rounded-full mr-3"></span>
                  <span className="font-medium mr-1">6 gms</span> 
                  whole red chillies
                </li>

                {/* List Item 3 */}
                <li className="flex items-center text-[#4A5568] text-base">
                  <span className="w-2 h-2 bg-[#0C6967] rounded-full mr-3"></span>
                  <span className="font-medium mr-1">3 tbsp</span> vinegar
                </li>

                 <li className="flex items-center text-[#4A5568] text-base">
                  <span className="w-2 h-2 bg-[#0C6967] rounded-full mr-3"></span>
                  <span className="font-medium mr-1">1 tbsp</span> oil
                </li>

                 <li className="flex items-center text-[#4A5568] text-base">
                  <span className="w-2 h-2 bg-[#0C6967] rounded-full mr-3"></span>
                  <span className="font-medium mr-1">to taste </span> salt
                </li>

                 <li className="flex items-center text-[#4A5568] text-base">
                  <span className="w-2 h-2 bg-[#0C6967] rounded-full mr-3"></span>
                  <span className="font-medium mr-1">to taste </span> sugar
                </li>

                
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div  className="flex justify-center items-center p-21 mt-90">
        <div className="flex flex-col gap-10">
          <h1 className="text-[#101828] text-5xl text-center font-bold "><span className="text-[#D95103]">Allergy</span> Advices</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Feugiat lectus sit est
            blandit in gravida. Nisl facilisis luctus sit porttitor placerat
            purus tincidunt. Cursus nascetur a mauris odio quis sociis pretium
            nisl. In viverra diam dis montes orci congue vulputate magna
            ullamcorper. Semper tellus ipsum felis maecenas ultrices turpis amet
            euismod malesuada. Amet sed neque vitae malesuada quis sed urna.
            Feugiat orci feugiat cursus risus tincidunt. Aliquet nam iaculis
            bibendum tortor varius sit. Volutpat nunc nisl quisque elit. Ac est
            ultricies risus et sed. Donec auctor tristique quam morbi
            pellentesque et. Scelerisque dui id arcu laoreet iaculis nunc et
            nulla sed. Aliquet nullam vulputate quis ut mi placerat auctor.
            Ipsum massa suspendisse netus mollis interdum. Augue leo eget ut
            vitae maecenas ac. Metus massa nunc tristique donec dignissim aenean
            congue justo et. Parturient elit adipiscing non vitae mattis. Congue
            senectus urna cursus nisi nisl nisl tincidunt rhoncus. Congue sit
            etiam vestibulum elit aenean leo enim volutpat. Aliquet vitae
            condimentum bibendum ullamcorper vel cursus libero netus bibendum.
            Lorem id ut proin tincidunt. Nibh nunc amet odio est et. Sem dui
            nunc morbi leo quisque viverra ultrices. Mattis at tempus ultricies
            ut feugiat nunc dignissim. Urna turpis purus turpis elit risus. Sed
            elit ornare senectus dignissim diam dolor sed dictum. Faucibus
            mauris senectus odio blandit diam nunc. Urna volutpat ut potenti ut
            mus orci neque sem. Mattis amet at amet faucibus nisl morbi aenean
            ac. Justo turpis bibendum donec lacinia. Enim integer ornare nibh
            urna enim tortor arcu sit lacinia. Dapibus praesent vitae dolor
            cursus fringilla hac facilisis pellentesque. Elementum lacus varius
            et neque amet aliquam donec sed. Ultrices euismod commodo id
            vehicula commodo. Amet lorem eros nulla mauris. Sit arcu enim sit
            nunc mi sed aenean. Ornare enim vitae volutpat est dui tortor.
            Viverra habitant et consequat vitae elit aliquet iaculis in
            tristique. Quam ipsum viverra ac laoreet platea in praesent. Mattis
            molestie arcu nulla convallis interdum proin dui ut porta. Amet
            potenti praesent pulvinar scelerisque vitae habitant eget. Senectus
            hac id aliquam ipsum urna. Est ut amet nec sollicitudin nunc viverra
            nec ipsum suspendisse. Etiam risus ultricies dictum nisl. Bibendum
            ultrices elementum feugiat erat suspendisse mi fermentum magna
            suspendisse. Nisi mattis consequat nec donec eu amet nulla a. At
            blandit vulputate morbi tortor amet. Hac nec gravida tempor ac.
            Senectus nunc libero scelerisque quisque. Risus condimentum mattis
            massa integer.
          </p>
        </div>
      </div>


       <div className="p-17">
        <div className="flex flex-col justify-center items-center  gap-6">
        
        <h1 className="text-[#0C6967] font-bold text-3xl">Scan the QR Code</h1>
        <p className="text-[#252D43]">You can also check the allergy advices using your phone as well</p>
        <img className="rounded-xl" src={sakshamqr} alt="qr code" height={100} width={100} />
        <h1 className="font-bold text-2xl"><span className="text-[#D95103]  ">SCAN</span> ME !</h1>
      </div>
       </div>
    </div>
  );
};

export default Allergy;
