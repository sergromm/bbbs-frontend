import React from "react";
import EventCard from "../EventCard/EventCard";
import api from "../../utils/api/api";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function CalendarPage() {
  const { city } = React.useContext(CurrentUserContext);
  const token = localStorage.getItem("access");
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
        {api
          .getEvents(city, token)
          .then((res) => {
            res.map((eventItem) => (
              <EventCard key={eventItem.id} event={eventItem} />
            ));
          })
          .catch(new Error())}
      </section>
    </main>
  );
}

export default CalendarPage;
