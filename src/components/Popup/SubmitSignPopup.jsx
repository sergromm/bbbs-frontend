import PropTypes from "prop-types";
import { parseISO, format } from "date-fns";
import { ru } from "date-fns/locale";
import Popup from "./Popup";

function SubmitSignPopup({ isPopupOpen, closePopup, onSubmitSign, event }) {
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
      {event && (
        <div className="сalendar-modal__content calendar-modal__content_place_confirmation">
          <p className="event__title event__title_place_confirmation">
            Подтвердить запись на мероприятие
          </p>
          <h2 className="event__title event__title_place_confirmation">
            {event.title}
          </h2>
          <p className="event__title event__title_place_confirmation">
            {date} {month} с {startHour}:{startMinutes}–{endHour}:{endMinutes}.
          </p>
          <div className="event__signup-container event__confirmation-container">
            <button
              type="button"
              aria-label="Подтвердить запись"
              className="event__button event__button_active
            event__button_type_signup calendar-modal__button_type_confirm"
              onClick={onSubmitSign}
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
      )}
    </Popup>
  );
}

SubmitSignPopup.defaultProps = {
  // дефолтное значание события, которое будет подставлено если нет ответа с сервера
  event: {
    id: 1,
    booked: false,
    address: "",
    contact: "",
    title: "",
    description: "",
    startAt: "2021-05-10T06:00:00Z",
    endAt: "2021-05-10T08:00:00Z",
    seats: 100,
    takenSeats: 0,
    city: 1,
  },
};

SubmitSignPopup.propTypes = {
  isPopupOpen: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
  onSubmitSign: PropTypes.func.isRequired,
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
  }),
};

export default SubmitSignPopup;
