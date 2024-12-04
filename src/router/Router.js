// src/router/Router.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import SetDailyQuest from "../pages/SetDailyQuest/SetDailyQuest";

const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/setdailyquest" element={<SetDailyQuest />} />
    </Routes>
  );
};

export default RouterConfig;
