import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HomePage from "./components/HomePage.jsx";
import Hella from "./pages/Hella";
import TroejborgBryg from "./pages/Troejborgbryg.jsx";
import Nippon from "./pages/Nippon";
import StudieSpar from "./pages/StudieSpar";
import Streetfood from "./pages/Streetfood";
import InteractiveStorytelling from "./pages/InteractiveStorytelling";
import About from "./pages/About/About.jsx";

function App() {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hella" element={<Hella />} />
        <Route path="/troejborgbryg" element={<TroejborgBryg />} />
        <Route path="/nippon" element={<Nippon />} />
        <Route path="/studiespar" element={<StudieSpar />} />
        <Route path="/streetfood" element={<Streetfood />} />
        <Route
          path="/interactive-storytelling"
          element={<InteractiveStorytelling />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
