import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Loader from "./Components/Loader/Loader";
import { Suspense, lazy, useEffect } from "react";

function App() {
  const Shop = lazy(() => import("./Pages/Shop/Shop"));
  useEffect(() => {
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        console.log("link clicked");
        window.scrollTo({ top: 0 });
      });
    });
  }, []);

  return (
    <div className="app">
      <Router>
        <NavBar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
