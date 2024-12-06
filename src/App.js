
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AboutUs from './Aboutus'; // Import AboutUs Component
import Contact from './Contact'
import Work from './Work'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define routes for Home and AboutUs */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
