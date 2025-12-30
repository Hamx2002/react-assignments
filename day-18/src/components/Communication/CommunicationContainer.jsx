import React, { useState } from "react";
import CommunicationPresentation from "./CommunicationPresentation";

const CommunicationContainer = () => {
  const [sessions, setSessions] = useState([
    { id: 1, topic: "Self Introduction", rating: 0 },
    { id: 2, topic: "Group Discussion", rating: 0 },
    { id: 3, topic: "Mock Interview", rating: 0 },
  ]);

  const handleRateSession = (id, rating) => {
    setSessions((prevSessions) =>
      prevSessions.map((session) =>
        session.id === id ? { ...session, rating } : session
      )
    );
  };

  return (
    <CommunicationPresentation
      sessions={sessions}
      onRateSession={handleRateSession}
    />
  );
};

export default CommunicationContainer;
