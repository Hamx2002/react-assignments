import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "../contexts/ThemeContext";
import { UserContext, UserProvider } from "../contexts/UserContext";
import { LanguageContext, LanguageProvider } from "../contexts/LanguageContext";
import { CartContext, CartProvider } from "../contexts/CartContext";
import {
  AppSettingsContext,
  AppSettingsProvider,
} from "../contexts/AppSettingsContext";

// --- Sub-components (Consumers) ---

// Task 1: Theme Consumer
const ThemeSection = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className={`p-6 rounded border transition-colors duration-300 ${theme === "dark" ? "bg-gray-800 text-white border-gray-600" : "bg-white text-gray-900 border-gray-300"}`}
    >
      <h3 className="text-lg font-bold mb-2">1. Theme Switcher</h3>
      <p className="mb-4">
        Current Theme: <span className="uppercase font-mono">{theme}</span>
      </p>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Toggle Theme
      </button>
    </div>
  );
};

// Task 2: User Consumer
const UserSection = () => {
  const { userName, login, logout } = useContext(UserContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const name = e.target.elements.username.value;
    if (name) login(name);
  };

  return (
    <div className="p-6 rounded border border-gray-700 bg-[#1e1e1e]">
      <h3 className="text-lg font-bold mb-2 text-green-400">
        2. User Login State
      </h3>
      <div className="flex justify-between items-center mb-4 p-3 bg-black/30 rounded">
        <span>
          Welcome, <strong>{userName}</strong>
        </span>
        {userName !== "Guest" && (
          <button
            onClick={logout}
            className="text-xs text-red-400 hover:text-red-300"
          >
            Logout
          </button>
        )}
      </div>
      {userName === "Guest" && (
        <form onSubmit={handleLogin} className="flex gap-2">
          <input
            name="username"
            placeholder="Enter Name"
            className="p-2 rounded bg-gray-700 text-white border-none outline-none flex-1"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Login
          </button>
        </form>
      )}
    </div>
  );
};

// Task 3: Language Consumer
const LanguageSection = () => {
  const { language, switchLanguage, texts } = useContext(LanguageContext);
  return (
    <div className="p-6 rounded border border-gray-700 bg-[#1e1e1e]">
      <h3 className="text-lg font-bold mb-2 text-yellow-400">
        3. Language Selector
      </h3>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => switchLanguage("EN")}
          className={`px-3 py-1 rounded text-sm ${language === "EN" ? "bg-yellow-500 text-black" : "bg-gray-700"}`}
        >
          EN
        </button>
        <button
          onClick={() => switchLanguage("TA")}
          className={`px-3 py-1 rounded text-sm ${language === "TA" ? "bg-yellow-500 text-black" : "bg-gray-700"}`}
        >
          TA
        </button>
      </div>
      <div className="p-4 bg-gray-800 rounded">
        <h4 className="text-xl font-bold">{texts.welcome}</h4>
        <p className="text-gray-400">{texts.description}</p>
      </div>
    </div>
  );
};

// Task 4: Cart Consumer
const Navbar = () => {
  const { cartCount } = useContext(CartContext);
  return (
    <div className="bg-gray-900 p-2 rounded mb-2 flex justify-between px-4">
      <span>MyStore</span>
      <span>🛒 Cart: {cartCount}</span>
    </div>
  );
};
const ProductList = () => {
  const { addToCart } = useContext(CartContext);
  return (
    <button
      onClick={addToCart}
      className="w-full py-2 bg-pink-600 rounded text-white hover:bg-pink-700"
    >
      Add to Cart
    </button>
  );
};

const CartSection = () => {
  return (
    <div className="p-6 rounded border border-gray-700 bg-[#1e1e1e]">
      <h3 className="text-lg font-bold mb-4 text-pink-400">
        4. Global Cart Count
      </h3>
      <Navbar />
      <div className="p-4 bg-gray-800 rounded text-center">
        <p className="mb-2">Awesome Product</p>
        <ProductList />
      </div>
    </div>
  );
};

// Task 5: App Settings
const AppSettingsSection = () => {
  const { settings, updateTheme, updateFontSize } =
    useContext(AppSettingsContext);
  return (
    <div className="p-6 rounded border border-gray-700 bg-[#1e1e1e]">
      <h3 className="text-lg font-bold mb-4 text-purple-400">
        5. App Settings
      </h3>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-xs text-gray-400 mb-1">
            Theme Color
          </label>
          <select
            value={settings.theme}
            onChange={(e) => updateTheme(e.target.value)}
            className="w-full p-2 bg-gray-700 rounded text-white border-none outline-none"
          >
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
          </select>
        </div>
        <div>
          <label className="block text-xs text-gray-400 mb-1">Font Size</label>
          <select
            value={settings.fontSize}
            onChange={(e) => updateFontSize(e.target.value)}
            className="w-full p-2 bg-gray-700 rounded text-white border-none outline-none"
          >
            <option value="14px">Small (14px)</option>
            <option value="16px">Medium (16px)</option>
            <option value="20px">Large (20px)</option>
          </select>
        </div>
      </div>

      <div
        className="p-4 rounded transition-all duration-300"
        style={{
          backgroundColor:
            settings.theme === "blue"
              ? "#1e3a8a"
              : settings.theme === "red"
                ? "#7f1d1d"
                : "#14532d",
          fontSize: settings.fontSize,
        }}
      >
        Preview Content Area
        <p className="opacity-80 mt-1">This box reacts to global settings.</p>
      </div>
    </div>
  );
};

// --- Main Page Component ---
function Day29() {
  return (
    <div className="space-y-12 p-6 max-w-6xl mx-auto">
      <header className="border-b border-gray-700 pb-4">
        <h1 className="text-3xl font-bold text-white mb-2">
          Day 29 Assignment
        </h1>
        <p className="text-gray-400">Context API Implementations</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ThemeProvider>
          <ThemeSection />
        </ThemeProvider>

        <UserProvider>
          <UserSection />
        </UserProvider>

        <LanguageProvider>
          <LanguageSection />
        </LanguageProvider>

        <CartProvider>
          <CartSection />
        </CartProvider>

        <AppSettingsProvider>
          <AppSettingsSection />
        </AppSettingsProvider>
      </div>
    </div>
  );
}

export default Day29;
