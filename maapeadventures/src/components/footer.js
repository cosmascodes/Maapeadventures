import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className="bg-redTheme py-12 flex flex-col justify-center items-center">
        <p className="text-center text-white text-lg font-semibold w-1/2 mb-4">
          Call to sign up for newsletter. Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit.
        </p>
        <form class="flex">
          <input
            type="email"
            id="email"
            aria-describedby="helper-text-explanation"
            class="w-[300px] bg-gray-50 border me-2 border-gray-300 
            text-gray-900 text-sm rounded-lg focus:ring-blue-500 
            focus:border-blue-500 px-2.5  "
            placeholder="Your email address"
          />
          <button
            type="button"
            class="py-2.5 px-5 text-sm font-medium focus:outline-none 
            text-white rounded-lg border border-gray-200 hover:bg-gray-100
             hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
          >
            SIGN UP
          </button>
        </form>
      </div>
      <div className="bg-primary flex flex-row justify-between py-12 px-24">
        <div>
          <ul className="mb-2 flex flex-row text-secondary underline text-lg w-[320px] justify-between">
            <li>
              <a href="#">OUR SAFETY PROMISE</a>
            </li>
            <li>
              <a href="#">FAQS</a>
            </li>
            <li>
              <a href="#">LEGAL</a>
            </li>
          </ul>
          <p className="text-sm">
            © 2023 Maape Adventures. All Rights Reserved
          </p>
        </div>
        <div className=" flex flex-row w-[120px] justify-between">
          <Image src={"/images/home_page/u73.svg"} width={35} height={40} />

          <Image src={"/images/home_page/u74.svg"} width={35} height={40} />

          <Image src={"/images/home_page/u72.svg"} width={35} height={40} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
