import { ImGithub } from "react-icons/im";
import { RxOpenInNewWindow } from "react-icons/rx";
import { ProjectCard } from "./project-card";

export const Projects = () => {
  return (
    <section>
        <h1 className="text-3xl font-bold mb-16 mt-32">Projects</h1>
      <div className="w-full flex justify-center">
        <div className="w-full flex flex-col items-center">
            <ProjectCard github="https://github.com/joajo13/react-password-generator" img="react-password-generator.png" link="https://react-password-generator-teal.vercel.app/" quote="Be carefull, be safe." title="Password Generator"/>
            <ProjectCard github="https://github.com/joajo13/react-chess" img="react-chess.png" link="https://react-chess-joajo13.vercel.app/" quote="Time is money." title="Chess counter."/>
        </div>
      </div>
    </section>
  );
};
