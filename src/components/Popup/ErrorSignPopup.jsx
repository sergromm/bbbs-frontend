import PropTypes from "prop-types";
import Popup from "./Popup";

function ErrorSignPopup({ isPopupOpen, closePopup, styleCon }) {
  return (
    <Popup
      isPopupOpen={isPopupOpen}
      closePopup={closePopup}
      styleCon={styleCon}
    >
      <h2 className="popup__error-title">
        Что-то пошло не так, попробуйте записаться снова
      </h2>
      <button
        type="button"
        aria-label="Вернуться к календарю"
        className="event__button calendar-modal__button_active
            calendar-modal__button_type_return-to-calendar"
        onClick={closePopup}
      >
        Вернуться к мероприятию
      </button>
    </Popup>
  );
}

ErrorSignPopup.defaultProps = {
  styleCon: "",
};

ErrorSignPopup.propTypes = {
  isPopupOpen: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
  styleCon: PropTypes.string,
};
export default ErrorSignPopup;
