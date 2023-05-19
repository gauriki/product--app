import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";

export function Footer() {
  return (
    <footer className="flex flex-col py-4  bg-[#F7F6F6]">
      <div className="flex justify-between border-b-2 border-inherit pb-6 px-10">
        <div className="flex items-center ">
          <h1 className="font-medium text-[20px] text-[#929292] leading-[26px]">
            Follow us
          </h1>
          <div className="flex  gap-4 ">
            <div className="rounded-full bg-[#EBEBEB] ml-4 h-[40px] w-[40px] flex items-center justify-center">
              <ImFacebook className="text-[#929292] w-[20px] h-[20px]" />
            </div>
            <div className="rounded-full bg-[#EBEBEB] h-[40px] w-[40px] flex items-center justify-center">
              <BsTwitter className="text-[#929292] w-[20px] h-[20px]" />
            </div>
            <div className="rounded-full bg-[#EBEBEB] h-[40px] w-[40px] flex items-center justify-center">
              <AiOutlineInstagram className="text-[#929292] w-[20px] h-[20px]" />
            </div>
            <div className="rounded-full bg-[#EBEBEB] h-[40px] w-[40px] flex items-center justify-center">
              <AiFillYoutube className="text-[#929292] w-[20px] h-[20px]" />
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <h1 className="font-medium text-[20px] text-[#929292]  leading-[26px]">
            Get the Newsletter
          </h1>
          <div className="ml-4 flex  border-2 w-fit border-[#C0C0C0] rounded-[10px]">
            <input
              type="text"
              className=" bg-[#FFFFFF] border-0 w-auto py-1 px-[10px] rounded-l-lg "
              placeholder="Your email address "
            />
            <button className="bg-black border-0 text-white px-4 py-2 rounded-r-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center py-10">
        <div className="flex gap-4">
          <p className="text-[16px] leading-[22px] font-medium text-[#7a7a7a] border-r-2 border-inherit px-4">
            Features
          </p>
          <p className="text-[16px] leading-[22px] font-medium text-[#7a7a7a] border-r-2 border-inherit px-4">
            About
          </p>
          <p className="text-[16px] leading-[22px] font-medium text-[#7a7a7a] border-r-2 border-inherit px-4">
            Testimonials
          </p>
          <p className="text-[16px] leading-[22px] font-medium text-[#7a7a7a] border-r-2 border-inherit px-4">
            Contact
          </p>
          <p className="text-[16px] leading-[22px] font-medium text-[#7a7a7a] border-r-2 border-inherit px-4">
            Download
          </p>
        </div>
        <p className="my-6 font-normal text-[14px] text-[#606060] leading-[20px]">
          1717 Harrison St, San Francisco, CA 94103, USA <br />© 2022 Your
          Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
