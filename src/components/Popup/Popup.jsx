import PropTypes from "prop-types";

function Popup({ isPopupOpen, closePopup, children, styleCon }) {
  const popupStyle = (isOpen) => (isOpen ? "popup popup_opened" : "popup");
  git;
  return (
    <div
      className={`${popupStyle(isPopupOpen)}
       popup_content_authorization-form`}
    >
      <div className={`popup__container ${styleCon}`}>
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
Popup.defaultProps = {
  styleCon: "",
};

Popup.propTypes = {
  isPopupOpen: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  styleCon: PropTypes.string,
};

export default Popup;
