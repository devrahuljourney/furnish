import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Page/HomePage';
import Collections from './Page/Collections';
import Products from './Page/Products';
import { CheckmarkIcon } from 'react-hot-toast';
import Checkout from './Page/Checkout';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path={`/collections/:subcategory/:id`} element={<Collections/>} />
          <Route path={`/product/:title/:id`}  element ={<Products/>} /> 
          <Route path={`/checkout`} element = { <Checkout/>  } />
        </Routes>
    </div>
  );
}

export default App;
