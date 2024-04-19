import { FaRegCalendarAlt } from "react-icons/fa";
import { TimelineElement } from "./timeline-element";

const experience = [
  {
    date: "Currently",
    title: "LeandroDapello",
    content: "I'm currently working on three projects that are destined for the administration of three different companies. I'm in charge of handling the systems that are about the management of stocks, bills, clients, suppliers, etc. I'm also working on the institutional pages of two of them, from the design to the programming of each of them.",
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
