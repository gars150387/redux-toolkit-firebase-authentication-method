import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Navbar } from "./components/Navbar";

import { Help } from "./pages/Help";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="profile" element={<Profile />} />
            <Route path="help" element={<Help />} />
          </Routes>
        </header>
    </div>
  );
}

export default App;

