import React from "react";

import Header from "./components/Header";

import Home from './pages/Home'
import Privacy from './pages/Privacy'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
    <Router>
      <ScrollToTop/>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/privacy" element={<Privacy/>}></Route>
          <Route path="/terms" element={<Terms/>}></Route>
          <Route path="/disclaimer" element={<Disclaimer/>}></Route>
        </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
