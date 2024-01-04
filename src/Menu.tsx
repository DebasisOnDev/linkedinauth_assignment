import { BiSolidBolt } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";
import { AiOutlineExpand } from "react-icons/ai";
import { TbReload } from "react-icons/tb";
import { MdOutlineAdd } from "react-icons/md";

const Menu = () => {
  return (
    <div className=" flex bg-[#F1F5F9]  bg-opacity-50 items-center justify-center w-full h-screen">
      <div className=" bg-white flex md:w-1/2 px-2 md:px-0 w-full flex-col border-[0.01px] rounded-md border-gray-300 border-opacity-45">
        <div className=" w-full flex items-center justify-between px-8 py-3">
          <input
            type="text"
            className="   placeholder:text-[16px] placeholder:font-semibold focus:outline-none"
            placeholder=" | Write a custom prompt"
          />
          <button className=" text-sm px-3 py-[6px] opacity-60 bg-blue-500 bg-opacity-85 text-white font-semibold  rounded-md">
            Enter
          </button>
        </div>
        <span className=" w-full  shadow-sm shadow-gray-300 h-[2px] "></span>
        <div className=" px-4 py-4 flex flex-col gap-5 w-full h-full bg-gray-200 bg-opacity-50">
          <div className=" flex gap-3 font-semibold cursor-pointer ">
            <span className=" flex items-center justify-center">
              <BiSolidBolt />
            </span>
            <span className=" text-opacity-70 text-black">
              Generate content ideas
            </span>
          </div>
          <div className=" flex gap-3 font-semibold cursor-pointer ">
            <span className=" flex items-center justify-center">
              <FaCheck />
            </span>
            <span className=" text-opacity-70 text-black">
              Fix grammatical issues
            </span>
          </div>
          <div className=" flex gap-3 font-semibold cursor-pointer ">
            <span className=" flex items-center justify-center">
              <AiOutlineExpand size={14} />
            </span>
            <span className=" text-opacity-70 text-black">
              Expand and elaborate
            </span>
          </div>
          <div className=" flex gap-3 font-semibold cursor-pointer ">
            <span className=" flex items-center justify-center">
              <TbReload />
            </span>
            <span className=" text-opacity-70 text-black">Rewrite</span>
          </div>
          <div className=" flex gap-3 font-semibold cursor-pointer ">
            <span className="  flex items-center justify-center">
              <MdOutlineAdd size={18} />
            </span>
            <span className=" text-opacity-70 text-black">
              Make it effective
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
