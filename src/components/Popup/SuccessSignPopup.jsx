import PropTypes from "prop-types";
import Popup from "./Popup";
import success from "../../lotties/success.json";
import Animation from "../Animation/Animation";

function SuccessSignPopup({ isPopupOpen, closePopup }) {
  return (
    <Popup isPopupOpen={isPopupOpen} closePopup={closePopup}>
      <div className="сalendar-modal__content calendar-modal__content_place_after-confirmation">
        <Animation animationData={success} />
        <p className="event__title event__title_place_after-confirmation">
          Вы записаны на мероприятие
        </p>
        <h2 className="event__title event__title_place_after-confirmation">
          «Субботний meet up: учимся проходить интервью»
        </h2>
        <p className="event__title event__title_place_after-confirmation">
          5 декабря с 12:00–14:00.
        </p>
        <p className="event__title event__title_place_after-confirmation">
          Если у вас не получится прийти — отмените, пожалуйста, запись.
        </p>
        <button
          type="button"
          aria-label="Вернуться к календарю"
          className="event__button calendar-modal__button_active
            calendar-modal__button_type_return-to-calendar"
        >
          Вернуться к календарю
        </button>
      </div>
    </Popup>
  );
}

SuccessSignPopup.propTypes = {
  isPopupOpen: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
};

export default SuccessSignPopup;
