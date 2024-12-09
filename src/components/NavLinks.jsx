import { useState } from "react";
import DropDownNav from "./DropDownNav"
import HamburgerMenu from "./HamburgerMenu";
import { useNavigate } from "react-router-dom";

export default function NavLinks() {
  const [isDropDown, setIsDropDown] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsDropDown((prev) => {
      if (!prev) setIsShowing(false); // Close hamburger menu when opening dropdown
      return !prev;
    });
    
  };

  const handleClickHam = () => {
    setIsShowing((prev) => {
      if (!prev) setIsDropDown(false); // Close dropdown when opening hamburger menu
      return !prev;
    });
  }

  const handleLogo = () => {
    navigate('/')
  }

  return (
    <>
      <div className="flex items-center justify-between px-3 py-2 bg-transparent hover:bg-white hover:cursor-pointer transition-all duration-300 shadow-md z-10">
        <img
          src={isShowing ? "/assets/img/X.png" : "/assets/img/menu-bar.png"}
          alt="Menu"
          className="w-10 hover:cursor-pointer"

          onClick={handleClickHam}
        />
        <img
          src="/assets/img/logo.png"
          alt="Logo"
          className="w-16 hover:cursor-pointer text-center -ml-5 sm:ml-48 "
          onClick={handleLogo}
        />

        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2">
            <img
              src="/assets/img/video-recording.png"
              alt="Video Recording"
              className="w-6 h-6"
            />
            <img
              src="/assets/img/hot.png"
              alt="Hot"
              className="w-6 h-6"
            />
            <img
              src="/assets/img/Search.png"
              alt="Search"
              className="w-6 h-6"
            />
            <img
              src="/assets/img/Shopping-bag-nav.png"
              alt="Shopping Bag"
              className="w-6 h-6"
            />
          </div>

          <div
            className="bg-blue-700 hover:bg-blue-800 transition-colors duration-200 rounded-xl flex items-center justify-center w-20 py-2"
            onClick={handleClick}
          >
            <p className="text-white font-bold ml-2">BOOK</p>
            <img
              src="/assets/img/arrow_drop_down.png"
              alt="Arrow Down"
              className="w-5"
            />
          </div>
        </div>
      </div>
      {isDropDown && <DropDownNav isDropDown={isDropDown} />}
      {isShowing && <HamburgerMenu isShowing={isShowing}  />}
    </>
  );
}
