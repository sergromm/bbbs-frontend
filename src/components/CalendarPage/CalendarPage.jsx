import { parseISO, format } from "date-fns";
import { ru } from "date-fns/locale";
import React, { useState } from "react";
import PropTypes from "prop-types";
import EventCard from "../EventCard/EventCard";
import Filter from "../Filter/Filter";

function CalendarPage({ onZoomEvent, onSign, events }) {
  const [currentActiveButton, setCurrentActiveButton] = useState("");
  const [filteredEvents, setFilteredEvents] = React.useState([]);
  const [monthes, setMonthes] = useState([]);

  // функция возвращает объект месяца, чтобы добавить его в массив месяцев
  const getMonth = (event) => {
    const name = format(parseISO(event.startAt), "LLLL", { locale: ru });
    const number = Number(format(parseISO(event.startAt), "M"));
    return { number, name };
  };

  const matchMonthes = (event, month) =>
    format(parseISO(event.startAt), "LLLL", { locale: ru }) === month;

  // получаем массив месяцев в которых будут евенты
  const getMonthes = (eventList) => {
    const arr = eventList.map(getMonth);
    const firstMonth = arr[0].name;
    setCurrentActiveButton(firstMonth);
    const firstEvent = eventList.filter((event) =>
      matchMonthes(event, firstMonth)
    );
    setFilteredEvents(firstEvent);
    return arr;
  };

  // При клике на кнопку фильтра фильтруем список месяцев по названию кнопки
  const handleFilterByMonth = (evt, name) => {
    const arrayOfFilteredEvents = events.filter((event) =>
      matchMonthes(event, name)
    );
    setCurrentActiveButton(name);
    setFilteredEvents(arrayOfFilteredEvents);
  };

  // настраиваем фильтры при загрузке странице
  React.useEffect(() => {
    setFilteredEvents(events);
    setMonthes(getMonthes(events));
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
  // eslint-disable-next-line react/forbid-prop-types
  events: PropTypes.array.isRequired,
};

export default CalendarPage;
