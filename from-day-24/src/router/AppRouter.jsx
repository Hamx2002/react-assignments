import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Day24 from "../pages/Day24";
import Day25 from "../pages/Day25";
import Day26 from "../pages/Day26";
import Day27 from "../pages/Day27";
import Day29 from "../pages/Day29";
import Day30 from "../pages/Day30";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="day-24" element={<Day24 />} />
          <Route path="day-25" element={<Day25 />} />
          <Route path="day-26" element={<Day26 />} />
          <Route path="day-27" element={<Day27 />} />
          <Route path="day-29" element={<Day29 />} />
          <Route path="day-30" element={<Day30 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
