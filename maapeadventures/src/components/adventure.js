const Adventure = (props) => {
  return (
    <div className="rounded-[26px] overflow-hidden w-60 md:w-64 ml-12 md:ml-0">
      <img src={props.image} className="w-full mx-auto" />
      <div className=" px-4 flex flex-col justify-center uppercase bg-tertiary text-text text-2xl font-mono font-semibold h-24">
        <h2 className="md:w-[70%]">{props.title}</h2>
      </div>
    </div>
  );
};

export default Adventure;
