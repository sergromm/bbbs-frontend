function EventCard() {
  return (
    <article className="event">
      <div className="event__info">
        <p className="event__group">Волонтёры + дети</p>
        <p className="event__month-and-weekday">декабрь / понедельник</p>
      </div>
      <div className="event__info">
        <h2 className="event__title event__title_place_card">
          Субботний meet up: учимся проходить интевью
        </h2>
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
            aria-label="Записаться"
            className="event__button event__button_active
                event__button_type_signup"
          >
            Записаться
          </button>
          <p className="event__participants-counter">Осталось 5 мест</p>
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

export default EventCard;
