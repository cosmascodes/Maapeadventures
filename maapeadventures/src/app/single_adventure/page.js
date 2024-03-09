const Adventure = () => {
  return (
    <section className="text-text mt-12 py-12 px-6">
      <img
        src="/images/single_adventure/u136.svg"
        alt="img"
        className="w-full"
      />

      <h1 className="text-center text-6xl font-duality my-6">
        Adventure Title
      </h1>
      <div className="flex flex-col text-xl">
        <article>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan
          et viverra justo commodo.
          <br />
          <br />
          Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla
          luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus
          sapien nunc eget odio.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan
          et viverra justo commodo.
        </article>
        <div className="mt-6">
          <h2 className="uppercase font-bold font-mono tracking-wider mt-4 text-2xl">
            itinerary
          </h2>
          <p>Duration: 7 hours</p>
          <p>Start Time: 0600hrs</p>
          <h2 className="uppercase font-bold font-mono tracking-wider mt-4 text-2xl">
            WHAT’S INCLUDED{" "}
          </h2>
          <p>- Tour guide</p>
          <p> - Bottle of water</p>

          <h2 className="uppercase font-bold font-mono tracking-wider mt-4 text-2xl">
            WHAT YOU’LL NEED{" "}
          </h2>
          <p>- Gear </p>
          <p>- Meal</p>
        </div>
      </div>
      <div className="my-6">
        <h2 className="uppercase font-bold font-mono tracking-wider text-2xl">
          tickets
        </h2>
        <div className="bg-secondary rounded-3xl p-6 text-xl mt-2">
          <div>
            <h2 className="uppercase font-bold text-2xl">adventure title</h2>
            <div className="flex mt-3">
              <p>Choose date:</p>
              <input type="text" className=" w-32 p-1 rounded ml-2" />
            </div>
          </div>
          <div className="mt-6">
            <div className="flex flex-row items-center">
              <p className="mr-4">No. of tickets:</p>
              <button className="text-md border-2 border-white w-9 h-9 align-middle text-white rounded-full">
                +
              </button>
              <span className="mx-4 font-bold font-mono">1</span>
              <button className="text-md border-2 border-white w-9 h-9 align-middle text-white rounded-full">
                -
              </button>
            </div>
            <div className="flex flex-row items-center mt-4">
              <p>
                Total cost:{" "}
                <span className="pl-5 font-bold font-mono">2,500</span>
              </p>
              <button className="text-sm border-2 border-white text-white rounded-md p-1 ml-2 font-mono">
                KES
              </button>
            </div>
          </div>
          <div className="flex flex-row text-white justify-between items-center mt-6">
            <button className="uppercase text-[12px] font-bold px-4 py-1 rounded border-2 border-white w-1/2 mr-2 h-fit">
              pay now
            </button>
            <p className="text-[11px] w-48 leading-4">
              WE ACCEPT MAJOR PAYMENT OPTIONS INCLUDING VISA, MASTERCARD AND
              M-PESA
            </p>
          </div>
        </div>
      </div>
      <ul className="text-secondary flex flex-col justify-center items-center">
        <li className="mt-4 uppercase">
          <a href="#" className="underline">
            FOREIGNERS TRAVEL ADVISORY
          </a>
        </li>
        <li className="mt-4 uppercase">
          <a href="#" className="underline">
            CANCELLATION POLICY
          </a>
        </li>
        <li className="mt-4 uppercase">
          <a href="#" className="underline">
            ABOUT CURRENCY CONVERSION
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Adventure;
