import React from "react";
import "./App.css";
import TechnicalContainer from "./components/Technical/TechnicalContainer";
import CommunicationContainer from "./components/Communication/CommunicationContainer";
import AptitudeContainer from "./components/Aptitude/AptitudeContainer";

function App() {
  return (
    <div className="sla-dashboard">
      <header className="dashboard-header">
        <h1>SLA Institute Training Dashboard</h1>
        <p>Day 18 Task: Container & Presentation Pattern</p>
      </header>

      <main className="dashboard-content">
        <section className="dashboard-section">
          <TechnicalContainer />
        </section>

        <section className="dashboard-section">
          <CommunicationContainer />
        </section>

        <section className="dashboard-section">
          <AptitudeContainer />
        </section>
      </main>

      <footer className="dashboard-footer">
        <p>© 2025 SLA Institute - React Training</p>
      </footer>
    </div>
  );
}

export default App;
