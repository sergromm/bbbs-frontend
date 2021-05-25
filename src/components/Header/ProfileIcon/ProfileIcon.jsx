import { useContext } from "react";
import { Link } from "react-router-dom";
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

  const iconLink = (
    <Link
      to="/profile"
      src={profileIcon}
      className={`${iconStyles()} ${isVisible && "profile-ico_visible"}`}
      alt="Иконка юзера"
    />
  );

  const iconButton = (
    <button
      type="button"
      onClick={handleClick}
      src={profileIcon}
      className={`${iconStyles()} ${isVisible && "profile-ico_visible"}`}
      alt="Иконка юзера"
    />
  );

  return <>{isLoggedIn ? iconLink : iconButton}</>;
}

ProfileIcon.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default ProfileIcon;
