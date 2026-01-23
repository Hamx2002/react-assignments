import { useState, useEffect } from "react";

function Day24() {
  // --- 1. Fetch Data State ---
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- 2. Timer State ---
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // --- 1. Fetch Function using useEffect ---
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        const data = await response.json();
        setUsers(data.slice(0, 5)); // Just take 5 for display
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array = Component Did Mount

  // --- 2-5. Timer Logic ---
  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setCount((prevCount) => {
          // Task 3: When it comes to 50, stop and start at 10 (reset to 10)
          if (prevCount >= 50) {
            // Option A: Auto restart from 10
            // return 10;

            // Option B: Stop and reset to 10 (waiting for start)
            setIsRunning(false);
            return 10;
          }
          return prevCount + 1;
        });
      }, 100); // Fast timer for demonstration
    }

    // Cleanup function (Component Will Unmount / before effect re-runs)
    return () => clearInterval(intervalId);
  }, [isRunning]);

  return (
    <div className="space-y-12 p-6 max-w-4xl mx-auto">
      <header className="border-b border-gray-700 pb-4">
        <h1 className="text-3xl font-bold text-white mb-2">
          Day 24 Assignment
        </h1>
        <p className="text-gray-400">useEffect, Fetch API, and Timer Logic</p>
      </header>

      {/* --- Task 1: Fetch API Data --- */}
      <section className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-blue-400">
          1. Users List (Fetched via API)
        </h2>
        {loading ? (
          <p className="text-yellow-500">Loading users...</p>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {users.map((user) => (
              <li
                key={user.id}
                className="bg-[#2a2a2a] p-3 rounded border border-gray-700"
              >
                <span className="font-bold block text-white">{user.name}</span>
                <span className="text-sm text-gray-500">{user.email}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* --- Task 2-5: Timer Program --- */}
      <section className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-green-400">
          2. Timer Program
        </h2>

        <div className="flex items-center gap-6 mb-6">
          <div className="text-6xl font-mono font-bold text-white w-24 text-center">
            {count}
          </div>
          <div className="space-x-4">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className={`px-4 py-2 rounded font-bold ${isRunning ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"} text-white`}
            >
              {isRunning ? "Stop" : "Start"}
            </button>
            <button
              onClick={() => {
                setIsRunning(false);
                setCount(0);
              }}
              className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-700 text-white"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-center">
          {/* Task 4: Odd Number Text */}
          <div
            className={`p-4 rounded border ${count % 2 !== 0 ? "bg-purple-900/50 border-purple-500 text-purple-200" : "bg-gray-800/20 border-gray-700 text-gray-600"}`}
          >
            Odd Number Check:{" "}
            <strong>{count % 2 !== 0 ? "IT'S ODD" : "-"}</strong>
          </div>

          {/* Task 5: Even Number Text */}
          <div
            className={`p-4 rounded border ${count % 2 === 0 ? "bg-blue-900/50 border-blue-500 text-blue-200" : "bg-gray-800/20 border-gray-700 text-gray-600"}`}
          >
            Even Number Check:{" "}
            <strong>{count % 2 === 0 ? "IT'S EVEN" : "-"}</strong>
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          * Timer stops at 50 and resets to 10.
        </p>
      </section>

      {/* --- Explanations --- */}
      <section className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg space-y-6">
        <h2 className="text-xl font-semibold text-purple-400">
          Concept Explanations
        </h2>

        <div>
          <h3 className="font-bold text-lg text-white mb-2">
            What is useEffect?
          </h3>
          <p className="text-gray-300 leading-relaxed">
            <code>useEffect</code> is a React Hook that lets you synchronize a
            component with an external system. It controls side effects like
            data fetching, subscriptions, or manually changing the DOM.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg text-white mb-2">
            How many useEffects can we use?
          </h3>
          <p className="text-gray-300 leading-relaxed">
            You can use as many <code>useEffect</code> hooks as you need in a
            single component. It is better to separate different concerns
            (logic) into different effects rather than cramming everything into
            one.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg text-white mb-2">
            Handling Lifecycle Methods in useEffect
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>
              <strong className="text-blue-300">
                Mounting (componentDidMount):
              </strong>
              <br /> Pass an empty dependency array <code>[]</code>. The code
              inside runs only once when the component appears.
            </li>
            <li>
              <strong className="text-green-300">
                Updating (componentDidUpdate):
              </strong>
              <br /> Pass dependencies <code>[prop, state]</code>. The code runs
              whenever any value in the array changes.
            </li>
            <li>
              <strong className="text-red-300">
                Unmounting (componentWillUnmount):
              </strong>
              <br /> Return a cleanup function from the effect. This runs when
              the component is removed or before the effect re-runs.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Day24;
