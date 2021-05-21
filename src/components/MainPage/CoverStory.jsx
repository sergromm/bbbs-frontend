import historyImage from "../../images/history-friend.png";

function CoverStory() {
  return (
    <section className="cover-history">
      <img src={historyImage} alt="" className="cover-history__image" />
      <div className="cover-history__layer">
        <a href="/" className="cover-history__title">
          История Марины и Алины
        </a>
      </div>
    </section>
  );
}

export default CoverStory;
