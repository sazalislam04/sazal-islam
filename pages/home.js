import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRocket } from "react-icons/fa";
import facebook from "../public/facebook.png";
import github from "../public/github.png";
import gmail from "../public/gmail.png";
import linkedin from "../public/linkedin.png";

const HomePage = () => {
  return (
    <div className="py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 container">
        <div className="leading-9 md:mt-14 md:text-left text-center">
          <span className="text-4xl">Hello I'm</span>
          <h2 className="text-5xl lg:text-7xl font-semibold text-indigo-900">
            Md Sazal Islam
          </h2>
          <p className="text-4xl mt-2">
            <span className="text-indigo-800 font-medium">MERN</span> Stack
            Developer
          </p>
          <div className="mt-8 flex  gap-4">
            <button className="px-6 flex gap-2 items-center bg-indigo-500 rounded-full text-white focus:ring-indigo-500 py-[6px] border focus:outline-none focus:ring-2 border-indigo-400 transition duration-300">
              <span>Download CV</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </span>
            </button>

            <button className="px-6 flex gap-2 items-center rounded-full text-indigo-600 font-medium focus:ring-indigo-500 py-[6px] border focus:outline-none focus:ring-2 border-indigo-400 transition duration-300">
              Hire me
              <span>
                <FaRocket />
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-8 lg:mt-0 md:w-3/5 mx-auto justify-between">
          <Link
            href="https://github.com/sazalislam04"
            className="mx-auto p-12 md:p-6 lg:p-12 border custom-shadow rounded-lg"
          >
            <Image src={github} width={70} height={70} alt="" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sazal-islam/"
            className="mx-auto p-12 md:p-6 lg:p-12 border custom-shadow rounded-lg"
          >
            <Image src={linkedin} width={70} height={70} alt="" />
          </Link>
          <Link
            href="https://www.facebook.com/sazalislam04"
            className="mx-auto p-12 md:p-6 lg:p-12 border custom-shadow rounded-lg"
          >
            <Image src={facebook} width={70} height={70} alt="" />
          </Link>
          <Link
            href="mailto:sazal.islam14@gmail.com"
            className="mx-auto p-12 md:p-6 lg:p-12 border custom-shadow rounded-lg"
          >
            <Image src={gmail} width={70} height={70} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
