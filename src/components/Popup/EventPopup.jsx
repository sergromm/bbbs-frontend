import PropTypes from "prop-types";
import Popup from "./Popup";
import EventCard from "../EventCard/EventCard";

function EventPopup({ isPopupOpen, closePopup, event }) {
  return (
    <Popup isPopupOpen={isPopupOpen} closePopup={closePopup}>
      {event && (
        <EventCard event={event} btnStyle="event__button_unvisible">
          <p className="calendar-modal__description">{event.description}</p>
        </EventCard>
      )}
    </Popup>
  );
}

EventPopup.defaultProps = {
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

EventPopup.propTypes = {
  isPopupOpen: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
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
    description: PropTypes.string.isRequired,
  }),
};

export default EventPopup;
