"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TextRevealProps {
  children: ReactNode;
  className?: string;
}

const TextReveal: React.FC<TextRevealProps> = ({ children, className }) => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3, ease: "easeOut" },
    }),
  };

  return (
    <div className={`inline-flex overflow-hidden ${className}`}>
      {children.split(" ").map((word, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="mr-1" // Giữ khoảng cách giữa các từ
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default TextReveal;
