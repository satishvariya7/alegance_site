import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Album from "../album/album";
import AlbumDetails from "../album/albumDetails";
import Home from "../home/home";
import Users from "../users/users";

export default function ComponentRoutes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>          
          <Route exact path="/users" element={<Users />}></Route>
          <Route exact path="/user/album/:id" element={<Album />}></Route>          
          <Route exact path="/user/:userId/album-detail/:albumId" element={<AlbumDetails />}></Route>          
        </Routes>
      </Router>
    </div>
  );
}
