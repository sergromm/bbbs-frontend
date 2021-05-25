import React from "react";
import PropTypes from "prop-types";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function EventCard({ isOnMain, onZoomEvent, event }) {
  const { isLoggedIn } = React.useContext(CurrentUserContext);

  console.log(event.startAt);
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

  const data = () => {
    const arr = event.startAt.split("-");
    const mounthNumber = Number(arr[1]);
    console.log(arr);
    const mounthes = [
      "январь",
      "февраль",
      "март",
      "апрель",
      "май",
      "июнь",
      "июль",
    ];
    return {
      day: 1,
      mounth: mounthes[mounthNumber + 1],
    };
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
          {data().mounth} / понедельник
        </p>
      </div>
      <div className="event__info">
        <h3 className="event__title event__title_place_card">{event.title}</h3>
        <p className="event__date">23</p>
      </div>
      <ul className="event__additional-info">
        <li className="event__additional-info-item event__additional-info-item_type_time">
          12:00–14:00
        </li>
        <li className="event__additional-info-item event__additional-info-item_type_place">
          Садовническая наб., д. 77 стр. 1 (офис компании Ernst&Young)
        </li>
        <li className="event__additional-info-item event__additional-info-item_type_contact-person">
          {event.contact}
        </li>
      </ul>
      <div className="event__controls">
        <div className="event__signup-container">
          <button
            type="button"
            aria-label={newData().textBtn}
            className={`event__button ${newData().styles}`}
          >
            {newData().textBtn}
          </button>
          <p className="event__participants-counter">{newData().textCounter}</p>
        </div>
        <button
          type="button"
          aria-label="Посмотреть детали"
          className="event__button event__button_active
              event__button_type_details"
          onZoomEvent={handleZoom}
        />
      </div>
    </article>
  );
}

EventCard.defaultProps = {
  isOnMain: false,
  onZoomEvent: null,
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
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    booked: PropTypes.bool.isRequired,
    contact: PropTypes.string.isRequired,
    seats: PropTypes.number.isRequired,
    takenSeats: PropTypes.number.isRequired,
    startAt: PropTypes.string.isRequired,
  }),
};

export default EventCard;
