import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavigationItem from "./NavigationItem";

function Navigation({ isSearchOpen, isMenuOpen, onLinkClick }) {
  const [navClasses, setNavClasses] = useState("nav-list");

  const toggleNavClasses = () => {
    if (isSearchOpen) {
      setNavClasses("nav-list nav-list_hidden");
    } else if (isMenuOpen) {
      setNavClasses("nav-list nav-list_opened");
    } else {
      setNavClasses("nav-list");
    }
  };

  // const navigationItems = [
  //   { id: 1, name: "календарь", link: "/calendar" },
  //   { id: 2, name: "куда пойти", link: "/where_to_go" },
  //   { id: 3, name: "вопросы", link: "/questions" },
  //   {
  //     id: 4,
  //     name: "читать и смотреть",
  //     link: "/read_and_watch",
  //     withSubNavigation: true,
  //   },
  //   { id: 5, name: "права детей", link: "/calendar" },
  //   { id: 6, name: "истории", link: "/calendar" },
  // ];

  const subnavigationItems = [
    { key: 1, name: "справочник", link: "/guide" },
    { key: 2, name: "Видео", link: "/video" },
    { key: 3, name: "Статьи", link: "/papers" },
    { key: 4, name: "Фильмы", link: "/movies" },
    { key: 5, name: "Книги", link: "/books" },
  ];

  const navigationLinkItems = [
    { key: 1, name: "facebook", link: "facebook.com" },
    { key: 2, name: "vkontakte", link: "vk.com" },
    { key: 3, name: "instagram", link: "instagram.com" },
    { key: 4, name: "youtube", link: "youtube.com" },
  ];

  const renderNavItem = (item) => (
    <NavigationItem
      key={item.key}
      name={item.name}
      link={item.name}
      onLinkClick={onLinkClick}
    />
  );

  useEffect(() => {
    toggleNavClasses();
  }, [toggleNavClasses]);

  return (
    <nav className={navClasses}>
      <div className="nav-list__container">
        <ul className="nav-list__items nav-list__items_content_navigation">
          <li className="nav-list__item">
            <Link
              to="/calendar"
              className="nav-list__link"
              onClick={onLinkClick}
            >
              календарь
            </Link>
          </li>
          <li className="nav-list__item">
            <Link
              to="/where_to_go"
              className="nav-list__link"
              onClick={onLinkClick}
            >
              куда пойти
            </Link>
          </li>
          <li className="nav-list__item">
            <Link
              to="/questions"
              className="nav-list__link"
              onClick={onLinkClick}
            >
              вопросы
            </Link>
          </li>
          <li className="nav-list__item nav-list__item_submenu">
            <Link
              to="/read_and_watch"
              className="nav-list__link"
              onClick={onLinkClick}
            >
              читать и смотреть
            </Link>
            <ul className="nav-list__submenu-list">
              {subnavigationItems.map(renderNavItem)}
            </ul>
          </li>
          <li className="nav-list__item">
            <Link
              to="/child_rights"
              className="nav-list__link"
              onClick={onLinkClick}
            >
              права детей
            </Link>
          </li>
          <li className="nav-list__item">
            <Link
              to="/stories"
              className="nav-list__link"
              onClick={onLinkClick}
            >
              истории
            </Link>
          </li>
        </ul>
        <ul className="nav-list__items nav-list__items_content_social">
          {navigationLinkItems.map(renderNavItem)}
        </ul>
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  isSearchOpen: PropTypes.bool.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  onLinkClick: PropTypes.func.isRequired,
};

export default Navigation;
