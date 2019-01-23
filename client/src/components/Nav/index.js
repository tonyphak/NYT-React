import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <ul>
        <li className="navbar-brand"><a href="/">Google Books</a></li>
        <li className="search"><a href="/">Search</a></li>
        <li className="save"><a href="/saved">Saved</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
