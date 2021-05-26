import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Logo({ onLinkClick }) {
  return (
    <Link onClick={onLinkClick} className="logo" to="/">
      наставники.про
    </Link>
  );
}

Logo.propTypes = {
  onLinkClick: PropTypes.func.isRequired,
};

export default Logo;
