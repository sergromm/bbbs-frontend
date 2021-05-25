import PropTypes from "prop-types";
import Poster from "./Poster";

function PosterList({ movies }) {
  return (
    <section className="poster">
      <ul className="poster__list">
        {movies &&
          movies.map((movie) => (
            <Poster
              key={movie.id}
              title={movie.title}
              subtitle={movie.info}
              image={movie.imageUrl}
            />
          ))}
      </ul>
    </section>
  );
}

PosterList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          slug: PropTypes.string.isRequired,
        })
      ),
    })
  ),
};

PosterList.defaultProps = {
  movies: [
    {
      id: 51,
      imageUrl: "https://picsum.photos/420/239",
      title: "Жутко громко и запредельно близко",
      info: "Василий Сигарев, Борисов-Мусотов (Россия), 2009 год",
      link: "https://youtu.be/8VzzlhOyOSI",
      tags: [
        {
          id: 551,
          name: "рубрика",
          slug: "rubric",
        },
        {
          id: 552,
          name: "рубрика",
          slug: "rubric",
        },
      ],
    },
  ],
};

export default PosterList;
