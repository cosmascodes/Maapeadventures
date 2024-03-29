const Contact = () => {
  return (
    <section className=" mt-16 p-6 pb-0 text-text">
      <h1 className="text-center text-6xl font-duality mb-6">Get in Touch</h1>
      <p className=" text-xl text-center md:w-1/3 m-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
        bibendum laoreet.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center bg-hero-map bg-no-repeat bg-bottom bg-cover md:pb-60">
        <div className="w-full md:w-80 bg-secondary rounded-2xl flex justify-center items-center flex-col py-4 my-6 md:mx-5 md:px-5">
          <h2 className="uppercase font-mono font-bold tracking-wider text-xl">
            Mobile
          </h2>
          <p className="text-xl font-mono tracking-wider">0712 345 678</p>
        </div>
        <div className="w-full md:w-80 bg-secondary rounded-2xl flex justify-center items-center flex-col py-4 my-6  md:mx-5 md:px-5">
          <h2 className="uppercase font-mono font-bold tracking-wider text-xl">
            email
          </h2>
          <p className="text-xl font-mono tracking-wider">
            sema@maapeadventures.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
