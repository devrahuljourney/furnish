import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Page/HomePage';
import Collections from './Page/Collections';
import Products from './Page/Products';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path={`/collections/:Category`} element={<Collections/>} />
          <Route path={`/product/:title/:id`}  element ={<Products/>} /> 
        </Routes>
    </div>
  );
}

export default App;
