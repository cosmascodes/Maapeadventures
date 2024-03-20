const Adventure = (props) => {
  return (
    <div className="rounded-[26px] overflow-hidden w-32 md:w-64 ml-6 md:ml-0">
      <img src={props.image} className="w-full mx-auto" />
      <div className=" px-4 flex flex-col justify-center uppercase bg-tertiary text-text text-sm md:text-xl font-mono font-semibold h-16 md:h-24">
        <h2 className="w-[70%]">{props.title}</h2>
      </div>
    </div>
  );
};

export default Adventure;
