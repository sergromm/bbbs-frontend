import profileIcon from "../../../images/ico-profile.svg";

function ProfileIcon() {
  return (
    <img
      src={profileIcon}
      className="profile-ico profile-ico_state_non-authorize"
      alt="Иконка юзера"
    />
  );
}

export default ProfileIcon;
