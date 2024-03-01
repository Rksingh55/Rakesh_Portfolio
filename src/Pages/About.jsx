import React from "react";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="bg-white ">
      <div className="mt-4 max-sm:bg-white bg-white rounded-[10px] md:w-[80%] m-auto w-full ">
        <div className="flex md:flex-row flex-col ">
          <div
            className="basis-1/2 flex item-center justify-center "
            data-aos="fade-right"
          >
            <div className=" ">
              <div className="h-[600px] w-[500px] about1   "></div>
            </div>
          </div>
          <div className="basis-1/2" data-aos="fade-left">
            <div className="  max-sm:p-3">
              <h1 className="text-blue-400 mt-2 font-bold text-[18px] md:text-[20px]">
                About Me
              </h1>
              <h1 className=" font-bold text-[20px]  md:text-[30px]">
                Software Engineer
              </h1>
              <p className="md:w-[80%] w-full text-justify ">
                With one year of experience in software development, I am
                dedicated to crafting elegant and maintainable code. My skill
                set encompasses HTML, CSS, Bootstrap, Tailwind CSS, ReactJS, and
                Next.js. I am deeply passionate about staying abreast of
                technological advancements and leveraging them to enhance my
                expertise continually. In my work, I prioritize creating
                intuitive and efficient user interfaces while ensuring code
                quality and scalability. I thrive in collaborative environments,
                where I can contribute my knowledge and learn from others to
                deliver exceptional results. My commitment to excellence drives
                me to seek innovative solutions to complex problems, always
                striving for optimal performance and usability in every project.
                With a solid foundation in front-end development and a keen
                interest in emerging technologies, I am poised to make
                meaningful contributions to any team or project.
              </p>
              <div className="flex">
                <div className="flex gap-2">
                  <div className="flex justify-center items-center h-[50px] ml-2 w-[50px] bg-black cursor-pointer rounded-full">
                    <FaFacebook className="text-white text-[20px]" />
                  </div>
                  <div className="flex justify-center items-center h-[50px] ml-2 w-[50px] bg-black  cursor-pointer rounded-full">
                    <IoLogoInstagram className="text-white text-[20px]" />
                  </div>
                  <div className="flex justify-center items-center h-[50px] ml-2 w-[50px] bg-black  cursor-pointer rounded-full">
                    <FaWhatsapp className="text-white text-[20px]" />
                  </div>
                  <div className="flex justify-center items-center h-[50px] ml-2 w-[50px] bg-black  cursor-pointer rounded-full">
                    <FaLinkedin className="text-white text-[20px]" />
                  </div>
                </div>
              </div>
              <div className="flex gap-6 mt-8">
                <button className="bg-[#AF5FEF] px-7 py-2.5 md:px-10 text-white rounded-[100px] ">
                  Donload CV
                </button>
              </div>
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>

        <div>
          <div className="text-end md:text-center p-4 ">
            <h1 className="heading font-bold">Technical Skills</h1>
            <h5>Lets Checkout My Technical Skills</h5>
          </div>

          <div className=" p-2 md:w-[80%] m-auto rounded-md" data-aos="zoom-in">
            <div>
              <h6>HTML/HTML5</h6>
              <div
                class="progress h-10 mb-2"
                role="progressbar"
                aria-label="Success example"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar bg-success w-[80%] ">80%</div>
              </div>
            </div>

            <div>
              <h6>CSS3/CSS4</h6>
              <div
                class="progress mb-2"
                role="progressbar"
                aria-label="Info example"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar bg-info text-dark w-[80%]">80%</div>
              </div>
            </div>

            <div>
              <h6>Javascript</h6>
              <div
                class="progress mb-2"
                role="progressbar"
                aria-label="Warning example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar bg-warning text-dark w-[70%] ">
                  70%
                </div>
              </div>
            </div>

            <div>
              <h6>Bootstrap</h6>
              <div
                class="progress mb-2"
                role="progressbar"
                aria-label="Danger example"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar bg-danger w-[80%]">80%</div>
              </div>
            </div>
            <div>
              <h6>TailwindCss</h6>
              <div
                class="progress mb-2"
                role="progressbar"
                aria-label="Danger example"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar bg-blue-500 w-[80%]">80%</div>
              </div>
            </div>
            <div>
              <h6>ReactJs</h6>
              <div
                class="progress mb-2"
                role="progressbar"
                aria-label="Danger example"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar bg-warning w-[60%]">60%</div>
              </div>
            </div>
            <div>
              <h6>NextJs</h6>
              <div
                class="progress mb-2"
                role="progressbar"
                aria-label="Danger example"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar bg-blue-500 w-[60%]">60%</div>
              </div>
            </div>
            <div>
              <h6>Git & Github</h6>
              <div
                class="progress mb-2"
                role="progressbar"
                aria-label="Danger example"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar bg-info w-[80%]">80%</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-start md:text-center p-4 ">
            <h1 className="heading font-bold">Experience</h1>
            <h5>My Professional Experience</h5>
          </div>
          <div className="flex gap-4 md:p-3">
            <div className="md:basis-[70%] w-full " data-aos="zoom-in-right">
              <div className="flex gap-2 md:flex-row flex-col ">
                <div className="bg-green-500 text-white md:w-[120px] md:h-[100px] w-[100px] h-[100px] rounded-full ">
                  <div className="flex justify-center items-center font-bold w-[100px] h-[100px] ">
                    EHO
                  </div>
                </div>
                <div class="group z-[1] flex flex-col justify-start items-start gap-2 w-full h-fit duration-500 relative rounded-lg p-4  border-b-[8px] border-blue-500 hover:border-red-500 hover:-translate-y-2 hover:shadow-xl shadow-gray-800 cursor-pointer">
                  <div class="relative z-10">
                    <h2 class="text-2xl font-bold mb-2 text-black">
                      EasyhaiOnline
                    </h2>
                    <div className="bg-white rounded-md p-3 mb-2">
                      {" "}
                      <h6>Total Work Duration : 7 Months</h6>
                      <h6>Date : 10 July 2023 to Present</h6>
                      <h6>Destination : frontend developer</h6>
                      <h6>
                        Technologies : HTML, CSS, Javascript, Bootstrap,
                        ReactJs, NextJs, TailwindCss{" "}
                      </h6>
                    </div>
                    <p class="text-black text-justify">
                      As a frontend developer, my experience primarily revolves
                      around crafting immersive user experiences within web
                      applications. At EasyhaiOnline, I played a pivotal role in
                      developing and enhancing an education-based platform
                      tailored for selling courses and facilitating online
                      classes for students.
                      <li>
                        My responsibilities encompassed implementing various
                        crucial modules such as blogs, courses, tests,
                        assignments, and payment systems. Each module required
                        meticulous attention to detail to ensure seamless
                        functionality and intuitive user interfaces.
                      </li>
                      <li>
                        Utilizing cutting-edge technologies such as Next.js,
                        Tailwind CSS, and Redux Toolkit, I leveraged the power
                        of modern frontend frameworks and libraries to
                        streamline development processes and optimize
                        performance.
                      </li>
                      <li>
                        Throughout the development lifecycle, I remained
                        committed to delivering high-quality solutions that
                        prioritize user satisfaction and engagement. From
                        conceptualization to implementation, I collaborated
                        closely with cross-functional teams to translate
                        requirements into tangible features and functionalities.
                      </li>
                      <li>
                        By combining technical expertise with a passion for
                        user-centric design, I contributed to creating an
                        interactive and dynamic platform that empowers students
                        and educators alike in their pursuit of knowledge and
                        learning. My experience at EasyhaiOnline has further
                        honed my skills as a frontend developer, equipping me
                        with invaluable insights and expertise to tackle future
                        challenges in the ever-evolving landscape of web
                        development.
                      </li>
                    </p>

                    <Link
                      target="blank"
                      to="https://test-eho2.vercel.app/"
                      className="bg-gray-800 text-white text-decoration-none hover:bg-gray-700 rounded-full py-2 px-6"
                    >
                      Website Url
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:basis-[30%] "></div>
          </div>
          <div className="flex gap-4 md:p-3">
            <div className=" md:basis-[30%] max-sm:hidden "></div>
            <div className="md:basis-[70%] w-full " data-aos="zoom-in-left">
              <div className="flex gap-2 md:flex-row flex-col">
                <div className="bg-red-400 text-white md:w-[120px] md:h-[100px] w-[100px] h-[100px]  rounded-full ">
                  <div className="flex justify-center items-center font-bold w-[100px] h-[100px] ">
                    ATI
                  </div>
                </div>
                <div class="group z-[1] flex flex-col justify-start items-start gap-2 w-full h-fit duration-500 relative rounded-lg p-4  border-b-[8px] border-blue-500 hover:border-red-500hover:-translate-y-2 hover:shadow-xl shadow-gray-800 cursor-pointer">
                  <div class="relative z-10">
                    <h2 class="text-2xl font-bold mb-2 text-black">
                      Aqusag Technologies India
                    </h2>
                    <div className="bg-white rounded-md p-3 mb-2">
                      {" "}
                      <h6>Total Work Duration : 4 Months</h6>
                      <h6>Date : March 2023 to June</h6>
                      <h6>Destination : frontend developer</h6>
                      <h6>Technologies : HTML, CSS, Javascript, Bootstrap, </h6>
                    </div>
                    <p class="text-black text-justify">
                      As a frontend developer, my experience primarily revolves
                      around crafting immersive user experiences within web
                      applications. At EasyhaiOnline, I played a pivotal role in
                      developing and enhancing an education-based platform
                      tailored for selling courses and facilitating online
                      classes for students.
                      <li>
                        My responsibilities encompassed implementing various
                        crucial modules such as blogs, courses, tests,
                        assignments, and payment systems. Each module required
                        meticulous attention to detail to ensure seamless
                        functionality and intuitive user interfaces.
                      </li>
                      <li>
                        Utilizing cutting-edge technologies such as Next.js,
                        Tailwind CSS, and Redux Toolkit, I leveraged the power
                        of modern frontend frameworks and libraries to
                        streamline development processes and optimize
                        performance.
                      </li>
                      <li>
                        Throughout the development lifecycle, I remained
                        committed to delivering high-quality solutions that
                        prioritize user satisfaction and engagement. From
                        conceptualization to implementation, I collaborated
                        closely with cross-functional teams to translate
                        requirements into tangible features and functionalities.
                      </li>
                      <li>
                        By combining technical expertise with a passion for
                        user-centric design, I contributed to creating an
                        interactive and dynamic platform that empowers students
                        and educators alike in their pursuit of knowledge and
                        learning. My experience at EasyhaiOnline has further
                        honed my skills as a frontend developer, equipping me
                        with invaluable insights and expertise to tackle future
                        challenges in the ever-evolving landscape of web
                        development.
                      </li>
                    </p>

                    <Link
                      target="blank"
                      to="https://aqusag.com/"
                      className="bg-gray-800 text-white text-decoration-none hover:bg-gray-700 rounded-full py-2 px-6"
                    >
                      Website Url
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* //Education */}

        <div>
          <div className="text-end md:text-center p-4 ">
            <h1 className="heading font-bold">Education</h1>
            <h5>My Education Details</h5>
          </div>
          <div className="flex gap-4 p-3">
            <div className="md:basis-[70%] w-full " data-aos="zoom-in-left">
              <div class="group z-[1] flex md:flex-row flex-col  justify-start items-start gap-2 w-full h-fit duration-500 relative rounded-lg p-4  border-b-[8px] border-blue-500 hover:border-red-500 hover:-translate-y-2 hover:shadow-xl shadow-gray-800 cursor-pointer">
                <div className="bg-red-400  p-10 mr-2 rounded-md h-full ">
                  <div className="bg-red-400  flex justify-center items-center font-bold ">
                    B.tech
                  </div>
                </div>
                <div class="relative z-10">
                  <h2 class="text-2xl font-bold mb-2 text-black">
                    Rajshree Institute of Management and Technologie Bareilly
                  </h2>
                  <p class="text-black ">
                    I completed my Bachelor of Technology degree at Rajshree
                    Institute of Management and Technology located in Bareilly.
                    Throughout my academic journey, I delved into various facets
                    of technology, honing my skills and knowledge in the field.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden md:basis-[30%] "></div>
          </div>
          <div className="flex gap-4 p-3">
            <div className=" md:basis-[30%] max-sm:hidden "></div>
            <div className="md:basis-[70%] w-full " data-aos="zoom-in-left">
              <div class="group z-[1] flex md:flex-row flex-col justify-start items-start gap-2 w-full h-fit duration-500 relative rounded-lg p-4  border-b-[8px] border-blue-500 hover:border-red-500 hover:-translate-y-2 hover:shadow-xl shadow-gray-800 cursor-pointer">
                <div className="bg-red-400 p-10  rounded-md mr-2 h-full ">
                  <div className="bg-red-400  flex justify-center items-center font-bold ">
                    12Th{" "}
                  </div>
                </div>
                <div class="relative z-10">
                  <h2 class="text-2xl font-bold mb-2 text-black">
                    Cooperative Inter College Gorakhpur
                  </h2>
                  <p class="text-black ">
                    I completed my Intermediate from Cooperative Inter college
                    which located in Gorakhpur UttarPardesh. Throughout my
                    academic journey, I delved into various facets of
                    technology, honing my skills and knowledge in the field.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 p-3">
            <div className="md:basis-[70%] w-full " data-aos="zoom-in-left">
              <div class="group z-[1] flex md:flex-row flex-col justify-start items-start gap-2 w-full h-fit duration-500 relative rounded-lg p-4  border-b-[8px] border-blue-500 hover:border-red-500 hover:-translate-y-2 hover:shadow-xl shadow-gray-800 cursor-pointer">
                <div className="bg-red-400  p-10  mr-2 rounded-md  h-full ">
                  <div className="bg-red-400  flex justify-center items-center font-bold ">
                    10Th
                  </div>
                </div>
                <div class="relative z-10">
                  <h2 class="text-2xl font-bold mb-2 text-black">
                    Ramjatan Inter College Gorakhpur
                  </h2>
                  <p class="text-black line-clamp-4">
                    I completed my High School from Ramjatan Inter college which
                    located in Gorakhpur UttarPardesh. Throughout my academic
                    journey, I delved into various facets of technology, honing
                    my skills and knowledge in the field.
                  </p>

                  <Link
                    target="blank"
                    to="https://test-eho2.vercel.app/"
                    className="bg-gray-800 text-white hover:bg-gray-700 rounded-full py-2 px-6"
                  >
                    Go Live
                  </Link>
                </div>
              </div>
            </div>
            <div className=" md:basis-[30%] hidden "></div>
          </div>
        </div>

        {/* //certification  */}

        <div>
          <div className="text-start md:text-center p-4 ">
            <h1 className="heading font-bold">Certification</h1>
            <h5>My Professional certification</h5>
          </div>
          <div
            className="flex gap-4 p-3  md:flex-row flex-col"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <div class="group z-[1] flex flex-col justify-start items-start gap-2 w-full h-fit duration-500 relative rounded-lg p-4  border-b-[8px] border-blue-500 hover:border-red-500 hover:-translate-y-2 hover:shadow-xl shadow-gray-800 cursor-pointer">
              <div class="relative z-10">
                <h2 class="text-xl font-bold mb-2 text-black">
                  JavaFullstack Trainning
                </h2>
                <h6 class=" font-bold mb-2 text-black">Ducat India</h6>
                <p class="text-black line-clamp-4">
                  I completed an intensive Java Fullstack Training program at
                  Ducat India, which equipped me with a comprehensive skill set
                  in both frontend and backend web development using Java
                  technologies.
                </p>
                <Link
                  target="blank"
                  to="https://test-eho2.vercel.app/"
                  className="bg-gray-800 text-white hover:bg-gray-700 rounded-full py-2 px-6"
                >
                  Go Live
                </Link>
              </div>
            </div>
            <div class="group z-[1] flex flex-col justify-start items-start gap-2 w-full h-fit duration-500 relative rounded-lg p-4  border-b-[8px] border-blue-500 hover:border-red-500hover:-translate-y-2 hover:shadow-xl shadow-gray-800 cursor-pointer">
              <div class="relative z-10">
                <h2 class="text-xl font-bold mb-2 text-black">
                  Website development Bootcamp
                </h2>
                <h6>Udemy</h6>
                <p class="text-black line-clamp-4">
                  I successfully completed a comprehensive Website Development
                  Bootcamp on the Udemy platform. This intensive program
                  provided me with a thorough understanding of various aspects
                  of web development, empowering me with the skills to create
                  dynamic and engaging websites.
                </p>

                <Link
                  target="blank"
                  to="https://test-eho2.vercel.app/"
                  className="bg-gray-800 text-white hover:bg-gray-700 rounded-full py-2 px-6"
                >
                  Go Live
                </Link>
              </div>
            </div>
            <div class="group z-[1] flex flex-col justify-start items-start gap-2 w-full h-fit duration-500 relative rounded-lg p-4  border-b-[8px] border-blue-500 hover:border-red-500 hover:-translate-y-2 hover:shadow-xl shadow-gray-800 cursor-pointer">
              <div class="relative z-10">
                <h2 class="text-2xl font-bold mb-2 text-black">
                  Python Summer Trainning
                </h2>
                <h6>NIELIT</h6>
                <p class="text-black line-clamp-4">
                  I successfully completed a comprehensive Python summer
                  training program offered by the National Institute of
                  Electronics & Information Technology (NIELIT). This intensive
                  program provided me with a deep understanding of Python
                  programming language and its diverse applications in the field
                  of technology.
                </p>

                <Link
                  target="blank"
                  to="https://test-eho2.vercel.app/"
                  className="bg-gray-800 text-white hover:bg-gray-700 rounded-full py-2 px-6"
                >
                  Go Live
                </Link>
              </div>
            </div>

            <div className="hidden md:basis-[30%] "></div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default About;
