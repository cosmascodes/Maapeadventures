import Adventure from "@/components/adventure";
import AdventureStory from "@/components/story";
import SwiperSlider from "@/components/swiperImages";

export default function Home() {
  const adventureData = [
    {
      title: "adventure title",
    },
    {
      title: " adventure title",
    },
    {
      title: "adventure title ",
    },
    {
      title: "adventure title ",
    },
    {
      title: " adventure title",
    },
    {
      title: " adventure title",
    },
  ];
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
        <div className="z-10 lg:bg-hero-pattern lg:bg-[length:32vw] 2xl:bg-[length:24vw] lg:bg-[center_left_5rem] 2xl:bg-[center_left_16rem] bg-no-repeat lg:px-24 2xl:px-96 absolute top-0 left-0 h-full flex items-center">
          <div className="p-5 text-white flex flex-col text-center justify-center items-center lg:w-[440px] lg:h-[300px] rounded-[36px] lg:bg-primary lg:mt-10 lg:ml-24 2xl:ml-0">
            <h1 className="font-duality text-5xl">Explore Nairobi</h1>
            <p className="my-5 text-xl">
              Welcome and short paragraph of what Maape does.
            </p>
            <button
              type="button"
              className="uppercase font-semibold w-fit text-text font-mono bg-secondary hover:bg-tertiary focus:ring-4 focus:ring-blue-300 rounded-lg text-[12px] px-5 py-2 me-2"
            >
              Choose an adventure
            </button>
          </div>
        </div>
        <div className="w-full h-full flex lg:justify-end lg:items-end lg:pr-24 2xl:pr-80">
          <div className="w-full lg:w-[66%] 2xl:w-[60%] h-full flex justify-center items-end">
            <SwiperSlider />
          </div>
        </div>
      </section>

      {/* Choose adventures */}
      <section className="lg:bg-hero-pattern bg-[length:22vw] bg-[center_right_24rem] bg-no-repeat flex flex-col justify-center items-center lg:pt-24 lg:pb-12 py-8">
        <h1 className="font-duality text-3xl lg:text-6xl text-text mb-8 lg:mb-12">
          Choose an adventure
        </h1>
        <div className="w-full lg:w-fit grid grid-flow-col lg:grid-flow-row overflow-x-auto overscroll-x-contain no-scrollbar lg:grid-cols-3 lg:place-content-center lg:gap-12">
          {adventureData.map((adventure, index) => {
            return <Adventure key={index} title={adventure.title} />;
          })}
          <div className="w-6 lg:hidden"></div>
        </div>
        <a className="mt-8 lg:mt-12 text-secondary text-xl underline">
          ALL ADVENTURES
        </a>
      </section>

      {/* Get in touch */}
      <section className="flex flex-row bg-secondary text-white h-40 lg:h-52">
        <div className="hidden lg:inline w-[40%] h-full bg-hero-map bg-no-repeat bg-left"></div>
        <div className="flex flex-col justify-center lg:items-center mx-6">
          <p className="text-sm lg:text-xl lg:text-center mb-3.5">
            Call to get in touch. Lorem ipsum dolor sit amet.
          </p>
          <button
            type="button"
            class=" w-fit text-white font-mono border-2 border-white hover:bg-tertiary focus:ring-4 focus:ring-blue-300 rounded-lg text-[12px] font-semibold px-5 py-1.5 me-2"
          >
            GET IN TOUCH
          </button>
        </div>
        <div className="w-1/2 lg:w-[40%] h-full bg-hero-map bg-cover lg:bg-contain bg-no-repeat bg-left lg:bg-right"></div>
      </section>

      {/* Adventure stories */}
      <section className="lg:bg-hero-pattern bg-[length:24vw] bg-[center_left_16rem] bg-no-repeat flex flex-col justify-center items-center lg:pt-24 lg:pb-12 py-8">
        <h1 className="font-duality text-3xl lg:text-6xl text-text lg:mb-12">
          Adventure stories
        </h1>
        <div className="w-full lg:w-fit grid grid-flow-col lg:grid-flow-row overflow-x-auto overscroll-x-contain no-scrollbar lg:grid-cols-2 lg:place-content-center lg:gap-12">
          {adventureStory.map((adventureStory, index) => {
            return (
              <AdventureStory
                key={index}
                title={adventureStory.title}
                name={adventureStory.author}
              />
            );
          })}
          <div className="w-6 lg:hidden"></div>
        </div>
        <a className="mt-8 lg:mt-12 lg:mb-12 text-secondary text-xl underline">
          MORE ADVENTURE STORIES
        </a>
      </section>
    </main>
  );
}
