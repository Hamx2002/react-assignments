import React from "react";

const CommunicationPresentation = ({ sessions, onRateSession }) => {
  return (
    <div className="module-card communication">
      <h2>Communication Training</h2>
      <div className="session-list">
        {sessions.map((session) => (
          <div key={session.id} className="session-item">
            <h3>{session.topic}</h3>
            <div className="rating-area">
              <span>
                Current Rating: <b>{session.rating}/5</b>
              </span>
              <div className="buttons">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => onRateSession(session.id, star)}
                    className={session.rating >= star ? "active" : ""}
                  >
                    {star}★
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunicationPresentation;
