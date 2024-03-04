import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { FiMail, FiPhone } from "react-icons/fi";
import { ImGithub, ImLinkedin } from "react-icons/im";

import { SiUpwork } from "react-icons/si";
import { TfiLocationPin } from "react-icons/tfi";

export const Aside = () => {
  return (
    <aside className="w-[20%] fixed ml-24 hidden 2xl:block">
      <div className="dark:bg-slate-500/30 bg-slate-300/30 rounded-xl flex flex-col w-full h-full">
        <div className="mt-28 w-full flex flex-col items-center justify-center">
          <h1 className="text-2xl font-semibold">Juan Giupponi</h1>
          <span className="dark:text-slate-300">Fullstack dev.</span>
        </div>
        <div className=" bg-slate-200/30 p-4 m-4 rounded-xl flex justify-between">
          <button className="rounded-xl dark:hover:bg-slate-100/30 hover:bg-slate-500/30 p-2 transition-all duration-300">
            <ImGithub className="text-2xl" />
          </button>
          <button className="rounded-xl dark:hover:bg-slate-100/30 hover:bg-slate-500/30 p-2 transition-all duration-300">
            <SiUpwork className="text-2xl" />
          </button>
          <button className="rounded-xl dark:hover:bg-slate-100/30 hover:bg-slate-500/30 p-2 transition-all duration-300">
            <ImLinkedin className="text-2xl" />
          </button>
        </div>
        <div className="bg-slate-200/30 flex flex-col m-4 p-4 rounded-xl">
          <div className="bg-cyan-500/20 p-3 rounded-xl flex items-center w-full mb-3">
            <FiPhone size={20}/>
            <p className="ml-3"> +54 336 4183950</p>
          </div>
          <div className="bg-cyan-500/20 p-3 rounded-xl flex items-center w-full mb-3">
            <TfiLocationPin size={20}/>
            <p className="ml-3">Buenos Aires, Argentina.</p>
          </div>
          <div className="bg-cyan-500/20 p-3 rounded-xl flex items-center w-full">
            <FiMail size={20}/>
            <p className="ml-3 text-sm">juangiupponi2003@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="h-32 w-32 bg-slate-600 rounded-xl absolute -top-9 left-1/2 transform -translate-x-1/2 p-1">
        <img src="/profile.jpeg" alt="profilePic2" className="h-full w-full rounded-xl object-cover" />
      </div>
    </aside>
  );
};
