import React from "react";

const AptitudePresentation = ({ questions, onAnswer }) => {
  return (
    <div className="module-card aptitude">
      <h2>Aptitude Training</h2>
      <div className="question-list">
        {questions.map((q) => (
          <div key={q.id} className="question-item">
            <p className="question-text">{q.text}</p>
            <div className="options">
              {q.options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => onAnswer(q.id, opt)}
                  className={q.selected === opt ? "selected" : ""}
                  disabled={q.isLocked}
                >
                  {opt}
                </button>
              ))}
            </div>
            {q.result && (
              <span className={`result ${q.result}`}>{q.result}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AptitudePresentation;
