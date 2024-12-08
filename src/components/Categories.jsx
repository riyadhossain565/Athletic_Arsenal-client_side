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
          <button className="px-8 py-3 font-bold border border-[#ff5209] text-black hover:bg-[#ff5209] hover:text-white hover:boreder-[#ff5209]">
            Cricket
          </button>
          <button className="px-8 py-3 font-bold border border-[#ff5209] text-black hover:bg-[#ff5209] hover:text-white hover:boreder-[#ff5209]">
            Football
          </button>
          <button className="px-8 py-3 font-bold border border-[#ff5209] text-black hover:bg-[#ff5209] hover:text-white hover:boreder-[#ff5209]">
            Basketball
          </button>
          <button className="px-8 py-3 font-bold border border-[#ff5209] text-black hover:bg-[#ff5209] hover:text-white hover:boreder-[#ff5209]">
            Fitness
          </button>
          <button className="px-8 py-3 font-bold border border-[#ff5209] text-black hover:bg-[#ff5209] hover:text-white hover:boreder-[#ff5209]">
            Golf
          </button>
          <button className="px-8 py-3 font-bold border border-[#ff5209] text-black hover:bg-[#ff5209] hover:text-white hover:boreder-[#ff5209]">
            Cycling
          </button>
        </Fade>
      </div>
    </div>
  );
};

export default Categories;
