import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./features/productList/ProductList";
import { useState } from "react";
import DetailProduct from "./features/productList/DetailProduct";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Router>
        <Header iSOpen={isOpen} isClose={() => setIsOpen(!isOpen)} />
        <main className="mt-20 mx-[10vh]">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/Product/:id" element={<DetailProduct />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
