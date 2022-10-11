import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Cards from "./components/Cards";
import AddCart from "./components/AddCart";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="AddCart" element={<AddCart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
