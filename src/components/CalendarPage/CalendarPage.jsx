import EventCard from "../EventCard/EventCard";
import mockResponses from "../../utils/api/mockResponses";

function CalendarPage() {
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
        {mockResponses.events.map((eventItem) => (
          <EventCard key={eventItem.id} event={eventItem} />
        ))}
      </section>
    </main>
  );
}

export default CalendarPage;
