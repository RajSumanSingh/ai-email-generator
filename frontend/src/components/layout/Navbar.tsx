function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-600">
          AI Email Generator
        </h1>

        <ul className="flex gap-8 text-gray-600">
          <li className="cursor-pointer hover:text-blue-600">
            Home
          </li>

          <li className="cursor-pointer hover:text-blue-600">
            Features
          </li>

          <li className="cursor-pointer hover:text-blue-600">
            About
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;