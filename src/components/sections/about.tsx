import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export const About = () => {
  return (
    <section className="2xl:hidden">
      <div className="w-full bg-slate-300/30 p-4 mt-32 rounded-xl">
        <div className="w-full flex h-16">
          <div className="min-h-16 min-w-16 w-16 h-16 mr-4 ">
            <img
              src="/profile.jpeg"
              className="contain-cover rounded-full h-full w-full"
            />
          </div>
          <h1 className="text-2xl font-semibold flex items-center">Juan Giupponi</h1>
        </div>
        <div className="p-2 flex w-full justify-between items-start flex-col mt-2">
          <div className="flex items-center bg-slate-300/30 p-2 px-3 rounded-xl mb-2">
            <FiPhone />
            <p className="ml-3">+54 336 4183950</p>
          </div>
          <div className="flex items-center bg-slate-300/30 p-2 px-3 rounded-xl mb-2">
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
