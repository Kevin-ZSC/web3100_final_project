import { Link } from "react-router-dom"
export default function DropDownNav( {isDropDown} ) {
  return (
    <ul
  className={`absolute right-0 mt-0 bg-blue-700/50 backdrop-blur-lg shadow-lg rounded-lg text-white w-full md:w-1/5 z-20 transform transition-all duration-500 ease-out ${
    isDropDown
      ? "scale-y-100 opacity-100 visible"
      : "scale-y-0 opacity-0 invisible"
  } origin-top`}
>
  <li className="flex justify-between items-center px-4 py-3 hover:bg-blue-800/90 cursor-pointer">
    Tickets
    <img src="./src/assets/img/Chevron right.png" alt="Chevron Right" className="w-4" />
  </li>
  <li className="flex justify-between items-center px-4 py-3 hover:bg-blue-800/90 cursor-pointer">
  <Link to="/lessons" className="flex justify-between items-center w-full">
    <span>Lessons</span>
    <img src="./src/assets/img/Chevron right.png" alt="Chevron Right" className="w-4" />
  </Link>
</li>
  <li className="flex justify-between items-center px-4 py-3 hover:bg-blue-800/90 cursor-pointer">
    Rental
    <img src="./src/assets/img/Chevron right.png" alt="Chevron Right" className="w-4" />
  </li>
  <li className="flex justify-between items-center px-4 py-3 hover:bg-blue-800/90 cursor-pointer">
    Shop
    <img src="./src/assets/img/Chevron right.png" alt="Chevron Right" className="w-4" />
  </li>
  <li className="flex justify-between items-center px-4 py-3 hover:bg-blue-800/90 cursor-pointer">
    Packages
    <img src="./src/assets/img/Chevron right.png" alt="Chevron Right" className="w-4" />
  </li>
</ul>




  )
}
