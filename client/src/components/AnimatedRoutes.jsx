import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Landing from "./Landing/Landing";
import Body from "./Body/Body";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/" element={<Body />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
