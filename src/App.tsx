import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stories from "./components/Stories";
import beachVid from "./assets/beachVid.mp4";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Story from "./Pages/Story";
import Offer from "./Pages/Offer";
import AboutMe from "./Pages/AboutMe";
import NotFound from "./Pages/NotFound";
import StoriesPortfolio from "./Pages/StoriesPortfolio";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="flex flex-col justify-between w-screen">
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
            <Route path="/stories" element={<StoriesPortfolio />} />
            <Route path="/stories/:id" element={<Story />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
