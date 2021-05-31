import PropTypes from "prop-types";
import Question from "./Question";

function QuestionList({ questions }) {
  return (
    <ul className="questions-list">
      {questions.map((question) => (
        <Question key={question.id} title={question.title} />
      ))}
    </ul>
  );
}

QuestionList.defaultProps = {
  questions: [
    {
      id: 71,
      tags: [
        {
          id: 771,
          name: "рубрика",
          slug: "rubric",
        },
      ],
      title:
        "Я боюсь, что ребёнок ко мне слишком сильно привяжется. Что делать?",
    },
  ],
};

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          slug: PropTypes.string.isRequired,
        })
      ),
      title: PropTypes.string.isRequired,
    })
  ),
};

export default QuestionList;
