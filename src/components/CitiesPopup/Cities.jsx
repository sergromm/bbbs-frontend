import PropTypes from "prop-types";

function Cities({ cities }) {
  const citiesArr = cities;
  const primaryCities = citiesArr.filter((city) => city.isPrimary);

  console.log(`
  города ${cities}
  остальные города ${citiesArr}
  прайм города ${primaryCities.id}`);

  return (
    <div className="cities">
      <h2 className="cities__title">Выберите город</h2>
      <ul className="cities__list">
        <li className="cities__item">
          <a href="/" className="cities__link">
            Москва
          </a>
        </li>
        <li className="cities__item">
          <a href="/" className="cities__link">
            Санкт-Петербург
          </a>
        </li>
      </ul>
      <ul className="cities__list">
        <li className="cities__item">
          <a href="/" className="cities__link">
            Алексин
          </a>
        </li>
        <li className="cities__item">
          <a href="/" className="cities__link">
            Барнаул
          </a>
        </li>
        <li className="cities__item">
          <a href="/" className="cities__link">
            Екатеринбург
          </a>
        </li>
        <li className="cities__item">
          <a href="/" className="cities__link">
            Зубцов
          </a>
        </li>
        <li className="cities__item">
          <a href="/" className="cities__link">
            Калининград
          </a>
        </li>
        <li className="cities__item">
          <a href="/" className="cities__link">
            Киреевск
          </a>
        </li>
        <li className="cities__item">
          <a href="/" className="cities__link">
            Коломна
          </a>
        </li>
        <li className="cities__item">
          <a href="/" className="cities__link">
            Новомосковск
          </a>
        </li>
        <li className="cities__item">
          <a href="/" className="cities__link">
            Орехово-Зуево
          </a>
        </li>
        <li className="cities__item">
          <a href="/" className="cities__link">
            Тверь
          </a>
        </li>
        <li className="cities__item">
          <a href="/" className="cities__link">
            Тула
          </a>
        </li>
      </ul>
    </div>
  );
}

Cities.propTypes = {
  cities: PropTypes.shape({
    id: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cities;
