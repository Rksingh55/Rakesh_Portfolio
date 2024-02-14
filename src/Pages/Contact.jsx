import React from "react";
import Header from "./Header";
import contact from "../Images/conatct.png"
function Contact() {
  return (
    <div className="conatctpage">
      <Header Name="Contact" />
      <div className="md:w-[80%] m-auto w-full  p-3 ">
        <div className="flex md:flex-row flex-col gap-3 ">
          <div
            style={{ backgroundColor: "whitesmoke" }}
            className=" md:w-[40%] w-full rounded-md p-3 "
          >
            <img src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg?w=740&t=st=1707307867~exp=1707308467~hmac=2fb013b38dfc56f25fe14bd4334cfe4b59de5fad132c46a6863513e20b7c5a04" />
          </div>
          <div
            style={{ backgroundColor: "whitesmoke" }}
            className="md:w-[60%] w-full   w-full rounded-md p-3 "
          >
            <h1 className="text-[#9E22FF] py-3 font-semibold">Get In Touch</h1>

            <form class="  grid  items-center rounded-md">
              <div class="grid gap-6" id="form">
                <div class="w-full flex gap-3">
                  <input
                    class="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-black rounded-md"
                    type="text"
                    placeholder="First Name"
                    id="First-Name"
                    name="First-Name"
                    required=""
                  />
                  <input
                    class="p-3 capitalize shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5] rounded-md"
                    type="text"
                    placeholder="Last Name"
                    id="Last-Name"
                    name="Last-Name"
                  />
                </div>
                <div class="grid gap-6 w-full">
                  <input
                    class="p-3 shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid border-[#035ec5] focus:border-[1px] rounded-md"
                    type="Email"
                    placeholder="Email"
                    id="Email"
                    name="email"
                  />
                  <textarea
                    class="p-3 shadow-2xl rounded-md   glass w-full text-black outline-none focus:border-solid focus:border-[1px]border-[#035ec5]"
                    type="text"
                    placeholder="Enter Your Messege"
                    required=""
                  />
                </div>

                <button
                  class="outline-none  text-white glass rounded-md shadow-2xl  w-full p-3  bg-[#9E22FF] hover:border-[#035ec5] hover:border-solid hover:border-[1px]  hover:text-[#035ec5] font-bold"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          style={{ backgroundColor: "whitesmoke" }}
          className=" rounded-md p-4 mt-3"
        >
          <div className="flex justify-between px-2 flex-wrap ">
            <div className="font-bold text-black text-lg ">Contact Me </div>
            <div className="font-bold text-black text-lg ">+91 7310307513 </div>
            <div className="font-bold text-black text-lg ">
              rakeshecon@gmail.com{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
