import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  children: ReactNode;
  className?: string;
};

const Card = ({ children, className }: Props) => {
  return (
    <Reveal>
      <motion.div
        whileHover={{ x: -10 }}
        transition={{ duration: 0.5 }}
        className={`card border border-babyBlue p-5 rounded-lg hover:bg-babyBlue ${className}`}
      >
        {children}
      </motion.div>
    </Reveal>
  );
};

export default Card;
