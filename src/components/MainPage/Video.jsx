import PropTypes from "prop-types";

function Video({ video }) {
  return (
    <section className="video video_main">
      <div className="video__info">
        <h2 className="video__title">{video.title}</h2>
        <h3 className="video__subtitle">{video.info}</h3>
        <a className="video__link" href="/video">
          смотреть видео
        </a>
      </div>
      <iframe
        loading="lazy"
        className="video__frame"
        src="https://www.youtube.com/embed/KA1wI3X5WSU"
        title="YouTube video player"
      />
    </section>
  );
}

Video.defaultProps = {
  video: {
    id: 61,
    title: "Эфир с выпускником нашей программы",
    info: "Иван Рустаев, выпускник программы",
    link: "https://www.youtube.com/embed/KA1wI3X5WSU",
    imageUrl: "https://picsum.photos/1199/675",
    duration: 134,
  },
};

Video.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
  }),
};

export default Video;
