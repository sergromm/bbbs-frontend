import PropTypes from "prop-types";
import Popup from "./Popup";
import EventCard from "../EventCard/EventCard";

function EventPopup({ isPopupOpen, closePopup }) {
  return (
    <Popup isPopupOpen={isPopupOpen} closePopup={closePopup}>
      <div className="calendar-modal__content">
        <EventCard />
      </div>
    </Popup>
  );
}

EventPopup.propTypes = {
  isPopupOpen: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
};

export default EventPopup;
