import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './views/Auth';
import PropertyListing from './views/PropertyListing';
import AddProperty from './views/AddProperty';
// ... import other views

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/properties" element={<PropertyListing />} />
        <Route path="/add-property" element={<AddProperty />} />
        {/* ... add other routes */}
        <Route path="/" element={<PropertyListing />} />
      </Routes>
    </Router>
  );
}

export default App;
