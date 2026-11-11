import "./index.css";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import { books } from "./data.js";
import BookInfo from "./pages/BookInfo.jsx"

function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/books" element={<Books books={books} />}></Route>
          <Route path="/books/:id" element={<BookInfo books={books} />} />
        {/* <Route path="/cart" element={<cart books={books} cart={cart} changeQuantity={changeQuantity}></cart>}></Route> */}
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
