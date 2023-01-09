import Link from "next/link";
import React from "react";
import Nav from "../components/Nav";

const Header = () => {
  return (
    <>
      <header className="py-4 shadow flex justify-between">
        <nav className="hidden md:flex sticky top-0 items-center justify-between container mx-auto px-4">
          <h2 className="text-3xl font-medium">
            Sazal<span className="text-indigo-500">Islam</span>{" "}
          </h2>

          <ul className="flex my-4 md:my-0 gap-5">
            <li className="text-lg px-4">
              <Link href="/">Home</Link>
            </li>
            <li className="text-lg px-4">
              <Link href="/about">About</Link>
            </li>
            <li className="text-lg px-4">
              <Link href="/services">Services</Link>
            </li>
            <li className="text-lg px-4">
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className="text-lg">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden mx-2 sm:mx-4 md:mx-0 flex justify-end w-full">
          <Nav />
        </div>
      </header>
    </>
  );
};

export default Header;
