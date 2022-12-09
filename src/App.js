import './App.css';
import Cart from './Cart.js/Cart';
<<<<<<< HEAD
import Welcome from "./Welcome/Welcome";
import Login from "./Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
=======
import Home from './Component/Home';
>>>>>>> master
import CreateBouquet from './bouquet/CreateBouquet';

function App() {
  return (
    <div>
<<<<<<< HEAD
    {/* <CreateBouquet/> */}
    {/* <Cart/> */}
    {/* <Cart/> */}
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
=======
    <Home/>
    <CreateBouquet/>
    <Cart/>
>>>>>>> master
    </div>
  );
}

export default App;
