import React from "react";
import { FcMenu } from "react-icons/fc";
import Logo from "../Images/Logo2.png";
import { Link } from "react-router-dom";

// bg-white sticky top-0 z-[10] border-b-2
// border-b-[3px] bg-white shadow-md border-gradient
function Navbar() {
  return (
    <div className="w-full bg-[#333B50]   text-white shadow-md ">
    {/* <div className="bg-blue-300 underline  cursor-pointer flex items-center justify-center text-white p-2">Checkout My new website</div> */}
      <div className="w-full max-sm:px-5 m-auto md:w-[60%]   ">
        <div className="flex justify-between items-center max-sm:py-5  md:p-3    " >
          <div className="font-bold">
            {/* <img src={Logo} className="w-[30px]   md:w-[70px] " /> */}
            <div class="flex justify-center items-center">
                  <div class="border-2 hover:bg-[#00d646] w-[50px] flex justify-center items-center h-[50px] rounded-full border-[#00d646]  text-white font-bold">
                    RK
                  </div>
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
              <div class="modal-dialog   ">
                <div class="modal-content ">
                  <div class="modal-header   ">
                    <h5>RkPort.</h5>
                    <button
                      type="button"
                      class="btn-close text-[20px]"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                  <div className="mt-3">
                    <nav>
                      <ul className="   text-[20px] flex flex-col gap-3 ">
                        <Link to="/">
                          <li className=" text-white p-1 w-[80%]  hover:bg-yellow-300 hover-text-black cursor-pointer bg-blue-400">
                            Home
                          </li>
                        </Link>
                        <Link to="/about">
                          <li className=" text-white p-1 w-[80%]  hover:bg-yellow-300 hover-text-black cursor-pointer bg-blue-400">
                            About
                          </li>
                        </Link>
                        <Link to="/service">
                          <li className=" text-white p-1 w-[80%]  hover:bg-yellow-300 hover-text-black cursor-pointer bg-blue-400">
                            Services
                          </li>
                        </Link>
                        <Link to="/project">
                          <li className=" text-white p-1 w-[80%]  hover:bg-yellow-300 hover-text-black cursor-pointer bg-blue-400">
                            Projects
                          </li>
                        </Link>
                        <Link to="/blog">
                          <li className=" text-white p-1 w-[80%]  hover:bg-yellow-300 hover-text-black cursor-pointer bg-blue-400">
                            Blogs
                          </li>
                        </Link>
                        <Link to="/contact">
                          <li className=" text-white p-1 w-[80%]  hover:bg-yellow-300 hover-text-black cursor-pointer bg-blue-400">
                            Contact
                          </li>
                        </Link>
                       
                      </ul>
                     
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            {/* <FcMenu /> */}
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
              <ul className=" flex  gap-4 font-thin  ">
                <Link to="/">
                  <li className="hover:text-[#00d646]  text cursor-pointer">
                    Home
                  </li>
                </Link>
                <Link to="/about">
                  <li className="hover:text-[#00d646]   text cursor-pointer">
                    About
                  </li>
                </Link>

                <Link to="/project">
                  <li className="hover:text-[#00d646]   text cursor-pointer">
                    Projects
                  </li>
                </Link>
                <Link to="/service">
                  <li className="hover:text-[#00d646]   text cursor-pointer">
                    Services
                  </li>
                </Link>
                <Link to="/blog">
                  <li className="hover:text-[#00d646]   text cursor-pointer">
                    Blogs
                  </li>
                </Link>

                <Link to="/contact">
                <li className="hover:text-[#00d646] text cursor-pointer">Contact</li>
              </Link>

                {/* <Link
                  to="/contact"
                  className="rounded-[100px] border-2 hover:text-white hover:bg-[#AF5FEF]  border-[#AF5FEF] px-7 md:px-7 text-[#AF5FEF] font-bold  py-1 mt-[-7px]"
                >
                  Contact
                </Link> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
