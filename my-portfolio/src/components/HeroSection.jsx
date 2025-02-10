// import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { variants } from "./data/config";
import InteractiveButton from "../components/InteractiveButton";
import SocialButton from "../components/SocialButton";

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
          <section className="lg py-6 flex justify-between">
            <SocialButton />
            <section className="ml-0 md:ml-12">
              <header className="text-center lg:text-left">
                <h1 className="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl">
                  Hello, I am{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#F4E1E6] to-[#F6C6D7]">
                    Prathibha
                  </span>
                </h1>
                <h2 className="mt-2 text-2xl text-[#720c61]">
                  {" "}
                  Frontend Developer
                </h2>
              </header>
              <p className="text-[#fff] pt-8 text-center lg:text-left mx-auto max-w-[370px] md:max-w-xl">
                Currently following a Bsc. degree in Information Technology at
                SLIIT, I’m also gaining hands-on experience as an intern at
                ITMD, Ministry of Finance, Sri Lanka, where I work on real-world
                projects that sharpen my technical and problem-solving skills. I
                specialize in design intuitive, visually appealing interfaces
                with a strong eye for detail and a commitment to delivering
                high-quality digital products. I hope to grow into a full-stack
                developer, bridging the gap between design and development to
                build impactful applications.
              </p>
              <h2 className="mt-[10px] text-[#fff] text-2xl">
                {" "}
                Let’s connect and create something amazing together!
              </h2>
              <section className="flex items-center gap-3 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
                <figure className="w-56">
                  <InteractiveButton text="Hire Me" />
                </figure>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center px-4 py-2 bg-transparent font-bold text-[#fff] border-3 border-[#fff]
                    transition-all duration-100 ease-in-out group hover:bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600 rounded-3xl"
                >
                  <svg viewBox="0 0 24 24" width={40} height={40} fill="none">
                    <motion.path
                      d="M12 16l4-4h-3V4h-2v8H8l4 4zM5 20h14v2H5z"
                      fill="#FFFFFF"
                      stroke="#FFFFFF"
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
          </section>
          <figure className="lg:h-full md:flex md:justify-end mt-20 md:mt-0">
            <motion.div
            className="w-[350px] h-[350px] md:w-[400px] md:h-[400px] flex justify-center items-center p-3 rounded-full overflow-hidden relative"
            animate = {{
              backgroundColor: ['#A35EA0', '#F7A1B2', '#ff6667' ],
              scale: [1, 1.1, 1],
              rotate: [1, 5, 5, 1],
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse'
            }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 blur-3xl opacity-60 h-full w-full ">
                
              </div>
            </motion.div>
          </figure>
        </article>
      </section>
    </section>
  );
}

export default HeroSection;
