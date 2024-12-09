import { Link } from "react-router-dom";

export default function HamburgerMenu({ isShowing }) {
  return (
    <div
      className={`absolute mt-0 w-full h-4/5 lg:h-lvh bg-blue-500/50 backdrop-blur-md text-white z-50 transform transition-transform duration-500 ease-in-out ${
        isShowing ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="overflow-y-auto h-full px-5">
        {/* Main Container: Flex on large screens, Stack on small screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center md:justify-items-start pt-6">
          {/* Plan Your Trip Section */}
          <section className="mb-6 flex flex-col md:items-start mx-auto">
            <h2 className="text-lg font-semibold mb-3">Plan Your Trip</h2>
            <ul className="space-y-2">
              <li className="hover:text-gray-300 transition duration-200">
                Deals & Packages
              </li>
              <li className="hover:text-gray-300 transition duration-200">
                Day Tickets
              </li>
              <li className="hover:text-gray-300 transition duration-200">
                Season Passes
              </li>
              <li className="hover:text-gray-300 transition duration-200">
                <Link to="/lessons" className="w-full">
                  Lessons
                </Link>
              </li>
              <li className="hover:text-gray-300 transition duration-200">
                Rentals & Repairs
              </li>
              <li className="hover:text-gray-300 transition duration-200">
                School Groups
              </li>
            </ul>
          </section>

          {/* Things To Do Section */}
          <section className="mb-6 hidden md:flex flex-col items-start mx-auto">
            <h2 className="text-lg font-semibold mb-3">Things To Do</h2>
            <ul className="space-y-2">
              <li className="hover:text-gray-300 transition duration-200">
                Activities
              </li>
              <li className="hover:text-gray-300 transition duration-200">
                Events
              </li>
              <li className="hover:text-gray-300 transition duration-200">
                Kids Programs
              </li>
              <li className="hover:text-gray-300 transition duration-200">
                Ski & Snowboard
              </li>
            </ul>
          </section>

          {/* Eateries & Nightlife Section */}
          <section className="mb-6 hidden md:flex flex-col items-start mx-auto">
            <h2 className="text-lg font-semibold mb-3">Eateries & Nightlife</h2>
            <ul className="space-y-2">
              <li className="hover:text-gray-300 transition duration-200">
                Shopping
              </li>
              <li className="hover:text-gray-300 transition duration-200">
                Eateries & Nightlife
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
