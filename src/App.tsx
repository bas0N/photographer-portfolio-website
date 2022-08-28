import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stories from "./components/Stories";
import beachVid from "./assets/beachVid.mp4";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Hero />
      <Stories />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
