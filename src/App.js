import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import Theme1 from "./themes/Theme-1/Theme1";

function App() {
  return (
    <>
      <Header />
      <LandingPage />
      <BrowserRouter>
        <Routes>
          <Route path="/theme1" element={<Theme1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
