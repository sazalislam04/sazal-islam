import React from "react";

const Education = () => {
  return (
    <>
      <div className="container bg-gray-50 mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div
            className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
            style={{ left: "50%" }}
          ></div>
          <div className="mb-4 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 custom-shadow w-8 h-8 rounded-full">
              <span className="mx-auto text-white font-semibold text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </span>
            </div>
            <div className="order-1 bg-indigo-400 rounded-lg custom-shadow w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold flex items-center justify-between text-white text-xl">
                Bachelor of Social Science
                <span className="text-xs bg-white text-indigo-800 px-2 rounded-full py-1">
                  2014 - 2018
                </span>
              </h3>
              <div className="mb-2">
                <span className="text-sm capitalize font-medium tracking-wide text-white text-opacity-100">
                  Department of sociology
                </span>
              </div>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                Govt. Titumir College Dhaka, Bangladesh.
              </p>
            </div>
          </div>

          <div className="mb-4 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 custom-shadow w-8 h-8 rounded-full">
              <span className="mx-auto text-white font-semibold text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </span>
            </div>
            <div className="order-1 bg-white rounded-lg custom-shadow w-5/12 px-6 py-4">
              <h3 className="mb-3 flex justify-between items-center font-bold text-gray-800 text-xl">
                Higher Secondary School Certificate
                <span className="text-xs bg-indigo-500 text-white px-2 rounded-full py-1">
                  2011 - 2013
                </span>
              </h3>
              <p className="text-sm mb-2 leading-snug tracking-wide text-gray-900 text-opacity-100">
                Major: Humanities
              </p>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                Khater Ali Degree College, Kushtia Bangladesh.
              </p>
            </div>
          </div>

          <div className="mb-4 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 custom-shadow w-8 h-8 rounded-full">
              <span className="mx-auto text-white font-semibold text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </span>
            </div>
            <div className="order-1 bg-indigo-400 rounded-lg custom-shadow w-5/12 px-6 py-4">
              <h3 className="mb-3 flex justify-between items-center font-bold text-white text-xl">
                Secondary School Certificate
                <span className="text-xs bg-white text-indigo-800 px-2 rounded-full py-1">
                  2006 - 2010
                </span>
              </h3>
              <p className="text-sm mb-2 leading-snug tracking-wide text-gray-100 text-opacity-100">
                Major: Science
              </p>
              <p className="text-sm leading-snug tracking-wide text-gray-100 text-opacity-100">
                Harinarayanpur High School, Kushtia Bangladesh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
