import PropTypes from "prop-types";
import Popup from "../Popup/Popup";
import Cities from "./Cities";

function CitiesPopup({ isPopupOpen, closePopup }) {
  return (
    <Popup isPopupOpen={isPopupOpen} closePopup={closePopup}>
      <Cities />
    </Popup>
  );
}

CitiesPopup.propTypes = {
  isPopupOpen: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
};

export default CitiesPopup;
