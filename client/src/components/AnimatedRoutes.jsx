import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Landing from "./Landing/Landing";
import Body from "./Body/Body";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index element={<Landing />} />
        <Route path="budgit" element={<Body />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
