"use client";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handletoggleActive = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="fixed z-50 w-full h-[60px] top-0 left-0 flex flex-row bg-white items-center justify-between px-6 md:px-24 2xl:px-80">
      <div>
        <Image
          src={"/images/home_page/icon_logo_u43.svg"}
          width={35}
          height={40}
          className=" cursor-pointer "
        />
      </div>
      <div className="hidden md:inline">
        <Image
          src={"/images/home_page/type_logo_u45_a.svg"}
          width={80}
          height={40}
        />
      </div>
      <div className="flex flex-row items-center justify-center">
        <button
          type="button"
          className="hidden text-text font-mono bg-secondary hover:bg-tertiary focus:ring-4 focus:ring-blue-300 rounded-md text-[12px] font-semibold px-5 py-1.5 me-2"
        >
          GET IN TOUCH
        </button>
        <Image
          onClick={handletoggleActive}
          src={`${
            isActive
              ? "/images/home_page/close_menu_u48.svg"
              : "/images/home_page/open_menu_u44.svg"
          }`}
          width={35}
          height={40}
          className=" cursor-pointer "
        />
      </div>
      <nav
        className={`${
          isActive
            ? "absolute bg-white top-full left-0 w-full h-screen transition-height  overflow-hidden flex flex-col justify-center items-center font-duality text-5xl text-center text-text"
            : "absolute bg-white top-full left-0 w-full h-0 transition-height  overflow-hidden flex flex-col justify-center items-center font-duality text-5xl text-center text-text"
        }`}
      >
        <ul>
          <li className="hover:text-secondary my-8">
            <a
              href="#"
              className={`${
                isActive
                  ? "opacity-100 transition-opacity duration-[500ms]"
                  : "opacity-0"
              }`}
            >
              Adventures
            </a>
          </li>
          <li className="hover:text-secondary my-8">
            <a
              href="#"
              className={`${
                isActive
                  ? "opacity-100 transition-opacity duration-[800ms]"
                  : "opacity-0"
              }`}
            >
              Stories
            </a>
          </li>
          <li className="hover:text-secondary my-8">
            <a
              href="/about_us"
              className={`${
                isActive
                  ? "opacity-100 transition-opacity duration-[1100ms]"
                  : "opacity-0"
              }`}
            >
              About us
            </a>
          </li>
          <li className="hover:text-secondary my-8">
            <a
              href="/meet_the_team"
              className={`${
                isActive
                  ? "opacity-100 transition-opacity duration-[1400ms]"
                  : "opacity-0"
              }`}
            >
              Meet the team
            </a>
          </li>
          <button
            type="button"
            className="text-text font-mono bg-secondary hover:bg-tertiary focus:ring-4 focus:ring-blue-300 rounded-md text-[12px] font-semibold px-8 py-3.5"
          >
            GET IN TOUCH
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
