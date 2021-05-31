function AboutProjectPage() {
  return (
    <main className="about-project-content">
      <h1 className="section-title section-title_place_about-project">
        Наставники.про – цифоровая информационная платформа огрганизации
        «Старшие Братья Старшие Сестры». Созданная для поддержки наставников
        программы.
      </h1>

      <a
        href="https://www.nastavniki.org/"
        target="_blank"
        rel="noreferrer"
        aria-label="логотип"
        className="logo_place_about-project"
      >
        {null}
      </a>

      <section className="about-organization">
        <div className="section-title__container_place_about-project">
          <h2 className="section-title about-organization__title">
            Об организации
          </h2>
        </div>
        <article className="about-organization__description-container">
          <p className="about-organization__description">
            «Старшие Братья Старшие Сестры» — межрегиональная общественная
            организация содействия воспитанию подрастающего поколения. Мы
            поддерживаем детей, которым требуется внимание: оставшихся без
            попечения родителей, приемных, детей из неполных, многодетных или
            неблагополучных семей, детей с ограниченными возможностями.
          </p>
          <p className="about-organization__description">
            Любому человеку, тем более ребенку, необходимо общение. Без него
            дети растут неуверенными и замкнутыми. Одиночество токсично, а самое
            надежное противоядие – дружба.
          </p>
          <p className="about-organization__description">
            Мы помогаем детям, которым не хватает поддержки взрослого друга,
            «Младшим». Таким другом становится наш волонтер, «Старший». Он
            принимает ребенка, какой он есть, поддерживает, помогает раскрыть
            потенциал, почувствовать уверенность в своих силах, узнать
            элементарные вещи о жизни, адаптироваться и полноценно участвовать в
            жизни общества.
          </p>
        </article>
      </section>
      <section className="about-organization__capture-container">
        <h3 className="about-organization__capture">
          Мы хотим, чтобы наставник был у каждого ребенка, который в нем
          нуждается
        </h3>
      </section>
      <section className="additional-info">
        <article className="additional-info__item">
          <h2 className="additional-info__title additional-info__title_type_donations">
            Пожертвования
          </h2>
          <div className="additional-info__content">
            <p className="additional-info__text">
              Деньги пойдут на оплату работы кураторов программы
              (профессиональные психологи/социальные работники), которые
              поддерживают дружбу между ребенком и наставником.
            </p>
            <a
              className="additional-info__link"
              target="_blank"
              rel="noreferrer"
              href="https://www.nastavniki.org/campaign/pomoch-dengami/"
            >
              сделать пожертвование
            </a>
          </div>
        </article>
        <article className="additional-info__item">
          <h2 className="additional-info__title additional-info__title_type_mentoring">
            Наставничество
          </h2>
          <div className="additional-info__content">
            <p className="additional-info__text">
              Наставник «Старшие Братья Старшие Сестры» — значимый взрослый,
              который становится для ребенка старшим другом, ролевой моделью,
              принимает своего «Младшего» таким, какой он есть. «Старший»
              открывает для ребенка дверь в большой мир и дарит ему надежду на
              более счастливое и успешное будущее.
            </p>
            <a
              className="additional-info__link"
              target="_blank"
              rel="noreferrer"
              href="https://www.nastavniki.org/volontyorstvo/kak-stat-volonterom/"
            >
              подробнее
            </a>
          </div>
        </article>
        <article className="additional-info__item">
          <h2 className="additional-info__title additional-info__title_type_partnership">
            Партнерство
          </h2>
          <div className="additional-info__content">
            <p className="additional-info__text">
              Компании поддерживают нас не только деньгами, но и делами. Мы
              собрали все возможные способы поддержки и сотрудничества:
              профессиональная помощь Pro Bono, организационная помощь,
              корпоративное волонтерство, мастер-классы, лекции, учебные
              программы.
            </p>
            <a
              className="additional-info__link"
              target="_blank"
              rel="noreferrer"
              href="https://www.nastavniki.org/oficzialno/korporativnyim-partnyoram/"
            >
              подробнее
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}

export default AboutProjectPage;
