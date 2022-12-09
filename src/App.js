import { BrowserRouter } from "react-router-dom";
import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Navbar/> */}
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
