import { useState } from "react";

// --- HOC Definition ---
// This HOC handles the "input state" and "form submission logic"
const withFormHandler = (WrappedComponent) => {
  return function WithFormHandler(props) {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
      setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Form Submitted with value: ${inputValue}`);
      setInputValue(""); // Clear after submit
    };

    return (
      <WrappedComponent
        {...props}
        inputValue={inputValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    );
  };
};

// --- Functional Component to be Wrapped ---
const SimpleForm = ({ inputValue, handleChange, handleSubmit, label }) => {
  return (
    <div className="p-6 bg-[#252525] rounded border border-gray-700 shadow-md">
      <h3 className="text-xl font-bold mb-4 text-green-400">{label}</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type here..."
          className="p-3 rounded bg-[#333] text-white border border-gray-600 focus:border-green-500 outline-none"
        />
        <button
          type="submit"
          className="py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded transition"
        >
          Submit
        </button>
      </form>
      <p className="mt-4 text-gray-500 text-sm">
        Current Value:{" "}
        <span className="text-white font-mono">{inputValue}</span>
      </p>
    </div>
  );
};

// --- Wrap the component ---
const EnhancedForm = withFormHandler(SimpleForm);

// --- Main Page Component ---
function Day30() {
  return (
    <div className="space-y-12 p-6 max-w-4xl mx-auto">
      <header className="border-b border-gray-700 pb-4">
        <h1 className="text-3xl font-bold text-white mb-2">
          Day 30 Assignment
        </h1>
        <p className="text-gray-400">Higher Order Components (HOC)</p>
      </header>

      <section className="bg-[#1e1e1e] p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-6 text-indigo-400">
          HOC Example: withFormHandler
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl">
          The form logic (state, change handler, submit handler) is reusable and
          injected into the component via the
          <code> withFormHandler</code> HOC. The component below only handles
          the UI.
        </p>

        {/* Render the Enhanced Component */}
        <EnhancedForm label="My Enhanced Form" />
      </section>
    </div>
  );
}

export default Day30;
