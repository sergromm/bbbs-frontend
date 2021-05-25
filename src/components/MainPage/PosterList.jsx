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
  ).isRequired,
};

export default PosterList;
