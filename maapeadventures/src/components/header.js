import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-row h-[60px] bg-white items-center justify-between px-24">
      <div>
        <Image
          src={"/images/home_page/icon_logo_u43.svg"}
          width={35}
          height={40}
        />
      </div>
      <div>
        <Image
          src={"/images/home_page/type_logo_u45_a.svg"}
          width={80}
          height={40}
        />
      </div>
      <div className="flex flex-row items-center justify-center">
        <button
          type="button"
          class="text-text font-mono bg-secondary hover:bg-tertiary focus:ring-4 focus:ring-blue-300 rounded-md text-[12px] font-semibold px-5 py-1.5 me-2"
        >
          GET IN TOUCH
        </button>
        <Image
          src={"/images/home_page/open_menu_u44.svg"}
          width={35}
          height={40}
        />
      </div>
    </div>
  );
};

export default Header;
