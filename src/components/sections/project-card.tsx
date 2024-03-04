import { ImGithub } from "react-icons/im";
import { RxOpenInNewWindow } from "react-icons/rx";

type ProjectCardProps = {
  title: string;
  quote: string;
  img: string;
  github: string;
  link: string;
};

export const ProjectCard = ({
  title,
  quote,
  img,
  github,
  link,
}: ProjectCardProps) => {
  return (
    <div className="dark:bg-slate-600 bg-slate-300 rounded-3xl md:w-[500px] w-full h-64 flex justify-start items-start overflow-hidden relative shadow-lg mb-8">
      <div className="h-full p-2 md:p-8 w-[50%] flex justify-center">
        <div className="h-36">
          <a
            href={link}
            target="_blank"
          >
            <img
              src={`/${img}`}
              alt={title}
              className="object-fill rounded-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </a>
        </div>
      </div>
      <div className="w-[50%] h-full flex flex-col justify-between dark:bg-cyan-900/50 bg-cyan-200/50 p-8 pl-4">
        <div>
          <h1 className="text-xl">{title}</h1>
          <h3 className="text-sm dark:text-slate-400 italic">
            {quote}
          </h3>
          <div className="w-full flex mt-3">
            <a
              href={github}
              target="_blank"
            >
              <ImGithub
                size={24}
                className="mr-4 hover:scale-110 duration-300 ease-in-out"
              />
            </a>
            <a
              href={link}
              target="_blank"
            >
              <RxOpenInNewWindow
                size={24}
                className="hover:scale-110 duration-300 ease-in-out"
              />
            </a>
          </div>
        </div>
        <span className="text-xs italic dark:text-slate-400 text-end">by JG.</span>
      </div>
    </div>
  );
};
