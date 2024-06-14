import { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { HiDocumentArrowDown } from "react-icons/hi2";
import {
  RiAdminFill,
  RiChatSmile3Fill,
  RiGithubFill,
  RiHomeSmileFill,
} from "react-icons/ri";
import { RiSwordFill } from "react-icons/ri";
import { RiMistFill } from "react-icons/ri";

function Navbar() {
  const navItem = [
    {
      title: "Home",
      link: "#",
      icon: <RiHomeSmileFill />,
    },
    {
      title: "About",
      link: "#",
      icon: <RiAdminFill />,
    },
    {
      title: "Projects",
      link: "#",
      icon: <RiGithubFill />,
    },
    {
      title: "Contact Me",
      link: "#",
      icon: <RiChatSmile3Fill />,
    },
  ];

  const [mobMenu, setMobMenu] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center px-5 py-2 md:px-10">
        <div
          onClick={() => setMobMenu(!mobMenu)}
          className="md:hidden text-3xl border p-1 duration-300 rounded-md cursor-pointer border-blue-900 hover:bg-blue-700"
        >
          {mobMenu ? (
            <RiMistFill className="duration-500" />
          ) : (
            <RiSwordFill className="duration-500" />
          )}
        </div>
        <div className="flex items-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-900">
          <div className="">PK</div>
          <div className=" rotate-12 bg-clip-text bg-gradient-to-r from-violet-500 to-blue-900">
            {" "}
            Dev.
          </div>
        </div>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-5 hover:gap-7 hover:scale-125 duration-300 hover:blur-sm">
          {navItem.map((item, index) => (
            <li
              key={index}
              className="hover:scale-150 hover:!filter-none duration-300"
            >
              <a href={item.link} className="flex items-center gap-2">
                {item.icon} {item.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-2">
          <button className="flex items-center px-2 py-1 rounded-md bg-blue-400">
            <HiDocumentArrowDown />
            <span>Download CV</span>
          </button>
          <button className="px-2 py-1 rounded-sm bg-gray-400">Hire Me</button>
        </div>

        {/* Mobile */}
        <div className="text-2xl cursor-pointer md:hidden">
          <BiUserCircle />
        </div>
      </div>
      <ul
        className={`${
          mobMenu ? "hidden" : "flex"
        } md:hidden flex-col items-center text-5xl mt-20 font-extrabold gap-10 text-blue-700 bg-blue-950 w-full`}
      >
        {navItem.map((item, index) => (
          <li
            key={index}
            className="hover:scale-125 hover:text-white hover:!filter-none duration-300"
          >
            <a href={item.link} className="flex items-center gap-2">
              {item.icon} {item.title}
            </a>
          </li>
        ))}
        <div className="text-3xl flex flex-col items-center gap-5 w-full px-5">
          <button className=" flex items-center justify-center py-3 rounded-md w-full bg-blue-800 text-white hover:text-white duration-300 hover:bg-blue-500">
            <HiDocumentArrowDown />
            <span>Download CV</span>
          </button>
          <button className="rounded-md w-full py-3 bg-white hover:text-white duration-300 hover:bg-blue-500">
            Hire Me
          </button>
        </div>
      </ul>
    </>
  );
}

export default Navbar;
