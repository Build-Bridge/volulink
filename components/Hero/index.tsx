import React from "react";
import Image from "next/image";
import hero from "@/assets/image/heroImage.png";
import { HeroItems } from "../Constant";
import { IoIosSearch } from "react-icons/io";

const Hero = () => {
  return (
    <div className="hero-section rounded-xl">
      <div className="hero">
        <div className="grid md:grid-cols-2 place-items-center">
          <div className="hero-text">
            <h1>{HeroItems?.title}</h1>
            <p>{HeroItems?.content}</p>
            <div className="bg-white my-8 w-fit rounded-xl p-0.5 flex justify-between items-center">
              <IoIosSearch size={25} className="mx-1.5"/>
              <input type="text" className="h-full border-0 outline-0 text-black" placeholder="Find volunteer opportunity"/>
              <button className="btn bg-black text-white py-2 font-bold">Search</button>
            </div>
          </div>
          <div className="">.</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
