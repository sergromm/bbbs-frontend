import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NavigationItem({ name, link, onLinkClick }) {
  return (
    <li className="nav-list__submenu-item">
      <Link to={link} className="nav-list__link" onClick={onLinkClick}>
        {name}
      </Link>
    </li>
  );
}

NavigationItem.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  onLinkClick: PropTypes.func.isRequired,
};

export default NavigationItem;
