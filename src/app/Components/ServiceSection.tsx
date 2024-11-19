
const ServiceSection = () => {
  return (
    <div className="w-[1180px] h-[256px] mx-auto mt-6 bg-gray-100 p-2 rounded-lg shadow-lg">
      {/* Heading */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Our extra services
      </h2>

      {/* Grid of Boxes */}
      <div className="grid grid-cols-4 gap-1 justify-items-center">
        {/* Box 1 */}
        <div className="w-[280px] h-[200px] bg-white rounded-sm shadow-sm flex items-center justify-center overflow-hidden transform hover:scale-105 hover:shadow-lg transition-all duration-300">
          <img
            src="/33.png"
            alt="Service 1"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Box 2 */}
        <div className="w-[280px] h-[200px] bg-white rounded-sm shadow-sm flex items-center justify-center overflow-hidden transform hover:scale-105 hover:shadow-lg transition-all duration-300">
          <img
            src="/34.png"
            alt="Service 2"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Box 3 */}
        <div className="w-[280px] h-[200px] bg-white rounded-sm shadow-sm flex items-center justify-center overflow-hidden transform hover:scale-105 hover:shadow-lg transition-all duration-300">
          <img
            src="/35.png"
            alt="Service 3"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Box 4 */}
        <div className="w-[280px] h-[200px] bg-white rounded-sm shadow-sm flex items-center justify-center overflow-hidden transform hover:scale-105 hover:shadow-lg transition-all duration-300">
          <img
            src="/36.png"
            alt="Service 4"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
