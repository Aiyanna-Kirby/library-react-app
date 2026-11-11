import "./index.css";
import React, { useEffect, useState } from "react";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import { books } from "./data.js";
import BookInfo from "./pages/BookInfo.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, book]);
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/books" element={<Books books={books} />}></Route>
          <Route
            path="/books/:id"
            element={<BookInfo books={books} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <BookInfo books={books} addToCart={addToCart} cart={cart} />
            }
          ></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
