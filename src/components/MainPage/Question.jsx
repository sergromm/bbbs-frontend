import PropTypes from "prop-types";

function Question({ text }) {
  return (
    <li className="question">
      <p className="question__text">{text}</p>
      <p className="question__category">рубрика</p>
    </li>
  );
}

Question.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Question;
