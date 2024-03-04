type TimelineElementProps = {
  date: string;
  company: string;
  content: string;
};

export const TimelineElement = ({
  date,
  company,
  content,
}: TimelineElementProps) => {
  return (
    <li className="relative flex mt-4">
      <div className="after:absolute after:h-full after:w-1 dark:after:bg-slate-600 after:bg-slate-300 after:left-[6px] after:z-10 mt-1">
        <div className="h-4 w-4 rounded-full bg-cyan-500 z-40"></div>
      </div>
      <div className="ml-2">
        <h3 className="dark:text-cyan-100 text-cyan-600 font-bold border-2 p-1 px-2 dark:border-cyan-300 border-cyan-600 rounded-xl w-fit text-xs mb-2">
          {date}
        </h3>
        <h2 className="dark:text-cyan-500 text-cyan-700 font-semibold text-xl">
          {company}
        </h2>
        <p className="dark:text-slate-300 text-slate-700 mt-2">
          {content}
        </p>
      </div>
    </li>
  );
};
