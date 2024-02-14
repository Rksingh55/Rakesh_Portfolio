import React from "react";
import { BsAlarmFill } from "react-icons/bs";
import { GoCodeReview } from "react-icons/go";
import { FcPicture, FcSmartphoneTablet } from "react-icons/fc";
import Header from "./Header";
function Latestproject() {
  const Array = [{}, {}, {}];
  return (
    <div className="">
      <Header Name="Services" />
     
      <div style={{backgroundColor:"whitesmoke"}} className="flex-wrap mt-3  flex md:flex-row max-sm:bg-white md:bg-[#9E22FF] rounded-[20px] md:px-10 flex-col justify-between md:w-[80%] m-auto w-[95%] ">
      <div className="flex md:flex-row flex-wrap justify-center  gap-2 mt-5   ">
          <div  data-aos="zoom-in" className="h-fit  w-full  md:w-[32%] duration-500 hover:-translate-y-2 hover:shadow-xl shadow-gray-800 cursor-pointer bg-blue-400 rounded-md p-6 flex flex-col justify-between">
            <div className="text-yellow-500  bg-white rounded-full h-[100px] w-[100px] m-auto">
              <div className="flex items-center justify-center h-full">
                <FcPicture className="w-10 h-10" />
              </div>
            </div>
            <div className="text-black">
              <h3 className="text-2xl font-bold mb-2 text-center p-2">
                UI/UX Design
              </h3>
              <p className="text-black line-clamp-6">
                Transform your brand with our UI/UX design services. We
                specialize in creating user-centric interfaces, responsive web
                designs, and interactive prototypes. Our designs are not just
                visually stunning but also focused on enhancing usability.
                Elevate your digital presence with our cutting-edge and
                collaborative design solutions.
              </p>
            </div>
            <button  className="bg-gray-800 text-white hover:bg-gray-700 rounded-full py-2 px-6">
              Learn More
            </button>
          </div>
          <div  data-aos="zoom-in" className="h-fit  w-full  md:w-[32%] duration-500 hover:-translate-y-2 hover:shadow-xl shadow-gray-800 cursor-pointer bg-yellow-300 rounded-md p-6 flex flex-col justify-between">
            <div className="text-yellow-500 bg-white rounded-full h-[100px] w-[100px] m-auto">
              <div className="flex items-center justify-center h-full">
                <GoCodeReview className="w-10 h-10" />
              </div>
            </div>
            <div className="text-black">
              <h3 className="text-2xl font-bold mb-2 text-center p-2">
                Website Developments
              </h3>
              <p className="text-black">
                Crafting tailored websites that stand out. Our website
                development services encompass intuitive design, robust
                functionality, and responsive layouts. From dynamic business
                sites to engaging portfolios, we blend creativity with
                technology to bring your vision to life. Elevate your online
                presence with our seamless and impactful web development
                solutions.
              </p>
            </div>
            <button className="bg-gray-800 text-white hover:bg-gray-700 rounded-full py-2 px-6">
              Learn More
            </button>
          </div>
          <div  data-aos="zoom-in" className="h-fit  w-full  md:w-[32%] duration-500 hover:-translate-y-2 hover:shadow-xl shadow-gray-800 cursor-pointer w-[325px] bg-green-300 rounded-md p-6 flex flex-col justify-between">
            <div className="text-yellow-500 bg-white rounded-full h-[100px] w-[100px] m-auto">
              <div className="flex items-center justify-center h-full ">
                <FcSmartphoneTablet className="w-10 h-10 "  />
              </div>
            </div>
            <div className="text-black">
              <h3 className="text-2xl font-bold mb-2 text-center p-2">
                App Developments
              </h3>
              <p className="text-black line-clamp-6">
                Unlock innovation with our app development expertise. We
                specialize in creating robust and user-friendly mobile
                applications tailored to your unique needs. From concept to
                launch, we leverage the latest technologies to build scalable
                and feature-rich apps. Transform your ideas into powerful,
                engaging experiences with our comprehensive app development
                services.
              </p>
            </div>
            <button className="bg-gray-800 text-white hover:bg-gray-700 rounded-full py-2 px-6">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex md:flex-row flex-wrap justify-center  gap-2 mt-5   ">
          <div   data-aos="zoom-in" className="h-fit  w-full  md:w-[32%] duration-500 hover:-translate-y-2 hover:shadow-xl shadow-gray-800 cursor-pointer bg-blue-400 rounded-md p-6 flex flex-col justify-between">
            <div className="text-yellow-500  bg-white rounded-full h-[100px] w-[100px] m-auto">
              <div className="flex items-center justify-center h-full">
                <FcPicture className="w-10 h-10" />
              </div>
            </div>
            <div className="text-black">
              <h3 className="text-2xl font-bold mb-2 text-center p-2">
                UI/UX Design
              </h3>
              <p className="text-black line-clamp-6">
                Transform your brand with our UI/UX design services. We
                specialize in creating user-centric interfaces, responsive web
                designs, and interactive prototypes. Our designs are not just
                visually stunning but also focused on enhancing usability.
                Elevate your digital presence with our cutting-edge and
                collaborative design solutions.
              </p>
            </div>
            <button  className="bg-gray-800 text-white hover:bg-gray-700 rounded-full py-2 px-6">
              Learn More
            </button>
          </div>
          <div  data-aos="zoom-in" className="h-fit  w-full  md:w-[32%] duration-500 hover:-translate-y-2 hover:shadow-xl shadow-gray-800 cursor-pointer bg-yellow-300 rounded-md p-6 flex flex-col justify-between">
            <div className="text-yellow-500 bg-white rounded-full h-[100px] w-[100px] m-auto">
              <div className="flex items-center justify-center h-full">
                <GoCodeReview className="w-10 h-10" />
              </div>
            </div>
            <div className="text-black">
              <h3 className="text-2xl font-bold mb-2 text-center p-2">
                Website Developments
              </h3>
              <p className="text-black">
                Crafting tailored websites that stand out. Our website
                development services encompass intuitive design, robust
                functionality, and responsive layouts. From dynamic business
                sites to engaging portfolios, we blend creativity with
                technology to bring your vision to life. Elevate your online
                presence with our seamless and impactful web development
                solutions.
              </p>
            </div>
            <button className="bg-gray-800 text-white hover:bg-gray-700 rounded-full py-2 px-6">
              Learn More
            </button>
          </div>
          <div  data-aos="zoom-in"   className="h-fit  w-full  md:w-[32%] duration-500 hover:-translate-y-2 hover:shadow-xl shadow-gray-800 cursor-pointer w-[325px] bg-green-300 rounded-md p-6 flex flex-col justify-between">
            <div className="text-yellow-500 bg-white rounded-full h-[100px] w-[100px] m-auto">
              <div className="flex items-center justify-center h-full ">
                <FcSmartphoneTablet className="w-10 h-10 "  />
              </div>
            </div>
            <div className="text-black">
              <h3 className="text-2xl font-bold mb-2 text-center p-2">
                App Developments
              </h3>
              <p className="text-black line-clamp-6">
                Unlock innovation with our app development expertise. We
                specialize in creating robust and user-friendly mobile
                applications tailored to your unique needs. From concept to
                launch, we leverage the latest technologies to build scalable
                and feature-rich apps. Transform your ideas into powerful,
                engaging experiences with our comprehensive app development
                services.
              </p>
            </div>
            <button className="bg-gray-800 text-white hover:bg-gray-700 rounded-full py-2 px-6">
              Learn More
            </button>
          </div>
        </div>
        <br />
        <br />
      </div>
      <br />
      <br />
    </div>
  );
}

export default Latestproject;
