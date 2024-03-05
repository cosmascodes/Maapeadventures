import Adventure from "@/components/adventure";
import AdventureStory from "@/components/story";

export default function Home() {
  const adventureData = [
    {
      title: "Safari Adventures",
    },
    {
      title: " Mountain Escapes",
    },
    {
      title: "Island Expeditions",
    },
    {
      title: "Jungle Journeys",
    },
    {
      title: "Desert Dreams",
    },
    {
      title: "Ocean Odyssey",
    },
  ];
  const adventureStory = [
    {
      title: "Safari Adventures",
      author: "Adventurer's name",
    },
    {
      title: " Mountain Escapes",
      author: "Adventurer's name",
    },
    {
      title: "Island Expeditions",
      author: "Adventurer's name",
    },
    {
      title: "Jungle Journeys",
      author: "Adventurer's name",
    },
  ];
  return (
    <main>
      {/* Choose adventures */}
      <section className="bg-hero-pattern bg-[length:22vw] bg-[center_right_24rem] bg-no-repeat flex flex-col justify-center items-center p-24 pb-12">
        <h1 className="font-duality text-6xl text-text mb-8">
          Choose an adventure
        </h1>
        <div className=" grid grid-cols-3 place-content-center gap-12">
          {adventureData.map((adventure, index) => {
            return <Adventure key={index} title={adventure.title} />;
          })}
        </div>
        <a className="mt-12 text-secondary text-xl underline">ALL ADVENTURES</a>
      </section>

      {/* Get in touch */}
      <section className="flex flex-row bg-secondary text-white h-52">
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
      </section>

      {/* Adventure stories */}
      <section className="bg-hero-pattern bg-[length:24vw] bg-[center_left_16rem] bg-no-repeat flex flex-col justify-center items-center p-24 pb-12">
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
      </section>
    </main>
  );
}
