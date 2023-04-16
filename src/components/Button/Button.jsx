import React from "react";

import { ReactComponent as IconLink } from "assets/Icons/links.svg";

function Button({ label, url, download }) {
  if (download) {
    return (
      <a href={url} download>
        <button className="w-full h-full bg-transparent border-2 border-blue-300 rounded hover:bg-blue-300 hover:text-gray-100 font-header text-blue-300 text-center tablet:text-xl">
          {label}
        </button>
      </a>
    );
  } else {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button className="w-24 h-7 flex px-4 py-2 justify-between items-center bg-blue-300 rounded hover:bg-blue-400  font-header text-blue-gray-900 text-center">
          {label}
          <IconLink />
        </button>
      </a>
    );
  }
}

export { Button };
