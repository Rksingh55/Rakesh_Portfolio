import React from "react";
import "./home3.css";
import {
  FaFacebook,
  FaFacebookSquare,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { IoLogoGithub, IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import Topover from "./topover";
import { BsGithub, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FcRight } from "react-icons/fc";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

// https://www.wix.com/website-template/view/html/1885?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%3Fcriteria%3DWeb%2BDeveloper%2BPortfolio%26ref%3Dcustomize_site_from_dashboard%26dashboardFirstMetaSiteId%3Da1ab5b92-8912-4eca-9b59-d98442f9e0fe&tpClick=view_button&esi=24ab80fb-d735-48f4-9055-2c0440aa7047&dashboardFirstMetaSiteId=a1ab5b92-8912-4eca-9b59-d98442f9e0fe
function Homepage3() {
  return (
    <>
      <div>
        <div>
          <Topover />
          <div className="parallax">
            <div class="  parallaxcontent">
              <div class="flex flex-col  justify-center items-center  h-screen">
                <div class="max-sm:mb-[120px]">
                  <h1  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="md:text-[100px] text-[70px] font-bold text-white">
                    I<span className="text-[#00d646]">'</span>M
                  </h1>
                  <h1  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="md:text-[100px] text-[70px] font-bold text-white">
                    RAKESH
                  </h1>
                  <h1  className="md:text-[100px] text-[70px] font-bold text-white">
                    SINGH<span className="text-[#00d646]">.</span>
                  </h1>
                  <h4 data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" class="mt-2 text-white font-thin leading-9 tracking-widest">
                    UX/UI DESIGNER & WEB
                    <br />
                    DEVELOPER
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* //socialicons */}
          <div class="icon-bar bg-[#333B50] z-[1000]  p-2 rounded-r-[25px] shadow-lg max-sm:hidden">
            <a
              href="https://www.facebook.com/profile.php?id=100038099170797&mibextid=ZbWKwL"
              class="facebook"
              target="_blank"
            >
              <FaFacebookSquare />
            </a>
            <Link href="http://wa.me/9621671657" target="blank" class="twitter">
              <IoLogoWhatsapp />
            </Link>
            <Link
              href="https://www.linkedin.com/in/rakesh-singh-154108235/"
              target="blank"
              class="linkedin"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://github.com/Rksingh55?tab=repositories"
              class="youtube"
              target="_blank"
            >
              <BsGithub />
            </Link>
          </div>

          <div className="flex justify-center items-center " data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
            <div className="md:w-[70%] w-[95%] m-auto absolute bg-[#333B50] md:p-[130px] p-[30px]">
              <div className="" data-aos="fade-down-left">
                <div class="flex justify-center items-center">
                  <div class="border-r-[5px] hover:bg-[#00d646] w-[80px] flex justify-center items-center h-[80px] rounded-full border-[#00d646] px-8 py-3 text-white font-bold text-4xl mb-12 md:mb-5">
                    RK
                  </div>
                </div>

                <h3 className="text-white font-thin tracking-tightest leading-9">
                  Passionate about software development, I bring one year of
                  experience in creating elegant and maintainable code. My
                  expertise includes Html, Css , Bootstrap, Tailwindcss,
                  ReactJs, Nextjs, and I am committed to staying at the
                  forefront of technological advancements.
                </h3>
                <div className="flex justify-center mt-[50px]">
                  <button className="border-2 hover:bg-[#00d646] hover:text-white border-[#00d646] px-10 py-3 text-white">
                    <a
                      href="/Rakeshupdated9.pdf"
                      download="Rakeshupdated9.pdf"
                      className="text-decoration-none text-[#00d646] hover:text-white"
                    >
                      Download Resume
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="parallax2">
            <div className="  parallax2content ">
              <div className="flex justify-center  items-center text-white h-screen">
                <div className="mt-[300px] flex gap-5   " data-aos="zoom-in-up">
                  <div className="flex justify-center items-center">
                    <h1 className="text-[80px] text-[#bec785]">01</h1>
                  </div>
                  <div>
                    <h1>PROFESSIONAL</h1>
                    <h3>MY KNOWLEDGE LEVEL IN SOFTWARE</h3>
                  </div>
                </div>
              </div>
              <div>
                <div className=" p-2 md:w-[70%] m-auto rounded-md text-white">
                  <div className="">
                    <h6>HTML</h6>
                    <div class="progress bg-transparent h-10 mb-2">
                      <div class="progress-bar bg-[#00d646] w-[60%]">80%</div>
                    </div>
                  </div>

                  <div>
                    <h6>CSS</h6>
                    <div class="progress bg-transparent h-10 mb-2">
                      <div class="progress-bar bg-[#00d646] w-[70%]">80%</div>
                    </div>
                  </div>

                  <div>
                    <h6>Javascript</h6>
                    <div
                      class="progress bg-transparent mb-2"
                      role="progressbar"
                      aria-label="Warning example"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div class="progress-bar bg-[#00d646] w-[50%]">70%</div>
                    </div>
                  </div>

                  <div>
                    <h6>Bootstrap</h6>
                    <div
                      class="progress bg-transparent mb-2"
                      role="progressbar"
                      aria-label="Danger example"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div class="progress-bar bg-[#00d646] w-[60%]">80%</div>
                    </div>
                  </div>

                  <div>
                    <h6>TailwindCss</h6>
                    <div
                      class="progress bg-transparent mb-2"
                      role="progressbar"
                      aria-label="Danger example"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div class="progress-bar bg-[#00d646] w-[50%]">80%</div>
                    </div>
                  </div>

                  <div>
                    <h6>ReactJs</h6>
                    <div
                      class="progress bg-transparent mb-2"
                      role="progressbar"
                      aria-label="Danger example"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div class="progress-bar bg-[#00d646] w-[60%]">60%</div>
                    </div>
                  </div>

                  <div>
                    <h6>NextJs</h6>
                    <div
                      class="progress bg-transparent mb-2"
                      role="progressbar"
                      aria-label="Danger example"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div class="progress-bar bg-[#00d646] w-[60%]">60%</div>
                    </div>
                  </div>

                  <div>
                    <h6>Git & Github</h6>
                    <div
                      class="progress bg-transparent mb-2"
                      role="progressbar"
                      aria-label="Danger example"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div class="progress-bar bg-[#00d646] w-[80%]">80%</div>
                    </div>
                  </div>
                </div>
              </div>

              <br />
              <br />
              <br />
            </div>
          </div>
          <div className="parallax3">
            <div className="md:h-[3200px] h-[4000px] sss ">
              <div className="flex justify-center  items-center text-white  py-[100px]">
                <div className=" flex gap-5 " data-aos="zoom-in-up">
                  <div className="flex justify-center  items-center">
                    <h1 className="text-[80px] text-[#bec785]">02</h1>
                  </div>
                  <div>
                    <h1 className="text-white"> PROJECT</h1>
                    <h3>MY LATEST PROJECT</h3>
                    <Link
                      to="/project"
                      className="tracking-widest text-[#bec785] text-decoration-none font-semibold flex gap-1"
                    >
                      See All
                      <MdKeyboardDoubleArrowRight className="mt-1" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
              data-aos="fade-up"
     data-aos-duration="3000"  className="flex md:w-[70%] justify-center gap-2 flex-col md:flex-row
          m-auto"
              >
                <div  class="h-[300px]  cursor-pointer w-[340px] m-auto bg-red-300 overflow-hidden">
                  <img
                    class="h-[300px] w-[340px] object-cover animate-zoom-infinite"
                    src="https://img.freepik.com/free-photo/medium-shot-woman-working-laptop_23-2150323516.jpg?size=626&ext=jpg&uid=R136266302&ga=GA1.1.1882344098.1687350271&semt=sph"
                    alt="Zooming Image"
                  />
                </div>
                <div class="h-[300px]  cursor-pointer w-[340px] m-auto bg-red-300 overflow-hidden">
                  <img
                    class="h-[300px] w-[340px] object-cover animate-zoom-infinite"
                    src="https://img.freepik.com/free-photo/high-angle-man-working-laptop_23-2150287639.jpg?size=626&ext=jpg&uid=R136266302&ga=GA1.1.1882344098.1687350271&semt=sph"
                    alt="Zooming Image"
                  />
                </div>
                <div class="h-[300px]  cursor-pointer w-[340px] m-auto bg-red-300 overflow-hidden">
                  <img
                    class="h-[300px] w-[340px] object-cover animate-zoom-infinite"
                    src="https://img.freepik.com/free-photo/medium-shot-woman-working-computer_23-2150287666.jpg?size=626&ext=jpg&uid=R136266302&ga=GA1.1.1882344098.1687350271&semt=sph"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-center  items-center text-white  py-[100px]">
                  <div className=" flex gap-5 " data-aos="zoom-in-up">
                    <div className="flex justify-center  items-center">
                      <h1 className="text-[80px] text-[#bec785]">03</h1>
                    </div>
                    <div className="text-black">
                      <h1 className="text-white">Experience</h1>
                      <h3 className="text-white">Talk About Experience</h3>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-row flex-col">
                  <div className="basis-1/2 border-r-[5px]  border-green-400 ">
                    <div className="flex md:flex-row flex-col max-sm:p-3">
                      <div className="basis-1/2 max-sm:hidden"></div>
                      <div className="basis-1/2 ">
                        <div data-aos="zoom-in-left" className="md:mr-12 md:mt-[300px] flex flex-col justify-end items-end ">
                          <h5 className="text-[#00d646]">
                            March 2023 - June 2023
                          </h5>
                          <h4 className="text-white">
                            Aqusag Technologies India
                          </h4>
                          <h6 className="text-white">frontend Web Developer</h6>
                          <p className="text-justify">
                            As a frontend developer, my experience primarily
                            revolves around crafting immersive user experiences
                            within web applications. At EasyhaiOnline, I played
                            a pivotal role in developing and enhancing an
                            education-based platform tailored for selling
                            courses and facilitating online classes for
                            students.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/2  max-sm:p-3 ">
                    <div data-aos="zoom-in-right" className="md:w-[40%] w-full md:ml-12 mt-12 text-start">
                      <h5 className="text-[#00d646]">July 2023 - Feb 2024</h5>
                      <h4 className="text-white"> EasyhaiOnline</h4>
                      <h6 className="text-white">frontend Web Developer</h6>
                      <p className="text-justify">
                        As a frontend developer, my experience primarily
                        revolves around crafting immersive user experiences
                        within web applications. At EasyhaiOnline, I played a
                        pivotal role in developing and enhancing an
                        education-based platform tailored for selling courses
                        and facilitating online classes for students.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-center  items-center text-white  py-[100px]">
                  <div className=" flex gap-5 " data-aos="zoom-in-up">
                    <div className="flex justify-center  items-center">
                      <h1 className="text-[80px] text-[#bec785]">04</h1>
                    </div>
                    <div className="text-black">
                      <h1 className="text-white">Education</h1>
                      <h3 className="text-white">Talk About My Education</h3>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-row flex-col">
                  <div className="basis-1/2 border-r-[5px]  border-green-400 ">
                    <div className="flex md:flex-row flex-col max-sm:p-3">
                      <div className="basis-1/2 max-sm:hidden"></div>
                      <div className="basis-1/2 ">
                        <div data-aos="zoom-in-left" className="md:mr-12 md:mt-[300px] flex flex-col justify-end items-end ">
                          <h5 className="text-[#00d646]">2017-2019</h5>
                          <h4 className="text-white">Intermediate</h4>
                          <h6 className="text-white">
                            Cooperative Inter College Gorakhpur
                          </h6>
                          <p className="text-justify">
                            I completed my Intermediate from Cooperative Inter
                            college which located in Gorakhpur UttarPardesh.
                            Throughout my academic journey, I delved into
                            various facets of technology, honing my skills and
                            knowledge in the field.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/2  max-sm:p-3 ">
                    <div data-aos="zoom-in-right" className="md:w-[40%] w-full md:ml-12 mt-12 text-start">
                      <h5 className="text-[#00d646]">2019-2023</h5>
                      <h4 className="text-white">B.tech</h4>
                      <h6 className="text-white">Computer Science Engineer</h6>

                      <p className="text-justify">
                        I completed my Bachelor of Technology degree at Rajshree
                        Institute of Management and Technology located in
                        Bareilly. Throughout my academic journey, I delved into
                        various facets of technology, honing my skills and
                        knowledge in the field.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-row flex-col">
                  <div className="basis-1/2 border-r-[5px]  border-green-400 "></div>
                  <div className="basis-1/2  max-sm:p-3 ">
                    <div data-aos="zoom-in-left" className="md:w-[40%] w-full md:ml-12 mt-12 text-start">
                      <h5 className="text-[#00d646]">2015-2017</h5>
                      <h4 className="text-white">High School</h4>
                      <h6 className="text-white">
                        {" "}
                        Ramjatan Inter College Gorakhpur
                      </h6>
                      <p className="text-justify">
                        I completed my High School from Ramjatan Inter college
                        which located in Gorakhpur UttarPardesh. Throughout my
                        academic journey, I delved into various facets of
                        technology, honing my skills and knowledge in the field.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* //contact */}
          <div className="flex justify-center items-center ">
            <div className="md:w-[70%] w-[95%] m-auto absolute bg-[#333B50] ">
              <div className="flex  justify-beteen md:p-[100px] p-[20px] md:flex-row flex-col">
                <div data-aos="zoom-in" className="basis-1/2 text-white">
                  <h3 className="max-sm:py-2">CONTACT</h3>
                  <p className="text-white md:w-[80%] text-justify w-full ">
                    I'M a Passionate about software development, I bring one
                    year of experience in creating elegant and maintainable
                    code. My expertise includes Html, Css , Bootstrap,
                    Tailwindcss, ReactJs, Nextjs, and I am committed to staying
                    at the forefront of technological advancements.
                  </p>
                  <p className="text-white ">rakeshecon@gmail.com</p>
                  <p className="text-white">
                    Tel: +917310307513, +91 9621671657
                  </p>
                </div>
                <div className="basis-1/2">
                  <form data-aos="zoom-out" className="flex gap-2 flex-col">
                    <div className="flex gap-2 md:flex-row flex-col ">
                      <input placeholder="Name" className="px-3 py-3" />

                      <input placeholder="Email" className="px-3 py-3" />
                    </div>
                    <input placeholder="Number" className="px-3 py-3  w-full" />
                    <textarea
                      placeholder="Messege"
                      className="px-3 py-3  w-full"
                    />
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
                      href="https://www.facebook.com/profile.php?id=100038099170797&mibextid=ZbWKwL"
                      target="blank"
                    >
                      <FaFacebook className="text-white text-[30px]" />
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
          
          <div className=" text-center p-6 bg-[#333B50] "  >
        
                <p >©copyright 2024 Design & Deveoped By Rakesh Singh</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage3;
