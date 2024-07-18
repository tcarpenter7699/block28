import { Routes, Route } from "react-router-dom";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Purple from "./components/Purple";
import Green from "./components/Green";
import Orange from "./components/Orange";
import Pink from "./components/Pink";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={Home()}></Route>
        <Route path="/blue" element={Blue()}></Route>
        <Route path="/red" element={Red()}></Route>
        <Route path="/green" element={Green()}></Route>
        <Route path="/orange" element={Orange()}></Route>
        <Route path="/purple" element={Purple()}></Route>
        <Route path="/pink" element={Pink()}></Route>
      </Routes>
    </>
  );
}

export default App;