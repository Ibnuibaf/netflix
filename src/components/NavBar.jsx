import React from "react";
import { CgProfile } from 'react-icons/cg';

function NavBar() {
  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-black">
        <div className="font-bold text-4xl hover:cursor-pointer">
            <p className="text-red-700">NETFLIX</p>
        </div>
        <div >
            <span className="hover:cursor-pointer"><CgProfile className="text-3xl"/></span>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
