const AdventureStory = (props) => {
  return (
    <div className="flex flex-row justify-center items-center mt-8">
      <div className=" w-38">
        <img src={"/images/home_page/u30_a.svg"} className="w-full" />
      </div>
      <div className="font-mono uppercase pl-4">
        <h2 className="text-2xl mb-1 font-semibold text-primary w-24">
          {props.title}
        </h2>
        <p className="text-sm text-tertiary">{props.name}</p>
      </div>
    </div>
  );
};

export default AdventureStory;
