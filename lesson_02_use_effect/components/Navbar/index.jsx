import React from "react";
import { BiSearchAlt } from "react-icons/bi";
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
    <div className="my-[36px]">
      <div className="flex justify-around">
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
        <div className="flex p-1 border-[1px] rounded-[10px] border-black">
          <input
            type="text"
            placeholder="Search"
            className="p-4 w-[200px] h-[20px] "
          ></input>
          <button className="bg-transparent p-1">
            <BiSearchAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
