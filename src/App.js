// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Import your global CSS file
import HomePage from './components/homepage'; // Correct path to HomePage component
import TermsAndCondition from './components/TermsAndCondition'; // Correct path to Terms_and_condition component
import Cookies from './components/Cookies.jsx'; // Correct path to Terms_and_condition component
import PrivacyPolicy from './components/PrivacyPolicy.jsx'; // Correct path to Terms_and_condition component
import ContactUs from './components/ContactUs.jsx'; // Correct path to Terms_and_condition component
// C:\Users\hp\OneDrive\Desktop\SIH2024\healthcare-website\src\components\ContactUs.jsx
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/termsCOND" element={<TermsAndCondition/>} />
          <Route path="/Cookie" element={<Cookies/>} />
          <Route path="/PPolicy" element={<PrivacyPolicy />} />
          <Route path="/Contact" element={<ContactUs/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
