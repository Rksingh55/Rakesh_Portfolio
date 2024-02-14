import React from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircle, BsFillPersonFill } from 'react-icons/bs'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { IoLocation } from 'react-icons/io5'
import Feedbackimg from "../Images/feedback2.png";

function testimonilas() {
  return (
    <div>
       <div className="bg-[#9E22FF]" >
          <div className=" text-center p-4 text-white ">
            <h1 className="heading font-bold">Testiomonial</h1>
            <h5>Checkout My Latest Customers Reviews</h5>
          </div>
          
          <div className="flex md:flex-row bg-white rounded-[20px] md:px-10 flex-col justify-between md:w-[80%] m-auto w-[95%] ">
            <div className="basis-1/2 m-1 " >
              <div className="md:w-[90%] w-full text-start ">
                <div className="flex gap-2 mt-4 mb-4">
                  <div className="h-[70px] w-[70px] rounded-full bg-red-400">
                    <img
                      className="h-[70px] w-[70px] rounded-full object-cover"
                      src="https://img.freepik.com/free-photo/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_839833-12963.jpg?w=900&t=st=1706715595~exp=1706716195~hmac=3cc87b94c91086a428fdee6b537bf177b68585b54aec980a3ad77aac0661f99e"
                    />
                  </div>
                  <div
                    style={{ borderRadius: "40px 10px 10px 0px" }}
                    className="w-[200px] h-[70px] bg-[#9E22FF] "
                  >
                    <div className=" ml-8 mt-2">
                      <div className="flex gap-2">
                        <BsFillPersonFill className="mt-1 text-white" />
                        <span className="font-semibold text-white">
                          Rakesh Singh
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <IoLocation className="mt-1 text-white" />
                        <span className="font-semibold text-white">India</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 mb-2">
                  <FaStar className="text-yellow-500 text-[22px]" />
                  <FaStar className="text-yellow-500 text-[22px]" />
                  <FaStar className="text-yellow-500 text-[22px]" />
                  <FaStar className="text-yellow-500 text-[22px]" />
                  <FaStarHalfAlt className="text-yellow-500 text-[22px]" />
                </div>
                <h2 className="text-[22px]">
                  Impressed by the level of attention and care
                </h2>
                <div className="feedbackcard h-[350px] border-1">
                  <p className="">
                    imply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged.
                  </p>
                </div>
                <div className="flex gap-2">
                  <div className="flex justify-center items-center h-[50px] ml-2 w-[50px] border-2 border-[#9E22FF] hover:bg-[#9E22FF]  rounded-full cursor-pointer text-[#9E22FF] hover:text-white">
                    <BsArrowLeftCircleFill className=" text-[20px]" />
                  </div>
                  <div className="flex justify-center items-center h-[50px] ml-2 w-[50px] bg-[#9E22FF] cursor-pointer rounded-full">
                    <BsArrowRightCircle className="text-white text-[20px]" />
                  </div>
                </div>
                <br />
                <br />
              </div>
            </div>
            
            <div className="basis-1/2  " >
              <img src={Feedbackimg} className="rounded-[20px]" />
            </div>
          </div>
          <br />
          <br />
        </div>
    </div>
  )
}

export default testimonilas
