import React from "react";
import Feedbackimg from "../Images/project.png";
import { Link } from "react-router-dom";
function Latestproject() {
  return (
    <div className="md:bg-[#9E22FF]  ">
     <div className=" text-center p-4   md:text-white">
        <h1 className="heading font-bold">Latest Project</h1>
        <h5>Checkout My Latest Projects</h5>

      </div>
      <div className="flex md:flex-row bg-white md:rounded-[20px] md:px-10 flex-col justify-between w-full md:w-[80%] m-auto w-[95%] ">
        <div className="basis-[40%]  m-1 max-sm:p-4 ">
          <img src={Feedbackimg} className="rounded-[20px]" />
          <div  class="group project1 flex  flex-col justify-start items-start gap-2 w-full h-fit duration-500 relative rounded-lg p-3 bg-blue-300 hover:-translate-y-2 hover:shadow-xl shadow-gray-800 cursor-pointer">
            <div class="">
              <h2 class="text-2xl font-bold mb-2 text-black">
                Rk Assignments Blogging website
              </h2>
              <p class="text-black line-clamp-3">
                Rk assignments is Blogging website its purpose for create blogs
                by multiple user and everyone can seen blog and react on blogs.
                Technologies Used - ReactJs, Bootstrap, TailwindCss, RestApi ,
                Firebase etc.
              </p>
            </div>
            <Link target="blank"
              to="https://rk-assisments.vercel.app/" className=" text-decoration-none bg-gray-800 text-white hover:bg-gray-700 rounded-full py-2 px-6">
            Go Live
            </Link>
           
          </div>
          <br/>
        </div>

        <div className="basis-[55%] max-sm:p-4 md:m-1  flex justify-center">
          <div className="md:w-[90%] w-full text-start ">
            <div className="flex gap-2 md:mt-4 mb-4  flex-col">
              <div className="  ">
                <div  class="group z-[1] flex flex-col justify-start items-start gap-2 w-full h-fit duration-500 relative rounded-lg p-3 bg-green-300 hover:-translate-y-2 hover:shadow-xl shadow-gray-800 cursor-pointer">
                  <div class="relative z-10">
                    <h2 class="text-2xl font-bold mb-2 text-black">
                      EasyhaiOnline
                    </h2>
                    <p class="text-black line-clamp-4">
                      This is Education based website for selling courses and
                      online classes for students. In this website i worked on
                      import module like blogs, courses, test, assignments,
                      payment doubt etc Technologies Used - NextJs, TailwindCss
                      ,Redux Toolkit
                    </p>

                    <Link  target="blank"
                      to="https://test-eho2.vercel.app/" className="text-decoration-none bg-gray-800 text-white hover:bg-gray-700 rounded-full py-2 px-6">
              Go Live
            </Link>
                  
                  </div>
                </div>
              </div>
              <div  class="group flex flex-col md:mt-3 justify-start items-start gap-2 w-full h-fit duration-500 relative rounded-lg p-4 bg-orange-300 hover:-translate-y-2 hover:shadow-xl shadow-gray-800 cursor-pointer">
                <div class="">
                  <h2 class="text-2xl font-bold mb-2 text-black">
                    BoroBazar
                  </h2>
                  <p class="text-black line-clamp-3">
                    This is ecommerce website for shoping grocery and vegetable
                    and the delievery on there place.
                     Technologies Used - NextJs,
                    TailwindCss, RestApi, ReduxToolkit etc
                  </p>
                </div>
                <Link target="blank"
                  to="https://borobazar-ecommerce.vercel.app/" className=" text-decoration-none bg-gray-800 text-white hover:bg-gray-700 rounded-full py-2 px-6">
            Go Live
            </Link>
                
              </div>
              
            </div>

            {/* <div className="flex gap-2 justify-end">
              <div className="flex justify-center items-center h-[50px] ml-2 w-[50px] border-2 border-[#9E22FF] hover:bg-[#9E22FF]  rounded-full cursor-pointer text-[#9E22FF] hover:text-white">
                <BsArrowLeftCircleFill className=" text-[20px]" />
              </div>
              <div className="flex justify-center items-center h-[50px] ml-2 w-[50px] bg-[#9E22FF] cursor-pointer rounded-full">
                <BsArrowRightCircle className="text-white text-[20px]" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Latestproject;
