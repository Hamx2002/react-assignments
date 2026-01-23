import { useState, useEffect } from "react";

function Day25() {
  // --- 1. Form Handling State ---
  const [user, setUser] = useState("");
  const [formData, setFormData] = useState(null); // Changed to null to differentiate initial state

  // --- 2. Recipe Fetch State ---
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- 1. Form Handlers ---
  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Logic from prompt: check if even or odd and set data accordingly
    const num = Number(user);
    // If not a number, handle gracefully, but assuming valid number input as per prompt
    setFormData(num);
  };

  // --- 2. Recipe Fetch ---
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch("https://dummyjson.com/recipes");
        const data = await res.json();
        setRecipes(data.recipes.slice(0, 6)); // Display 6 recipes
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch recipes", err);
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div className="space-y-12 p-6 max-w-6xl mx-auto">
      <header className="border-b border-gray-700 pb-4">
        <h1 className="text-3xl font-bold text-white mb-2">
          Day 25 Assignment
        </h1>
        <p className="text-gray-400">Form Handling & Recipe API</p>
      </header>

      {/* --- Task 1: Form Handling --- */}
      <section className="bg-[#1e1e1e] p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-6 text-pink-400">
          1. Even/Odd Number Form
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4 items-start md:items-center"
        >
          <input
            onChange={handleChange}
            type="number"
            placeholder="Enter the Number"
            value={user}
            className="bg-white text-black p-3 rounded w-full md:w-[600px] focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button
            type="submit"
            className="bg-pink-600 text-white px-6 py-3 rounded hover:bg-pink-700 transition font-bold"
          >
            Check
          </button>
        </form>

        <div className="mt-8 p-6 bg-[#2a2a2a] rounded border border-gray-700">
          <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">
            Result:
          </h3>
          <h1 className="text-4xl font-bold text-white">
            {formData !== null ? (
              formData % 2 === 0 ? (
                `Even ${formData}`
              ) : (
                "Odd Number"
              )
            ) : (
              <span className="text-gray-600 italic">
                No number submitted yet...
              </span>
            )}
          </h1>
        </div>
      </section>

      {/* --- Task 2: Recipe API --- */}
      <section className="bg-[#1e1e1e] p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-6 text-orange-400">
          2. Recipes (DummyJSON)
        </h2>

        {loading ? (
          <div className="text-center py-10 text-orange-300 animate-pulse">
            Loading Delicious Recipes...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-[#2a2a2a] rounded-xl overflow-hidden shadow-md hover:transform hover:scale-105 transition duration-300"
              >
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg text-white mb-1">
                    {recipe.name}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                    <span>⭐ {recipe.rating}</span>
                    <span>{recipe.cuisine}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recipe.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-700 text-xs rounded-full text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Day25;
