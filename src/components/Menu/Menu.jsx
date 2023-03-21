import React from "react";
import ReactDOM from 'react-dom';

function Menu({ children }) {
  return ReactDOM.createPortal(
    <div className="fixed w-full h-full z-40 backdrop-blur-xl bg-gray/30">{children}</div>,
    document.getElementById("menu")
  );
}

export { Menu };
