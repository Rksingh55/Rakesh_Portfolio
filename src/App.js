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
import Home2 from "./Pages/Homepage3"
import Homepage3 from "./Pages/Homepage3";
function Loader() {
  return (
    <>
     <div class="flex justify-center items-center h-screen bg-[#333B50]">
    <div class="flex justify-center items-center">
        <div class="border-2 hover:bg-[#00d646] w-[80px] flex justify-center items-center h-[80px] rounded-full border-[#00d646] px-8 py-3 text-white font-bold text-4xl mb-12 md:mb-5 animate-shadow-infinite">RK</div>
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
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Services />} />
            <Route path="/project" element={<AllProjects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Notfoundpage />} />
          </Routes>
          {/* <Footer /> */}
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
