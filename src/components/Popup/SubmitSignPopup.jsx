import PropTypes from "prop-types";
import Popup from "./Popup";

function SubmitSignPopup({ isPopupOpen, closePopup }) {
  return (
    <Popup isPopupOpen={isPopupOpen} closePopup={closePopup}>
      <div className="сalendar-modal__content calendar-modal__content_place_confirmation">
        <p className="event__title event__title_place_confirmation">
          Подтвердить запись на мероприятие
        </p>
        <h2 className="event__title event__title_place_confirmation">
          «Субботний meet up: учимся проходить интервью»
        </h2>
        <p className="event__title event__title_place_confirmation">
          5 декабря с 12:00–14:00.
        </p>
        <div className="event__signup-container event__confirmation-container">
          <button
            type="button"
            aria-label="Подтвердить запись"
            className="event__button event__button_active
            event__button_type_signup calendar-modal__button_type_confirm"
          >
            Подтвердить запись
          </button>
          <button
            type="button"
            aria-label="Отменить запись"
            className="event__button calendar-modal__button_active
              calendar-modal__button_type_cancel"
          >
            Отменить
          </button>
        </div>
      </div>
    </Popup>
  );
}

SubmitSignPopup.propTypes = {
  isPopupOpen: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
};

export default SubmitSignPopup;
