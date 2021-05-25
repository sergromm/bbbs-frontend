import PropTypes from "prop-types";
import Popup from "../Popup/Popup";
import Cities from "./Cities";

function CitiesPopup({ cities, isPopupOpen, closePopup }) {
  return (
    <Popup isPopupOpen={isPopupOpen} closePopup={closePopup}>
      <Cities cities={cities} />
    </Popup>
  );
}

CitiesPopup.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      city: PropTypes.string.isRequired,
    })
  ).isRequired,
  isPopupOpen: PropTypes.func.isRequired,
  closePopup: PropTypes.func.isRequired,
};

export default CitiesPopup;
