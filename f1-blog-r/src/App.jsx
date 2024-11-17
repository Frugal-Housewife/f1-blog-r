import "./App.scss";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Countdown from "./Countdown";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Something from "./Something";
import Statistics from "./Statistics";
import Contacts from "./Contacts";

Countdown;
function App() {
  library.add(fab);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/news" element={<Something />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
