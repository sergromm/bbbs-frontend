import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NavigationItem({ name, link }) {
  return (
    <li className="nav-list__submenu-item">
      <Link to={link} className="nav-list__link">
        {name}
      </Link>
    </li>
  );
}

NavigationItem.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NavigationItem;
