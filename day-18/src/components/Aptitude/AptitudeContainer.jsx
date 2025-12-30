import React, { useState } from "react";
import AptitudePresentation from "./AptitudePresentation";

const AptitudeContainer = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: "What comes next in the series: 2, 4, 8, 16...?",
      options: ["24", "32", "30", "64"],
      correct: "32",
      selected: null,
      isLocked: false,
      result: null,
    },
    {
      id: 2,
      text: "If CAT = 24, DOG = 26, then RAT = ?",
      options: ["39", "40", "32", "27"],
      correct: "39",
      selected: null,
      isLocked: false,
      result: null,
    },
  ]);

  const handleAnswer = (id, answer) => {
    setQuestions((prev) =>
      prev.map((q) => {
        if (q.id !== id) return q;
        const isCorrect = answer === q.correct;
        return {
          ...q,
          selected: answer,
          isLocked: true,
          result: isCorrect ? "Correct" : "Incorrect",
        };
      })
    );
  };

  return <AptitudePresentation questions={questions} onAnswer={handleAnswer} />;
};

export default AptitudeContainer;
