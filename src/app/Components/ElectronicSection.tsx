
const ElectronicSection = () => {
  return (
    <div className="w-[1180px] h-[257px] flex bg-gray-100 mt-3 mb-3 rounded-md">
      {/* Left Section - Single Box with Image */}
      <div className="w-1/4 h-full bg-white p-4 border-r border-gray-300 flex items-center justify-center rounded-l-md">
        <img
          src="gadgets.jpg"
          alt="Left Section"
          className="w-full h-full object-cover rounded-md transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Right Section - 8 Horizontal Boxes */}
      <div className="w-3/4 h-full flex flex-col justify-between p-4 rounded-r-md">
        {/* Top 4 Horizontal Boxes */}
        <div className="flex w-full h-1/2 space-x-0.5">
          <img
            src="14.png"
            alt="Box 1"
            className="flex-1 h-full object-cover rounded-md transition-transform duration-300 hover:scale-105"
          />
          <img
            src="15.png"
            alt="Box 2"
            className="flex-1 h-full object-cover rounded-md transition-transform duration-300 hover:scale-105"
          />
          <img
            src="16.png"
            alt="Box 3"
            className="flex-1 h-full object-cover rounded-md transition-transform duration-300 hover:scale-105"
          />
          <img
            src="17.png"
            alt="Box 4"
            className="flex-1 h-full object-cover rounded-md transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Bottom 4 Horizontal Boxes */}
        <div className="flex w-full h-1/2 space-x-0.5 mt-0.5">
          <img
            src="18.png"
            alt="Box 5"
            className="flex-1 h-full object-cover rounded-md transition-transform duration-300 hover:scale-105"
          />
          <img
            src="19.png"
            alt="Box 6"
            className="flex-1 h-full object-cover rounded-md transition-transform duration-300 hover:scale-105"
          />
          <img
            src="20.png"
            alt="Box 7"
            className="flex-1 h-full object-cover rounded-md transition-transform duration-300 hover:scale-105"
          />
          <img
            src="21.png"
            alt="Box 8"
            className="flex-1 h-full object-cover rounded-md transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default ElectronicSection;
