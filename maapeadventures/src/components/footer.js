import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className="bg-redTheme py-6 md:py-12 flex flex-col justify-center items-center">
        <p className="text-center text-white text-sm md:text-md font-semibold md:w-[30%] mb-4">
          Call to sign up for newsletter. Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit.
        </p>
        <form className="flex flex-col md:flex-row">
          <input
            type="email"
            id="email"
            aria-describedby="helper-text-explanation"
            className="w-full md:w-[400px] bg-gray-50 border me-2 border-gray-300 
            text-gray-900 text-sm rounded-md focus:ring-blue-500 
            focus:border-blue-500 px-2.5  py-2.5"
            placeholder="Your email address"
          />
          <button
            type="button"
            className="font-mono mt-4 md:mt-0 py-2.5 px-10 text-sm font-medium focus:outline-none 
            text-white rounded-md border border-gray-200 hover:bg-gray-100
             hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
          >
            SIGN UP
          </button>
        </form>
      </div>
      <div className="bg-primary flex flex-col md:flex-row justify-between py-6 md:py-12 px-6 md:px-24">
        <div>
          <ul className="mb-2 flex flex-col md:flex-row text-secondary underline text-md w-[320px] justify-between">
            <li>
              <a href="/our_safety_promise">OUR SAFETY PROMISE</a>
            </li>
            <li>
              <a href="/faqs">FAQS</a>
            </li>
            <li>
              <a href="/legal">LEGAL</a>
            </li>
          </ul>
          <p className="text-sm hidden md:block">
            © 2023 Maape Adventures. All Rights Reserved
          </p>
        </div>
        <div className=" flex flex-row w-[120px] justify-between mt-2 md:mt-0">
          <Image src={"/images/home_page/u73.svg"} width={35} height={40} />
          <Image src={"/images/home_page/u74.svg"} width={35} height={40} />
          <Image src={"/images/home_page/u72.svg"} width={35} height={40} />
        </div>

        <p className="text-sm md:hidden text-secondary mt-6">
          © 2023 Maape Adventures. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
