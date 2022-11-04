// import Header from "./components/Header";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Header from "./components/Header";
import Product from "./components/Product";
function App() {
  return <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="*" element={<div>Page not Found</div>} />
    </Routes>
  </Router>
}

export default App;