import './App.css';
import Cart from './Cart.js/Cart';
import Welcome from "./Welcome/Welcome";
import Login from "./Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Component/Home';
import CreateBouquet from './bouquet/CreateBouquet';

function App() {
  return (
    <div>
    {/* <CreateBouquet/> */}
    {/* <Cart/> */}
    {/* <Cart/> */}
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    <Home/>
    <CreateBouquet/>
    <Cart/>
    </div>
  );
}

export default App;
