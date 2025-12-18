import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Primitive from "./pages/Primitive";
import NonPrimitive from "./pages/NonPrimitive";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/primitive" element={<Primitive/>} />
        <Route path="/non-primitive" element={<NonPrimitive/>} />
      </Routes>
    </>
  );
}

export default App;
