import PropTypes from "prop-types";

function Paper({ place }) {
  const description = (
    <div className="paper__description paper__description_size_max paper__description_color_yellow">
      <div className="paper__description-info">
        {place.chosen && (
          <p className="paper__description-mark">выбор наставника</p>
        )}
        <h3 className="paper__description-title">{place.title}</h3>
        <p className="paper__description-subtitle">{place.name}</p>
      </div>
      <img
        src={place.imageUrl}
        alt="Сплав на байдарках в две строки"
        className="paper__description-image"
      />
      <a
        href={place.link}
        target="_blank"
        rel="noreferrer"
        className="paper__description-link"
      >
        перейти на сайт
      </a>
    </div>
  );

  const text = (
    <div className="paper-text paper-text_size_max">
      <div className="paper-text__wrapper_size_max">
        <p className="paper-text__title">{place.info}</p>
        <div className="paper-text__text">
          <p className="paper-text__paragraph">{place.description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="paper paper_size_max paper_place_index">
      {description}
      {text}
    </section>
  );
}

Paper.defaultProps = {
  place: {
    chosen: true,
    id: 31,
    title: "Сплав на байдарках в две строки",
    name: "усадьба Архангельское в две строки",
    info: "Девока, 10 лет. Активный отдых",
    description:
      "Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга,  потом понимать чуть лучше и, Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга,  потом понимать чуть лучше и,\nАннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не по Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.",
    imageUrl: "https://picsum.photos/1125/394",
    link: "https://www.moscowzoo.ru/",
  },
};

Paper.propTypes = {
  place: PropTypes.shape({
    chosen: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
};

export default Paper;
