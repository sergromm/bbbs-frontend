import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import ProfileIcon from "./ProfileIcon/ProfileIcon";
import Search from "./Search/Search";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({
  onProfileIconClick: {
    handlers: { handleOpenPopup, handleOpenCitiesPopup },
  },
}) {
  const currentUser = useContext(CurrentUserContext);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isProfileIconVisible, setProfileIconVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [resultsVisible, setResultsVisible] = useState(false);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setResultsVisible(true);
  };

  const handleSearchButtonClick = () => {
    if (isSearchOpen) {
      setSearchOpen(false);
      setResultsVisible(false);
    } else {
      setSearchOpen(true);
      setMenuOpen(false);
    }
  };

  const handleMenuButtonClick = () => {
    if (isMenuOpen) {
      setMenuOpen(false);
      setResultsVisible(false);
      setProfileIconVisible(false);
    } else {
      setMenuOpen(true);
      setSearchOpen(false);
      setProfileIconVisible(true);
    }
  };

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;

    const hideNavbar = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollpos > currentScrollPos) {
        setHeaderVisible(true);
        setResultsVisible(false);
        setSearchOpen(false);
        setMenuOpen(false);
      } else {
        setHeaderVisible(false);
      }
      prevScrollpos = currentScrollPos;
    };

    window.addEventListener("scroll", hideNavbar);
    return () => window.removeEventListener("scroll", hideNavbar);
  }, []);

  return (
    <header className={headerVisible ? "header" : "header header_hidden"}>
      <button
        onClick={handleMenuButtonClick}
        type="button"
        aria-label="menu"
        className={
          isMenuOpen
            ? "header__btn-menu header__btn-menu_opening"
            : "header__btn-menu"
        }
      />
      <Logo />
      <Navigation isSearchOpen={isSearchOpen} isMenuOpen={isMenuOpen} />
      <div
        className={
          isSearchOpen
            ? "header__right-block header__right-block_disclosed"
            : "header__right-block"
        }
      >
        <Search
          isSearchOpen={isSearchOpen}
          searchButtonClick={handleSearchButtonClick}
          searchSubmit={handleSearchSubmit}
          resultsVisible={resultsVisible}
        />
        <ProfileIcon
          isVisible={isProfileIconVisible}
          handleClick={
            currentUser.isLoggedIn ? handleOpenCitiesPopup : handleOpenPopup
          }
        />
      </div>
    </header>
  );
}

Header.propTypes = {
  onProfileIconClick: PropTypes.shape({
    handlers: {
      handleOpenPopup: PropTypes.func.isRequired,
      handleOpenCitiesPopup: PropTypes.func.isRequired,
    },
  }).isRequired,
};

export default Header;
