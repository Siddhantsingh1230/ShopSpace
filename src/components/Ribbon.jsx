

const Ribbon = ({ type }) => {
  return (
    <div className={`absolute -rotate-45 p-1 -left-10  top-2 w-28 flex justify-center items-center ${type=="SALE"?`bg-black`:`bg-blue-500`}`}>
      <p className="text-white text-xs">{type}</p>
    </div>
  );
};

export default Ribbon;
