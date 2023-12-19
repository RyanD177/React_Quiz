import React, { useState, useEffect } from "react";

export default function Quiz() {
  const [questions, setQuestions] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [chosenAnswers, setChosenAnswers] = useState([]);

  useEffect(() => {
    const callFetch = async () => {
      const response = await fetch("/api/fe/quiz");
      const jsonResponse = await response.json();
      setQuestions(jsonResponse);
    };
    callFetch();
  }, []);

  if (questions == null) return null;

    const updateChosenAnswers = (questionIndex, answerIndex) => {
          const newChosenAnswers = [...chosenAnswers];
          newChosenAnswers[questionIndex] = answerIndex;
          setChosenAnswers(newChosenAnswers);  

  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      <h1>{currentQuestion.question}</h1>
      {currentQuestion.answers.map((answer, answerIndex) => {
            const chosenAnswer = chosenAnswers[currentQuestionIndex];
            let className = 'answer'

            if(chosenAnswer === answerIndex){
                className += currentQuestion.correctAnswer === chosenAnswer ? ' correct' : ' incorrect';
            }


        return (
          <h2
            key={answer} // whenever map over an array to generate jsx we need to have unique keys
            onClick={() => {
                if(chosenAnswer != null) return;

                updateChosenAnswers(currentQuestionIndex, answerIndex);

            }}
            className = {className}
          >

            {answer}
          </h2>
        );
      })}
    </>
  );
}
