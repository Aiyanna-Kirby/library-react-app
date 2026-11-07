import "./index.css";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/books" element={<Books></Books>}></Route>
          {/* <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart} cart={cart}></BookInfo>}></Route>
        <Route path="/cart" element={<cart books={books} cart={cart} changeQuantity={changeQuantity}></cart>}></Route> */}
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
