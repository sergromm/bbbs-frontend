import { useEffect, useState } from "react";
import api from "../../../utils/api/api";
import City from "./City";

function Cities() {
  const [cities, setCities] = useState([{ id: 0, city: "" }]);
  useEffect(() => {
    api.getCities().then(setCities).catch(new Error());
  }, []);
  return (
    <div className="cities">
      <h2 className="cities__title">Выберите город</h2>
      <ul className="cities__list">
        {cities &&
          cities.map(
            (city) => city.isPrimary && <City key={city.id} name={city.name} />
          )}
      </ul>
      <ul className="cities__list">
        {cities &&
          cities.map(
            (city) => !city.isPrimary && <City key={city.id} name={city.name} />
          )}
      </ul>
    </div>
  );
}

export default Cities;
