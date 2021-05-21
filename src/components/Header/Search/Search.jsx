import "./Search.css";
import PropTypes from "prop-types";
import SearchResult from "./SearchResult";

function Search({
  isSearchOpen,
  searchButtonClick,
  searchSubmit,
  resultsVisible,
}) {
  const searchData = [
    {
      text: "Причины подростковой агрессии",
      id: 1,
    },
    {
      text: "Агрессивное поведение детей-сирот",
      id: 2,
    },
    {
      text: "Что делать если ваш младший агрессивно себя ведет, решил закрыть пару?",
      id: 3,
    },
    {
      text: "Как реагировать на агрессивное поведения ребенка",
      id: 4,
    },
  ];
  return (
    <form onSubmit={searchSubmit} className="search" name="search">
      <div
        className={
          isSearchOpen
            ? "search__container search__container_active"
            : "search__container"
        }
      >
        <input type="text" name="searchInput" className="search__input" />
        <ul
          className={
            resultsVisible
              ? "search__results search__results_show"
              : "search__results"
          }
        >
          {searchData.map((result) => (
            <SearchResult key={result.id} text={result.text} />
          ))}
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
  searchSubmit: PropTypes.func.isRequired,
  resultsVisible: PropTypes.bool.isRequired,
};

export default Search;
