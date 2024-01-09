import { Collapse } from "react-collapse";
import { useState } from "react";

const AccrodianItem = ({ open, toggle, item, fun }) => {
  return (
    <div className="my-2 ">
      <div className="flex cursor-pointer justify-between" onClick={toggle}>
        <div className="flex gap-2 my-2">
          <p className={` select-none`}>{item.label}</p>
        </div>
        {open ? (
          <i
            className="text-[#787878] transition hover:text-black ri-subtract-line"
          ></i>
        ) : (
          <i className="text-[#787878] transition hover:text-black ri-add-line"></i>
        )}
      </div>
      <hr
        className={`bg-[#787878] transition-all  w-full opacity-90  ${
          open ? "visibile my-1 mb-2" : "invisible my-0"
        }`}
      />
      <Collapse isOpened={open}>
        <div className="flex flex-col">
          {item?.subcategories.map((data, idx) => (
            <div className="flex justify-between cursor-pointer" key={idx}>
              <p
                onClick={() => fun(data.name)}
                className="text-[#787878] hover:text-black select-none"
              >
                {data.name}
              </p>
            </div>
          ))}
        </div>
      </Collapse>
    </div>
  );
};

const SelectAccordian = ({ data, fun }) => {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };
  return (
    <>
      <div className="flex flex-col">
        {data?.map((item, index) => (
          <AccrodianItem
            open={index === open}
            key={index}
            toggle={() => toggle(index)}
            item={item}
            fun={fun}
          />
        ))}
      </div>
    </>
  );
};

export default SelectAccordian;
