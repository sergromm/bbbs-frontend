import React from "react";
import PropTypes from "prop-types";
import EventCard from "../EventCard/EventCard";
import api from "../../utils/api/api";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function CalendarPage({ onZoomEvent, isEventPopupOpen }) {
  const { city } = React.useContext(CurrentUserContext);
  const token = localStorage.getItem("access");
  const [events, setEvents] = React.useState();
  // получаем массив событий при загрузке странице
  React.useEffect(() => {
    api.getEvents(city, token).then(setEvents).catch(new Error());
  }, []);

  return (
    <main className="calendar-page">
      <h2 className="title">Календарь</h2>
      <div className="filter">
        <button
          type="button"
          aria-label="Все"
          className="filter__button filter__button_active"
        >
          Декабрь
        </button>
        <button
          type="button"
          aria-label="Выбор наставников"
          className="filter__button"
        >
          Январь
        </button>
      </div>
      <section className="calendar__events-grid">
        {/* рендерим карточку, только если пришел ответ с массивом карточек */}
        {events &&
          events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onZoomEvent={onZoomEvent}
              isEventPopupOpen={isEventPopupOpen}
            />
          ))}
      </section>
    </main>
  );
}

CalendarPage.propTypes = {
  onZoomEvent: PropTypes.func.isRequired,
  isEventPopupOpen: PropTypes.bool.isRequired,
};

export default CalendarPage;
