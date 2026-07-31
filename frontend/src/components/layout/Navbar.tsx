import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/logo-full.png";



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-xl text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src={Logo}
            alt="MailCraft AI"
            className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-slate-300">
          <li className="cursor-pointer transition duration-300 hover:text-indigo-400">
            Home
          </li>

          <li className="cursor-pointer transition duration-300 hover:text-indigo-400">
            Features
          </li>

          <li className="cursor-pointer transition duration-300 hover:text-indigo-400">
            About
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 transition hover:bg-slate-800 md:hidden"
        >
          {isOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          
        }`}
      >
        <div className="border-t border-slate-800 bg-slate-900/80 backdrop-blur-xl">
          <ul className="flex flex-col px-6 py-4 text-slate-300">

            <li className="rounded-lg px-4 py-3 transition hover:bg-slate-800 hover:text-indigo-400">
              Home
            </li>

            <li className="rounded-lg px-4 py-3 transition hover:bg-slate-800 hover:text-indigo-400">
              Features
            </li>

            <li className="rounded-lg px-4 py-3 transition hover:bg-slate-800 hover:text-indigo-400">
              About
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;