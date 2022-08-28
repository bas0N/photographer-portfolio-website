import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stories from "./components/Stories";
import beachVid from "./assets/beachVid.mp4";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Story from "./components/Story";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="flex flex-col justify-between">
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Stories />
                  <Carousel />
                </>
              }
            />
            <Route path="/esa" element={<Story />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
