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
    <div className="bg-slate-300 w-full h-[80px] p-5 flex justify-center ">
      <div className="flex flex-col justify-around lg:flex-row">
        <div className="">
          <a
            href="/"
            className="flex w-[300px] h-[36px] mb-2 rounded-sm mx-auto"
          >
            <img src="/Logo.png"></img>
          </a>
        </div>
        <div className="flex justify-center gap-6">
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
          <div className="flex lg:w-[100px] h-5 rounded-[3px] gap-2 mr-2 pl-4">
            {/* <input
              type="text"
              placeholder="Search"
              className="p-1 w-[60px] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
            ></input> */}
            <button className="flex">
              <BiSearchAlt />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
