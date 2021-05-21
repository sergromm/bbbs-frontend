import PropTypes from "prop-types";

function DescribeArticle({ color, text }) {
  return (
    <section className={`describe-article ${color}`}>
      <h2 className="describe-article__text">{text}</h2>
      <a className="describe-article__link" href="./pages/guide-paper.html">
        читать статью
      </a>
    </section>
  );
}

DescribeArticle.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default DescribeArticle;
