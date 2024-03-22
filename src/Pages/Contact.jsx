import React from "react";
import Header from "./Header";
import contact from "../Images/conatct.png";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { BsBehance, BsTelephone } from "react-icons/bs";
function Contact() {
  return (
    <div className="conatctpage">
      <div className="parallax3">
        <div className="md:h-[1000px] h-[1700px] sss ">
          <div className="flex justify-center  items-center text-white  py-[80px]">
            <div className=" flex gap-5 ">
              <div className="flex justify-center  items-center">
                <h1 className="text-[80px] text-[#bec785]">05</h1>
              </div>
              <div>
                <h1 className="text-white"> CONTACT</h1>
                <h3>Fill The Form </h3>
              </div>
            </div>
          </div>
          <div
            className="flex md:w-[70%] justify-center gap-2 flex-col md:flex-row
          m-auto"
          >
            <div class="h-[300px] w-[340px] m-auto overflow-hidden">
              <img
                class="h-[300px] w-[340px] object-cover animate-zoom-infinite"
                src="https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041845.jpg?size=626&ext=jpg&uid=R136266302&ga=GA1.1.1882344098.1687350271&semt=ais"
                alt="Zooming Image"
              />
            </div>
            <div class="h-[300px] w-[340px] m-auto overflow-hidden">
              <img
                class="h-[300px] w-[340px] object-cover animate-zoom-infinite"
                src="https://img.freepik.com/free-photo/businesswoman-seminar-drawing-graph_53876-101891.jpg?size=626&ext=jpg&uid=R136266302&ga=GA1.1.1882344098.1687350271&semt=ais"
                alt="Zooming Image"
              />
            </div>
            <div class="h-[300px] w-[340px] m-auto overflow-hidden">
              <img
                class="h-[300px] w-[340px] object-cover animate-zoom-infinite"
                src="https://img.freepik.com/free-vector/internet-things-smart-wrist-multimedia-watch-gadget-hand_1284-10935.jpg?size=626&ext=jpg&uid=R136266302&ga=GA1.1.1882344098.1687350271&semt=ais"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <div className="md:w-[70%] w-[95%] m-auto absolute bg-[#333B50] ">
          <div className="flex  justify-beteen md:p-[100px] p-[20px] md:flex-row flex-col">
          <div data-aos="zoom-in" className="basis-1/2 text-white">
                  <h3 className="max-sm:py-2">CONTACT</h3>
                  <p className=" md:w-[80%]  w-full ">
                  Fill out the form for any inquiries or doubts, and feel free to send me a message. If you're pressed for time and prefer not to fill out the form, you can easily reach me by calling my contact number. Otherwise, leave an email, and I'll get back to you promptly.
                  </p>
                  <p className="text flex gap-2">
                  <TfiEmail className="mt-1"/>
                  rakeshecon@gmail.com</p>
                  <p className="text flex gap-2">
                  <BsTelephone className="mt-1"/>

                   +917310307513,  9621671657
                  </p>
                </div>
            <div className="basis-1/2">
              <form className="flex gap-2 flex-col">
                <div className="flex gap-2 md:flex-row flex-col  ">
                  <input placeholder="Name" className="px-3 py-3  w-full" />

                  <input placeholder="Email" className="px-3 py-3  w-full" />
                </div>
                <input placeholder="Number" className="px-3 py-3  w-full" />
                <textarea placeholder="Messege" className="px-3 py-3  w-full focus:outline-none" />
                <button className="px-3 py-3  bg-[#00d646] text-white ">
                  Send
                </button>
              </form>
            </div>
          </div>
          <div
            className="flex  items-center justify-center md:mb-12 md:p-3  py-3 "
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="flex gap-3">
              <div className="flex justify-center items-center  cursor-pointer rounded-full">
                <a
                  href="https://www.behance.net/rakeshsingh131"
                  target="blank"
                >
                  <BsBehance className="text-white text-[30px]" />
                </a>
              </div>
              <div className="flex justify-center items-center  cursor-pointer rounded-full">
                <a
                  href="https://www.instagram.com/rakeshksingh0"
                  target="blank"
                >
                  <IoLogoInstagram className="text-white text-[30px]" />
                </a>
              </div>
              <div className="flex justify-center items-center  cursor-pointer rounded-full">
                <a href="http://wa.me/9621671657" target="blank">
                  <FaWhatsapp className="text-white text-[30px]" />
                </a>
              </div>
              <div className="flex justify-center items-center  cursor-pointer rounded-full">
                <a
                  href="https://www.linkedin.com/in/rakesh-singh-154108235"
                  target="blank"
                >
                  <FaLinkedin className="text-white text-[30px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="parallax4 "></div>

      {/* //footer */}
      <div className=" text-center p-6 bg-[#333B50]">
        <p>©copyright 2024 Design & Deveoped By Rakesh Singh</p>
      </div>
    </div>
  );
}

export default Contact;
