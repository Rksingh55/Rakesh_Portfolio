import React from "react";
import Header from "./Header";
function Latestproject() {
  const Array = [
    {
      Img: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010136.jpg?size=626&ext=jpg&uid=R136266302&ga=GA1.1.1882344098.1687350271&semt=sph",
      Heading:
        "A Complete Beginner's Guide to React Router (Including Router Hooks)",
      Paragraph:
        "Routing is the capacity to show different pages to the user. That means the user can move between different parts of an application by entering a URL or clicking on an element As you may already know, by default, React comes without routing. And to enable it in our project, we need to add a library named react-router.",
    },
    {
      Img: "https://img.freepik.com/premium-photo/coding-programming-technical-assistance-website-upkeep-services_27634-1291.jpg?size=626&ext=jpg&uid=R136266302&ga=GA1.1.1882344098.1687350271&semt=sph",
      Heading:
        "Get Started with Next.js – The React Library Your Project Needs",
      Paragraph:
        "I've composed this guide to give you a practical overview of perhaps the most important React library you will use to build 90% of your projects: Next.js.The goal of this tutorial is to get you started using Next.js as easily as possible.This is not a complete guide on Next, but it will give you everything you need to understand.",
    },
    {
      Img: "https://img.freepik.com/free-photo/programming-background-concept_23-2150170137.jpg?size=626&ext=jpg&uid=R136266302&ga=GA1.1.1882344098.1687350271&semt=sph",
      Heading: "Pass the GitHub Foundations Certification",
      Paragraph:
        "The GitHub Foundations Certification was released just a few weeks ago. And you can now watch a 9-hour exam prep course on the freeCodeCamp.org YouTube channel! Andrew Brown from ExamPro created this course. He has created a bunch of popular exam prep courses for the freeCodeCamp.org YouTube channel.",
    },
    {
      Img: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010136.jpg?size=626&ext=jpg&uid=R136266302&ga=GA1.1.1882344098.1687350271&semt=sph",
      Heading:
        "A Complete Beginner's Guide to React Router (Including Router Hooks)",
      Paragraph:
        "Routing is the capacity to show different pages to the user. That means the user can move between different parts of an application by entering a URL or clicking on an element As you may already know, by default, React comes without routing. And to enable it in our project, we need to add a library named react-router.",
    },
    {
      Img: "https://img.freepik.com/premium-photo/coding-programming-technical-assistance-website-upkeep-services_27634-1291.jpg?size=626&ext=jpg&uid=R136266302&ga=GA1.1.1882344098.1687350271&semt=sph",
      Heading:
        "Get Started with Next.js – The React Library Your Project Needs",
      Paragraph:
        "I've composed this guide to give you a practical overview of perhaps the most important React library you will use to build 90% of your projects: Next.js.The goal of this tutorial is to get you started using Next.js as easily as possible.This is not a complete guide on Next, but it will give you everything you need to understand.",
    },
    {
      Img: "https://img.freepik.com/free-photo/programming-background-concept_23-2150170137.jpg?size=626&ext=jpg&uid=R136266302&ga=GA1.1.1882344098.1687350271&semt=sph",
      Heading: "Pass the GitHub Foundations Certification",
      Paragraph:
        "The GitHub Foundations Certification was released just a few weeks ago. And you can now watch a 9-hour exam prep course on the freeCodeCamp.org YouTube channel! Andrew Brown from ExamPro created this course. He has created a bunch of popular exam prep courses for the freeCodeCamp.org YouTube channel.",
    },
    {
      Img: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010136.jpg?size=626&ext=jpg&uid=R136266302&ga=GA1.1.1882344098.1687350271&semt=sph",
      Heading:
        "A Complete Beginner's Guide to React Router (Including Router Hooks)",
      Paragraph:
        "Routing is the capacity to show different pages to the user. That means the user can move between different parts of an application by entering a URL or clicking on an element As you may already know, by default, React comes without routing. And to enable it in our project, we need to add a library named react-router.",
    },
    {
      Img: "https://img.freepik.com/premium-photo/coding-programming-technical-assistance-website-upkeep-services_27634-1291.jpg?size=626&ext=jpg&uid=R136266302&ga=GA1.1.1882344098.1687350271&semt=sph",
      Heading:
        "Get Started with Next.js – The React Library Your Project Needs",
      Paragraph:
        "I've composed this guide to give you a practical overview of perhaps the most important React library you will use to build 90% of your projects: Next.js.The goal of this tutorial is to get you started using Next.js as easily as possible.This is not a complete guide on Next, but it will give you everything you need to understand.",
    },
    {
      Img: "https://img.freepik.com/free-photo/programming-background-concept_23-2150170137.jpg?size=626&ext=jpg&uid=R136266302&ga=GA1.1.1882344098.1687350271&semt=sph",
      Heading: "Pass the GitHub Foundations Certification",
      Paragraph:
        "The GitHub Foundations Certification was released just a few weeks ago. And you can now watch a 9-hour exam prep course on the freeCodeCamp.org YouTube channel! Andrew Brown from ExamPro created this course. He has created a bunch of popular exam prep courses for the freeCodeCamp.org YouTube channel.",
    },
  ];
  return (
    <>
      <div className="conatctpage">
        <div className="parallax3">
          <div className="sss ">
            <div className="flex justify-center  items-center text-white  py-[80px]">
              <div className=" flex gap-5 ">
                <div className="flex justify-center  items-center">
                  <h1 className="text-[80px] text-[#bec785]">04</h1>
                </div>
                <div>
                  <h1 className="text-white">BLOGS</h1>
                  <h3>Checkout Latest Blogs </h3>
                </div>
              </div>
            </div>
           
            <div className="flex md:flex-row   rounded-[20px] md:px-10 flex-col justify-between md:w-[80%] m-auto full ">
  <div
    data-aos="zoom-in"
    className="flex flex-wrap md:gap-2 max-sm:gap-5  max-sm:px-2  md:flex-row flex-col  "
  >
    {Array.map((value, index) => (
      <div class="md:w-[32%] w-full mx-auto  duration-500 hover:-translate-y-2 hover:shadow-xl shadow-gray-800 cursor-pointer">
        <div class="bg-white  overflow-hidden shadow-md transition-transform transform cursor-pointer">
          <img
            src={value?.Img}
            alt="Blog Image"
            class="w-full h-40 object-cover"
          />
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2 line-clamp-2">
              {value?.Heading}
            </h3>
            <p class="text-gray-600 line-clamp-6">{value?.Paragraph}</p>
            <a
              href="#"
              class="mt-3 inline-block text-blue-500 hover:text-blue-700"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
  <br />
  <br />
</div>;

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

export default Latestproject;


