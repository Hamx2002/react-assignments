import React from "react";

const TechnicalPresentation = ({ topics, onToggleStatus }) => {
  return (
    <div className="module-card technical">
      <h2>Technical Training</h2>
      <div className="topic-list">
        {topics.map((topic) => (
          <div key={topic.id} className={`topic-item ${topic.status}`}>
            <span>{topic.name}</span>
            <button onClick={() => onToggleStatus(topic.id)}>
              {topic.status === "pending" ? "Mark Done" : "Undo"}
            </button>
          </div>
        ))}
      </div>
      <div className="summary">
        <p>Total Topics: {topics.length}</p>
        <p>
          Completed: {topics.filter((t) => t.status === "completed").length}
        </p>
      </div>
    </div>
  );
};

export default TechnicalPresentation;
