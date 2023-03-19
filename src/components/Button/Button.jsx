import React from "react";

function Button({ icon, label, url }) {
  if (!icon) {
    return (
      <button className="w-full h-full bg-transparent border-2 border-blue-300 rounded hover:bg-blue-300 hover:text-gray-100 font-header text-blue-300 text-center">
        <a href={url} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      </button>
    );
  } else {
    return (
      <button className="w-full h-full bg-blue-300 rounded hover:bg-blue-400  font-header text-gray-100 text-center">
        <a href={url} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      </button>
    );
  }
}

export { Button };
