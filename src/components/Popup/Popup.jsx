import PropTypes from "prop-types";

function Popup({ isPopupOpen, closePopup, children }) {
  const popupStyle = (isOpen) => (isOpen ? "popup popup_opened" : "popup");
  return (
    <div
      className={`${popupStyle(isPopupOpen)}
       'popup_content_authorization-form'`}
    >
      <div className="popup__container">
        {children}
        <button
          onClick={closePopup}
          className="popup__close"
          type="button"
          aria-label="закрыть"
        />
      </div>
    </div>
  );
}

Popup.propTypes = {
  isPopupOpen: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Popup;
