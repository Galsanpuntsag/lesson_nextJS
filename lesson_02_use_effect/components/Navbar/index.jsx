import React from "react";
import { AiOutlineCalendar } from "react-icons/";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navigations = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const isActive = usePathname();
  console.log("bloggg", isActive);
  return (
    <div className="mx-auto my-[36px]">
      <div className="flex justify-between mx-[350px]">
        <div className="">
          <a href="/" className="flex w-[158px] h-[36px]">
            <img src="/Logo.png"></img>
          </a>
        </div>
        <div className="flex gap-12">
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
        <div className="">
          <input
            type="text"
            placeholder="Search"
            className="p-4 w-[134px] h-[20px] bg-[#F4F4F5] border-[1px] rounded-[10px] border-black"
          ></input>
          <button>
            {" "}
            <img src=""></img>
          </button>
        </div>
        <div className="">
          <img src="SearchIcon.png"></img>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
