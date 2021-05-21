import Poster from "./Poster";
import posterImage from "../../images/poster-image.png";

function PosterList() {
  const postData = [
    {
      title: "Жутко громко и запредельно близко",
      subtitle: "Василий Сигарев, Борисов-Мусотов (Россия), 2009 год",
      image: posterImage,
      id: 1,
    },
    {
      title: "Жизнь Кабачка",
      subtitle: "Клод Баррас, мультфильм, Швейцария, Франция, 2016",
      image: posterImage,
      id: 2,
    },
    {
      title: "Волчок",
      subtitle: "Василий Сигарев, Россия, 2009 год",
      image: posterImage,
      id: 3,
    },
    {
      title: "Жутко громко и запредельно близко",
      subtitle: "Василий Сигарев, Борисов-Мусотов (Россия), 2009 год",
      image: posterImage,
      id: 4,
    },
  ];

  return (
    <section className="poster">
      <ul className="poster__list">
        {postData.map((data) => (
          <Poster
            key={data.id}
            title={data.title}
            subtitle={data.subtitle}
            image={data.image}
          />
        ))}
      </ul>
    </section>
  );
}

export default PosterList;
