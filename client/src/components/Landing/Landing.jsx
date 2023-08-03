import React from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import "./landing.css";

export default function Landing() {
  return (
    <div className="landing">
      <motion.div className="landing__text" initial={{ opacity: 1 }}>
        <h2 className="welcome__header">Welcome</h2>
        <h3 className="welcome__subheading">
          Are you starting a new budgit or accessing a current one?
        </h3>
      </motion.div>
      <motion.div className="button__group">
        <Button variant="contained">New Budgit</Button>
        <Button variant="contained">Current Budgit</Button>
      </motion.div>
    </div>
  );
}
