import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Theme1 from "./themes/theme-1/Theme1";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/theme-1" element={<Theme1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
