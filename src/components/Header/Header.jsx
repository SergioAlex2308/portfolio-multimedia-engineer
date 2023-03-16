import React from "react";

function Header({ title }) {
  return (
    <div className="skill_header">
      <span className="border-t-2 w-5"></span>
      <h3>{ title }</h3>
    </div>
  );
}

export { Header };
