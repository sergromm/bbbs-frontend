import "./Header.css";
import { useState } from "react";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import ProfileIcon from "./ProfileIcon/ProfileIcon";
import Search from "./Search/Search";

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearchButtonClick = () => {
    if (isSearchOpen) {
      setIsSearchOpen(false);
    } else {
      setIsSearchOpen(true);
      setIsMenuOpen(false);
    }
  };

  const handleMenuButtonClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
      setIsSearchOpen(false);
    }
  };

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
        />
        <ProfileIcon />
      </div>
    </header>
  );
}

export default Header;
