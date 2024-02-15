import React from "react";
import Appimage from "../Images/Apps.png";
import Appimage2 from "../Images/App design.png";
import Appimage3 from "../Images/Code design.png";
import Feedbackimg from "../Images/feedback2.png";
import Codingimg from "../Images/codingimg2.png";
import LatestBlogs from "../Pages/LatestBlogs";
import Services from "../Pages/services";
import Html from "../Images/html.png";
import css from "../Images/css-3.png";
import bootstrap from "../Images/bootstrap.png";
import git from "../Images/github.png";
import code from "../Images/code.png";
import Testimonials from "../Pages/testimonilas"
import {
  BsArrowLeftCircle,
  BsArrowLeftCircleFill,
  BsArrowRightCircle,
  BsFillPersonFill,
  BsGithub,
  BsYoutube,
} from "react-icons/bs";
import { IoLocation, IoLogoGithub, IoLogoInstagram } from "react-icons/io5";
import Footer from "./Footer";
import {
  FaFacebook,
  FaLinkedin,
  FaStar,
  FaStarHalfAlt,
  FaWhatsapp,
} from "react-icons/fa";
import Latestproject from "./Latestproject";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Topover from "./topover";
function Home() {
  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
  return (
    <>
          <Topover />

      <div className="mainhomepage z-10 ">
        <div className="mainbanner flex  justify-center ">
          <div className="w-[92%] m-auto md:w-[80%]  ">
            <div className="flex md:flex-row flex-col ">
              <div className="basis-1/2">
                <div className="">
               
                  <h1 className="text-[#827878]  font-bold text-[18px] md:text-[30px]">
                    HI, I'M
                  </h1>
                  <h1  className="maintext text-[#827878] leading-12 font-bold text-[45px] md:text-[75px]  text-[#9E22FF]">
                    Rakesh <span className="text-black">Singh</span>
                  </h1>
                  <h1 >Software Engineer</h1>
                  <h1 className="font-bold text-[20px] text-black mt-2 md:text-[30px]">
        <a to="" class="typewrite text-decoration-none text-black tracking-wider"  data-type='[ "Software Engineer", "Designer", "Developer" ]'>
          <span class="wrap"></span>
        </a>
      </h1>
              
                  <p  className="md:w-[80%] w-full text-justify " >
                    Passionate about software development, I bring one year of
                    experience in creating elegant and maintainable code. My
                    expertise includes Html, Css , Bootstrap, Tailwindcss,
                    ReactJs, Nextjs, and I am committed to staying at the
                    forefront of technological advancements.
                  </p>
                  <div className="flex gap-6 mt-8"  >
                    <button className="bg-[#AF5FEF] px-7  md:px-10 text-white rounded-[100px]  ">
                      Hire Me
                    </button>
                    <Link
                      to="/about"
                      className=" text-decoration-none rounded-[100px]   border-2 border-[#AF5FEF] hover:text-white hover:bg-[#AF5FEF]  px-7 md:px-8 text-[#AF5FEF] font-bold  py-2"
                    >
                      About Me
                    </Link>
                  </div>
                </div>
              </div>
              <br />
              <div className="basis-1/2 " >
                <div  class="relative h-full w-full flex items-center justify-center ">
                  <div class="profileCard_container relative p-8 md:p-[100px] border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50">
                    <button class="profile_item md:left-[90px] md:top-[-30px] left-[45px] -top-[4px]  absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                      <span class="block md:w-[80px] md:h-[80px] w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                        <svg viewBox="0 0 128 128">
                          <g fill="#61DAFB">
                            <circle r="11.4" cy="64" cx="64"></circle>
                            <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                          </g>
                        </svg>
                      </span>
                    </button>

                    <button class="profile_item  right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                      <span class="block md:w-[80px] md:h-[80px] w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                        <svg
                          viewBox="0 0 48 48"
                          y="0px"
                          x="0px"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
                            fill="#00acc1"
                          ></path>
                        </svg>
                      </span>
                    </button>

                    <button class="profile_item -left-4 top-20 md:top-[90px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                      <span class="block w-[40px] h-[40px] md:w-[80px] md:h-[80px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                        <svg
                          viewBox="0 0 128 128"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"
                            fill="#0acf83"
                          ></path>
                          <path
                            d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"
                            fill="#a259ff"
                          ></path>
                          <path
                            d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"
                            fill="#f24e1e"
                          ></path>
                          <path
                            d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"
                            fill="#ff7262"
                          ></path>
                          <path
                            d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"
                            fill="#1abcfe"
                          ></path>
                        </svg>
                      </span>
                    </button>

                    <button class="profile_item -right-4 md:right-[-30px] top-20 md:top-[140px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                      <span class="block w-[40px] h-[40px]  md:w-[80px] md:h-[80px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                        <img src={bootstrap} className=" p-1.5" />
                      </span>
                    </button>

                    <button class="profile_item bottom-8 -left-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                      <span class="block w-[40px] h-[40px] md:w-[80px] md:h-[80px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                        <img src={Html} className=" p-1.5" />
                      </span>
                    </button>

                    <button class="profile_item bottom-8 -right-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                      <span class="block w-[40px] h-[40px] md:w-[80px] md:h-[80px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                        <img src={css} className=" p-1.5" />
                      </span>
                    </button>

                    <button class="profile_item right-[40%] -bottom-4 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                      <span class="block w-[40px] h-[40px] md:w-[80px] md:h-[80px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                        <img src={git} className=" p-1.5" />
                      </span>
                    </button>

                    <button class="profile_item w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
                      <div class="w-full bg-white h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
                        <span class="w-20 h-20 inline-block">
                          <img src={code} className="" />
                        </span>
                      </div>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* //socialicons */}
        <div class="icon-bar bg-white z-[1000]  p-2 rounded-r-[25px] shadow-lg max-sm:hidden">
            <Link
              to="https://www.facebook.com/profile.php?id=100038099170797&mibextid=ZbWKwL"
              class="facebook"
              target="_blank"
            >
              <FaFacebookSquare />
            </Link>
            <Link to="http://wa.me/9621671657" target="blank" class="twitter">
              <IoLogoWhatsapp />
            </Link>
            <Link
              to="https://www.linkedin.com/in/rakesh-singh-154108235/"
              target="blank"
              class="linkedin"
            >
              <FaLinkedin />
            </Link>
            <Link
              to="https://github.com/Rksingh55?tab=repositories"
              class="youtube"
              target="_blank"
            >
              <BsGithub />
            </Link>
          </div>

        {/* <div className="experties max-sm:hidden"></div> */}
        <div className=" bg-[#9E22FF] md:p-12 ">
          <div className="md:w-[80%] w-auto w-[92%]">
            <div className="flex md:flex-row flex-col ">
              <div className="basis-1/2 flex item-center justify-center ">
                <div className="h-[600px] w-[500px] about1   ">
                </div>
              </div>
              <div className="basis-1/2" >
                <div className="  max-sm:p-3">
                  <h1 className="text-white font-bold text-[18px] md:text-[20px]">
                    About Me
                  </h1>
                  <h1 className=" font-bold text-[20px]  md:text-[30px]">
                    Software Engineer
                  </h1>
                  <p  className="md:w-[80%] w-full text-justify ">
                  With one year of experience in software development, I am dedicated to crafting elegant and maintainable code. My skill set encompasses HTML, CSS, Bootstrap, Tailwind CSS, ReactJS, and Next.js. I am deeply passionate about staying abreast of technological advancements and leveraging them to enhance my expertise continually. In my work, I prioritize creating intuitive and efficient user interfaces while ensuring code quality and scalability. I thrive in collaborative environments, where I can contribute my knowledge and learn from others to deliver exceptional results. My commitment to excellence drives me to seek innovative solutions to complex problems, always striving for optimal performance and usability in every project. With a solid foundation in front-end development and a keen interest in emerging technologies, I am poised to make meaningful contributions to any team or project.
                  </p>
                  <div className="flex">
                    <div className="flex gap-2">
                      <Link  to="https://www.facebook.com/profile.php?id=100038099170797&mibextid=ZbWKwL"
              target="_blank" className="flex justify-center items-center h-[50px] ml-2 w-[50px] bg-black cursor-pointer rounded-full">
                        <FaFacebook className="text-white text-[20px]" />
                      </Link>
                      <Link  to="https://github.com/Rksingh55?tab=repositories"
              target="_blank" className="flex justify-center items-center h-[50px] ml-2 w-[50px] bg-black  cursor-pointer rounded-full">
                        <FaLinkedin className="text-white text-[20px]" />
                      </Link>
                      <Link to="http://wa.me/9621671657" target="blank" className="flex justify-center items-center h-[50px] ml-2 w-[50px] bg-black  cursor-pointer rounded-full">
                        <FaWhatsapp className="text-white text-[20px]" />
                      </Link>
                      <Link   to="https://www.linkedin.com/in/rakesh-singh-154108235/"
              class="linkedin" className="flex justify-center items-center h-[50px] ml-2 w-[50px] bg-black  cursor-pointer rounded-full">
                        <BsGithub className="text-white text-[20px]" />
                      </Link>
                    </div>
                  </div>
                  <div className="flex gap-6 mt-8">
                    <button className="bg-[#AF5FEF] px-7  md:px-10 text-white rounded-[100px] ">
                      Donload CV
                    </button>
                    <Link
                      to="/about"
                      className="rounded-[100px] text-decoration-none border-2 border-[#AF5FEF] hover:text-white hover:bg-[#AF5FEF]  px-7 md:px-8 text-[#AF5FEF] font-bold  py-2"
                    >
                      {" "}
                      Know More
                    </Link>
                  </div>
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />

        <Services />

        {/* //Latestproject */}
        <Latestproject />

        {/* //blogs */}

        <LatestBlogs />

        {/* //testiomonils */}
       <Testimonials/>
       <Footer/>
      </div>
    </>
  );
}

export default Home;
