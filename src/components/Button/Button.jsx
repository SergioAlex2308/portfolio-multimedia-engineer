import React from "react";

function Button({ label }) {
  return <button className="w-full h-full bg-transparent border-2 border-blue-300 rounded hover:bg-blue-300 hover:text-gray-100 font-header text-blue-300 text-center">{label}</button>;
}

export { Button };
