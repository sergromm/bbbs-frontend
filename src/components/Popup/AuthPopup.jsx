import PropTypes from "prop-types";
import Popup from "./Popup";
import AuthForm from "../AuthForm/AuthForm";

function AuthPopup({ isPopupOpen, closePopup, onLogin }) {
  return (
    <Popup isPopupOpen={isPopupOpen} closePopup={closePopup}>
      <AuthForm onLogin={onLogin} />
    </Popup>
  );
}

AuthPopup.propTypes = {
  isPopupOpen: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default AuthPopup;
