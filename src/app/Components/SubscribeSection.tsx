
const SubscribeSection = () => {
    return (
      <div className="w-[1350px] h-[190px] mx-auto mt-6 bg-gray-300 p-4  flex flex-col justify-center items-center">
        {/* Heading Text */}
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Subscribe to our newsletter
        </h2>
  
        {/* Subheading Text */}
        <p className="text-lg text-gray-600 mb-4 text-center">
          Get daily news on upcoming offers from many suppliers all over the world.
        </p>
  
        {/* Search Bar and Subscribe Button */}
        <div className="flex items-center space-x-4">
          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className="w-[350px] h-[40px] pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Email Icon */}
            <img
              src="/email.png" // Replace with your email icon image path
              alt="Email Icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
            />
          </div>
  
          {/* Subscribe Button */}
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Subscribe
          </button>
        </div>
      </div>
    );
  };
  
  export default SubscribeSection;
  