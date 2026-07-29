function Navbar() {
  return (
    <nav className="w-full border-b border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-indigo-400">
          MailCraft AI
        </h1>

        <ul className="flex gap-8 text-slate-300">
          <li className="cursor-pointer hover:text-indigo-400">
            Home
          </li>

          <li className="cursor-pointer hover:text-indigo-400">
            Features
          </li>

          <li className="cursor-pointer hover:text-indigo-400">
            About
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;