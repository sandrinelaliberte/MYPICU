import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import team3 from 'assets/img/team/2.jpg';
import Avatar from 'components/common/Avatar';
import paths from 'routes/paths';

const ProfileDropdown = () => {
  return (
    <Dropdown navbar={true} as="li">
      <Dropdown.Toggle
        bsPrefix="toggle"
        as={Link}
        to="#!"
        className="pe-0 ps-2 nav-link"
      >
        <Avatar src={team3} />
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-caret dropdown-menu-card  dropdown-menu-end">
        <div className="bg-white rounded-2 py-2 dark__bg-1000">
          <Dropdown.Item as={Link} to={paths.userProfile}>
            Profile &amp; account
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item as={Link} to={paths.userSettings}>
            Settings
          </Dropdown.Item>
          <Dropdown.Item as={Link} to={paths.cardLogout}>
            Logout
          </Dropdown.Item>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProfileDropdown;
