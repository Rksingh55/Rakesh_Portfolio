import React from "react";
import { FcMenu } from "react-icons/fc";
import Logo from "../Images/Logo2.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { BsFillPersonFill, BsTelephone } from "react-icons/bs";

// bg-white sticky top-0 z-[10] border-b-2
// border-b-[3px] bg-white shadow-md border-gradient
function Navbar() {
  
  return (
    <div className="w-full   md:bg-[#333B50]  bg-black text-white shadow-md ">
      {/* <div className="bg-blue-300 underline  cursor-pointer flex items-center justify-center text-white p-2">Checkout My new website</div> */}
      <div className="w-full max-sm:px-5 m-auto md:w-[60%]   ">
        <div className="flex justify-between items-center max-sm:py-5  md:p-3    ">
          <div className="font-bold">
            {/* <img src={Logo} className="w-[30px]   md:w-[70px] " /> */}
            <div class="flex justify-center items-center py-2">
              {/* <div class="border-b-[5px] hover:bg-[#00d646] w-[50px] flex justify-center items-center h-[50px] rounded-full border-[#bec785]  text-white font-bold">
                RK
              </div> */}
              RkPort<span className="text-[#00d646]">.</span>
            </div>
          </div>
          {/* //for mobile screen */}

          <div
            className="text-[30px]  md:hidden  "
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <div
              class="modal fade  bg-black  "
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog  ">
                <div class="modal-content ">
                  <div class="modal-header    ">
                    <button
                      type="button"
                      class="btn-close text-[20px] "
                    ></button>
                  </div>

                  <div className="mt-3">
                    <nav>
                      <ul className="   text-[20px] flex flex-col gap-3 ">
                        <Link to="/">
                          <li className="active text-black font-thin p-1 w-[80%]   hover-text-black cursor-pointer ">
                            Home
                          </li>
                        </Link>
                        {/* <Link to="/home2">
                          <li className="text-black font-thin p-1  text cursor-pointer">
                            Home Page2
                          </li>
                        </Link> */}

                        <Link to="/project">
                          <li className=" text-black font-thin p-1 w-[80%]   hover-text-black cursor-pointer ">
                            Projects
                          </li>
                        </Link>
                        <Link to="/service">
                          <li className=" text-black font-thin p-1 w-[80%]   hover-text-black cursor-pointer ">
                            Services
                          </li>
                        </Link>

                        <Link to="/blog">
                          <li className=" text-black font-thin p-1 w-[80%]   hover-text-black cursor-pointer ">
                            Blogs
                          </li>
                        </Link>
                        <Link to="/contact">
                          <li className=" text-black font-thin p-1 w-[80%]   hover-text-black cursor-pointer ">
                            Contact
                          </li>
                        </Link>
                <Link to="/Login" className="text-black font-thin hover:text-[#00d646] text text-decoration-none p-1  ">Login</Link>

                      </ul>
                    </nav>
                    
                  </div>
                </div>
              </div>
            </div>

            {/* <input type="checkbox" id="checkbox"/> */}
            <label for="checkbox" class="toggle">
              <div class="bars" id="bar1"></div>
              <div class="bars" id="bar2"></div>
              <div class="bars" id="bar3"></div>
            </label>
          </div>

      

          {/* //for full screen */}
          <div className="max-sm:hidden md:mt-3 ">
            <nav className="">
              <ul className=" flex  gap-4 font-semmibold text-white  ">
                <Link to="/">
                  <li className="hover:text-[#00d646] text-white  text cursor-pointer">
                    Home
                  </li>
                </Link>
                {/* <Link to="/home2">
                  <li className="hover:text-[#00d646]   text cursor-pointer">
                    HomePage2
                  </li>
                </Link> */}

                <Link to="/project">
                  <li className="hover:text-[#00d646] text-white   text cursor-pointer">
                    Projects
                  </li>
                </Link>
                <Link to="/service">
                  <li className="hover:text-[#00d646] text-white  text cursor-pointer">
                    Services
                  </li>
                </Link>
                <Link to="/blog">
                  <li className="hover:text-[#00d646] text-white  text cursor-pointer">
                    Blogs
                  </li>
                </Link>

                <Link to="/contact">
                  <li className="hover:text-[#00d646] text-white text cursor-pointer">
                    Contact
                  </li>
                </Link>
                <Link to="/Login" className=" hover:text-[#00d646] text text-decoration-none text-white  ">Login</Link>

              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
