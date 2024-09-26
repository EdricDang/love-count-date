"use client";
import React, { useState } from "react";
import Icon from "../icon";
import { IconButton } from "@mui/material";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu((prevOpen) => !prevOpen);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <div className="fixed bg-[#34343431] text-[#ffffff] flex items-center justify-between px-2 xl:px-5 box-shadow-bottom top-0 left-0 right-0 h-[64px] xl:h-[90px] z-10">
      <div className="container flex items-center justify-between px-2 xl:px-5">
        <div className="text-[26px] font-semibold">T ❤️ L</div>

        <nav
          className={`${
            openMenu ? "" : "hidden"
          } xl:block absolute xl:static top-[100%] left-0 right-0 bg-[#ffffff2e] xl:bg-transparent`}
        >
          <ul className="w-full xl:flex xl:gap-10">
            <li className="flex items-center text-[18px] font-semibold border-b xl:border-none">
              <a
                onClick={closeMenu}
                className="w-full px-5 py-5 xl:p-0 hover:bg-[#ccc] xl:hover:bg-none inline-block cursor-pointer"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="flex items-center text-[18px] font-semibold border-b xl:border-none">
              <a
                onClick={closeMenu}
                className="w-full px-5 py-5 xl:p-0 hover:bg-[#ccc] inline-block cursor-pointer"
                href="#couple"
              >
                Cặp đôi
              </a>
            </li>
            <li className="flex items-center text-[18px] font-semibold border-b xl:border-none">
              <a
                onClick={closeMenu}
                className="w-full px-5 py-5 xl:p-0 hover:bg-[#ccc] inline-block cursor-pointer"
                href="#"
              >
                Câu chuyện tình yêu
              </a>
            </li>
            <li className="flex items-center text-[18px] font-semibold border-b xl:border-none">
              <a
                onClick={closeMenu}
                className="w-full px-5 py-5 xl:p-0 hover:bg-[#ccc] inline-block cursor-pointer"
                href="#"
              >
                Album ảnh
              </a>
            </li>
          </ul>
        </nav>
        <IconButton className="xl:hidden" onClick={handleOpenMenu}>
          <Icon
            icon={openMenu ? "mingcute:close-fill" : "mi:menu"}
            fontSize="30px"
            color="#ffffff"
          />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
