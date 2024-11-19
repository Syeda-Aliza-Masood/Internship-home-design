
const DealsSection = () => {
  return (
    <div className="w-[1180px] h-[240px] flex bg-gray-100 mt-3 mb-3 rounded-md overflow-hidden">
      {/* Left Section - Title or Text (Deals and Offers) */}
      <div className="w-1/4 h-full flex flex-col items-start justify-start bg-white p-4 border-r border-gray-300 rounded-l-md">
        {/* Deals and Offers Title */}
        <h2 className="text-xl font-semibold text-gray-800">Deals and Offers</h2>

        {/* Hygiene Equipment Text */}
        <p className="text-sm text-gray-600 mt-1">Hygiene Equipments</p>

        {/* Dark Grey Boxes with Text and Space Between */}
        <div className="w-full mt-10 flex space-x-4">
          <div className="w-1/4 h-12 bg-gray-500 flex flex-col items-center justify-center text-white rounded-sm">
            <span>04</span>
            <span>Days</span>
          </div>
          <div className="w-1/4 h-12 bg-gray-500 flex flex-col items-center justify-center text-white rounded-sm">
            <span>13</span>
            <span>Hours</span>
          </div>
          <div className="w-1/4 h-12 bg-gray-500 flex flex-col items-center justify-center text-white rounded-sm">
            <span>34</span>
            <span>Mins</span>
          </div>
          <div className="w-1/4 h-12 bg-gray-500 flex flex-col items-center justify-center text-white rounded-sm">
            <span>56</span>
            <span>Sec</span>
          </div>
        </div>
      </div>

      {/* Right Section - 5 Image Parts */}
      <div className="w-3/4 h-full flex ml-auto rounded-r-md">
        {/* Image Part 1 */}
        <div className="flex-1 h-full flex flex-col items-center justify-center bg-white border-r border-gray-300 p-2">
          <img
            src="1.png"
            alt="Deal 1"
            className="w-full h-3/4 object-cover rounded-md transition-transform duration-300 hover:scale-105"
          />
          <p className="mt-2">Smart Watches</p>
          <div className="mt-1 bg-red-500 text-white text-xs py-1 px-3 rounded-full opacity-80">-25%</div>
        </div>

        {/* Image Part 2 */}
        <div className="flex-1 h-full flex flex-col items-center justify-center bg-white border-r border-gray-300 p-2">
          <img
            src="2.png"
            alt="Deal 2"
            className="w-full h-3/4 object-cover rounded-md transition-transform duration-300 hover:scale-105"
          />
          <p className="mt-2">Laptops</p>
          <div className="mt-1 bg-red-500 text-white text-xs py-1 px-3 rounded-full opacity-80">-15%</div>
        </div>

        {/* Image Part 3 */}
        <div className="flex-1 h-full flex flex-col items-center justify-center bg-white border-r border-gray-300 p-2">
          <img
            src="3.png"
            alt="Deal 3"
            className="w-full h-3/4 object-cover rounded-md transition-transform duration-300 hover:scale-105"
          />
          <p className="mt-2">GoPro Cameras</p>
          <div className="mt-1 bg-red-500 text-white text-xs py-1 px-3 rounded-full opacity-80">-40%</div>
        </div>

        {/* Image Part 4 */}
        <div className="flex-1 h-full flex flex-col items-center justify-center bg-white border-r border-gray-300 p-2">
          <img
            src="4.png"
            alt="Deal 4"
            className="w-full h-3/4 object-cover rounded-md transition-transform duration-300 hover:scale-105"
          />
          <p className="mt-2">Headphones</p>
          <div className="mt-1 bg-red-500 text-white text-xs py-1 px-3 rounded-full opacity-80">-25%</div>
        </div>

        {/* Image Part 5 */}
        <div className="flex-1 h-full flex flex-col items-center justify-center bg-white p-2">
          <img
            src="5.png"
            alt="Deal 5"
            className="w-full h-3/4 object-cover rounded-md transition-transform duration-300 hover:scale-105"
          />
          <p className="mt-2">Canon Cameras</p>
          <div className="mt-1 bg-red-500 text-white text-xs py-1 px-3 rounded-full opacity-80">-25%</div>
        </div>
      </div>
    </div>
  );
};

export default DealsSection;
