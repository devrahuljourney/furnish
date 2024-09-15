import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Page/HomePage';
import Collections from './Page/Collections';
import Products from './Page/Products';
import { CheckmarkIcon } from 'react-hot-toast';
import Checkout from './Page/Checkout';
import Search from './Page/Search';
import AuthTabs from './Page/AuthTabs';
import Profile from './Page/Profile';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path={`/collections/:subcategory/:id`} element={<Collections/>} />
          <Route path={`/product/:title/:id`}  element ={<Products/>} /> 
          <Route path={`/checkout`} element = { <Checkout/>  } />
          <Route path="/search" element={ <Search/> } />
          <Route path="/auth" element={ <AuthTabs/> } />
          <Route path='/profile' element={<Profile/>} />

        </Routes>
    </div>
  );
}

export default App;
