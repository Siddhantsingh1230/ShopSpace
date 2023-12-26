const ProgressBar = ({ value }) => {
  const progressStyle = {
    width: `${value}%`,
  };

  return (
    <div className="relative w-full h-2 bg-gray-300 rounded-md overflow-hidden">
      <div
        className="h-full bg-blue-500 transition-all duration-300"
        style={progressStyle}
      ></div>
    </div>
  );
};

export default ProgressBar;
