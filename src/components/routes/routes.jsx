import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Album from "../album/album";
import AlbumDetails from "../album/albumDetails";
import Login from "../auth/login";
import Home from "../home/home";
import Users from "../users/users";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

export default function ComponentRoutes() {
// const navigate = useNavigate();
// useEffect(()=>{
//   const userName = localStorage.getItem("username");
//   if(!userName){
//     navigate("/login");
//   }
// },[])
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/users" element={<Users />}></Route>
          <Route exact path="/user/album/:id" element={<Album />}></Route>
          <Route
            exact
            path="/user/:userId/album-detail/:albumId"
            element={<AlbumDetails />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}
