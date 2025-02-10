import { motion } from "framer-motion";
import CustomTitle from "./CustomTitle";
import { services } from "./data/config";

export default function ServiceSection() {
  return (
    <section className="relative mt-40" id="services">
      <CustomTitle title={"I am Good At..!"} />
      <section className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 p-16 mt-32">
        <header
          className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda]
                via-[#785ae4] to-[#A35EA0] opacity-20 blur-[100px] left-10 top-0 hidden md:block"
        ></header>
        <header
          className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda]
                via-[#785ae4] to-[#A35EA0] opacity-20 blur-[100px] right-10 bottom-0 hidden md:block"
        ></header>

        {services.map((item, index) => (
            <motion.article
            key={item.id}
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.8, ease: 'easeOut', delay:index*0.5}}
            viewport={{once:true, amount:0.5}}
            className="relative w-full h-[350px] p-5 grid place-items-center overflow-hidden rounded-[20px] shadow-lg"
            >
                <section className="absolute w-[95%] h-[95%] bg-black rounded-[20px] z-10 text-center text-white">
                    <header className="border borde-pink-800 bg-[#ffffff29] rounded-xl p-3 mb-6 min-h-full min-w-full flex items-center">
                        <section className="mt-4 space-y-4 px-2">
                            <h2 className="uppercase text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#ffb9d4] to-[#F6C6D7]">
                                {item.title}
                            </h2>
                            <p className="md:text-lg text-white opacity-80 "></p>
                        </section>
                    </header>
                </section>
                <section className="absolute w-full h-[105%] bg-gradient-to-br from-[#ffb9d4] to-[#F6C6D7] animate-spin-slow opacity-60 animation-[spin 5s linear infinite] "></section>
            </motion.article>
        ))}
      </section>
    </section>
  );
}
