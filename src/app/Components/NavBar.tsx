import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between p-4 bg-white text-black w-full h-[86px] max-w-screen-xl mx-auto">
        {/* Logo Image */}
        <div>
          <Link href="/">
            <img
              src="/logo.png"
              alt="Brand Logo"
              className="h-10 transition-transform transform hover:scale-110 hover:brightness-110"
            />
          </Link>
        </div>

        {/* Search Bar with Dropdown */}
        <div className="flex items-center w-full max-w-2xl space-x-0">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 rounded-l-md text-gray-800 border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Category Dropdown */}
          <select className="w-29 px-4 py-2 text-gray-800 bg-white border border-blue-500 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500 h-full">
            <option>All category</option>
            <option>Automobiles</option>
            <option>Clothes and wear</option>
            <option>Home interiors</option>
            <option>Computer and tech</option>
            <option>Tools, equipments</option>
            <option>Sports and outdoor</option>
            <option>Animal and pets</option>
            <option>Machinery tools</option>
            <option>More category</option>
          </select>

          {/* Search Button */}
          <button className="w-auto px-4 py-2 rounded-r-md bg-blue-500 text-white hover:bg-blue-600 border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Search
          </button>
        </div>

        {/* Navigation Icons */}
        <div className="space-x-4 hidden md:flex">
          <Link href="/profile">
            <img
              src="/Profile.png"
              alt="Profile"
              className="w-6 h-6 transition-transform transform hover:scale-110 hover:brightness-110"
            />
          </Link>
          <Link href="/messages">
            <img
              src="/Message.png"
              alt="Messages"
              className="w-6 h-6 transition-transform transform hover:scale-110 hover:brightness-110"
            />
          </Link>
          <Link href="/orders">
            <img
              src="/Orders.png"
              alt="Orders"
              className="w-6 h-6 transition-transform transform hover:scale-110 hover:brightness-110"
            />
          </Link>
          <Link href="/cart">
            <img
              src="/Cart.png"
              alt="Cart"
              className="w-6 h-6 transition-transform transform hover:scale-110 hover:brightness-110"
            />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button className="text-2xl text-gray-500">
            <i className="fas fa-bars"></i> {/* You can replace this with an actual icon */}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
