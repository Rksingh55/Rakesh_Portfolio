import React from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircle, BsGithub } from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { Link } from "react-router-dom";

function Footer() {
 
  return (
    <>
      <div className=" h-[200px]   relative">
        <div  className="bg-[#9E22FF] md:w-[80%] w-[95%] p-10  mt-[150px] ml-[2%] md:ml-[10%]  absolute rounded-md">
          <div  class="flex items-center justify-center ">
            <div class="text-start">
              <h4 className="text-[15px] md:text-[17px]">
                Want To Update Of My Latest Projects{" "}
              </h4>
              <h1 className="footerh1 text-[22px] md:text-[35px]">
                {" "}
                Subscribe My NewsLater{" "}
              </h1>
              <div className="flex md:flex-row flex-col gap-2">
                <input
                  class=" p-2 border w-[270px] md:w-[300px]"
                  placeholder="Enter Your Email"
                  type="text"
                />
                <button className=" border-2 border-white hover:text-white hover:bg-[#AF5FEF]  px-7 md:px-10 text-white font-bold  py-2">
                  Subscribes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black footer  h-[300px] md:h-[200px]  ">
        {/* <div className="text-white relative ">
          <div className="mt-[200px] md:w-[80%] md:ml-[10%] absolute flex md:flex-row flex-col ">
            <div className="basis-1/2 max-sm:mt-10 ">
              <h3>RkLogo</h3>
              <img src={Logo} className="h-[80px] w-[80px]" />
            </div>
          </div>
        </div> */}
      </div>
      <div className="  bg-black p-4 text-white text-center md:text-end  relative">
        
        <div className="flex  items-center justify-center  " 
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <div className="flex gap-2">
            <Link to="https://www.facebook.com/profile.php?id=100038099170797&mibextid=ZbWKwL"
              target="_blank"  className="flex justify-center items-center h-[50px] ml-2 w-[50px] bg-[#9E22FF] cursor-pointer rounded-full">
              <FaFacebook className="text-white text-[20px]" />
            </Link>
            <Link to="https://github.com/Rksingh55?tab=repositories"
              target="_blank" className="flex justify-center items-center h-[50px] ml-2 w-[50px] bg-[#9E22FF] cursor-pointer rounded-full">
              <BsGithub className="text-white text-[20px]" />
            </Link>
            <Link to="http://wa.me/9621671657" target="blank"className="flex justify-center items-center h-[50px] ml-2 w-[50px] bg-[#9E22FF] cursor-pointer rounded-full">
              <FaWhatsapp className="text-white text-[20px]" />
            </Link>
            <Link   to="https://www.linkedin.com/in/rakesh-singh-154108235/"
              class="linkedin" className="flex justify-center items-center h-[50px] ml-2 w-[50px] bg-[#9E22FF] cursor-pointer rounded-full">
              <FaLinkedin className="text-white text-[20px]" />
            </Link>
          </div>
        </div>
        <div className="md:text-center ">
          <div className="flex justify-center mt-4">
            <nav>
              <ul className="  text-[#827878] text-[15px] flex flex-wrap  gap-4 ">
               <Link to="/">
               <li className="hover:text-[#AF5FEF] text cursor-pointer ">
                  Home
                </li>
               </Link>
               <Link to="/about">
               <li className="hover:text-[#AF5FEF]  text cursor-pointer">
                  About
                </li>
               </Link>
               <Link to="/services">
               <li className="hover:text-[#AF5FEF] text cursor-pointer">
                  Services
                </li>
               </Link>
               <Link to="/project">
               <li className="hover:text-[#AF5FEF] text cursor-pointer">
                  Projects
                </li>
               </Link>
               {/* <Link to="/blog">
               <li className="hover:text-[#AF5FEF] text cursor-pointer">
                  Blogs
                </li>
               </Link> */}
                <Link to="/contact">
                <li className="hover:text-[#AF5FEF] text cursor-pointer">
                  Contact
                </li>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
        <p className=""> Design & Developed By Rakesh Singh</p>
      </div>
    </>
  );
}

export default Footer;
