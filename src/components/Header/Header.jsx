import "./Header.css";
import { useState, useEffect } from "react";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import ProfileIcon from "./ProfileIcon/ProfileIcon";
import Search from "./Search/Search";

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [resultsVisible, setResultsVisible] = useState(false);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setResultsVisible(true);
  };

  const handleSearchButtonClick = () => {
    if (isSearchOpen) {
      setIsSearchOpen(false);
      setResultsVisible(false);
    } else {
      setIsSearchOpen(true);
      setIsMenuOpen(false);
    }
  };

  const handleMenuButtonClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      setResultsVisible(false);
    } else {
      setIsMenuOpen(true);
      setIsSearchOpen(false);
    }
  };

  useEffect(() => {
    const header = document.querySelector(".header");
    let prevScrollpos = window.pageYOffset;

    const hideNavbar = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollpos > currentScrollPos) {
        header.classList.remove("header_hidden");
        setResultsVisible(false);
      } else {
        header.classList.add("header_hidden");
      }

      prevScrollpos = currentScrollPos;
    };

    window.addEventListener("scroll", hideNavbar);
    return () => window.removeEventListener("scroll", hideNavbar);
  }, []);

  return (
    <header className="header">
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
        <ProfileIcon />
      </div>
    </header>
  );
}

export default Header;
