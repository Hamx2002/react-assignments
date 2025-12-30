import React, { useState } from "react";
import TechnicalPresentation from "./TechnicalPresentation";

const TechnicalContainer = () => {
  // Primitives: strings
  // Non-primitives: Array of objects
  const [topics, setTopics] = useState([
    { id: 1, name: "React Hooks", status: "pending" },
    { id: 2, name: "React Router", status: "pending" },
    { id: 3, name: "Redux Toolkit", status: "pending" },
    { id: 4, name: "HTML/CSS Recapitulation", status: "completed" },
  ]);

  // Function to handle logic
  const handleToggleStatus = (id) => {
    setTopics((prevTopics) =>
      prevTopics.map((topic) =>
        topic.id === id
          ? {
              ...topic,
              status: topic.status === "pending" ? "completed" : "pending",
            }
          : topic
      )
    );
  };

  return (
    <TechnicalPresentation
      topics={topics}
      onToggleStatus={handleToggleStatus}
    />
  );
};

export default TechnicalContainer;
