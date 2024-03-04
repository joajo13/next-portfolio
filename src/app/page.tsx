import { About } from "@/components/sections/about";
import { Presentation } from "@/components/sections/presentation";
import { Projects } from "@/components/sections/projects";
import { SkillCarousel } from "@/components/sections/skill-carousel";
import { Timeline } from "@/components/sections/timeline";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export default function Home() {
  return (
    <main className="flex items-center justify-start w-full 2xl:ml-forAside min-h-screen 2xl:mr-24">
      <div className="h-full w-full 2xl:pl-24 mx-auto">
        <div className="h-full w-full dark:bg-slate-500/30 bg-slate-300/30 md:rounded-t-xl rounded-t-3xl p-10 md:p-20 md:pt-32 pt-20">
          <Presentation />

          <SkillCarousel/>

          <Timeline/> 

          <Projects />

          {/* <About/> */}

        </div>
      </div>
    </main>
  );
}
