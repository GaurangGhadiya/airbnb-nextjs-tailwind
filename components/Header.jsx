import React from "react";
import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon,
} from "@heroicons/react/solid";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md px-5 py-4 md:px-10">
      {/* Left logo*/}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Middele search*/}
      <div className="flex items-center rounded-full md:border-2 md:shadow-sm py-1 ">
        <input
          type="text"
          placeholder="Start your search"
          className="outline-none text-sm text-gray-600 placeholder-gray-400 bg-transparent pl-5 flex-grow"
        />
        <SearchIcon className="h-8 bg-red-400 p-2 rounded-full text-white cursor-pointer hidden md:inline-flex md:mx-2" />
      </div>
      {/* Right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className=" p-2 hover:shadow-sm space-x-2 flex items-center border-2 rounded-full">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
