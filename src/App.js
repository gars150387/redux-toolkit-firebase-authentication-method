import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Navbar } from "./components/Navbar";
import { useCheckAuth } from "./hooks/useCheckAuth";

import { Help } from "./pages/Help";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { CheckingAuth } from "./ui/components/CheckingAuth";


function App() {

  const  status  = useCheckAuth()

  if (status === "checking") {
    return <CheckingAuth />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="profile" element={<Profile />} />
          <Route path="help" element={<Help />} />
        </Routes>

        {/* 
        {status === 'authenticated' ?  (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="profile" element={<Profile />} />
            <Route path="help" element={<Help />} />
          </Routes>
          ) : null} */}
      </header>
    </div>
  );
}

export default App;
