"use client";

import { ImGithub, ImLinkedin } from "react-icons/im";

export const Presentation = () => {
  return (
    <section>
      <div className="w-full">
        <h1 className="text-5xl font-semibold mb-2 md:mb-1">Juan Giupponi</h1>
        <span className="dark:text-cyan-400 dark:font-normal text-cyan-700 font-semibold text-2xl ">
          Fullstack dev.
        </span>
        <p className="text-xl dark:text-slate-400 text-slate-500 mt-2">
          Fullstack Web Developer. Always prioritizing user experience and
          system optimization.
        </p>
        <span className="text-xs italic dark:text-cyan-500 text-cyan-800 font-semibold">
          I like that it not only works well, but also looks good.
        </span>
        <div className="flex w-full gap-3 mt-3">
          <a href="https://github.com/joajo13" target="_blank" className="hover:scale-110 transition-all duration-300 hover:text-slate-600 dark:hover:text-slate-400">
            <ImGithub size={32} />
          </a>
          <a href="https://www.linkedin.com/in/juan-giupponi-018a9323b/" target="_blank" className="hover:scale-110 transition-all duration-300 hover:text-blue-600">
            <ImLinkedin size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};
