import './App.css';
import Cart from './Cart.js/Cart';
import Welcome from "./Welcome/Welcome";
import Login from "./Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateBouquet from './bouquet/CreateBouquet';

function App() {
  return (
    <div>
    <CreateBouquet/>
    <Cart/>
    {/* <Cart/> */}
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
