import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export const About = () => {
  return (
    <section className="2xl:hidden">
      <div className="w-full bg-slate-300/30 p-4 flex mt-32 rounded-xl">
        <div className="min-h-44 min-w-44 w-44 h-44 mr-4  rounded-xl">
          <img
            src="/profile.jpeg"
            className="contain-cover rounded-xl h-full w-full"
          />
        </div>
        <div className="p-2 flex w-full justify-between items-start flex-col ">
          <div className="flex items-center bg-slate-300/30 p-2 px-3 rounded-xl">
            <FiPhone />
            <p className="ml-3">+54 336 4183950</p>
          </div>
          <div className="flex items-center bg-slate-300/30 p-2 px-3 rounded-xl">
            <FiMail />
            <p className="ml-3">juangiupponi2003@gmail.com</p>
          </div>
          <div className="flex items-center bg-slate-300/30 p-2 px-3 rounded-xl">
            <FiMapPin />
            <p className="ml-3">Buenos Aires, Argentina</p>
          </div>
        </div>
      </div>
    </section>
  );
};
