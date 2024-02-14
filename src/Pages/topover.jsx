import React, { useState, useEffect } from "react";
import { FcUpload } from "react-icons/fc";
import { Link } from "react-router-dom";

function Topover() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop >= window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth", duration: 2000 });
  };

  return (
    <>
      {isVisible && (
        <div className="fixed top-[96%] md:top-[90%] left-[93%] z-[999] max-sm:hidden">
          <Link to="/" onClick={scrollToTop}>
            <div className="flex justify-end items-center md:w-[83%] m-auto relative">
              <div className="md:h-[50px] w-[35px] h-[35px] md:w-[50px] rounded-full topover max-sm:mr-[37%] max-sm:mt-[-100px] flex items-center justify-center absolute bg-white">
                <FcUpload className="md:text-[30px] text-[20px] p-1 " />
              </div>
            </div>
          </Link>
        </div>
      )}
    </>
  );
}

export default Topover;
