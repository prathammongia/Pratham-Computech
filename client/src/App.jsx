import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
//import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NewProducts from "./pages/services/NewProducts";
import SellDevice from "./pages/services/SellDevice";
import Repair from "./pages/services/Repair";
import BusinessSolutions from "./pages/services/BusinessSolutions";
import ProductDetails from "./pages/services/ProductDetails";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/new-products" element={<NewProducts />} />
        <Route path="/services/sell-device" element={<SellDevice />} />
        <Route path="/services/repair" element={<Repair />} />
        <Route path="/services/business" element={<BusinessSolutions />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/services/new-products" element={<NewProducts />} />
        <Route path="/services/sell-device" element={<SellDevice />} />
        <Route path="/services/repair" element={<Repair />} />
        <Route path="/services/business-solutions" element={<BusinessSolutions />} />
        
        
      </Routes>
    </Router>
  );
}

export default App;