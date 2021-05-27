import PropTypes from "prop-types";

function FilterButton({ handleClick, isActive, name }) {
  return (
    <button
      onClick={handleClick}
      type="button"
      className={
        isActive ? "filter__button filter__button_active" : "filter__button"
      }
    >
      {name}
    </button>
  );
}

FilterButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default FilterButton;
