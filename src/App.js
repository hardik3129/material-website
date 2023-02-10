import Drawer from "./component/Drawer";
import React from "react";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import Login from "./pages/Login";
import UpdateProduct from "./pages/UpdateProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Drawer><Dashboard /></Drawer>} />
      <Route path="/addproduct" element={<Drawer><AddProduct /></Drawer>} />
      <Route path="/updateproduct/:id" element={<UpdateProduct />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
