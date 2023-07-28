// import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import AboutPage from "./components/AboutPage";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/aboutPage" element={<AboutPage />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
