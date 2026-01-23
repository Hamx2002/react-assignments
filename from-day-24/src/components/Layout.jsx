import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div className="flex min-h-screen font-sans bg-[#121212] text-gray-200">
      {/* Sidebar Navigation */}
      <nav className="w-64 bg-[#1a1a1a] text-white p-5 border-r border-[#333] flex flex-col fixed h-full overflow-y-auto">
        <h2 className="text-xl font-bold mb-8 pb-3 border-b border-[#444]">
          Daily Tasks
        </h2>
        <ul className="space-y-3 pb-10">
          <li>
            <Link
              to="/"
              className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-[#333] hover:text-white transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/day-24"
              className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-[#333] hover:text-white transition-colors duration-200"
            >
              Day 24
            </Link>
          </li>
          <li>
            <Link
              to="/day-25"
              className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-[#333] hover:text-white transition-colors duration-200"
            >
              Day 25
            </Link>
          </li>
          <li>
            <Link
              to="/day-26"
              className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-[#333] hover:text-white transition-colors duration-200"
            >
              Day 26
            </Link>
          </li>
          <li>
            <Link
              to="/day-27"
              className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-[#333] hover:text-white transition-colors duration-200"
            >
              Day 27
            </Link>
          </li>
          <li>
            <Link
              to="/day-29"
              className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-[#333] hover:text-white transition-colors duration-200"
            >
              Day 29
            </Link>
          </li>
          <li>
            <Link
              to="/day-30"
              className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-[#333] hover:text-white transition-colors duration-200"
            >
              Day 30
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 ml-64 p-10 bg-[#121212]">
        <div className="max-w-5xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;
