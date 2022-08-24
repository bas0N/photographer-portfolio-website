import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stories from "./components/Stories";
import beachVid from "./assets/beachVid.mp4";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Hero />
      <Stories />
    </div>
  );
}

export default App;
