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
      <section className="h-[65vh] relative">
        <div className="z-10 md:bg-hero-pattern bg-[length:24vw] bg-[center_left_16rem] bg-no-repeat  lg:px-96 absolute top-0 left-0 h-full flex items-center">
          <div className="p-5 text-white flex flex-col text-center justify-center items-center md:w-[440px] md:h-[300px] rounded-[36px] md:bg-primary md:mt-10">
            <h1 className="font-duality text-5xl">Explore Nairobi</h1>
            <p className="my-5 text-xl">
              Welcome and short paragraph of what Maape does.
            </p>
            <button
              type="button"
              className="uppercase font-semibold w-fit text-text font-mono bg-secondary hover:bg-tertiary focus:ring-4 focus:ring-blue-300 rounded-md text-[12px] px-5 py-2 me-2"
            >
              Choose an adventure
            </button>
          </div>
        </div>
        <div className="w-full h-full flex md:justify-end md:items-end md:pr-80">
          <div className="w-full md:w-[60%] h-full flex justify-center items-end md:rounded-3xl">
            <SwiperSlider />
          </div>
        </div>
      </section>

      {/* Choose adventures */}
      <section className="md:bg-hero-pattern bg-[length:22vw] bg-[center_right_24rem] bg-no-repeat flex flex-col justify-center items-center p-12 md:p-24 pb-12">
        <h1 className="font-duality text-3xl md:text-6xl text-text mb-8">
          Choose an adventure
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-3 place-content-center gap-12">
          {adventureData.map((adventure, index) => {
            return <Adventure key={index} title={adventure.title} />;
          })}
        </div>
        <a className="mt-12 text-secondary text-xl underline">ALL ADVENTURES</a>
      </section>

      {/* Get in touch */}
      {/* <section className="flex flex-row bg-secondary text-white h-52">
        <div className="w-[40%] h-full bg-hero-map bg-no-repeat bg-left"></div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-xl text-center mb-3.5">
            Call to get in touch. Lorem ipsum dolor sit amet.
          </p>
          <button
            type="button"
            class="text-white font-mono border-2 border-white hover:bg-tertiary focus:ring-4 focus:ring-blue-300 rounded-md text-[12px] font-semibold px-5 py-1.5 me-2"
          >
            GET IN TOUCH
          </button>
        </div>
        <div className="w-[40%] h-full bg-hero-map bg-no-repeat bg-right"></div>
      </section> */}

      {/* Adventure stories */}
      {/* <section className="bg-hero-pattern bg-[length:24vw] bg-[center_left_16rem] bg-no-repeat flex flex-col justify-center items-center p-24 pb-12">
        <h1 className="font-duality text-6xl text-text mb-8">
          Adventure stories
        </h1>
        <div className="grid grid-cols-2 place-content-center gap-12">
          {adventureStory.map((adventureStory, index) => {
            return (
              <AdventureStory
                key={index}
                title={adventureStory.title}
                name={adventureStory.author}
              />
            );
          })}
        </div>
        <a className="mt-12 text-secondary text-xl underline">
          MORE ADVENTURE STORIES
        </a>
      </section> */}
    </main>
  );
}
