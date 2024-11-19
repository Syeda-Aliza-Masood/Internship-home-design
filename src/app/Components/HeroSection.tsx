
const HeroSection = () => {
  return (
    <div className="w-[1180px] h-[400px] flex bg-gray-100 mt-5 mb-3 rounded-md">
      {/* Left Section - Categories */}
      <div className="w-1/4 h-full bg-white p-4 rounded-l-lg flex items-center justify-left">
        <ul className="space-y-4 text-left">
          <li>
            <a href="#" className="text-black hover:text-blue-600 hover:bg-blue-100 p-2 rounded-md transition-all">Automobiles</a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-blue-600 hover:bg-blue-100 p-2 rounded-md transition-all">Clothes and wear</a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-blue-600 hover:bg-blue-100 p-2 rounded-md transition-all">Home interiors</a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-blue-600 hover:bg-blue-100 p-2 rounded-md transition-all">Computer and tech</a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-blue-600 hover:bg-blue-100 p-2 rounded-md transition-all">Tools, equipments</a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-blue-600 hover:bg-blue-100 p-2 rounded-md transition-all">Sports and outdoor</a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-blue-600 hover:bg-blue-100 p-2 rounded-md transition-all">Animal and pets</a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-blue-600 hover:bg-blue-100 p-2 rounded-md transition-all">Machinery tools</a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-blue-600 hover:bg-blue-100 p-2 rounded-md transition-all">More category</a>
          </li>
        </ul>
      </div>

      {/* Middle Section - Image */}
      <div className="w-3/4 h-full bg-white flex items-center justify-center">
        <img src="banner.png" alt="Hero Image" className="w-full h-[85%] object-cover " />
      </div>

      {/* Right Section - Three Vertical Sections */}
      <div className="w-1/4 h-full bg-white p-4 flex flex-col space-y-4 rounded-r-lg">
        {/* First Section - Buttons */}
        <div className="flex flex-col space-y-2 bg-blue-100 p-2 rounded-md w-full text-center">
          <p className="text-gray-800 font-semibold">Hi, user</p>
          <p className="text-gray-800 font-semibold">Let's get started</p>
          <button className="px-4 py-2 bg-blue-700 text-white rounded-lg border border-blue-700 hover:bg-white hover:text-blue-700">Join Now</button>
          <button className="px-4 py-2 bg-white text-blue-700 rounded-lg border border-blue-700 hover:bg-blue-700 hover:text-white">Log In</button>
        </div>

        {/* Second Section - Get US $10 off */}
        <div className="flex-1 bg-orange-500 text-white rounded-md w-full flex items-center justify-center p-2 hover:bg-orange-600 transition-all duration-200">
          <div className="text-left">
            <p>Get US $10 off</p>
            <p>with a new supplier</p>
          </div>
        </div>

        {/* Third Section - Send quotes */}
        <div className="flex-1 bg-blue-500 text-white rounded-md w-full flex items-center justify-center p-2 hover:bg-blue-600 transition-all duration-200">
          <div className="text-left">
            <p>Send quotes with</p>
            <p>supplier</p>
            <p>preferences</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
