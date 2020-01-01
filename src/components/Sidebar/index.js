import React, { Fragment } from 'react';
import { push as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

function Sidebar(props) {
  return (
    <Fragment>
      <Menu
        pageWrapId={"notes-editor"}
        isOpen={props.isOpen}
        onStateChange={(state) => props.setIsOpen(state.isOpen)}
        disableAutoFocus
      >
        <div className="Sidebar has-text-centered">
          <div className="column is-12">
            <Link to="/">
              Home
            </Link>
          </div>
          <div className="column is-12">
            <Link to="/experiences">
              Experiences
            </Link>
          </div>
          <div className="column is-12">
            <Link to="/courses">
              Courses
            </Link>
          </div>
        </div>
      </Menu>
    </Fragment>
  )
}

export default Sidebar;