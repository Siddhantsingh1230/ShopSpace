import { Collapse } from "react-collapse";
import { useState } from "react";
import ListPlaceholder from "./ListPlaceholder";

const AccrodianItem = ({ open, toggle, item }) => {
  return (
    <div className="my-2">
      <div className="flex cursor-pointer justify-between" onClick={toggle}>
        <div className="flex gap-2">
          <img className="h-5 w-5" src={item.src} alt="img" />
          <p className={`text-[#787878]  select-none uppercase`}>
            {item.label}
          </p>
        </div>
        {open ? (
          <i className="text-[#787878] transition hover:text-black ri-subtract-fill"></i>
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
          {item.subcategories &&
            item.subcategories.map((data, idx) => (
              <div className="flex justify-between cursor-pointer " key={idx}>
                <p className="text-[#787878] hover:text-black select-none capitalize">
                  {data.name}
                </p>
                <p className="text-[#787878] hover:text-black select-none">
                  {data.itemCount}
                </p>
              </div>
            ))}
        </div>
      </Collapse>
    </div>
  );
};

const Accordian = ({ title, data }) => {
  const [open, setOpen] = useState(false);
  if (!Array.isArray(data)) {
    console.error("Invalid data format. Expected an array.");
    return null; // or handle the error in a way that makes sense for your application
  }

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-lg font-bold mb-1">{title}</h1>
        {data?.length > 0 ? (
          data.map((item, index) => (
            <AccrodianItem
              open={index === open}
              key={index}
              toggle={() => toggle(index)}
              item={item}
            />
          ))
        ) : (
          <ListPlaceholder />
        )}
      </div>
    </>
  );
};

export default Accordian;
