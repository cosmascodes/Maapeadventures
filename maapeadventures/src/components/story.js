const AdventureStory = (props) => {
  return (
    <div className="flex flex-col md:flex-row justify-center w-60 md:w-fit items-center mt-8  ml-12 md:ml-0">
      <div className=" w-full md:w-38 mb-4 md:mb-0">
        <img src={"/images/home_page/u30_a.svg"} className="w-full" />
      </div>
      <div className="font-mono uppercase md:pl-4 ">
        <h2 className="text-2xl mb-1 font-semibold text-primary w-40">
          {props.title}
        </h2>
        <p className="text-sm text-tertiary">{props.name}</p>
      </div>
    </div>
  );
};

export default AdventureStory;
