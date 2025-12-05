import React from "react";
import { Route, Routes } from "react-router";
import Homepage from "../pages/Homepage";
import ProductivityGuides from "../pages/ProductivityGuides";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import TodoApp from "../pages/TodoApp";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/productivity-guides" element={<ProductivityGuides />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/tasks" element={<TodoApp />} />
    </Routes>
  );
};

export default AppRouter;
