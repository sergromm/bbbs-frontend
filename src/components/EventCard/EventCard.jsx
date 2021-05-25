import React from "react";
import PropTypes from "prop-types";
import SignContext from "../../contexts/SignContext";

function EventCard({ isOnMain, event }) {
  const isLoggedIn = React.useContext(SignContext);
  const data = {
    counter: 102,
  };

  const wordPlace = (counter) => {
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
        data.counter > 0
          ? "event__button_active event__button_type_signup"
          : "event__button_disabled",
      textBtn: "Записаться",
      textCounter:
        data.counter > 0
          ? `Осталось ${data.counter} ${wordPlace(data.counter)}`
          : "Запись закрыта",
    };
  };

  // function handleZoom() {
  //   onZoomEvent(event);
  // }

  return (
    <article className={isOnMain ? "event event_place_index" : "event"}>
      <div className="event__info">
        <p className="event__group">Волонтёры + дети</p>
        <p className="event__month-and-weekday">декабрь / понедельник</p>
      </div>
      <div className="event__info">
        <h3 className="event__title event__title_place_card">event.title</h3>
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
          Александра, +7 926 356-78-90
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
        />
      </div>
    </article>
  );
}

EventCard.defaultProps = {
  isOnMain: false,
};

EventCard.propTypes = {
  isOnMain: PropTypes.bool,
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    booked: PropTypes.bool.isRequired,
  }).isRequired,
};

export default EventCard;
