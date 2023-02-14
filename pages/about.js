import Image from "next/image";
import Resume from "../components/Resume";
import profile from "../public/sazal.jpg";

const About = () => {
  return (
    <>
      <section className="py-10 ">
        <div className="container">
          <h2 className="text-4xl section-heading font-medium capitalize text-center">
            about <span className="text-indigo-800">me</span>
          </h2>
          <div className=" mt-14 md:flex justify-between gap-16">
            <div className="md:w-1/3">
              <Image
                className="rounded-full custom-shadow object-cover"
                src={profile}
                width={150}
                height={150}
                alt=""
              />
            </div>
            <div className="border custom-shadow rounded-2xl p-6 md:w-9/12">
              <div className="">
                <p className="leading-8 tracking-wider">
                  <span className="text-lg">Hello! My Name is </span>
                  <span className="text-indigo-800 text-lg">
                    Sazal Islam.
                  </span>{" "}
                  I'm a{" "}
                  <span className="text-indigo-800 font-medium">MERN</span>{" "}
                  Stack Developer with over years of experience. I'm from
                  Bangladesh. I love to explore new features related to
                  programming and development. I code and create web elements
                  for amazing people around the world. I like work with new
                  people. New people are new experiences!.
                </p>
              </div>
              <div>
                <h2 className="text-center text-lg font-semibold my-2 mt-4">
                  <span className="text-indigo-800">My</span> Skills
                </h2>
              </div>
              <div className="">
                {/* html */}
                <div>
                  <div className="w-[80%] flex justify-between items-center py-1">
                    <p>HTML</p>
                  </div>
                  <div className="progress1 progress-moved">
                    <div className="progress-bar1"></div>
                  </div>
                </div>
                {/* css */}
                <div className="mt-2">
                  <div className="w-[70%] flex justify-between items-center py-1">
                    <p>CSS</p>
                  </div>
                  <div className="progress2 progress-moved">
                    <div className="progress-bar2"></div>
                  </div>
                </div>
                {/* javascript */}
                <div className="mt-2">
                  <div className="w-[70%] flex justify-between items-center py-1">
                    <p>JavaScript</p>
                  </div>
                  <div className="progress3 progress-moved">
                    <div className="progress-bar3"></div>
                  </div>
                </div>
                {/* react */}
                <div className="mt-2">
                  <div className="w-[75%] flex justify-between items-center py-1">
                    <p>React.js</p>
                  </div>
                  <div className="progress4 progress-moved">
                    <div className="progress-bar4"></div>
                  </div>
                </div>
                {/* next js */}
                <div className="mt-2">
                  <div className="w-[50%] flex justify-between items-center py-1">
                    <p>Next.js</p>
                  </div>
                  <div className="progress8 progress-moved">
                    <div className="progress-bar8"></div>
                  </div>
                </div>
                {/* node */}
                <div className="mt-2">
                  <div className="w-[40%] flex justify-between items-center py-1">
                    <p>Node.js</p>
                  </div>
                  <div className="progress5 progress-moved">
                    <div className="progress-bar5"></div>
                  </div>
                </div>
                {/* express */}
                <div className="mt-2">
                  <div className="w-[50%] flex justify-between items-center py-1">
                    <p>Express.js</p>
                  </div>
                  <div className="progress6 progress-moved">
                    <div className="progress-bar6"></div>
                  </div>
                </div>
                {/* mongo */}
                <div className="mt-2">
                  <div className="w-[60%] flex justify-between items-center py-1">
                    <p>MongoDB</p>
                  </div>
                  <div className="progress7 progress-moved">
                    <div className="progress-bar7"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <Resume />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
