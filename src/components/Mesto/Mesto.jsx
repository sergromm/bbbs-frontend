import whereToGoPaper from "../../images/where_to_go_paper.jpg";

function Mesto() {
  return (
    <section>
      <div className="paper paper_size_max paper_place_index">
        <div className="paper__description paper__description_size_max paper__description_color_yellow">
          <p className="paper__description-mark">выбор наставника</p>
          <h3 className="paper__description-title">
            Сплав на байдарках в две строки
          </h3>
          <p className="paper__description-subtitle">
            усадьба Архангельское в две строки
          </p>
          <img
            src={whereToGoPaper}
            alt="Сплав на байдарках в две строки"
            className="paper__description-image"
          />
          <a href={whereToGoPaper} className="paper__description-link">
            перейти на сайт
          </a>
        </div>
        <div className="paper-text paper-text_size_max">
          <div className="paper-text__wrapper_size_max">
            <p className="paper-text__title">Девока, 10 лет. Активный отдых</p>
            <div className="paper-text__text">
              <p className="paper-text__paragraph">
                Аннотация статьи в несколько абзацев. В тот момент, как ребёнок
                научился говорить, и не одно слово, а задавать бесконечное
                количество вопросов, жизнь меняется. Вы будете не понимать друг
                друга, потом понимать чуть лучше и, Аннотация статьи в несколько
                абзацев. В тот момент, как ребёнок научился говорить, и не одно
                слово, а задавать бесконечное количество вопросов, жизнь
                меняется. Вы будете не понимать друг друга, потом понимать чуть
                лучше и,
              </p>
              <p className="paper-text__paragraph">
                Аннотация статьи в несколько абзацев. В тот момент, как ребёнок
                научился говорить, и не одно слово, а задавать бесконечное
                количество вопросов, жизнь меняется. Вы будете не по Аннотация
                статьи в несколько абзацев. В тот момент, как ребёнок научился
                говорить, и не одно слово, а задавать бесконечное количество
                вопросов, жизнь меняется.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mesto;
