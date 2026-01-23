import { useState } from "react";

function Day26() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "Developer",
  });

  const handleChange = (e) => {
    // This is the line to explain
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-12 p-6 max-w-5xl mx-auto">
      <header className="border-b border-gray-700 pb-4">
        <h1 className="text-3xl font-bold text-white mb-2">
          Day 26 Assignment
        </h1>
        <p className="text-gray-400">Complex State Handling</p>
      </header>

      {/* --- Explanation --- */}
      <section className="bg-[#1e1e1e] p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-6 text-purple-400">
          Understanding Dynamic Object Keys
        </h2>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <div className="bg-[#111] p-4 rounded-lg border-l-4 border-purple-500 font-mono text-sm overflow-x-auto">
            <span className="text-blue-400">setForm</span>
            <span className="text-yellow-400">{"({"}</span>
            <span className="text-green-400">...form</span>,
            <span className="text-pink-400"> [e.target.name]</span>:
            <span className="text-cyan-400"> e.target.value</span>
            <span className="text-yellow-400">{" })"}</span>
          </div>

          <ul className="list-decimal list-inside space-y-4">
            <li>
              <strong className="text-green-400">
                ...form (Spread Operator)
              </strong>
              <p className="ml-6 mt-1 text-gray-400">
                First, we create a copy of the existing <code>form</code>{" "}
                object. This is crucial in React because state formatting should
                be immutable. We copy all existing fields (firstName, lastName,
                etc.) so we don't lose them.
              </p>
            </li>
            <li>
              <strong className="text-pink-400">
                [e.target.name] (Computed Property Name)
              </strong>
              <p className="ml-6 mt-1 text-gray-400">
                The square brackets <code>[]</code> allow us to use the value of
                a variable as the key. If the input's name is "email", this
                effectively becomes <code>email: e.target.value</code>. This
                lets one single handler function update any field in the object
                dynamically.
              </p>
            </li>
            <li>
              <strong className="text-cyan-400">e.target.value</strong>
              <p className="ml-6 mt-1 text-gray-400">
                This is simply the new text the user typed into the input field.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* --- Live Demo --- */}
      <section className="bg-[#1e1e1e] p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-6 text-green-400">
          Live Example
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                First Name
              </label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="w-full bg-[#2a2a2a] border border-gray-600 rounded p-2 text-white focus:border-purple-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Last Name
              </label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="w-full bg-[#2a2a2a] border border-gray-600 rounded p-2 text-white focus:border-purple-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Email
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-[#2a2a2a] border border-gray-600 rounded p-2 text-white focus:border-purple-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Role
              </label>
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full bg-[#2a2a2a] border border-gray-600 rounded p-2 text-white focus:border-purple-500 focus:outline-none"
              >
                <option>Developer</option>
                <option>Designer</option>
                <option>Manager</option>
              </select>
            </div>
          </form>

          {/* State Visualization */}
          <div className="bg-[#0f0f0f] p-6 rounded-lg font-mono text-sm border border-gray-800">
            <h3 className="text-gray-500 mb-4 border-b border-gray-800 pb-2">
              Current State (form Object)
            </h3>
            <pre className="text-green-300">
              {JSON.stringify(form, null, 2)}
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Day26;
