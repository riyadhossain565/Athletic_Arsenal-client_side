import { Fade } from "react-awesome-reveal";

const Categories = () => {
  return (
    <div className="my-10">
      <div className="text-center w-3/5 mx-auto">
        <Fade direction="down">
          <h1 className="text-3xl font-bold caveat-font my-4">
            Explore Our Ultimate Sports Gear Collection
          </h1>
        </Fade>
        <Fade>
          <p>
            Gear up for greatness! Discover top-quality sports equipment
            designed to fuel your passion and elevate your performance, no
            matter the game.
          </p>
        </Fade>
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <Fade direction="up">
          <button className="px-8 py-3 font-bold border border-[#007bff] text-[#17a2b8] hover:bg-[#0056b3] hover:text-white hover:boreder-[#007bff]">
            Cricket
          </button>
          <button className="px-8 py-3 font-bold border border-[#007bff] text-[#17a2b8] hover:bg-[#0056b3] hover:text-white hover:boreder-[#007bff]">
            Football
          </button>
          <button className="px-8 py-3 font-bold border border-[#007bff] text-[#17a2b8] hover:bg-[#0056b3] hover:text-white hover:boreder-[#007bff]">
            Basketball
          </button>
          <button className="px-8 py-3 font-bold border border-[#007bff] text-[#17a2b8] hover:bg-[#0056b3] hover:text-white hover:boreder-[#007bff]">
            Fitness
          </button>
          <button className="px-8 py-3 font-bold border border-[#007bff] text-[#17a2b8] hover:bg-[#0056b3] hover:text-white hover:boreder-[#007bff]">
            Golf
          </button>
          <button className="px-8 py-3 font-bold border border-[#007bff] text-[#17a2b8] hover:bg-[#0056b3] hover:text-white hover:boreder-[#007bff]">
            Cycling
          </button>
        </Fade>
      </div>
    </div>
  );
};

export default Categories;
