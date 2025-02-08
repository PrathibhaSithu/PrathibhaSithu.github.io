import { useRef, useState } from "react";
import { motion } from "framer-motion";

const CYCLE_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,<>/?";

export default function InteractiveButton({ text }) {
  return (
    <div className="flex justify-center items-center min-h-[200px] p-4">
      <CustomButton text={text} />
    </div>
  );
}

const CustomButton = ({ text }) => {
  const intervalRef = useRef(null);
  const [displayText, setDisplayText] = useState(text);

  const scramble = () => {
    let pos = 0;
    intervalRef.current = setInterval(() => {
      const scrambled = text
        .split("")
        .map((char, index) => {
          if (pos / CYCLE_PER_LETTER > index) {
            return char;
          }
          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];
          return randomChar;
        })
        .join("");

      setDisplayText(scrambled);
      pos++;
      if (pos >= text.length * CYCLE_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };
  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);
    setDisplayText(text);
  };

    return (
        <motion.button
        className="w-full px-8 text-lg font-bold text-white rounded-lg overflow-hidden relative 
        bg-gradient-to-r from-blue-500 to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white"
        // whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={scramble}
        onMouseLeave={stopScramble}
        >
          <span className="absolute inset-0 w-full h-full bg-[#ff5c72] rounded-lg transform scale-0
          transition-transform duration-300 ease-out group-hover:scale-100"></span>
        <span className="relative z-10">{displayText}</span>
        </motion.button>
    );
};
