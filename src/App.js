import logo from './logo.svg';
import './App.css';
import Cart from './Cart.js/Cart';
import Flowers from "./components/Flowers";
import Bouquet from "./components/Bouquet";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
    {/* <Cart/> */}
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Flowers />} />

          <Route path="/Bouquet" element={<Bouquet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
