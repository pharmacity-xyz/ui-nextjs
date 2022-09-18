import Link from "next/link";
import React from "react";
import { BsCart4, BsSearch } from "react-icons/bs";
import { VscTriangleDown } from "react-icons/vsc";

export const Header = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <Link href="/">
          <span className="font-semibold text-xl tracking-tight cursor-pointer">
            Pharmacity
          </span>
        </Link>
      </div>
      {/* <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div> */}
      <div className="flex items-center border border-white rounded-xl">
        <div className="text-sm lg:flex-grow">
          <select className="h-8 rounded-l-xl bg-gray-300">
            <option>All</option>
            <option>Supplements</option>
            <option>Vitamins</option>
            <option>Diet & Dutrition</option>
            <option>Drinks</option>
          </select>
          {/* <Link href="/">
            <a className="flex items-center mt-4 lg:mt-0 text-teal-200 hover:text-white px-3">
              All
              <VscTriangleDown />
            </a>
          </Link> */}
        </div>
        <div className="">
          <input type="text" className="w-96 h-8 l p-4" />
        </div>
        <button className="px-4 bg-orange-400 h-8 rounded-r-xl">
          <BsSearch />
        </button>
      </div>
      <div className="w-full block lg:flex lg:items-center lg:w-auto">
        <div className="flex gap-4">
          <div>
            <Link href="/">
              <a className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                Login
              </a>
            </Link>
          </div>
          <div className="">
            <a
              href="/"
              className="flex text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              <BsCart4 />
              Cart
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
