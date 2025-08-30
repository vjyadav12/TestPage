import  { useState } from "react";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-yellow-500">LANDAS</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-yellow-500">
            Home
          </a>
          <a href="#" className="hover:text-yellow-500">
            About
          </a>
          <a href="#" className="hover:text-yellow-500">
            Services
          </a>
          <a href="#" className="hover:text-yellow-500">
            Contact
          </a>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <ShoppingCart className="w-6 h-6 cursor-pointer" />
          <Search className="w-6 h-6 cursor-pointer" />
          <a href="/login"><FaUserAlt className="w-6 h-6 cursor-pointer"/></a>
          {/* Hamburger Menu (only mobile) */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 text-center">
          <a href="#" className="block hover:text-yellow-500">
            Home
          </a>
          <a href="#" className="block hover:text-yellow-500">
            About
          </a>
          <a href="#" className="block hover:text-yellow-500">
            Services
          </a>
          <a href="#" className="block hover:text-yellow-500">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
