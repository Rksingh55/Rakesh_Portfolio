import React from "react";
import { Link } from "react-router-dom";
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
  ];
  return (
    <div className="">
      <div className=" text-center p-4 ">
        <h1 className="heading font-bold">Latest Blogs</h1>
        <h5>Checkout My Latest Blogs</h5>
      </div>
      <div
      
      style={{backgroundColor:"whitesmoke"}}  className="flex md:flex-row max-sm:bg-white md:bg-white md:rounded-[20px] md:px-10 flex-col justify-between md:w-[80%] m-auto w-full "
      >
        <div  className="flex md:gap-2  max-sm:gap-5 py-5 max-sm:px-2  md:flex-row flex-col  ">
          {Array.map((value, index) => (
            <div  class="md:w-[33%] max-sm:p-4  w-full h-fit  mx-auto my-4 duration-500 hover:-translate-y-2 hover:shadow-xl shadow-gray-800 cursor-pointer">
              <div class="bg-white rounded-md   overflow-hidden shadow-md transition-transform transform cursor-pointer">
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
                  <Link
                    href="#"
                    class="mt-3 text-decoration-none flex justify-end inline-block text-blue-500 hover:text-blue-700"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
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
