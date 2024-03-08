const Team = () => {
  const teamData = [
    {
      image: "/images/meet_the_team/u609.svg",
      name: "firstname lastname",
      position: "position",
      decription: "description",
    },
  ];
  return (
    <>
      <section className=" mt-16 flex flex-row bg-secondary text-white p-5">
        <div className="hidden md:inline w-[40%] h-full bg-hero-map bg-no-repeat bg-left"></div>
        <div className="flex flex-col justify-center items-center mx-6 text-text">
          <h1 className="font-duality text-5xl">Meet the Team</h1>
          <p className="text-sm md:text-xl text-center mt-3.5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod bibendum laoreet. Proin gravida dolor sit amet lacus
            accumsan et viverra justo commodo.
          </p>
        </div>
        <div className="hidden md:inline w-1/2 md:w-[40%] h-full bg-hero-map bg-contain bg-no-repeat bg-right"></div>
      </section>

      <section className="py-12 px-8 text-text">
        <div className="flex flex-col ">
          <img src="/images/meet_the_team/u609.svg" alt="team member 1" />
          <div className="pt-6 pb-14">
            <h2 className=" text-2xl uppercase font-bold ">
              firstname lastname
            </h2>
            <p className="font-bold uppercase text-tertiary text-sm">
              position
            </p>
            <div className="mt-4 text-xl">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                accumsan et viverra justo commodo.
              </p>
              <p className="mt-4">
                Proin sodales pulvinar tempor. Cum sociis natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Nam
                fermentum, nulla luctus pharetra vulputate, felis tellus mollis
                orci, sed rhoncus sapien nunc eget odio.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
          <img src="/images/meet_the_team/u671.svg" alt="team member 2" />
          <div className="pt-6">
            <h2 className=" text-2xl uppercase font-bold ">
              firstname lastname
            </h2>
            <p className="font-bold uppercase text-tertiary text-sm">
              position
            </p>
            <div className="mt-4 text-xl">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                accumsan et viverra justo commodo.
              </p>
              <p className="mt-4">
                Proin sodales pulvinar tempor. Cum sociis natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Nam
                fermentum, nulla luctus pharetra vulputate, felis tellus mollis
                orci, sed rhoncus sapien nunc eget odio.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
