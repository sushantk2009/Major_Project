import { useState } from "react";
import { Home, Info, HeartHandshake, User, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-red-600">BloodSetu</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="flex items-center gap-2 text-gray-700 hover:text-red-600">
              <Home size={20} /> Home
            </a>
            <a href="#about" className="flex items-center gap-2 text-gray-700 hover:text-red-600">
              <Info size={20} /> About
            </a>
            <a href="#donor" className="flex items-center gap-2 text-gray-700 hover:text-red-600">
              <HeartHandshake size={20} /> Donor
            </a>
            <a href="#account" className="flex items-center gap-2 text-gray-700 hover:text-red-600">
              <User size={20} /> Account
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-4 space-y-4">
          <a href="#home" className="flex items-center gap-2 text-gray-700 hover:text-red-600">
            <Home size={20} /> Home
          </a>
          <a href="#about" className="flex items-center gap-2 text-gray-700 hover:text-red-600">
            <Info size={20} /> About
          </a>
          <a href="#donor" className="flex items-center gap-2 text-gray-700 hover:text-red-600">
            <HeartHandshake size={20} /> Donor
          </a>
          <a href="#account" className="flex items-center gap-2 text-gray-700 hover:text-red-600">
            <User size={20} /> Account
          </a>
        </div>
      )}
    </nav>
  );
}
