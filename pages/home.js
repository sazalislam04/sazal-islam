import Image from "next/image";
import Link from "next/link";
import React from "react";
import facebook from "../public/facebook.png";
import github from "../public/github.png";
import gmail from "../public/gmail.png";
import linkedin from "../public/linkedin.png";

const HomePage = () => {
  return (
    <div className="py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto px-4">
        <div className="leading-9 md:mt-14 md:text-left text-center">
          <span className="text-4xl">Hello I'm</span>
          <h2 className="text-5xl lg:text-7xl font-semibold text-indigo-900">
            Md Sazal Islam
          </h2>
          <p className="text-4xl mt-2">
            <span className="text-indigo-800 font-medium">MERN</span> Stack
            Developer
          </p>
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
