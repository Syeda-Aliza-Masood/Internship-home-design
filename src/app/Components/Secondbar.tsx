import Link from "next/link";

const Secondbar = () => {
  return (
    <div className="w-[1350] h-[56px] bg-white flex items-center px-8 border-c">
      <div className="flex space-x-5 text-lg font-medium text-gray-800 w-full justify-between">
        {/* Left-aligned items */}
        <div className="flex space-x-4 ml-0">
          {/* Image before "All Category" */}
          <img src="/menu.png" alt="Category Icon" className="h-6 w-6" /> {/* Adjust size as needed */}

          <Link href="/All Category">All Category</Link>
          <Link href="/Hot Offers">Hot Offers</Link>
          <Link href="/Gift Boxes">Gift Boxes</Link>
          <Link href="/Projects">Projects</Link>
          <Link href="/Menu Item">Menu Item</Link>

          {/* Help Dropdown aligned with Menu Item */}
          <div className="flex items-center space-x-2 mt-[-0.5rem]">
            <select className="px-1 py-1 bg-white text-black">
              <option>Help</option>
              <option>FAQ</option>
              <option>Contact</option>
            </select>
          </div>
        </div>

        {/* Right-aligned Dropdowns */}
        <div className="flex items-center space-x-4 ml-auto">
          {/* Language Dropdown */}
          <div className="flex items-center space-x-2">
            <select className="px-4 py-2 bg-white text-black">
              <option>English, USD</option>
              <option>Spanish, EUR</option>
              <option>French, GBP</option>
            </select>
          </div>

          {/* Ship To Dropdown */}
          <div className="flex items-center space-x-2">
            <select className="px-4 py-2 bg-white text-black">
              <option>Ship To</option>
              <option>China</option>
              <option>UAE</option>
              <option>US</option>
              <option>Germany</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondbar;