const AdventureStory = (props) => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center mt-8 ml-6 lg:ml-0">
      <div className=" w-full lg:w-38 mb-4 lg:mb-0">
        <img src={"/images/home_page/u30_a.svg"} className="w-full" />
      </div>
      <div className="font-mono uppercase lg:pl-4 ">
        <h2 className="text-sm lg:text-2xl mb-1 font-semibold text-primary w-40">
          {props.title}
        </h2>
        <p className="text-sm text-tertiary">{props.name}</p>
      </div>
    </div>
  );
};

export default AdventureStory;
