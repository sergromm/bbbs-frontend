import { parseISO, format } from "date-fns";
import { ru } from "date-fns/locale";
import React, { useState } from "react";
import PropTypes from "prop-types";
import EventCard from "../EventCard/EventCard";
import api from "../../utils/api/api";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import Filter from "../Filter/Filter";

function CalendarPage({ onZoomEvent, onSign }) {
  const { city } = React.useContext(CurrentUserContext);
  const token = localStorage.getItem("access");
  const [events, setEvents] = React.useState([]);
  const [filteredEvents, setFilteredEvents] = React.useState([]);
  const [monthes, setMonthes] = useState([]);
  const [currentActiveButton, setCurrentActiveButton] = useState("");

  // функция возвращает объект месяца, чтобы добавить его в массив месяцев
  const getMonth = (event) => {
    const name = format(parseISO(event.startAt), "LLLL", { locale: ru });
    const number = Number(format(parseISO(event.startAt), "M"));
    return { number, name };
  };

  // получаем массив месяцев в которых будут евенты
  const getMonthes = (eventList) => {
    const arr = eventList.map(getMonth);
    return arr;
  };

  // При клике на кнопку фильтра фильтруем список месяцев по названию кнопки
  const handleFilterByMonth = (evt, monthName) => {
    const month = evt.target.innerText.toLowerCase();
    if (monthName !== currentActiveButton) {
      const arrayOfFilteredEvents = events.filter(
        (event) =>
          month === format(parseISO(event.startAt), "LLLL", { locale: ru })
      );
      setCurrentActiveButton(monthName);
      setFilteredEvents(arrayOfFilteredEvents);
    } else {
      // если нажали на активную кнопку сбрасываем фильтр
      setCurrentActiveButton("");
      setFilteredEvents(events);
    }
  };

  // получаем массив событий при загрузке странице
  React.useEffect(() => {
    api
      .getEvents(city, token)
      .then((data) => {
        setEvents(data);
        setFilteredEvents(data);
        setMonthes(getMonthes(data));
      })
      .catch(new Error());
  }, []);

  return (
    <main className="calendar-page">
      <h2 className="title">Календарь</h2>
      {monthes && (
        <Filter
          currentActiveButton={currentActiveButton}
          labels={monthes}
          handleFilter={handleFilterByMonth}
        />
      )}
      <section className="calendar__events-grid">
        {filteredEvents.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onZoomEvent={onZoomEvent}
            onSign={onSign}
          />
        ))}
      </section>
    </main>
  );
}

CalendarPage.propTypes = {
  onZoomEvent: PropTypes.func.isRequired,
  onSign: PropTypes.func.isRequired,
};

export default CalendarPage;
