import React, { useState } from "react";
import { MenuOverlay } from "../components";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { ActiveLink } from "./Links";

export const Header = () => {
  const [menuState, setMenuState] = useState(false);

  const handleToggleMenu = () => {
    setMenuState(!menuState);
  };

  return (
    <div className="px-10 py-4 flex justify-between ">
      <div className="flex items-center">
        <ActiveLink activeClassName="text-third" href="/">
          <a className="text-2xl cursor-pointer">Stamina</a>
        </ActiveLink>
      </div>
      <MenuOverlay menuState={menuState} setMenuState={setMenuState} />
      <div className="flex items-center lg:hidden z-10">
        {menuState ? (
          <IoCloseSharp
            onClick={handleToggleMenu}
            fill="#fff"
            size={26}
            className="menu-close cursor-pointer transition-all"
          />
        ) : (
          <GiHamburgerMenu
            onClick={handleToggleMenu}
            size={23}
            className="cursor-pointer transition-all"
          />
        )}
      </div>
    </div>
  );
};
