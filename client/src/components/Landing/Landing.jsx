import React from "react";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <motion.div className="intro__text" initial={{ opacity: 1 }}>
      <h2>Welcome</h2>
      <h3>Are you starting a new budgit or accessing a current one?</h3>
    </motion.div>
  );
}
