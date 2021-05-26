import PropTypes from "prop-types";
import { parseISO, format } from "date-fns";
import { ru } from "date-fns/locale";
import Popup from "./Popup";
import success from "../../lotties/success.json";
import Animation from "../Animation/Animation";

function SuccessSignPopup({ isPopupOpen, closePopup, event }) {
  const date = format(parseISO(event.startAt), "d", { locale: ru });
  const month = format(parseISO(event.startAt), "MMMM", {
    locale: ru,
  });
  const startHour = format(parseISO(event.startAt), "H", { locale: ru });
  const endHour = format(parseISO(event.endAt), "H", { locale: ru });
  const startMinutes = format(parseISO(event.startAt), "mm", { locale: ru });
  const endMinutes = format(parseISO(event.endAt), "mm", { locale: ru });

  return (
    <Popup isPopupOpen={isPopupOpen} closePopup={closePopup}>
      <div className="сalendar-modal__content calendar-modal__content_place_after-confirmation">
        <Animation animationData={success} />
        <p className="event__title event__title_place_after-confirmation">
          Вы записаны на мероприятие
        </p>
        <h2 className="event__title event__title_place_after-confirmation">
          {event.title}
        </h2>
        <p className="event__title event__title_place_after-confirmation">
          {date} {month} с {startHour}:{startMinutes}–{endHour}:{endMinutes}.
        </p>
        <p className="event__title event__title_place_after-confirmation">
          Если у вас не получится прийти — отмените, пожалуйста, запись.
        </p>
        <button
          type="button"
          aria-label="Вернуться к календарю"
          className="event__button calendar-modal__button_active
            calendar-modal__button_type_return-to-calendar"
          onClick={closePopup}
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
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    booked: PropTypes.bool.isRequired,
    contact: PropTypes.string.isRequired,
    seats: PropTypes.number.isRequired,
    takenSeats: PropTypes.number.isRequired,
    startAt: PropTypes.string.isRequired,
    endAt: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default SuccessSignPopup;
