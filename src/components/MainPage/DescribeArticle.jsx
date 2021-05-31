import PropTypes from "prop-types";

function DescribeArticle({ color, title, arrayIndex }) {
  const articleClassNames = () =>
    arrayIndex === 0
      ? "describe-article describe-article_postion_first"
      : "describe-article describe-article_position_second";

  return (
    <section
      style={{ backgroundColor: `${color}` }}
      className={articleClassNames()}
    >
      <h2 className="describe-article__text">{title}</h2>
      <a className="describe-article__link" href="./pages/guide-paper.html">
        читать статью
      </a>
    </section>
  );
}

DescribeArticle.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  arrayIndex: PropTypes.number.isRequired,
};

export default DescribeArticle;
