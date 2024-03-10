import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './views/Auth';
import PropertyListing from './views/PropertyListing';
import AddProperty from './views/AddProperty';
import LandlordLogin from './views/LandlordLogin';
import HomePage from './views/HomePage';
import Login from './views/Login'
import SignUp from './views/SignUp';
import reporting from './views/reporting'
import RentProperties from './views/RentProperties';
import BuyProperties from './views/BuyProperties';
import PropertyOwner from './views/PropertyOwner'
import PropertyRequestForm from './views/PropertyRequestForm'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/properties" element={<PropertyListing />} />
        <Route path="/reporting" element={<reporting />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/landlordlogin" element={<LandlordLogin />} />
        <Route path="/propertiesforrent" element={<RentProperties />} />
        <Route path="/propertiesforsale" element={<BuyProperties />} />
        <Route path="/property-owner" element={<PropertyOwner />} />
        <Route path="/property-inquiry" element={<PropertyRequestForm />} />
      </Routes>
    </Router>
  );
}

export default App;
