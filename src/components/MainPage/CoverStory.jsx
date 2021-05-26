import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CoverStory({ history }) {
  return (
    <section className="cover-history">
      <img
        src={history.imageUrl}
        alt={history.title}
        className="cover-history__image"
      />
      <Link to="/" className="cover-history__layer">
        <p className="cover-history__title">{history.title}</p>
      </Link>
    </section>
  );
}

CoverStory.defaultProps = {
  history: {
    id: 21,
    imageUrl: "https://picsum.photos/870/520",
    title: "История Марины и Алины",
  },
};

CoverStory.propTypes = {
  history: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default CoverStory;
