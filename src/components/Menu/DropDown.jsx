import React from "react";

function DropDown({ setOpenMenu }) {
  const classElementList =
    "font-header text-gray-100 text-6xl hover:text-blue-300 hover:underline";

	const onClickMenu = () => {
		setOpenMenu((prevState) => !prevState);
	  };
  return (
    <div className="menu flex flex-col justify-between p-6 h-full w-full">
      <div className="menu_close w-full flex flex-row-reverse pb-4" onClick={onClickMenu}>
        <svg
          className="h-6 w-6 fill-gray-100"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#ffffff"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <menu className="flex flex-col h-2/5 justify-around">
        <li className={classElementList}>
          <a href="/">Sobre mí</a>
        </li>
        <li className={classElementList}>
          <a href="/">Formación</a>
        </li>
        <li className={classElementList}>
          <a href="/">Proyectos</a>
        </li>
        <li className={classElementList}>
          <a href="/">Contacto</a>
        </li>
      </menu>
    </div>
  );
}

export { DropDown };
