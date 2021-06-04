import PropTypes from "prop-types";
import { parseISO, format } from "date-fns";
import { ru } from "date-fns/locale";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();

  function handleRedirect() {
    history.push("/calendar");
    closePopup();
  }

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
          onClick={handleRedirect}
        >
          Вернуться к календарю
        </button>
      </div>
    </Popup>
  );
}

SuccessSignPopup.defaultProps = {
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

SuccessSignPopup.propTypes = {
  isPopupOpen: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
  event: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    address: PropTypes.string,
    booked: PropTypes.bool,
    contact: PropTypes.string,
    seats: PropTypes.number,
    takenSeats: PropTypes.number,
    startAt: PropTypes.string,
    endAt: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default SuccessSignPopup;
