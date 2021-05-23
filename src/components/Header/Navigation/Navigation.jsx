import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navigation({ isSearchOpen, isMenuOpen }) {
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

  useEffect(() => {
    toggleNavClasses();
  }, [toggleNavClasses]);

  return (
    <nav className={navClasses}>
      <div className="nav-list__container">
        <ul className="nav-list__items nav-list__items_content_navigation">
          <li className="nav-list__item">
            <Link to="/calendar" className="nav-list__link">
              календарь
            </Link>
          </li>
          <li className="nav-list__item">
            <Link to="/where_to_go" className="nav-list__link">
              куда пойти
            </Link>
          </li>
          <li className="nav-list__item">
            <Link to="/questions" className="nav-list__link">
              вопросы
            </Link>
          </li>
          <li className="nav-list__item nav-list__item_submenu">
            <Link to="/read_and_watch" className="nav-list__link">
              читать и смотреть
            </Link>
            <ul className="nav-list__submenu-list">
              <li className="nav-list__submenu-item">
                <a href="/guide" className="nav-list__link">
                  cправочник
                </a>
              </li>
              <li className="nav-list__submenu-item">
                <a href="/video" className="nav-list__link">
                  Видео
                </a>
              </li>
              <li className="nav-list__submenu-item">
                <a href="/papers" className="nav-list__link">
                  Статьи
                </a>
              </li>
              <li className="nav-list__submenu-item">
                <a href="/movies" className="nav-list__link">
                  Фильмы
                </a>
              </li>
              <li className="nav-list__submenu-item">
                <a href="/books" className="nav-list__link">
                  Книги
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-list__item">
            <Link to="/child_rights" className="nav-list__link">
              права детей
            </Link>
          </li>
          <li className="nav-list__item">
            <Link to="/stories" className="nav-list__link">
              истории
            </Link>
          </li>
        </ul>
        <ul className="nav-list__items nav-list__items_content_social">
          <li className="nav-list__item">
            <a href="facebook.com" className="nav-list__link">
              facebook
            </a>
          </li>
          <li className="nav-list__item">
            <a href="vk.com" className="nav-list__link">
              vkontakte
            </a>
          </li>
          <li className="nav-list__item">
            <a href="instagram.com" className="nav-list__link">
              instagram
            </a>
          </li>
          <li className="nav-list__item">
            <a href="youtube.com" className="nav-list__link">
              youtube
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  isSearchOpen: PropTypes.bool.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

export default Navigation;
