import { useState } from "react";

const Accordion = (props) => {
  const [item, setItem] = useState(props.datas);
  const handletoggleActive = () => {
    let newActive = item.active === 1 ? 0 : 1;
    setItem({ ...item, active: newActive });
  };
  return (
    <div
      className={`rounded mt-6 overflow-hidden text-xl font-mono group ${
        item.active === 1 ? "is-active" : ""
      }`}
    >
      <div
        onClick={handletoggleActive}
        className="flex flex-row items-center p-2 cursor-pointer bg-secondary group-[.is-active]:bg-primary text-white group-[.is-active]:font-bold"
      >
        <p>{item.question}</p>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="currentColor"
            className="w-6 h-6 group-[.is-active]:rotate-[90deg]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
      <div className="overflow-hidden max-h-0 group-[.is-active]:max-h-fit pt-5">
        <p>{item.answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
