import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route index element={<Home />} />

          <Route path="products" element={<Products />} />

          <Route path="products/:id" element={<ProductDetails />}>
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route
            path="contact"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Contact />
              </ProtectedRoute>
            }
          />

          <Route
            path="login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;