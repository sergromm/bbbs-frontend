import PropTypes from "prop-types";

function SearchResult({ text }) {
  return (
    <li className="search__result">
      <p className="search__result-text">{text}</p>
      <a href="/books" className="search__result-link">
        книги
      </a>
    </li>
  );
}

SearchResult.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SearchResult;
