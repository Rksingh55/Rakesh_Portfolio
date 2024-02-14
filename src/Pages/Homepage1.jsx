import React from "react";
import { Link } from "react-router-dom";

function Homepage1() {
  return (
    <div className="Mainbanner2">
     <div className="main">
     <div className="flex justify-center flex-col items-center h-screen">
        <h1 className="text-[#827878] items-start   text-[18px] md:text-[30px]">
          HI, I'M
        </h1>
        <h1 className="maintext text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  leading-12 font-bold text-[45px] md:text-[75px] ">
          Rakesh Singh
        </h1>
        <h1 className="font-bold text-[20px] text-black mt-2 md:text-[30px]">
          Software Engineer
        </h1>

        <p className="md:w-[50%] w-full text-justify max-sm:p-3 ">
          Passionate about software development, I bring one year of experience
          in creating elegant and maintainable code. My expertise includes Html,
          Css , Bootstrap, Tailwindcss, ReactJs, Nextjs, and I am committed to
          staying at the forefront of technological advancements.
        </p>
        <div
          className="flex gap-6 mt-8"
         
        >
          <button className="bg-[#AF5FEF] px-7  md:px-10 text-white  rounded-[100px]">
            Hire Me
          </button>
          <Link
            to="/about"
            className="rounded-[100px] text-decoration-none  border-2 border-[#AF5FEF] hover:text-white hover:bg-[#AF5FEF]  px-7 md:px-8 text-[#AF5FEF] font-bold  py-2"
          >
            About Me
          </Link>
        </div>
      </div>
     </div>
    </div>
  );
}

export default Homepage1;
