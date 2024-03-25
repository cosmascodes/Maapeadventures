import Adventure from "@/components/adventure";
import AdventureStory from "@/components/story";
import SwiperSlider from "@/components/swiperImages";
import AdventuresData from "./api/data";
import Link from "next/link";

export default function Home() {
  const adventureStory = [
    {
      title: "ADVENTURE STORY TITLE",
      author: "Adventurer's names",
    },
    {
      title: " ADVENTURE STORY TITLE ",
      author: "Adventurer's names",
    },
    {
      title: "ADVENTURE STORY TITLE ",
      author: "Adventurer's names",
    },
    {
      title: " ADVENTURE STORY TITLE",
      author: "Adventurer's names",
    },
  ];
  return (
    <main>
      {/* Hero section */}
      <section className="h-screen 2xl:h-[65vh] relative">
        <div className="z-10 md:bg-hero-pattern md:bg-[length:32vw] 2xl:bg-[length:24vw] md:bg-[center_left_5rem] 2xl:bg-[center_left_16rem] bg-no-repeat md:px-24 2xl:px-96 absolute top-0 left-0 h-full flex items-center">
          <div className="p-10 text-white flex flex-col text-center justify-center items-center md:w-[440px] md:h-[300px] rounded-[36px] md:bg-primary md:mt-10 md:ml-24 2xl:ml-0">
            <h1 className="font-duality text-6xl">Explore Nairobi</h1>
            <p className="my-5 text-xl">
              Welcome and short paragraph of what Maape does.
            </p>
            <Link href={"/alladventures"}>
              <button
                type="button"
                className="uppercase font-semibold w-fit text-text font-mono bg-secondary hover:bg-tertiary focus:ring-4 focus:ring-blue-300 rounded-md text-[12px] px-5 py-2 me-2"
              >
                Choose an Adventure
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full h-full flex md:justify-end md:items-end md:pr-24 2xl:pr-80">
          <div className="w-full md:w-[66%] 2xl:w-[60%] h-full flex justify-center items-end">
            <SwiperSlider />
          </div>
        </div>
      </section>

      {/* Choose adventures */}
      <section className="md:bg-hero-pattern bg-[length:22vw] bg-[center_right_24rem] bg-no-repeat flex flex-col justify-center items-center md:pt-24 md:pb-12 py-8">
        <h1 className="font-duality text-6xl text-text mb-8 md:mb-12 text-center">
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
        <Link
          href={"/alladventures"}
          className="mt-8 md:mt-12 text-secondary text-xl underline"
        >
          ALL ADVENTURES
        </Link>
      </section>

      {/* Get in touch */}
      <section className="flex flex-row bg-secondary text-white h-40 md:h-52">
        <div className="hidden md:inline w-[40%] h-full bg-hero-map bg-no-repeat bg-left"></div>
        <div className="flex flex-col justify-center md:items-center mx-6">
          <p className="text-sm md:text-xl md:text-center mb-3.5">
            Call to get in touch. Lorem ipsum dolor sit amet.
          </p>
          <Link href={"/get_in_touch"}>
            <button
              type="button"
              className=" w-fit text-white font-mono border-2 border-white hover:bg-tertiary focus:ring-4 focus:ring-blue-300 rounded-md text-[12px] font-semibold px-5 py-1.5 me-2"
            >
              GET IN TOUCH
            </button>
          </Link>
        </div>
        <div className="w-1/2 md:w-[40%] h-full bg-hero-map bg-cover md:bg-contain bg-no-repeat bg-left md:bg-right"></div>
      </section>

      {/* Adventure stories */}
      <section className="md:bg-hero-pattern bg-[length:24vw] bg-[center_left_16rem] bg-no-repeat flex flex-col justify-center items-center md:pt-24 md:pb-12 py-8">
        <h1 className="font-duality text-6xl text-text md:mb-12 text-center px-4">
          Adventure stories
        </h1>
        <div className="w-full md:w-fit grid grid-flow-col md:grid-flow-row overflow-x-auto overscroll-x-contain no-scrollbar md:grid-cols-2 md:place-content-center md:gap-12">
          {adventureStory.map((adventureStory, index) => {
            return (
              <AdventureStory
                key={index}
                title={adventureStory.title}
                name={adventureStory.author}
              />
            );
          })}
          <div className="w-6 md:hidden"></div>
        </div>
        <a className="mt-8 md:mt-12 md:mb-12 text-secondary text-xl underline">
          MORE ADVENTURE STORIES
        </a>
      </section>
    </main>
  );
}
