import { easeInOut, motion } from "framer-motion";
import { socialIcons } from "./data/config";

export default function SocialButton() {
  const animationDuration = 4;
  const variants = {
    initial: { pathLength: 0, strokeOpacity: 1, fillOpacity: 0 },
    animate: {
      pathLength: 1,
      strokeOpacity: 0,
      fillOpacity: 1,
      transition: {
        duration: animationDuration,
        ease: easeInOut,
        strokeOpacity: {
          delay: animationDuration,
        },
        fillOpacity: {
          delay: animationDuration,
        },
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div
      className="md:flex flex-col items-center justify-center border border-pink-900 bg-[#e1e1e129] 
    rounded-3xl space-y-11 p-3 max-h-[506px] md:max-h-[386px] hidden"
    >
      {socialIcons.map((icon) => (
        <button key={icon.id}>
          <svg viewBox={icon.viewBox} width={40} height={40}>
            <motion.path
              d={icon.path}
              fill="#e6e6e6"
              stroke="#e6e6e6"
              strokeWidth={1}
              variants={variants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            />
          </svg>
        </button>
      ))}
    </div>
  );
}
