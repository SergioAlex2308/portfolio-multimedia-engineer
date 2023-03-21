import React from "react";

function NavMenu({ setOpenMenu }) {
  const onClickMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };

  return (
    <nav className="flex fixed top-0 w-full z-30 justify-between items-center px-10 py-4 bg-gray-500 drop-shadow-xl">
      <div className="h-8 w-8 border-2 border-blue-300 rounded-full grid place-items-center">
        <span className="text-sm text-center text-gray-300">SM</span>
      </div>
      <div onClick={onClickMenu}>
        <svg
          /* xmlns="http://www.w3.org/2000/svg" */
          className="fill-cyan-500 hover:fill-cyan-700 icon icon-tabler icon-tabler-menu-2 "
          width="28"
          height="28"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ffffff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>
    </nav>
  );
}

export { NavMenu };
