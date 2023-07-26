// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import AboutPage from "./components/AboutPage";
import ScrollToTop from "./components/SrollToTop";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/portfolio/" element={<MainPage />}></Route>
          <Route path="/portfolio/aboutPage" element={<AboutPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
