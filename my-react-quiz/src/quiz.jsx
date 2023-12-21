import { quest } from "blizzard.js/dist/resources/wow";
import React, { useState, useEffect } from "react";

export default function Quiz() {
  const [questions, setQuestions] = useState(null);
  const [chosenAnswers, setChosenAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const getFetch = async () => {
      const response = await fetch("/api/fe/quiz");
      const jsonResponse = await response.json();
      setQuestions(jsonResponse);
    };
    getFetch();
  }, []);

  if (questions == null) return null;

  const updateChosenAnswers = (questionIndex, answerIndex) => {
    const newChosenAnswer = [...chosenAnswers];
    newChosenAnswer[questionIndex] = answerIndex;
    setChosenAnswers(newChosenAnswer);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    <>
      <h1>{currentQuestion.question}</h1>
    </>
  );
}
