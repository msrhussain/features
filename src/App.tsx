import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./components/about";
import Accordion from "./components/accordion";
import Card from "./components/card";
import { ImageCarousel } from "./components/carousel";
import Footer from "./components/footer";
import { Header } from "./components/header";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="about" element={<About />} />
          <Route path="accordion" element={<Accordion />} />
          <Route path="carousel" element={<ImageCarousel />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
