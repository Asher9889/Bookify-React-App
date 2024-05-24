import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Header, Footer } from "./components";
import { Home, Register, Login, Listing } from "./pages/index";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/listing" element={<Listing />} />
          
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
