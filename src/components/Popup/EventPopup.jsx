import PropTypes from "prop-types";
import Popup from "./Popup";
import EventCard from "../EventCard/EventCard";

function EventPopup({ isPopupOpen, closePopup, event, onSubmitSign }) {
  return (
    event && (
      <Popup isPopupOpen={isPopupOpen} closePopup={closePopup}>
        <EventCard
          event={event}
          btnStyle="event__button_unvisible"
          onSign={onSubmitSign}
        >
          <p className="calendar-modal__description">{event.description}</p>
        </EventCard>
      </Popup>
    )
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
  onSubmitSign: PropTypes.func.isRequired,
  event: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    address: PropTypes.string,
    booked: PropTypes.bool,
    contact: PropTypes.string,
    seats: PropTypes.number,
    takenSeats: PropTypes.number,
    startAt: PropTypes.string,
    endAt: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default EventPopup;
