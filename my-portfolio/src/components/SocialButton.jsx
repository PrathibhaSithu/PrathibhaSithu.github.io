import React from "react";
import { motion } from "framer-motion";

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
      hover: {
        scale: 1.1,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
    }
    }
};

  return (
    <div>SocialButton</div>
)
}
