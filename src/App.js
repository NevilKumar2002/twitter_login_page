import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Route, Router, Routes } from "react-router-dom";
const App=()=>{
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/login" element={<Login />}  />
        <Route path="/signup" element={<SignUp />}  />
      </Routes>
    </div>
  )
}
export default App;