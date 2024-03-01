import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Services from "./Pages/Allservices";
import AllProjects from "./Pages/AllProjects";
import Blog from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import Notfoundpage from "./Pages/Notfoundpage";
import CursorBubble from "./Pages/cursor";
import Topover from "./Pages/topover";
import AOS from "aos";
import "aos/dist/aos.css";
import Aos from "aos";
import Home2 from "./Pages/Homepage3";
import Homepage3 from "./Pages/Homepage3";
import Login from "./Pages/Login";
function Loader() {
  return (
    <>
      <div class="flex justify-center items-center h-screen bg-[#333B50]">
      <div class="typing-indicator">
    <div class="typing-circle"></div>
    <div class="typing-circle"></div>
    <div class="typing-circle"></div>
    <div class="typing-shadow"></div>
    <div class="typing-shadow"></div>
    <div class="typing-shadow"></div>
</div>
      </div>
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      // duration: 700,
      // easing: "ease-out-cubic",
      // disable: 'mobile'
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      AOS.init();
    }, 3000);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <CursorBubble />
          <Routes>
            <Route path="/" element={<Homepage3 />} />
            <Route path="/home2" element={<Home />} />

            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Services />} />
            <Route path="/project" element={<AllProjects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />

            <Route path="*" element={<Notfoundpage />} />
          </Routes>
          {/* <Footer /> */}
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
