import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import enjoy from '../../public/42367-joy-in-education.json'

const Home = () => {
  return (
    <div className='my-container px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 flex flex-col justify-between lg:flex-row items-center"> '>
      {/* text section */}
      <div className="mb-10 lg:max-w-lg lg:pr-4 lg:mb-0">
        <div className="badge">
          <p>IT Society</p>
        </div>
        <div className="text-4xl font-bold tracking-wide mb-7">
          <p>
            Once a Programmer <br />{" "}
            <span className="text-blue-500">Always a Programmer</span>
          </p>
        </div>
        <div className="font-xl text-gray-400 tracking-wide ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            dolores libero officia suscipit aliquam officiis ipsa reprehenderit
            obcaecati at harum, maiores quas maxime perspiciatis sit, eum dolore
            tempore amet minus!
          </p>
        </div>
        <div className="inline-flex mx-auto items-center mt-5">
          <Link
            to="/books"
            className="px-9 py-4 rounded bg-blue-400 text-white hover:bg-blue-500 font-bold duration-200 transition-colors "
          >
            View Store
          </Link>
          <Link
            to="/about"
            className="ml-5 text-xl transition-colors duration-200 hover:text-blue-700"
          >
            Learn More
          </Link>
        </div>
      </div>
      {/* animation */}
      <div className="relative lg:max-w-1/2">
            <div>
               <Lottie animationData={enjoy} loop={true}></Lottie>
            </div>
        </div>
    </div>
  );
};

export default Home;
