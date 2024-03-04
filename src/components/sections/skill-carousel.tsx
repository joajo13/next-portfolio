import { FaNode } from "react-icons/fa";
import { PiFileSqlLight } from "react-icons/pi";
import {
  SiExpress,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const SkillCarousel = () => {
  return (
    <section>
      <div className="flex w-full justify-center items-center">
        <div className="w-[800px] inline-flex flex-nowrap mt-36 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_li]:max-w-fit animate-infinite-scroll">
            <li>
              <SiNextdotjs size={36} />
            </li>
            <li>
              <SiTypescript size={36} />
            </li>
            <li>
              <SiJavascript size={36} />
            </li>
            <li>
              <SiTailwindcss size={36} />
            </li>
            <li>
              <PiFileSqlLight size={36} />
            </li>
            <li>
              <SiMysql size={36} />
            </li>
            <li>
              <FaNode size={36} />
            </li>
            <li>
              <SiExpress size={36} />
            </li>
          </ul>
          <ul
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_li]:max-w-fit animate-infinite-scroll"
            aria-hidden="true"
          >
            <li>
              <SiNextdotjs size={36} />
            </li>
            <li>
              <SiTypescript size={36} />
            </li>
            <li>
              <SiJavascript size={36} />
            </li>
            <li>
              <SiTailwindcss size={36} />
            </li>
            <li>
              <PiFileSqlLight size={36} />
            </li>
            <li>
              <SiMysql size={36} />
            </li>
            <li>
              <FaNode size={36} />
            </li>
            <li>
              <SiExpress size={36} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
