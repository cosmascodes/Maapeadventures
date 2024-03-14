const AboutUs = () => {
  return (
    <section className=" mt-16 p-6 text-text flex justify-center ">
      <div className="md:w-2/3 md:p-10 flex flex-col justify-center items-center">
        <h1 className="text-center text-6xl font-duality ">About Us</h1>
        <p className="mt-6 text-xl md:px-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan
          et viverra justo commodo. <br />
          <br />
          Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla
          luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus
          sapien nunc eget odio.
        </p>
        <img
          src="/images/about_us/u287.svg"
          alt=""
          className="my-8 w-full md:w-auto"
        />
        <p className="mt-6 text-xl md:px-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan
          et viverra justo commodo. <br />
          Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla
          luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus
          sapien nunc eget odio.
        </p>
        <img
          src="/images/about_us/u346.svg"
          alt=""
          className="my-8 w-full md:w-auto"
        />
        <p className="mt-6 text-xl md:px-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan
          et viverra justo commodo.
        </p>
        <div className="text-center my-4">
          <a
            href="#"
            className="uppercase text-secondary text-center underline text-xl"
          >
            Meet the team
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
