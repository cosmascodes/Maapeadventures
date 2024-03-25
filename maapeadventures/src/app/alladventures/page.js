import Link from "next/link";
import AdventuresData from "../api/data";
import Adventure from "@/components/adventure";

const AllAdventures = () => {
  return (
    <section className="md:bg-hero-pattern bg-[length:22vw] bg-[center_right_24rem] bg-no-repeat flex flex-col justify-center items-center pt-24 md:pb-12 py-8">
      <h1 className="font-duality text-6xl text-text mb-8 md:mb-12 text-center">
        Choose an Adventure
      </h1>
      <div className="w-full md:w-fit pt-14 pb-20 md:px-20 md:rounded-[60px] bg-primary">
        <h1 className="md:text-center mb-5 text-2xl font-mono font-bold text-white ml-12 md:ml-0">
          ADVENTURE PACKAGES
        </h1>
        <div className="w-full md:w-fit grid grid-flow-col md:grid-flow-row overflow-x-auto overscroll-x-contain no-scrollbar md:grid-cols-3 md:place-content-center md:gap-12">
          {AdventuresData.map((adventure, index) => {
            return (
              <Link
                href={{
                  pathname: "/singleadventure",
                  query: { id: adventure.id },
                }}
                key={index}
              >
                <Adventure image={adventure.image} title={adventure.title} />
              </Link>
            );
          })}
          <div className="w-6 md:hidden"></div>
        </div>
      </div>
      <div className="w-full md:w-fit pt-5 pb-10">
        <h1 className="md:text-center mb-5 text-2xl font-mono font-bold ml-12 md:ml-0">
          SINGLE ADVENTURES
        </h1>
        <div className="w-full md:w-fit grid grid-flow-col md:grid-flow-row overflow-x-auto overscroll-x-contain no-scrollbar md:grid-cols-3 md:place-content-center md:gap-12">
          {AdventuresData.map((adventure, index) => {
            return (
              <Link
                href={{
                  pathname: "/singleadventure",
                  query: { id: adventure.id },
                }}
                key={index}
              >
                <Adventure image={adventure.image} title={adventure.title} />
              </Link>
            );
          })}
          <div className="w-6 md:hidden"></div>
        </div>
      </div>
    </section>
  );
};

export default AllAdventures;
