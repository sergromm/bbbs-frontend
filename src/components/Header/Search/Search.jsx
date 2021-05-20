import "./Search.css";

import PropTypes from "prop-types";

function Search({ isSearchOpen, searchButtonClick }) {
  return (
    <form className="search" name="search">
      <div
        className={
          isSearchOpen
            ? "search__container search__container_active"
            : "search__container"
        }
      >
        <input type="text" name="searchInput" className="search__input" />
        <ul className="search__results">
          <li className="search__result">
            <p className="search__result-text">Причины подростковой агрессии</p>
            <a href="/papers" className="search__result-link">
              статьи
            </a>
          </li>
          <li className="search__result">
            <p className="search__result-text">
              Агрессивное поведение детей-сирот
            </p>
            <a href="/video" className="search__result-link">
              видео
            </a>
          </li>
          <li className="search__result">
            <p className="search__result-text">
              Что делать если ваш младший агрессивно себя ведет, решил закрыть
              пару?
            </p>
            <a href="/question" className="search__result-link">
              вопросы
            </a>
          </li>
          <li className="search__result">
            <p className="search__result-text">
              Как реагировать на агрессивное поведения ребенка
            </p>
            <a href="/books" className="search__result-link">
              книги
            </a>
          </li>
        </ul>
      </div>
      <button
        onClick={searchButtonClick}
        type="button"
        name="searchSubmit"
        className="search__btn"
        aria-label="Поиск"
      />
    </form>
  );
}

Search.propTypes = {
  isSearchOpen: PropTypes.bool.isRequired,
  searchButtonClick: PropTypes.func.isRequired,
};

export default Search;
