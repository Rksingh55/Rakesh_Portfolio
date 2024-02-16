import React from "react";
import Img from "../Images/codingimg2.png";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import Header from "./Header";
import { Link } from "react-router-dom";
function AllProjects() {
  const Array = [
    {
      Image:
        "./eho.jpg",
      ProjectName: "Easyhaionline Website",
      Discription:
        " This is Education based website for selling courses and online classes for students. In this website i worked on imporent module like blogs, courses, test, assignments, payment doubt etc.",
      TechUsed:
        " Html, Css , Javascript, TailwindCss, NextJs, Redux Toolkit, Nodejs, Mongodb",
      UrlLink: "https://test-eho2.vercel.app/",
    },
    {
      Image:
        "./Borobazar.jpg",
      ProjectName: "Borobazar Website Clone",
      Discription:
        " This is Ecommerce  website for selling courses and online classes for students. In this website i worked on imporent module like blogs, courses, test, assignments, payment doubt etc.",
      TechUsed:
        " Html, Css , Javascript, TailwindCss, ReactJs, Redux Toolkit, Nodejs, Mongodb",
      UrlLink: "https://borobazar-ecommerce.vercel.app/",
    },
    {
      Image:
        "./softweb.jpg",
      ProjectName: "Softweb tech Website",
      Discription:
        " This is Education based website for selling courses and online classes for students. In this website i worked on imporent module like blogs, courses, test, assignments, payment doubt etc.",
      TechUsed: " Html, Css , Javascript, Bootstrap",
      UrlLink: "https://softweb-tech.vercel.app/",
    },
    {
      Image:
        "./freshvege.jpg",
      ProjectName: "Freshvegie Ecommerce Website",
      Discription:
        " This is Education based website for selling courses and online classes for students. In this website i worked on imporent module like blogs, courses, test, assignments, payment doubt etc.",
      TechUsed: " Html, Css , Javascript, Bootstrap, ReactJs",
      UrlLink: "https://rk-freshveg.vercel.app/",
    },
    {
      Image:
        "./grill.jpg",
      ProjectName: "Grill Veg Restaurents Web",
      Discription:
        " This is Education based website for selling courses and online classes for students. In this website i worked on imporent module like blogs, courses, test, assignments, payment doubt etc.",
      TechUsed: " Html, Css , Javascript, Jquery",
      UrlLink: "https://grilli-veg.vercel.app/",
    },
    {
      Image:
        "./assisments.jpg",
      ProjectName: "Assisments blogging Website",
      Discription:
        " This is Education based website for selling courses and online classes for students. In this website i worked on imporent module like blogs, courses, test, assignments, payment doubt etc.",
      TechUsed:
        " Html, Css , Javascript, TailwindCss, ReactJs, Firebase, Firebase Database ",
      UrlLink: "https://rk-assisments.vercel.app/",
    },
    {
      Image:
        "./eho2.jpg",
      ProjectName: "Easyhaionline website1",
      Discription:
        " This is Education based website for selling courses and online classes for students. In this website i worked on imporent module like blogs, courses, test, assignments, payment doubt etc.",
      TechUsed:
        " Html, Css , Javascript, Bootstrap, ReactJs, ReduxToolkit",
      UrlLink: "https://www.easyhaionline.com/",
    },
    {
      Image:
        "./portfolio1.jpg",
      ProjectName: "Portfolio Design",
      Discription:
        " This is simple portfolio design for show about your self like about education, skill , exprience, or project and services you povide. You can also provide your social media links, and contact number etc.",
      TechUsed:
        " Html, Css , Javascript, Bootstrap",
      UrlLink: "https://rk-portfolio-weld.vercel.app/",
    },
    {
      Image:
        "./Blogtexteditor.jpg",
      ProjectName: "Blog Texteditor Design",
      Discription:
        " This is Blog text editor Webpage design  for creating blogs form this page, in this u can edit all type of text editing like font style, family, color , style and u can add image or link or blogs etc. ",
      TechUsed:
        " Html, Css , Javascript, Bootstrap",
      UrlLink: "https://rk-portfolio-weld.vercel.app/",
    },
  ];
  return (
    <>
      <div className="conatctpage">
        <div className=" parallax3 ">
          <div className=" sss ">
            <div className="flex justify-center  items-center text-white  py-[100px]">
              <div className=" flex gap-5 ">
                <div className="flex justify-center  items-center">
                  <h1 className="text-[80px] text-[#bec785]">02</h1>
                </div>
                <div>
                  <h1 className="text-white"> PROJECTS</h1>
                  <h3>Checkout My Best Projects </h3>
                </div>
              </div>
            </div>
            {/* <div
              className="flex md:w-[75%] justify-center gap-2 flex-col md:flex-row
          m-auto"
            >
              <div class="h-[300px] w-[340px] m-auto overflow-hidden">
                <img
                  class="h-[300px] w-[340px] object-cover animate-zoom-infinite"
                  src="https://img.freepik.com/free-photo/medium-shot-woman-working-laptop_23-2150323516.jpg?size=626&ext=jpg&uid=R136266302&ga=GA1.1.1882344098.1687350271&semt=sph"
                  alt="Zooming Image"
                />
              </div>
              <div class="h-[300px] w-[340px] m-auto overflow-hidden">
                <img
                  class="h-[300px] w-[340px] object-cover animate-zoom-infinite"
                  src="https://img.freepik.com/free-photo/high-angle-man-working-laptop_23-2150287639.jpg?size=626&ext=jpg&uid=R136266302&ga=GA1.1.1882344098.1687350271&semt=sph"
                  alt="Zooming Image"
                />
              </div>
              <div class="h-[300px] w-[340px] m-auto overflow-hidden">
                <img
                  class="h-[300px] w-[340px] object-cover animate-zoom-infinite"
                  src="https://img.freepik.com/free-photo/medium-shot-woman-working-computer_23-2150287666.jpg?size=626&ext=jpg&uid=R136266302&ga=GA1.1.1882344098.1687350271&semt=sph"
                />
              </div>
            </div> */}

            <div className="flex pb-12 max-sm:p-6 md:w-[80%] m-auto w-full flex-wrap justify-center gap-4">
              {Array.map((value, index) => (
                <div className="" key={index}>
  <div className="service-card w-[350px] shadow-xl cursor-pointer snap-start shrink-0 flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-white relative overflow-hidden">
    
    <div
      className="bg-cover bg-center w-full h-[200px] animate-zoom-infinite"
      style={{
        backgroundImage: `url(${value?.Image})`,
      }}
    ></div>
    <div className="bg-white p-6">
      <p className="font-bold text-2xl group-hover:text-black text-black">
        {value?.ProjectName}
      </p>
      <p className="text-gray-400 text-sm">
        {value?.Discription}
      </p>
    
      <Link to={value?.UrlLink} target="blank" className="text-decoration-none  border-2 text-[#00d646] hover:border-solid hover:border-[#00d646] border-dotted  border-[#00d646] hover:text-[#00d646]  px-5 py-2 ">
    Go Live
</Link>

    </div>
  </div>
</div>


              ))}
            </div>
          </div>
        </div>

        {/* //footer */}
        <div className=" text-center p-6 bg-[#333B50]">
          <p>©copyright 2024 Design & Deveoped By Rakesh Singh</p>
        </div>
      </div>
    </>
  );
}

export default AllProjects;


