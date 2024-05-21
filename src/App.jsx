import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Header, Footer } from "./components";
import { Home, Register, Login } from "./pages/index";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
