import addIco from "../../images/add-ico.svg";

function Account() {
  return (
    <main className="account">
      <div className="profile profile_place_account">
        <a
          href="/"
          className="profile__city-edit profile__city-edit_place_account"
        >
          Изменить ваш город
        </a>
        <a href="/" className="profile__exit profile__exit_place_account">
          Выход
        </a>
      </div>
      <div className="coming-events">
        <p className="coming-events__title">У вас нет записи на мероприятия</p>
      </div>
      <p className="account__title">
        Составьте историю вашей дружбы с младшим. Эта страница доступна только
        вам.
      </p>
      <form className="form-history">
        <div className="form-history__photo">
          <input
            className="form-history__photo-input"
            type="file"
            name="photoHistory"
            id="photoHistory"
          />
          <div htmlFor="photoHistory" className="form-history__photo-label">
            <img
              src={addIco}
              alt="Загрузить фото"
              className="form-history__photo-ico"
            />
            <p className="form-history__photo-span">Загрузить фото</p>
          </div>
        </div>
        <div className="form-history__description">
          <div className="form-history__header">
            <input
              className="form-history__place"
              type="text"
              name="placeHistory"
              placeholder="Место встречи"
            />
            <input
              className="form-history__date"
              type="text"
              name="dateHistory"
              placeholder="Дата __.__.____"
              pattern="(0?[1-9]|[12][0-9]|3[01]).(0?[1-9]|1[012]).((19|20)\d\d)"
            />
          </div>
          <textarea
            className="form-history__review"
            name="reviewHistory"
            placeholder="Опишите вашу встречу, какие чувства вы испытывали, что понравилось / не понравилось"
          />
          <div className="form-history__footer">
            <div className="form-history__evaluation">
              <label
                className="form-history__evaluation-label form-history__evaluation-label_type_positive"
                htmlFor="positiveRadio"
              >
                <input
                  className="form-history__evaluation-radio form-history__evaluation-radio_type_positive"
                  id="positiveRadio"
                  type="radio"
                  name="evaluationHistory"
                  value="positive"
                />
              </label>
              <input
                className="form-history__evaluation-radio form-history__evaluation-radio_type_neutral"
                id="neutralRadio"
                type="radio"
                name="evaluationHistory"
                value="neutral"
              />
              <label
                className="form-history__evaluation-label form-history__evaluation-label_type_neutral"
                htmlFor="neutralRadio"
              >
                <label
                  className="form-history__evaluation-label form-history__evaluation-label_type_negative"
                  htmlFor="negativeRadio"
                >
                  <input
                    className="form-history__evaluation-radio form-history__evaluation-radio_type_negative"
                    id="negativeRadio"
                    type="radio"
                    name="evaluationHistory"
                    value="negative"
                  />
                </label>
              </label>
              <p className="form-history__evaluation-text" />
            </div>
            <div className="form-history__control">
              <button className="form-history__reset" type="button">
                Удалить
              </button>
              <button
                className="form-history__add form-history__add_disabled"
                type="submit"
                disabled
              >
                добавить
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}

export default Account;
