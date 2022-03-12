import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "../home/home";
import Users from "../user/users";

export default function ComponentRoutes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>          
          <Route exact path="/users" element={<Users />}></Route>
          <Route exact path="/contact" element={<></>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
