import logo from './logo.svg';
import './App.css';
import Cart from './Cart.js/Cart';
import Home from './Component/Home';
import CreateBouquet from './bouquet/CreateBouquet';

function App() {
  return (
    <div>
    <Home/>
    <CreateBouquet/>
    {/* <Cart/> */}
    </div>
  );
}

export default App;
