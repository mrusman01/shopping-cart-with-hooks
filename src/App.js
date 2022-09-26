import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./components/Cards";
import AddCart from "./components/AddCart";

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
