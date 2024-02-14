import React from "react";
import Img from "../Images/codingimg2.png";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import Header from "./Header";
function AllProjects() {
  const Array = [
    {
      Image:
        "https://img.freepik.com/free-photo/e-learing-distance-education-icons-interface_53876-124201.jpg?size=626&ext=jpg&uid=R136266302&ga=GA1.1.1882344098.1687350271&semt=ais",
      ProjectName: "Easyhaionline.com",
      Discription:
        " This is Education based website for selling courses and online classes for students. In this website i worked on imporent module like blogs, courses, test, assignments, payment doubt etc.",
      TechUsed:
        " Html, Css , Javascript, TailwindCss, NextJs, Redux Toolkit, Nodejs, Mongodb",
      UrlLink: "https://test-eho2.vercel.app/",
    },
    {
      Image:
        "https://img.freepik.com/free-photo/add-cart-buy-now-online-commerce-graphic-concept_53876-133964.jpg?size=626&ext=jpg&uid=R136266302&ga=GA1.1.1882344098.1687350271&semt=ais",
      ProjectName: "Borobazar Website Clone",
      Discription:
        " This is Ecommerce  website for selling courses and online classes for students. In this website i worked on imporent module like blogs, courses, test, assignments, payment doubt etc.",
      TechUsed:
        " Html, Css , Javascript, TailwindCss, ReactJs, Redux Toolkit, Nodejs, Mongodb",
      UrlLink: "https://borobazar-ecommerce.vercel.app/",
    },
    {
      Image:
        "https://img.freepik.com/premium-photo/business-people-working-sitting-office-desk-together_44905-1126.jpg?size=626&ext=jpg&uid=R136266302&ga=GA1.1.1882344098.1687350271&semt=ais",
      ProjectName: "Softweb tech Website",
      Discription:
        " This is Education based website for selling courses and online classes for students. In this website i worked on imporent module like blogs, courses, test, assignments, payment doubt etc.",
      TechUsed: " Html, Css , Javascript, Bootstrap",
      UrlLink: "https://softweb-tech.vercel.app/",
    },
    {
      Image:
        "https://img.freepik.com/premium-photo/vegetables-wooden-table-generative-ai_896686-1669.jpg?size=626&ext=jpg&uid=R136266302&ga=GA1.1.1882344098.1687350271&semt=ais",
      ProjectName: "Freshvegie Ecommerce Website",
      Discription:
        " This is Education based website for selling courses and online classes for students. In this website i worked on imporent module like blogs, courses, test, assignments, payment doubt etc.",
      TechUsed: " Html, Css , Javascript, Bootstrap, ReactJs",
      UrlLink: "https://rk-freshveg.vercel.app/",
    },
    {
      Image:
        "https://img.freepik.com/free-psd/restaurant-landing-page-template-design_23-2149609569.jpg?size=626&ext=jpg&uid=R136266302&ga=GA1.1.1882344098.1687350271&semt=ais",
      ProjectName: "Grill Veg Restaurents Web",
      Discription:
        " This is Education based website for selling courses and online classes for students. In this website i worked on imporent module like blogs, courses, test, assignments, payment doubt etc.",
      TechUsed: " Html, Css , Javascript, Jquery",
      UrlLink: "https://grilli-veg.vercel.app/",
    },
    {
      Image:
        "https://img.freepik.com/free-photo/blogging-gone-viral-camera-concept_53876-127618.jpg?size=626&ext=jpg&uid=R136266302&ga=GA1.1.1882344098.1687350271&semt=ais",
      ProjectName: "Assisments blogging Website",
      Discription:
        " This is Education based website for selling courses and online classes for students. In this website i worked on imporent module like blogs, courses, test, assignments, payment doubt etc.",
      TechUsed:
        " Html, Css , Javascript, TailwindCss, ReactJs, Firebase, Firebase Database ",
      UrlLink: "https://rk-assisments.vercel.app/",
    },
  ];
  return (
    <>
      <Header Name="All Projects" />

      <div></div>
      <div
       
        className="md:w-[80%]   rounded-md m-auto w-full mt-3"
      >
      
        <br />
        <div className="flex max-sm:gap-4 flex-wrap justify-center">
  {Array.map((value, index) => (
    <div key={index}   class="group border-2  flex flex-col justify-start items-start gap-4 w-full md:w-1/3 duration-500 relative rounded-lg p-4 bg-white hover:-translate-y-2 hover:shadow-xl shadow-gray-800 cursor-pointer">
      <div className="flex gap-4  flex-col">
        <div className=" w-full">
          <img className="rounded-md" src={value?.Image} alt={value?.ProjectName} />
        </div>
        <div className="relative z-[1]  w-full">
          <h2 className="text-2xl font-bold mb-2 text-black">
            {value?.ProjectName}
          </h2>
          <p className="text-black line-clamp-4">{value?.Discription}</p>
          <div>
            <h6>Technologies Used</h6>
            <p>{value?.TechUsed}</p>
          </div>
          <a
            target="_blank"
            href={value?.UrlLink}
            className="bg-gray-800 text-white text-decoration-none hover:bg-gray-700 rounded-full py-2 px-6"
          >
            Go Live
          </a>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </>
  );
}

export default AllProjects;
