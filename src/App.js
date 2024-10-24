import React from 'react';
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
import Cart from './Page/Cart';
import { useSelector } from 'react-redux';
import ContactUsForm from './Page/ContactUs';
import AboutUs from './Page/AboutUs';
import PrivacyPolicy from './Page/PrivacyPolicy';
import RefundPolicy from './Page/RefundPolicy';
import ShippingPolicy from './Page/ShippingPolicy';
import CancellationPolicy from './Page/CancellationPage';
import TermsAndConditions from './Page/TermAndCondition';
import LegalBusinessInfo from './Page/LegalBusiness';

function App() {
  const { cartOpen } = useSelector((state) => state.cart);

  return (
    <div className="App overflow-x-hidden w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={`/collections/:subcategory/:id`} element={<Collections />} />
        <Route path={`/product/:title/:id`} element={<Products />} />
        <Route path={`/checkout`} element={<Checkout />} />
        <Route path="/search" element={<Search />} />
        <Route path="/auth" element={<AuthTabs />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/contact-us' element={<ContactUsForm />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/refund-policy' element={<RefundPolicy />} />
        <Route path='/shipping-policy' element={<ShippingPolicy />} />
        <Route path='/cancellation' element={<CancellationPolicy />} />
        <Route path='/term-condition' element={<TermsAndConditions />} />
        <Route path='/legal-business' element={<LegalBusinessInfo />} />
      </Routes>

      {/* Cart Sidebar */}
      <div 
        className={`fixed top-0 right-0 transition-transform duration-300 ease-in-out bg-nav-banner-color h-full md:w-1/3 w-[70%] p-4
          ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`
        }
        style={{ zIndex: 1000 }}
      >
        <Cart />
      </div>
    </div>
  );
}

export default App;
