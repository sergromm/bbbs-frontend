import Question from "./Question";

function QuestionList() {
  const questions = [
    {
      text: "Я боюсь, что ребёнок ко мне слишком сильно привяжется. Что делать?",
      id: 1,
    },
    {
      text: "Возможно ли продлить срок участия в программе, если и я и мой «младший» хотим остаться в программе?",
      id: 2,
    },
    {
      text: "Что делать если Ваш младший решил закрыть пару, т.к. слишком занят с учебой и друзьями?",
      id: 3,
    },
  ];

  return (
    <ul className="questions-list">
      {questions.map((question) => (
        <Question key={question.id} text={question.text} />
      ))}
    </ul>
  );
}

export default QuestionList;
