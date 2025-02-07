// import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="relative w-full">
      <header
        className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda]
                via-[#785ae4] to-[#A35EA0] opacity-20 blur-[100px] left-10 top-0 hidden md:block"
      ></header>
      <header
        className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda]
                via-[#785ae4] to-[#A35EA0] opacity-20 blur-[100px] right-10 bottom-0 hidden md:block"
      ></header>
      <section className="w-full px-5 sm:px-8 md:px-12 lg:px-0 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
        <article className="grid lg:grid-cols-2 gap-10 xl:gap-6 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
          <section className="ml-0 md:ml-12">
            <header className="text-center lg:text-left">
              <h1 className="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl">
                Hello, I am
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#A35EA0] to-[#D2A8D6]">
                  Prathibha
                </span>
              </h1>
            </header>
            <p className="text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-[370px] md:max-w-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
              cumque architecto non molestiae voluptate doloribus! Pariatur
              provident blanditiis necessitatibus. Explicabo vitae iusto libero
              qui animi! Vel eaque odio voluptatem iste!
            </p>
          </section>
        </article>
      </section>
    </section>
  );
}
