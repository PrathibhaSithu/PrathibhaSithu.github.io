// import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { variants } from "./data/config";

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
                Hello, I am{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#F4E1E6] to-[#F6C6D7]">
                  Prathibha
                </span>
              </h1>
            </header>
            <p className="text-[#fff] pt-8 text-center lg:text-left mx-auto max-w-[370px] md:max-w-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
              cumque architecto non molestiae voluptate doloribus! Pariatur
              provident blanditiis necessitatibus. Explicabo vitae iusto libero
              qui animi! Vel eaque odio voluptatem iste!
            </p>
            <section className="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
              <figure className="w-56">
                <button className="text-[#F4E1E6] font-medium">Hire Me</button>
              </figure>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="flex items-center px-4 py-2 bg-transparent font-bold text-[#fff] border border-[#F7A1B2] rounded-3xl"
              >
                <svg viewBox="0 0 24 24" width={40} height={40}>
                  <motion.path
                    d="M12 15.58614.95-4.95-1.414-1.414L13 12.172V4h-2v8.172L8.464 9.636 7.05 11.05 12 15.586zm-7 2h14v2H5v-2z"
                    fill="#ffc107"
                    stroke="#ffc107"
                    strokeWidth={0.5}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                  />
                </svg>
                <span>Download Resume</span>
              </motion.button>
            </section>
          </section>
        </article>
      </section>
    </section>
  );
}

export default HeroSection;
