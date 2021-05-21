import PropTypes from "prop-types";

function Poster({ title, subtitle, image }) {
  return (
    <li className="poster__item poster__item_screen_tablet">
      <div className="poster__layer">
        <img className="poster__image" src={image} alt="постер" />
        <div className="poster__categories">
          <p className="poster__category">рубрика</p>
          <p className="poster__category">рубрика</p>
        </div>
      </div>
      <div className="poster__info">
        <h3 className="poster__title">{title}</h3>
        <p className="poster__subtitle">{subtitle}</p>
        <a href="/" className="poster__link">
          смотреть трейлер
        </a>
      </div>
    </li>
  );
}

Poster.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Poster;
