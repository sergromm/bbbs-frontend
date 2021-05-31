import PropTypes from "prop-types";
import FilterButton from "./FilterButton";

function Filter({ currentActiveButton, labels, handleFilter }) {
  const upperCaseLabel = (label) => label[0].toUpperCase() + label.slice(1);

  const renderButton = (label) => (
    <FilterButton
      // при клике прокидывае event-клик в функцию фильтрации
      handleClick={(e) => handleFilter(e, label.name)}
      isActive={currentActiveButton === label.name}
      key={label.number}
      name={upperCaseLabel(label.name)}
    />
  );
  return (
    <div className="filter">
      {/* отрисовываем кнопки если кнопок больше одной */}
      {labels.length > 1 && labels.map(renderButton)}
    </div>
  );
}

Filter.propTypes = {
  currentActiveButton: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default Filter;
