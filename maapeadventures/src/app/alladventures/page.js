import Link from "next/link";
import AdventuresData from "../api/data";
import Adventure from "@/components/adventure";

const AllAdventures = () => {
  return (
    <section className="md:bg-hero-pattern bg-[length:22vw] bg-[center_right_24rem] bg-no-repeat flex flex-col justify-center items-center md:pt-24 md:pb-12 py-8">
      <h1 className="font-duality text-3xl md:text-6xl text-text mb-8 md:mb-12">
        Choose an adventure
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
    </section>
  );
};

export default AllAdventures;
