import PropTypes from "prop-types";

function City({ name = null }) {
  return (
    <li className="cities__item">
      <a href="/" className="cities__link">
        {name}
      </a>
    </li>
  );
}

City.defaultProps = {
  name: "Москва",
};

City.propTypes = {
  name: PropTypes.string,
};

export default City;
