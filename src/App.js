import "./index.css";
import Nav from "./components/Nav.jsx";
import Landing from "./components/Landing.jsx";
import Highlights from "./components/Highlights.jsx";
import Featured from "./components/Featured.jsx";
import Discounted from "./components/Discounted.jsx";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Landing></Landing>
      <Highlights></Highlights>
      <Featured></Featured>
      <Discounted></Discounted>
    </div>
  );
}

export default App;
