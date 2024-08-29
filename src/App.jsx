import React from "react";
import "assets/scss/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import Example from "pages/Example";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/properties/:id" element={<DetailsPage />} />
          <Route path="/example" element={<Example />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
