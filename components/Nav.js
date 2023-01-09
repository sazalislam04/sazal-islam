import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="container mx-auto">
      <div className="md:hidden w-full flex items-center  justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-medium">
            Sazal<span className="text-indigo-500">Islam</span>{" "}
          </h2>
        </div>
        <button className={`md:hidden`} onClick={() => setOpen(!open)}>
          {open ? (
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
      {open && (
        <nav className="absolute mt-1 w-full  left-1/2 translate-x-[-50%] container mx-auto bg-indigo-600">
          <ul className="relative">
            <li className="text-lg text-white bg-indigo-500 p-4 mb-2">
              <Link href="/">Home</Link>
            </li>
            <li className="text-lg text-white p-4 bg-indigo-500 mb-2">
              <Link href="/about">About</Link>
            </li>
            <li className="text-lg text-white p-4 bg-indigo-500 mb-2">
              <Link href="/services">Services</Link>
            </li>
            <li className="text-lg text-white p-4 bg-indigo-500 mb-2">
              <Link href="/profile">Profile</Link>
            </li>
            <li className="text-lg text-white p-4 bg-indigo-500">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Nav;
