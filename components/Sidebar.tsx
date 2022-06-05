import Image from "next/image";
import React from "react";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div>
      <img src="" alt="user-avatar" />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green ">Omer</span> Degirmenci
      </h3>
      <p className="px-2 py-1 mx-3 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Web Developer
      </p>
      <a
        href="/assets/Sumit Dey Resume.pdf"
        download="Sumit Dey Resume.pdf"
        className="flex items-center justify-center px-2 py-1 mx-3 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </a>
      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full ">
        <a href="https://www.youtube.com/channel/UClW8d1f5m0QAE_Ig024EP6A">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/sumit-dey-4a04431a9/">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/_sumax__/">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

        {/* Contacts */}
        <div
        className="w-full py-4 my-3 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" />
          <span>Limburg, NL</span>
        </div>
        <p className="my-2">myemail@gmail.com</p>
        <p className="my-2">0642587180</p>
      </div>
      <button onClick={()=>window.open('mailto:myemail@gmail.com')} className="px-5 py-2 rounded-full lg:bg-slate-600 bg-gradient-to-br from-green-400 to-blue-400 ">Email me!</button>
      <button className="px-5 py-2 rounded-full lg:bg-slate-600 bg-gradient-to-tr from-green-400 to-blue-400 ">Toggle Theme</button>
    </div>
  );
};

export default Sidebar;
