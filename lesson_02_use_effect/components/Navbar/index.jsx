import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navigations = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = ({setSearchTitle}) => {
  const isActive = usePathname();
  console.log("bloggg", isActive);
  return (
    <div className="bg-slate-300 w-full h-[80px] p-5 flex flex-col lg:sticky ">
      <div className="flex justify-around items-center lg:flex-row">
        <div className="">
          <a
            href="/"
            className="flex w-[100px] lg:w-[300px] h-[36px] mb-2 rounded-sm"
          >
            <img src="/Logo.png"></img>
          </a>
        </div>
        {/* <div className="flex justify-around gap-6"> */}
        <div className="flex gap-6 lg:gap-20">
          {navigations.map((navigation, i) => (
            <Link
              className={`font-bold transition-all duration-75 ${
                isActive === navigation.path
                  ? "text-orange-400"
                  : "hover:text-orange-400"
              }`}
              key={i}
              href={navigation.path}
            >
              {navigation.name}
            </Link>
          ))}
        </div>
        <div className="flex justify-center w-30 h-6 bg-white rounded-xl lg:w-40  lg:justify-around">
          <input
            type="text"
            placeholder="Search"
            className="w-[100px] rounded-none lg:w-200px] h-5 p-1 rounded-xl"
            onChange={(e) => {
             
            }}
          ></input>
          <button className="flex items-center ml-5">
            <BiSearchAlt />
          </button>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Navbar;
