function Video() {
  return (
    <section className="video video_main">
      <div className="video__info">
        <h2 className="video__title">Эфир с выпускником нашей программы</h2>
        <h3 className="video__subtitle">Иван Рустаев, выпускник программы</h3>
        <a className="video__link" href="/video">
          смотреть видео
        </a>
      </div>
      <iframe
        className="video__frame"
        src="https://www.youtube.com/embed/KA1wI3X5WSU"
        title="YouTube video player"
      />
    </section>
  );
}

export default Video;
