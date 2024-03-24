import { getSingleAdventure } from "@/helpers";

const Adventure = ({ searchParams }) => {
  const SingleAdv = getSingleAdventure(searchParams.id);
  console.log(searchParams.id);
  return (
    <section className="text-text mt-12 py-12 px-6 flex flex-col justify-between items-center">
      <h1 className="text-center text-6xl font-duality my-6">
        Adventure Title
      </h1>

      <div className="md:w-3/4 flex flex-col justify-between items-center md:px-24">
        <img src={SingleAdv.image} alt="img" className="w-full md:w-auto" />
        <div className="grid md:grid-cols-2 text-xl place-content-center place-items-center">
          <article className="mt-6 font-semibold leading-normal">
            {SingleAdv.details}
          </article>
          <div className="mt-6 md:pl-10">
            <h2 className="uppercase font-bold font-mono tracking-wider mt-4 text-2xl">
              itinerary
            </h2>
            <p>
              Duration:
              {SingleAdv.Duration}
            </p>
            <p>
              Start Time:
              {SingleAdv.startTime}
            </p>
            <h2 className="uppercase font-bold font-mono tracking-wider mt-4 text-2xl">
              WHAT’S INCLUDED{" "}
            </h2>
            {SingleAdv.inclusive.map((item, index) => (
              <p key={index}>- {item}</p>
            ))}

            <h2 className="uppercase font-bold font-mono tracking-wider mt-4 text-2xl">
              WHAT YOU’LL NEED{" "}
            </h2>
            {SingleAdv.needs.map((item, index) => (
              <p key={index}>- {item}</p>
            ))}
          </div>
        </div>
        <div className="my-6 w-full">
          <h2 className="uppercase font-bold font-mono tracking-wider text-2xl">
            tickets
          </h2>
          <div className="bg-secondary rounded-3xl p-6 text-xl mt-2">
            <div className="flex flex-col md:flex-row justify-between">
              <h2 className="uppercase font-bold text-2xl">adventure title</h2>
              <div className="flex mt-3">
                <p>Choose date:</p>
                <input type="text" className=" w-32 p-1 rounded ml-2" />
              </div>
            </div>
            <div className="mt-6 flex-col flex md:flex-row justify-between">
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
                  <span className="pl-5 font-bold font-mono">
                    {SingleAdv.price}
                  </span>
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
        <ul className="text-secondary flex flex-col justify-center items-center text-xl">
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
      </div>
    </section>
  );
};

export default Adventure;
