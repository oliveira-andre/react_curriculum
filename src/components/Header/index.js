import React from 'react';

function Header(props) {
  return (
    <div className="Header">
      <div className="container">
        <div className="navbar">
          <div className="navbar-brand">
            <div className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbar-menu"
              onClick={() => props.setIsOpen(!props.isOpen)}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;