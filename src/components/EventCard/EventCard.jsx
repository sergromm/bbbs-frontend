import React from "react";
import { parseISO, format } from "date-fns";
import { ru } from "date-fns/locale";
import PropTypes from "prop-types";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function EventCard({
  isOnMain,
  onZoomEvent,
  event,
  children,
  btnStyle,
  onSign,
}) {
  const { isLoggedIn } = React.useContext(CurrentUserContext);
  const dayWeek = format(parseISO(event.startAt), "EEEE", { locale: ru });
  const month = format(parseISO(event.startAt), "LLLL", {
    locale: ru,
  });
  const date = format(parseISO(event.startAt), "d", { locale: ru });
  const startHour = format(parseISO(event.startAt), "H", { locale: ru });
  const endHour = format(parseISO(event.endAt), "H", { locale: ru });
  const startMinutes = format(parseISO(event.startAt), "mm", { locale: ru });
  const endMinutes = format(parseISO(event.endAt), "mm", { locale: ru });

  const counter = event.seats - event.takenSeats;

  const wordPlace = () => {
    const num = String(counter);
    switch (num.charAt(num.length - 1)) {
      case "1":
        return "место";
      case "2":
        return "места";
      case "3":
        return "места";
      case "4":
        return "места";
      default:
        return "мест";
    }
  };

  const newData = () => {
    if (isLoggedIn && event.booked)
      return {
        styles: "event__button_active event__button_type_cancel",
        textBtn: "Отменить",
        textCounter: "",
      };
    return {
      styles:
        counter > 0
          ? "event__button_active event__button_type_signup"
          : "event__button_disabled",
      textBtn: "Записаться",
      textCounter:
        counter > 0 ? `Осталось ${counter} ${wordPlace()}` : "Запись закрыта",
      func: onSign,
    };
  };

  function handleZoom() {
    onZoomEvent(event);
  }

  return (
    <article className={isOnMain ? "event event_place_index" : "event"}>
      <div className="event__info">
        <p className="event__group">Волонтёры + дети</p>
        <p className="event__month-and-weekday">
          {month} / {dayWeek}
        </p>
      </div>
      <div className="event__info">
        <h3 className="event__title event__title_place_card">{event.title}</h3>
        <p className="event__date">{date}</p>
      </div>
      <ul className="event__additional-info">
        <li className="event__additional-info-item event__additional-info-item_type_time">
          {startHour}:{startMinutes}–{endHour}:{endMinutes}
        </li>
        <li className="event__additional-info-item event__additional-info-item_type_place">
          {event.address}
        </li>
        <li className="event__additional-info-item event__additional-info-item_type_contact-person">
          {event.contact}
        </li>
      </ul>
      {children}
      <div className="event__controls">
        <div className="event__signup-container">
          <button
            type="button"
            aria-label={newData().textBtn}
            className={`event__button ${newData().styles}`}
            onClick={newData().func}
          >
            {newData().textBtn}
          </button>
          <p className="event__participants-counter">{newData().textCounter}</p>
        </div>
        <button
          type="button"
          aria-label="Посмотреть детали"
          className={`event__button event__button_active
              event__button_type_details ${btnStyle}`}
          onClick={handleZoom}
        />
      </div>
    </article>
  );
}

EventCard.defaultProps = {
  isOnMain: false,
  onZoomEvent: null,
  onSign: null,
  children: <></>,
  btnStyle: "",
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

EventCard.propTypes = {
  isOnMain: PropTypes.bool,
  onZoomEvent: PropTypes.func,
  onSign: PropTypes.func,
  children: PropTypes.element,
  btnStyle: PropTypes.string,
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
  }),
};

export default EventCard;
