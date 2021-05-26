import PropTypes from "prop-types";

function Question({ title }) {
  return (
    <li className="question">
      <p className="question__text">{title}</p>
      <p className="question__category">рубрика</p>
    </li>
  );
}

Question.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Question;
