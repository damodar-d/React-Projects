import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import quizComplete from '../assets/quiz-complete.png'
import QuestionTimer from "./QuestionTimer";
export default function Quiz() {

  const [userPickedAnswers, setUserPickedAnswers] = useState([]);


  let activeQuestionIndex = userPickedAnswers.length;


  let isQuizOver = activeQuestionIndex == QUESTIONS.length

  const  handleSelectAnswer= useCallback(function handleSelectAnswer(selectedAnswer){
    setUserPickedAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
  }, [] )

  if (isQuizOver) {
    return (<div id="summary">
      <img src={quizComplete} />
      <h2>Quiz Completed</h2>
    </div>)
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers]
  shuffledAnswers.sort(() => Math.random() - 0.5)

  const  handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(answer)
  } , [handleSelectAnswer])

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer timeout={10000} onTimeout={ () => handleSelectAnswer(null) }/>
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSkipAnswer }>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
