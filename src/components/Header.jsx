import React, { useState, useRef } from "react";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const navMenuRef = useRef(null);

  function HeaderTog() {
    setIsActive(!isActive);
  }

  return (
    <header>
      <h1>ARU GC Cup</h1>
      <div className="menu-toggle" onClick={HeaderTog}>
        <i className="fas fa-bars"></i>
      </div>
      <nav>
        <ul id="nav-menu" ref={navMenuRef} className={isActive ? "active" : ""}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#fixtures">Fixtures</a>
          </li>
          <li>
            <a href="#teams">Committee</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
