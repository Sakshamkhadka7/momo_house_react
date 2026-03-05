import React from "react";
import chef from "../assets/chef.png";
import kitchen from "../assets/kitchen.jpg";
import serve from "../assets/serve.png";
import girls from "../assets/girls.png";
import madam from "../assets/madam.png";
import background from "../assets/background.jpg";
import head from "../assets/head.png";
import assistant from "../assets/assistant.png";
import assistant2 from "../assets/assistant2.png";



import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


import { SiGoogledisplayandvideo360 } from "react-icons/si";

const About = () => {
  return (
    <div className="min-h-screen">
      <div className="flex justify-around">
        <div className="mt-30">
          <h1 className="text-[#0C6967] text-5xl font-Allura">About Us</h1>

          <div className="flex flex-col mt-20 gap-4">
            <h2 className="text-[#6B788E] text-xl">We Pride OURSELF ON</h2>

            <div>
              <span className="text-[#D95103] font-bold text-3xl">
                Our Authentic momo recipes
              </span>
              <h1 className="text-2xl text-[#101828] font-bold mt-2">
                passed down through <br /> generations
              </h1>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <img src={chef} alt="chef image" height={300} width={300} />
        </div>
      </div>

      <div className="relative w-full h-auto overflow-hidden rounded-2xl">
        <img
          src={kitchen}
          alt="kitchen"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30">
          <div className="absolute inset-0 flex flex-col justify-center px-12 text-white ">
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-2 ">
                Process Behind Making{" "}
              </h1>
              <p className="text-lg opacity-90">
                See how we makes a momos that you like from only the best
                ingredients{" "}
              </p>
            </div>

            <div
              className="flex flex-row items-center justify-center bg-[#0C6967] text-[#FFFFFF]
    rounded-[100px] pt-[1px] pr-[32px] pl-[24px] gap-[16px] w-fit min-w-[231px] h-[64px]
    "
            >
              <SiGoogledisplayandvideo360 size={24} />
              <span className="text-base font-medium whitespace-nowrap ">
                Watch the video
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-10 p-20 gap-40">
        <div>
          <h1 className="text-2xl font-bold ">
            Our Momos are{" "}
            <span className="text-[#D95103]">
              made <br /> with love
            </span>
          </h1>
          <p className="mt-3 text-[#6B788E] text-base max-w-2xl leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab fugit
            fuga amet repellendus non blanditiis ea esse nemo? Pariatur,
            suscipit inventore nostrum beatae quasi ducimus explicabo quo
            assumenda ex.
          </p>
        </div>

        <div>
          <img src={serve} alt="serving image" height={552} width={548} />
        </div>
      </div>

      <div className="flex justify-between mt-10 p-20 gap-40">
        <div>
          <img src={girls} alt="girls image" height={552} width={548} />
        </div>

        <div>
          <h1 className="text-2xl font-bold ">
            Taste the difference with{" "}
            <span className="text-[#D95103]">
              <br /> our handcrafted momos
            </span>
          </h1>
          <p className="mt-3 text-[#6B788E] text-base max-w-2xl leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab fugit
            fuga amet repellendus non blanditiis ea esse nemo? Pariatur,
            suscipit inventore nostrum beatae quasi ducimus explicabo quo
            assumenda ex.
          </p>
        </div>
      </div>

      <div className="flex justify-between mt-10 p-20 gap-40">
        <div>
          <h1 className="text-2xl font-bold ">
            Our Momos are the <br /> perfect{" "}
            <span className="text-[#D95103]">
              Blend of traditions <br />
            </span>
            and <span className="text-[#D95103]">innovation </span>
          </h1>
          <p className="mt-3 text-[#6B788E] text-base max-w-2xl leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab fugit
            fuga amet repellendus non blanditiis ea esse nemo? Pariatur,
            suscipit inventore nostrum beatae quasi ducimus explicabo quo
            assumenda ex.
          </p>
        </div>

        <div>
          <img src={girls} alt="girls image" height={552} width={548} />
        </div>
      </div>

      <div className="relative">
        <div>
          <img src={background} alt="background" />
        </div>

        <div className="absolute inset-0 bg-black/80 flex justify-around items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-8xl text-[#FFFFFF]">"</h1>

            <p className="text-[#FFFFFF]">
              Momo is not just about sustenance, it's about bringing <br />{" "}
              people together and creating memories. At our <br /> restaurant,
              we strive to create a warm and inviting <br /> atmosphere where
              our guests can enjoy delicious <br /> momo, great company, and
              unforgettable experiences
            </p>

            <h1 className="font-bold text-3xl text-[#FFFFFF]">
              Marcus Schleifer
            </h1>
            <h2 className="font-bold text-xl text-[#FFFFFF]">CEO</h2>
          
             <div className="flex gap-4 ml-130 mt-20">
              
           <div className="border-[#FFFFFF] border-2 rounded-4xl p-4 hover:bg-black"><FaArrowLeft className="text-[#FFFFFF]" /></div>
           <div className="border-[#FFFFFF] border-2 rounded-4xl p-4 hover:bg-black"><FaArrowRight className="text-[#FFFFFF]" /></div>
             </div>
          </div>

          <img
            className="rounded-2xl"
            src={madam}
            alt="madam image"
            height={412}
            width={440}
          />
        </div>
      </div>
     
     <div className="flex flex-col justify-center items-center p-10 gap-13">
       
       <div>
        <h1 className="font-bold text-3xl text-center">Meet The <span className="font-bold text-[#D95103]">Team</span></h1>
        <p className="text-[#0C6967] text-md font-bold">Our talented team members who delivers only the best results</p>
       </div>

     
     <div className="flex justify-center items-center gap-5">
     
     <div> <img src={head} alt="head chief" height={260} width={312} /> </div>
     <div><img src={assistant} alt="assistant" height={260} width={312} /> </div>
     <div><img src={assistant2} alt="assistant2" height={260} width={312} /> </div>

     </div>

     <div className="flex justify-around items-center w-full">
      
      <div>
        <h1>01/ <span>05</span></h1>
      </div>

       <div className="flex gap-4  justify-center items-center">
              
           <div className="border-[#0000001A] border-2 rounded-4xl p-4 hover:bg-white"><FaArrowLeft className="text-[#101828]" /></div>
           <div className="border-[#0000001A] border-2 rounded-4xl p-4 hover:bg-white"><FaArrowRight className="text-[#101828]" /></div>
       </div>

     </div>


     </div>



    </div>
  );
};

export default About;
