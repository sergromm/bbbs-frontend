import { useContext } from "react";
import PropTypes from "prop-types";
import profileIcon from "../../../images/ico-profile.svg";
import CurrentUserContext from "../../../contexts/CurrentUserContext";

function ProfileIcon({ handleClick, isVisible }) {
  const { isLoggedIn } = useContext(CurrentUserContext);
  const iconStyles = () => {
    if (isLoggedIn) {
      return "profile-ico profile-ico_state_authorized";
    }
    return "profile-ico profile-ico_state_not-authorized";
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      src={profileIcon}
      className={`${iconStyles()} ${isVisible && "profile-ico_visible"}`}
      alt="Иконка юзера"
    />
  );
}

ProfileIcon.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default ProfileIcon;
