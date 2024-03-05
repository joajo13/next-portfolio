import { FaRegCalendarAlt } from "react-icons/fa";
import { TimelineElement } from "./timeline-element";

const experience = [
  {
    date: "Actually",
    title: "LeandroDapello",
    content: "Fullstack developer.",
  },
  {
    date: "November, 2023",
    title: "LeandroDapello",
    content:
      "Fullstack developer at LeandroDapello consultory. Working in the frontend with differents technologies as React, Jquery, Tailwind, Bootstrap. And in the backend i was working with Node.js, Express, SQl, MySql, MongoDB, etc.",
  },
];

export const Timeline = () => {
  return (
    <section>
      <div className="w-full mt-24 mb-16">
        <h2 className="text-3xl font-semibold">Experience</h2>

        <div className="mt-8 w-[80%]">
          <ul>
            {
                experience.map((exp, i) => (
                    <TimelineElement
                    key={i}
                    date={exp.date}
                    company={exp.title}
                    content={exp.content}
                    />
                ))
            }
          </ul>
        </div>
      </div>
    </section>
  );
};
