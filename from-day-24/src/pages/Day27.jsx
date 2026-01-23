import { useState, useRef } from "react";

function Day27() {
  // --- Task 1 & 2: Form to Array ---
  // Using single object state for form
  const [formData, setFormData] = useState({ title: "", desc: "" });
  const [dataList, setDataList] = useState([]);

  // Refs for Task 3
  const titleRef = useRef(null);
  const boxRef = useRef(null);
  const inputRef = useRef(null);

  // Form Handlers
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.desc) return;

    // Push code into array (Task 2)
    setDataList([...dataList, formData]);
    setFormData({ title: "", desc: "" }); // Reset form
  };

  // --- Ref Handlers ---

  // 1. Change Title
  const handleChangeTitle = () => {
    if (titleRef.current) {
      titleRef.current.innerText = "Title Changed via Ref!";
      titleRef.current.style.color = "#f472b6"; // Tailwind pink-400
    }
  };

  // 2. Hide/Show
  const toggleVisibility = () => {
    if (boxRef.current) {
      // Toggle display style
      if (boxRef.current.style.display === "none") {
        boxRef.current.style.display = "block";
      } else {
        boxRef.current.style.display = "none";
      }
    }
  };

  // 3. Take value from Form (Uncontrolled)
  const handleGetValue = () => {
    if (inputRef.current) {
      alert(`Value from Ref: ${inputRef.current.value}`);
    }
  };

  return (
    <div className="space-y-12 p-6 max-w-5xl mx-auto">
      <header className="border-b border-gray-700 pb-4">
        <h1 className="text-3xl font-bold text-white mb-2">
          Day 27 Assignment
        </h1>
        <p className="text-gray-400">Forms to Array & useRef Examples</p>
      </header>

      {/* --- Section 1: Form to Array --- */}
      <section className="bg-[#1e1e1e] p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-6 text-cyan-400">
          1. Form to List (State Object)
        </h2>

        <form
          onSubmit={handleSubmit}
          className="mb-8 p-4 border border-gray-700 rounded bg-[#252525]"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title"
              className="p-2 rounded bg-[#333] text-white border border-gray-600 focus:border-cyan-500 outline-none flex-1"
            />
            <input
              name="desc"
              value={formData.desc}
              onChange={handleChange}
              placeholder="Description"
              className="p-2 rounded bg-[#333] text-white border border-gray-600 focus:border-cyan-500 outline-none flex-1"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded font-bold"
            >
              Add
            </button>
          </div>
        </form>

        {/* List View */}
        <div className="space-y-2">
          {dataList.length === 0 && (
            <p className="text-gray-500 italic">No items added yet.</p>
          )}
          {dataList.map((item, index) => (
            <div
              key={index}
              className="p-3 bg-[#2a2a2a] rounded border-l-4 border-cyan-500 flex justify-between items-center animate-fadeIn"
            >
              <span>
                <strong className="text-white">{item.title}</strong>:{" "}
                <span className="text-gray-400">{item.desc}</span>
              </span>
              <span className="text-xs text-gray-600">#{index + 1}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- Section 2: useRef Examples --- */}
      <section className="bg-[#1e1e1e] p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-6 text-purple-400">
          2. useRef Interactions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 1. Change Title */}
          <div className="p-4 border border-gray-700 rounded bg-[#252525]">
            <h3
              ref={titleRef}
              className="text-lg font-bold text-white mb-4 transition-colors"
            >
              Original Title
            </h3>
            <button
              onClick={handleChangeTitle}
              className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded"
            >
              Change Title (Ref)
            </button>
          </div>

          {/* 2. Hide/Show */}
          <div className="p-4 border border-gray-700 rounded bg-[#252525]">
            <div
              ref={boxRef}
              className="h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded mb-4 flex items-center justify-center text-white font-bold"
            >
              I am here!
            </div>
            <button
              onClick={toggleVisibility}
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
            >
              Toggle Visibility (Ref)
            </button>
          </div>

          {/* 3. Get Value */}
          <div className="p-4 border border-gray-700 rounded bg-[#252525]">
            <input
              ref={inputRef}
              placeholder="Type something..."
              className="w-full p-2 mb-4 bg-[#333] text-white rounded border border-gray-600"
            />
            <button
              onClick={handleGetValue}
              className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded"
            >
              Get Value (Ref)
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Day27;
