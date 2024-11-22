"use client";
import React, { useState } from "react";
import ControlledSearch from "../Reusables/ControlledSearch";
import AvatarWithUsername from "../Reusables/AvatarWithUsername";
import Link from "next/link";
import { IoMenuSharp } from "react-icons/io5";
import MobileMenu from "../Dashboard/MobileMenu";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between py-2 px-3 bg-white border-b z-50">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="md:hidden"
          >
            <IoMenuSharp size={25} />
          </button>
          <Link href={"/"}>
            <h1 className="font-semibold text-[24px] leading-[30px] capitalize">
              volulink
            </h1>
          </Link>
        </div>
        <div className="flex-1 hidden md:block">
          <ControlledSearch />
        </div>
        <div className="hidden md:block">
          <AvatarWithUsername />
        </div>
      </nav>
      {showMenu && (
        <div className="bg__overlay md:hidden">
          <MobileMenu setShowMenu={setShowMenu} />
        </div>
      )}
    </>
  );
};

export default Nav;
