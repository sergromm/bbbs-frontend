import PropTypes from "prop-types";
import Popup from "./Popup";

function SuccessSignPopup({ isPopupOpen, closePopup }) {
  return <Popup isPopupOpen={isPopupOpen} closePopup={closePopup} />;
}

SuccessSignPopup.propTypes = {
  isPopupOpen: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
};

export default SuccessSignPopup;
