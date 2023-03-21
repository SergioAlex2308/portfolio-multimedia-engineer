import React, { useState } from "react";

const MenuContext = React.createContext();

function MenuProvider({ children }) {
  const [openMenu, setOpenMenu] = useState(false);
  const value = {
    openMenu,
    setOpenMenu,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

const useMenuContext = () => React.useContext(MenuContext);

export { MenuContext, MenuProvider, useMenuContext };
